/* ===================================================================
   English content for grade 7 (CONTENT_EN) — loaded on demand by
   ensureContentEn() in index.html when the interface language is
   English and a grade-7 topic is opened. Mirrors the structure of
   the Russian CONTENT.<id> objects exactly (same field names, same
   example/task/test counts and order, same ans values) so progress
   saved while answering tasks lines up regardless of language.

   All 9 grade-7 topics (lin, pow, poly, fsu, func, sys, ang, tri, par)
   carry the EXTRA2/EXTRA3 task-only overlay (applies to grades 4-8,
   first identified in 2.47.0 for grade 4) — confirmed via grep before
   translating that NONE of them carry the older EXTRA.<id> overlay
   (that one only exists for 4 grade-5 topics: ord, frac, dec, perc;
   grade 6 also confirmed to have none of them in 2.49.0 — presence or
   absence of the old overlay is not predictable from the grade number
   and must be checked per class). This file's CONTENT_EN.<id> objects
   already contain every example/task fully resolved and flattened in
   the exact final order the Russian runtime produces (32 tasks each),
   so no further overlay logic is needed here.

   Illustrations (SVG figures referenced via __SVG_X__ markers) are
   NOT re-localized in this version — they still show Russian labels
   baked into the SVG itself. Re-drawing every figure in English is a
   separate, much larger task, deferred along with topic/node names
   and cheat-sheet formulas. See CHANGELOG.
   ================================================================= */
