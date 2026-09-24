-- «Математика в клетку» — схема базы Cloudflare D1
-- Применение:  wrangler d1 execute mvk-db --remote --file=db/schema.sql
-- (или вставить содержимое в консоль D1 в панели Cloudflare)

-- Семья = один родитель, вошедший через Gmail. owner_email — его адрес.
-- active = 0 — семья отключена администратором (см. /admin): войти нельзя,
-- но данные (дети, прогресс, PIN) сохраняются и админ может включить её обратно.
CREATE TABLE IF NOT EXISTS families (
  id          TEXT PRIMARY KEY,
  owner_email TEXT UNIQUE NOT NULL,
  created_at  INTEGER NOT NULL,
  last_login  INTEGER,
  active      INTEGER NOT NULL DEFAULT 1
);
-- Если база уже создана раньше (до версии 2.1.1), выполните один раз в консоли D1:
--   ALTER TABLE families ADD COLUMN active INTEGER NOT NULL DEFAULT 1;

-- Gmail ребёнка -> семья. Заполняется автоматически, когда родитель
-- вписывает адрес ребёнка в кабинете родителя (см. PUT /api/doc kids/list).
CREATE TABLE IF NOT EXISTS kid_emails (
  email     TEXT PRIMARY KEY,
  family_id TEXT NOT NULL
);

-- Данные семьи в виде документов:
--   kids/list        — список детей {id,name,pin,grade,email,active}, пароль родителя.
--                       active:false у ребёнка — он отключён администратором (см. /admin):
--                       не виден и не выбирается в приложении, но прогресс не стирается.
--   progress/<kidId> — прогресс одного ребёнка (практика, тесты, диагностика)
CREATE TABLE IF NOT EXISTS docs (
  family_id  TEXT NOT NULL,
  path       TEXT NOT NULL,
  data       TEXT NOT NULL,
  updated_at INTEGER NOT NULL,
  PRIMARY KEY (family_id, path)
);

-- Обращения в поддержку (вопросы, предложения, ошибки, запросы PIN)
CREATE TABLE IF NOT EXISTS support (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at INTEGER NOT NULL,
  family_id  TEXT,
  email      TEXT,
  kind       TEXT NOT NULL,          -- question | idea | bug | pin
  message    TEXT NOT NULL,
  meta       TEXT,                   -- JSON: версия, экран, ребёнок, браузер
  status     TEXT NOT NULL DEFAULT 'new',   -- new | done
  emailed    INTEGER NOT NULL DEFAULT 0
);

-- Ограничение частоты (сообщения в поддержку, попытки входа в админку)
CREATE TABLE IF NOT EXISTS attempts (
  k  TEXT NOT NULL,
  ts INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS attempts_k ON attempts(k, ts);
