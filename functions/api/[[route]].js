/**
 * «Математика в клетку» — серверная часть (Cloudflare Pages Functions + D1).
 * Один файл обслуживает все адреса /api/*.
 *
 * Привязки и переменные (Settings → Functions / Environment variables):
 *   DB                   — привязка D1 (имя именно «DB»)
 *   GOOGLE_CLIENT_ID     — OAuth Client ID из Google Cloud
 *   GOOGLE_CLIENT_SECRET — OAuth Client Secret            (секрет)
 *   SESSION_SECRET       — любая длинная случайная строка (секрет)
 *   ADMIN_PASSWORD       — ваш мастер-пароль для /admin   (секрет)
 *   RESEND_API_KEY       — ключ resend.com                (секрет)
 *   SUPPORT_TO           — куда слать письма поддержки (по умолчанию fnemoy@gmail.com)
 *   MAIL_FROM            — от кого (по умолчанию onboarding@resend.dev)
 *   AUTO_SEND_PINS       — «1»: запрос PIN сразу уходит письмом родителю (нужен свой домен в Resend)
 */

const DEFAULT_TO = 'fnemoy@gmail.com';
const DEFAULT_FROM = 'Математика в клетку <onboarding@resend.dev>';
const SESSION_TTL = 30 * 24 * 3600;      // сессия входа: 30 дней
const ADMIN_TTL = 12 * 3600;             // сессия админа: 12 часов
const DOC_MAX = 400 * 1024;              // максимум на один документ
const DOC_PATH = /^(kids\/list|progress\/[A-Za-z0-9_-]{1,40})$/;
const EMAIL_RE = /^[^\s@<>"]{1,64}@[^\s@<>"]{1,190}\.[^\s@<>"]{2,}$/;

/* ---------- ответы ---------- */
function json(obj, status = 200, headers = {}) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers },
  });
}
const bad = (status, error) => json({ ok: false, error }, status);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------- подпись cookie ---------- */
const enc = new TextEncoder();
function b64u(bytes) {
  let s = ''; bytes = new Uint8Array(bytes);
  for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function unb64u(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/'); while (str.length % 4) str += '=';
  const bin = atob(str); const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i); return out;
}
async function hmacKey(secret) {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
async function sign(payload, secret) {
  const body = b64u(enc.encode(JSON.stringify(payload)));
  const sig = await crypto.subtle.sign('HMAC', await hmacKey(secret), enc.encode(body));
  return body + '.' + b64u(sig);
}
async function verify(token, secret) {
  try {
    const [body, sig] = String(token || '').split('.');
    if (!body || !sig) return null;
    const ok = await crypto.subtle.verify('HMAC', await hmacKey(secret), unb64u(sig), enc.encode(body));
    if (!ok) return null;
    const p = JSON.parse(new TextDecoder().decode(unb64u(body)));
    if (!p.exp || p.exp < Date.now() / 1000) return null;
    return p;
  } catch (e) { return null; }
}
function timingSafeEqual(a, b) {
  a = enc.encode(String(a)); b = enc.encode(String(b));
  let d = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) d |= (a[i] || 0) ^ (b[i] || 0);
  return d === 0;
}
function getCookie(req, name) {
  const m = (req.headers.get('cookie') || '').match(new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : '';
}
function setCookie(name, value, maxAge) {
  return `${name}=${encodeURIComponent(value)}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}

/* ---------- сессии ---------- */
async function getSession(req, env) {
  if (!env.SESSION_SECRET) return null;
  return verify(getCookie(req, 'mvk_sid'), env.SESSION_SECRET);   // {e,f,r,exp}
}
async function isAdmin(req, env) {
  if (!env.SESSION_SECRET) return false;
  const p = await verify(getCookie(req, 'mvk_adm'), env.SESSION_SECRET);
  return !!(p && p.a === 1);
}

/* Семья, отключённая администратором (families.active = 0), не может входить и
   синхронизировать данные — но ничего не удаляется, это обратимо из /admin. */
async function familyActive(env, familyId) {
  try {
    const f = await env.DB.prepare('SELECT active FROM families WHERE id = ?').bind(familyId).first();
    return !f || f.active !== 0;
  } catch (e) {
    return true; // колонки active ещё нет (миграция не выполнена) — считаем всех активными
  }
}

/* ---------- почта (Resend) ---------- */
async function sendMail(env, { to, subject, html, replyTo }) {
  if (!env.RESEND_API_KEY) return false;
  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: 'Bearer ' + env.RESEND_API_KEY },
      body: JSON.stringify({
        from: env.MAIL_FROM || DEFAULT_FROM, to: [to], subject, html,
        ...(replyTo && EMAIL_RE.test(replyTo) ? { reply_to: replyTo } : {}),
      }),
    });
    return r.ok;
  } catch (e) { return false; }
}

/* ---------- ограничение частоты ---------- */
async function tooMany(env, key, limit, windowSec) {
  const since = Date.now() - windowSec * 1000;
  await env.DB.prepare('DELETE FROM attempts WHERE ts < ?').bind(Date.now() - 24 * 3600 * 1000).run();
  const row = await env.DB.prepare('SELECT COUNT(*) AS n FROM attempts WHERE k = ? AND ts > ?').bind(key, since).first();
  return (row && row.n) >= limit;
}
const noteAttempt = (env, key) => env.DB.prepare('INSERT INTO attempts (k, ts) VALUES (?, ?)').bind(key, Date.now()).run();
const clientIp = req => req.headers.get('cf-connecting-ip') || 'ip?';

/* ---------- утилиты семьи ---------- */
const newId = () => 'f' + crypto.randomUUID().replace(/-/g, '').slice(0, 16);

async function loginByEmail(env, email) {
  email = email.toLowerCase();
  const now = Date.now();
  let fam = await env.DB.prepare('SELECT id FROM families WHERE owner_email = ?').bind(email).first();
  if (fam) {
    await env.DB.prepare('UPDATE families SET last_login = ? WHERE id = ?').bind(now, fam.id).run();
    return { f: fam.id, r: 'parent' };
  }
  const kid = await env.DB.prepare('SELECT family_id FROM kid_emails WHERE email = ?').bind(email).first();
  if (kid) return { f: kid.family_id, r: 'kid' };
  const id = newId();
  await env.DB.prepare('INSERT INTO families (id, owner_email, created_at, last_login) VALUES (?, ?, ?, ?)').bind(id, email, now, now).run();
  return { f: id, r: 'parent' };
}

async function readKids(env, familyId) {
  const row = await env.DB.prepare("SELECT data FROM docs WHERE family_id = ? AND path = 'kids/list'").bind(familyId).first();
  try { return row ? JSON.parse(row.data) : { kids: [], parentPass: '' }; } catch (e) { return { kids: [], parentPass: '' }; }
}

/* ============================ МАРШРУТЫ ============================ */

/* --- вход через Google --- */
async function authGoogle(req, env, url) {
  if (!env.GOOGLE_CLIENT_ID || !env.SESSION_SECRET) return bad(503, 'Вход через Google ещё не настроен');
  const state = b64u(crypto.getRandomValues(new Uint8Array(18)));
  const q = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    redirect_uri: url.origin + '/api/auth/callback',
    response_type: 'code',
    scope: 'openid email',
    state,
    prompt: 'select_account',
  });
  return new Response(null, {
    status: 302,
    headers: {
      location: 'https://accounts.google.com/o/oauth2/v2/auth?' + q,
      'set-cookie': setCookie('mvk_state', state, 600),
      'cache-control': 'no-store',
    },
  });
}

async function authCallback(req, env, url) {
  const back = (msg) => new Response(null, { status: 302, headers: { location: '/?login_error=' + encodeURIComponent(msg) } });
  if (!env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET || !env.SESSION_SECRET) return back('not_configured');
  const code = url.searchParams.get('code'), state = url.searchParams.get('state');
  if (url.searchParams.get('error')) return back('denied');
  if (!code || !state || !timingSafeEqual(state, getCookie(req, 'mvk_state'))) return back('state');
  let tok;
  try {
    const r = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code, client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET,
        redirect_uri: url.origin + '/api/auth/callback', grant_type: 'authorization_code',
      }),
    });
    tok = await r.json();
    if (!r.ok || !tok.id_token) return back('token');
  } catch (e) { return back('token'); }
  // id_token получен напрямую от Google по TLS — достаточно проверить aud/iss/срок
  let claims;
  try { claims = JSON.parse(new TextDecoder().decode(unb64u(tok.id_token.split('.')[1]))); } catch (e) { return back('token'); }
  if (claims.aud !== env.GOOGLE_CLIENT_ID || !/^(https:\/\/)?accounts\.google\.com$/.test(claims.iss || '') ||
      !claims.email || claims.email_verified !== true || (claims.exp || 0) < Date.now() / 1000) return back('claims');
  const who = await loginByEmail(env, claims.email);
  if (!(await familyActive(env, who.f))) return back('disabled');
  const token = await sign({ e: claims.email.toLowerCase(), f: who.f, r: who.r, exp: Math.floor(Date.now() / 1000) + SESSION_TTL }, env.SESSION_SECRET);
  const h = new Headers({ location: '/' });
  h.append('set-cookie', setCookie('mvk_sid', token, SESSION_TTL));
  h.append('set-cookie', setCookie('mvk_state', '', 0));
  return new Response(null, { status: 302, headers: h });
}

function logout() {
  return json({ ok: true }, 200, { 'set-cookie': setCookie('mvk_sid', '', 0) });
}

async function me(req, env) {
  if (!env.DB) return json({ ok: false, configured: false }, 401);
  const s = await getSession(req, env);
  if (!s) return json({ ok: false, configured: true, google: !!env.GOOGLE_CLIENT_ID }, 401);
  if (!(await familyActive(env, s.f))) return json({ ok: false, configured: true, google: !!env.GOOGLE_CLIENT_ID, disabled: true }, 401);
  return json({ ok: true, email: s.e, role: s.r, familyId: s.f });
}

/* --- документы семьи --- */
async function docRoute(req, env, url) {
  const s = await getSession(req, env);
  if (!s) return bad(401, 'Нужно войти');
  if (!(await familyActive(env, s.f))) return bad(403, 'Семья отключена администратором');
  const path = url.searchParams.get('path') || '';
  if (!DOC_PATH.test(path)) return bad(400, 'Неверный путь');
  if (req.method === 'GET') {
    const row = await env.DB.prepare('SELECT data, updated_at FROM docs WHERE family_id = ? AND path = ?').bind(s.f, path).first();
    if (!row) return json({ ok: true, exists: false });
    let data = null; try { data = JSON.parse(row.data); } catch (e) {}
    return json({ ok: true, exists: true, data, updatedAt: row.updated_at });
  }
  if (req.method === 'PUT') {
    if (path === 'kids/list' && s.r !== 'parent') return bad(403, 'Список детей меняет только родитель');
    const text = await req.text();
    if (text.length > DOC_MAX) return bad(413, 'Слишком большой документ');
    let data; try { data = JSON.parse(text); } catch (e) { return bad(400, 'Не JSON'); }
    if (!data || typeof data !== 'object') return bad(400, 'Ожидался объект');
    await env.DB.prepare(
      'INSERT INTO docs (family_id, path, data, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(family_id, path) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at'
    ).bind(s.f, path, JSON.stringify(data), Date.now()).run();
    if (path === 'kids/list') {
      // обновляем «Gmail ребёнка -> семья»
      await env.DB.prepare('DELETE FROM kid_emails WHERE family_id = ?').bind(s.f).run();
      for (const k of (Array.isArray(data.kids) ? data.kids : [])) {
        const em = String((k && k.email) || '').trim().toLowerCase();
        if (EMAIL_RE.test(em)) {
          const own = await env.DB.prepare('SELECT 1 AS x FROM families WHERE owner_email = ?').bind(em).first();
          if (!own) await env.DB.prepare('INSERT OR REPLACE INTO kid_emails (email, family_id) VALUES (?, ?)').bind(em, s.f).run();
        }
      }
    }
    return json({ ok: true });
  }
  return bad(405, 'Метод не поддерживается');
}

/* --- поддержка --- */
const KINDS = { question: 'Вопрос', idea: 'Предложение', bug: 'Ошибка', pin: 'Запрос PIN/пароля' };

async function supportRoute(req, env) {
  if (req.method !== 'POST') return bad(405, 'Только POST');
  let b; try { b = await req.json(); } catch (e) { return bad(400, 'Не JSON'); }
  if (b.website) return json({ ok: true });                           // ловушка для ботов
  const message = String(b.message || '').trim().slice(0, 3000);
  if (message.length < 3) return bad(400, 'Напишите хотя бы пару слов');
  const kind = KINDS[b.kind] && b.kind !== 'pin' ? b.kind : 'question';
  const s = await getSession(req, env);
  const contact = String(b.contact || '').trim().slice(0, 200);
  const email = (s && s.e) || (EMAIL_RE.test(contact) ? contact : '');
  const key = 'sup:' + (email || clientIp(req));
  if (await tooMany(env, key, 5, 3600)) return bad(429, 'Слишком много сообщений подряд, попробуйте позже');
  await noteAttempt(env, key);
  const meta = JSON.stringify({
    version: String(b.version || '').slice(0, 20), screen: String(b.screen || '').slice(0, 60),
    kid: String(b.kid || '').slice(0, 40), ua: (req.headers.get('user-agent') || '').slice(0, 200), contact,
  });
  const res = await env.DB.prepare('INSERT INTO support (created_at, family_id, email, kind, message, meta) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(Date.now(), s ? s.f : null, email, kind, message, meta).run();
  const id = res.meta && res.meta.last_row_id;
  const m = JSON.parse(meta);
  const sent = await sendMail(env, {
    to: env.SUPPORT_TO || DEFAULT_TO,
    subject: `[Математика в клетку] ${KINDS[kind]}${email ? ' от ' + email : ''}`,
    replyTo: email,
    html: `<p style="white-space:pre-wrap;font-size:15px">${esc(message)}</p><hr>` +
      `<p style="color:#666;font-size:13px">Тип: ${esc(KINDS[kind])}<br>От: ${esc(email || 'не указано')}${contact && contact !== email ? ' (контакт: ' + esc(contact) + ')' : ''}<br>` +
      `Ребёнок: ${esc(m.kid || '—')} · экран: ${esc(m.screen || '—')} · версия: ${esc(m.version || '—')}<br>Браузер: ${esc(m.ua)}</p>`,
  });
  if (sent && id) await env.DB.prepare('UPDATE support SET emailed = 1 WHERE id = ?').bind(id).run();
  return json({ ok: true, emailed: sent });
}

/* --- запрос PIN / пароля: только родитель, вошедший через Gmail --- */
async function pinMail(env, ownerEmail, famId) {
  const d = await readKids(env, famId);
  const rows = (d.kids || []).map(k => `<tr><td style="padding:4px 12px 4px 0">${esc(k.name)}</td><td><b style="font-size:18px;letter-spacing:2px">${esc(k.pin)}</b></td></tr>`).join('');
  return sendMail(env, {
    to: ownerEmail,
    subject: 'Математика в клетку — ваши PIN-коды',
    html: `<p>Вы запросили PIN-коды в службе поддержки «Математики в клетку».</p>` +
      `<table>${rows || '<tr><td>детей пока нет</td></tr>'}</table>` +
      `<p>Пароль кабинета родителя: <b style="font-size:18px;letter-spacing:2px">${esc(d.parentPass || 'не задан')}</b></p>` +
      `<p style="color:#666;font-size:13px">Не передавайте это письмо детям, если не хотите, чтобы они открывали кабинет родителя.</p>`,
  });
}

async function pinRequest(req, env) {
  if (req.method !== 'POST') return bad(405, 'Только POST');
  const s = await getSession(req, env);
  if (!s) return bad(401, 'Нужно войти через Gmail');
  if (s.r !== 'parent') return bad(403, 'PIN может запросить только родитель');
  let b = {}; try { b = await req.json(); } catch (e) {}
  const key = 'pin:' + s.f;
  if (await tooMany(env, key, 3, 24 * 3600)) return bad(429, 'Сегодня вы уже отправляли запрос');
  await noteAttempt(env, key);
  const what = String(b.what || '').slice(0, 300);
  const message = 'Родитель просит прислать PIN-коды детей и/или пароль кабинета родителя.' + (what ? '\nКомментарий: ' + what : '');
  const ins = await env.DB.prepare('INSERT INTO support (created_at, family_id, email, kind, message, meta) VALUES (?, ?, ?, ?, ?, ?)')
    .bind(Date.now(), s.f, s.e, 'pin', message, JSON.stringify({ ua: (req.headers.get('user-agent') || '').slice(0, 200) })).run();
  const sent = await sendMail(env, {
    to: env.SUPPORT_TO || DEFAULT_TO, replyTo: s.e,
    subject: `[Математика в клетку] Запрос PIN от ${s.e}`,
    html: `<p>${esc(message)}</p><p>Родитель (подтверждён Gmail): <b>${esc(s.e)}</b>.<br>Отправить PIN можно из панели /admin.</p>`,
  });
  if (sent && ins.meta && ins.meta.last_row_id) await env.DB.prepare('UPDATE support SET emailed = 1 WHERE id = ?').bind(ins.meta.last_row_id).run();
  let auto = false;
  if (env.AUTO_SEND_PINS === '1') auto = await pinMail(env, s.e, s.f);
  return json({ ok: true, auto });
}

/* --- админка --- */
async function adminLogin(req, env) {
  if (req.method !== 'POST') return bad(405, 'Только POST');
  if (!env.ADMIN_PASSWORD || !env.SESSION_SECRET) return bad(503, 'Админ-пароль не задан');
  const key = 'adm:' + clientIp(req);
  if (await tooMany(env, key, 8, 900)) return bad(429, 'Слишком много попыток, подождите 15 минут');
  let b = {}; try { b = await req.json(); } catch (e) {}
  if (!timingSafeEqual(String(b.password || ''), env.ADMIN_PASSWORD)) { await noteAttempt(env, key); return bad(401, 'Неверный пароль'); }
  const token = await sign({ a: 1, exp: Math.floor(Date.now() / 1000) + ADMIN_TTL }, env.SESSION_SECRET);
  return json({ ok: true }, 200, { 'set-cookie': setCookie('mvk_adm', token, ADMIN_TTL) });
}

function progressSummary(p) {
  if (!p) return { topics: 0, tests: 0, diag: false, lastTs: 0 };
  const st = p.state || p;
  const tests = st.tests || {}; let done = 0, n = 0, last = 0;
  Object.keys(tests).forEach(k => { const t = tests[k]; if (!t) return; n++; if (t.total && t.best / t.total >= 0.8) done++; if (t.ts > last) last = t.ts; });
  if (st.diag && st.diag.ts > last) last = st.diag.ts;
  return { topics: done, tests: n, diag: !!st.diag, lastTs: last };
}

async function adminOverview(env) {
  let fams;
  try {
    fams = (await env.DB.prepare('SELECT id, owner_email, created_at, last_login, active FROM families ORDER BY created_at DESC').all()).results || [];
  } catch (e) { // миграция с колонкой active ещё не выполнена
    fams = (await env.DB.prepare('SELECT id, owner_email, created_at, last_login FROM families ORDER BY created_at DESC').all()).results || [];
  }
  const docs = (await env.DB.prepare('SELECT family_id, path, data FROM docs').all()).results || [];
  const byFam = {};
  docs.forEach(d => { (byFam[d.family_id] = byFam[d.family_id] || {})[d.path] = d.data; });
  const out = fams.map(f => {
    const dd = byFam[f.id] || {};
    let list = { kids: [], parentPass: '' }; try { if (dd['kids/list']) list = JSON.parse(dd['kids/list']); } catch (e) {}
    const kids = (list.kids || []).map(k => {
      let p = null; try { if (dd['progress/' + k.id]) p = JSON.parse(dd['progress/' + k.id]); } catch (e) {}
      return { id: k.id, name: k.name, pin: k.pin, grade: k.grade || null, email: k.email || '', active: k.active !== false, ...progressSummary(p) };
    });
    return { id: f.id, email: f.owner_email, createdAt: f.created_at, lastLogin: f.last_login, active: f.active !== 0, parentPass: list.parentPass || '', kids };
  });
  return json({ ok: true, families: out });
}

async function adminRoute(req, env, url, parts) {
  const sub = parts[1] || '';
  if (sub === 'login') return adminLogin(req, env);
  if (sub === 'logout') return json({ ok: true }, 200, { 'set-cookie': setCookie('mvk_adm', '', 0) });
  if (!(await isAdmin(req, env))) return bad(401, 'Нужен вход администратора');
  if (sub === 'overview') return adminOverview(env);
  if (sub === 'support' && req.method === 'GET') {
    const rows = (await env.DB.prepare('SELECT id, created_at, family_id, email, kind, message, meta, status, emailed FROM support ORDER BY id DESC LIMIT 200').all()).results || [];
    return json({ ok: true, items: rows.map(r => { let m = {}; try { m = JSON.parse(r.meta || '{}'); } catch (e) {} return { ...r, meta: m }; }) });
  }
  if (sub === 'support' && req.method === 'POST') {
    const b = await req.json().catch(() => ({}));
    const st = b.status === 'new' ? 'new' : 'done';
    await env.DB.prepare('UPDATE support SET status = ? WHERE id = ?').bind(st, +b.id || 0).run();
    return json({ ok: true });
  }
  if (sub === 'send-pins' && req.method === 'POST') {
    const b = await req.json().catch(() => ({}));
    const f = await env.DB.prepare('SELECT id, owner_email FROM families WHERE id = ?').bind(String(b.familyId || '')).first();
    if (!f) return bad(404, 'Семья не найдена');
    const ok = await pinMail(env, f.owner_email, f.id);
    return json({ ok, to: f.owner_email });
  }
  /* «Удаление» семьи или ребёнка — это отключение (active=false), а не стирание
     данных: прогресс, PIN и вся история остаются в базе, и админ может включить
     их обратно в любой момент. Отключённая семья не может войти на сайт;
     отключённый ребёнок просто не показывается в приложении. */
  if (sub === 'set-family-active' && req.method === 'POST') {
    const b = await req.json().catch(() => ({}));
    const famId = String(b.familyId || '');
    const active = b.active ? 1 : 0;
    const f = await env.DB.prepare('SELECT id FROM families WHERE id = ?').bind(famId).first();
    if (!f) return bad(404, 'Семья не найдена');
    await env.DB.prepare('UPDATE families SET active = ? WHERE id = ?').bind(active, famId).run();
    return json({ ok: true, active: !!active });
  }
  if (sub === 'set-kid-active' && req.method === 'POST') {
    const b = await req.json().catch(() => ({}));
    const famId = String(b.familyId || ''), kidId = String(b.kidId || '');
    const active = !!b.active;
    if (!famId || !kidId) return bad(400, 'Не хватает данных');
    const list = await readKids(env, famId);
    const kid = (list.kids || []).find(k => k.id === kidId);
    if (!kid) return bad(404, 'Ребёнок не найден');
    kid.active = active;
    await env.DB.prepare(
      'INSERT INTO docs (family_id, path, data, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(family_id, path) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at'
    ).bind(famId, 'kids/list', JSON.stringify(list), Date.now()).run();
    return json({ ok: true, active });
  }
  return bad(404, 'Нет такого адреса');
}

/* ============================ ВХОД ============================ */
export async function onRequest(context) {
  const { request: req, env } = context;
  const url = new URL(req.url);
  const parts = url.pathname.replace(/^\/api\/?/, '').split('/').filter(Boolean);
  const route = parts[0] || '';
  try {
    if (!env.DB) return json({ ok: false, configured: false, error: 'База данных D1 не подключена' }, route === 'me' ? 401 : 503);
    if (route === 'me') return me(req, env);
    if (route === 'auth' && parts[1] === 'google') return authGoogle(req, env, url);
    if (route === 'auth' && parts[1] === 'callback') return authCallback(req, env, url);
    if (route === 'auth' && parts[1] === 'logout' && req.method === 'POST') return logout();
    if (route === 'doc') return docRoute(req, env, url);
    if (route === 'support') return supportRoute(req, env);
    if (route === 'pin-request') return pinRequest(req, env);
    if (route === 'admin') return adminRoute(req, env, url, parts);
    return bad(404, 'Нет такого адреса');
  } catch (e) {
    return bad(500, 'Внутренняя ошибка');
  }
}