(function(){

/* ---------- lin ---------- */
CONTENT_EN.lin = {
  goal: "After this topic, any linear equation — from a simple one to one with parentheses, fractions, and a parameter — will become a clear chain of steps for you, not a puzzle.",
  explain: "<p><b>An equation</b> is an equality with an unknown number. A <b>root</b> of an equation is a value of the unknown for which the equality becomes true. To solve an equation means to find all of its roots.</p>"
  + "<p>Watch how this works:</p><div class='figure'>__SVG_LIN_BALANCE_ANIM__</div>"
  + "<h3>Two properties</h3><ul><li>A term can be moved from one side to the other by <b>changing its sign</b>: x + 5 = 12 → x = 12 − 5.</li><li>Both sides can be multiplied or divided by the same number, <b>not equal to zero</b>: 3x = 15 → x = 5.</li></ul>"
  + "<h3>The algorithm</h3><ul><li>1. Expand the parentheses. If there are fractions, multiply both sides by the common denominator.</li><li>2. Move the terms with x to the left, the numbers to the right.</li><li>3. Combine like terms.</li><li>4. Divide by the coefficient of x.</li><li>5. Check: substitute the answer into the original equation.</li></ul>"
  + "<h3>How many roots there can be</h3><p>In the equation ax = b: if a ≠ 0, there is exactly one root, x = b : a. If a = 0 and b ≠ 0, there are no roots (0 · x = 5 holds for no x). If a = 0 and b = 0, any number is a root.</p>"
  + "<h3>Equations with fractions</h3><p>If an equation has fractions with a letter in the numerator or a number in the denominator, the most reliable way is to multiply both sides by the common denominator so the fractions disappear. For example, in {x|2} − {x|3} = 1 the common denominator is 6: we multiply each term by 6 and get an ordinary equation with no fractions.</p>"
  + "<h3>Setting up equations from word problems</h3><p>Many word problems are solved like this: denote the unknown by the letter x, express the other quantities through it according to the problem's conditions, set up an equation, and solve it. At the end, always check whether the answer makes sense for the problem (for example, a number of years or objects can't be negative).</p>"
  + "<div class='note'><span class='hand'>Remember</span>Checking is your safety net. It takes 20 seconds and catches almost all sign errors.</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>When expanding parentheses, watch for a number or a minus sign in front of them: 5(x − 2) = 5x − 10 (not 5x − 2), and −(x − 3) = −x + 3.</div>",
  examples: [
    {t:"Solve the equation 3x + 7 = 22.", s:"We move 7 to the right: 3x = 22 − 7 = 15. Divide by 3: x = 5. Check: 3 · 5 + 7 = 22 ✓.<div class='figure'>__SVG_LIN7_EX0_BALANCE3X7__</div>"},
    {t:"Solve the equation 5(x − 2) = 3x + 4.", s:"Expand the parentheses: 5x − 10 = 3x + 4. Move terms: 5x − 3x = 4 + 10, that is, 2x = 14, x = 7. Check: 5 · 5 = 25 and 3 · 7 + 4 = 25 ✓.<div class='figure'>__SVG_LIN7_EX1_BRACKETS__</div>"},
    {t:"Solve the equation {x|3} + 2 = {x|2} − 1.", s:"Multiply both sides by 6: 2x + 12 = 3x − 6. Move terms: 12 + 6 = 3x − 2x, x = 18. Check: 6 + 2 = 8 and 9 − 1 = 8 ✓.<div class='figure'>__SVG_LIN7_EX2_FRAC6A__</div>"},
    {t:"Solve the equation {x|2} − {x|3} = 1.", s:"The common denominator is 6. Multiply each term by 6: 3x − 2x = 6, that is, x = 6. Check: 3 − 2 = 1 ✓.<div class='figure'>__SVG_LIN7_EX3_FRAC6B__</div>"},
    {t:"A box had 3 times as many pencils as a pencil case. When 6 pencils were moved from the box to the pencil case, both containers ended up with the same number of pencils. How many pencils were in the pencil case?", s:"Let there be x pencils in the pencil case, so there are 3x in the box. After the move: the pencil case has x + 6, the box has 3x − 6. By the condition, x + 6 = 3x − 6; 12 = 2x; x = 6. There were 6 pencils in the pencil case.<div class='figure'>__SVG_LIN7_EX4_PENCILS__</div>"}
  ],
  tasks: [
    {q:"Solve the equation x + 9 = 17.", ans:"8", hint:"Move 9 to the right, changing its sign.", sol:"x = 17 − 9 = 8."},
    {q:"Solve the equation 4x = 36.", ans:"9", hint:"Divide both sides by 4.", sol:"x = 36 : 4 = 9."},
    {q:"Solve the equation 2x − 5 = 11.", ans:"8", hint:"First move −5 to the right.", sol:"2x = 16, x = 8."},
    {q:"Solve the equation 7x + 3 = 5x + 15.", ans:"6", hint:"Collect the x terms on the left, the numbers on the right.", sol:"7x − 5x = 15 − 3; 2x = 12; x = 6."},
    {q:"Solve the equation 3(x + 4) = 27.", ans:"5", hint:"You can first divide both sides by 3.", sol:"x + 4 = 9, x = 5."},
    {q:"Solve the equation 6x − 4 = 2x + 8.", ans:"3", hint:"6x − 2x = 8 + 4.", sol:"4x = 12, x = 3."},
    {q:"Solve the equation 5(2x − 1) = 3(x + 3).", ans:"2", hint:"Expand the parentheses on both sides.", sol:"10x − 5 = 3x + 9; 7x = 14; x = 2."},
    {q:"Solve the equation {x|4} = −3.", ans:"-12", hint:"Multiply both sides by 4.", sol:"x = −3 · 4 = −12."},
    {q:"Solve the equation 2x − (x − 3) = 10.", ans:"7", hint:"A minus sign before parentheses flips the signs inside.", sol:"2x − x + 3 = 10; x = 7."},
    {q:"The sum of three consecutive natural numbers is 51. Find the smallest of them.", ans:"16", hint:"Denote the numbers n, n + 1, n + 2.", sol:"n + (n + 1) + (n + 2) = 3n + 3 = 51; 3n = 48; n = 16. The numbers are 16, 17, 18."},
    {q:"Solve the equation {x|2} + {x|4} = 6.", ans:"8", hint:"The common denominator is 4: multiply both sides by 4.", sol:"Multiply by 4: 2x + x = 24; 3x = 24; x = 8. Check: 4 + 2 = 6 ✓."},
    {q:"Solve the equation {x|3} − 1 = {x|5}.", ans:"7.5", hint:"The common denominator is 15.", sol:"Multiply by 15: 5x − 15 = 3x; 2x = 15; x = 7.5. Check: 2.5 − 1 = 1.5 and 1.5 = 1.5 ✓."},
    {q:"Solve the equation 4(x − 3) − 2(x + 1) = 6.", ans:"10", hint:"First expand both parentheses, watching the signs.", sol:"4x − 12 − 2x − 2 = 6; 2x − 14 = 6; 2x = 20; x = 10."},
    {q:"Solve the equation {2x|3} + 1 = {x|2} + 3.", ans:"12", hint:"The common denominator is 6.", sol:"Multiply by 6: 4x + 6 = 3x + 18; x = 12. Check: 8 + 1 = 9 and 6 + 3 = 9 ✓."},
    {q:"For what value of a does the equation ax = 12 have the root x = 4?", ans:"3", hint:"Substitute x = 4 and find a.", sol:"a · 4 = 12; a = 3."},
    {q:"A father is 40 years old, and his son is 10. In how many years will the father be only twice as old as the son?", ans:"20", hint:"In x years: 40 + x = 2(10 + x).", sol:"40 + x = 20 + 2x; 20 = x. In 20 years the father will be 60 and the son 30: 60 = 2 · 30 ✓."},
    {q:"The perimeter of a rectangle is 54 cm, and one side is 3 cm longer than the other. Find the shorter side.", ans:"12", hint:"Denote the shorter side by x, then 2(x + x + 3) = 54.", sol:"2(2x + 3) = 54; 4x + 6 = 54; 4x = 48; x = 12."},
    {q:"How many roots does the equation 3(x + 2) − 5 = 2(x − 1) + x have?", hint:"Expand both sides and combine like terms — notice that x appears on both sides.", sol:"3x + 6 − 5 = 2x − 2 + x; 3x + 1 = 3x − 2. Move x to the left: 3x − 3x = −2 − 1, which gives 0 = −3 — the equality is false for any x. There are no roots.", opts:["No roots","x = −3","x = 3","Infinitely many roots"], ans:0},
    {q:"There are 84 apples in two baskets. If 6 apples are moved from the first basket to the second, the two baskets end up with equal numbers of apples. How many apples were in the first basket?", ans:"48", hint:"Let the first basket have x apples and the second 84 − x. After the move: x − 6 = 84 − x + 6.", sol:"x − 6 = (84 − x) + 6; x − 6 = 90 − x; 2x = 96; x = 48."},
    {q:"Find the root of the equation {x−1|2} + {x+1|3} = 3.", ans:"3.8", hint:"Multiply both sides by the common denominator 6.", sol:"Multiply by 6: 3(x − 1) + 2(x + 1) = 18; 3x − 3 + 2x + 2 = 18; 5x − 1 = 18; 5x = 19; x = 3.8. Check: 2.8/2 + 4.8/3 = 1.4 + 1.6 = 3 ✓."},
    {q:"Solve the equation {x|4} + {x|6} = 5.", ans:"12", hint:"The common denominator is 12: multiply both sides by 12.", sol:"Multiply by 12: 3x + 2x = 60; 5x = 60; x = 12. Check: 3 + 2 = 5."},
    {q:"One box has twice as many toys as another. If 4 toys are moved from the first box to the second, the boxes end up with equal numbers of toys. How many toys were in the first box?", ans:"16", hint:"Denote the number of toys in the second box by x, so the first box has 2x.", sol:"2x − 4 = x + 4; x = 8. The first box had 2 · 8 = 16 toys."},
    {q:"Solve the equation 7 − 3(x − 2) = x + 1.", ans:"3", hint:"A minus sign before parentheses flips the signs inside them.", sol:"7 − 3x + 6 = x + 1; 13 − 3x = x + 1; 12 = 4x; x = 3."},
    {q:"The sum of three consecutive even numbers is 90. Find the largest of them.", ans:"32", hint:"Denote the numbers n, n + 2, n + 4.", sol:"n + (n + 2) + (n + 4) = 3n + 6 = 90; 3n = 84; n = 28. The numbers are 28, 30, 32. The largest is 32."},
    {q:"Masha bought 3 identical notebooks and an album for 45 rubles. In total she paid 225 rubles. How much does one notebook cost (in rubles)?", ans:"60", hint:"Denote the price of a notebook by x and set up an equation for the whole purchase.", sol:"3x + 45 = 225; 3x = 180; x = 60. Answer: 60."},
    {q:"Petya solved the equation 5 − 2(x − 3) = 1 like this: 5 − 2x − 6 = 1; −2x = 2; x = −1. Find his mistake and write down the correct root.", ans:"5", hint:"Check how Petya expanded the parentheses: −2 is multiplied by each term, including by −3.", sol:"The mistake is in expanding the parentheses: −2 · (−3) = +6. Correctly: 5 − 2x + 6 = 1; 11 − 2x = 1; 2x = 10; x = 5. Answer: 5."},
    {q:"For what value of a is 5 a root of the equation 3x + a = 2x − 4?", ans:"-9", hint:"Substitute x = 5 into both sides and you'll get an equation in a.", sol:"3 · 5 + a = 2 · 5 − 4; 15 + a = 6; a = −9. Answer: −9."},
    {q:"A tourist walked from a village to a lake in 3 hours, and came back by the same road on a bicycle in 1 hour at a speed 10 km/h greater. Find the tourist's walking speed (in km/h).", ans:"5", hint:"The route there and back is the same: the walking distance equals the cycling distance.", sol:"Let the walking speed be v, then the cycling speed is v + 10. 3v = 1 · (v + 10); 2v = 10; v = 5. Answer: 5."},
    {q:"Solve the equation {x + 3|4} = {2x − 1|3}. Write the answer as a decimal.", ans:"2.6", hint:"Multiply both sides by the common denominator 12.", sol:"3(x + 3) = 4(2x − 1); 3x + 9 = 8x − 4; 13 = 5x; x = 2.6. Answer: 2.6."},
    {q:"For a party, 20 balloons were bought: red ones at 30 rubles each and blue ones at 45 rubles each. In total, 750 rubles were paid. How many red balloons were bought?", ans:"10", hint:"If there are x red balloons, there are 20 − x blue ones. Set up an equation using the total cost.", sol:"30x + 45(20 − x) = 750; 30x + 900 − 45x = 750; 15x = 150; x = 10. Answer: 10."},
    {q:"On the first day Sasha read a third of a book, on the second day another 40 pages, and he had 60 pages left to read. How many pages are in the book?", ans:"150", hint:"Let the book have x pages. What was read plus what's left makes up the whole book.", sol:"{x|3} + 40 + 60 = x; multiply by 3: x + 300 = 3x; 2x = 300; x = 150. Check: 50 + 40 + 60 = 150. Answer: 150."},
    {q:"For what value of a does the equation (a − 2)x = 7 have no roots?", ans:"2", hint:"Recall when an equation of the form ax = b has no roots.", sol:"The equation kx = 7 has no roots only if k = 0: 0 · x = 7 is false for any x. So a − 2 = 0, a = 2. Answer: 2."}
  ],
  bonus: {q:"A number was chosen. It was doubled, 5 was added, and the result was multiplied by 3 — giving 45. What number was chosen?", ans:"5", hint:"Set up the equation: 3 · (2x + 5) = 45. Or solve &ldquo;working backwards.&rdquo;", sol:"45 : 3 = 15; 15 − 5 = 10; 10 : 2 = 5."},
  test: [
    {q:"Solve the equation 5x − 8 = 17.", ans:"5", sol:"5x = 25, x = 5."},
    {q:"Solve the equation 3(x − 1) = 2x + 5.", ans:"8", sol:"3x − 3 = 2x + 5; x = 8."},
    {q:"Solve the equation 8x + 1 = 6x − 9.", ans:"-5", sol:"2x = −10; x = −5."},
    {q:"Solve the equation {x|5} + 3 = 7.", ans:"20", sol:"{x|5} = 4; x = 20."},
    {q:"How many roots does the equation 2(x + 1) = 2x + 5 have?", opts:["One","None","Infinitely many","Two"], ans:1, sol:"2x + 2 = 2x + 5 → 2 = 5 — false for any x. There are no roots."},
    {q:"A mother is 26 years older than her son, and together they are 50 years old. How old is the son?", ans:"12", sol:"x + (x + 26) = 50; 2x = 24; x = 12."},
    {q:"Solve the equation {x|2} + {x|3} = 5.", ans:"6", sol:"Multiply by 6: 3x + 2x = 30; 5x = 30; x = 6."},
    {q:"There are 4 times as many apple trees in an orchard as pear trees, and there are 60 trees in all. How many apple trees are in the orchard?", ans:"48", sol:"Let there be x pear trees, so 4x apple trees. x + 4x = 60; 5x = 60; x = 12 pear trees, apple trees 4 · 12 = 48."}
  ],
  lab: [
    {t:"Scales and coins", b:"Take a ruler as a balance beam and put two identical bags with an unknown number of coins plus three separate coins on one side, and 11 coins on the other. Remove three coins from both sides and split what's left evenly: how many coins are in a bag? Write this as the equation 2x + 3 = 11."},
    {t:"Choosing a plan", b:"Plan A: 150 rubles a month plus 3 rubles per minute. Plan B: 300 rubles with no per-minute charge. At how many minutes a month do they cost the same? Set up the equation 3x + 150 = 300 and solve it. Which is better for someone who talks for 40 minutes?"},
    {t:"An equation in a game", b:"Invent a &ldquo;cipher&rdquo;: pick a number, perform three operations on it, and write down the result. Give the problem to a friend — let them solve it with an equation. Then switch roles."},
    {t:"Family ages", b:"Find out the real ages of two family members (for example, yours and a parent's). Set up an equation of the form &ldquo;in how many years will one be only twice as old as the other&rdquo; and solve it. Compare with the actual answer by substituting the numbers."}
  ],
  steps: [
    {
      title: "What an equation and a root are",
      body: "<p><b>An equation</b> is an equality with an unknown number. A <b>root</b> of an equation is a value of the unknown for which the equality becomes true. To solve an equation means to find all of its roots.</p><p>Watch how this works with a balance scale:</p><div class='figure'>__SVG_LIN_BALANCE_ANIM__</div>"
    },
    {
      title: "Two properties of equations",
      body: "<h3>Two properties</h3><ul><li>A term can be moved from one side to the other by <b>changing its sign</b>: x + 5 = 12 → x = 12 − 5.</li><li>Both sides can be multiplied or divided by the same number, <b>not equal to zero</b>: 3x = 15 → x = 5.</li></ul><p>See in a simple example how moving a term and dividing lead to the answer:</p>",
      exIdx: 0
    },
    {
      title: "The solving algorithm",
      body: "<h3>The algorithm</h3><ul><li>1. Expand the parentheses. If there are fractions, multiply both sides by the common denominator.</li><li>2. Move the terms with x to the left, the numbers to the right.</li><li>3. Combine like terms.</li><li>4. Divide by the coefficient of x.</li><li>5. Check: substitute the answer into the original equation.</li></ul><p>Expanding parentheses is a common first step: 5(x − 2) = 3x + 4 turns into 5x − 10 = 3x + 4, and then we move terms and combine like terms.</p><div class='warn'><span class='hand'>Common mistake</span>When expanding parentheses, watch for a number or a minus sign in front of them: 5(x − 2) = 5x − 10 (not 5x − 2), and −(x − 3) = −x + 3.</div>",
      exIdx: 1
    },
    {
      title: "How many roots there can be",
      body: "<h3>How many roots there can be</h3><p>In the equation ax = b: if a ≠ 0, there is exactly one root, x = b : a. If a = 0 and b ≠ 0, there are no roots (0 · x = 5 holds for no x). If a = 0 and b = 0, any number is a root.</p><p>On a balance scale this looks like: if the coefficient of x is not zero, the scale can always be brought to the form x = number — as in the example above.</p><div class='figure'>__SVG_LIN_BALANCE_ANIM__</div>"
    },
    {
      title: "Equations with fractions",
      body: "<h3>Equations with fractions</h3><p>If an equation has fractions with a letter in the numerator or a number in the denominator, the most reliable way is to multiply both sides by the common denominator so the fractions disappear. For example, in x/2 − x/3 = 1 the common denominator is 6: we multiply each term by 6 and get an ordinary equation with no fractions.</p>",
      exIdx: [2, 3]
    },
    {
      title: "Checking is your safety net",
      body: "<div class='note'><span class='hand'>Remember</span>Checking is your safety net. It takes 20 seconds and catches almost all sign errors. Substitute the root you found into the original equation (not the simplified one!) and make sure the left and right sides match.</div><p>For example, in the balance-scale example below, checking confirms that the scale stays balanced at every step:</p><div class='figure'>__SVG_LIN_BALANCE_ANIM__</div>"
    },
    {
      title: "Setting up equations from word problems",
      body: "<h3>Setting up equations from word problems</h3><p>Many word problems are solved like this: denote the unknown by the letter x, express the other quantities through it according to the problem's conditions, set up an equation, and solve it. At the end, always check whether the answer makes sense for the problem (for example, a number of years or objects can't be negative).</p><p>See in the pencils-in-the-box-and-pencil-case problem how the conditions turn into an equation:</p>",
      exIdx: 4
    }
  ]
};


/* ---------- pow ---------- */
CONTENT_EN.pow = {
  goal: "After this topic, you'll quickly multiply, divide, and raise power expressions to a power, without writing them out every time as long multiplication.",
  explain: "<p><b>The power of a number a with a natural exponent n</b> is the product of n identical factors a: a^n = a · a · a · … · a (n times). The number a is called the <b>base</b> of the power, and the number n is called the <b>exponent</b>. The expression 2^5 is read as &ldquo;two to the fifth power&rdquo; or &ldquo;the fifth power of two.&rdquo;</p>"
  + "<p>For example, 2^5 = 2 · 2 · 2 · 2 · 2 = 32. Here 2 is the base, 5 is the exponent, and 32 is the value of the power. The second power of a number is also called its &ldquo;square&rdquo; (a^2 = a · a), and the third power is called its &ldquo;cube&rdquo; (a^3 = a · a · a).</p>"
  + "<h3>Special exponents: 0 and 1</h3><ul><li>Any number (except zero) <b>to the power of zero equals 1</b>: a^0 = 1 for a ≠ 0. For example, 7^0 = 1, 100^0 = 1.</li><li>Any number <b>to the power of one equals itself</b>: a^1 = a. For example, 9^1 = 9.</li></ul>"
  + "<div class='note'><span class='hand'>Remember</span>0^0 is left undefined in the school curriculum — just don't run into that expression. But 0^5 = 0, because that's 0 · 0 · 0 · 0 · 0.</div>"
  + "<h3>Multiplying powers with the same base</h3><p>If the bases are the same, when multiplying powers the exponents <b>add up</b>: a^m · a^n = a^(m+n). This is easy to see: 2^3 · 2^4 is (2·2·2) · (2·2·2·2), that is, seven identical factors of 2, that is, 2^7 = 2^(3+4).</p>"
  + "<h3>Dividing powers with the same base</h3><p>When dividing powers with the same base (a ≠ 0), the exponents <b>are subtracted</b>: a^m : a^n = a^(m−n), where m ≥ n. For example, 5^6 : 5^4 = 5^(6−4) = 5^2 = 25.</p>"
  + "<p>Watch how this works: 2^3 · 2^4 = 2^7 = 128. And if we cross out three of the seven 2's (as in the division 2^7 : 2^3), 7 − 3 = 4 twos remain, that is, 2^4 = 16.</p><div class='figure'>__SVG_POW_MULT_ANIM__</div>"
  + "<h3>Raising a power to a power</h3><p>When a power is raised to a power, the exponents <b>are multiplied</b>: (a^m)^n = a^(m·n). For example, (2^3)^2 = 2^(3·2) = 2^6 = 64. Check: 2^3 = 8, and 8^2 = 64 — it matches.</p>"
  + "<h3>The power of a product</h3><p>To raise a product to a power, you can raise each factor to that power separately and multiply the results: (a · b)^n = a^n · b^n. For example, (2 · 3)^3 = 2^3 · 3^3 = 8 · 27 = 216, and directly 6^3 = 216 — it matches.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>You can't combine powers with DIFFERENT bases or different exponents using these rules: 2^3 · 3^2 cannot be turned into 6^5 — the rule only applies when the bases of the factors match (or when the exponents match in a product). Also, a^2 + a^3 cannot be &ldquo;combined into one power&rdquo; — you can only add the actual values, not the exponents.</div>"
  + "<h3>The sign of a power of a negative number</h3><p>If the base is negative, the sign of the result depends on the exponent: with an <b>even</b> exponent the power is positive (the minus signs &ldquo;cancel&rdquo; in pairs), with an <b>odd</b> exponent it's negative (one minus is left without a pair). For example, (−2)^4 = 16 (even exponent), while (−2)^3 = −8 (odd exponent). Pay attention to the parentheses: (−2)^4 = 16, but −2^4 = −16, because here only 2 is raised to the power, and the minus sign is applied afterward.</p>"
  + "<div class='note'><span class='hand'>Remember</span>An even power of a negative number is always positive. An odd power of a negative number is always negative.</div>",
  examples: [
    {t:"Find the value of the expression 3^4.", s:"3^4 = 3 · 3 · 3 · 3 = 81.<div class='figure'>__SVG_POW7_EX0_POWER34__</div>"},
    {t:"Find the value of the expressions (−2)^3 and (−2)^4.", s:"(−2)^3 = (−2)·(−2)·(−2) = 4·(−2) = −8 (odd exponent — the minus stays). (−2)^4 = (−2)·(−2)·(−2)·(−2) = 4·4 = 16 (even exponent — the minuses canceled in pairs).<div class='figure'>__SVG_POW7_EX1_NEGSIGN__</div>"},
    {t:"Simplify 2^3 · 2^5.", s:"The bases are the same (2), so we add the exponents: 2^3 · 2^5 = 2^(3+5) = 2^8 = 256.<div class='figure'>__SVG_POW7_EX2_MULTSAME__</div>"},
    {t:"Simplify 7^9 : 7^6.", s:"The bases are the same (7), so we subtract the exponents: 7^9 : 7^6 = 7^(9−6) = 7^3 = 343.<div class='figure'>__SVG_POW7_EX3_DIVSAME__</div>"},
    {t:"Simplify (3^2)^3.", s:"A power of a power — we multiply the exponents: (3^2)^3 = 3^(2·3) = 3^6 = 729.<div class='figure'>__SVG_POW7_EX4_POWOFPOW__</div>"},
    {t:"Find the value of the expression (2 · 5)^2.", s:"We raise each factor to the power: (2 · 5)^2 = 2^2 · 5^2 = 4 · 25 = 100. Check: 10^2 = 100 ✓.<div class='figure'>__SVG_POW7_EX5_POWOFPRODUCT__</div>"}
  ],
  tasks: [
    {q:"Find the value of the expression: 2^5.", ans:"32", hint:"Multiply five 2's together: 2·2·2·2·2.", sol:"2^5 = 2·2·2·2·2 = 32."},
    {q:"Find the value of the expression: 5^3.", ans:"125", hint:"5·5·5.", sol:"5^3 = 5·5·5 = 125."},
    {q:"Find the value of the expression: 10^4.", ans:"10000", hint:"A one followed by four zeros.", sol:"10^4 = 10000."},
    {q:"Find the value of the expression: 15^0.", ans:"1", hint:"Any number (except 0) to the power of zero.", sol:"15^0 = 1 by definition."},
    {q:"Find the value of the expression: 9^1.", ans:"9", hint:"The first power equals the number itself.", sol:"9^1 = 9."},
    {q:"Find the value of the expression: (−3)^2.", ans:"9", hint:"The exponent is even — the result is positive.", sol:"(−3)^2 = (−3)·(−3) = 9."},
    {q:"Find the value of the expression: (−2)^3.", ans:"-8", hint:"The exponent is odd — the result is negative.", sol:"(−2)^3 = (−2)·(−2)·(−2) = −8."},
    {q:"Find the value of the expression: 0^7.", ans:"0", hint:"0 multiplied by itself any number of times.", sol:"0^7 = 0."},
    {q:"Write the product 2^3 · 2^4 as a power with base 2. What is the exponent?", ans:"7", hint:"When multiplying powers with the same base, the exponents add up.", sol:"2^3 · 2^4 = 2^(3+4) = 2^7. The exponent is 7."},
    {q:"Find the value of the expression: the value of 2^3 · 2^4.", ans:"128", hint:"Add the exponents, then compute the power.", sol:"2^3 · 2^4 = 2^7 = 128."},
    {q:"Find the value of the expression: the value of 3^5 : 3^2.", ans:"27", hint:"When dividing powers with the same base, the exponents are subtracted.", sol:"3^5 : 3^2 = 3^(5−2) = 3^3 = 27."},
    {q:"Find the value of the expression: the value of (2^3)^2.", ans:"64", hint:"Raising a power to a power — the exponents are multiplied.", sol:"(2^3)^2 = 2^(3·2) = 2^6 = 64."},
    {q:"Find the value of the expression: the value of (2 · 3)^3.", ans:"216", hint:"Raise each factor to the power separately.", sol:"(2 · 3)^3 = 2^3 · 3^3 = 8 · 27 = 216."},
    {q:"Find the value of the expression: the value of 5^6 : 5^4.", ans:"25", hint:"Subtract the exponents.", sol:"5^6 : 5^4 = 5^2 = 25."},
    {q:"Find the value of the expression: the value of x^3 when x = 2.", ans:"8", hint:"Substitute the number for x.", sol:"2^3 = 8."},
    {q:"Find the value of the expression: the value of x^4 when x = −2.", ans:"16", hint:"The exponent is even.", sol:"(−2)^4 = 16."},
    {q:"Find the value of the expression 2^3 + 2^2.", ans:"12", hint:"First compute each power separately, then add — you can't add the exponents themselves here.", sol:"2^3 = 8, 2^2 = 4. Sum: 8 + 4 = 12."},
    {q:"Simplify the expression a^5 · a^2 : a^3 (a ≠ 0). What is the final exponent of the base a?", ans:"4", hint:"First add the exponents for multiplication, then subtract for division: 5 + 2 − 3.", sol:"a^5 · a^2 = a^7. Then a^7 : a^3 = a^(7−3) = a^4. The exponent is 4."},
    {q:"Find the value of the expression: the value of the expression (4^2 · 4^3) : 4^4.", ans:"4", hint:"Add the exponents in the numerator, then subtract the divisor's exponent: 2 + 3 − 4.", sol:"4^2 · 4^3 = 4^5. Then 4^5 : 4^4 = 4^1 = 4."},
    {q:"Compare the values of the expressions: A = (2^2)^3 and B = 2^2 · 2^3. Which is true?", hint:"Find the exponent for A by multiplying exponents, and for B by adding exponents.", sol:"A = (2^2)^3 = 2^6 = 64. B = 2^2 · 2^3 = 2^5 = 32. So A is greater than B, and A is not equal to B.", opts:["A = B","A is greater than B","A is less than B","Cannot be compared"], ans:1},
    {q:"Find the value of the expression: 5^8 : 5^3 · 5^0, written as a power with base 5. What is the exponent?", ans:"5", hint:"Don't forget that 5^0 = 1 doesn't change the product, and the exponents add and subtract.", sol:"5^8 : 5^3 = 5^5, and 5^5 · 5^0 = 5^(5+0) = 5^5. The exponent is 5."},
    {q:"Find the value of the expression: (−2)^5 + (−2)^4.", ans:"-16", hint:"Compute each power separately, paying attention to whether the exponent is even or odd.", sol:"(−2)^5 = −32 (odd exponent). (−2)^4 = 16 (even exponent). −32 + 16 = −16."},
    {q:"Simplify the expression (a^3)^2 · a (a ≠ 0). What is the final exponent?", ans:"7", hint:"First multiply the exponents in the power of a power, then add the exponent of the second factor.", sol:"(a^3)^2 = a^6. Then a^6 · a = a^(6+1) = a^7. The exponent is 7."},
    {q:"It is known that 2^n = 128. What is the value of the expression 2^(n+2)?", ans:"512", hint:"First find n by writing 128 as a power of two.", sol:"128 = 2^7, so n = 7. Then 2^(n+2) = 2^9 = 512."},
    {q:"Olya wrote: 2^3 · 3^2 = 6^5. Find her mistake and compute the correct value of 2^3 · 3^2.", ans:"72", hint:"You can only add exponents when the bases are the same. Compute each power separately.", sol:"The bases are different, so the rule doesn't apply. 2^3 = 8, 3^2 = 9, 8 · 9 = 72. Answer: 72."},
    {q:"Find the value of the expression 2^4 · 5^4 in the most convenient way.", ans:"10000", hint:"The exponents are the same — combine the bases using the rule for the power of a product.", sol:"2^4 · 5^4 = (2 · 5)^4 = 10^4 = 10000. Answer: 10000."},
    {q:"One bacterium splits into two every 20 minutes. How many bacteria will there be from one bacterium after 2 hours?", ans:"64", hint:"Work out how many times a split happens in 2 hours — each time the number of bacteria doubles.", sol:"In 120 minutes there are 120 : 20 = 6 splits. 2^6 = 64. Answer: 64."},
    {q:"Find n if 3^n · 3^4 = 3^11.", ans:"7", hint:"When multiplying powers with the same base, the exponents add up.", sol:"n + 4 = 11, n = 7. Answer: 7."},
    {q:"Which statement is true?", opts:["2^10 &gt; 10^3","2^10 = 10^3","2^10 &lt; 10^3"], ans:0, hint:"Compute both powers: double 2 ten times.", sol:"2^10 = 1024, 10^3 = 1000, 1024 &gt; 1000. True: 2^10 &gt; 10^3."},
    {q:"Find the value of the expression 3 · 2^4 − 4^2 : 2^3.", ans:"46", hint:"First compute the powers, then the multiplication and division, and subtraction at the end.", sol:"2^4 = 16, 4^2 = 16, 2^3 = 8. 3 · 16 − 16 : 8 = 48 − 2 = 46. Answer: 46."},
    {q:"Find the value of the expression (2^5 · 8) : 2^6, writing 8 as a power of two.", ans:"4", hint:"8 = 2 · 2 · 2.", sol:"8 = 2^3. 2^5 · 2^3 = 2^8. 2^8 : 2^6 = 2^2 = 4. Answer: 4."},
    {q:"The edge of a cube was increased 3 times. By what factor did its volume increase?", ans:"27", hint:"The volume of a cube is the edge raised to the third power: (3a)^3.", sol:"(3a)^3 = 3^3 · a^3 = 27a^3, that is, the volume became 27 times greater. Answer: 27."}
  ],
  bonus: {q:"It is known that 3^n = 243. What is the value of the expression 3^(n−2)?", ans:"27", hint:"First find n by writing 243 as a power of three. Then apply the rule for dividing powers: 3^(n−2) = 3^n : 3^2.", sol:"243 = 3^5, so n = 5. Then 3^(n−2) = 3^n : 3^2 = 243 : 9 = 27. Check by direct computation: 3^(5−2) = 3^3 = 27."},
  test: [
    {q:"Find the value of the expression: 4^3.", ans:"64", sol:"4^3 = 4·4·4 = 64."},
    {q:"Find the value of the expression: 6^0.", ans:"1", sol:"Any number (except zero) to the power of zero equals 1."},
    {q:"Find the value of the expression: (−5)^2.", ans:"25", sol:"The exponent is even: (−5)^2 = 25."},
    {q:"Find the value of the expression: (−1)^7.", ans:"-1", sol:"The exponent is odd: (−1)^7 = −1."},
    {q:"Write 5^7 · 5^3 as a power with base 5. What is the exponent of the result?", ans:"10", sol:"When multiplying powers with the same base, the exponents add up: 7 + 3 = 10."},
    {q:"Find the value of the expression: the value of (3^2)^2.", ans:"81", sol:"(3^2)^2 = 3^(2·2) = 3^4 = 81."},
    {q:"What is true for the expression (2 · 5)^2?", opts:["Equals 2^2 + 5^2","Equals 2^2 · 5^2 = 100","Equals 2 · 5^2 = 50","Cannot be computed"], ans:1, sol:"(2 · 5)^2 = 2^2 · 5^2 = 4 · 25 = 100."},
    {q:"Find the value of the expression: the value of 6^5 : 6^3.", ans:"36", sol:"6^5 : 6^3 = 6^(5−3) = 6^2 = 36."}
  ],
  lab: [
    {t:"Doubling a sheet of paper", b:"Take a sheet of paper and fold it in half several times in a row, each time counting the thickness in &ldquo;layers&rdquo;: after 1 fold — 2 layers (2^1), after 2 — 4 layers (2^2), after 3 — 8 layers (2^3). Try folding the sheet 7 times and use the formula 2^7 to work out how many layers there would theoretically be — compare this with what you actually feel, and think about why folding it many times is physically impossible."},
    {t:"The legend of the grains on a chessboard", b:"Recall (or look up) the legend of the inventor of chess, who asked for 1 grain for the first square of the board, 2 for the second, 4 for the third, and so on, doubling each time — that is, 2^0, 2^1, 2^2, ... Use a calculator to find how many grains would be on the 10th square (2^9), and discuss why the 64th square would give an astronomically large number."},
    {t:"Bacterial growth", b:"Imagine that one bacterium splits in two every hour, so after one hour there are 2, after two there are 4, and so on. Make a table of the number of bacteria after 1, 2, 3, 4, 5 hours using powers of two, and use it to draw a simple growth graph on paper."},
    {t:"The area of a square and the volume of a cube", b:"Measure the side of a square sheet of paper or a cube (for example, a Rubik's cube) in centimeters with a ruler. Compute the area of the square as a^2 and, if you have a cube, its volume as a^3. Compare how many times the result grows when the side is doubled."}
  ],
  steps: [
    {
      title: "What a power of a number is",
      body: "<h3>What a power of a number is</h3><p>The power of a number a with a natural exponent n is the product of n identical factors a: a^n = a · a · a · … · a (n times). The number a is called the <b>base</b> of the power, and the number n is called the <b>exponent</b>. The expression 2^5 is read as &ldquo;two to the fifth power.&rdquo;</p><p>For example, 2^5 = 2 · 2 · 2 · 2 · 2 = 32. Here 2 is the base, 5 is the exponent, and 32 is the value of the power. The second power of a number is also called its &ldquo;square,&rdquo; and the third power is called its &ldquo;cube.&rdquo;</p>",
      exIdx: 0
    },
    {
      title: "Special exponents: 0 and 1",
      body: "<h3>Special exponents: 0 and 1</h3><p>Any number (except zero) to the power of zero equals 1: a^0 = 1 for a ≠ 0. Any number to the power of one equals itself: a^1 = a.</p><div class='figure'>__SVG_POW7_ZERO_ONE__</div><div class='note'><span class='hand'>Remember</span>0^0 is left undefined in the school curriculum. But 0^5 = 0, because that's 0 · 0 · 0 · 0 · 0.</div>"
    },
    {
      title: "The sign of a power of a negative number",
      body: "<h3>The sign of a power of a negative number</h3><p>If the base is negative, the sign of the result depends on the exponent: with an even exponent the power is positive (the minus signs &ldquo;cancel&rdquo; in pairs), with an odd exponent it's negative (one minus is left without a pair). Pay attention to the parentheses: (−2)^4 = 16, but −2^4 = −16, because here only 2 is raised to the power, and the minus sign is applied afterward.</p><div class='note'><span class='hand'>Remember</span>An even power of a negative number is always positive. An odd power of a negative number is always negative.</div>",
      exIdx: 1
    },
    {
      title: "Multiplying powers with the same base",
      body: "<h3>Multiplying powers with the same base</h3><p>If the bases are the same, when multiplying powers the exponents add up: a^m · a^n = a^(m+n). This is easy to see: 2^3 · 2^4 is (2·2·2) · (2·2·2·2), that is, seven identical factors of 2, that is, 2^7 = 2^(3+4). Watch how this works:<div class='figure'>__SVG_POW_MULT_ANIM__</div></p>",
      exIdx: 2
    },
    {
      title: "Dividing powers with the same base",
      body: "<h3>Dividing powers with the same base</h3><p>When dividing powers with the same base (a ≠ 0), the exponents are subtracted: a^m : a^n = a^(m−n), where m ≥ n. For example, 5^6 : 5^4 = 5^(6−4) = 5^2 = 25.</p>",
      exIdx: 3
    },
    {
      title: "Raising a power to a power",
      body: "<h3>Raising a power to a power</h3><p>When a power is raised to a power, the exponents are multiplied: (a^m)^n = a^(m·n). For example, (2^3)^2 = 2^(3·2) = 2^6 = 64. Check: 2^3 = 8, and 8^2 = 64 — it matches.</p>",
      exIdx: 4
    },
    {
      title: "The power of a product",
      body: "<h3>The power of a product</h3><p>To raise a product to a power, you can raise each factor to that power separately and multiply the results: (a · b)^n = a^n · b^n. For example, (2 · 3)^3 = 2^3 · 3^3 = 8 · 27 = 216, and directly 6^3 = 216 — it matches.</p><div class='warn'><span class='hand'>Common mistake</span>You can't combine powers with DIFFERENT bases or different exponents using these rules: 2^3 · 3^2 cannot be turned into 6^5 — the rule only applies when the bases of the factors match. Also, a^2 + a^3 cannot be &ldquo;combined into one power&rdquo; — you can only add the actual values, not the exponents.</div>",
      exIdx: 5
    }
  ]
};


/* ---------- poly ---------- */
CONTENT_EN.poly = {
  goal: "After this topic you'll be able to combine like terms, add and subtract polynomials, and expand parentheses when multiplying — this is the foundation of all algebra that follows.",
  explain: "<p><b>A monomial</b> is an expression made up of numbers and letters (variables) using only multiplication and raising to a power: for example, 5x, −3x^2y, 7, a^3. The expression 4x^2·(−3x) can also be simplified into a monomial: 4x^2·(−3x) = −12x^3.</p>"
  + "<h3>Standard form of a monomial</h3>"
  + "<p>A monomial is written in <b>standard form</b> if it starts with a numerical factor (called the <b>coefficient</b>), followed by the letter factors with their exponents, each letter appearing only once. For example, −7x^3y^2 is in standard form: the coefficient is −7, the exponent of x is 3, and the exponent of y is 2. The <b>degree of a monomial</b> is the sum of the exponents of all its letters: for −7x^3y^2 the degree is 3 + 2 = 5.</p>"
  + "<div class='note'><span class='hand'>Remember</span>If a factor is written as 3x^2·x^3, first bring it to standard form by adding the exponents: 3x^2·x^3 = 3x^5.</div>"
  + "<h3>Polynomials and like terms</h3>"
  + "<p>A <b>polynomial</b> is a sum of monomials. Each of these monomials is called a <b>term of the polynomial</b>. For example, 3x^2 − 5x + 7 is a polynomial with three terms (a <b>trinomial</b>). A polynomial with two terms is called a <b>binomial</b> (for example, x + 3).</p>"
  + "<p><b>Like terms</b> are terms of a polynomial with the same letter part (the same letters raised to the same powers), differing only in their coefficient. For example, 5x^2 and −3x^2 are like terms, but 5x^2 and 5x are not, because the exponents of x are different.</p>"
  + "<p><b>Combining like terms</b> means adding their coefficients while keeping the shared letter part: 5x^2 − 3x^2 + x^2 = (5 − 3 + 1)x^2 = 3x^2.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>When combining like terms, ONLY the coefficients are added, and the letter part is copied over unchanged: 4a − 7a + 2a = (4 − 7 + 2)a = −1a = −a, not −a^2 and not a number with no letter.</div>"
  + "<h3>Adding and subtracting polynomials</h3>"
  + "<p>To add polynomials, you expand the parentheses (if there's a plus in front of the parentheses, the signs inside don't change) and combine like terms. To subtract a polynomial, you expand the parentheses by flipping the sign of every term inside (if there's a minus in front), and then also combine like terms.</p>"
  + "<p>Example: (5x^2 − 3x + 7) − (2x^2 + 4x − 1) = 5x^2 − 3x + 7 − 2x^2 − 4x + 1 = 3x^2 − 7x + 8.</p>"
  + "<h3>Multiplying a monomial by a polynomial</h3>"
  + "<p>To multiply a monomial by a polynomial, you multiply the monomial by <b>every</b> term of the polynomial and add the results — this is called expanding parentheses, or the distributive property of multiplication: a(b + c) = ab + ac. Example: 3x·(2x^2 − 4x + 5) = 6x^3 − 12x^2 + 15x.</p>"
  + "<h3>Multiplying a polynomial by a polynomial</h3>"
  + "<p>To multiply two polynomials, you multiply every term of the first polynomial by every term of the second, add up all the resulting products, and then combine like terms. Example: (x + 2)(x + 5) = x·x + x·5 + 2·x + 2·5 = x^2 + 5x + 2x + 10 = x^2 + 7x + 10.</p>"
  + "<p>Watch how it works:</p>"
  + "<div class='figure'>__SVG_POLY_TILES_ANIM__</div>"
  + "<div class='note'><span class='hand'>Remember</span>It's convenient to picture multiplying two binomials as the area of a rectangle with sides (x + 2) and (x + 5): it splits into 4 smaller rectangles with sides x, 2 and x, 5, and their areas give exactly the four terms.</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>When multiplying a polynomial by a polynomial, you can't just multiply the &ldquo;first&rdquo; and &ldquo;last&rdquo; terms — you need to multiply EVERY term by EVERY term (multiplying two binomials gives 4 products, not 2). Also, when expanding (x − 3)(x + 3), don't forget about the signs: you get x^2 − 9, not x^2 + 9.</div>",
  examples: [
    {t:"Bring the monomial 4x^2·(−3x) to standard form.", s:"Multiply the numbers: 4·(−3) = −12. Add the exponents of x: x^2·x = x^3. We get −12x^3.<div class='figure'>__SVG_POLY7_EX0_MONOSTD__</div>"},
    {t:"Combine like terms in the expression 5x^2 − 3x^2 + x^2.", s:"All three terms are like terms (the letter part x^2 is the same). Add the coefficients: 5 − 3 + 1 = 3. Result: 3x^2.<div class='figure'>__SVG_POLY7_EX1_LIKETERMS__</div>"},
    {t:"Find the sum of the polynomials (3x^2 + 2x − 1) + (x^2 − 5x + 4).", s:"Expand the parentheses (a plus in front doesn't change the signs): 3x^2 + 2x − 1 + x^2 − 5x + 4. Combine like terms: (3x^2 + x^2) + (2x − 5x) + (−1 + 4) = 4x^2 − 3x + 3.<div class='figure'>__SVG_POLY7_EX2_POLYSUM__</div>"},
    {t:"Find the difference of the polynomials (5x^2 − 3x + 7) − (2x^2 + 4x − 1).", s:"A minus in front of the parentheses flips the signs inside: 5x^2 − 3x + 7 − 2x^2 − 4x + 1. Combine like terms: (5x^2 − 2x^2) + (−3x − 4x) + (7 + 1) = 3x^2 − 7x + 8.<div class='figure'>__SVG_POLY7_EX3_POLYDIFF__</div>"},
    {t:"Multiply a monomial by a polynomial: 3x(2x^2 − 4x + 5).", s:"Multiply 3x by each term: 3x·2x^2 = 6x^3, 3x·(−4x) = −12x^2, 3x·5 = 15x. Result: 6x^3 − 12x^2 + 15x.<div class='figure'>__SVG_POLY7_EX4_MONOxPOLY__</div>"},
    {t:"Multiply a polynomial by a polynomial: (x + 2)(x + 5).", s:"Multiply every term of the first by every term of the second: x·x + x·5 + 2·x + 2·5 = x^2 + 5x + 2x + 10. Combine like terms: x^2 + 7x + 10.<div class='figure'>__SVG_POLY7_EX5_TILES__</div>"}
  ],
  tasks: [
    {q:"Find the degree of the monomial 5x^3.", ans:"3", hint:"The degree of a monomial with one letter is its exponent.", sol:"The exponent of x is 3, so the degree of the monomial is 3."},
    {q:"Find the coefficient of the monomial −8x^2y.", ans:"-8", hint:"The coefficient is the numerical factor in front of the letters.", sol:"The numerical factor is −8."},
    {q:"Find the degree of the monomial −7x^3y^2.", ans:"5", hint:"Add the exponents of all the letters.", sol:"3 + 2 = 5."},
    {q:"Combine like terms: 4a − 7a + 2a. What is the resulting coefficient of a?", ans:"-1", hint:"Add the coefficients 4, −7 and 2.", sol:"4 − 7 + 2 = −1, which gives −a."},
    {q:"Find the value of the expression: the value of the polynomial 3x^2 − 5x + 2 at x = 2.", ans:"4", hint:"Substitute x = 2 into each term.", sol:"3·4 − 5·2 + 2 = 12 − 10 + 2 = 4."},
    {q:"Find the value of the expression: the value of the polynomial 2x^2 + 3x − 1 at x = 0.", ans:"-1", hint:"All the terms with x will vanish.", sol:"2·0 + 3·0 − 1 = −1."},
    {q:"Find the value of the expression: the value of the polynomial x^2 − 4x + 4 at x = 5.", ans:"9", hint:"Substitute the number for x and calculate step by step.", sol:"25 − 20 + 4 = 9."},
    {q:"Bring the monomial 2x^2·5x to standard form. What is the coefficient of the result?", ans:"10", hint:"Multiply the numerical factors.", sol:"2·5 = 10, x^2·x = x^3, the result is 10x^3. The coefficient is 10."},
    {q:"Bring the monomial 2x^2·5x to standard form. What is the degree of the result?", ans:"3", hint:"Add the exponents of x.", sol:"x^2·x = x^3, the degree of the monomial 10x^3 is 3."},
    {q:"How many terms are in the polynomial 3x^3 − 2x^2 + x − 7?", ans:"4", hint:"Count the terms, including the constant term.", sol:"3x^3, −2x^2, x and −7 — that's 4 terms in total."},
    {q:"Combine like terms: 6x^2 − 3x + 2x^2 + 5x. What is the coefficient of x^2 in the result?", ans:"8", hint:"Add only the coefficients of x^2.", sol:"6x^2 + 2x^2 = 8x^2."},
    {q:"Combine like terms: 6x^2 − 3x + 2x^2 + 5x. What is the coefficient of x in the result?", ans:"2", hint:"Add only the coefficients of x.", sol:"−3x + 5x = 2x."},
    {q:"Find the sum (3x^2 + 2x − 1) + (x^2 − 5x + 4). Which monomial results for the x^2 term?", hint:"Add the coefficients of x^2 in both parentheses: 3 and 1.", sol:"3x^2 + x^2 = 4x^2. The final polynomial: 4x^2 − 3x + 3.", opts:["3x^2","4x^2","x^2","4x^3"], ans:1},
    {q:"Find the difference (5x^2 − 3x + 7) − (2x^2 + 4x − 1). What is the constant term of the result?", ans:"8", hint:"Don't forget to flip the sign of −1 when expanding the parentheses with a minus in front.", sol:"7 − (−1) = 7 + 1 = 8. The full result: 3x^2 − 7x + 8."},
    {q:"Expand the parentheses: 3x(2x^2 − 4x + 5). What is the coefficient of x^3 in the result?", ans:"6", hint:"Multiply 3x by 2x^2.", sol:"3x·2x^2 = 6x^3, so the coefficient is 6."},
    {q:"Expand the parentheses: −2x^2(3x − 5). What do you get?", hint:"Multiply −2x^2 by each term, watching the signs.", sol:"−2x^2·3x = −6x^3; −2x^2·(−5) = +10x^2. Result: −6x^3 + 10x^2.", opts:["−6x^3 + 10x^2","−6x^3 − 10x^2","6x^3 + 10x^2","−6x^2 + 10x"], ans:0},
    {q:"Expand the parentheses and combine like terms: (x + 2)(x + 5). What is the coefficient of x in the result?", ans:"7", hint:"Multiply every term of the first binomial by every term of the second.", sol:"x·x + x·5 + 2·x + 2·5 = x^2 + 5x + 2x + 10 = x^2 + 7x + 10. The coefficient of x is 7."},
    {q:"Expand the parentheses: (x − 3)(x + 3). What do you get?", hint:"This is the product of the sum and difference of the same two numbers — the like terms with x will cancel out.", sol:"x·x + x·3 − 3·x − 3·3 = x^2 + 3x − 3x − 9 = x^2 − 9.", opts:["x^2 − 9","x^2 + 9","x^2 − 6x − 9","x^2 − 6x + 9"], ans:0},
    {q:"Expand the parentheses: (2x + 1)(x − 4). What is the coefficient of x in the result?", ans:"-7", hint:"Multiply every term by every term: 2x·x, 2x·(−4), 1·x, 1·(−4), then add the like terms with x.", sol:"2x·x = 2x^2; 2x·(−4) = −8x; 1·x = x; 1·(−4) = −4. The terms with x: −8x + x = −7x. The full result: 2x^2 − 7x − 4."},
    {q:"The sides of a rectangle are (x + 2) and (2x − 1). Find the perimeter of the rectangle as a polynomial and calculate its value at x = 2.", ans:"14", hint:"Perimeter = 2·(side1 + side2). First simplify the expression, then substitute x = 2.", sol:"P = 2·((x + 2) + (2x − 1)) = 2·(3x + 1) = 6x + 2. At x = 2: 6·2 + 2 = 14."},
    {q:"Find the degree of the monomial 6x^4y.", ans:"5", hint:"Add the exponents of all the letters.", sol:"4 + 1 = 5."},
    {q:"Combine like terms: 9b^2 − 4b + 2b^2 + 7b. What is the coefficient of b^2 in the result?", ans:"11", hint:"Add only the coefficients of b^2.", sol:"9b^2 + 2b^2 = 11b^2."},
    {q:"Expand the parentheses: (x + 6)(x − 2). What is the coefficient of x in the result?", ans:"4", hint:"Multiply every term of the first binomial by every term of the second and combine the like terms with x.", sol:"x · x + x · (−2) + 6 · x + 6 · (−2) = x^2 − 2x + 6x − 12 = x^2 + 4x − 12. The coefficient of x is 4."},
    {q:"Find the difference (7x^2 + 3x − 2) − (4x^2 − x + 5). What is the constant term of the result?", ans:"-7", hint:"Don't forget to flip the sign of every term in the second parentheses, since there's a minus in front of it.", sol:"7x^2 + 3x − 2 − 4x^2 + x − 5 = 3x^2 + 4x − 7. The constant term is −7."},
    {q:"Vasya simplified the expression 3a − (2a − 5) and got a − 5. Find his mistake and calculate the correct value of the expression 3a − (2a − 5) at a = 4.", ans:"9", hint:"A minus in front of the parentheses flips the sign of every term inside, including −5.", sol:"3a − (2a − 5) = 3a − 2a + 5 = a + 5. At a = 4: 4 + 5 = 9. Vasya forgot to flip the sign of −5. Answer: 9."},
    {q:"A square with side x had one side increased by 3 and the other decreased by 2, turning it into a rectangle. Write its area as a polynomial. What is the coefficient of x?", ans:"1", hint:"The area equals (x + 3)(x − 2). Multiply every term by every term.", sol:"(x + 3)(x − 2) = x^2 − 2x + 3x − 6 = x^2 + x − 6. The coefficient of x is 1. Answer: 1."},
    {q:"The sum of the polynomial 2x^2 − x + 3 and an unknown polynomial B equals 5x^2 + 2x − 1. Find the constant term of polynomial B.", ans:"-4", hint:"B = (5x^2 + 2x − 1) − (2x^2 − x + 3). Watch the signs when expanding the parentheses with a minus.", sol:"B = 5x^2 + 2x − 1 − 2x^2 + x − 3 = 3x^2 + 3x − 4. The constant term is −4. Answer: −4."},
    {q:"Simplify the expression (x − 2)(x + 3) − x(x + 1) and find its value at x = 25.", ans:"-6", hint:"Don't rush to substitute 25: first expand the parentheses and combine like terms.", sol:"(x − 2)(x + 3) = x^2 + x − 6; x(x + 1) = x^2 + x. The difference: x^2 + x − 6 − x^2 − x = −6 for any x. Answer: −6."},
    {q:"Solve the equation (x + 4)(x − 1) = x^2 + 11.", ans:"5", hint:"Expand the parentheses on the left — the x^2 terms will cancel on both sides.", sol:"x^2 − x + 4x − 4 = x^2 + 11; 3x − 4 = 11; 3x = 15; x = 5. Answer: 5."},
    {q:"Take three consecutive natural numbers n, n + 1, n + 2. By how much is the square of the middle number greater than the product of the two outer numbers?", ans:"1", hint:"Write (n + 1)(n + 1) − n(n + 2) and expand the parentheses.", sol:"(n + 1)(n + 1) = n^2 + 2n + 1; n(n + 2) = n^2 + 2n. The difference: 1. For example, 5 · 5 − 4 · 6 = 25 − 24 = 1. Answer: 1."},
    {q:"Which equality is correct?", opts:["2x + 3x = 5x^2","x^2 · x^3 = x^6","3x^2 − x^2 = 2x^2","4x − x = 4"], ans:2, hint:"When combining like terms, only the coefficients are added, and when multiplying powers, the exponents are added.", sol:"2x + 3x = 5x (not 5x^2); x^2 · x^3 = x^5 (not x^6); 4x − x = 3x (not 4). Only 3x^2 − x^2 = 2x^2 is correct."},
    {q:"Bring the monomial (−2a^2b) · 3ab^3 · (−b) to standard form. What is its coefficient?", ans:"6", hint:"Multiply the numbers separately (taking the signs into account) and the letters separately.", sol:"Numbers: (−2) · 3 · (−1) = 6. Letters: a^2 · a = a^3, b · b^3 · b = b^5. We get 6a^3b^5. Answer: 6."}
  ],
  bonus: {q:"The sides of a rectangle are x and (x + 3). Write the area of the rectangle as a polynomial and find its value at x = 4.", ans:"28", hint:"The area of a rectangle is the product of its sides: x(x + 3). Expand the parentheses, then substitute x = 4.", sol:"Area: x(x + 3) = x^2 + 3x. At x = 4: 16 + 12 = 28."},
  test: [
    {q:"Find the degree of the monomial −4x^2y^3.", ans:"5", sol:"2 + 3 = 5."},
    {q:"Combine like terms: 7b − 10b + 3b. What is the coefficient of the result?", ans:"0", sol:"7 − 10 + 3 = 0, so the term becomes 0."},
    {q:"Find the value of the expression: the value of the polynomial x^2 + 2x − 3 at x = 1.", ans:"0", sol:"1 + 2 − 3 = 0."},
    {q:"Find the sum (4x^2 − x + 6) + (2x^2 + 5x − 4). What is the coefficient of x in the result?", ans:"4", sol:"−1 + 5 = 4."},
    {q:"Expand the parentheses: 5x(x^2 − 2x + 3). What is the coefficient of x^2 in the result?", ans:"-10", sol:"5x·(−2x) = −10x^2."},
    {q:"What do you get when you expand (x + 4)(x − 4)?", opts:["x^2 − 16","x^2 + 16","x^2 − 8x − 16","x^2 + 8x − 16"], ans:0, sol:"(x + 4)(x − 4) = x^2 − 4x + 4x − 16 = x^2 − 16."},
    {q:"What do you get when you expand (x + 3)(x − 2)?", opts:["x^2 + x − 6","x^2 − x − 6","x^2 + 5x − 6","x^2 + x + 6"], ans:0, sol:"x·x + x·(−2) + 3·x + 3·(−2) = x^2 − 2x + 3x − 6 = x^2 + x − 6."},
    {q:"Find the difference (6x^2 + 2x − 5) − (3x^2 − x + 1). What is the constant term of the result?", ans:"-6", sol:"−5 − 1 = −6."}
  ],
  lab: [
    {t:"Tiling a floor", b:"Imagine the floor of a rectangular room needs to be tiled, and one side of the room is x meters while the other is 2 meters longer (x + 2). Write the area as the polynomial x(x + 2) = x^2 + 2x, then substitute the real length of your own room (for example, x = 3) and calculate how many square meters of tile you'd need."},
    {t:"A rectangle made of rectangles", b:"Draw a large rectangle on paper, split one of its sides into segments of length x and 2, and the other side into segments of length x and 5. You'll get 4 small rectangles. Calculate the area of each one (x·x, x·5, 2·x, 2·5) and add them up — you'll get the same thing as (x + 2)(x + 5) = x^2 + 7x + 10. This shows visually where the four terms come from when multiplying two binomials."},
    {t:"A piggy bank with two kinds of coins", b:"Suppose you have x coins worth 5 rubles each and (x + 3) coins worth 10 rubles each. Set up a polynomial for the total amount of money: 5x + 10(x + 3), expand the parentheses and combine like terms. Substitute your own number x (for example, how many 5-ruble coins you actually have at home) and calculate the final total."},
    {t:"A garden with beds", b:"In a garden plot, one bed has a length of x meters, and the plot has 3 beds of this same length plus one more bed that is 2 meters longer. Write the total length of all the beds as the polynomial 3x + (x + 2) = 4x + 2, combine like terms, and calculate the result for x = 4 meters."}
  ],
  steps: [
    {title:"Monomials and their standard form", body:"<p><b>A monomial</b> is an expression made up of numbers and letters using only multiplication and raising to a power: for example, 5x, −3x^2y, 7, a^3. A monomial is written in <b>standard form</b> if it starts with a numerical factor (the <b>coefficient</b>), followed by letter factors with exponents, each letter appearing only once.</p><p>To bring a monomial to standard form, multiply the numerical factors together and add the exponents of the same letter. Watch how it works:</p><div class='figure'>__SVG_POLY7_EX0_MONOSTD__</div>", exIdx:0},
    {title:"Like terms", body:"<h3>Polynomials and like terms</h3><p><b>A polynomial</b> is a sum of monomials, each of which is called a <b>term of the polynomial</b>. <b>Like terms</b> are terms of a polynomial with the same letter part (the same letters raised to the same powers), differing only in their coefficient.</p><p><b>Combining like terms</b> means adding their coefficients while keeping the shared letter part.</p><div class='figure'>__SVG_POLY7_EX1_LIKETERMS__</div><div class='warn'><span class='hand'>Common mistake</span>When combining like terms, ONLY the coefficients are added, and the letter part is copied over unchanged: 4a − 7a + 2a = (4 − 7 + 2)a = −a, not −a^2 and not a number with no letter.</div>", exIdx:1},
    {title:"Adding polynomials", body:"<h3>Adding and subtracting polynomials</h3><p>To add polynomials, you expand the parentheses (if there's a plus in front of the parentheses, the signs inside don't change) and combine like terms.</p><div class='figure'>__SVG_POLY7_EX2_POLYSUM__</div>", exIdx:2},
    {title:"Subtracting polynomials", body:"<p>To subtract a polynomial, you expand the parentheses by flipping the sign of every term inside (if there's a minus in front), and then also combine like terms.</p><div class='figure'>__SVG_POLY7_EX3_POLYDIFF__</div>", exIdx:3},
    {title:"Multiplying a monomial by a polynomial", body:"<h3>Multiplying a monomial by a polynomial</h3><p>To multiply a monomial by a polynomial, you multiply the monomial by <b>every</b> term of the polynomial and add the results — this is called expanding parentheses, or the distributive property of multiplication: a(b + c) = ab + ac.</p><div class='figure'>__SVG_POLY7_EX4_MONOxPOLY__</div>", exIdx:4},
    {title:"Multiplying a polynomial by a polynomial", body:"<h3>Multiplying a polynomial by a polynomial</h3><p>To multiply two polynomials, you multiply every term of the first polynomial by every term of the second, add up all the resulting products, and then combine like terms. It's convenient to picture this as the area of a rectangle with sides (x + 2) and (x + 5): it splits into 4 smaller rectangles, and their areas give exactly the four terms. Watch how it works:</p><div class='figure'>__SVG_POLY_TILES_ANIM__</div>", exIdx:5},
    {title:"Area, piece by piece", body:"<p>By splitting the rectangle into 4 parts, you can see each of the four products separately, and then the like terms 2x and 5x add up into one.</p><div class='figure'>__SVG_POLY7_EX5_TILES__</div><div class='warn'><span class='hand'>Common mistake</span>When multiplying a polynomial by a polynomial, you can't just multiply the &ldquo;first&rdquo; and &ldquo;last&rdquo; terms — you need to multiply EVERY term by EVERY term (multiplying two binomials gives 4 products, not 2). Also, when expanding (x − 3)(x + 3), don't forget about the signs: you get x^2 − 9, not x^2 + 9.</div>"}
  ]
};


/* ---------- fsu ---------- */
CONTENT_EN.fsu = {
  goal: "After this topic you'll be able to instantly expand (a+b)^2, (a-b)^2 and a^2-b^2 without doing the parenthesis multiplication \"the long way\", and also quickly compute squares of numbers like 19^2 or 31^2 in your head.",
  explain: "<p>When we multiply the same pair of parentheses over and over in problems, mathematicians long ago noticed that the result always follows the same pattern. These ready-made patterns are called <b>shortcut multiplication formulas (SMF)</b>. They don't give you anything new — you can get the same result by ordinary expansion of parentheses — but they save time, and they come up constantly in quizzes and exams.</p>"
  + "<h3>Square of a sum</h3>"
  + "<p>(a + b)^2 = a^2 + 2ab + b^2 — &ldquo;the square of the first, plus twice the product, plus the square of the second.&rdquo;</p>"
  + "<p>Let's check by expanding the parentheses: (a + b)(a + b) = a·a + a·b + b·a + b·b = a^2 + 2ab + b^2. The formula isn't pulled out of thin air — it's just a shorter way of writing the exact same multiplication.</p>"
  + "<div class='figure'>__SVG_FSU_SQUARE_ANIM__</div>"
  + "<p>Watch how it works:</p>"
  + "<h3>Square of a difference</h3>"
  + "<p>(a − b)^2 = a^2 − 2ab + b^2 — the same principle, only the middle term has a minus sign. A common confusion: thinking that (a − b)^2 = a^2 − b^2. That's wrong! Check it with numbers: (5 − 2)^2 = 3^2 = 9, while 5^2 − 2^2 = 25 − 4 = 21. Different numbers — different formulas.</p>"
  + "<h3>Difference of squares</h3>"
  + "<p>a^2 − b^2 = (a − b)(a + b) — &ldquo;the difference of squares equals the product of the difference and the sum.&rdquo; This is the only one of the three formulas where the left side is a <b>difference</b> rather than a full square, and it factors into a product rather than expanding into a trinomial.</p>"
  + "<p>You can see this in the picture too. Take a square a × a and cut a small square b × b out of a corner — what's left is a shape with area a^2 − b^2. Cut it into two pieces (1 and 2) and move piece 2 to the side: you get a rectangle with sides (a − b) and (a + b). Check at a = 5, b = 3: 25 − 9 = 16 and (5 − 3)(5 + 3) = 2 · 8 = 16.</p>"
  + "<div class='figure'>__SVG_FSU_DIFF__</div>"
  + "<h3>Why this matters</h3>"
  + "<p>First, for fast mental math: 31^2 = (30 + 1)^2 = 900 + 60 + 1 = 961 — this can be worked out in your head in a couple of seconds, without multiplying &ldquo;31 by 31 longhand.&rdquo; Second, for <b>factoring</b>: if you see an expression of the form a^2 − b^2, you can immediately replace it with (a − b)(a + b), which often simplifies further calculations or reducing fractions.</p>"
  + "<h3>How to know which formula to apply</h3>"
  + "<ul><li>You see a parenthesis squared with a &ldquo;+&rdquo; sign inside — that's (a + b)^2, which expands into a trinomial with a &ldquo;+&rdquo; sign in the middle.</li><li>You see a parenthesis squared with a &ldquo;−&rdquo; sign inside — that's (a − b)^2, which expands into a trinomial with a &ldquo;−&rdquo; sign in the middle.</li><li>You see a difference of two squares (no parentheses, just x^2 − 9) — you factor it into the product (x − 3)(x + 3).</li></ul>"
  + "<div class='note'><span class='hand'>Remember</span>In these formulas, a and b don't have to be single letters. For example, in (2x + 5)^2 the role of &ldquo;a&rdquo; is played by 2x, and the role of &ldquo;b&rdquo; by 5: you get (2x)^2 + 2·(2x)·5 + 5^2 = 4x^2 + 20x + 25.</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>(a + b)^2 ≠ a^2 + b^2 — you can't &ldquo;forget&rdquo; the middle term 2ab! This is the most common mistake in this topic. Always check the formula with simple numbers: (2+3)^2 = 25, while 2^2+3^2 = 13 — they don't match, so the middle term is required.</div>",
  examples: [
    {t:"Expand using the formula: (x + 4)^2.", s:"Here a = x, b = 4. By the formula: x^2 + 2 · x · 4 + 4^2 = x^2 + 8x + 16.<div class='figure'>__SVG_FSU7_EX0_SQSUM__</div>"},
    {t:"Expand using the formula: (2x − 3)^2.", s:"Here a = 2x, b = 3. We get: (2x)^2 − 2 · 2x · 3 + 3^2 = 4x^2 − 12x + 9.<div class='figure'>__SVG_FSU7_EX1_SQDIFF__</div>"},
    {t:"Factor x^2 − 25.", s:"This is a difference of squares: x^2 − 5^2. By the formula: (x − 5)(x + 5).<div class='figure'>__SVG_FSU7_EX2_DIFSQ__</div>"},
    {t:"Find the value of 21^2 mentally, using the formula.", s:"21 = 20 + 1. (20 + 1)^2 = 20^2 + 2 · 20 · 1 + 1^2 = 400 + 40 + 1 = 441.<div class='figure'>__SVG_FSU7_EX3_SQ21__</div>"},
    {t:"Find the value of 49 · 51 mentally, without long multiplication.", s:"Notice that 49 = 50 − 1 and 51 = 50 + 1. Then 49 · 51 = (50 − 1)(50 + 1) = 50^2 − 1^2 = 2500 − 1 = 2499.<div class='figure'>__SVG_FSU7_EX4_4951__</div>"}
  ],
  tasks: [
    {q:"Expand using the formula: (x + 2)^2 = x^2 + ... x + .... What is the coefficient of x?", ans:"4", hint:"The coefficient of x is 2ab, where a=x, b=2.", sol:"(x+2)^2 = x^2 + 2·x·2 + 2^2 = x^2 + 4x + 4. The coefficient of x is 4."},
    {q:"Expand using the formula: (x − 3)^2 = x^2 + ... x + .... What is the constant term (the number with no x)?", ans:"9", hint:"The constant term is b^2.", sol:"(x−3)^2 = x^2 − 2·x·3 + 3^2 = x^2 − 6x + 9. The constant term is 9."},
    {q:"Factor x^2 − 16.", opts:["(x − 4)(x + 4)","(x − 8)(x + 2)","(x − 16)(x + 1)","(x − 4)^2"], ans:0, hint:"16 = 4^2. This is a difference of squares.", sol:"x^2 − 4^2 = (x − 4)(x + 4)."},
    {q:"Find the value of the expression: using the formula: 20^2 + 2 · 20 · 3 + 3^2.", ans:"529", hint:"This is the ready-made right side of the formula (a+b)^2 at a=20, b=3.", sol:"This is (20 + 3)^2 = 23^2 = 529."},
    {q:"Find the value of the expression: mentally, 19^2, using the square-of-a-difference formula (19 = 20 − 1).", ans:"361", hint:"(20 − 1)^2 = 400 − 40 + 1.", sol:"20^2 − 2·20·1 + 1^2 = 400 − 40 + 1 = 361."},
    {q:"Find the value of the expression: mentally, 32^2, using the formula (30 + 2)^2.", ans:"1024", hint:"900 + 2·30·2 + 4.", sol:"30^2 + 2·30·2 + 2^2 = 900 + 120 + 4 = 1024."},
    {q:"Expand using the formula: (a + 5)^2 = a^2 + ... a + .... What is the coefficient of a?", ans:"10", hint:"The coefficient of a is 2ab, where b=5.", sol:"(a+5)^2 = a^2 + 2·a·5 + 5^2 = a^2 + 10a + 25. The coefficient of a is 10."},
    {q:"Factor 49 − x^2.", opts:["(7 − x)(7 + x)","(x − 7)(x + 7)","(49 − x)(1 + x)","(7 − x)^2"], ans:0, hint:"49 = 7^2. A difference of squares: the larger square comes first.", sol:"7^2 − x^2 = (7 − x)(7 + x)."},
    {q:"Find the value of the expression: the value of x^2 + 6x + 9 at x = 7, by folding it into a square of a sum.", ans:"100", hint:"x^2 + 6x + 9 = (x + 3)^2.", sol:"(7 + 3)^2 = 10^2 = 100."},
    {q:"Find the value of the expression: mentally, 51 · 49, using the difference of squares (50 − 1)(50 + 1).", ans:"2499", hint:"50^2 − 1^2.", sol:"2500 − 1 = 2499."},
    {q:"Expand using the formula: (3x + 1)^2 = ...x^2 + ...x + .... What is the coefficient of x^2?", ans:"9", hint:"(3x)^2 = 9x^2.", sol:"(3x+1)^2 = 9x^2 + 2·3x·1 + 1^2 = 9x^2 + 6x + 1. The coefficient of x^2 is 9."},
    {q:"Expand using the formula: (5 − 2x)^2 = ... − ...x + ...x^2. What is the coefficient of x (including the minus sign)?", ans:"-20", hint:"a = 5, b = 2x. The middle term: −2·5·2x.", sol:"(5−2x)^2 = 5^2 − 2·5·2x + (2x)^2 = 25 − 20x + 4x^2. The coefficient of x is −20."},
    {q:"Find the value of x^2 − y^2 at x = 12, y = 8, using factoring.", ans:"80", hint:"x^2 − y^2 = (x − y)(x + y).", sol:"(12 − 8)(12 + 8) = 4 · 20 = 80."},
    {q:"Find the value of the expression: mentally, 62^2, using the formula (60 + 2)^2.", ans:"3844", hint:"3600 + 2·60·2 + 4.", sol:"3600 + 240 + 4 = 3844."},
    {q:"Simplify the expression (x + 3)^2 − x^2 and find its value at x = 10.", ans:"69", hint:"Expand the parentheses and combine like terms.", sol:"(x+3)^2 − x^2 = x^2+6x+9−x^2 = 6x+9. At x=10: 60+9=69."},
    {q:"Solve the equation (x + 2)^2 − x^2 = 20, find x.", ans:"4", hint:"Expand the square of a sum, the x^2 terms will cancel.", sol:"x^2+4x+4−x^2=20 → 4x+4=20 → 4x=16 → x=4."},
    {q:"Find the value of 37^2 − 33^2 without a calculator, using the difference of squares.", ans:"280", hint:"37^2 − 33^2 = (37−33)(37+33).", sol:"(37−33)(37+33) = 4 · 70 = 280."},
    {q:"Find the value of (2x − 1)^2 + 4x at x = 3.", ans:"37", hint:"Expand the square of a difference, combine like terms, then substitute x = 3.", sol:"(2x−1)^2 = 4x^2−4x+1. Add 4x: 4x^2−4x+1+4x = 4x^2+1. At x=3: 4·9+1=37. Direct check: (2·3−1)^2+4·3 = 5^2+12 = 25+12 = 37 ✓."},
    {q:"Solve the equation (x − 3)^2 = x^2 − 9x + 18, find x.", ans:"3", hint:"Expand the left side and reduce the equation to a linear one.", sol:"x^2−6x+9 = x^2−9x+18 → −6x+9 = −9x+18 → 3x = 9 → x = 3."},
    {q:"A square's side of 12 cm was increased by 8 cm. By how many cm² did the square's area increase?", ans:"256", hint:"The new area is (a+8)^2, the old one is a^2. The difference equals 2·a·8 + 8^2.", sol:"New area: (12+8)^2 = 20^2 = 400. Old area: 12^2 = 144. Difference: 400 − 144 = 256 cm². Check using the formula: 2·12·8 + 8^2 = 192 + 64 = 256 ✓."},
    {q:"Expand using the formula: (2x + 5)^2 = ...x^2 + ...x + .... What is the constant term?", ans:"25", hint:"The constant term is b^2, where b = 5.", sol:"(2x+5)^2 = (2x)^2 + 2 · 2x · 5 + 5^2 = 4x^2 + 20x + 25. The constant term is 25."},
    {q:"Find the value of the expression: mentally, 998 · 1002, using the difference of squares (1000 − 2)(1000 + 2).", ans:"999996", hint:"1000^2 − 2^2.", sol:"1000^2 − 2^2 = 1000000 − 4 = 999996."},
    {q:"Solve the equation (x + 5)^2 − x^2 = 45, find x.", ans:"2", hint:"Expand the square of a sum — the x^2 terms will cancel.", sol:"x^2 + 10x + 25 − x^2 = 45; 10x + 25 = 45; 10x = 20; x = 2."},
    {q:"A square's side of 15 cm was decreased by 5 cm. By how many square centimeters did the square's area decrease?", ans:"125", hint:"Find the old area (15^2) and the new one ((15−5)^2), then their difference.", sol:"Old area: 15^2 = 225 cm². New area: (15−5)^2 = 10^2 = 100 cm². Difference: 225 − 100 = 125 cm²."},
    {q:"Kolya wrote: (x − 5)^2 = x^2 − 10x − 25. Find his mistake and write the correct constant term.", ans:"25", hint:"The last term of the formula is the square of the second number. What sign can a square have?", sol:"(x − 5)^2 = x^2 − 2 · x · 5 + 5^2 = x^2 − 10x + 25. Kolya made a sign mistake in the last term. Answer: 25."},
    {q:"Calculate 99^2 mentally using the square-of-a-difference formula.", ans:"9801", hint:"Represent 99 as 100 − 1.", sol:"(100 − 1)^2 = 10000 − 200 + 1 = 9801. Answer: 9801."},
    {q:"A square flowerbed was expanded: each of its sides was increased by 2 m. The flowerbed's area increased by 36 m². Find the original side of the flowerbed (in m).", ans:"8", hint:"Let the side be a. Write (a + 2)^2 − a^2 = 36 and expand the square of a sum.", sol:"a^2 + 4a + 4 − a^2 = 36; 4a + 4 = 36; 4a = 32; a = 8. Check: 10^2 − 8^2 = 100 − 64 = 36. Answer: 8."},
    {q:"Given that a − b = 3 and a + b = 11. Find the value of a^2 − b^2.", ans:"33", hint:"Factor a^2 − b^2 — there's no need to find a and b themselves.", sol:"a^2 − b^2 = (a − b)(a + b) = 3 · 11 = 33. Answer: 33."},
    {q:"What number should replace the asterisk in the expression x^2 + 14x + * so that you get a square of a sum?", ans:"49", hint:"14x is twice the product 2 · x · b. Find b.", sol:"2 · x · b = 14x, so b = 7, and b^2 = 49: x^2 + 14x + 49 = (x + 7)^2. Answer: 49."},
    {q:"Find the value of x^2 − 12x + 36 at x = 106.", ans:"10000", hint:"Fold the expression into a square of a difference — the arithmetic becomes very easy.", sol:"x^2 − 12x + 36 = (x − 6)^2. At x = 106: 100^2 = 10000. Answer: 10000."},
    {q:"Solve the equation (x + 3)(x − 3) − x(x − 2) = 7.", ans:"8", hint:"The first product is a difference of squares; after that, the x^2 terms will cancel.", sol:"x^2 − 9 − x^2 + 2x = 7; 2x − 9 = 7; 2x = 16; x = 8. Answer: 8."},
    {q:"Given that a^2 + b^2 = 25 and ab = 12. Find the value of (a + b)^2.", ans:"49", hint:"Expand (a + b)^2 using the formula and find the familiar parts in it.", sol:"(a + b)^2 = a^2 + b^2 + 2ab = 25 + 2 · 12 = 49. Answer: 49."}
  ],
  bonus: {q:"Given that a + b = 9 and a · b = 14. Find the value of a^2 + b^2, without finding the numbers a and b themselves.", ans:"53", hint:"Square the sum (a+b)^2 = a^2 + 2ab + b^2, and express what you need in terms of the known quantities.", sol:"(a+b)^2 = a^2+2ab+b^2. So 9^2 = a^2+b^2+2·14 → 81 = a^2+b^2+28 → a^2+b^2 = 53."},
  test: [
    {q:"Find the value of the expression: the value of (x + 6)^2 at x = 4, applying the square-of-a-sum formula.", ans:"100", sol:"x^2+12x+36 at x=4: 16+48+36=100, or directly (4+6)^2=10^2=100."},
    {q:"Factor x^2 − 16 and indicate which of the two factors equals (x + 4).", opts:["x − 4","x + 4","x − 16","x + 16"], ans:1, sol:"x^2−16 = (x−4)(x+4), the second factor is (x+4)."},
    {q:"Find the value of the expression: mentally, 29^2, using (30 − 1)^2.", ans:"841", sol:"900 − 60 + 1 = 841."},
    {q:"Factor x^2 − 36.", opts:["(x − 6)(x + 6)","(x − 9)(x + 4)","(x − 6)^2","(x − 18)(x + 2)"], ans:0, sol:"36 = 6^2, so (x−6)(x+6)."},
    {q:"Find the value of the expression: mentally, 48 · 52, using the difference of squares (50 − 2)(50 + 2).", ans:"2496", sol:"50^2 − 2^2 = 2500 − 4 = 2496."},
    {q:"Find the value of x^2 − y^2 at x = 15, y = 5.", ans:"200", sol:"(15−5)(15+5) = 10 · 20 = 200."},
    {q:"Expand using the formula (4 − x)^2, then give the coefficient of x (for example, \"-8\").", ans:"-8", sol:"16 − 8x + x^2, the coefficient of x is −8."},
    {q:"Solve the equation (x + 1)^2 − x^2 = 15, find x.", ans:"7", sol:"x^2+2x+1−x^2=15 → 2x+1=15 → 2x=14 → x=7."}
  ],
  lab: [
    {t:"Fast mental squaring", b:"Take any two-digit number ending in 9 or 1 (for example, 19, 21, 31, 39), and work out its square in your head in 5 seconds by representing the number as a round number ± 1: 19 = 20 − 1, 31 = 30 + 1. Check against a calculator — the formula should give an exact result. Try this with 5 different numbers in a row, timing yourself."},
    {t:"Cutting a paper square", b:"Cut out a paper square with a side of 10 grid squares. Measure 3 grid squares from one corner and draw lines splitting the large square into a 7×7 square, a 3×3 square, and two 7×3 rectangles. Calculate the areas of all four parts and add them up — compare the sum to 10×10=100. This way you'll see the formula (7+3)^2 = 7^2 + 2·7·3 + 3^2 with your own hands."},
    {t:"Multiplying numbers near a round number using the difference of squares", b:"Ask an adult to name two numbers that differ from the same round number by the same amount in opposite directions (for example, 98 and 102, both 2 away from 100). Quickly multiply them in your head as (100−2)(100+2) = 100^2 − 2^2 = 9996, and compare the time with ordinary long multiplication."}
  ],
  steps: [
    {title:"Why we need shortcut multiplication formulas", body:"<p>When we multiply the same pair of parentheses over and over in problems, mathematicians long ago noticed that the result always follows the same pattern. These ready-made patterns are called <b>shortcut multiplication formulas (SMF)</b>. They don't give you anything new — you can get the same result by ordinary expansion of parentheses — but they save time, and they come up constantly in quizzes and exams.</p><div class='figure'>__SVG_FSU_SQUARE_ANIM__</div>"},
    {title:"Square of a sum: (a + b)² = a² + 2ab + b²", body:"<h3>Square of a sum</h3><p>(a + b)^2 = a^2 + 2ab + b^2 — &ldquo;the square of the first, plus twice the product, plus the square of the second.&rdquo; Let's check by expanding the parentheses: (a + b)(a + b) = a·a + a·b + b·a + b·b = a^2 + 2ab + b^2. The formula isn't pulled out of thin air — it's just a shorter way of writing the exact same multiplication.</p><div class='note'><span class='hand'>Remember</span>In these formulas, a and b don't have to be single letters: in the example below, the role of &ldquo;a&rdquo; is played by x, and the role of &ldquo;b&rdquo; by 4.</div><p>Example: expand using the formula (x + 4)^2. Here a = x, b = 4. By the formula: x^2 + 2 · x · 4 + 4^2 = x^2 + 8x + 16.</p><div class='warn'><span class='hand'>Common mistake</span>(a + b)^2 ≠ a^2 + b^2 — you can't &ldquo;forget&rdquo; the middle term 2ab! Check it with simple numbers: (2+3)^2 = 25, while 2^2+3^2 = 13 — they don't match, so the middle term is required.</div>", exIdx:0},
    {title:"Square of a difference: (a − b)² = a² − 2ab + b²", body:"<h3>Square of a difference</h3><p>(a − b)^2 = a^2 − 2ab + b^2 — the same principle, only the middle term has a minus sign. A common confusion: thinking that (a − b)^2 = a^2 − b^2. That's wrong! Check it with numbers: (5 − 2)^2 = 3^2 = 9, while 5^2 − 2^2 = 25 − 4 = 21. Different numbers — different formulas.</p><p>Example: expand using the formula (2x − 3)^2. Here a = 2x, b = 3. We get: (2x)^2 − 2 · 2x · 3 + 3^2 = 4x^2 − 12x + 9.</p>", exIdx:1},
    {title:"Difference of squares: a² − b² = (a − b)(a + b)", body:"<h3>Difference of squares</h3><p>a^2 − b^2 = (a − b)(a + b) — &ldquo;the difference of squares equals the product of the difference and the sum.&rdquo; This is the only one of the three formulas where the left side is a <b>difference</b> rather than a full square, and it factors into a product rather than expanding into a trinomial.</p><div class='figure'>__SVG_FSU_DIFF__</div><p>Example: factor x^2 − 25. This is a difference of squares: x^2 − 5^2. By the formula: (x − 5)(x + 5).</p>", exIdx:2},
    {title:"How to know which formula to apply", body:"<h3>How to know which formula to apply</h3><ul><li>You see a parenthesis squared with a &ldquo;+&rdquo; sign inside — that's (a + b)^2, which expands into a trinomial with a &ldquo;+&rdquo; sign in the middle.</li><li>You see a parenthesis squared with a &ldquo;−&rdquo; sign inside — that's (a − b)^2, which expands into a trinomial with a &ldquo;−&rdquo; sign in the middle.</li><li>You see a difference of two squares (no parentheses, just x^2 − 9) — you factor it into the product (x − 3)(x + 3).</li></ul><p>Let's check against our examples: (x+4)^2 — a &ldquo;+&rdquo; sign inside the parentheses, so it's a square of a sum; (2x−3)^2 — a &ldquo;−&rdquo; sign, a square of a difference; x^2−25 — this is a difference of squares with no parentheses.</p>", exIdx:[0,1,2]},
    {title:"Mental math: square of a sum for numbers", body:"<p>First, the formulas are great for fast mental math: 31^2 = (30 + 1)^2 = 900 + 60 + 1 = 961 — this can be worked out in your head in a couple of seconds, without multiplying &ldquo;31 by 31 longhand.&rdquo;</p><p>Example: find the value of 21^2 mentally, using the formula. 21 = 20 + 1. (20 + 1)^2 = 20^2 + 2 · 20 · 1 + 1^2 = 400 + 40 + 1 = 441.</p>", exIdx:3},
    {title:"Mental math: difference of squares for multiplication", body:"<p>Second, for <b>factoring</b>: if you see an expression of the form a^2 − b^2, you can immediately replace it with (a − b)(a + b), which often simplifies further calculations. This same trick works for mental multiplication too.</p><p>Example: find the value of 49 · 51 mentally, without long multiplication. Notice that 49 = 50 − 1 and 51 = 50 + 1. Then 49 · 51 = (50 − 1)(50 + 1) = 50^2 − 1^2 = 2500 − 1 = 2499.</p>", exIdx:4}
  ]
};


/* ---------- func ---------- */
CONTENT_EN.func = {
  goal: "After this topic you'll be able to look at the formula y = kx + b and immediately picture what the graph looks like, construct it from two points, and understand what the numbers k and b mean.",
  explain: "<p>To describe how one quantity depends on another, mathematics uses the <b>coordinate plane</b>: two perpendicular number lines — the horizontal <b>Ox</b> axis (the axis of abscissas) and the vertical <b>Oy</b> axis (the axis of ordinates). The point where the axes meet is called the <b>origin</b>, where both numbers equal zero.</p>"
  + "<div class=\"figure\">__SVG_COORD__</div>"
  + "<p>Any point on the plane is given by a pair of numbers (x; y): the first number is the horizontal coordinate, the second is the vertical one. For example, the point (3; 2) is located 3 units to the right of the origin and 2 units above it.</p>"
  + "<h3>What a linear function is</h3>"
  + "<p>A <b>linear function</b> is a relationship of the form y = kx + b, where k and b are given numbers (coefficients), x is the independent variable (the argument), and y is the dependent variable (the value of the function). The graph of a linear function is always a <b>straight line</b>.</p>"
  + "<h3>What k and b mean</h3>"
  + "<ul><li><b>b</b> is the value of y when x = 0. So the point (0; b) is where the graph crosses the Oy axis. The number b shows where the line &ldquo;starts&rdquo; vertically.</li><li><b>k</b> is the <b>slope</b> of the line. It shows how much y changes when x increases by 1. If k &gt; 0, the line goes up from left to right (the function is increasing). If k &lt; 0, the line goes down (the function is decreasing). The greater the absolute value |k|, the steeper the slope.</li></ul>"
  + "<p>Watch how this works:</p>"
  + "<div class=\"figure\">__SVG_FUNC_SLOPE_ANIM__</div>"
  + "<p>A special case: if k = 0, the function becomes y = b — a horizontal line, because y doesn't depend on x at all.</p>"
  + "<p>All three cases are visible on one diagram: the line y = 2x (k = 2 &gt; 0) is increasing, the line y = −x + 3 (k = −1 &lt; 0) is decreasing, and the line y = 2 (k = 0) is horizontal.</p>"
  + "<div class=\"figure\">__SVG_FUNC_SLOPES__</div>"
  + "<h3>How to construct a graph from two points</h3>"
  + "<p>Exactly one straight line passes through any two distinct points, so to construct a graph it's enough to find the coordinates of two points, mark them on the coordinate plane, and draw a straight line through them (using a ruler, all the way to the edges of the page).</p>"
  + "<ul><li>1. Pick any convenient value of x (often x = 0 and one more, for example x = 2 or x = -1).</li><li>2. Substitute x into the formula y = kx + b and calculate y.</li><li>3. Repeat for the second value of x.</li><li>4. Mark both points on the coordinate plane and connect them with a straight line, extending it in both directions.</li></ul>"
  + "<h3>Intersections with the coordinate axes</h3>"
  + "<p>The graph always crosses the Oy axis at the point (0; b) — substitute x = 0. The graph crosses the Ox axis where y = 0: you need to solve the equation kx + b = 0 for x, that is x = −b/k (if k ≠ 0).</p>"
  + "<div class=\"note\"><span class=\"hand\">Remember</span>b is &ldquo;where the line starts&rdquo; on the Oy axis (at x=0), and k is &ldquo;how steeply it goes&rdquo; and in which direction: up (k&gt;0) or down (k&lt;0).</div>"
  + "<div class=\"warn\"><span class=\"hand\">Common mistake</span>Don't mix up the order of a point's coordinates! In the notation (x; y), the first number is the move horizontally, the second is vertically. The point (2; 5) and the point (5; 2) are two completely different points on the plane.</div>",
  examples: [
    {t:"Given the function y = 2x + 1. Find y at x = 0 and at x = 3, and construct the graph from these points.", s:"At x=0: y=2·0+1=1, point (0;1). At x=3: y=2·3+1=7, point (3;7). We mark both points and draw a line through them.<div class=\"figure\">__SVG_FUNC7_EX0_LINE2X1__</div>"},
    {t:"Find the slope and the coefficient b for the function y = −3x + 4.", s:"The function is already in the form y=kx+b, so we compare: k=−3 (the line is decreasing), b=4 (crosses Oy at the point (0;4)).<div class=\"figure\">__SVG_FUNC7_EX1_SLOPENEG3__</div>"},
    {t:"Find the point where the graph of the function y = 2x − 6 crosses the Ox axis.", s:"On the Ox axis, y is always 0. We solve the equation 2x−6=0: 2x=6, x=3. The intersection point is (3; 0).<div class=\"figure\">__SVG_FUNC7_EX2_XINTERCEPT__</div>"},
    {t:"Write the function, knowing that k = 5 and the graph passes through the point (0; -2).", s:"Since the graph passes through (0;-2), it means that at x=0, y=-2. But y at x=0 equals b. So b=-2. The function is: y=5x−2.<div class=\"figure\">__SVG_FUNC7_EX3_SLOPE5POINT__</div>"}
  ],
  tasks: [
    {q:"Given the function y = 3x + 2. Find y at x = 0.", ans:"2", hint:"Substitute x = 0 into the formula.", sol:"y = 3·0 + 2 = 2."},
    {q:"Given the function y = 3x + 2. Find y at x = 4.", ans:"14", hint:"Substitute x = 4 into the formula.", sol:"y = 3·4 + 2 = 12 + 2 = 14."},
    {q:"What is the slope k in the function y = 5x − 7?", ans:"5", hint:"k is the number in front of x.", sol:"In the formula y=kx+b, the number in front of x is k=5."},
    {q:"What is the coefficient b in the function y = 5x − 7?", ans:"-7", hint:"b is the number without x (with its sign).", sol:"In the formula y=kx+b, the constant term is b=−7."},
    {q:"Given the function y = −2x + 6. Find y at x = 1.", ans:"4", hint:"Substitute x = 1: −2·1+6.", sol:"y = −2·1 + 6 = 4."},
    {q:"At what value of x does the graph of the function y = x + 5 cross the Oy axis? Give the x-coordinate of this point.", ans:"0", hint:"The Oy axis is always x = 0.", sol:"The intersection with Oy always happens at x=0."},
    {q:"The function y = x + 5. What is y at the point where the graph crosses the Oy axis?", ans:"5", hint:"Substitute x=0 into the formula.", sol:"y = 0 + 5 = 5, that is, the graph crosses Oy at the point (0;5)."},
    {q:"The function y = 4x − 8. Find x for which y = 0 (the intersection with the Ox axis).", ans:"2", hint:"Solve the equation 4x − 8 = 0.", sol:"4x = 8, x = 2."},
    {q:"Find the value of k for the function given by the formula y = −x + 3 (take the sign into account).", ans:"-1", hint:"y = −x + 3 is y = (−1)x + 3.", sol:"k = −1, b = 3."},
    {q:"The function y = 2x + b passes through the point (0; 9). What is b?", ans:"9", hint:"At x=0, the value of y equals b.", sol:"Since at x=0, y=b, and by the condition y=9, it means b=9."},
    {q:"The function y = kx − 3 passes through the point (2; 5). What is k?", ans:"4", hint:"Substitute x=2, y=5 into the formula and solve the equation for k.", sol:"5 = k·2 − 3 → 2k = 8 → k = 4."},
    {q:"Given the function y = −3x + 12. Find the x-coordinate of the point where the graph crosses the Ox axis.", ans:"4", hint:"Solve the equation −3x+12=0.", sol:"−3x = −12, x = 4."},
    {q:"The graph of the function y = kx + b passes through the points (0; -4) and (2; 0). What is b?", ans:"-4", hint:"At x=0 the value of y always equals b.", sol:"The point (0;-4) means that at x=0, y=-4, so b=-4."},
    {q:"The graph of the function y = kx + b passes through the points (0; -4) and (2; 0). What is k?", ans:"2", hint:"First find b (at x=0), then substitute the second point.", sol:"b=-4 (from the point (0;-4)). Substitute (2;0): 0 = k·2 + (-4) → 2k=4 → k=2."},
    {q:"The function y = 0.5x + 1. Find y at x = 6.", ans:"4", hint:"0.5 · 6 = 3.", sol:"y = 0.5·6 + 1 = 3 + 1 = 4."},
    {q:"A line passes through the points (1; 3) and (3; 7). Find the slope k (the change in y divided by the change in x).", ans:"2", hint:"k = (y2 − y1) / (x2 − x1).", sol:"k = (7 − 3)/(3 − 1) = 4/2 = 2."},
    {q:"A line passes through the points (1; 3) and (3; 7), with k = 2 (from the previous calculation). Find b using the point (1; 3).", ans:"1", hint:"Substitute x=1, y=3, k=2 into the formula y=kx+b and find b.", sol:"3 = 2·1 + b → b = 1."},
    {q:"How many intersection points do the graphs of the functions y = 2x + 3 and y = 2x − 5 have (give the number: 0, 1, or 2)?", ans:"0", hint:"These functions have the same slope k = 2. What does that mean for the lines?", sol:"Both functions have k=2 — the lines are parallel (same slope, different b). Parallel lines don't intersect, so the number of intersection points is 0."},
    {q:"Taxi fare: y = 40 + 15x, where x is the number of kilometers and y is the cost in rubles. How much will a 6 km ride cost?", ans:"130", hint:"Substitute x=6.", sol:"y = 40 + 15·6 = 40 + 90 = 130 rubles."},
    {q:"Taxi fare: y = 40 + 15x (y is the cost in rubles, x is km). The ride cost 145 rubles. How many kilometers were traveled?", ans:"7", hint:"Solve the equation 40+15x=145 for x.", sol:"15x = 145 − 40 = 105; x = 105 : 15 = 7 km."},
    {q:"Given the function y = −4x + 9. Find y at x = 3.", ans:"-3", hint:"Substitute x = 3 into the formula.", sol:"y = −4 · 3 + 9 = −12 + 9 = −3."},
    {q:"The function y = kx + b passes through the points (0; −3) and (4; 5). Find k.", ans:"2", hint:"At x = 0, the value of y equals b. Then substitute the second point.", sol:"From the point (0; −3) we see that b = −3. Substitute (4; 5): 5 = 4k − 3; 4k = 8; k = 2."},
    {q:"Bike rental costs a 150-ruble deposit plus 40 rubles per hour. How many hours did the customer ride if they paid 470 rubles?", ans:"8", hint:"Set up the equation 150 + 40x = 470 and solve it.", sol:"40x = 470 − 150 = 320; x = 320 : 40 = 8 hours."},
    {q:"A line passes through the points (−2; 1) and (2; 9). Find the coordinate b (the value of y at x = 0).", ans:"5", hint:"First find the slope k = (change in y) : (change in x), then substitute one of the points.", sol:"k = (9 − 1) : (2 − (−2)) = 8 : 4 = 2. Substitute the point (−2; 1): 1 = 2 · (−2) + b; 1 = −4 + b; b = 5."},
    {q:"A 20 cm candle burns down by 2 cm every hour. Its height after t hours is h = 20 − 2t. After how many hours will the candle burn down completely?", ans:"10", hint:"The candle has burned down — meaning its height has become 0.", sol:"20 − 2t = 0; 2t = 20; t = 10. Answer: 10."},
    {q:"The point (m; 7) lies on the graph of the function y = 3x − 5. Find m.", ans:"4", hint:"Substitute y = 7 into the formula and find x.", sol:"7 = 3m − 5; 3m = 12; m = 4. Answer: 4."},
    {q:"The graphs of the functions y = 2x + 1 and y = −x + 7 intersect. Find the ordinate (y) of the intersection point.", ans:"5", hint:"At the intersection point, the y-values of both functions are equal: set the right-hand sides equal to each other.", sol:"2x + 1 = −x + 7; 3x = 6; x = 2. y = 2 · 2 + 1 = 5. Check: −2 + 7 = 5. Answer: 5."},
    {q:"Plan A: a 300-ruble subscription fee plus 2 rubles per minute of calls. Plan B: no subscription fee, 5 rubles per minute. At how many minutes of calls per month do both plans cost the same?", ans:"100", hint:"Write the cost for each plan as a function of the number of minutes x and set them equal to each other.", sol:"300 + 2x = 5x; 300 = 3x; x = 100. Check: 300 + 200 = 500 and 5 · 100 = 500. Answer: 100."},
    {q:"Which of the functions is decreasing (its graph goes down from left to right)?", opts:["y = 2x − 5","y = −0.5x + 3","y = 4","y = x"], ans:1, hint:"Look at the sign of the slope k.", sol:"A function is decreasing when k is negative. Only y = −0.5x + 3 has k = −0.5, which is less than zero."},
    {q:"Sasha was looking for the point where the graph of y = 2x − 6 crosses the Ox axis and got (0; −6). Find the mistake and give the correct abscissa (x) of the point where it crosses the Ox axis.", ans:"3", hint:"Sasha found a point on the Oy axis. On the Ox axis, it's y that equals zero, not x.", sol:"On the Ox axis, y = 0: 2x − 6 = 0; x = 3. The point (0; −6) is the intersection with the Oy axis. Answer: 3."},
    {q:"A line passes through the points (1; 5) and (3; 1). Find the value of y on this line at x = 5.", ans:"-3", hint:"First find k = (change in y) : (change in x), then b, then substitute x = 5.", sol:"k = (1 − 5) : (3 − 1) = −2. 5 = −2 · 1 + b, b = 7. y = −2x + 7; at x = 5: y = −10 + 7 = −3. Answer: −3."},
    {q:"The line y = −2x + 6, together with the coordinate axes, bounds a triangle. Find its area.", ans:"9", hint:"Find the points where the line crosses the axes — these are the legs of a right triangle.", sol:"With the Oy axis: (0; 6). With the Ox axis: −2x + 6 = 0, x = 3, point (3; 0). It's a right triangle with legs 6 and 3: S = 6 · 3 : 2 = 9. Answer: 9."}
  ],
  bonus: {q:"Three points A(1; 2), B(3; 6), and C(5; k) lie on the same line. Find k.", ans:"10", hint:"First find the line's slope from points A and B, then use it for point C.", sol:"The slope from A and B: k_line = (6−2)/(3−1) = 4/2 = 2. Find b from point A: 2 = 2·1+b → b=0. The formula is: y=2x. For point C(5;k): k = 2·5 = 10."},
  test: [
    {q:"Given the function y = 4x − 1. Find y at x = 2.", ans:"7", sol:"y = 4·2 − 1 = 7."},
    {q:"What is the slope k in the function y = −6x + 2?", ans:"-6", sol:"The number in front of x is −6."},
    {q:"What is the coefficient b in the function y = −6x + 2?", ans:"2", sol:"The constant term is 2."},
    {q:"The function y = 3x − 9. Find x for which the graph crosses the Ox axis (y = 0).", ans:"3", sol:"3x=9, x=3."},
    {q:"The function y = kx + b passes through the points (0; 5) and (1; 8). What is k?", ans:"3", sol:"b=5 (from the point (0;5)). 8 = k·1+5 → k=3."},
    {q:"Is the function y = −4x + 1 increasing or decreasing?", opts:["Increasing","Decreasing","Doesn't change","Can't be determined"], ans:1, sol:"k=−4&lt;0, so the function is decreasing."},
    {q:"Phone plan: y = 200 + 5x, where x is minutes over the plan and y is the total amount in rubles. How much will be paid for 30 minutes over the plan?", ans:"350", sol:"y = 200 + 5·30 = 200+150 = 350."},
    {q:"A line passes through the points (2; 4) and (4; 10). Find the slope k.", ans:"3", sol:"k = (10−4)/(4−2) = 6/2 = 3."}
  ],
  lab: [
    {t:"Mobile plan as a linear function", b:"Find your own mobile plan at home, with a subscription fee and a per-minute rate beyond the included package (or make up a similar one: 300 rubles a month plus 2 rubles per minute over the limit). Write the formula y = kx + b, where x is the minutes over the package and y is the total amount due. Calculate the cost for three different values of x and see how the total grows."},
    {t:"Speed-time-distance graph", b:"Take a bike, a scooter, or just imagine moving at a constant speed of 5 km/h. Write the distance formula s = 5t, where t is the time in hours. This is also a linear function (with b=0). Draw the graph on paper: mark points at t=0, 1, 2, 3 hours and calculate s for each. Check that all the points lie on the same line."},
    {t:"Measuring the slope of a staircase or ramp", b:"Find a staircase, ramp, or slide at home. Measure the height of the rise and the length of the base (the horizontal distance) with a tape measure. Divide the height by the base length — that's the slope k, showing how steep the incline is. Compare k for different staircases or ramps: the greater k, the steeper the rise."},
    {t:"Constructing a graph from two points on graph paper", b:"Take a sheet of graph paper, draw the Ox and Oy axes. For the function y = 2x − 1, calculate y at x=0 and x=3, mark both points, and draw a straight line through them with a ruler, extending it in both directions across the page. Check a third point (for example, x=1, y=1) — it should land exactly on this line."}
  ],
  steps: [
    {title:"The coordinate plane", body:"<p>To describe how one quantity depends on another, mathematics uses the <b>coordinate plane</b>: two perpendicular number lines — the horizontal <b>Ox</b> axis (the axis of abscissas) and the vertical <b>Oy</b> axis (the axis of ordinates). The point where the axes meet is called the <b>origin</b>, where both numbers equal zero.</p><p>Any point on the plane is given by a pair of numbers (x; y): the first number is the horizontal coordinate, the second is the vertical one.</p><div class=\"figure\">__SVG_COORD__</div>"},
    {title:"What a linear function is", body:"<h3>What a linear function is</h3><p>A <b>linear function</b> is a relationship of the form y = kx + b, where k and b are given numbers (coefficients), x is the independent variable (the argument), and y is the dependent variable (the value of the function). The graph of a linear function is always a <b>straight line</b>.</p><p>For example, for y = 2x + 1: at x=0 we get y=2·0+1=1, point (0;1); at x=3 we get y=2·3+1=7, point (3;7). We mark both points and draw a line through them.</p>", exIdx:0},
    {title:"What k and b mean", body:"<h3>What k and b mean</h3><ul><li><b>b</b> is the value of y when x = 0. So the point (0; b) is where the graph crosses the Oy axis. The number b shows where the line &ldquo;starts&rdquo; vertically.</li><li><b>k</b> is the <b>slope</b> of the line. It shows how much y changes when x increases by 1. If k &gt; 0, the line goes up from left to right (the function is increasing). If k &lt; 0, the line goes down (the function is decreasing). The greater the absolute value |k|, the steeper the slope.</li></ul><p>Watch how this works:</p><div class=\"figure\">__SVG_FUNC_SLOPE_ANIM__</div><p>For y = −3x + 4, comparing with y=kx+b: k=−3 (the line is decreasing), b=4 (crosses Oy at the point (0;4)).</p>", exIdx:1},
    {title:"Three cases of slope", body:"<p>A special case: if k = 0, the function becomes y = b — a horizontal line, because y doesn't depend on x at all.</p><p>All three cases are visible on one diagram: the line y = 2x (k = 2 &gt; 0) is increasing, the line y = −x + 3 (k = −1 &lt; 0) is decreasing, and the line y = 2 (k = 0) is horizontal.</p><div class=\"figure\">__SVG_FUNC_SLOPES__</div>"},
    {title:"How to construct a graph from two points", body:"<h3>How to construct a graph from two points</h3><p>Exactly one straight line passes through any two distinct points, so to construct a graph it's enough to find the coordinates of two points, mark them on the coordinate plane, and draw a straight line through them (using a ruler, all the way to the edges of the page).</p><ul><li>1. Pick any convenient value of x (often x = 0 and one more, for example x = 2 or x = -1).</li><li>2. Substitute x into the formula y = kx + b and calculate y.</li><li>3. Repeat for the second value of x.</li><li>4. Mark both points on the coordinate plane and connect them with a straight line, extending it in both directions.</li></ul>", exIdx:0},
    {title:"Intersections with the coordinate axes", body:"<h3>Intersections with the coordinate axes</h3><p>The graph always crosses the Oy axis at the point (0; b) — substitute x = 0. The graph crosses the Ox axis where y = 0: you need to solve the equation kx + b = 0 for x, that is x = −b/k (if k ≠ 0).</p><p>For y = 2x − 6: on the Ox axis, y is always 0. We solve the equation 2x−6=0: 2x=6, x=3. The intersection point is (3; 0).</p><div class=\"note\"><span class=\"hand\">Remember</span>b is &ldquo;where the line starts&rdquo; on the Oy axis (at x=0), and k is &ldquo;how steeply it goes&rdquo; and in which direction: up (k&gt;0) or down (k&lt;0).</div>", exIdx:2},
    {title:"Finding the function from k and a known point", body:"<p>If the slope k and one point the graph passes through are known, the function can be recovered. Let k = 5, and the graph passes through the point (0; -2). Since the graph passes through (0;-2), it means that at x=0, y=-2. But y at x=0 equals b. So b=-2. The function is: y=5x−2.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>Don't mix up the order of a point's coordinates! In the notation (x; y), the first number is the move horizontally, the second is vertically. The point (2; 5) and the point (5; 2) are two completely different points on the plane.</div>", exIdx:3}
  ]
};


/* ---------- sys ---------- */
CONTENT_EN.sys = {
  goal: "After this topic you'll be able to solve systems of two equations with two unknowns using the substitution method and the elimination method, and to set up such systems from word problems.",
  explain: "<p>Sometimes a problem has <b>two unknown numbers</b> at once, and one equation isn't enough to find them — you need two conditions, that is, two equations. Such a pair of equations, which must hold <b>simultaneously</b>, is called a <b>system of equations</b>. It's usually written with a curly brace:</p>"
  + "<p>{ x + y = 10<br>{ x − y = 2</p>"
  + "<p>A <b>solution of a system</b> is a pair of numbers (x; y) that turns both the first and the second equation into true statements at the same time. To solve a system means to find all such pairs.</p>"
  + "<p>A system has a visual meaning: each equation defines a line on the coordinate plane, and the solution of the system is the common point of these lines. Watch how this works:</p>"
  + "<div class=\"figure\">__SVG_SYS_GRAPH_ANIM__</div>"
  + "<h3>The substitution method</h3>"
  + "<p>The idea: from one equation we express one variable in terms of the other and substitute this expression into the second equation — then only one unknown is left there.</p>"
  + "<ul><li>1. From any equation, express one variable (for example, y) in terms of the other.</li><li>2. Substitute the resulting expression in place of that variable into the second equation.</li><li>3. Solve the resulting equation with one variable.</li><li>4. Substitute the value found back and find the second variable.</li><li>5. Check your work: substitute both values found into BOTH original equations.</li></ul>"
  + "<h3>The elimination method</h3>"
  + "<p>The idea: if you add (or subtract) the left-hand and right-hand sides of two equations, you can get rid of one of the variables — but for that, the coefficients of that variable must be opposite or equal numbers. Often, before adding, one or both equations need to be multiplied by a suitable number.</p>"
  + "<p>This is like a balance scale: as long as we do the same thing to both sides, the balance isn't disturbed. In the diagram, a scale with the equation x + 3 = 11: if you remove 3 from both pans, you get x = 8.</p>"
  + "<div class=\"figure\">__SVG_BALANCE__</div>"
  + "<ul><li>1. See whether you can immediately add or subtract the equations so that one variable disappears.</li><li>2. If not, multiply one or both equations by numbers so that the coefficients of x (or of y) become opposite.</li><li>3. Add the equations term by term — one variable disappears.</li><li>4. Solve the resulting equation with one variable, then find the second variable from either original equation.</li></ul>"
  + "<h3>How to set up a system from a word problem</h3>"
  + "<p>The main technique is to introduce <b>two labels</b> for the two unknown quantities (for example, x and y), and then, from the conditions of the problem, write <b>two independent conditions</b> as equations: usually one condition about a sum (or a difference), and another about some other relationship (cost, speed, percentages, and so on).</p>"
  + "<div class=\"note\"><span class=\"hand\">Remember</span>The answer to a system is TWO values — x and y. After solving, always substitute both numbers into both original equations — if even one doesn't check out, there's a mistake somewhere.</div>"
  + "<div class=\"warn\"><span class=\"hand\">Common mistake</span>With the elimination method, you must multiply the WHOLE equation by a number — both sides, including the right-hand side (the number after the equals sign) — not just the terms with the variable.</div>",
  examples: [
    {t:"Solve the system using the substitution method: {y = x + 3; 2x + y = 18}.", s:"We already have y expressed in terms of x. Substitute into the second equation: 2x + (x + 3) = 18 → 3x + 3 = 18 → 3x = 15 → x = 5. Then y = 5 + 3 = 8. Check: 2·5+8=18 ✓, 8=5+3 ✓. Answer: x=5, y=8.<div class=\"figure\">__SVG_SYS7_EX0_SUBST_FLOW__</div>"},
    {t:"Solve the system using the elimination method: {x + y = 12; x − y = 4}.", s:"We add the equations term by term: (x+y)+(x−y) = 12+4 → 2x = 16 → x = 8. Substitute into the first: 8 + y = 12 → y = 4. Check: 8+4=12 ✓, 8−4=4 ✓. Answer: x=8, y=4.<div class=\"figure\">__SVG_SYS7_EX1_ADD_ELIM__</div>"},
    {t:"Solve the system using the elimination method: {2x + 3y = 16; x − 3y = -1}.", s:"The coefficients of y are already opposite (3 and −3). We add: (2x+3y)+(x−3y) = 16+(−1) → 3x = 15 → x = 5. Substitute into the first: 2·5 + 3y = 16 → 3y = 6 → y = 2. Check: 2·5+3·2=16 ✓, 5−3·2=−1 ✓. Answer: x=5, y=2.<div class=\"figure\">__SVG_SYS7_EX2_ADD_ELIM2__</div>"},
    {t:"Set up and solve a system: the sum of two numbers is 20, and their difference is 6. Find the numbers.", s:"Let the first number be x, and the second be y. The system: {x + y = 20; x − y = 6}. We add: 2x = 26, x = 13. Then y = 20 − 13 = 7. Check: 13+7=20 ✓, 13−7=6 ✓.<div class=\"figure\">__SVG_SYS7_EX3_BARMODEL__</div>"}
  ],
  tasks: [
    {q:"Solve the system {x = y + 4; x + y = 10} using the substitution method. What is y?", ans:"3", hint:"Substitute x=y+4 into the second equation.", sol:"(y+4)+y=10 → 2y+4=10 → 2y=6 → y=3."},
    {q:"Solve the system {x = y + 4; x + y = 10} using the substitution method. What is x?", ans:"7", hint:"First find y, then substitute into x=y+4.", sol:"y=3 (from the previous step). x = 3+4 = 7."},
    {q:"Solve the system {x + y = 15; x − y = 5} using the elimination method. What is x?", ans:"10", hint:"Add the equations term by term, y will disappear.", sol:"2x=20, x=10."},
    {q:"Solve the system {x + y = 15; x − y = 5} using the elimination method. What is y?", ans:"5", hint:"Substitute the x you found into either equation.", sol:"x=10, so 10+y=15 → y=5."},
    {q:"Solve the system {2x + y = 11; y = x + 2}. What is x?", ans:"3", hint:"Substitute y=x+2 into the first equation.", sol:"2x+(x+2)=11 → 3x+2=11 → 3x=9 → x=3."},
    {q:"Solve the system {2x + y = 11; y = x + 2}. What is y?", ans:"5", hint:"Substitute the x you found into y=x+2.", sol:"y = 3+2 = 5."},
    {q:"Solve the system {3x + 2y = 16; x = 4}. What is y (x is already known from the second equation)?", ans:"2", hint:"Substitute x=4 into the first equation.", sol:"3·4+2y=16 → 12+2y=16 → 2y=4 → y=2."},
    {q:"Solve the system {x + 2y = 12; x − y = 3} using the elimination method (by subtracting the equations). What is y?", ans:"3", hint:"Subtract the second equation from the first: (x+2y)−(x−y)=12−3.", sol:"3y=9, y=3."},
    {q:"Solve the system {x + 2y = 12; x − y = 3}. What is x?", ans:"6", hint:"Substitute y=3 into either equation.", sol:"x − 3 = 3 → x = 6. Check: 6+2·3=12 ✓."},
    {q:"Solve the system {4x − y = 10; x + y = 5}. What is x?", ans:"3", hint:"Add the equations term by term — y will disappear.", sol:"5x=15, x=3."},
    {q:"Solve the system {4x − y = 10; x + y = 5}. What is y?", ans:"2", hint:"Substitute x=3 into x+y=5.", sol:"3+y=5, y=2."},
    {q:"The sum of two numbers is 24, and their difference is 8. Find the larger number.", ans:"16", hint:"Label the numbers x and y, set up the system {x+y=24; x−y=8}, and add the equations.", sol:"2x=32, x=16. Check: y=24−16=8, 16−8=8 ✓."},
    {q:"The sum of two numbers is 24, and their difference is 8. Find the smaller number.", ans:"8", hint:"Use the larger number you already found.", sol:"y = 24 − 16 = 8."},
    {q:"Solve the system {2x + 3y = 13; 3x − 3y = 12} using the elimination method. What is x?", ans:"5", hint:"The coefficients of y are already opposite (3 and −3); add the equations.", sol:"5x=25, x=5."},
    {q:"Solve the system {2x + 3y = 13; 3x − 3y = 12}. What is y?", ans:"1", hint:"Substitute x=5 into the first equation.", sol:"2·5+3y=13 → 10+3y=13 → 3y=3 → y=1."},
    {q:"There are 32 students in a class. There are 4 more boys than girls. How many boys are in the class?", ans:"18", hint:"Let b be boys and g be girls: {b+g=32; b−g=4}.", sol:"Add: 2b=36, b=18. Check: g=32−18=14, 18−14=4 ✓."},
    {q:"Solve the system {5x + 2y = 19; 3x + 2y = 13} using the elimination method (by subtraction). What is x?", ans:"3", hint:"Subtract the second equation from the first — y will disappear.", sol:"(5x+2y)−(3x+2y)=19−13 → 2x=6 → x=3."},
    {q:"Solve the system {5x + 2y = 19; 3x + 2y = 13}. What is y?", ans:"2", hint:"Substitute x=3 into either equation.", sol:"3·3+2y=13 → 9+2y=13 → 2y=4 → y=2."},
    {q:"3 notebooks and 2 pens cost 90 rubles, and 3 of the same notebooks and 5 of the same pens cost 135 rubles. How much does one pen cost?", ans:"15", hint:"Let n be a notebook and p be a pen: {3n+2p=90; 3n+5p=135}. Subtract the first equation from the second.", sol:"(3n+5p)−(3n+2p)=135−90 → 3p=45 → p=15."},
    {q:"3 notebooks and 2 pens cost 90 rubles, and a pen costs 15 rubles (from the previous problem). How much does one notebook cost?", ans:"20", hint:"Substitute the cost of a pen into the first equation.", sol:"3n+2·15=90 → 3n+30=90 → 3n=60 → n=20. Check: 3·20+5·15=60+75=135 ✓."},
    {q:"Solve the system {2x − y = 7; x + y = 11} using the elimination method. What is x?", ans:"6", hint:"Add the equations term by term — y will disappear.", sol:"3x = 18, x = 6."},
    {q:"Solve the system {2x − y = 7; x + y = 11}. What is y?", ans:"5", hint:"Substitute the x you found into either equation.", sol:"x = 6, so 6 + y = 11, y = 5."},
    {q:"Solve the system {3x + 2y = 16; x − y = 2} using the elimination method. What is x?", ans:"4", hint:"Multiply the second equation by 2 so the coefficients of y become opposite, and add the equations.", sol:"Multiply the second by 2: 2x − 2y = 4. Add it to the first: (3x+2y)+(2x−2y) = 16+4; 5x = 20; x = 4."},
    {q:"4 buns and 3 pastries cost 172 rubles, and 4 of the same buns and 5 of the same pastries cost 220 rubles. How much does one pastry cost?", ans:"24", hint:"Let b be the cost of a bun and p the cost of a pastry: {4b+3p=172; 4b+5p=220}. Subtract the first equation from the second.", sol:"(4b+5p) − (4b+3p) = 220 − 172; 2p = 48; p = 24."},
    {q:"120 tickets were sold for a school play: children's tickets at 100 rubles and adult tickets at 250 rubles. The revenue was 18,000 rubles. How many adult tickets were sold?", ans:"40", hint:"Let x be the number of children's tickets and y the number of adult tickets: one equation about the count, the other about the money.", sol:"{x + y = 120; 100x + 250y = 18000}. From the first, x = 120 − y: 12000 − 100y + 250y = 18000; 150y = 6000; y = 40. Answer: 40."},
    {q:"A boat travels 24 km downstream in 2 hours, and the same 24 km upstream in 3 hours. Find the current's speed (in km/h).", ans:"2", hint:"Let v be the boat's own speed and u the current's speed. Downstream the speed is v + u, upstream it's v − u.", sol:"v + u = 24 : 2 = 12; v − u = 24 : 3 = 8. Subtract: 2u = 4, u = 2. Answer: 2."},
    {q:"The pair of numbers (2; −1) is a solution of the system {ax + y = 7; x − by = 5}. Find a + b.", ans:"7", hint:"Substitute x = 2 and y = −1 into each equation — you'll get equations for a and for b.", sol:"2a − 1 = 7, a = 4. 2 − b · (−1) = 5, 2 + b = 5, b = 3. a + b = 7. Answer: 7."},
    {q:"Ira was solving the system {3x + 2y = 12; x − 2y = 4} by elimination and got 4x = 8, x = 2. Find the mistake and give the correct value of x.", ans:"4", hint:"Check how Ira added the right-hand sides of the equations.", sol:"Add term by term: 4x = 12 + 4 = 16, x = 4 (Ira made a mistake in the right-hand side). Then 4 − 2y = 4, y = 0. Check: 12 + 0 = 12 ✓. Answer: 4."},
    {q:"Solve the system {2x + 3y = 12; 3x − 2y = 5} and find the value of x + y.", ans:"5", hint:"Multiply the first equation by 2 and the second by 3 — the coefficients of y will become opposite.", sol:"4x + 6y = 24 and 9x − 6y = 15. Add: 13x = 39, x = 3. 2 · 3 + 3y = 12, y = 2. x + y = 5. Answer: 5."},
    {q:"A piggy bank has 25 coins of 2 and 5 rubles, totaling 80 rubles. How many 5-ruble coins are in the piggy bank?", ans:"10", hint:"Let x be the number of 2-ruble coins and y the number of 5-ruble coins. One equation is about the number of coins, the other about the total.", sol:"{x + y = 25; 2x + 5y = 80}. x = 25 − y: 50 − 2y + 5y = 80; 3y = 30; y = 10. Answer: 10."},
    {q:"Chickens and rabbits are walking in the yard. Together they have 17 heads and 48 legs. How many rabbits are in the yard?", ans:"7", hint:"A chicken has 2 legs, a rabbit has 4. Set up a system based on the heads and the legs.", sol:"{c + r = 17; 2c + 4r = 48}. Multiply the first by 2 and subtract: 2r = 48 − 34 = 14, r = 7. Check: 10 chickens and 7 rabbits: 20 + 28 = 48 ✓. Answer: 7."},
    {q:"A mother is 26 years older than her daughter, and in 4 years she will be 3 times as old as her daughter. How old is the daughter now?", ans:"9", hint:"Let the mother be m years old and the daughter d. In 4 years they will be m + 4 and d + 4.", sol:"{m − d = 26; m + 4 = 3(d + 4)}. m = d + 26: d + 30 = 3d + 12; 2d = 18; d = 9. Check: in 4 years, 39 and 13, 39 = 3 · 13 ✓. Answer: 9."}
  ],
  bonus: {q:"The perimeter of a rectangle is 34 cm, and its length is 5 cm greater than its width. Find the area of the rectangle (in cm²).", ans:"66", hint:"Let the length be x and the width be y: {2(x+y)=34; x=y+5}. Find x and y, then multiply them.", sol:"x+y=17 and x=y+5. Substitute: (y+5)+y=17 → 2y+5=17 → 2y=12 → y=6, so x=11. Area: 11·6=66 cm²."},
  test: [
    {q:"Solve the system {x = y + 6; x + y = 20}. What is y?", ans:"7", sol:"(y+6)+y=20 → 2y=14 → y=7."},
    {q:"Solve the system {x = y + 6; x + y = 20}. What is x?", ans:"13", sol:"x=7+6=13."},
    {q:"Solve the system {x + y = 14; x − y = 2} using the elimination method. What is x?", ans:"8", sol:"2x=16, x=8."},
    {q:"Solve the system {x + y = 14; x − y = 2}. What is y?", ans:"6", sol:"8+y=14, y=6."},
    {q:"Solve the system {3x + y = 17; 2x − y = 8} using the elimination method. What is x?", ans:"5", sol:"5x=25, x=5."},
    {q:"Solve the system {3x + y = 17; 2x − y = 8}. What is y?", ans:"2", sol:"3·5+y=17 → y=2."},
    {q:"What is the solution of the system {x + y = 6; x − y = 6}?", opts:["x=6, y=0","x=0, y=6","x=3, y=3","x=12, y=-6"], ans:0, sol:"Add: 2x=12, x=6. Then y=6−6=0."},
    {q:"Two shelves together have 40 books. The first shelf has 8 more books than the second. How many books are on the first shelf?", ans:"24", sol:"{s1+s2=40; s1−s2=8}. Add: 2·s1=48, s1=24."}
  ],
  lab: [
    {t:"An alloy of two metals", b:"Imagine you need to make a 10 kg alloy of copper and tin, where there should be 2 kg more copper than tin. Label the mass of copper x and the mass of tin y, and set up the system {x+y=10; x−y=2}. Solve it using the elimination method and check that the total mass really is 10 kg. Try coming up with a similar problem about a mix of two kinds of nuts."},
    {t:"The problem of a river's current speed", b:"A boat covers a distance faster downstream than upstream. Let v be the boat's own speed and u be the current's speed. If the boat's speed downstream is v+u, and upstream it's v−u, and both of these speeds are known (for example, 18 km/h downstream and 12 km/h upstream), set up the system {v+u=18; v−u=12} and find the boat's own speed and the current's speed using the elimination method."},
    {t:"Counting money in a piggy bank", b:"Take (or imagine) a piggy bank with coins of only two kinds — for example, 5-ruble and 10-ruble coins, 20 coins in total worth 150 rubles. Label the number of 5-ruble coins x and the number of 10-ruble coins y. Set up the system {x+y=20; 5x+10y=150} and solve it using the substitution method by expressing x=20−y from the first equation."},
    {t:"The problem of two relatives and their ages", b:"Ask two relatives (or make up) the sum of their ages and the difference in age. For example, a sum of 65 years and a difference of 15 years. Set up the system {x+y=65; x−y=15}, solve it using the elimination method, and find each person's age. Check the result — substitute both numbers back into the original conditions."}
  ],
  steps: [
    {title:"What a system of equations is", body:"<p>Sometimes a problem has <b>two unknown numbers</b> at once, and one equation isn't enough to find them — you need two conditions, that is, two equations. Such a pair of equations, which must hold <b>simultaneously</b>, is called a <b>system of equations</b> and is usually written with a curly brace: { x + y = 10; x − y = 2.</p><p>A <b>solution of a system</b> is a pair of numbers (x; y) that turns both the first and the second equation into true statements at the same time. A system has a visual meaning: each equation defines a line on the coordinate plane, and the solution is the common point of these lines. Watch how this works:</p><div class=\"figure\">__SVG_SYS_GRAPH_ANIM__</div>"},
    {title:"The substitution method", body:"<h3>The substitution method</h3><p>The idea: from one equation we express one variable in terms of the other and substitute this expression into the second equation — then only one unknown is left there.</p><ul><li>1. From any equation, express one variable (for example, y) in terms of the other.</li><li>2. Substitute the resulting expression in place of that variable into the second equation.</li><li>3. Solve the resulting equation with one variable.</li><li>4. Substitute the value found back and find the second variable.</li><li>5. Check your work: substitute both values found into BOTH original equations.</li></ul><p>Example: in the system {y = x + 3; 2x + y = 18}, y is already expressed in terms of x, so all that's left is to substitute it into the second equation.</p>", exIdx:0},
    {title:"The elimination method: the variable disappears on its own", body:"<h3>The elimination method</h3><p>The idea: if you add (or subtract) the left-hand and right-hand sides of two equations, you can get rid of one of the variables — but for that, the coefficients of that variable must be opposite or equal numbers. This is like a balance scale: as long as we do the same thing to both sides, the balance isn't disturbed.</p><div class=\"figure\">__SVG_BALANCE__</div><p>In the system {x + y = 12; x − y = 4}, the coefficients of y are 1 and −1, that is, already opposite. We add the equations term by term, and y disappears right away.</p>", exIdx:1},
    {title:"The elimination method: the coefficients are already set", body:"<p>Sometimes the numbers in front of the variable differ not only in sign but also match in absolute value, without being limited to ±1 — you can still add the equations right away, without multiplying them first. In the system {2x + 3y = 16; x − 3y = −1}, the coefficients of y are 3 and −3, already opposite, so we immediately add the equations term by term and the variable y disappears.</p>", exIdx:2},
    {title:"How to set up a system from a word problem", body:"<h3>How to set up a system from a word problem</h3><p>The main technique is to introduce <b>two labels</b> for the two unknown quantities (for example, x and y), and then, from the conditions of the problem, write <b>two independent conditions</b> as equations: usually one condition about a sum (or a difference), and another about some other relationship.</p><p>Let the first number be x, and the second be y. &ldquo;The sum of two numbers is 20, and their difference is 6&rdquo; turns into the system {x + y = 20; x − y = 6} — and is solved the same way, by elimination.</p>", exIdx:3},
    {title:"Checking the solution", body:"<div class=\"note\"><span class=\"hand\">Remember</span>The answer to a system is TWO values — x and y. After solving, always substitute both numbers into both original equations — if even one doesn't check out, there's a mistake somewhere.</div><div class=\"warn\"><span class=\"hand\">Common mistake</span>With the elimination method, you must multiply the WHOLE equation by a number — both sides, including the right-hand side (the number after the equals sign) — not just the terms with the variable.</div>", exIdx:[0,3]}
  ]
};


/* ---------- ang ---------- */
CONTENT_EN.ang = {
  goal: "After this topic you'll learn to find adjacent and vertical angles, use an angle's bisector, and quickly calculate unknown angles at intersecting lines.",
  explain: "<p>When two lines intersect, or a ray &ldquo;leans&rdquo; against a line, angles with special properties are formed. Let's look at two main kinds: <b>adjacent</b> and <b>vertical</b> angles.</p>"
  + "<h3>Adjacent angles</h3>"
  + "<p>Two angles are called <b>adjacent</b> if they share one side, and their other two sides are opposite rays (that is, they form a straight line). In other words: adjacent angles together &ldquo;straighten out&rdquo; into a straight angle.</p>"
  + "<ul><li>The sum of adjacent angles is always <b>180°</b>.</li><li>If one of the adjacent angles is known, the other is found by the formula: 180° − (known angle).</li><li>An adjacent angle can be acute (then its neighbor is obtuse) or the other way around.</li><li>If both adjacent angles are equal, each of them equals 90° — this is exactly the case of two perpendicular lines.</li></ul>"
  + "<p>In the diagram, a ray from point O splits a straight angle into two adjacent angles: ∠1 = 65° and ∠2 = 115°. Their sum is 65° + 115° = 180°, and the second angle is easy to find: 180° − 65° = 115°.</p>"
  + "<div class='figure'>__SVG_ANG_ADJ__</div>"
  + "<div class='note'><span class='hand'>Remember</span>Adjacent angles are NOT just any two angles on a drawing — they're specifically ones that sit &ldquo;side by side&rdquo; on the same line and add up to a straight angle (180°).</div>"
  + "<h3>Vertical angles</h3>"
  + "<p>When <b>two lines</b> intersect, 4 angles are formed at once. The angles that lie opposite each other (not the neighboring ones, but &ldquo;across the intersection point&rdquo;) are called <b>vertical</b> angles.</p>"
  + "<ul><li><b>Vertical angles are equal to each other</b> — this is the main property, and it's easy to prove: both vertical angles are adjacent to the same third angle, so both equal 180° minus that third angle.</li><li>Out of the four angles at the intersection of two lines, you get two pairs of vertical angles and four pairs of adjacent angles.</li><li>Knowing just ONE of the four angles, you can find all the other three: the opposite one equals it, and the two neighboring ones equal 180° minus the known angle.</li></ul>"
  + "<p>Watch how this works:</p>"
  + "<div class='figure'>__SVG_ANG_CROSS_ANIM__</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Don't confuse vertical angles with adjacent ones! Adjacent angles are neighbors, add up to 180°, and are NOT equal to each other (except in the 90° case). Vertical angles are opposite, equal to each other, and their sum isn't 180° — it can be anything (except in that special case).</div>"
  + "<h3>Angle bisector</h3>"
  + "<p>An <b>angle bisector</b> is a ray coming out of the angle's vertex that splits it exactly in half, into two equal angles. If an angle equals, say, 70°, the bisector splits it into two angles of 35° each.</p>"
  + "<p>In the diagram, angle AOB = 84°, and ray OC is its bisector. It splits the angle in half: 84° : 2 = 42°, so ∠AOC = ∠COB = 42° (equal arcs are marked with two tick marks).</p>"
  + "<div class='figure'>__SVG_ANG_BISECT__</div>"
  + "<p>If half of an angle is known (the angle between a side and the bisector), the whole angle is twice as large. And if you need to find the bisector of a straight angle (180°), it splits it into two right angles of 90° each — that is, the bisector of a straight angle is perpendicular to it.</p>"
  + "<div class='note'><span class='hand'>Remember</span>A bisector splits an angle in half: if the whole angle equals α, each of the two parts equals α : 2. And conversely: if one part is known, the whole angle is 2 times larger than it.</div>",
  examples: [
    {t:"One of two adjacent angles is 73°. Find the other one.", s:"Adjacent angles add up to 180°. The second angle: 180° − 73° = 107°.<div class='figure'>__SVG_ANG7_EX0_ADJ73__</div>"},
    {t:"When two lines intersect, one of the angles is 48°. Find the other three angles.", s:"The vertical angle to it is also 48° (vertical angles are equal). The two remaining angles are adjacent to the 48° angle, so each equals 180° − 48° = 132°. Result: 48°, 132°, 48°, 132° — going around.<div class='figure'>__SVG_ANG7_EX1_CROSS48__</div>"},
    {t:"Angle AOB is 84°. Ray OC is the bisector of this angle. Find angle AOC.", s:"The bisector splits the angle in half: 84° : 2 = 42°. Angle AOC = 42°.<div class='figure'>__SVG_ANG7_EX2_BISECT84__</div>"},
    {t:"Two adjacent angles are in the ratio 2:3. Find both angles.", s:"The sum of adjacent angles is 180°, so one part equals 180° : (2+3) = 36°. The angles are 2 · 36° = 72° and 3 · 36° = 108°. Check: 72° + 108° = 180°.<div class='figure'>__SVG_ANG7_EX3_RATIO23__</div>"}
  ],
  tasks: [
    {q:"One of two adjacent angles is 65°. Find the other one (in degrees).", ans:"115", hint:"Adjacent angles add up to 180°.", sol:"180° − 65° = 115°."},
    {q:"One of two adjacent angles is 112°. Find the other one (in degrees).", ans:"68", hint:"180° minus the known angle.", sol:"180° − 112° = 68°."},
    {q:"One of two adjacent angles is 90°. Find the other one (in degrees).", ans:"90", hint:"What do you get if you split 180° into equal parts?", sol:"180° − 90° = 90°."},
    {q:"When two lines intersect, one angle is 37°. Find the vertical angle to it (in degrees).", ans:"37", hint:"Vertical angles are equal.", sol:"Vertical angles are equal, so the answer is 37°."},
    {q:"When two lines intersect, one angle is 55°. Find the angle adjacent to it (in degrees).", ans:"125", hint:"The adjacent angle is the neighbor on the same line.", sol:"180° − 55° = 125°."},
    {q:"An angle is 50°. Its bisector splits it into two angles. What is each of them (in degrees)?", ans:"25", hint:"A bisector splits an angle in half.", sol:"50° : 2 = 25°."},
    {q:"A bisector splits an angle into two parts of 38° each. What is the whole angle (in degrees)?", ans:"76", hint:"The whole angle is twice the half.", sol:"38° · 2 = 76°."},
    {q:"One of the angles formed when two lines intersect is 142°. Find the smallest of the four angles (in degrees).", ans:"38", hint:"The neighboring angle is adjacent to the given one.", sol:"The adjacent angle: 180° − 142° = 38°. This is less than 142°, so the smallest angle is 38°."},
    {q:"Two adjacent angles are equal to each other. What is each of them (in degrees)?", ans:"90", hint:"Split a straight angle in half.", sol:"180° : 2 = 90°."},
    {q:"One of two adjacent angles is 40° larger than the other. Find the larger angle (in degrees).", ans:"110", hint:"Let the smaller angle be x, then the larger one is x+40. Write the equation x+(x+40)=180.", sol:"2x + 40 = 180 → 2x = 140 → x = 70. The larger angle: 70° + 40° = 110°."},
    {q:"One of two adjacent angles is 3 times larger than the other. Find the smaller angle (in degrees).", ans:"45", hint:"Let the smaller angle be x, then the larger one is 3x. Their sum is 180°.", sol:"x + 3x = 180 → 4x = 180 → x = 45°."},
    {q:"When two lines intersect, the angles formed include one that is 30° larger than its neighboring (adjacent) angle. Find the larger of these two adjacent angles (in degrees).", ans:"105", hint:"x + (x+30) = 180.", sol:"2x + 30 = 180 → x = 75. The larger angle: 75° + 30° = 105°."},
    {q:"Ray OM is the bisector of angle AOB, which equals 96°. Find angle AOM (in degrees).", ans:"48", hint:"A bisector splits an angle in half.", sol:"96° : 2 = 48°."},
    {q:"Angle AOB is 130°. Ray OC splits it into angle AOC = 54° and angle COB. Find angle COB (in degrees).", ans:"76", hint:"Angle AOB is the sum of the two parts.", sol:"130° − 54° = 76°."},
    {q:"Two adjacent angles are in the ratio 4:5. Find the smaller angle (in degrees).", ans:"80", hint:"One part equals 180° : (4+5).", sol:"180° : 9 = 20°. The smaller angle: 4 · 20° = 80°."},
    {q:"Two adjacent angles are in the ratio 1:8. Find the larger angle (in degrees).", ans:"160", hint:"Split 180° into (1+8) parts.", sol:"180° : 9 = 20°. The larger angle: 8 · 20° = 160°."},
    {q:"When two lines intersect, the sum of two vertical angles is 94°. Find each of the other two (adjacent) angles (in degrees).", ans:"133", hint:"Since the vertical angles are equal, first find one of them: 94° : 2.", sol:"Each vertical angle: 94° : 2 = 47°. The angle adjacent to it: 180° − 47° = 133°."},
    {q:"The bisector of angle AOB splits it in half, and the angle between the bisector and side OA is 37°. Find angle DOB, adjacent to angle AOB (in degrees).", ans:"106", hint:"First find the whole angle AOB (double 37°), then the angle adjacent to it.", sol:"AOB = 37° · 2 = 74°. The angle adjacent to it, DOB = 180° − 74° = 106°."},
    {q:"One of two adjacent angles is larger than the other by 64°. The smaller of these angles is known to be split by a bisector into two equal parts. Find one such part (in degrees).", ans:"29", hint:"First find the smaller adjacent angle using an equation, then split it in half.", sol:"x + (x+64) = 180 → 2x = 116 → x = 58° (the smaller angle). The bisector splits it in half: 58° : 2 = 29°."},
    {q:"Angle AOB is 152°. Its bisector OC forms an adjacent angle with the extension of side OA beyond point O. Find this adjacent angle (in degrees).", ans:"104", hint:"First find angle AOC (half of AOB), then the angle adjacent to AOC.", sol:"AOC = 152° : 2 = 76°. The angle adjacent to AOC: 180° − 76° = 104°."},
    {q:"Two vertical angles are each 2x°, and one of the angles adjacent to them is (x + 30)°. Find x, given that the sum of a vertical angle and the one adjacent to it is 180°.", ans:"50", hint:"Write the equation 2x + (x + 30) = 180.", sol:"2x + x + 30 = 180; 3x = 150; x = 50."},
    {q:"Using x = 50° from the previous problem (two vertical angles each equal 2x°), find the value of the vertical angle (in °).", ans:"100", hint:"Substitute the value of x you found into the expression 2x.", sol:"2 · 50° = 100°."},
    {q:"The bisector of angle AOB splits it into two angles of (2x + 5)° each, and the whole angle AOB is 90°. Find x.", ans:"20", hint:"Double the half of the angle equals the whole angle: 2(2x+5) = 90.", sol:"2(2x + 5) = 90; 2x + 5 = 45; 2x = 40; x = 20."},
    {q:"The angle between two intersecting lines is 27°. Find the sum of the other three angles formed at the intersection (in °).", ans:"333", hint:"The sum of all four angles at the intersection of two lines is 360°.", sol:"The vertical angle is also 27°, and the other two are 180° − 27° = 153° each. The sum of the other three: 27° + 153° + 153° = 333°."},
    {q:"Each blade of a pair of scissors continues in a straight line into its handle. The angle between the blades is 28°. Find the angle between one blade and the other handle (in degrees).", ans:"152", hint:"A blade and its handle form one straight line. What angles do two intersecting lines form?", sol:"One blade and the other handle form an angle adjacent to the angle between the blades: 180° − 28° = 152°. Answer: 152."},
    {q:"Three lines intersect at one point and form six angles. Two neighboring angles are 50° and 70°. Find the angle adjacent to the 70° angle on its other side (in degrees).", ans:"60", hint:"Three consecutive neighboring angles lie between two opposite rays of one line.", sol:"Three consecutive neighboring angles make up a straight angle: 180° − 50° − 70° = 60°. Answer: 60."},
    {q:"When two lines intersect, the sum of three of the four resulting angles is 250°. Find the smallest of the four angles (in degrees).", ans:"70", hint:"The sum of all four angles at the intersection of two lines is 360°.", sol:"The fourth angle: 360° − 250° = 110°. The angle adjacent to it: 180° − 110° = 70°. The angles: 110°, 70°, 110°, 70°. The smallest is 70°. Answer: 70."},
    {q:"Adjacent angles are 64° and 116°. Find the angle between their bisectors (in degrees).", ans:"90", hint:"Find half of each angle and add them.", sol:"64° : 2 = 32°, 116° : 2 = 58°. 32° + 58° = 90°. This is always true for any adjacent angles: half of 180° is 90°. Answer: 90."},
    {q:"Katya solved the problem &ldquo;One of two adjacent angles is 4 times larger than the other&rdquo; like this: the smaller angle = 180° : 4 = 45°. Find the mistake and write the correct smaller angle (in degrees).", ans:"36", hint:"How many equal parts do both angles together make up?", sol:"The smaller angle is 1 part, the larger is 4 parts, 5 parts total. 180° : 5 = 36°. Katya forgot about the smallest part itself. Answer: 36."},
    {q:"Angles AOC and COB are adjacent. The bisector OD of angle AOC forms angle DOB = 130° with ray OB. Find angle AOC (in degrees).", ans:"100", hint:"Let ∠AOC = x. Then ∠COB = 180° − x, and ∠DOC = {x|2}. Angle DOB is made up of two parts.", sol:"∠DOB = ∠DOC + ∠COB = {x|2} + 180° − x = 180° − {x|2}. 180° − {x|2} = 130°, {x|2} = 50°, x = 100°. Answer: 100."},
    {q:"When two lines intersect, one of the angles is 4 times smaller than the sum of the two angles adjacent to it. Find this angle (in degrees).", ans:"60", hint:"Both angles adjacent to it equal 180° − x. Write an equation.", sol:"Let the angle be x. The sum of the adjacent angles: 2(180° − x) = 360° − 2x. 360 − 2x = 4x; 6x = 360; x = 60°. Answer: 60."},
    {q:"A railroad crosses a highway. One of the angles of intersection is 50° smaller than the other. Find the larger angle (in degrees).", ans:"115", hint:"The unequal angles at the intersection of two lines are adjacent, and their sum is 180°.", sol:"x + (x + 50) = 180; 2x = 130; x = 65°. The larger one: 65° + 50° = 115°. Answer: 115."}
  ],
  bonus: {q:"From one point O, three rays OA, OB and OC are drawn so that angle AOB = 130°, angle BOC = 40°, and rays OA and OC lie on opposite sides of OB. Find angle AOC, given that it does not exceed a straight angle (in degrees).", ans:"170", hint:"If rays OA and OC lie on opposite sides of OB, angles AOB and BOC add together.", sol:"Since OB lies between OA and OC, angle AOC = angle AOB + angle BOC = 130° + 40° = 170°."},
  test: [
    {q:"One of two adjacent angles is 78°. Find the other one (in degrees).", ans:"102", sol:"180° − 78° = 102°."},
    {q:"When two lines intersect, one angle is 63°. Find the vertical angle to it (in degrees).", ans:"63", sol:"Vertical angles are equal."},
    {q:"An angle is 84°. Find half of this angle, cut off by the bisector (in degrees).", ans:"42", sol:"84° : 2 = 42°."},
    {q:"What is true for adjacent angles?", opts:["They're always equal to each other","They add up to 90°","They add up to 180°","One of them is always obtuse"], ans:2, sol:"Adjacent angles always add up to 180° (a straight angle)."},
    {q:"Two adjacent angles are in the ratio 2:7. Find the larger angle (in degrees).", ans:"140", sol:"180° : 9 = 20°. The larger angle: 7 · 20° = 140°."},
    {q:"What is true for vertical angles?", opts:["They're adjacent","Their sum is 180°","They're equal to each other","They're always right angles"], ans:2, sol:"The main property of vertical angles is that they're equal to each other."},
    {q:"One of two adjacent angles is 36° smaller than the other. Find the smaller angle (in degrees).", ans:"72", sol:"x + (x+36) = 180 → 2x = 144 → x = 72°."},
    {q:"The bisector of angle AOB splits it into two angles of 55° each. What is angle AOB (in degrees)?", ans:"110", sol:"55° · 2 = 110°."}
  ],
  lab: [
    {t:"Checking vertical angles by folding paper", b:"Put a ruler on the table and draw two intersecting straight lines with a pencil — you'll get a cross with four angles. Cut out one of the angles (say, the top one) from a separate sheet of paper as a corner template and hold it up to the opposite (bottom) angle of the cross — it will fit perfectly. This shows in practice that vertical angles are equal."},
    {t:"A straight angle made of adjacent angles", b:"On the same picture with two lines, take two neighboring angles (adjacent ones) and cut them out together as one piece. Hold the cut-out piece up to a straight line — you'll see that together they form a straight line, that is, a straight angle of 180°."},
    {t:"A protractor and real-life angles", b:"Take a protractor and measure the angle between a door and the wall when the door is slightly open. Then close the door a bit and measure the angle on the other side of the door (between the door and the same wall, but from the other side) — this is the adjacent angle. Add both numbers together — you should get about 180°."},
    {t:"Bisector by eye and for real", b:"Use a protractor to draw a 60° angle. Try to draw, by eye, a ray that splits it in half, then check with the protractor — did you get exactly 30° and 30°? Repeat with a 100° angle."}
  ],
  steps: [
    {
      title: "Adjacent angles",
      body: "<h3>Adjacent angles</h3><p>Two angles are called <b>adjacent</b> if they share one side, and their other two sides are opposite rays (that is, they form a straight line). Adjacent angles together &ldquo;straighten out&rdquo; into a straight angle, so their sum is always <b>180°</b>.</p><div class='figure'>__SVG_ANG_ADJ__</div><div class='note'><span class='hand'>Remember</span>If one of the adjacent angles is known, the other is found by the formula: 180° − (known angle).</div>"
    },
    {
      title: "Finding the second adjacent angle",
      body: "<p>Let's look at an example: one of two adjacent angles is 73°. Since adjacent angles add up to 180°, the second angle equals 180° − 73° = 107°.</p>",
      exIdx: 0
    },
    {
      title: "Vertical angles",
      body: "<h3>Vertical angles</h3><p>When <b>two lines</b> intersect, 4 angles are formed at once. The angles that lie opposite each other (not the neighboring ones, but &ldquo;across the intersection point&rdquo;) are called <b>vertical</b> angles, and <b>vertical angles are equal to each other</b>. Knowing just ONE of the four angles, you can find all the other three: the opposite one equals it, and the two neighboring ones equal 180° minus the known angle.</p><div class='figure'>__SVG_ANG_CROSS_ANIM__</div>"
    },
    {
      title: "Finding all four angles from one known angle",
      body: "<p>If one of the angles at the intersection of two lines is 48°, then the vertical angle to it is also 48° (vertical angles are equal). The two remaining angles are adjacent to the 48° angle, so each equals 180° − 48° = 132°. Result: 48°, 132°, 48°, 132° — going around.</p>",
      exIdx: 1
    },
    {
      title: "Angle bisector",
      body: "<h3>Angle bisector</h3><p>An <b>angle bisector</b> is a ray coming out of the angle's vertex that splits it exactly in half, into two equal angles. If half of an angle is known (the angle between a side and the bisector), the whole angle is twice as large.</p><div class='figure'>__SVG_ANG_BISECT__</div><p>Let's look at an example: angle AOB = 84°, ray OC is the bisector of this angle. It splits the angle in half: 84° : 2 = 42°, so ∠AOC = ∠COB = 42°.</p>",
      exIdx: 2
    },
    {
      title: "Adjacent angles in a ratio",
      body: "<p>If two adjacent angles are given not as numbers but as a ratio (for example, 2:3), their sum is still 180°. First we find how many degrees are in one part: 180° : (2+3) = 36°. Then the angles equal 2 · 36° = 72° and 3 · 36° = 108°. Check: 72° + 108° = 180°.</p>",
      exIdx: 3
    }
  ]
};


/* ---------- tri ---------- */
CONTENT_EN.tri = {
  goal: "After this topic you'll know all the elements of a triangle, be able to tell an isosceles triangle apart from an equilateral one, and confidently apply the three criteria for triangle congruence.",
  explain: "<p>A triangle is the simplest closed shape made of three segments. But it has many important elements and properties you need to know by heart.</p>"
  + "<div class='figure'>__SVG_TRIANGLE__</div>"
  + "<h3>Elements of a triangle</h3>"
  + "<p>Triangle ABC consists of three <b>vertices</b> (points A, B, C), three <b>sides</b> (segments AB, BC, CA) and three <b>angles</b> (the angles at vertices A, B, C). The side lying opposite a vertex is often called opposite to that vertex.</p>"
  + "<h3>Median, bisector, altitude</h3>"
  + "<ul><li><b>A median</b> is a segment from a vertex to the midpoint of the opposite side. It splits the opposite side in half.</li><li><b>A triangle's bisector</b> is a segment from a vertex to the opposite side that splits that vertex's angle in half.</li><li><b>An altitude</b> is a segment from a vertex, perpendicular (drawn at a right angle) to the line containing the opposite side.</li></ul>"
  + "<p>The diagram shows three identical triangles. The first has a median drawn — the two parts of the side are equal (marked with tick marks); the second has a bisector — equal arcs at the vertex; the third has an altitude — a right-angle mark sits at the base, and the base itself is extended with a dashed line.</p>"
  + "<div class='figure'>__SVG_TRI_LINES__</div>"
  + "<div class='note'><span class='hand'>Remember</span>In an ordinary triangle, the median, bisector and altitude from one vertex are three DIFFERENT segments. They coincide only in an isosceles triangle, and even then not always — only the ones drawn to the base.</div>"
  + "<h3>Isosceles and equilateral triangles</h3>"
  + "<p>An <b>isosceles</b> triangle has two equal sides — they're called the <b>legs</b>, and the third is called the <b>base</b>. The angles at the base of an isosceles triangle are equal to each other.</p>"
  + "<p>An <b>equilateral</b> triangle is a special case — ALL three of its sides are equal, which means all three angles are equal to each other too (60° each, since the sum of a triangle's angles is 180°, and 180 : 3 = 60).</p>"
  + "<p>Let's go back to the isosceles triangle. In the diagram, AB = BC, the base is AC, and the angles at the base ∠A = ∠C = 65°. Then the angle at vertex B equals 180° − 65° − 65° = 50°. The dashed segment BH is the altitude (the angle at point H is a right angle), the median, and the bisector — all at once.</p>"
  + "<div class='figure'>__SVG_TRI_ISO__</div>"
  + "<div class='note'><span class='hand'>Remember</span>Important property: in an isosceles triangle, the median, bisector and altitude drawn to the base from the vertex between the two legs are ONE AND THE SAME segment.</div>"
  + "<h3>Criteria for triangle congruence</h3>"
  + "<p>Two triangles are called congruent if all their corresponding sides and all their corresponding angles are equal. But to prove this, you don't need to check everything — three criteria are enough.</p>"
  + "<ul><li><b>The first criterion (SAS — two sides and the angle between them).</b> If two sides and the angle between them in one triangle equal two sides and the angle between them in another triangle, the triangles are congruent.</li><li><b>The second criterion (ASA — a side and its two adjacent angles).</b> If a side and the two angles adjacent to it in one triangle equal a side and the two angles adjacent to it in another, the triangles are congruent.</li><li><b>The third criterion (SSS — three sides).</b> If the three sides of one triangle equal the three sides of another, the triangles are congruent.</li></ul>"
  + "<p>Watch how the first criterion works:</p>"
  + "<div class='figure'>__SVG_TRI_SAS_ANIM__</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>The angle must be exactly BETWEEN the given sides (in the first criterion), or the sides must be exactly ADJACENT to the given angle (in the second criterion). If you take the &ldquo;wrong&rdquo; angle or the &ldquo;wrong&rdquo; side, the criterion won't work — the triangles could turn out to be different!</div>"
  + "<h3>Why this matters</h3>"
  + "<p>Congruence criteria are the main tool for proofs in geometry. If it's proven that two triangles are congruent, then ALL their corresponding sides and angles are automatically equal, even ones that weren't directly mentioned in the problem.</p>",
  examples: [
    {t:"In triangle ABC, the angles at vertices A and B are 50° and 65°. Find the angle at vertex C.", s:"The sum of a triangle's angles is 180°. Angle C = 180° − 50° − 65° = 65°.<div class='figure'>__SVG_TRI7_EX0_SUM180__</div>"},
    {t:"An isosceles triangle has a base angle of 72°. Find the angle at the apex (between the two legs).", s:"The base angles are equal to each other, so both equal 72°. The apex angle: 180° − 72° − 72° = 36°.<div class='figure'>__SVG_TRI7_EX1_ISOAPEX__</div>"},
    {t:"An equilateral triangle. Find each of its angles.", s:"All sides are equal, so all angles are equal. The sum of the angles is 180°, so each angle is: 180° : 3 = 60°.<div class='figure'>__SVG_TRI7_EX2_EQUILATERAL60__</div>"},
    {t:"In triangles ABC and A1B1C1, it is known that: AB = A1B1, BC = B1C1, angle B = angle B1. Can we say the triangles are congruent? By which criterion?", s:"Yes, we can. Angle B lies between sides AB and BC (these are its sides), and angle B1 lies between A1B1 and B1C1. So the first criterion for triangle congruence (SAS — two sides and the angle between them) is satisfied.<div class='figure'>__SVG_TRI7_EX3_SAS__</div>"}
  ],
  tasks: [
    {q:"In a triangle, two angles are 60° and 70°. Find the third angle (in degrees).", ans:"50", hint:"The sum of a triangle's angles is 180°.", sol:"180° − 60° − 70° = 50°."},
    {q:"In a triangle, two angles are 45° and 90°. Find the third angle (in degrees).", ans:"45", hint:"180° minus the sum of the two known angles.", sol:"180° − 45° − 90° = 45°."},
    {q:"An isosceles triangle has a base angle of 40°. Find the second base angle (in degrees).", ans:"40", hint:"The base angles of an isosceles triangle are equal.", sol:"The second base angle is also 40°."},
    {q:"An isosceles triangle has a base angle of 65°. Find the apex angle (in degrees).", ans:"50", hint:"First find the sum of the two base angles.", sol:"180° − 65° − 65° = 50°."},
    {q:"An isosceles triangle has an apex angle of 100°. Find the base angle (in degrees).", ans:"40", hint:"The remaining 80° is split evenly between the two equal angles.", sol:"(180° − 100°) : 2 = 80° : 2 = 40°."},
    {q:"An isosceles triangle has an apex angle of 36°. Find the base angle (in degrees).", ans:"72", hint:"Divide (180° − 36°) by 2.", sol:"(180° − 36°) : 2 = 144° : 2 = 72°."},
    {q:"Find each angle of an equilateral triangle (in degrees).", ans:"60", hint:"Divide 180° into 3 equal parts.", sol:"180° : 3 = 60°."},
    {q:"In a triangle, angle A is twice as large as angle B, and angle C is 45°. Find angle B (in degrees).", ans:"45", hint:"Let angle B = x, then angle A = 2x. Write the equation x + 2x + 45 = 180.", sol:"3x + 45 = 180 → 3x = 135 → x = 45°."},
    {q:"In a triangle, the angles are in the ratio 2:3:4. Find the largest angle (in degrees).", ans:"80", hint:"One part equals 180° : (2+3+4).", sol:"180° : 9 = 20°. The largest angle: 4 · 20° = 80°."},
    {q:"In a triangle, the angles are in the ratio 1:2:3. Find the middle-sized angle (in degrees).", ans:"60", hint:"Divide 180° into (1+2+3) parts.", sol:"180° : 6 = 30°. The middle angle: 2 · 30° = 60°."},
    {q:"In an isosceles triangle, the base angle is 15° smaller than the apex angle. Find the apex angle (in degrees).", ans:"70", hint:"Let the base angle be x, then the apex angle is x+15. Equation: 2x + (x+15) = 180.", sol:"3x + 15 = 180 → 3x = 165 → x = 55° (the base angle). The apex angle: 55° + 15° = 70°."},
    {q:"In triangle ABC it's known that AB = AC, and angle A = 80°. Find angle B (in degrees).", ans:"50", hint:"Since AB = AC, the triangle is isosceles with apex A, so angles B and C are equal.", sol:"(180° − 80°) : 2 = 100° : 2 = 50°."},
    {q:"In triangle ABC it's known that: AB = A1B1, angle A = angle A1, angle B = angle B1 (for triangle A1B1C1). By which congruence criterion are ABC and A1B1C1 congruent?", opts:["By two sides and the angle between them","By a side and its two adjacent angles","By three sides","There is no such criterion"], ans:1, hint:"Side AB is adjacent to both angles A and B.", sol:"Side AB and the two angles adjacent to it (A and B) equal the corresponding elements of the second triangle — this is the second criterion for triangle congruence."},
    {q:"A triangle's median splits the opposite side, which is 18 cm, into two parts. What is each part (in cm)?", ans:"9", hint:"A median splits a side in half.", sol:"18 : 2 = 9 cm."},
    {q:"In an equilateral triangle, a bisector drawn from one vertex splits that vertex's angle into two parts. Find each part (in degrees).", ans:"30", hint:"First find the angle of the equilateral triangle, then split it in half.", sol:"The angle of an equilateral triangle is 60°. The bisector splits it in half: 60° : 2 = 30°."},
    {q:"In triangle ABC, angle A = 55°, angle B = 55°. Is the triangle isosceles, and if so, which side is the base? Name the base angle (in degrees) that matches one of the given ones.", ans:"55", hint:"If two angles of a triangle are equal, the triangle is isosceles (this follows from the congruence criteria).", sol:"Since angle A = angle B = 55°, the sides opposite them are also equal, so the triangle is isosceles, and the given base angle equals 55°."},
    {q:"In triangles ABC and DEF it's known that: AB = DE, BC = EF, AC = DF. By which criterion are the triangles congruent?", opts:["By two sides and the angle between them","By a side and its two adjacent angles","By three sides","The triangles aren't necessarily congruent"], ans:2, hint:"All three pairs of sides are given.", sol:"All three sides of one triangle equal the three sides of the other — this is the third criterion for triangle congruence (SSS — three sides)."},
    {q:"An isosceles triangle has an apex angle of 2x and a base angle of x + 20. Find x, given that the sum of all the angles is 180° (in degrees).", ans:"35", hint:"Equation: 2x + (x+20) + (x+20) = 180.", sol:"2x + 2(x+20) = 180 → 4x + 40 = 180 → 4x = 140 → x = 35."},
    {q:"In a triangle, the first angle is 2 times larger than the second, and the second is 20° larger than the third. Find the third angle, given that the sum of the angles is 180° (in degrees).", ans:"30", hint:"Let the third angle be x, then the second is x+20, and the first is 2(x+20). Write an equation and solve it.", sol:"x + (x+20) + 2(x+20) = 180 → 4x + 60 = 180 → 4x = 120 → x = 30°. Check: the angles are 30°, 50°, 100°, sum 30+50+100=180 — correct."},
    {q:"The exterior angle of a triangle at vertex C is 130° (this is the angle adjacent to the interior angle C). The interior angles A and B are equal to each other. Find angle A (in degrees).", ans:"65", hint:"First find the interior angle C, then split the remainder in half between A and B.", sol:"The interior angle C = 180° − 130° = 50°. Then A + B = 180° − 50° = 130°, and since A = B, A = 130° : 2 = 65°."},
    {q:"In a triangle, one angle is 3 times larger than another, and the third angle is 20°. Find the larger of the two remaining angles (in °).", ans:"120", hint:"Let the smaller angle be x, then the larger is 3x. Write the equation x + 3x + 20 = 180.", sol:"4x + 20 = 180; 4x = 160; x = 40°. The larger angle: 3 · 40° = 120°."},
    {q:"The median drawn to the base of an isosceles triangle splits it into two equal parts of 8 cm each. Find the length of the whole base (in cm).", ans:"16", hint:"A median splits the opposite side in half — the base is 2 times one part.", sol:"The median splits the base in half, so the base is 2 times one part: 2 · 8 = 16 cm."},
    {q:"In triangles ABC and MNK it's known that: angle A = angle M = 90°, AB = MN, AC = MK. By which congruence criterion are ABC and MNK congruent?", opts:["By two sides and the angle between them","By a side and its two adjacent angles","By three sides","There is no such criterion"], ans:0, hint:"Angle A lies between sides AB and AC.", sol:"Angle A is formed by sides AB and AC, that is, it lies between them. So this is the first criterion for triangle congruence (SAS — two sides and the angle between them)."},
    {q:"An isosceles triangle: the base angle is 4x°, the apex angle is (2x + 20)°. Find x.", ans:"16", hint:"The sum of all three angles is 180°: 4x + 4x + (2x + 20) = 180.", sol:"10x + 20 = 180; 10x = 160; x = 16. Check: the angles are 64°, 64°, 52°, sum 180°."},
    {q:"The perimeter of an isosceles triangle is 40 cm, and the base is 5 cm shorter than a leg. Find the base (in cm).", ans:"10", hint:"Let the leg be x. There are two legs!", sol:"x + x + (x − 5) = 40; 3x = 45; x = 15. The base: 15 − 5 = 10 cm. Answer: 10."},
    {q:"A piece of wire 36 cm long was bent into an isosceles triangle with a base of 10 cm. Find the length of a leg (in cm).", ans:"13", hint:"Subtract the base from the length of the wire, then split the remainder between the two equal sides.", sol:"(36 − 10) : 2 = 26 : 2 = 13 cm. Answer: 13."},
    {q:"Lyosha said: &ldquo;In an isosceles triangle, one angle is 110°, so both base angles are also 110° each.&rdquo; Find the mistake and write what the base angle actually equals (in degrees).", ans:"35", hint:"Can a triangle have two obtuse angles? So 110° must be the apex angle.", sol:"Two angles of 110° would add up to more than 180°. So 110° is the apex angle, and the base angles are: (180° − 110°) : 2 = 35°. Answer: 35."},
    {q:"BM is a median of triangle ABC. It's known that: AM = 7 cm, AB = 10 cm, BC = 12 cm. Find the perimeter of triangle ABC (in cm).", ans:"36", hint:"The median splits side AC in half. Find the whole side AC.", sol:"AC = 2 · AM = 14 cm. P = 10 + 12 + 14 = 36 cm. Answer: 36."},
    {q:"Segments AB and CD intersect at point O, which is the midpoint of each of them. AC = 9 cm. Find BD (in cm).", ans:"9", hint:"Compare triangles AOC and BOD: which sides and angles are equal in them?", sol:"AO = OB, CO = OD, ∠AOC = ∠BOD (vertical angles). The triangles are congruent by the first criterion, so BD = AC = 9 cm. Answer: 9."},
    {q:"In isosceles triangle ABC (AB = BC), altitude BH is drawn, and angle ABH = 25°. Find angle BAC (in degrees).", ans:"65", hint:"Look at triangle ABH: what is the angle at vertex H in it?", sol:"BH is the altitude, so ∠AHB = 90°. In triangle ABH: ∠BAH = 180° − 90° − 25° = 65°. Answer: 65."},
    {q:"The exterior angle at the base of an isosceles triangle is 110°. Find the apex angle of the triangle (in degrees).", ans:"40", hint:"The exterior angle is adjacent to the interior one. Find the base angle, then the apex angle.", sol:"The base angle: 180° − 110° = 70°. Both base angles are 70°. The apex angle: 180° − 70° − 70° = 40°. Answer: 40."},
    {q:"The perimeter of a triangle is 45 cm. The first side is 2 times longer than the second, and the third is 5 cm longer than the second. Find the largest side (in cm).", ans:"20", hint:"Let the second side be x, and express the other two in terms of it.", sol:"x + 2x + (x + 5) = 45; 4x = 40; x = 10. The sides: 20, 10 and 15 cm. The largest is 20 cm. Answer: 20."}
  ],
  bonus: {q:"In triangle ABC, the bisectors of angles A and B intersect at point O, and angle AOB equals 116°. Find angle C of triangle ABC (in degrees).", ans:"52", hint:"In triangle AOB, the sum of the angles is also 180°: angle AOB + half of angle A + half of angle B = 180°.", sol:"In triangle AOB: (A/2) + (B/2) = 180° − 116° = 64°, so A + B = 128°. Then angle C = 180° − (A+B) = 180° − 128° = 52°."},
  test: [
    {q:"In a triangle, two angles are 55° and 75°. Find the third angle (in degrees).", ans:"50", sol:"180° − 55° − 75° = 50°."},
    {q:"An isosceles triangle has a base angle of 48°. Find the apex angle (in degrees).", ans:"84", sol:"180° − 48° − 48° = 84°."},
    {q:"Find each angle of an equilateral triangle (in degrees).", ans:"60", sol:"180° : 3 = 60°."},
    {q:"What does a triangle's median split in half?", opts:["The apex angle","The opposite side","The triangle's perimeter","The altitude"], ans:1, sol:"A median connects a vertex to the midpoint of the opposite side, splitting it in half."},
    {q:"In a triangle, the angles are in the ratio 3:4:5. Find the smallest angle (in degrees).", ans:"45", sol:"180° : 12 = 15°. The smallest angle: 3 · 15° = 45°."},
    {q:"Which triangle congruence criterion is used when two sides and the angle between them are known?", opts:["The first criterion","The second criterion","The third criterion","There is no such criterion"], ans:0, sol:"This is the first criterion for triangle congruence — by two sides and the angle between them."},
    {q:"An isosceles triangle has an apex angle of 46°. Find the base angle (in degrees).", ans:"67", sol:"(180° − 46°) : 2 = 134° : 2 = 67°."},
    {q:"In triangle ABC it's known that AB=AC. Angle B = 63°. Find angle C (in degrees).", ans:"63", sol:"Since AB=AC, the triangle is isosceles with base BC, and the base angles (B and C) are equal: angle C = 63°."}
  ],
  lab: [
    {t:"A triangle's three angles always add up to 180°", b:"Draw any triangle on paper (it doesn't have to be neat) and cut it out. Tear off the three corners and put their vertices together at one point, with the sides touching each other. You'll get a straight line — a straight angle of 180°. This proves the theorem about the sum of a triangle's angles in practice."},
    {t:"An isosceles triangle made of paper", b:"Fold a rectangular sheet of paper in half and cut out a triangle along the fold so that the fold line becomes the bisector of the apex angle. Unfold it — you'll get an isosceles triangle in which the fold line is at the same time the median, the bisector, and the altitude to the base. Check with a ruler: the distances from the fold to the ends of the base are equal."},
    {t:"Triangle congruence by eye", b:"Cut two triangles out of cardboard with the same lengths for all three sides (measure them with a ruler beforehand). Place them on top of each other — they should match up completely. This illustrates the third criterion for triangle congruence (SSS — three sides)."},
    {t:"Find the median, bisector and altitude with a protractor and ruler", b:"Draw a scalene triangle. Using a ruler, find the midpoint of one side and draw the median from the opposite vertex. Then use a protractor to split the angle at that same vertex in half — this is the bisector. Check that the median and the bisector are different segments (they don't coincide) when the triangle isn't isosceles."}
  ],
  steps: [
    {
      title: "Vertices, sides and angles",
      body: "<p>A triangle is the simplest closed shape made of three segments. But it has many important elements and properties you need to know by heart.</p><div class='figure'>__SVG_TRIANGLE__</div><p>Triangle ABC consists of three <b>vertices</b> (points A, B, C), three <b>sides</b> (segments AB, BC, CA) and three <b>angles</b> (the angles at vertices A, B, C). The side lying opposite a vertex is often called opposite to that vertex.</p>"
    },
    {
      title: "The sum of a triangle's angles is 180°",
      body: "<p>The sum of a triangle's angles is always 180°. This means that if two angles are known, the third is easy to find: just subtract the sum of the known angles from 180°.</p><p>Angle C = 180° − 50° − 65° = 65°.</p>",
      exIdx: 0
    },
    {
      title: "Median, bisector, altitude",
      body: "<h3>Median, bisector, altitude</h3><ul><li><b>A median</b> is a segment from a vertex to the midpoint of the opposite side. It splits the opposite side in half.</li><li><b>A triangle's bisector</b> is a segment from a vertex to the opposite side that splits that vertex's angle in half.</li><li><b>An altitude</b> is a segment from a vertex, perpendicular (drawn at a right angle) to the line containing the opposite side.</li></ul><p>The diagram shows three identical triangles. The first has a median drawn — the two parts of the side are equal (marked with tick marks); the second has a bisector — equal arcs at the vertex; the third has an altitude — a right-angle mark sits at the base.</p><div class='figure'>__SVG_TRI_LINES__</div><div class='note'><span class='hand'>Remember</span>In an ordinary triangle, the median, bisector and altitude from one vertex are three DIFFERENT segments. They coincide only in an isosceles triangle, and even then not always — only the ones drawn to the base.</div>"
    },
    {
      title: "Isosceles triangle",
      body: "<h3>Isosceles triangle</h3><p>An <b>isosceles</b> triangle has two equal sides — they're called the <b>legs</b>, and the third is called the <b>base</b>. The angles at the base of an isosceles triangle are equal to each other.</p><div class='figure'>__SVG_TRI_ISO__</div><p>If the legs are AB and CB, and the base angles are 72° each, then the angle at vertex B equals 180° − 72° − 72° = 36°.</p><div class='note'><span class='hand'>Remember</span>In an isosceles triangle, the median, bisector and altitude drawn to the base from the vertex between the two legs are ONE AND THE SAME segment.</div>",
      exIdx: 1
    },
    {
      title: "Equilateral triangle",
      body: "<h3>Equilateral triangle</h3><p>An <b>equilateral</b> triangle is a special case of an isosceles triangle — ALL three of its sides are equal, which means all three angles are equal to each other too (60° each, since the sum of a triangle's angles is 180°, and 180 : 3 = 60).</p>",
      exIdx: 2
    },
    {
      title: "Criteria for triangle congruence",
      body: "<h3>Criteria for triangle congruence</h3><p>Two triangles are called congruent if all their corresponding sides and all their corresponding angles are equal. But to prove this, you don't need to check everything — three criteria are enough.</p><ul><li><b>The first criterion (SAS — two sides and the angle between them).</b> If two sides and the angle between them in one triangle equal two sides and the angle between them in another triangle, the triangles are congruent.</li><li><b>The second criterion (ASA — a side and its two adjacent angles).</b> If a side and the two angles adjacent to it in one triangle equal a side and the two angles adjacent to it in another, the triangles are congruent.</li><li><b>The third criterion (SSS — three sides).</b> If the three sides of one triangle equal the three sides of another, the triangles are congruent.</li></ul><p>Watch how the first criterion works:</p><div class='figure'>__SVG_TRI_SAS_ANIM__</div><p>Angle B lies between sides AB and BC — these are its sides, and angle B₁ lies between A₁B₁ and B₁C₁. So the first criterion for triangle congruence (SAS — two sides and the angle between them) is satisfied.</p><div class='warn'><span class='hand'>Common mistake</span>The angle must be exactly BETWEEN the given sides (in the first criterion), or the sides must be exactly ADJACENT to the given angle (in the second criterion). If you take the &ldquo;wrong&rdquo; angle or the &ldquo;wrong&rdquo; side, the criterion won't work — the triangles could turn out to be different!</div>",
      exIdx: 3
    }
  ]
};


/* ---------- par ---------- */
CONTENT_EN.par = {
  goal: "After this topic you'll be able to recognize corresponding, alternate interior, and co-interior angles, and apply the criteria and properties of parallel lines to find unknown angles.",
  explain: "<p><b>Parallel lines</b> are lines in a plane that never meet, no matter how far they are extended in either direction. Notation: a ‖ b (line a is parallel to line b).</p>"
  + "<h3>A transversal and eight angles</h3>"
  + "<p>If two lines are crossed by a third line — a <b>transversal</b> — then 8 angles are formed at the two points of intersection (4 at each point). These angles fall into three groups with special names.</p>"
  + "<ul><li><b>Corresponding angles</b> — lie on the same side of the transversal, one above and one below (in &ldquo;matching&rdquo; positions at the two points of intersection).</li><li><b>Alternate interior angles</b> — lie between the two lines (inside), but on opposite sides of the transversal.</li><li><b>Co-interior (same-side interior) angles</b> — lie between the two lines (inside), on the same side of the transversal.</li></ul>"
  + "<p>Watch how this works (for clarity, only two kinds of angles are shown):</p>"
  + "<div class='figure'>__SVG_PAR_TRANS_ANIM__</div>"
  + "<div class='note'><span class='hand'>Remember</span>Alternate interior and co-interior angles are always &ldquo;interior&rdquo; (between the lines). Corresponding angles are one interior, one exterior, but in the same position relative to the transversal.</div>"
  + "<h3>Criteria for parallel lines</h3>"
  + "<p>Criteria help you PROVE that lines are parallel, if something is known about the angles:</p>"
  + "<ul><li>If, where a transversal crosses them, the <b>alternate interior angles are equal</b> — the lines are parallel.</li><li>If the <b>corresponding angles are equal</b> — the lines are parallel.</li><li>If the sum of the <b>co-interior angles is 180°</b> — the lines are parallel.</li></ul>"
  + "<h3>Properties of parallel lines (the converse theorems)</h3>"
  + "<p>If the lines are ALREADY parallel, the converse holds — these are properties, not criteria:</p>"
  + "<ul><li>When a transversal crosses parallel lines, the <b>alternate interior angles are equal</b>.</li><li>The <b>corresponding angles are equal</b>.</li><li>The sum of the <b>co-interior angles is 180°</b>.</li></ul>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Don't confuse a criterion with a property! A criterion is when we PROVE that lines are parallel from the angles (&ldquo;if the angles are equal, then the lines are parallel&rdquo;). A property is when the lines are ALREADY parallel (that's given), and from this we find the angles. In problems, it's almost always the property that's used: given a ‖ b, find the angle.</div>"
  + "<h3>How to find an angle with parallel lines</h3>"
  + "<p>Since the lines are parallel, all 8 angles take only two values: one and the same acute (or right) value, or its supplement up to 180°, an obtuse value. If one angle is known, the whole picture of angles can be worked out: the alternate interior angle and the corresponding angle equal the given one, while the angle adjacent to it (and co-interior with it) is 180° minus the given angle.</p>"
  + "<h3>Connection with the angle sum of a triangle</h3>"
  + "<p>Since we're already talking about parallel lines: it's with their help that geometry proves the theorem about the angle sum of a triangle (using a line parallel to one of the sides and passing through the opposite vertex). So parallel lines and &ldquo;the angle sum of a triangle = 180°&rdquo; are closely connected — these aren't two random facts, but the same geometric logic.</p>"
  + "<p>Here's a triangle ABC: its angles ∠A, ∠B, and ∠C together add up to 180°.</p>"
  + "<div class='figure'>__SVG_TRIANGLE__</div>",
  examples: [
    {t:"Lines a and b are parallel, and a transversal forms a 63° angle with them (one of the alternate interior angles). Find the second alternate interior angle.", s:"Alternate interior angles are equal when lines are parallel, so the second angle is also 63°.<div class='figure'>__SVG_PAR7_EX0_ALT63__</div>"},
    {t:"Lines a and b are parallel. One of the co-interior angles is 72°. Find the second co-interior angle.", s:"The sum of co-interior angles is 180° when lines are parallel. The second angle: 180° − 72° = 108°.<div class='figure'>__SVG_PAR7_EX1_COINT72_108__</div>"},
    {t:"Lines a and b are parallel, and one of the corresponding angles is 105°. Find the angle adjacent to it (at the same point of intersection).", s:"The corresponding angle is 105° (a property of parallel lines). The angle adjacent to it at this same point: 180° − 105° = 75°.<div class='figure'>__SVG_PAR7_EX2_CORR105_ADJ75__</div>"},
    {t:"When a transversal crosses two lines, the alternate interior angles turn out to be equal to 48° and 48°. Can we conclude that the lines are parallel?", s:"Yes. By the criterion for parallel lines: if the alternate interior angles are equal, then the lines are parallel.<div class='figure'>__SVG_PAR7_EX3_CONVERSE48__</div>"}
  ],
  tasks: [
    {q:"Lines a ‖ b, and a transversal forms alternate interior angles. One of them is 58°. Find the second one (in degrees).", ans:"58", hint:"Alternate interior angles are equal when lines are parallel.", sol:"By the property of parallel lines, alternate interior angles are equal: 58°."},
    {q:"Lines a ‖ b, and one of the corresponding angles is 74°. Find the second corresponding angle (in degrees).", ans:"74", hint:"Corresponding angles are equal when lines are parallel.", sol:"74° (a property of parallel lines)."},
    {q:"Lines a ‖ b, and one of the co-interior angles is 65°. Find the second co-interior angle (in degrees).", ans:"115", hint:"The sum of co-interior angles is 180° when lines are parallel.", sol:"180° − 65° = 115°."},
    {q:"Lines a ‖ b, and one of the co-interior angles is 130°. Find the second co-interior angle (in degrees).", ans:"50", hint:"180° minus the known angle.", sol:"180° − 130° = 50°."},
    {q:"Lines a ‖ b. The angle between the transversal and line a is 47°. Find the angle adjacent to it, at the same point of intersection (in degrees).", ans:"133", hint:"Adjacent angles add up to 180° — you don't even need the parallel-lines property here.", sol:"180° − 47° = 133°."},
    {q:"Lines a ‖ b. At the point where the transversal crosses line a, one angle is 82°. Find the angle corresponding to it at the point where it crosses line b (in degrees).", ans:"82", hint:"Corresponding angles are equal.", sol:"82° — corresponding angles are equal when lines are parallel."},
    {q:"Lines a ‖ b. One of the angles at line a is 76°, and the angle at line b in the matching position is x. Is it true that x = 76°, and why?", ans:"76", hint:"This is the definition of corresponding angles and their property.", sol:"Yes, x = 76°, because corresponding angles are equal when lines are parallel."},
    {q:"Lines a ‖ b. One of the co-interior angles is 3 times larger than the other. Find the smaller angle (in degrees).", ans:"45", hint:"The sum of co-interior angles is 180°. Split it into equal parts: 180 : (1+3).", sol:"180° : 4 = 45°. The smaller angle is 45°."},
    {q:"Lines a ‖ b. One of the co-interior angles is 46° larger than the other. Find the smaller angle (in degrees).", ans:"67", hint:"x + (x+46) = 180.", sol:"2x + 46 = 180 → 2x = 134 → x = 67°."},
    {q:"Lines a ‖ b. An alternate interior angle equals 3x, and the second alternate interior angle equal to it (by the property) equals x + 48. Find x (in degrees).", ans:"24", hint:"Since the angles are equal: 3x = x + 48.", sol:"3x − x = 48 → 2x = 48 → x = 24."},
    {q:"A transversal crosses two lines. The alternate interior angles are 55° and 55°. Do the lines satisfy the criterion for parallel lines? If so, find the co-interior angle to 55° (in degrees).", ans:"125", hint:"Since the alternate interior angles are equal, the lines are parallel (the criterion). Then apply the property of co-interior angles.", sol:"Yes, the lines are parallel by the criterion. The co-interior angle: 180° − 55° = 125°."},
    {q:"Lines a ‖ b. One angle at the intersection with a is 38°. Find the angle vertical to it (in degrees).", ans:"38", hint:"These are simply vertical angles — the lines being parallel has nothing to do with it.", sol:"Vertical angles are equal: 38°."},
    {q:"Lines a ‖ b. One of the alternate interior angles is 4x − 10, and the second one (equal to it) is 2x + 20. Find the value of the angle (in degrees).", ans:"50", hint:"4x − 10 = 2x + 20 — solve the equation for x, then substitute.", sol:"4x − 10 = 2x + 20 → 2x = 30 → x = 15. The angle: 4·15 − 10 = 50° (check: 2·15 + 20 = 50° — matches)."},
    {q:"In triangle ABC, a line through vertex C is drawn parallel to side AB. The angle between this line and side CA (by the property of alternate interior angles) equals angle A of the triangle = 42°. The angle between the line and side CB equals angle B = 58°. Find angle ACB of the triangle (in degrees).", ans:"80", hint:"The three angles at the straight line through point C (a straight angle, 180°) add up: angle A + angle ACB + angle B = 180°.", sol:"180° − 42° − 58° = 80°."},
    {q:"Lines a ‖ b. One of the corresponding angles is 2x + 15, and the second is 3x − 5. Find the value of the angle (in degrees).", ans:"55", hint:"Corresponding angles are equal: 2x+15 = 3x−5.", sol:"2x + 15 = 3x − 5 → 20 = x. The angle: 2·20+15 = 55°."},
    {q:"Lines a ‖ b. A transversal forms a 90° angle with line a. What is the angle between the transversal and line b (the corresponding angle, in degrees)?", ans:"90", hint:"If a transversal is perpendicular to one of the parallel lines, it's also perpendicular to the other.", sol:"The corresponding angle is also 90°."},
    {q:"Lines a ‖ b. One of the four angles at the intersection with line a is half as large as the angle adjacent (supplementary) to it. Find this smaller angle (in degrees).", ans:"60", hint:"x + 2x = 180 (adjacent angles).", sol:"3x = 180 → x = 60°."},
    {q:"Lines a ‖ b. The co-interior angles are (2x + 30) and (x + 60). Find both angles, given that their sum is 180° — find x (in degrees).", ans:"30", hint:"(2x+30) + (x+60) = 180.", sol:"3x + 90 = 180 → 3x = 90 → x = 30."},
    {q:"Lines a ‖ b. At the point where the transversal crosses line a, one of the angles equals 3x, and the alternate interior angle to it at line b equals 5x − 40. Find the value of the angle (in degrees).", ans:"60", hint:"Alternate interior angles are equal: 3x = 5x − 40.", sol:"3x = 5x − 40 → 40 = 2x → x = 20. The angle: 3·20 = 60°."},
    {q:"In triangle ABC, a line through vertex B is drawn parallel to side AC. The angle between this line and side AB equals angle A = 51° (alternate interior angles). The angle between the line and side CB equals angle C = 64° (alternate interior angles). Find angle ABC of the triangle (in degrees).", ans:"65", hint:"The straight angle at point B is 180° and consists of three parts: angle A + angle ABC + angle C.", sol:"180° − 51° − 64° = 65°."},
    {q:"Lines a ‖ b. One of the alternate interior angles is 5x − 10, and the second one (equal to it) is 3x + 20. Find the value of the angle (in °).", ans:"65", hint:"Alternate interior angles are equal when lines are parallel: 5x − 10 = 3x + 20.", sol:"5x − 10 = 3x + 20; 2x = 30; x = 15. The angle: 5 · 15 − 10 = 65° (check: 3 · 15 + 20 = 65°)."},
    {q:"Two streets run parallel to each other, and a third street crosses both of them. The angle between the third street and the first parallel street is 72°. Find the angle between the third street and the second parallel street, if this angle is the alternate interior angle to the given one (in °).", ans:"72", hint:"Alternate interior angles are equal when lines are parallel.", sol:"By the property of parallel lines, alternate interior angles are equal: 72°."},
    {q:"In triangle ABC, a line through vertex A is drawn parallel to side BC. The angle between this line and side AB (alternate interior with angle B) is 55°. Angle BAC of the triangle is 82°. Find angle C of the triangle (in °).", ans:"43", hint:"The three angles at the straight line through point A (a straight angle, 180°) add up: angle B + angle BAC + angle C = 180°.", sol:"180° − 55° − 82° = 43°."},
    {q:"Lines a ‖ b. One of the alternate interior angles relates to its adjacent angle (at the same point of intersection) as 2 : 7. Find the alternate interior angle (in °).", ans:"40", hint:"The alternate interior angle and its adjacent neighbor add up to 180°. Split 180° into 2 + 7 parts.", sol:"180° : 9 = 20°. The alternate interior angle: 2 · 20° = 40° (its adjacent angle: 7 · 20° = 140°, sum 180°)."},
    {q:"Two railroad rails are parallel. A straight road crosses them, forming a 64° angle with the first rail. Find the angle at the second rail, co-interior with the given one (in degrees).", ans:"116", hint:"Recall what the sum of co-interior angles equals when lines are parallel.", sol:"The sum of co-interior angles is 180°: 180° − 64° = 116°. Answer: 116."},
    {q:"Lines a ‖ b are crossed by a transversal. The sum of two alternate interior angles is 150°. Find the obtuse angle among the eight angles formed (in degrees).", ans:"105", hint:"Alternate interior angles are equal — first find each of them.", sol:"Each alternate interior angle: 150° : 2 = 75°. The obtuse angle is adjacent to it: 180° − 75° = 105°. Answer: 105."},
    {q:"Lines a and b are crossed by a transversal. Two corresponding angles equal 118° and (4x + 10)°. For what x will lines a and b be parallel?", ans:"27", hint:"Criterion: if corresponding angles are equal, the lines are parallel.", sol:"4x + 10 = 118; 4x = 108; x = 27. Answer: 27."},
    {q:"Lines a ‖ b, and one of the co-interior angles is 72°. Nastya decided that the second co-interior angle is also 72°, &ldquo;because angles are equal when lines are parallel.&rdquo; Find the mistake and write the correct answer (in degrees).", ans:"108", hint:"Which angles are equal when lines are parallel, and which add up to 180°?", sol:"Alternate interior and corresponding angles are equal, while co-interior angles add up to 180°: 180° − 72° = 108°. Answer: 108."},
    {q:"Lines a ‖ b. The difference between two co-interior angles is 40°. Find the larger one (in degrees).", ans:"110", hint:"The sum of co-interior angles is known. Let the smaller one be x, then the larger one is x + 40.", sol:"x + x + 40 = 180; 2x = 140; x = 70°. The larger one is 110°. Answer: 110."},
    {q:"Two parallel lines are crossed by a transversal. The sum of all the acute angles among the eight formed is 160°. Find the obtuse angle (in degrees).", ans:"140", hint:"How many of the eight angles are acute, and are they equal to each other?", sol:"There are four acute angles, and they're all equal: 160° : 4 = 40°. The obtuse angle: 180° − 40° = 140°. Answer: 140."},
    {q:"Two parallel lines are crossed by a transversal. One of the eight angles formed is 100° larger than another. Find the smaller of these two angles (in degrees).", ans:"40", hint:"All eight angles take only two values, and these values add up to 180°.", sol:"The acute angle is x, the obtuse one is 180° − x. (180 − x) − x = 100; 2x = 80; x = 40°. Answer: 40."},
    {q:"Which of these statements is a criterion for parallel lines (not a property)?", opts:["If the lines are parallel, then the alternate interior angles are equal","If the corresponding angles are equal, then the lines are parallel","If the lines are parallel, then the sum of the co-interior angles is 180°"], ans:1, hint:"A criterion helps prove that lines are parallel: in it, being parallel is the conclusion, after the word &ldquo;then.&rdquo;", sol:"In a criterion, the equality of the angles leads to the conclusion that the lines are parallel. That's the second option. The first and third are properties: in them, being parallel is given."}
  ],
  bonus: {q:"Lines a and b are parallel, and point C lies between them (in the strip). Two rays are drawn from point C — one to line a, the other to line b — forming a broken line shaped like the letter Z. The angle between the first ray and line a is 35°, and the angle between the second ray and line b is 25°. Find the angle between the two rays at point C (in degrees).", ans:"60", hint:"Draw an auxiliary line c through C, parallel to a and b. It will split the angle you need at point C into two alternate interior angles — 35° and 25°.", sol:"Draw an auxiliary line c ‖ a ‖ b through point C. The angle between c and the first ray is alternate interior with the 35° angle at line a, so it's also 35°. The angle between c and the second ray is alternate interior with the 25° angle at line b, so it's also 25°. Line c lies inside the angle we want and splits it into these two angles, so the whole angle = 35° + 25° = 60°."},
  test: [
    {q:"Lines a ‖ b, and an alternate interior angle is 61°. Find the second alternate interior angle (in degrees).", ans:"61", sol:"Alternate interior angles are equal when lines are parallel: 61°."},
    {q:"Lines a ‖ b, and a corresponding angle is 88°. Find the second corresponding angle (in degrees).", ans:"88", sol:"Corresponding angles are equal: 88°."},
    {q:"Lines a ‖ b, and one of the co-interior angles is 74°. Find the second one (in degrees).", ans:"106", sol:"180° − 74° = 106°."},
    {q:"Which criterion proves that lines are parallel?", opts:["Alternate interior angles are equal","Adjacent angles equal 180°","Vertical angles are equal","The triangle is isosceles"], ans:0, sol:"Equal alternate interior angles is one of the criteria for parallel lines."},
    {q:"Lines a ‖ b. One of the co-interior angles is 2 times larger than the other. Find the smaller angle (in degrees).", ans:"60", sol:"180° : 3 = 60°."},
    {q:"What is true for corresponding angles when lines are parallel?", opts:["Their sum equals 90°","They are equal to each other","They are always adjacent","Their sum equals 180°"], ans:1, sol:"Corresponding angles are equal to each other when lines are parallel."},
    {q:"Lines a ‖ b. One of the alternate interior angles is 2x, and the second is x + 27. Find the value of the angle (in degrees).", ans:"54", sol:"2x = x + 27 → x = 27. The angle: 2·27 = 54°."},
    {q:"In a triangle, a line is drawn through one of the vertices, parallel to the opposite side. Two of the alternate interior angles formed are 40° and 65°. Find the third angle of the triangle, lying between them (in degrees).", ans:"75", sol:"180° − 40° − 65° = 75°."}
  ],
  lab: [
    {t:"Looking for parallel lines around you", b:"Walk around your apartment and find 5 examples of parallel lines: the edges of a book, slats on a windowsill, lines on a sheet of notebook paper, the steps of a staircase, railroad rails in a photograph. For two of the examples, use a ruler to check that the distance between the lines is the same at different points — that's the criterion for parallelism, in practice."},
    {t:"A protractor and a window frame", b:"Find a rectangular window frame or door frame at home. Place a ruler diagonally across two parallel edges of the frame, like a &ldquo;transversal,&rdquo; and use a protractor to measure the angle at one point of intersection and the alternate interior angle at the other point. The angles should come out equal (allowing for measurement error)."},
    {t:"A lined notebook as a transversal", b:"Take a lined notebook (the lines are parallel) and draw one slanted transversal line across several of the page's rules. Use a protractor to measure the angle between the transversal and the first line, and the angle between the transversal and the second line (corresponding angles) — they should come out the same."},
    {t:"Checking the criterion by eye", b:"Draw by hand two lines that visually diverge or converge (not parallel), and draw a transversal. Measure the alternate interior angles with a protractor — they should noticeably differ, unlike real parallel lines, where such angles are always equal."}
  ],
  steps: [
    {
      title: "Parallel lines and a transversal",
      body: "<p><b>Parallel lines</b> are lines in a plane that never meet, no matter how far they are extended in either direction. Notation: a ‖ b.</p><p>If two lines are crossed by a third line — a <b>transversal</b> — then 8 angles are formed at the two points of intersection (4 at each point). These angles fall into three groups: corresponding, alternate interior, and co-interior. Watch how this works:</p><div class='figure'>__SVG_PAR_TRANS_ANIM__</div>"
    },
    {
      title: "Criterion for parallel lines: alternate interior angles are equal",
      body: "<h3>Criteria for parallel lines</h3><p>Criteria help you PROVE that lines are parallel, if something is known about the angles: if the alternate interior angles are equal — the lines are parallel; if the corresponding angles are equal — the lines are parallel; if the sum of the co-interior angles is 180° — the lines are parallel.</p><div class='warn'><span class='hand'>Common mistake</span>Don't confuse a criterion with a property! A criterion is when we PROVE that lines are parallel from the angles. A property is when the lines are ALREADY parallel, and from this we find the angles.</div>",
      exIdx: 3
    },
    {
      title: "Property: alternate interior angles are equal",
      body: "<p>If the lines are ALREADY parallel (a ‖ b), then where a transversal crosses them, the <b>alternate interior angles are equal</b> — this is a property, not a criterion. Lines a and b are parallel, and a transversal forms a 63° angle with them (one of the alternate interior angles) — so the second alternate interior angle is also 63°.</p>",
      exIdx: 0
    },
    {
      title: "Property: corresponding angles and the angle adjacent to them",
      body: "<p><b>Corresponding angles</b> are equal when lines are parallel. If one of the corresponding angles is 105°, we find the angle adjacent to it at the same point of intersection like this: adjacent angles add up to 180°, so 180° − 105° = 75°.</p>",
      exIdx: 2
    },
    {
      title: "Property: the sum of co-interior angles is 180°",
      body: "<p><b>Co-interior angles</b> lie between the two lines on the same side of the transversal, and their sum is 180° when lines are parallel. If one of the co-interior angles is 72°, the second angle: 180° − 72° = 108°.</p>",
      exIdx: 1
    },
    {
      title: "How to find an angle with parallel lines",
      body: "<p>Since the lines are parallel, all 8 angles take only two values: one and the same acute (or right) value, or its supplement up to 180°, an obtuse value. If one angle is known, the whole picture of angles can be worked out: the alternate interior angle and the corresponding angle equal the given one, while the angle adjacent to it (and co-interior with it) is 180° minus the given angle.</p><p>Since we're already talking about parallel lines: it's with their help that geometry proves the theorem about the angle sum of a triangle (using a line parallel to one of the sides and passing through the opposite vertex). Here's a triangle ABC: its angles ∠A, ∠B, and ∠C together add up to 180°.</p><div class='figure'>__SVG_TRIANGLE__</div>"
    }
  ]
};


})();
