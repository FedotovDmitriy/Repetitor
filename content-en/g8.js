/* ===================================================================
   English content for grade 8 (CONTENT_EN) — loaded on demand by
   ensureContentEn() in index.html when the interface language is
   English and a grade-8 topic is opened. Mirrors the structure of
   the Russian CONTENT.<id> objects exactly (same field names, same
   example/task/test counts and order, same ans values) so progress
   saved while answering tasks lines up regardless of language.

   All 7 grade-8 topics (sqrt, quad, ratf, ineq, pyth, circ8, quadr)
   carry the EXTRA2/EXTRA3 task-only overlay (applies to grades 4-8,
   first identified in 2.47.0 for grade 4) — confirmed via grep before
   translating that NONE of them carry the older EXTRA.<id> overlay
   (that one only exists for 4 grade-5 topics: ord, frac, dec, perc;
   grades 6 and 7 were also confirmed to have none of it — presence or
   absence of the old overlay is not predictable from the grade number
   and must be checked per class). This file's CONTENT_EN.<id> objects
   already contain every example/task fully resolved and flattened in
   the exact final order the Russian runtime produces.

   Note: unlike every other topic in grades 4-8 (uniformly 32 tasks),
   sqrt resolves to 33 tasks — confirmed via jsdom ground-truth dump,
   not a translation error; the English file mirrors this exactly.
   Two decimal-comma values ("1,5") were found in the Russian source
   (one each in sqrt and ratf) and normalized to decimal-point ("1.5")
   in English, per the established convention (the app's answer
   comparison normalizes commas to dots automatically, so this is
   purely a presentation change, not a behavior change).

   Illustrations (SVG figures referenced via __SVG_X__ markers) are
   NOT re-localized in this version — they still show Russian labels
   baked into the SVG itself. Re-drawing every figure in English is a
   separate, much larger task, deferred along with topic/node names
   and cheat-sheet formulas. See CHANGELOG.
   ================================================================= */
(function(){

/* ---------- sqrt ---------- */
CONTENT_EN.sqrt = {
  "goal": "After this topic, you will be able to find square roots, apply their properties, factor a number out from under the root, and confidently perform operations with square roots.",
  "explain": "<p>The <b>square root</b> of a number <b>a</b> is a number whose square equals a. The <b>arithmetic square root</b> of a (for a ≥ 0) is the non-negative number b such that b² = a, written as √a. From here on, whenever we say \"square root,\" we mean this arithmetic root. Here's how it works:</p><div class=\"figure\">__SVG_SQRT_SQUARE_ANIM__</div><div class=\"note\"><span class=\"hand\">Remember</span>The expression under the root cannot be negative, and the root itself is never negative: √a ≥ 0 for a ≥ 0, and if a &lt; 0, then √a does not exist among the real numbers.</div><h3>A table of squares worth memorizing</h3><p>To recognize perfect squares quickly, it helps to know these by heart: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100, 11²=121, 12²=144, 13²=169, 14²=196, 15²=225. Then, for example, √225 is immediately recognized as 15.</p><h3>Properties of the arithmetic square root</h3><ul><li><b>Root of a product:</b> √(a · b) = √a · √b, if a ≥ 0 and b ≥ 0.</li><li><b>Root of a quotient:</b> √(a : b) = √a : √b, if a ≥ 0 and b &gt; 0.</li><li><b>Square of a root:</b> (√a)² = a, if a ≥ 0 — taking a root and squaring undo each other.</li><li><b>Root of a square:</b> √(a²) = |a|. It's easy to slip up here: the answer is not a, but the absolute value of a, since a root can never be negative. If it's already known that a ≥ 0, then simply √(a²) = a.</li></ul><div class=\"warn\"><span class=\"hand\">Common mistake</span>√(a + b) is not equal to √a + √b! For example, √(9 + 16) = √25 = 5, while √9 + √16 = 3 + 4 = 7 — two different numbers. You cannot take the root of each term separately, only of a product or a quotient.</div><h3>Factoring a number out from under the root</h3><p>If the number under the root can be written as the product of a perfect square and another factor, the perfect square can be \"factored out\" from under the root. For example: √72 = √(36 · 2) = √36 · √2 = 6√2. The 6 in front of the root is the coefficient, while 2 — which cannot be removed — stays under the root.</p><p>The reverse operation — <b>pulling a factor under the root</b>: to move a positive number a under the root, you square it: a√b = √(a² · b). For example, 5√3 = √(25 · 3) = √75. This is handy when you need to compare two numbers written with roots.</p><h3>Like roots: addition and subtraction</h3><p>You can only add and subtract \"like\" roots — those with the same number under the root (just like like terms with the same letter part). The coefficients in front of matching roots are added or subtracted, while the number under the root stays the same: 3√2 + 5√2 = 8√2; 9√5 − 4√5 = 5√5. But 3√2 + 5√3 cannot be combined — the numbers under the roots are different.</p><p>Sometimes roots look \"different\" but become like roots once a factor is pulled out: √12 + √27 = 2√3 + 3√3 = 5√3.</p><h3>Multiplying and dividing roots</h3><p>Roots are multiplied and divided directly using the properties above: √3 · √12 = √36 = 6; √98 : √2 = √49 = 7. Sometimes the product or quotient of the numbers under the roots turns out to be a perfect square, and the irrationality disappears completely.</p><h3>Rationalizing the denominator</h3><p>By convention, a root should not be left in the denominator of a fraction in a final answer. To get rid of it, multiply the numerator and denominator by that same root: {a|√b} = {a·√b|√b·√b} = {a√b|b}. For example: {10|√5} = {10√5|5} = 2√5.</p><div class=\"figure\">__SVG_SQRT_NUMLINE__</div><h3>Estimating the value of a root</h3><p>If the number under the root is not a perfect square, the exact value of the root is an infinite, non-repeating decimal, but it can be estimated by trapping it between the two nearest perfect squares. For example, to find which two integers √40 lies between: 36 &lt; 40 &lt; 49, so 6 &lt; √40 &lt; 7 (since 6²=36, 7²=49). You can compare roots the same way: for 2√5 and 3√2, pull the coefficients under the root: 2√5=√20, 3√2=√18; since 20 &gt; 18, 2√5 &gt; 3√2.</p>",
  "examples": [
    {
      "t": "Find √81.",
      "s": "We look for a number whose square equals 81: 9²=81, so √81=9.<div class=\"figure\">__SVG_SQRT8_EX0_PERFECTSQUARE81__</div>"
    },
    {
      "t": "Find the value of √(4 · 25) two ways and compare the results.",
      "s": "Method 1 — using the property: √(4·25)=√4·√25=2·5=10. Method 2 — directly: 4·25=100, √100=10. Both methods give the same answer.<div class=\"figure\">__SVG_SQRT8_EX1_PRODUCTTWOWAYS__</div>"
    },
    {
      "t": "Factor a number out from under the root in √50.",
      "s": "Let's write 50 as a product of a perfect square and another factor: 50=25·2. √50=√(25·2)=√25·√2=5√2.<div class=\"figure\">__SVG_SQRT8_EX2_FACTOROUT50__</div>"
    },
    {
      "t": "Find the value of 3√2 + 7√2 − 2√2.",
      "s": "All three roots are alike (2 is under the root each time), so we only add and subtract the coefficients: 3+7−2=8. Answer: 8√2.<div class=\"figure\">__SVG_SQRT8_EX3_LIKEROOTS__</div>"
    },
    {
      "t": "Rationalize the denominator of the fraction {6|√3}.",
      "s": "Multiply the numerator and denominator by √3: {6|√3} = {6√3|√3·√3} = {6√3|3} = 2√3.<div class=\"figure\">__SVG_SQRT8_EX4_RATIONALIZE__</div>"
    },
    {
      "t": "Find √((−4)²).",
      "s": "First compute (−4)²=16, then √16=4. The answer is the positive number 4 (the absolute value of −4), not −4, because the arithmetic root is never negative.<div class=\"figure\">__SVG_SQRT8_EX5_SQUARENEGATIVE__</div>"
    }
  ],
  "tasks": [
    {
      "q": "Find the value of √64.",
      "ans": "8",
      "hint": "Look for a number whose square equals 64.",
      "sol": "8²=64, so √64=8."
    },
    {
      "q": "Find the value of √121.",
      "ans": "11",
      "hint": "11²=121.",
      "sol": "11·11=121, so √121=11."
    },
    {
      "q": "Find the value of √0.49.",
      "ans": "0.7",
      "hint": "Look for a decimal whose square equals 0.49.",
      "sol": "0.7²=0.49, so √0.49=0.7."
    },
    {
      "q": "Find the value of √{1|4}.",
      "ans": "1/2",
      "reduced": true,
      "hint": "Take the root of the numerator and the denominator separately.",
      "sol": "√{1|4} = {√1|√4} = {1|2}."
    },
    {
      "q": "Find the value of √16 · √9.",
      "ans": "12",
      "hint": "Take each root separately, then multiply.",
      "sol": "√16=4, √9=3, 4·3=12."
    },
    {
      "q": "Find the value of √80 : √5.",
      "ans": "4",
      "hint": "First divide the numbers under the roots: 80:5, then take the root.",
      "sol": "√80:√5=√(80:5)=√16=4."
    },
    {
      "q": "Write √98 in the form a√2, where a is a natural number. What is a?",
      "ans": "7",
      "hint": "Factor 98 as a product of a perfect square and the number 2.",
      "sol": "98=49·2, √98=√49·√2=7√2, so a=7."
    },
    {
      "q": "Write √200 in the form a√2, where a is a natural number. What is a?",
      "ans": "10",
      "hint": "Factor 200 as a product of a perfect square and the number 2.",
      "sol": "200=100·2, √200=√100·√2=10√2, so a=10."
    },
    {
      "q": "Find the value of 5√3 + 2√3. What is the coefficient in front of the root in the answer?",
      "ans": "7",
      "hint": "The roots are alike — add only the coefficients.",
      "sol": "5√3+2√3=(5+2)√3=7√3, the coefficient is 7."
    },
    {
      "q": "Find the value of 9√5 − 4√5. What is the coefficient in front of the root in the answer?",
      "ans": "5",
      "hint": "The roots are alike — subtract the coefficients.",
      "sol": "9√5−4√5=(9−4)√5=5√5, the coefficient is 5."
    },
    {
      "q": "Find the value of (√7)².",
      "ans": "7",
      "hint": "Squaring and taking a root are inverse operations.",
      "sol": "(√7)²=7 by the square-of-a-root property."
    },
    {
      "q": "Find the value of √(11²).",
      "ans": "11",
      "hint": "11 is a non-negative number, so the root of its square equals the number itself.",
      "sol": "√(11²)=|11|=11."
    },
    {
      "q": "Find the value of √((−6)²).",
      "ans": "6",
      "hint": "First find (−6)², then take the root — remember the result can't be negative.",
      "sol": "(−6)²=36, √36=6 (this is |−6|, not −6)."
    },
    {
      "q": "Rationalize the denominator of the fraction {10|√5}. The result has the form a√5. What is a?",
      "ans": "2",
      "hint": "Multiply the numerator and denominator by √5.",
      "sol": "{10|√5}={10√5|5}=2√5, so a=2."
    },
    {
      "q": "Rationalize the denominator of the fraction {21|√7}. The result has the form a√7. What is a?",
      "ans": "3",
      "hint": "Multiply the numerator and denominator by √7.",
      "sol": "{21|√7}={21√7|7}=3√7, so a=3."
    },
    {
      "q": "Between which two consecutive integers does √30 lie? Give the larger one.",
      "ans": "6",
      "hint": "Find the two neighboring perfect squares that 30 falls between.",
      "sol": "25 &lt; 30 &lt; 36, so 5 &lt; √30 &lt; 6. The larger integer is 6."
    },
    {
      "q": "Between which two consecutive integers does √70 lie? Give the smaller one.",
      "ans": "8",
      "hint": "Find the two neighboring perfect squares that 70 falls between.",
      "sol": "64 &lt; 70 &lt; 81, so 8 &lt; √70 &lt; 9. The smaller integer is 8."
    },
    {
      "q": "Solve the equation √x = 9. Find x.",
      "ans": "81",
      "hint": "Square both sides of the equation.",
      "sol": "x=9²=81. Check: √81=9 ✓."
    },
    {
      "q": "Solve the equation √(x − 4) = 3. Find x.",
      "ans": "13",
      "hint": "First square both sides, then solve the resulting equation.",
      "sol": "x−4=3²=9; x=13. Check: √(13−4)=√9=3 ✓."
    },
    {
      "q": "A square plot has an area of 128 m². Its side is a√2 meters. What is a?",
      "ans": "8",
      "hint": "The side of a square is the root of its area. Factor 128 as a product of a perfect square and the number 2.",
      "sol": "Side = √128 = √(64·2) = 8√2, so a=8."
    },
    {
      "q": "Find the value of √12 + √27. What is the coefficient in front of the root in the answer?",
      "ans": "5",
      "hint": "First factor a number out from under each root — then the roots become alike.",
      "sol": "√12=2√3, √27=3√3. Sum: 2√3+3√3=5√3, the coefficient is 5."
    },
    {
      "q": "Find the value of √45 − √20. What is the coefficient in front of the root in the answer?",
      "ans": "1",
      "hint": "Factor a number out from under each root.",
      "sol": "√45=3√5, √20=2√5. Difference: 3√5−2√5=1√5=√5, the coefficient is 1."
    },
    {
      "q": "Find the value of √3 · √12.",
      "ans": "6",
      "hint": "Multiply the numbers under the roots, then take the root.",
      "sol": "√3·√12=√(3·12)=√36=6."
    },
    {
      "q": "Find the value of √72 : √2.",
      "ans": "6",
      "hint": "Divide the numbers under the roots, then take the root.",
      "sol": "√72:√2=√(72:2)=√36=6."
    },
    {
      "q": "A fence around a square lawn with an area of 225 m² costs 300 ₽ per meter. How many rubles does the whole fence cost?",
      "ans": "18000",
      "hint": "First find the side of the lawn (the root of the area), then the perimeter, then the cost.",
      "sol": "Side: √225=15 m. Perimeter: 4·15=60 m. Cost: 60·300=18000 ₽."
    },
    {
      "q": "Compare the numbers 3√5 and 2√11 by pulling the coefficients under the root. Write down the square of the larger of these two numbers.",
      "ans": "45",
      "hint": "Pull the factor under the root: a√b = √(a²·b). The larger root belongs to the larger number under the root.",
      "sol": "3√5 = √(9·5) = √45, 2√11 = √(4·11) = √44. 45 &gt; 44, so 3√5 is larger, and its square is 45. Answer: 45."
    },
    {
      "q": "Petya wrote: √(16 + 9) = √16 + √9 = 4 + 3 = 7. Find his mistake and write what √(16 + 9) is actually equal to.",
      "ans": "5",
      "hint": "You cannot take the root of a sum term by term — first add the numbers under the root.",
      "sol": "16 + 9 = 25, √25 = 5. Petya's mistake: √(a + b) ≠ √a + √b. Answer: 5."
    },
    {
      "q": "Two square tiles with areas 18 cm² and 8 cm² are placed side by side so that their bottom edges lie on the same line, touching each other. The total length of these bottom edges is a√2 cm. Find a.",
      "ans": "5",
      "hint": "The side of a square is the root of its area. Factor a number out from under each root and add the like roots.",
      "sol": "√18 = √(9·2) = 3√2, √8 = √(4·2) = 2√2. Sum: 3√2 + 2√2 = 5√2, so a = 5. Answer: 5."
    },
    {
      "q": "Find the value of √(2 {1|4}). Write the answer as a decimal.",
      "ans": "1.5",
      "hint": "Turn the mixed number into an improper fraction, then take the root of the numerator and the denominator.",
      "sol": "2 {1|4} = {9|4}, √{9|4} = {3|2} = 1.5. Answer: 1.5."
    },
    {
      "q": "Find the value of (2√3)² + (3√2)².",
      "ans": "30",
      "hint": "Square both the coefficient and the root: (a√b)² = a²·b.",
      "sol": "(2√3)² = 4·3 = 12, (3√2)² = 9·2 = 18. 12 + 18 = 30. Answer: 30."
    },
    {
      "q": "Find the value of (√7 − √2)(√7 + √2).",
      "ans": "5",
      "hint": "This is a product of a difference and a sum — recall the difference-of-squares formula.",
      "sol": "(√7 − √2)(√7 + √2) = (√7)² − (√2)² = 7 − 2 = 5. Answer: 5."
    },
    {
      "q": "How many integers lie between √10 and √50?",
      "ans": "4",
      "hint": "Find the nearest perfect squares: which integers squared are greater than 10 but less than 50?",
      "sol": "We need integers n with 10 &lt; n² &lt; 50: these are 4 (16), 5 (25), 6 (36), 7 (49). That's 4 numbers. Answer: 4."
    },
    {
      "q": "A room is shaped like a square with an area of 20.25 m². How many meters of baseboard are needed to go around the whole room's perimeter? Ignore any doorway.",
      "ans": "18",
      "hint": "First find the side of the room as the root of the area. Hint: 45² = 2025.",
      "sol": "Side: √20.25 = 4.5 m. Perimeter: 4 · 4.5 = 18 m. Answer: 18."
    }
  ],
  "bonus": {
    "q": "The value of the expression √(6+√(6+√(6+…))) (the root continues forever) is a whole number. Find it.",
    "ans": "3",
    "hint": "Call the whole expression x. Then under the outermost root stands the same expression again: x=√(6+x). Square both sides and solve the resulting quadratic equation for x, choosing the non-negative root.",
    "sol": "x=√(6+x) ⇒ x²=6+x ⇒ x²−x−6=0. By Vieta's theorem the roots are −2 and 3. Since x is the value of a root, it cannot be negative, so x=3 fits."
  },
  "test": [
    {
      "q": "Find the value of √49.",
      "ans": "7",
      "sol": "7²=49, so √49=7."
    },
    {
      "q": "Find the value of √0.",
      "ans": "0",
      "sol": "0²=0, so √0=0."
    },
    {
      "q": "Find the value of (√13)².",
      "ans": "13",
      "sol": "Squaring a root returns the number under the root: (√13)²=13."
    },
    {
      "q": "Find the value of √(5²).",
      "ans": "5",
      "sol": "5 is a non-negative number, so √(5²)=5."
    },
    {
      "q": "Which expression equals √72?",
      "opts": [
        "6√2",
        "8√2",
        "36√2",
        "72√2"
      ],
      "ans": 0,
      "sol": "72=36·2, √72=√36·√2=6√2."
    },
    {
      "q": "Which is greater: 2√5 or 3√2?",
      "opts": [
        "2√5",
        "3√2",
        "they are equal"
      ],
      "ans": 0,
      "sol": "Pull the coefficients under the root: 2√5=√20, 3√2=√18. Since 20 &gt; 18, 2√5 &gt; 3√2."
    },
    {
      "q": "Solve the equation √x = 11. What is x?",
      "ans": "121",
      "sol": "x=11²=121."
    },
    {
      "q": "Between which integers does √55 lie?",
      "opts": [
        "6 and 7",
        "7 and 8",
        "8 and 9"
      ],
      "ans": 1,
      "sol": "49 &lt; 55 &lt; 64, so 7 &lt; √55 &lt; 8."
    }
  ],
  "lab": [
    {
      "t": "Square floor tiles",
      "b": "Count how many identical square tiles are laid out in a row on the floor of your bathroom, kitchen, or a square patch of yard, and find the total area of the covering in tiles. If it forms a square — say, 8×8=64 tiles — check: the side of such a square is √64=8 tiles, exactly what you counted along the edge."
    },
    {
      "t": "A quick estimate without a calculator",
      "b": "Pick any two-digit number from 30 to 90 and try, within 10 seconds, to estimate which two integers its square root lies between, recalling the nearest perfect squares (25, 36, 49, 64, 81). Then check with a calculator — how close was your estimate?"
    },
    {
      "t": "A square table or rug",
      "b": "Measure the length and width of a square table, rug, or sheet of paper with a tape measure, calculate the area (side squared), and then, the other way around, imagine you only know the area — try to \"recover\" the side using a square root and compare it with the real measurement."
    },
    {
      "t": "The \"Who Estimates Better\" game",
      "b": "Play with a parent or friend: one person names a number that is not a perfect square (for example, 55), both of you simultaneously give an estimate of its square root to one decimal place without a calculator, and then check against the exact value on a calculator — whoever was closer wins."
    }
  ],
  "steps": [
    {
      "title": "What a square root is",
      "body": "<p>The square root of a number <b>a</b> is a number whose square equals a. The arithmetic square root of a (for a ≥ 0) is the non-negative number b such that b² = a, written as √a. From here on, whenever we say \"square root,\" we mean this arithmetic root. Here's how it works:</p><div class=\"figure\">__SVG_SQRT_SQUARE_ANIM__</div><div class=\"note\"><span class=\"hand\">Remember</span>The expression under the root cannot be negative, and the root itself is never negative: √a ≥ 0 for a ≥ 0, and if a &lt; 0, then √a does not exist among the real numbers.</div>"
    },
    {
      "title": "The table of squares and finding roots by inspection",
      "body": "<h3>A table of squares worth memorizing</h3><p>To recognize perfect squares quickly, it helps to know these by heart: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25, 6²=36, 7²=49, 8²=64, 9²=81, 10²=100, 11²=121, 12²=144, 13²=169, 14²=196, 15²=225. Then, for example, √225 is immediately recognized as 15. To find √81, we simply look for a number whose square equals 81.</p>",
      "exIdx": 0
    },
    {
      "title": "Properties of the root: product and quotient",
      "body": "<h3>Properties of the arithmetic square root</h3><ul><li><b>Root of a product:</b> √(a · b) = √a · √b, if a ≥ 0 and b ≥ 0.</li><li><b>Root of a quotient:</b> √(a : b) = √a : √b, if a ≥ 0 and b &gt; 0.</li></ul><p>Let's check the property on numbers — find the value of √(4 · 25) two ways and compare the results.</p>",
      "exIdx": 1
    },
    {
      "title": "Square of a root and root of a square",
      "body": "<ul><li><b>Square of a root:</b> (√a)² = a, if a ≥ 0 — taking a root and squaring undo each other.</li><li><b>Root of a square:</b> √(a²) = |a|. It's easy to slip up here: the answer is not a, but the absolute value of a, since a root can never be negative. If it's already known that a ≥ 0, then simply √(a²) = a.</li></ul><div class=\"warn\"><span class=\"hand\">Common mistake</span>√(a + b) is not equal to √a + √b! For example, √(9 + 16) = √25 = 5, while √9 + √16 = 3 + 4 = 7 — two different numbers. You cannot take the root of each term separately, only of a product or a quotient.</div><p>Let's see the absolute value in action: find √((−4)²) — the answer should come out positive.</p>",
      "exIdx": 5
    },
    {
      "title": "Factoring a number out from under the root, and pulling it back in",
      "body": "<h3>Factoring a number out from under the root</h3><p>If the number under the root can be written as the product of a perfect square and another factor, the perfect square can be \"factored out\" from under the root. For example: √72 = √(36 · 2) = √36 · √2 = 6√2. The 6 in front of the root is the coefficient, while 2 — which cannot be removed — stays under the root.</p><p>The reverse operation — <b>pulling a factor under the root</b>: to move a positive number a under the root, you square it: a√b = √(a² · b). For example, 5√3 = √(25 · 3) = √75. This is handy when you need to compare two numbers written with roots.</p><p>Let's practice factoring a number out — let's work through √50.</p>",
      "exIdx": 2
    },
    {
      "title": "Like roots: addition and subtraction",
      "body": "<h3>Like roots: addition and subtraction</h3><p>You can only add and subtract \"like\" roots — those with the same number under the root (just like like terms with the same letter part). The coefficients in front of matching roots are added or subtracted, while the number under the root stays the same: 3√2 + 5√2 = 8√2; 9√5 − 4√5 = 5√5. But 3√2 + 5√3 cannot be combined — the numbers under the roots are different.</p><p>Sometimes roots look \"different\" but become like roots once a factor is pulled out: √12 + √27 = 2√3 + 3√3 = 5√3.</p>",
      "exIdx": 3
    },
    {
      "title": "Multiplication, division, and clearing a root from the denominator",
      "body": "<h3>Multiplying and dividing roots</h3><p>Roots are multiplied and divided directly using the properties above: √3 · √12 = √36 = 6; √98 : √2 = √49 = 7. Sometimes the product or quotient of the numbers under the roots turns out to be a perfect square, and the irrationality disappears completely.</p><h3>Rationalizing the denominator</h3><p>By convention, a root should not be left in the denominator of a fraction in a final answer. To get rid of it, multiply the numerator and denominator by that same root: {a|√b} = {a·√b|√b·√b} = {a√b|b}. For example: {10|√5} = {10√5|5} = 2√5.</p><div class=\"figure\">__SVG_SQRT_NUMLINE__</div>",
      "exIdx": 4
    },
    {
      "title": "Estimating the value of a root",
      "body": "<h3>Estimating the value of a root</h3><p>If the number under the root is not a perfect square, the exact value of the root is an infinite, non-repeating decimal, but it can be estimated by trapping it between the two nearest perfect squares. For example, to find which two integers √40 lies between: 36 &lt; 40 &lt; 49, so 6 &lt; √40 &lt; 7 (since 6²=36, 7²=49). Here's how numbers and their roots sit on the number line:</p><div class=\"figure\">__SVG_SQRT_NUMLINE__</div><p>You can compare roots the same way: for 2√5 and 3√2, pull the coefficients under the root: 2√5=√20, 3√2=√18; since 20 &gt; 18, 2√5 &gt; 3√2.</p>"
    }
  ]
};

/* ---------- quad ---------- */
CONTENT_EN.quad = {
  "goal": "After this topic, you will be able to solve any quadratic equation — using the discriminant and Vieta's theorem — and apply them to word problems.",
  "explain": "<p>A <b>quadratic equation</b> is an equation of the form <b>ax² + bx + c = 0</b>, where a, b, c are numbers (coefficients), and a ≠ 0 — otherwise x² would disappear and the equation would stop being quadratic. The number a is called the leading coefficient, b the second coefficient, and c the constant term.</p><h3>Incomplete quadratic equations</h3><p>If b = 0 or c = 0 (or both at once), the equation is called <b>incomplete</b> — it can be solved faster, without the general formula.</p><ul><li><b>c = 0:</b> ax² + bx = 0. Factor out x: x(ax + b) = 0. A product equals zero when one of the factors equals zero: x = 0 or x = −b/a. There are two roots.</li><li><b>b = 0:</b> ax² + c = 0. Isolate x²: x² = −c/a. If −c/a &gt; 0 — two roots x = ±√(−c/a); if −c/a = 0 — a single root x = 0; if −c/a &lt; 0 — there are no real roots (a square cannot be negative).</li><li><b>b = 0 and c = 0:</b> ax² = 0, a single root x = 0.</li></ul><div class=\"warn\"><span class=\"hand\">Common mistake</span>In the equation ax² + bx = 0, the root x = 0 is often \"lost\" by dividing both sides by x. You cannot divide an equation by a variable — doing so loses one of the roots. The correct approach is to factor out x.</div><h3>The discriminant and the root formula</h3><p>For a complete equation ax² + bx + c = 0, you compute the <b>discriminant</b>: D = b² − 4ac. It tells you how many real roots the equation has.</p><div class=\"figure\">__SVG_QUAD_DISCRIMINANT_ANIM__</div><ul><li>If <b>D &gt; 0</b> — two roots: x = (−b ± √D) / (2a).</li><li>If <b>D = 0</b> — one root (people say \"two equal roots\"): x = −b / (2a).</li><li>If <b>D &lt; 0</b> — there are no real roots.</li></ul><p>For example, for x² − 5x + 6 = 0 the roots are x₁ = 3 and x₂ = 2 — see how this is calculated in the animation above.</p><h3>Vieta's theorem</h3><p>An equation of the form x² + px + q = 0 (with leading coefficient 1) is called <b>reduced</b>. For such an equation, Vieta's theorem holds: the sum of the roots equals −p, and the product equals q: x₁ + x₂ = −p, x₁ · x₂ = q. This lets you find the roots mentally, by picking two numbers with the required sum and product, instead of computing the discriminant.</p><div class=\"figure\">__SVG_QUAD_VIETA__</div><p>Vieta's theorem also works in reverse: if the roots x₁ and x₂ are known, you can immediately write the equation x² − (x₁ + x₂)x + x₁ · x₂ = 0.</p><div class=\"note\"><span class=\"hand\">Remember</span>Be careful with the signs: the sum of the roots equals <b>−p</b> (with the opposite sign!), while the product equals q (unchanged).</div><h3>Factoring into linear factors</h3><p>If the quadratic equation ax² + bx + c = 0 has roots x₁ and x₂, then the quadratic trinomial factors as: ax² + bx + c = a(x − x₁)(x − x₂). This is useful for reducing fractions and solving inequalities in later topics.</p><h3>Quadratic equations in word problems</h3><p>Many problems about area, the product of consecutive numbers, or motion reduce to a quadratic equation: denote the unknown by x, set up the equation from the problem statement, solve it using the discriminant, and choose the root that fits the meaning of the problem (for example, a side length cannot be negative).</p>",
  "examples": [
    {
      "t": "Solve the incomplete equation 3x² − 12x = 0.",
      "s": "Factor out 3x: 3x(x − 4) = 0. So 3x = 0 or x − 4 = 0, that is, x = 0 or x = 4.<div class=\"figure\">__SVG_QUAD8_EX0_FACTOR0__</div>"
    },
    {
      "t": "Solve the incomplete equation 5x² − 20 = 0.",
      "s": "5x² = 20, x² = 4, x = ±2 — both numbers work, since (±2)² = 4.<div class=\"figure\">__SVG_QUAD8_EX1_SQRT20__</div>"
    },
    {
      "t": "Solve the equation x² − 5x + 6 = 0 using the discriminant.",
      "s": "a=1, b=−5, c=6. D = (−5)² − 4·1·6 = 25 − 24 = 1. √D = 1. x = (5 ± 1) / 2: x₁ = 3, x₂ = 2.<div class=\"figure\">__SVG_QUAD8_EX2_DISC1__</div>"
    },
    {
      "t": "Solve the equation x² − 6x + 9 = 0.",
      "s": "D = 36 − 36 = 0 — one root. x = −(−6)/(2·1) = 3. Check: x² − 6x + 9 = (x − 3)², and indeed this is zero only when x = 3.<div class=\"figure\">__SVG_QUAD8_EX3_DISC0__</div>"
    },
    {
      "t": "Solve the equation x² + 2x + 5 = 0.",
      "s": "D = 4 − 20 = −16 &lt; 0. There are no real roots — the parabola never crosses the x-axis.<div class=\"figure\">__SVG_QUAD8_EX4_DISCNEG__</div>"
    },
    {
      "t": "Solve the equation x² − 7x + 12 = 0 using Vieta's theorem.",
      "s": "We need two numbers with sum 7 and product 12. These are 3 and 4 (3+4=7, 3·4=12). So x₁=3, x₂=4.<div class=\"figure\">__SVG_QUAD8_EX5_VIETA34__</div>"
    }
  ],
  "tasks": [
    {
      "q": "Solve the incomplete equation x² − 9x = 0. Find the larger root.",
      "ans": "9",
      "hint": "Factor out x.",
      "sol": "x(x−9)=0, so x=0 or x=9. The larger root is 9."
    },
    {
      "q": "Solve the incomplete equation 4x² − 16 = 0. Find the positive root.",
      "ans": "2",
      "hint": "Isolate x² and take the root with both signs.",
      "sol": "x²=4, x=±2. The positive root is 2."
    },
    {
      "q": "Solve the incomplete equation 2x² = 0. What is the single root?",
      "ans": "0",
      "hint": "Divide both sides by 2.",
      "sol": "x²=0, so x=0."
    },
    {
      "q": "Find the discriminant of the equation x² − 4x + 3 = 0.",
      "ans": "4",
      "hint": "D = b² − 4ac.",
      "sol": "D = (−4)² − 4·1·3 = 16 − 12 = 4."
    },
    {
      "q": "Solve the equation x² − 4x + 3 = 0. Find the larger root.",
      "ans": "3",
      "hint": "√D = 2 (from D=4 in the previous problem). Substitute into the root formula.",
      "sol": "x = (4 ± 2) / 2: x₁=3, x₂=1. The larger root is 3."
    },
    {
      "q": "Find the discriminant of the equation 2x² + 3x − 2 = 0.",
      "ans": "25",
      "hint": "D = b² − 4ac.",
      "sol": "D = 3² − 4·2·(−2) = 9 + 16 = 25."
    },
    {
      "q": "Solve the equation 2x² + 3x − 2 = 0. Find the larger root.",
      "ans": "0.5",
      "hint": "√D=5 (D=25 from the previous problem). Substitute into the root formula.",
      "sol": "x = (−3 ± 5) / 4: x₁ = 2/4 = 0.5, x₂ = −8/4 = −2. The larger root is 0.5."
    },
    {
      "q": "Solve the equation x² + 10x + 25 = 0. What is the single root?",
      "ans": "-5",
      "hint": "Find the discriminant — it should come out to zero.",
      "sol": "D = 100 − 100 = 0, the single root is x = −10/2 = −5."
    },
    {
      "q": "How many real roots does the equation x² + 2x + 5 = 0 have?",
      "ans": "0",
      "hint": "Find the discriminant and determine its sign.",
      "sol": "D = 4 − 20 = −16 &lt; 0, there are no real roots."
    },
    {
      "q": "Using Vieta's theorem for the equation x² − 7x + 12 = 0, find the sum of the roots.",
      "ans": "7",
      "hint": "The sum of the roots of the reduced equation x²+px+q=0 equals −p.",
      "sol": "Here p=−7, so the sum of the roots = −p = 7."
    },
    {
      "q": "Using Vieta's theorem for the equation x² − 7x + 12 = 0, find the product of the roots.",
      "ans": "12",
      "hint": "The product of the roots of the reduced equation equals q.",
      "sol": "Here q=12, so the product of the roots = 12."
    },
    {
      "q": "Using Vieta's theorem, find the larger root of the equation x² − 7x + 12 = 0.",
      "ans": "4",
      "hint": "Pick two numbers with sum 7 and product 12.",
      "sol": "These are 3 and 4 (3+4=7, 3·4=12). The larger root is 4."
    },
    {
      "q": "The sum of the roots of a reduced quadratic equation is 10, and the product is 21. What is the larger root?",
      "ans": "7",
      "hint": "Pick two numbers with sum 10 and product 21.",
      "sol": "These are 3 and 7 (3+7=10, 3·7=21). The larger root is 7."
    },
    {
      "q": "Without solving the equation x² − 5x − 14 = 0, find the sum of its roots (using Vieta's theorem).",
      "ans": "5",
      "hint": "The sum of the roots equals −p, where p is the coefficient of x.",
      "sol": "Here p=−5, so the sum of the roots = −(−5) = 5."
    },
    {
      "q": "Without solving the equation x² − 5x − 14 = 0, find the product of its roots.",
      "ans": "-14",
      "hint": "The product of the roots equals the constant term q.",
      "sol": "Here q=−14, so the product of the roots = −14."
    },
    {
      "q": "Write down a reduced quadratic equation x² + px + q = 0 with roots 4 and −3. What is the coefficient p?",
      "ans": "-1",
      "hint": "The sum of the roots equals −p.",
      "sol": "Sum of the roots: 4+(−3)=1=−p, so p=−1."
    },
    {
      "q": "For the equation with roots 4 and −3 (from the previous problem), what is the coefficient q?",
      "ans": "-12",
      "hint": "The product of the roots equals q.",
      "sol": "Product of the roots: 4·(−3)=−12=q."
    },
    {
      "q": "Factor the quadratic trinomial x² − x − 6 using its roots, and find the larger root.",
      "ans": "3",
      "hint": "Find the discriminant, then both roots using the formula.",
      "sol": "D=1+24=25, √D=5, x=(1±5)/2: x₁=3, x₂=−2. The larger root is 3."
    },
    {
      "q": "The perimeter of a rectangle is 22 cm, and the area is 24 cm². Find the longer side (in cm).",
      "ans": "8",
      "hint": "The half-perimeter is 11. Denote one side by x, so the other is (11−x); set up an equation for the area.",
      "sol": "x(11−x)=24 ⇒ x²−11x+24=0. D=121−96=25, √D=5, x=(11±5)/2=8 or 3. The longer side is 8 cm."
    },
    {
      "q": "The product of two consecutive natural numbers is 90. Find the larger one.",
      "ans": "10",
      "hint": "Denote the smaller number by x, so the second is (x+1); set up the equation x(x+1)=90.",
      "sol": "x²+x−90=0. D=1+360=361, √D=19, x=(−1+19)/2=9. The numbers are 9 and 10, the larger is 10."
    },
    {
      "q": "The sum of the squares of two consecutive even numbers is 100. Find the larger one.",
      "ans": "8",
      "hint": "Denote the smaller number by x, so the second is (x+2); set up the equation x² + (x+2)² = 100.",
      "sol": "2x²+4x−96=0 ⇒ x²+2x−48=0. D=4+192=196, √D=14, x=(−2+14)/2=6. The numbers are 6 and 8, the larger is 8."
    },
    {
      "q": "One side of a rectangular plot is 4 m longer than the other, and the area is 96 m². Find the shorter side (in m).",
      "ans": "8",
      "hint": "Denote the shorter side by x, so the other is (x+4); set up an equation for the area.",
      "sol": "x(x+4)=96 ⇒ x²+4x−96=0. D=16+384=400, √D=20, x=(−4+20)/2=8. The shorter side is 8 m (the longer is 12 m)."
    },
    {
      "q": "Solve the equation (x − 3)² = 16. Find the larger root.",
      "ans": "7",
      "hint": "Take the root of both sides — don't forget both signs.",
      "sol": "x−3=±4, so x=7 or x=−1. The larger root is 7."
    },
    {
      "q": "How many roots does the equation x² = 7x have?",
      "ans": "2",
      "hint": "Move everything to one side and factor out x.",
      "sol": "x²−7x=0 ⇒ x(x−7)=0 ⇒ x=0 or x=7. There are two roots."
    },
    {
      "q": "Vasya solved the equation x² = 5x by dividing both sides by x and getting x = 5. He lost one root. Which one?",
      "ans": "0",
      "hint": "Don't divide by x — move everything to one side and factor out x instead.",
      "sol": "x² − 5x = 0 ⇒ x(x − 5) = 0 ⇒ x = 0 or x = 5. The lost root is 0. Answer: 0."
    },
    {
      "q": "A 10 × 15 cm photograph was placed in a frame of equal width on all sides. The area of the photograph together with the frame is 336 cm². Find the width of the frame (in cm).",
      "ans": "3",
      "hint": "If the frame's width is x, then the dimensions of the photo with the frame are (10 + 2x) and (15 + 2x). Set up an equation for the area.",
      "sol": "(10 + 2x)(15 + 2x) = 336 ⇒ 4x² + 50x + 150 = 336 ⇒ 2x² + 25x − 93 = 0. D = 625 + 744 = 1369, √D = 37, x = (−25 + 37) : 4 = 3 (the other root is negative). Answer: 3."
    },
    {
      "q": "A cyclist rode 30 km. If his speed had been 5 km/h greater, the trip would have taken him 1 hour less. Find the cyclist's speed (in km/h).",
      "ans": "10",
      "hint": "Let the speed be v. The travel time is {30|v}, and at the higher speed it's {30|v+5}. The difference in times equals 1.",
      "sol": "{30|v} − {30|v+5} = 1 ⇒ 30(v + 5) − 30v = v(v + 5) ⇒ v² + 5v − 150 = 0. D = 25 + 600 = 625, √D = 25, v = (−5 + 25) : 2 = 10. Answer: 10."
    },
    {
      "q": "One of the roots of the equation x² − 9x + q = 0 is 4. Find q.",
      "ans": "20",
      "hint": "By Vieta's theorem the sum of the roots equals 9 — find the second root, then their product.",
      "sol": "The second root: 9 − 4 = 5. q = 4 · 5 = 20. Answer: 20."
    },
    {
      "q": "For what value of c does the equation x² − 6x + c = 0 have exactly one root?",
      "ans": "9",
      "hint": "There is exactly one root when the discriminant equals zero.",
      "sol": "D = 36 − 4c = 0 ⇒ c = 9. Check: x² − 6x + 9 = (x − 3)², one root. Answer: 9."
    },
    {
      "q": "The roots of the equation x² − 5x + 3 = 0 are denoted x₁ and x₂. Without solving the equation, find x₁² + x₂².",
      "ans": "19",
      "hint": "Use (x₁ + x₂)² = x₁² + 2x₁x₂ + x₂² and Vieta's theorem.",
      "sol": "D = 25 − 12 = 13 &gt; 0, so roots exist. x₁ + x₂ = 5, x₁x₂ = 3. x₁² + x₂² = 5² − 2·3 = 25 − 6 = 19. Answer: 19."
    },
    {
      "q": "In a school chess tournament, every participant played exactly one game against every other participant. A total of 28 games were played. How many participants were there?",
      "ans": "8",
      "hint": "If there are n participants, each plays n − 1 games, and each game is counted twice: n(n − 1) : 2.",
      "sol": "n(n − 1) : 2 = 28 ⇒ n² − n − 56 = 0. D = 1 + 224 = 225, √D = 15, n = (1 + 15) : 2 = 8. Answer: 8."
    },
    {
      "q": "A ball is thrown straight up from the ground. Its height (in meters) after t seconds is h = 20t − 5t². After how many seconds will the ball fall back to the ground?",
      "ans": "4",
      "hint": "At ground level the height is 0. Solve the incomplete quadratic equation 20t − 5t² = 0.",
      "sol": "5t(4 − t) = 0 ⇒ t = 0 (the moment of the throw) or t = 4. The ball will fall after 4 s. Answer: 4."
    }
  ],
  "bonus": {
    "q": "For what value of k does the equation x² − 6x + k = 0 have exactly one root?",
    "ans": "9",
    "hint": "The equation has exactly one root when its discriminant equals zero. Set up an equation for k.",
    "sol": "D=(−6)² − 4·1·k = 36 − 4k. There is one root when D=0: 36−4k=0, k=9."
  },
  "test": [
    {
      "q": "Find the discriminant of the equation x² + 2x − 8 = 0.",
      "ans": "36",
      "sol": "D = 2² − 4·1·(−8) = 4 + 32 = 36."
    },
    {
      "q": "Solve the equation x² + 2x − 8 = 0. Find the larger root.",
      "ans": "2",
      "sol": "√D=6, x=(−2±6)/2: x₁=2, x₂=−4. The larger root is 2."
    },
    {
      "q": "Solve the incomplete equation 5x² − 45 = 0. Find the positive root.",
      "ans": "3",
      "sol": "x²=9, x=±3. The positive root is 3."
    },
    {
      "q": "Solve the incomplete equation x² + 8x = 0. Find the smaller root.",
      "ans": "-8",
      "sol": "x(x+8)=0, so x=0 or x=−8. The smaller root is −8."
    },
    {
      "q": "How many real roots does the equation x² − 4x + 4 = 0 have?",
      "opts": [
        "0",
        "1",
        "2"
      ],
      "ans": 1,
      "sol": "D=16−16=0 — one root (a double root)."
    },
    {
      "q": "How many real roots does the equation x² + x + 1 = 0 have?",
      "opts": [
        "0",
        "1",
        "2"
      ],
      "ans": 0,
      "sol": "D=1−4=−3 &lt; 0 — there are no real roots."
    },
    {
      "q": "Using Vieta's theorem, find the sum of the roots of the equation x² − 9x + 20 = 0.",
      "ans": "9",
      "sol": "Sum of the roots = −p = 9."
    },
    {
      "q": "Using Vieta's theorem, find the product of the roots of the equation x² − 9x + 20 = 0.",
      "ans": "20",
      "sol": "Product of the roots = q = 20."
    }
  ],
  "lab": [
    {
      "t": "The rectangular garden bed",
      "b": "Measure (or make up) the perimeter and area of a rectangular plot, garden bed, or rug. Denote one side by x, express the other as the half-perimeter minus x, and set up the quadratic equation x·(half-perimeter − x) = area. Solve it and compare the root with the actual measured side."
    },
    {
      "t": "Guess the two numbers using Vieta's theorem",
      "b": "Play with a parent or friend: one person thinks of two integers and names only their sum and product, and the other has to find the numbers themselves by trial. Start with small numbers — a sum up to 15, a product up to 50."
    },
    {
      "t": "The path around the garden bed",
      "b": "Imagine a square garden bed of unknown side length, surrounded by a path of equal width everywhere (say, 1 meter). If you know the total area of the bed together with the path, you can set up the equation (side + 2 · path width)² = total area. Make up some numbers and solve the resulting equation."
    },
    {
      "t": "Checking via factoring",
      "b": "Pick two integers yourself as the future roots, expand (x − x₁)(x − x₂), and you get a ready-made quadratic equation. Solve it using the discriminant and confirm you get exactly the roots you originally picked."
    }
  ],
  "steps": [
    {
      "title": "What a quadratic equation is",
      "body": "<p>A quadratic equation is an equation of the form <b>ax² + bx + c = 0</b>, where a, b, c are numbers (coefficients), and a ≠ 0 — otherwise x² would disappear and the equation would stop being quadratic. The number a is called the leading coefficient, b the second coefficient, and c the constant term.</p><p>If b = 0 or c = 0 (or both at once), the equation is called <b>incomplete</b> — it can be solved faster, without the general formula. Let's look at both cases through examples.</p>",
      "exIdx": [
        0,
        1
      ]
    },
    {
      "title": "Incomplete equation: c = 0",
      "body": "<p>If c = 0, the equation has the form ax² + bx = 0. Factor out x: x(ax + b) = 0. A product equals zero when one of the factors equals zero: x = 0 or x = −b/a. There are two roots.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>In the equation ax² + bx = 0, the root x = 0 is often \"lost\" by dividing both sides by x. You cannot divide an equation by a variable — doing so loses one of the roots. The correct approach is to factor out x.</div>",
      "exIdx": 0
    },
    {
      "title": "Incomplete equation: b = 0",
      "body": "<p>If b = 0, the equation has the form ax² + c = 0. Isolate x²: x² = −c/a. If −c/a &gt; 0 — two roots x = ±√(−c/a); if −c/a = 0 — a single root x = 0; if −c/a &lt; 0 — there are no real roots, since a square cannot be negative.</p>",
      "exIdx": 1
    },
    {
      "title": "The discriminant and the root formula",
      "body": "<p>For a complete equation ax² + bx + c = 0, you compute the <b>discriminant</b>: D = b² − 4ac. It tells you how many real roots the equation has.</p><div class=\"figure\">__SVG_QUAD_DISCRIMINANT_ANIM__</div><p>If <b>D &gt; 0</b> — two roots: x = (−b ± √D) / (2a). See how this is calculated using the example x² − 5x + 6 = 0.</p>",
      "exIdx": 2
    },
    {
      "title": "One root: D = 0",
      "body": "<p>If <b>D = 0</b> — one root (people say \"two equal roots\"): x = −b / (2a).</p>",
      "exIdx": 3
    },
    {
      "title": "No roots: D < 0",
      "body": "<p>If <b>D &lt; 0</b> — there are no real roots: there would be a negative number under the root, and a square cannot be negative.</p>",
      "exIdx": 4
    },
    {
      "title": "Vieta's theorem",
      "body": "<p>An equation of the form x² + px + q = 0 (with leading coefficient 1) is called <b>reduced</b>. For such an equation, Vieta's theorem holds: the sum of the roots equals −p, and the product equals q: x₁ + x₂ = −p, x₁ · x₂ = q. This lets you find the roots mentally, by picking two numbers with the required sum and product, instead of computing the discriminant.</p><div class=\"figure\">__SVG_QUAD_VIETA__</div><div class=\"note\"><span class=\"hand\">Remember</span>Be careful with the signs: the sum of the roots equals <b>−p</b> (with the opposite sign!), while the product equals q (unchanged).</div>",
      "exIdx": 5
    }
  ]
};

/* ---------- ratf ---------- */
CONTENT_EN.ratf = {
  "goal": "After this topic, you'll be able to simplify rational expressions, find the domain of a rational expression (the allowed values of the variable), and perform all four operations with algebraic fractions.",
  "explain": "<p>A rational (algebraic) expression is a fraction of the form {P|Q}, where P and Q are polynomials (in particular, plain numbers or monomials), and the denominator Q cannot equal zero. For example, {x+3|x−2} is a rational expression: the numerator is x+3, the denominator is x−2.</p><h3>Domain of a rational expression (restrictions on the variable)</h3><p>Values of the variable that make the denominator equal to zero are called not allowed — the expression has no meaning there. To find the domain, set the denominator equal to zero and solve the resulting equation; every other value of the variable belongs to the domain.</p><div class=\"figure\">__SVG_RATF_ODZ__</div><div class=\"warn\"><span class=\"hand\">Common mistake</span>The domain is found from the denominator, not the numerator! Even if the numerator of a fraction becomes zero, the fraction still makes sense (it's simply equal to zero) — only the values where the denominator becomes zero are excluded.</div><h3>The fundamental property of a fraction</h3><p>Just like with ordinary fractions: if you multiply or divide both the numerator and the denominator by the same polynomial (not equal to zero), the value of the fraction doesn't change. This property is used to simplify fractions and to bring them to a common denominator.</p><h3>Simplifying fractions</h3><p>To simplify a rational expression, factor the numerator and the denominator (by factoring out a common factor or using the short multiplication formulas), then divide both by the common factor.</p><div class=\"figure\">__SVG_RATF_CANCEL_ANIM__</div><p>For example: {x²−9|x−3} = x+3 (for x ≠ 3) — see the animation above.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>You can only cancel a common <b>factor</b> of the whole numerator and the whole denominator, never a single term! For example, in the fraction {x+3|x} you can't \"cancel\" x — the numerator doesn't factor out an x, since x appears in only one of the two terms.</div><h3>Addition and subtraction</h3><p>Fractions with the same denominator are added and subtracted by working only with the numerators: {a|c} ± {b|c} = {a±b|c}. If the denominators are different, find a common denominator — just like with ordinary fractions: {1|x} + {1|x+1} = {x+1|x(x+1)} + {x|x(x+1)} = {2x+1|x(x+1)}.</p><h3>Multiplication and division</h3><p>Fractions are multiplied directly — numerator by numerator, denominator by denominator, canceling everything you can before multiplying: {a|b} · {c|d} = {ac|bd}. Division is multiplication by the \"flipped\" fraction: {a|b} : {c|d} = {a|b} · {d|c}.</p><div class=\"note\"><span class=\"hand\">Remember</span>Before adding or multiplying fractions, it's always worth trying to factor the numerators and denominators — often something then cancels and the calculation becomes much simpler.</div>",
  "examples": [
    {
      "t": "Find the domain of the fraction {2x|x−5}.",
      "s": "The denominator x−5 becomes zero at x=5, so the domain is x ≠ 5.<div class=\"figure\">__SVG_RATF8_EX0_ODZLINE__</div>"
    },
    {
      "t": "Simplify the fraction {4x²|8x} (x ≠ 0).",
      "s": "{4x²|8x} = {4x·x|4x·2} = {x|2}.<div class=\"figure\">__SVG_RATF8_EX1_CANCELCOMMON__</div>"
    },
    {
      "t": "Simplify the fraction {x²−4|x+2}.",
      "s": "Factor the numerator using the difference of squares formula: {(x−2)(x+2)|x+2} = x−2 (for x ≠ −2).<div class=\"figure\">__SVG_RATF8_EX2_DIFSQUARES__</div>"
    },
    {
      "t": "Find the value of the expression {1|x} + {1|x+3} at x = 2.",
      "s": "{1|2} + {1|5} = {5|10} + {2|10} = {7|10} = 0.7.<div class=\"figure\">__SVG_RATF8_EX3_ADDSUBVAL__</div>"
    },
    {
      "t": "Find the value of the expression {x|4} · {8|x} at x = 6 (x ≠ 0).",
      "s": "{x|4} · {8|x} = {8x|4x} = 2 — the result doesn't depend on x. Substituting x=6, we also get 2.<div class=\"figure\">__SVG_RATF8_EX4_MULINDEP__</div>"
    },
    {
      "t": "Simplify {x²−1|x−1} − 1 and find its value at x = 10.",
      "s": "{x²−1|x−1} = x+1 (for x ≠ 1). Then x+1−1 = x. At x=10 we get 10.<div class=\"figure\">__SVG_RATF8_EX5_SIMPSUB__</div>"
    }
  ],
  "tasks": [
    {
      "q": "For which value of x does the fraction {5|x−4} not make sense?",
      "ans": "4",
      "hint": "Set the denominator equal to zero.",
      "sol": "x−4=0, so x=4."
    },
    {
      "q": "For which value of x does the fraction {3|2x+6} not make sense?",
      "ans": "-3",
      "hint": "Set the denominator equal to zero and solve the equation.",
      "sol": "2x+6=0, x=−3."
    },
    {
      "q": "Simplify the fraction {6x|3x²} (x ≠ 0) and find the value of the result at x = 5.",
      "ans": "0.4",
      "hint": "Cancel the common factor 3x from the numerator and denominator.",
      "sol": "{6x|3x²} = {2|x}. At x=5: 2/5=0.4."
    },
    {
      "q": "Simplify the fraction {(x−2)(x+5)|x−2} (x ≠ 2) and find the value of the result at x = 10.",
      "ans": "15",
      "hint": "The factor (x−2) appears in both the numerator and the denominator.",
      "sol": "After canceling, x+5 remains. At x=10: 15."
    },
    {
      "q": "Simplify the fraction {x²−16|x−4} (x ≠ 4) and find the value of the result at x = 7.",
      "ans": "11",
      "hint": "Factor the numerator using the difference of squares formula.",
      "sol": "{(x−4)(x+4)|x−4} = x+4. At x=7: 11."
    },
    {
      "q": "Simplify the fraction {x²−25|x+5} and find the value of the result at x = 0.",
      "ans": "-5",
      "hint": "Factor the numerator using the difference of squares formula.",
      "sol": "{(x−5)(x+5)|x+5} = x−5. At x=0: −5."
    },
    {
      "q": "Find the value of the expression {2|x} + {3|x} at x = 5.",
      "ans": "1",
      "hint": "The denominators are the same — add the numerators.",
      "sol": "{2|x}+{3|x}={5|x}. At x=5: 1."
    },
    {
      "q": "Find the value of the expression {7|x} − {2|x} at x = 10.",
      "ans": "0.5",
      "hint": "The denominators are the same — subtract the numerators.",
      "sol": "{7|x}−{2|x}={5|x}. At x=10: 0.5."
    },
    {
      "q": "Find the value of the expression {1|x} + {1|x+1} at x = 1.",
      "ans": "1.5",
      "hint": "You can just substitute x=1 into each term and add.",
      "sol": "{1|1}+{1|2}=1+0.5=1.5."
    },
    {
      "q": "Find the value of the expression {3|x} − {1|x+2} at x = 2.",
      "ans": "1.25",
      "hint": "Substitute x=2 into each term.",
      "sol": "{3|2}−{1|4}=1.5−0.25=1.25."
    },
    {
      "q": "Find the value of the expression {x|3} · {6|x} at x = 4 (x ≠ 0).",
      "ans": "2",
      "hint": "Multiply the numerators and denominators, then cancel x.",
      "sol": "{x|3}·{6|x}={6x|3x}=2 — the result doesn't depend on x."
    },
    {
      "q": "Find the value of the expression {x+1|4} : {x+1|8} at x = 2 (x ≠ −1).",
      "ans": "2",
      "hint": "Dividing by a fraction is the same as multiplying by its flip.",
      "sol": "{x+1|4}·{8|x+1}={8|4}=2 — the result doesn't depend on x."
    },
    {
      "q": "Simplify the expression {x²−1|x+1} and find its value at x = 6.",
      "ans": "5",
      "hint": "Factor the numerator using the difference of squares formula.",
      "sol": "{(x−1)(x+1)|x+1}=x−1. At x=6: 5."
    },
    {
      "q": "Simplify the expression {2x²−8|x−2} and find its value at x = 5.",
      "ans": "14",
      "hint": "Factor out 2 in the numerator, then apply the difference of squares formula.",
      "sol": "2x²−8=2(x−2)(x+2). After canceling: 2(x+2). At x=5: 2·7=14."
    },
    {
      "q": "For which value of x is the fraction {x−3|x+3} equal to zero?",
      "ans": "3",
      "hint": "A fraction equals zero when its numerator is zero (and the denominator isn't).",
      "sol": "x−3=0, x=3 (and the denominator x+3=6≠0, so this checks out)."
    },
    {
      "q": "For which value of x is the fraction {2x−10|x+1} equal to zero?",
      "ans": "5",
      "hint": "Set the numerator equal to zero.",
      "sol": "2x−10=0, x=5 (and the denominator equals 6≠0)."
    },
    {
      "q": "Find the value of the expression {1|x−2} + {1|2−x} at x = 100.",
      "ans": "0",
      "hint": "Notice that 2−x = −(x−2), so the second term is the opposite of the first.",
      "sol": "{1|x−2} + {1|−(x−2)} = {1|x−2} − {1|x−2} = 0 — for any allowed value of x."
    },
    {
      "q": "Find the value of the expression {x|x−1} − {1|x−1} at x = 6.",
      "ans": "1",
      "hint": "The denominators are the same — subtract the numerators.",
      "sol": "{x−1|x−1}=1 — for any x≠1, including x=6."
    },
    {
      "q": "Simplify the expression {x²−4|x²−4x+4} and find its value at x = 6.",
      "ans": "2",
      "hint": "The denominator is (x−2)², and the numerator factors as a difference of squares.",
      "sol": "{(x−2)(x+2)|(x−2)²}={x+2|x−2}. At x=6: 8/4=2."
    },
    {
      "q": "Simplify the expression {3x+6|x²−4} and find its value at x = 5.",
      "ans": "1",
      "hint": "Factor out 3 in the numerator, and factor the denominator as a difference of squares.",
      "sol": "{3(x+2)|(x−2)(x+2)}={3|x−2}. At x=5: 3/3=1."
    },
    {
      "q": "Find the sum of all values of x for which the expression {x+1|x²−9} doesn't make sense.",
      "ans": "0",
      "hint": "Solve the equation x²−9=0 — it gives two values.",
      "sol": "x²−9=0 ⇒ x=3 or x=−3. Sum: 3+(−3)=0."
    },
    {
      "q": "Find the sum of all values of x for which the fraction {2|x²−5x+6} is undefined.",
      "ans": "5",
      "hint": "Solve the equation x²−5x+6=0.",
      "sol": "x²−5x+6=0 ⇒ (x−2)(x−3)=0 ⇒ x=2 or x=3. Sum: 5."
    },
    {
      "q": "Masha \"simplified\" a fraction like this: {x+6|x+2} = {6|2} = 3. This is a mistake. Find the correct value of the fraction {x+6|x+2} at x = 2.",
      "ans": "2",
      "hint": "You can only cancel a common factor, not a term. Just substitute x = 2.",
      "sol": "{2+6|2+2} = {8|4} = 2 (not 3). Answer: 2."
    },
    {
      "q": "Simplify the fraction {x²+6x+9|x²−9} and find its value at x = 5.",
      "ans": "4",
      "hint": "The numerator is a perfect square of a sum, the denominator is a difference of squares.",
      "sol": "{(x+3)²|(x−3)(x+3)} = {x+3|x−3}. At x = 5: {8|2} = 4. Answer: 4."
    },
    {
      "q": "Simplify the fraction {a²−ab|ab−b²} and find its value at a = 6, b = 4. Write the answer as a decimal.",
      "ans": "1.5",
      "hint": "Factor out the common factor in both the numerator and the denominator.",
      "sol": "{a(a−b)|b(a−b)} = {a|b}. At a = 6, b = 4: {6|4} = 1.5. Answer: 1.5."
    },
    {
      "q": "Simplify the expression {3|x−1} − {3|x+1} and find its value at x = 4. Write the answer as a fraction in lowest terms.",
      "ans": "2/5",
      "hint": "The common denominator is (x−1)(x+1) = x² − 1.",
      "sol": "{3(x+1) − 3(x−1)|x²−1} = {6|x²−1}. At x = 4: {6|15} = {2|5}. Answer: 2/5.",
      "reduced": true
    },
    {
      "q": "Simplify the expression {x²−4|3x} · {6x|x+2} and find its value at x = 7.",
      "ans": "10",
      "hint": "Factor x² − 4, and cancel everything you can before multiplying.",
      "sol": "{(x−2)(x+2)·6x|3x·(x+2)} = 2(x − 2). At x = 7: 2 · 5 = 10. Answer: 10."
    },
    {
      "q": "Simplify the expression {x²−1|x} : {x+1|x²} and find its value at x = 5.",
      "ans": "20",
      "hint": "Replace the division with multiplication by the flipped fraction, then factor x² − 1.",
      "sol": "{(x−1)(x+1)|x} · {x²|x+1} = x(x − 1). At x = 5: 5 · 4 = 20. Answer: 20."
    },
    {
      "q": "Check that {1|n} − {1|n+1} = {1|n(n+1)}. Use this to find the sum {1|1·2} + {1|2·3} + {1|3·4} + … + {1|9·10}.",
      "ans": "9/10",
      "hint": "Replace each term with the difference of two fractions — almost all of them will cancel out.",
      "sol": "{1|n} − {1|n+1} = {n+1−n|n(n+1)} = {1|n(n+1)}. The sum = (1 − {1|2}) + ({1|2} − {1|3}) + … + ({1|9} − {1|10}) = 1 − {1|10} = {9|10}. Answer: 9/10.",
      "reduced": true
    },
    {
      "q": "The first tap fills a tank in x hours, the second in (x + 2) hours. What fraction of the tank do they fill together in 1 hour? Write this as a single fraction, and find how many minutes it takes both taps together to fill the tank at x = 2.",
      "ans": "80",
      "hint": "In one hour the first tap fills {1|x} of the tank, the second {1|x+2}. The total time = 1 : (combined fraction per hour).",
      "sol": "{1|x} + {1|x+2} = {2x+2|x(x+2)}. At x = 2: {6|8} = {3|4} of the tank per hour. Time: 1 : {3|4} = {4|3} h = 80 min. Answer: 80."
    },
    {
      "q": "Which of these values of x is allowed for the fraction {x−5|x(x+3)}?",
      "opts": [
        "x = 0",
        "x = −3",
        "x = 5"
      ],
      "ans": 2,
      "hint": "Only the values of x that make the DENOMINATOR equal zero are excluded.",
      "sol": "The denominator x(x + 3) equals zero at x = 0 and x = −3 — these values are excluded. At x = 5 the denominator equals 40, so the fraction makes sense (it equals 0)."
    },
    {
      "q": "Simplify the expression {x²|x−5} + {25|5−x} and find its value at x = 15.",
      "ans": "20",
      "hint": "Replace 5 − x with −(x − 5) so the denominators match.",
      "sol": "{x²|x−5} − {25|x−5} = {x²−25|x−5} = {(x−5)(x+5)|x−5} = x + 5. At x = 15: 20. Answer: 20."
    }
  ],
  "bonus": {
    "q": "Simplify the expression {1|x(x+1)} + {1|(x+1)(x+2)} + {1|(x+2)(x+3)}, using the identity {1|n(n+1)} = {1|n} − {1|n+1}. Find the value of the result at x = 1.",
    "ans": "0.75",
    "hint": "Expand each term using the given identity — the neighboring parts cancel out, leaving only the first and last.",
    "sol": "By the formula, the sum equals {1|x} − {1|x+3}. At x=1: {1|1} − {1|4} = 1 − 0.25 = 0.75. Direct check: {1|1·2}+{1|2·3}+{1|3·4}=0.5+0.1667+0.0833=0.75."
  },
  "test": [
    {
      "q": "For which value of x does the fraction {8|x+5} not make sense?",
      "ans": "-5",
      "sol": "x+5=0, x=−5."
    },
    {
      "q": "Simplify the fraction {4x²|2x} (x ≠ 0) and find its value at x = 3.",
      "ans": "6",
      "sol": "{4x²|2x}=2x. At x=3: 6."
    },
    {
      "q": "Simplify {x²−36|x−6} and find its value at x = 10.",
      "ans": "16",
      "sol": "{(x−6)(x+6)|x−6}=x+6. At x=10: 16."
    },
    {
      "q": "Find the value of the expression {1|x} + {2|x} at x = 3.",
      "ans": "1",
      "sol": "{3|x}. At x=3: 1."
    },
    {
      "q": "Which of these expressions equals {(x−1)(x+4)|x−1}?",
      "opts": [
        "x+4",
        "x−4",
        "x²+4",
        "(x+4)/(x−1)"
      ],
      "ans": 0,
      "sol": "The factor (x−1) cancels, leaving x+4."
    },
    {
      "q": "Under what condition does the fraction {5|x−7} make sense?",
      "opts": [
        "x≠7",
        "x≠−7",
        "x≠5",
        "for any x"
      ],
      "ans": 0,
      "sol": "The denominator x−7 must not equal zero, so x≠7."
    },
    {
      "q": "Simplify {x²−9|x²−6x+9} and find its value at x = 8.",
      "ans": "2.2",
      "sol": "The denominator is (x−3)². {(x−3)(x+3)|(x−3)²}={x+3|x−3}. At x=8: 11/5=2.2."
    },
    {
      "q": "Find the sum of all values of x for which the fraction {1|x²−4} is undefined.",
      "ans": "0",
      "sol": "x²−4=0 ⇒ x=2 or x=−2. Sum: 0."
    }
  ],
  "lab": [
    {
      "t": "Travel time with a stop",
      "b": "Suppose you drove the first 60 km of a trip at a speed of x km/h, and the second part, 90 km, at a speed of (x+10) km/h. Write an expression for the total travel time: {60|x} + {90|x+10}. Plug in your own value of x (for example, 30) and calculate how many hours such a trip would take."
    },
    {
      "t": "Two pumps working together",
      "b": "The first pump fills a pool in x hours, so in one hour it fills {1|x} of the pool. The second pump takes (x+2) hours, meaning it fills {1|x+2} of the pool per hour. Write the expression {1|x} + {1|x+2} for their combined work in one hour, substitute x=4, and calculate the result."
    },
    {
      "t": "Average price of a purchase",
      "b": "Candy was bought for a rubles at a price of x rubles per kilogram — giving {a|x} kilograms. Think up two different kinds of candy bought for the same amount a at different prices x and (x+50), add the quantities {a|x}+{a|x+50}, and plug in your own numbers to find the total weight."
    },
    {
      "t": "Simplifying like a recipe",
      "b": "A recipe calls for {x²|x} cups of flour for x servings — try simplifying this expression first (you'll get simply x cups), then come up with a couple more similar \"recipes\" with a fractional expression that cancels down by a common factor, and check it with a specific number of servings."
    }
  ],
  "steps": [
    {
      "title": "What is a rational expression",
      "body": "<p>A rational (algebraic) expression is a fraction of the form {P|Q}, where P and Q are polynomials, and the denominator Q cannot equal zero. For example, {x+3|x−2} is a rational expression: the numerator is x+3, the denominator is x−2. The fraction {2x|x−5} from the first example is built the same way.</p>",
      "exIdx": 0
    },
    {
      "title": "Domain of a rational expression (restrictions on the variable)",
      "body": "<h3>Domain of a rational expression (restrictions on the variable)</h3><p>Values of the variable that make the denominator equal to zero are called not allowed — the expression has no meaning there. To find the domain, set the denominator equal to zero and solve the resulting equation; every other value of the variable belongs to the domain.</p><div class=\"figure\">__SVG_RATF_ODZ__</div><div class=\"warn\"><span class=\"hand\">Common mistake</span>The domain is found from the denominator, not the numerator! Even if the numerator of a fraction becomes zero, the fraction still makes sense (it's simply equal to zero).</div>",
      "exIdx": 0
    },
    {
      "title": "The fundamental property of a fraction, and simplifying",
      "body": "<h3>The fundamental property of a fraction. Simplifying fractions</h3><p>If you multiply or divide both the numerator and the denominator by the same polynomial (not equal to zero), the value of the fraction doesn't change. To simplify a rational expression, factor the numerator and the denominator (by factoring out a common factor or using the short multiplication formulas), then divide both by the common factor.</p><div class=\"figure\">__SVG_RATF_CANCEL_ANIM__</div><div class=\"warn\"><span class=\"hand\">Common mistake</span>You can only cancel a common <b>factor</b> of the whole numerator and the whole denominator, never a single term!</div>",
      "exIdx": 1
    },
    {
      "title": "Simplifying with the difference of squares formula",
      "body": "<p>Sometimes the common factor isn't visible right away — it's found using the short multiplication formulas. For example: {x²−9|x−3} = x+3 (for x ≠ 3). The fraction {x²−4|x+2} is factored the same way — the numerator x²−4 equals (x−2)(x+2) by the difference of squares formula, and the factor (x+2) cancels with the denominator.</p>",
      "exIdx": 2
    },
    {
      "title": "Adding and subtracting fractions",
      "body": "<h3>Addition and subtraction</h3><p>Fractions with the same denominator are added and subtracted by working only with the numerators: {a|c} ± {b|c} = {a±b|c}. If the denominators are different, find a common denominator — just like with ordinary fractions: {1|x} + {1|x+1} = {x+1|x(x+1)} + {x|x(x+1)} = {2x+1|x(x+1)}. The fractions {1|x} and {1|x+3} are brought to a common denominator the same way when substituting a numerical value of x.</p>",
      "exIdx": 3
    },
    {
      "title": "Multiplying and dividing fractions",
      "body": "<h3>Multiplication and division</h3><p>Fractions are multiplied directly — numerator by numerator, denominator by denominator, canceling everything you can before multiplying: {a|b} · {c|d} = {ac|bd}. Division is multiplication by the \"flipped\" fraction: {a|b} : {c|d} = {a|b} · {d|c}. In the product {x|4} · {8|x}, the variable x cancels, and the result doesn't depend on x at all.</p>",
      "exIdx": 4
    },
    {
      "title": "Putting it all together",
      "body": "<p>In more complex problems, simplifying and other operations are combined. First we factor and simplify the fraction, then carry out the remaining operation (for example, subtracting a number), and if needed, substitute a numerical value of the variable — always keeping the domain in mind.</p><div class=\"note\"><span class=\"hand\">Remember</span>Before adding or multiplying fractions, it's always worth trying to factor the numerators and denominators — often something then cancels and the calculation becomes much simpler.</div>",
      "exIdx": 5
    }
  ]
};

/* ---------- ineq ---------- */
CONTENT_EN.ineq = {
  "goal": "After this topic, you'll confidently solve linear inequalities and systems of inequalities, correctly show solutions on a number line, and find integer solutions.",
  "explain": "<p>An inequality is similar to an equation, but instead of the \"=\" sign it has one of these signs: <b>&gt;</b> (greater than), <b>&lt;</b> (less than), <b>≥</b> (greater than or equal to), <b>≤</b> (less than or equal to). See how it works:</p><div class=\"figure\">__SVG_INEQ_FLIP_ANIM__</div><h3>How to solve a linear inequality</h3><p>An inequality is solved almost like an equation: terms are moved from one side to the other with the opposite sign, and like terms are combined. But there's one key difference:</p><div class=\"warn\"><span class=\"hand\">The main rule</span>If you multiply or divide both sides of an inequality by a NEGATIVE number, the inequality sign flips to the OPPOSITE one! For example, from −2x &gt; 8, dividing by −2 gives x &lt; −4 (the \"&gt;\" sign became \"&lt;\").</p><h3>Showing the solution on a number line</h3><ul><li><b>A filled (closed) circle</b> — the point IS included in the solution (signs ≥ or ≤).</li><li><b>An open circle</b> — the point is NOT included in the solution (signs &gt; or &lt;).</li></ul><p>From the marked point, a ray is drawn toward the side where the matching numbers lie: to the right if x is greater than the boundary, to the left if it's less.</p><h3>Systems of inequalities</h3><div class=\"figure\">__SVG_INEQ_SYSTEM__</div><p>A system of inequalities is several inequalities that must all hold AT THE SAME TIME (logical \"AND\"). Each inequality is solved separately, and then the <b>intersection</b> (common part) of the resulting intervals is found — that's the solution of the whole system.</p><div class=\"note\"><span class=\"hand\">Remember</span>If the intervals don't overlap at all, the system has no solutions. If one interval lies entirely inside another, the solution of the system is the smaller one.</div><h3>Integer solutions</h3><p>Problems often ask not for the whole infinite set of solutions, but only the integers that belong to it — then, after solving the inequality, it's enough to list (or count) the matching integers in the interval you found.</p><h3>Why this matters</h3><p>Inequalities show up anywhere there are limits: as many as you like, but no more; at least this much, but no less. For example: how much you need to pay to get a discount, the minimum number of parts that need to be produced, how fast you need to go to make it in time.</p>",
  "examples": [
    {
      "t": "Solve the inequality 3x + 5 &gt; 20 and find the boundary of the solution interval.",
      "s": "3x &gt; 15 → x &gt; 5. The boundary of the interval is the number 5.<div class=\"figure\">__SVG_INEQ8_EX0_GT5__</div>"
    },
    {
      "t": "Solve the inequality −5x &gt; 20.",
      "s": "Divide both sides by −5; the sign flips to the opposite one: x &lt; −4.<div class=\"figure\">__SVG_INEQ8_EX1_LTNEG4__</div>"
    },
    {
      "t": "Find the smallest integer solution of the inequality x + 5 &gt; 9.",
      "s": "x &gt; 4, so the smallest integer that works is x = 5.<div class=\"figure\">__SVG_INEQ8_EX2_MINGT4__</div>"
    },
    {
      "t": "How many integer solutions does the inequality −4 &lt; x ≤ 6 have?",
      "s": "The matching integers are −3, −2, −1, 0, 1, 2, 3, 4, 5, 6 — 10 numbers in total.<div class=\"figure\">__SVG_INEQ8_EX3_SEGMENT10INT__</div>"
    },
    {
      "t": "Solve the system of inequalities: x + 3 &gt; 5 and x − 2 &lt; 4.",
      "s": "First: x &gt; 2. Second: x &lt; 6. Intersection: 2 &lt; x &lt; 6.<div class=\"figure\">__SVG_INEQ8_EX4_SYSTEMINTERSECT__</div>"
    },
    {
      "t": "Solve the inequality 2(x − 3) &lt; 10.",
      "s": "Expand the brackets: 2x − 6 &lt; 10 → 2x &lt; 16 → x &lt; 8.<div class=\"figure\">__SVG_INEQ8_EX5_BRACKETLT8__</div>"
    }
  ],
  "tasks": [
    {
      "q": "Solve the inequality 3x + 5 &gt; 20. Find the boundary of the solution interval (the number at which equality holds).",
      "ans": "5",
      "hint": "Solve it as an equation: 3x + 5 = 20.",
      "sol": "3x = 15 → x = 5, so x &gt; 5."
    },
    {
      "q": "Solve the inequality 4x − 7 ≤ 9. Find the boundary of the solution interval.",
      "ans": "4",
      "hint": "Solve it as an equation 4x − 7 = 9.",
      "sol": "4x = 16 → x = 4, so x ≤ 4."
    },
    {
      "q": "Solve the inequality 2(x − 3) &lt; 10. Find the boundary of the solution interval.",
      "ans": "8",
      "hint": "First expand the brackets.",
      "sol": "2x − 6 &lt; 10 → 2x &lt; 16 → x &lt; 8."
    },
    {
      "q": "Solve the inequality −5x &gt; 20. Find the boundary of the solution interval (don't forget about the sign!).",
      "ans": "-4",
      "hint": "When dividing by a negative number, the sign flips to the opposite one.",
      "sol": "Divide by −5 (the sign flips): x &lt; −4."
    },
    {
      "q": "Solve the inequality −2x + 3 ≤ 11. Find the boundary of the solution interval.",
      "ans": "-4",
      "hint": "Move the 3 over, then divide by −2 — the sign will flip.",
      "sol": "−2x ≤ 8 → x ≥ −4."
    },
    {
      "q": "Solve the inequality 7x − 2 &lt; 5x + 8. Find the boundary of the solution interval.",
      "ans": "5",
      "hint": "Move the terms with x to one side and the numbers to the other.",
      "sol": "2x &lt; 10 → x &lt; 5."
    },
    {
      "q": "Solve the inequality 6 − 3x ≥ x − 10. Find the boundary of the solution interval.",
      "ans": "4",
      "hint": "Move all the x terms to one side and the numbers to the other.",
      "sol": "16 ≥ 4x → x ≤ 4."
    },
    {
      "q": "Find the smallest integer solution of the inequality x + 5 &gt; 9.",
      "ans": "5",
      "hint": "First solve the inequality, then find the smallest integer greater than the boundary.",
      "sol": "x &gt; 4, the smallest integer solution is x = 5."
    },
    {
      "q": "Find the largest integer solution of the inequality 2x &lt; 15.",
      "ans": "7",
      "hint": "Solve the inequality, then round down to the nearest integer.",
      "sol": "x &lt; 7.5, the largest integer solution is x = 7."
    },
    {
      "q": "Find the smallest integer solution of the inequality 3x ≥ 19.",
      "ans": "7",
      "hint": "Solve the inequality, then round up to the nearest integer.",
      "sol": "x ≥ 19/3 ≈ 6.33, the smallest integer solution is x = 7."
    },
    {
      "q": "How many integer solutions does the inequality −4 &lt; x ≤ 6 have?",
      "ans": "10",
      "hint": "List the integers from −3 to 6 inclusive.",
      "sol": "−3, −2, −1, 0, 1, 2, 3, 4, 5, 6 — 10 numbers in total."
    },
    {
      "q": "How many integer solutions does the system x &gt; 1 and x &lt; 8 have?",
      "ans": "6",
      "hint": "List the integers from 2 to 7.",
      "sol": "2, 3, 4, 5, 6, 7 — 6 numbers in total."
    },
    {
      "q": "Solve the system: x + 3 &gt; 5 and x − 2 &lt; 4. Find the smallest integer solution.",
      "ans": "3",
      "hint": "First solve each inequality separately, then find the intersection.",
      "sol": "x &gt; 2 and x &lt; 6 → 2 &lt; x &lt; 6, the smallest integer solution is x = 3."
    },
    {
      "q": "Solve the system: 2x ≥ 6 and x &lt; 9. Find the largest integer solution.",
      "ans": "8",
      "hint": "Solve both inequalities and find the intersection.",
      "sol": "x ≥ 3 and x &lt; 9 → the largest integer solution is x = 8."
    },
    {
      "q": "Solve the system: x − 1 &gt; 2 and 3x ≤ 24. How many integer solutions does the system have?",
      "ans": "5",
      "hint": "Solve both inequalities separately, intersect the intervals, and count the integers.",
      "sol": "x &gt; 3 and x ≤ 8 → integers 4, 5, 6, 7, 8 — 5 solutions."
    },
    {
      "q": "When both sides of an inequality are multiplied by a negative number, the inequality sign…",
      "opts": [
        "flips to the opposite one",
        "stays the same",
        "becomes an equals sign",
        "the inequality loses its meaning"
      ],
      "ans": 0,
      "hint": "This is the key rule for working with inequalities.",
      "sol": "When multiplying or dividing both sides of an inequality by a negative number, the sign must be flipped to the opposite one."
    },
    {
      "q": "What does a filled (closed) circle on a number line mean when showing the solution of an inequality?",
      "opts": [
        "The point is included in the solution (sign ≥ or ≤)",
        "The point is not included in the solution (sign &gt; or &lt;)",
        "The point is the origin",
        "It's just a scale mark"
      ],
      "ans": 0,
      "hint": "Compare it with the open circle — which point is \"included\" in the solution.",
      "sol": "A filled circle means that the point itself is included in the solution — the inequality is non-strict (≥ or ≤)."
    },
    {
      "q": "Solve the inequality {x|3} − 2 &gt; 1. Find the boundary of the solution interval.",
      "ans": "9",
      "hint": "First add 2 to both sides, then multiply both sides by 3.",
      "sol": "{x|3} &gt; 3 → x &gt; 9."
    },
    {
      "q": "Solve the inequality 5 − {x|2} ≤ 3. Find the boundary of the solution interval.",
      "ans": "4",
      "hint": "Move the terms over, then multiply both sides by −1 — don't forget to flip the sign.",
      "sol": "−{x|2} ≤ −2 → {x|2} ≥ 2 (multiplied by −1, so the sign flipped) → x ≥ 4."
    },
    {
      "q": "How many integer solutions does the system −6 ≤ x &lt; 2 have?",
      "ans": "8",
      "hint": "List the integers from −6 to 1 inclusive.",
      "sol": "−6, −5, −4, −3, −2, −1, 0, 1 — 8 numbers in total."
    },
    {
      "q": "Solve the system: {x|2} &gt; 3 and x − 4 ≤ 10. Find the smallest integer solution.",
      "ans": "7",
      "hint": "Solve both inequalities and find the intersection.",
      "sol": "x &gt; 6 and x ≤ 14 → the smallest integer solution is x = 7."
    },
    {
      "q": "The perimeter of a rectangle doesn't exceed 40 cm, and one side equals 7 cm. Find the largest integer value of the other side (in cm).",
      "ans": "13",
      "hint": "Write the inequality: 2(7 + b) ≤ 40.",
      "sol": "14 + 2b ≤ 40 → 2b ≤ 26 → b ≤ 13, the largest integer value of b is 13."
    },
    {
      "q": "The solutions of a system of inequalities are the set of x that…",
      "opts": [
        "satisfy BOTH inequalities at the same time",
        "satisfy at least one inequality",
        "satisfy neither inequality",
        "are always integers"
      ],
      "ans": 0,
      "hint": "A system means logical \"AND\", not \"OR\".",
      "sol": "The solution of a system is the intersection of the solutions — that is, the numbers that fit both inequalities at once."
    },
    {
      "q": "Solve the inequality 9 − 4x &lt; 1. Find the smallest integer solution.",
      "ans": "3",
      "hint": "Move the terms and divide — don't forget about the sign when dividing by a negative number.",
      "sol": "−4x &lt; −8 → x &gt; 2 (the sign flipped), the smallest integer solution is x = 3."
    },
    {
      "q": "Dima has 500 ₽. He bought a notebook for 68 ₽ and wants to spend the rest on pens that cost 35 ₽ each. What's the largest number of pens he can buy?",
      "ans": "12",
      "hint": "Write the inequality 68 + 35n ≤ 500 and find the largest integer n.",
      "sol": "35n ≤ 432 ⇒ n ≤ 12{12|35}. The largest integer n = 12 (12 pens cost 420 ₽). Answer: 12."
    },
    {
      "q": "Plan A: 300 ₽ a month plus 2 ₽ per minute of calls. Plan B: 5 ₽ per minute with no monthly fee. What's the smallest whole number of minutes per month at which Plan A is cheaper than Plan B?",
      "ans": "101",
      "hint": "Write the inequality 300 + 2m &lt; 5m.",
      "sol": "300 + 2m &lt; 5m ⇒ 300 &lt; 3m ⇒ m &gt; 100. The smallest integer m = 101. Answer: 101."
    },
    {
      "q": "Kolya solved the inequality −3x ≥ 12 and got x ≥ −4. He made a mistake. Find the largest integer solution of this inequality.",
      "ans": "-4",
      "hint": "What happens to the inequality sign when dividing by a negative number?",
      "sol": "Divide by −3 and flip the sign: x ≤ −4. The largest integer solution is −4. Answer: −4."
    },
    {
      "q": "How many integer solutions does the double inequality −3 ≤ 2x + 1 &lt; 9 have?",
      "ans": "6",
      "hint": "Subtract 1 from all three parts, then divide all parts by 2.",
      "sol": "−4 ≤ 2x &lt; 8 ⇒ −2 ≤ x &lt; 4. Integers: −2, −1, 0, 1, 2, 3 — 6 in total. Answer: 6."
    },
    {
      "q": "Find the sum of all integer solutions of the system: 3x − 2 &gt; x − 8 and 5 − x ≥ 2.",
      "ans": "3",
      "hint": "Solve each inequality, find the intersection, list the integers, and add them up.",
      "sol": "2x &gt; −6 ⇒ x &gt; −3; −x ≥ −3 ⇒ x ≤ 3. Integers: −2, −1, 0, 1, 2, 3. Sum: 3. Answer: 3."
    },
    {
      "q": "Find the smallest integer solution of the inequality {x−1|2} − {x|3} ≥ 1.",
      "ans": "9",
      "hint": "Multiply both sides by 6 to clear the fractions.",
      "sol": "3(x − 1) − 2x ≥ 6 ⇒ 3x − 3 − 2x ≥ 6 ⇒ x ≥ 9. The smallest integer solution is 9. Answer: 9."
    },
    {
      "q": "Two sides of a triangle equal 5 cm and 9 cm. The length of the third side is a whole number of centimeters. How many possible values are there for the third side?",
      "ans": "9",
      "hint": "Each side of a triangle is less than the sum of the other two — this gives a system of inequalities for the third side c.",
      "sol": "c &lt; 5 + 9 = 14 and 9 &lt; 5 + c ⇒ c &gt; 4. So 4 &lt; c &lt; 14: c = 5, 6, …, 13 — 9 options in total. Answer: 9."
    },
    {
      "q": "Which of these numbers is a solution of the system x − 2 &gt; 0 and 7 − x ≥ 3?",
      "opts": [
        "2",
        "4",
        "5",
        "0"
      ],
      "ans": 1,
      "hint": "Solve both inequalities and find their common part.",
      "sol": "x &gt; 2 and x ≤ 4, that is 2 &lt; x ≤ 4. Of the given numbers, only 4 fits."
    }
  ],
  "bonus": {
    "q": "Find all integer solutions of the system 2x − 1 ≥ 7 and 3x + 2 &lt; 29, and state how many there are.",
    "ans": "5",
    "hint": "Solve both inequalities, intersect the intervals, and count the integers.",
    "sol": "2x ≥ 8 → x ≥ 4; 3x &lt; 27 → x &lt; 9. Intersection: 4 ≤ x &lt; 9 → integers 4, 5, 6, 7, 8 — 5 solutions."
  },
  "test": [
    {
      "q": "Solve the inequality 5x − 3 &gt; 12. Find the boundary of the solution interval.",
      "ans": "3",
      "sol": "5x &gt; 15 → x &gt; 3."
    },
    {
      "q": "Solve the inequality −3x ≤ 18. Find the boundary of the solution interval.",
      "ans": "-6",
      "sol": "Divide by −3 (the sign flips): x ≥ −6."
    },
    {
      "q": "Find the smallest integer solution of the inequality 4x &gt; 15.",
      "ans": "4",
      "sol": "x &gt; 3.75, the smallest integer solution is x = 4."
    },
    {
      "q": "How many integer solutions does the inequality −2 ≤ x &lt; 5 have?",
      "ans": "7",
      "sol": "−2, −1, 0, 1, 2, 3, 4 — 7 numbers in total."
    },
    {
      "q": "Solve the system: x &gt; 0 and x &lt; 6. Find the largest integer solution.",
      "ans": "5",
      "sol": "Integers 1, 2, 3, 4, 5 — the largest is 5."
    },
    {
      "q": "When both sides of an inequality are divided by a negative number, the inequality sign…",
      "opts": [
        "flips to the opposite one",
        "stays the same",
        "becomes an equality",
        "the inequality loses its meaning"
      ],
      "ans": 0,
      "sol": "The sign flips to the opposite one."
    },
    {
      "q": "How many integer solutions does the system x ≥ −3 and x ≤ 2 have?",
      "ans": "6",
      "sol": "−3, −2, −1, 0, 1, 2 — 6 numbers in total."
    },
    {
      "q": "What does the intersection of the solutions of two inequalities in a system represent?",
      "opts": [
        "Numbers that fit both inequalities at once",
        "Numbers that fit at least one inequality",
        "All integers",
        "Always the empty set"
      ],
      "ans": 0,
      "sol": "The solution of a system is the intersection (common part) of the solutions of both inequalities."
    }
  ],
  "lab": [
    {
      "t": "An inequality and the number line",
      "b": "Come up with your own linear inequality (for example, 2x + 1 &gt; 7), solve it, and mark the solution on a number line: with an open or filled circle (depending on whether the sign is strict or not) and an arrow pointing the right way."
    },
    {
      "t": "Checking a solution by substitution",
      "b": "Solve any linear inequality, then substitute a few numbers into the original inequality: one from the solution you found, one not from it. Make sure the inequality holds only for the numbers from the solution."
    },
    {
      "t": "An inequality as a balance scale",
      "b": "Picture an inequality as a balance scale: if you add the same weight to both pans, the relationship (which side is heavier) doesn't change. But if you \"flip\" the scale (multiply by −1), whatever was heavier becomes lighter — that's why multiplying by a negative number flips the inequality sign."
    },
    {
      "t": "Intersecting intervals on paper",
      "b": "Draw two intervals on two number lines, one below the other (for example, x &gt; 1 and x &lt; 7 on tracing paper or transparent paper), lay them on top of each other, and find the common part — that's the solution of the system."
    }
  ],
  "steps": [
    {
      "title": "What is an inequality",
      "body": "<p>An inequality is similar to an equation, but instead of the \"=\" sign it has one of these signs: <b>&gt;</b> (greater than), <b>&lt;</b> (less than), <b>≥</b> (greater than or equal to), <b>≤</b> (less than or equal to). See how it works:</p><div class=\"figure\">__SVG_INEQ_FLIP_ANIM__</div>"
    },
    {
      "title": "How to solve a linear inequality",
      "body": "<h3>How to solve a linear inequality</h3><p>An inequality is solved almost like an equation: terms are moved from one side to the other with the opposite sign, and like terms are combined.</p><p>Let's solve 3x + 5 &gt; 20: move the 5 to the left with the opposite sign — 3x &gt; 15, divide both sides by 3 (a positive number, so the sign doesn't change) — x &gt; 5. The boundary of the solution interval is the number 5.</p>",
      "exIdx": 0
    },
    {
      "title": "The main rule: dividing by a negative number",
      "body": "<div class=\"warn\"><span class=\"hand\">The main rule</span>If you multiply or divide both sides of an inequality by a NEGATIVE number, the inequality sign flips to the OPPOSITE one! For example, from −2x &gt; 8, dividing by −2 gives x &lt; −4 (the \"&gt;\" sign became \"&lt;\").</div><p>−5x &gt; 20 is solved the same way: divide both sides by −5, the sign flips to the opposite one, giving x &lt; −4.</p>",
      "exIdx": 1
    },
    {
      "title": "Showing the solution on a number line",
      "body": "<h3>Showing the solution on a number line</h3><ul><li><b>A filled (closed) circle</b> — the point IS included in the solution (signs ≥ or ≤).</li><li><b>An open circle</b> — the point is NOT included in the solution (signs &gt; or &lt;).</li></ul><p>From the marked point, a ray is drawn toward the side where the matching numbers lie: to the right if x is greater than the boundary, to the left if it's less.</p>",
      "exIdx": [
        0,
        1
      ]
    },
    {
      "title": "The smallest integer solution",
      "body": "<p>Let's find the smallest integer solution of the inequality x + 5 &gt; 9. Solving: x &gt; 4. The boundary 4 is not included in the solution (the circle is open), so the smallest integer that works is x = 5.</p>",
      "exIdx": 2
    },
    {
      "title": "How many integer solutions in total",
      "body": "<p>Sometimes the boundaries are given on both sides, as in −4 &lt; x ≤ 6. Here the point −4 is marked with an open circle (not included), and the point 6 with a filled one (included). The matching integers are −3, −2, −1, 0, 1, 2, 3, 4, 5, 6 — 10 numbers in total.</p>",
      "exIdx": 3
    },
    {
      "title": "Systems of inequalities",
      "body": "<h3>Systems of inequalities</h3><div class=\"figure\">__SVG_INEQ_SYSTEM__</div><p>A system of inequalities is several inequalities that must all hold AT THE SAME TIME (logical \"AND\"). Each inequality is solved separately, and then the <b>intersection</b> (common part) of the resulting intervals is found — that's the solution of the whole system.</p><p>Let's solve the system x + 3 &gt; 5 and x − 2 &lt; 4. First: x &gt; 2. Second: x &lt; 6. Intersection: 2 &lt; x &lt; 6.</p><div class=\"note\"><span class=\"hand\">Remember</span>If the intervals don't overlap at all, the system has no solutions. If one interval lies entirely inside another, the solution of the system is the smaller one.</div>",
      "exIdx": 4
    },
    {
      "title": "Inequalities with brackets",
      "body": "<p>If an inequality contains brackets, expand them first, then solve as usual. Let's solve 2(x − 3) &lt; 10: expand the brackets — 2x − 6 &lt; 10 → 2x &lt; 16 → x &lt; 8.</p>",
      "exIdx": 5
    },
    {
      "title": "Why this matters",
      "body": "<h3>Why this matters</h3><p>Inequalities show up anywhere there are limits: as many as you like, but no more; at least this much, but no less. For example: how much you need to pay to get a discount, the minimum number of parts that need to be produced, how fast you need to go to make it in time.</p>",
      "exIdx": [
        2,
        3
      ]
    }
  ]
};

/* ---------- pyth ---------- */
CONTENT_EN.pyth = {
  "goal": "After this topic, you'll be able to apply the Pythagorean theorem and its converse to find the sides of a right triangle in any problem.",
  "explain": "<p>In a right triangle, the side opposite the right angle is called the <b>hypotenuse</b> — it is always the longest side. The two other sides, which form the right angle, are called the <b>legs</b>.</p><h3>The Pythagorean theorem</h3><p>The square of the hypotenuse equals the sum of the squares of the legs: <b>c² = a² + b²</b>. Look at the 3-4-5 example:</p><div class=\"figure\">__SVG_PYTH_SQUARES_ANIM__</div><p>From this you can easily find any side: the hypotenuse is found by the formula c = √(a²+b²), and a leg by the formula a = √(c²−b²) (subtract the square of the known leg from the square of the hypotenuse, then take the square root).</p><h3>The converse of the Pythagorean theorem</h3><p>The converse is also true: if for a triangle's sides a, b, c the equality a²+b²=c² holds (where c is the largest side), then the triangle must be a right triangle, with the right angle opposite side c. Ancient Egyptian surveyors used exactly this: a rope with knots marking 12 equal parts, stretched into a 3-4-5 triangle, always gave a perfectly right angle.</p><h3>Pythagorean triples</h3><p>Some triples of natural numbers satisfy the Pythagorean theorem exactly, with no square roots — it's handy to remember them: <b>3-4-5</b>, <b>6-8-10</b>, <b>5-12-13</b>, <b>8-15-17</b>, <b>7-24-25</b>, as well as any multiple of them by the same number (for example, 9-12-15 is the 3-4-5 triple multiplied by 3).</p><div class=\"figure\">__SVG_PYTH_LADDER__</div><h3>Special cases</h3><ul><li>The <b>diagonal of a square</b> with side a equals a√2 (both legs equal a: d=√(a²+a²)=√(2a²)=a√2).</li><li>The <b>diagonal of a rectangle</b> with sides a and b equals √(a²+b²).</li></ul><div class=\"warn\"><span class=\"hand\">Common mistake</span>The Pythagorean theorem only works for a <b>right</b> triangle, and the hypotenuse is always the side opposite the right angle (the longest side). Mixing up a leg with the hypotenuse in the formula will give a wrong answer.</div>",
  "examples": [
    {
      "t": "The legs of a right triangle are 6 and 8. Find the hypotenuse.",
      "s": "c=√(6²+8²)=√(36+64)=√100=10 (the 6-8-10 triple).<div class=\"figure\">__SVG_PYTH8_EX0_LEGS68__</div>"
    },
    {
      "t": "The hypotenuse is 13, and one leg is 5. Find the other leg.",
      "s": "b=√(13²−5²)=√(169−25)=√144=12 (the 5-12-13 triple).<div class=\"figure\">__SVG_PYTH8_EX1_HYP13LEG5__</div>"
    },
    {
      "t": "Check whether a triangle with sides 7, 24, 25 is a right triangle.",
      "s": "7²+24²=49+576=625=25². The equality holds, so the triangle is a right triangle (the 7-24-25 triple).<div class=\"figure\">__SVG_PYTH8_EX2_TRIPLE72425__</div>"
    },
    {
      "t": "Find the diagonal of a square with side 6 cm.",
      "s": "d=6√2 cm ≈ 8.49 cm — using the formula \"the diagonal of a square equals the side times √2\".<div class=\"figure\">__SVG_PYTH8_EX3_SQUAREDIAG6__</div>"
    },
    {
      "t": "A 10 m ladder leans against a wall so that its base is 6 m from the wall. At what height is the top of the ladder?",
      "s": "h=√(10²−6²)=√(100−36)=√64=8 m (the 6-8-10 triple).<div class=\"figure\">__SVG_PYTH8_EX4_LADDER10x6__</div>"
    },
    {
      "t": "Find the diagonal of a rectangle with sides 9 and 12.",
      "s": "d=√(9²+12²)=√(81+144)=√225=15 (the 9-12-15 triple, that is, 3-4-5 multiplied by 3).<div class=\"figure\">__SVG_PYTH8_EX5_RECTDIAG912__</div>"
    }
  ],
  "tasks": [
    {
      "q": "The legs of a right triangle are 3 and 4. Find the hypotenuse.",
      "ans": "5",
      "hint": "Apply the Pythagorean theorem: c=√(a²+b²).",
      "sol": "c=√(9+16)=√25=5."
    },
    {
      "q": "The legs of a right triangle are 5 and 12. Find the hypotenuse.",
      "ans": "13",
      "hint": "c=√(a²+b²).",
      "sol": "c=√(25+144)=√169=13."
    },
    {
      "q": "The legs of a right triangle are 8 and 15. Find the hypotenuse.",
      "ans": "17",
      "hint": "c=√(a²+b²).",
      "sol": "c=√(64+225)=√289=17."
    },
    {
      "q": "The hypotenuse is 10, and one leg is 6. Find the other leg.",
      "ans": "8",
      "hint": "b=√(c²−a²).",
      "sol": "b=√(100−36)=√64=8."
    },
    {
      "q": "The hypotenuse is 25, and one leg is 7. Find the other leg.",
      "ans": "24",
      "hint": "b=√(c²−a²).",
      "sol": "b=√(625−49)=√576=24."
    },
    {
      "q": "The hypotenuse is 17, and one leg is 8. Find the other leg.",
      "ans": "15",
      "hint": "b=√(c²−a²).",
      "sol": "b=√(289−64)=√225=15."
    },
    {
      "q": "The legs are 9 and 12. Find the hypotenuse.",
      "ans": "15",
      "hint": "c=√(a²+b²).",
      "sol": "c=√(81+144)=√225=15."
    },
    {
      "q": "The legs are 20 and 21. Find the hypotenuse.",
      "ans": "29",
      "hint": "c=√(a²+b²).",
      "sol": "c=√(400+441)=√841=29."
    },
    {
      "q": "The hypotenuse is 41, and one leg is 9. Find the other leg.",
      "ans": "40",
      "hint": "b=√(c²−a²).",
      "sol": "b=√(1681−81)=√1600=40."
    },
    {
      "q": "The diagonal of a square is 5√2 cm. What is the side of the square (in cm)?",
      "ans": "5",
      "hint": "The diagonal of a square equals the side times √2.",
      "sol": "d=a√2, so a=5."
    },
    {
      "q": "The side of a square is 7 cm. What is the square of its diagonal (in cm²)?",
      "ans": "98",
      "hint": "d²=a²+a²=2a².",
      "sol": "d²=2·49=98."
    },
    {
      "q": "Find the diagonal of a rectangle with sides 5 and 12 cm.",
      "ans": "13",
      "hint": "d=√(a²+b²).",
      "sol": "d=√(25+144)=√169=13."
    },
    {
      "q": "Find the diagonal of a rectangle with sides 9 and 40 cm.",
      "ans": "41",
      "hint": "d=√(a²+b²).",
      "sol": "d=√(81+1600)=√1681=41."
    },
    {
      "q": "Is a triangle with sides 9, 12, 15 a right triangle?",
      "opts": [
        "Yes, it is a right triangle",
        "No, it is not a right triangle"
      ],
      "ans": 0,
      "hint": "Check whether a²+b²=c² holds for the largest side.",
      "sol": "9²+12²=81+144=225=15². The equality holds — the triangle is a right triangle."
    },
    {
      "q": "Is a triangle with sides 6, 7, 9 a right triangle?",
      "opts": [
        "Yes, it is a right triangle",
        "No, it is not a right triangle"
      ],
      "ans": 1,
      "hint": "Check whether a²+b²=c² holds for the largest side.",
      "sol": "6²+7²=36+49=85, while 9²=81. 85≠81 — the triangle is NOT a right triangle."
    },
    {
      "q": "A 13 m ladder leans against a wall, with its base 5 m from the wall. At what height is the top of the ladder (in m)?",
      "ans": "12",
      "hint": "Use the Pythagorean theorem: height = √(length²−distance²).",
      "sol": "√(169−25)=√144=12."
    },
    {
      "q": "A 15 m ladder leans against a wall with its base 9 m from the wall along the ground. At what height is the top of the ladder (in m)?",
      "ans": "12",
      "hint": "height = √(length²−distance²).",
      "sol": "√(225−81)=√144=12."
    },
    {
      "q": "A cable runs from the top of a 15 m pole to a point on the ground 20 m from the base of the pole. Find the length of the cable (in m).",
      "ans": "25",
      "hint": "The pole, the ground, and the cable form a right triangle — the cable is the hypotenuse.",
      "sol": "√(225+400)=√625=25."
    },
    {
      "q": "Find the perimeter of a right triangle with legs 6 and 8 (in cm).",
      "ans": "24",
      "hint": "First find the hypotenuse, then add up all three sides.",
      "sol": "Hypotenuse: √(36+64)=10. Perimeter: 6+8+10=24."
    },
    {
      "q": "Find the area of a right triangle with legs 9 and 12 (in cm²).",
      "ans": "54",
      "hint": "The area of a right triangle equals half the product of its legs.",
      "sol": "S=(9·12):2=54."
    },
    {
      "q": "The diagonal of a TV screen is 20 inches, and the screen's height is 12 inches. Find the screen's width (in inches).",
      "ans": "16",
      "hint": "The diagonal, height, and width of the screen form a right triangle — the diagonal is the hypotenuse.",
      "sol": "width=√(20²−12²)=√(400−144)=√256=16."
    },
    {
      "q": "A 24 m mast is held by a guy wire anchored to the ground 7 m from the base of the mast. Find the length of the wire (in m).",
      "ans": "25",
      "hint": "The mast, the ground, and the wire form a right triangle — the wire is the hypotenuse.",
      "sol": "√(49+576)=√625=25."
    },
    {
      "q": "The base of an isosceles triangle is 16 cm, and the legs are 10 cm each. Find the height drawn to the base (in cm).",
      "ans": "6",
      "hint": "The height of an isosceles triangle bisects the base and forms a right triangle with the leg of the triangle as the hypotenuse.",
      "sol": "Half the base: 8. Height: √(10²−8²)=√(100−64)=√36=6."
    },
    {
      "q": "Find the diagonal of a rectangle with sides 6 and 8 cm.",
      "ans": "10",
      "hint": "d=√(a²+b²).",
      "sol": "d=√(36+64)=√100=10."
    },
    {
      "q": "A rectangular park measures 120 m by 160 m. How many meters will a pedestrian save by walking diagonally from one corner to the opposite corner instead of along two sides?",
      "ans": "80",
      "hint": "Find the diagonal using the Pythagorean theorem and compare it with the sum of the two sides.",
      "sol": "Diagonal: √(120² + 160²) = √(14400 + 25600) = √40000 = 200 m. Along the sides: 120 + 160 = 280 m. Savings: 280 − 200 = 80 m. Answer: 80."
    },
    {
      "q": "Two hikers set out from the same point at the same time: one heading north at 4 km/h, the other heading east at 3 km/h. What is the distance between them after 2 hours (in km)?",
      "ans": "10",
      "hint": "North and east are perpendicular — the hikers' paths will be the legs of a right triangle.",
      "sol": "After 2 h: 4 · 2 = 8 km and 3 · 2 = 6 km. Distance: √(8² + 6²) = √100 = 10 km. Answer: 10."
    },
    {
      "q": "A 10 m ladder leans against a wall with its base 6 m from the wall. The base is then moved another 2 m further from the wall. By how many meters does the top of the ladder drop?",
      "ans": "2",
      "hint": "Find the height of the top before and after — the length of the ladder doesn't change.",
      "sol": "Before: √(10² − 6²) = √64 = 8 m. After: base at 8 m, height √(10² − 8²) = √36 = 6 m. It drops by 8 − 6 = 2 m. Answer: 2."
    },
    {
      "q": "The base of an isosceles triangle is 10 cm, and the height drawn to the base is 12 cm. Find the perimeter of the triangle (in cm).",
      "ans": "36",
      "hint": "The height bisects the base — find the leg of the triangle as the hypotenuse.",
      "sol": "Half the base is 5 cm. The leg: √(5² + 12²) = √169 = 13 cm. Perimeter: 13 + 13 + 10 = 36 cm. Answer: 36."
    },
    {
      "q": "In a right triangle, one leg is 7 cm longer than the other, and the hypotenuse is 13 cm. Find the shorter leg (in cm).",
      "ans": "5",
      "hint": "Let the shorter leg be x, so the longer one is x + 7. Set up an equation using the Pythagorean theorem.",
      "sol": "x² + (x + 7)² = 169 ⇒ 2x² + 14x − 120 = 0 ⇒ x² + 7x − 60 = 0. D = 49 + 240 = 289, √D = 17, x = (−7 + 17) : 2 = 5. Answer: 5."
    },
    {
      "q": "Which triple of segments can form a right triangle?",
      "opts": [
        "4, 5, 6",
        "10, 24, 26",
        "7, 8, 11",
        "2, 3, 4"
      ],
      "ans": 1,
      "hint": "For each triple, check: does the sum of the squares of the two smaller sides equal the square of the largest?",
      "sol": "10² + 24² = 100 + 576 = 676 = 26² — this is a right triangle. For the others: 16 + 25 = 41 ≠ 36, 49 + 64 = 113 ≠ 121, 4 + 9 = 13 ≠ 16."
    },
    {
      "q": "The diagonal of a rectangle is 26 cm, and one of its sides is 10 cm. Find the area of the rectangle (in cm²).",
      "ans": "240",
      "hint": "First find the other side using the Pythagorean theorem.",
      "sol": "The other side: √(26² − 10²) = √(676 − 100) = √576 = 24 cm. Area: 10 · 24 = 240 cm². Answer: 240."
    },
    {
      "q": "A 24 m rope was divided by knots into three parts in the ratio 3 : 4 : 5 and stretched into a triangle, just like the ancient Egyptian surveyors did. Find the area of the resulting triangle (in m²).",
      "ans": "24",
      "hint": "Find the lengths of the sides. Check whether the triangle is right-angled — then the area equals half the product of the legs.",
      "sol": "Each part is 24 : 12 = 2 m, so the sides are 6, 8, and 10 m. 6² + 8² = 100 = 10², so the triangle is a right triangle. Area: 6 · 8 : 2 = 24 m². Answer: 24."
    }
  ],
  "bonus": {
    "q": "The bases of an isosceles trapezoid are 8 and 14, and the lateral side is 5. Find the height of the trapezoid.",
    "ans": "4",
    "hint": "Mentally drop two heights from the vertices of the shorter base onto the longer base — this creates two congruent right triangles on the sides. Find the leg of such a triangle (half the difference of the bases), then find the height using the Pythagorean theorem.",
    "sol": "Difference of the bases: 14−8=6, so each side triangle has a horizontal leg of 6:2=3, and the hypotenuse (the lateral side) is 5. Height: √(5²−3²)=√(25−9)=√16=4."
  },
  "test": [
    {
      "q": "The legs are 5 and 12. Find the hypotenuse.",
      "ans": "13",
      "sol": "√(25+144)=√169=13."
    },
    {
      "q": "The hypotenuse is 15, and one leg is 9. Find the other leg.",
      "ans": "12",
      "sol": "√(225−81)=√144=12."
    },
    {
      "q": "Find the diagonal of a rectangle with sides 8 and 6.",
      "ans": "10",
      "sol": "√(64+36)=√100=10."
    },
    {
      "q": "The side of a square is 4 cm. What is the square of its diagonal (in cm²)?",
      "ans": "32",
      "sol": "d²=2·16=32."
    },
    {
      "q": "Is a triangle with sides 5, 6, 8 a right triangle?",
      "opts": [
        "Yes",
        "No"
      ],
      "ans": 1,
      "sol": "5²+6²=25+36=61, while 8²=64. 61≠64 — not a right triangle."
    },
    {
      "q": "Is a triangle with sides 7, 24, 25 a right triangle?",
      "opts": [
        "Yes",
        "No"
      ],
      "ans": 0,
      "sol": "7²+24²=49+576=625=25² — it is a right triangle."
    },
    {
      "q": "A 26 m ladder leans against a wall with its base 10 m from it. At what height is the top of the ladder (in m)?",
      "ans": "24",
      "sol": "√(676−100)=√576=24."
    },
    {
      "q": "Find the area of a right triangle with legs 6 and 8.",
      "ans": "24",
      "sol": "S=(6·8):2=24."
    }
  ],
  "lab": [
    {
      "t": "Checking a right angle with a rope",
      "b": "Take a rope or cord, tie 12 equal segments on it (13 knots), and shape it into a triangle with sides of 3, 4, and 5 segments. Hold this triangle up to the corner of a garden bed, a box, or a room — if the angle is truly a right angle, the sides of the triangle will line up exactly with the edges. This is how right angles were checked back in ancient Egypt."
    },
    {
      "t": "The diagonal of a door or screen",
      "b": "Use a tape measure to find the height and width of a rectangular door, table, or screen, calculate the diagonal using the Pythagorean theorem, then measure the actual diagonal (corner to corner) and compare the results."
    },
    {
      "t": "The shortest path across a lawn",
      "b": "Find a rectangular lawn, plot, or room. Work out how many meters you'd have to walk along two sides of the rectangle (going around), and compare it with the straight diagonal distance (calculated using the Pythagorean theorem) — how many meters shorter is the direct path?"
    },
    {
      "t": "A ladder or stick against a wall",
      "b": "Lean a long stick, a mop, or (with an adult's help) a stepladder against a wall. Measure the distance from its base to the wall and the height at which it touches the wall, then use the Pythagorean theorem to check whether the resulting length matches the actual length of the stick."
    }
  ],
  "steps": [
    {
      "title": "Legs and the hypotenuse",
      "body": "<p>In a right triangle, the side opposite the right angle is called the <b>hypotenuse</b> — it is always the longest side. The two other sides, which form the right angle, are called the <b>legs</b>.</p><div class=\"figure\">__SVG_PYTH_SQUARES_ANIM__</div>"
    },
    {
      "title": "The Pythagorean theorem: finding the hypotenuse",
      "body": "<h3>The Pythagorean theorem</h3><p>The square of the hypotenuse equals the sum of the squares of the legs: <b>c² = a² + b²</b>. So the hypotenuse is found by the formula c = √(a²+b²). Look at the example with legs 6 and 8:</p>",
      "exIdx": 0
    },
    {
      "title": "Finding a leg using the Pythagorean theorem",
      "body": "<p>From the same equality c² = a² + b² you can easily find a leg: a = √(c²−b²) — subtract the square of the known leg from the square of the hypotenuse, then take the square root.</p>",
      "exIdx": 1
    },
    {
      "title": "The converse of the Pythagorean theorem",
      "body": "<h3>The converse of the Pythagorean theorem</h3><p>The converse is also true: if for a triangle's sides a, b, c the equality a²+b²=c² holds (where c is the largest side), then the triangle must be a right triangle, with the right angle opposite side c. Ancient Egyptian surveyors used exactly this: a rope with knots marking 12 equal parts, stretched into a 3-4-5 triangle, always gave a perfectly right angle.</p><div class=\"figure\">__SVG_PYTH_LADDER__</div>",
      "exIdx": 2
    },
    {
      "title": "Pythagorean triples",
      "body": "<h3>Pythagorean triples</h3><p>Some triples of natural numbers satisfy the Pythagorean theorem exactly, with no square roots — it's handy to remember them: <b>3-4-5</b>, <b>6-8-10</b>, <b>5-12-13</b>, <b>8-15-17</b>, <b>7-24-25</b>, as well as any multiple of them by the same number (for example, 9-12-15 is the 3-4-5 triple multiplied by 3).</p>",
      "exIdx": [
        0,
        1,
        5
      ]
    },
    {
      "title": "The diagonal of a square",
      "body": "<p>The <b>diagonal of a square</b> with side a equals a√2: both legs equal a, so d=√(a²+a²)=√(2a²)=a√2.</p>",
      "exIdx": 3
    },
    {
      "title": "The ladder-against-a-wall problem",
      "body": "<p>The wall, the ground, and the ladder form a right triangle: the wall and the ground are the legs, the ladder is the hypotenuse. Let's apply the Pythagorean theorem to find the unknown leg (the height):</p>",
      "exIdx": 4
    },
    {
      "title": "The diagonal of a rectangle",
      "body": "<p>The <b>diagonal of a rectangle</b> with sides a and b equals √(a²+b²) — the same legs and hypotenuse, but now the rectangle's sides are different.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>The Pythagorean theorem only works for a <b>right</b> triangle, and the hypotenuse is always the side opposite the right angle (the longest side). Mixing up a leg with the hypotenuse in the formula will give a wrong answer.</div>",
      "exIdx": 5
    }
  ]
};

/* ---------- circ8 ---------- */
CONTENT_EN.circ8 = {
  "goal": "After this topic, you'll confidently find central and inscribed angles, apply the property that a radius is perpendicular to a tangent, and use the property that tangent segments from a point are equal.",
  "explain": "<p>A circle is the set of all points in a plane that are equidistant from one point — the center. We already covered the radius, diameter, and chord in grade 6. Now let's look at angles related to a circle, and the properties of a tangent.</p><div class=\"figure\">__SVG_CIRC8_ANGLES_ANIM__</div><h3>Central and inscribed angles</h3><p>A <b>central angle</b> has its vertex at the center, with two radii as its sides.</p><p>An <b>inscribed angle</b> has its vertex on the circle, with two chords as its sides. See how they're related:</p><div class=\"note\"><span class=\"hand\">Key property</span>An inscribed angle equals HALF the central angle that subtends the same arc (that is, half the arc's degree measure).</div><p>Corollary: all inscribed angles that subtend the same arc are equal to each other — no matter where on the circle the vertex is.</p><div class=\"note\"><span class=\"hand\">Important special case</span>If an inscribed angle subtends a diameter (that is, its sides pass through the endpoints of the diameter), then it equals 90°. A diameter subtends an arc of 180°, and the inscribed angle is half of that — exactly 90°.</div><h3>Tangent to a circle</h3><div class=\"figure\">__SVG_CIRC8_TANGENT__</div><p>A <b>tangent</b> is a line that has exactly one point in common with the circle (the point of tangency). The radius drawn to the point of tangency is ALWAYS perpendicular to the tangent.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>The perpendicularity of the radius and the tangent isn't \"sometimes\" — it's always true, by the definition of a tangent. That's exactly why problems involving a tangent almost always bring in a right triangle and the Pythagorean theorem.</div><p><b>Property of tangent segments.</b> If two tangents are drawn to a circle from the same external point, the segments from that point to the points of tangency are equal to each other.</p><h3>Chords and distance from the center</h3><p>If you drop a perpendicular from the center of a circle onto a chord, it bisects the chord. The converse is also true: equal chords are equidistant from the center, and a longer chord lies closer to the center.</p><h3>Why this matters</h3><p>Circle properties come up constantly in geometry: in problems about inscribed and circumscribed circles, in technical drawing, in engineering (for example, gears and bearings), and in field measurements.</p>",
  "examples": [
    {
      "t": "The central angle AOB = 96°. Find the inscribed angle that subtends the same arc AB.",
      "s": "An inscribed angle is half the central angle subtending the same arc: 96° : 2 = 48°.<div class=\"figure\">__SVG_CIRC8_EX0_CENTRALINSCRIBED96__</div>"
    },
    {
      "t": "The inscribed angle ACB subtends diameter AB. What is the measure of angle ACB?",
      "s": "This is a special case of the inscribed angle theorem: an angle that subtends a diameter is always 90°.<div class=\"figure\">__SVG_CIRC8_EX1_DIAMETER90__</div>"
    },
    {
      "t": "The radius of a circle is 5 cm, and the distance from external point P to the center is 13 cm. Find the length of the tangent drawn from point P.",
      "s": "The radius at the point of tangency is perpendicular to the tangent, so this gives a right triangle with hypotenuse 13 and leg 5: t = √(13² − 5²) = √(169 − 25) = √144 = 12 cm.<div class=\"figure\">__SVG_CIRC8_EX2_TANGENTLEN12__</div>"
    },
    {
      "t": "Two tangents are drawn from point P to a circle, PA = 9 cm. What is the second tangent PB equal to?",
      "s": "Tangent segments drawn from the same point are equal to each other: PB = PA = 9 cm.<div class=\"figure\">__SVG_CIRC8_EX3_TWOTANGENTS9__</div>"
    },
    {
      "t": "A chord of a circle is 24 cm, and the distance from the center to the chord is 5 cm. Find the radius.",
      "s": "A perpendicular from the center bisects the chord: half the chord is 12 cm. The radius is the hypotenuse of a right triangle: R = √(12² + 5²) = √(144 + 25) = √169 = 13 cm.<div class=\"figure\">__SVG_CIRC8_EX4_CHORD24RADIUS13__</div>"
    },
    {
      "t": "The central angle subtending arc AB is 70°. What is the measure of arc AB?",
      "s": "A central angle always equals the degree measure of the arc it subtends: arc AB = 70°.<div class=\"figure\">__SVG_CIRC8_EX5_ARCEQUALSANGLE70__</div>"
    }
  ],
  "tasks": [
    {
      "q": "The central angle AOB = 64°. Find the inscribed angle that subtends the same arc (in degrees).",
      "ans": "32",
      "hint": "An inscribed angle is half the central angle.",
      "sol": "64° : 2 = 32°."
    },
    {
      "q": "An inscribed angle is 55°. Find the central angle that subtends the same arc (in degrees).",
      "ans": "110",
      "hint": "A central angle is twice the inscribed angle.",
      "sol": "55° · 2 = 110°."
    },
    {
      "q": "An inscribed angle subtends a diameter of the circle. What is it equal to (in degrees)?",
      "ans": "90",
      "hint": "This is a special case of the inscribed angle theorem.",
      "sol": "A diameter subtends an arc of 180°, and the inscribed angle is half of that: 90°."
    },
    {
      "q": "Arc AB is 120°. Find the central angle that subtends this arc (in degrees).",
      "ans": "120",
      "hint": "A central angle equals the degree measure of the arc.",
      "sol": "By definition the central angle equals 120°."
    },
    {
      "q": "Arc AB is 84°. Find the inscribed angle that subtends this arc (in degrees).",
      "ans": "42",
      "hint": "An inscribed angle is half the degree measure of the arc.",
      "sol": "84° : 2 = 42°."
    },
    {
      "q": "The radius of a circle is 8 cm, and the distance from an external point to the center is 17 cm. Find the length of the tangent (in cm).",
      "ans": "15",
      "hint": "The radius ⊥ the tangent, so you have a right triangle with hypotenuse 17.",
      "sol": "√(17² − 8²) = √(289 − 64) = √225 = 15 cm."
    },
    {
      "q": "The radius of a circle is 9 cm, and the length of the tangent from an external point is 12 cm. Find the distance from this point to the center (in cm).",
      "ans": "15",
      "hint": "The distance you need is the hypotenuse of a right triangle.",
      "sol": "√(9² + 12²) = √(81 + 144) = √225 = 15 cm."
    },
    {
      "q": "Tangents PA and PB are drawn from point P, PA = 14 cm. What is PB equal to (in cm)?",
      "ans": "14",
      "hint": "Tangent segments from the same point are equal.",
      "sol": "PB = PA = 14 cm."
    },
    {
      "q": "From external point P, tangents PA = 10 and PB = 3x − 2 are drawn (in the same units). Find x.",
      "ans": "4",
      "hint": "Set PB equal to PA — tangents from the same point are equal.",
      "sol": "3x − 2 = 10 → 3x = 12 → x = 4."
    },
    {
      "q": "A chord is 30 cm, and the distance from the center to the chord is 8 cm. Find the radius (in cm).",
      "ans": "17",
      "hint": "A perpendicular from the center bisects the chord — this gives a right triangle with legs 15 and 8.",
      "sol": "Half the chord is 15 cm. R = √(15² + 8²) = √(225 + 64) = √289 = 17 cm."
    },
    {
      "q": "The radius of a circle is 13 cm, and the chord is 24 cm. Find the distance from the center to the chord (in cm).",
      "ans": "5",
      "hint": "Half the chord is 12, use the Pythagorean theorem.",
      "sol": "√(13² − 12²) = √(169 − 144) = √25 = 5 cm."
    },
    {
      "q": "The radius of a circle is 10 cm, and the distance from the center to a chord is 6 cm. Find the length of the chord (in cm).",
      "ans": "16",
      "hint": "First find half the chord, then double the result.",
      "sol": "Half the chord = √(10² − 6²) = √64 = 8 cm, so the whole chord = 16 cm."
    },
    {
      "q": "Is it true that the radius drawn to the point of tangency is always perpendicular to the tangent?",
      "opts": [
        "Yes, always",
        "No, never",
        "Only if the tangent passes through the center",
        "Only for circles with an integer radius"
      ],
      "ans": 0,
      "hint": "This is the definition (and key property) of a tangent to a circle.",
      "sol": "Yes — the perpendicularity of the radius and the tangent at the point of tangency always holds; this is a key property of a tangent."
    },
    {
      "q": "Is it true that all inscribed angles subtending the same arc are equal to each other?",
      "opts": [
        "Yes",
        "No",
        "Only if the arc is a semicircle",
        "Only for two angles, not three or more"
      ],
      "ans": 0,
      "hint": "This is a corollary of the inscribed angle theorem.",
      "sol": "Yes — all inscribed angles subtending the same arc are equal, no matter where on the circle the vertex of the angle is."
    },
    {
      "q": "The central angle AOB = 100°. Point C lies on the major arc AB. Find angle ACB (in degrees).",
      "ans": "50",
      "hint": "An inscribed angle is half the central angle subtending the same arc.",
      "sol": "100° : 2 = 50°."
    },
    {
      "q": "Chord AB subtends an arc of 150°. Point C lies on the other (larger) arc. Find angle ACB (in degrees).",
      "ans": "75",
      "hint": "An inscribed angle is half the arc it subtends.",
      "sol": "150° : 2 = 75°."
    },
    {
      "q": "Two tangents are drawn from point P to a circle with radius 5 cm, and the distance from P to the center is 13 cm. Find the length of each tangent (in cm).",
      "ans": "12",
      "hint": "5-12-13 is a right triangle.",
      "sol": "√(13² − 5²) = √(169 − 25) = √144 = 12 cm."
    },
    {
      "q": "Tangents of lengths 2x + 1 and x + 7 are drawn from an external point (in the same units). Find x.",
      "ans": "6",
      "hint": "Tangents from the same point are equal — set the expressions equal.",
      "sol": "2x + 1 = x + 7 → x = 6."
    },
    {
      "q": "The radius of a circle is 7 cm, and point P is 25 cm from the center. Find the length of the tangent from point P (in cm).",
      "ans": "24",
      "hint": "7-24-25 is a right triangle.",
      "sol": "√(25² − 7²) = √(625 − 49) = √576 = 24 cm."
    },
    {
      "q": "In a circle of radius 15 cm, a chord is 9 cm from the center. Find the length of the chord (in cm).",
      "ans": "24",
      "hint": "First find half the chord using the Pythagorean theorem, then double it.",
      "sol": "Half the chord = √(15² − 9²) = √(225 − 81) = √144 = 12 cm, so the chord = 24 cm."
    },
    {
      "q": "A central angle is twice the inscribed angle subtending the same arc, and their sum is 108°. Find the inscribed angle (in degrees).",
      "ans": "36",
      "hint": "Let the inscribed angle be x, so the central angle is 2x. Set up the equation x + 2x = 108.",
      "sol": "3x = 108 → x = 36°."
    },
    {
      "q": "Arc AB is x°, and the inscribed angle subtending it is 38°. Find x.",
      "ans": "76",
      "hint": "The arc equals twice the inscribed angle that subtends it.",
      "sol": "x = 2 · 38° = 76°."
    },
    {
      "q": "The radius of a circle is 25 cm, and the chord is 48 cm. Find the distance from the center to the chord (in cm).",
      "ans": "7",
      "hint": "Half the chord is 24, apply the Pythagorean theorem.",
      "sol": "√(25² − 24²) = √(625 − 576) = √49 = 7 cm."
    },
    {
      "q": "Chord AB and chord CD of the same circle are equal to each other. What can be said about their distances from the center?",
      "opts": [
        "They are equal",
        "Chord AB is closer to the center",
        "Chord CD is closer to the center",
        "Cannot be compared, not enough data"
      ],
      "ans": 0,
      "hint": "Equal chords are equidistant from the center — this is a property of chords.",
      "sol": "Equal chords are always equidistant from the center of the circle."
    },
    {
      "q": "Point C lies on a circle with diameter AB. Angle CAB is 34°. Find angle CBA (in degrees).",
      "ans": "56",
      "hint": "Angle ACB subtends the diameter. What is it equal to?",
      "sol": "Angle ACB = 90°, since it subtends the diameter. Angle CBA = 180° − 90° − 34° = 56°. Answer: 56."
    },
    {
      "q": "Tangents PA and PB are drawn from point P to a circle with center O. Angle APB is 50°. Find angle AOB (in degrees).",
      "ans": "130",
      "hint": "Radii OA and OB are perpendicular to the tangents. The sum of the angles of a quadrilateral is 360°.",
      "sol": "In quadrilateral PAOB, angles A and B are each 90°. Angle AOB = 360° − 90° − 90° − 50° = 130°. Answer: 130."
    },
    {
      "q": "A circle is inscribed in triangle ABC and touches sides AB, BC, and AC at points K, M, and N. Given: AK = 4 cm, BM = 6 cm, CN = 5 cm. Find the perimeter of triangle ABC (in cm).",
      "ans": "30",
      "hint": "Tangent segments from the same vertex are equal: AK = AN, BK = BM, CM = CN.",
      "sol": "AN = 4, BK = 6, CM = 5. AB = 4 + 6 = 10, BC = 6 + 5 = 11, AC = 4 + 5 = 9. Perimeter: 10 + 11 + 9 = 30 cm. Answer: 30."
    },
    {
      "q": "Points A, B, C lie on a circle with center O, point C is on the major arc AB, angle ACB = 35°. Find angle OAB (in degrees).",
      "ans": "55",
      "hint": "Find the central angle AOB, then consider isosceles triangle AOB.",
      "sol": "Angle AOB = 2 · 35° = 70°. OA = OB (radii), so angle OAB = (180° − 70°) : 2 = 55°. Answer: 55."
    },
    {
      "q": "Points A, B, C divide a circle into three arcs whose degree measures are in the ratio 2 : 3 : 4. Find the largest angle of triangle ABC (in degrees).",
      "ans": "80",
      "hint": "Find the degree measure of each arc (the whole circle is 360°). Each angle of the triangle is inscribed.",
      "sol": "360° : 9 = 40°, arcs: 80°, 120°, 160°. The triangle's angles are half the arcs: 40°, 60°, 80°. The largest is 80°. Answer: 80."
    },
    {
      "q": "The inner diameter of a pipe is 50 cm. There is water in the pipe, the width of the water surface is 48 cm, and the water fills less than half the pipe. Find the greatest depth of the water (in cm).",
      "ans": "18",
      "hint": "The water surface is a chord. Find the distance from the center to this chord and subtract it from the radius.",
      "sol": "Radius 25 cm, half the chord 24 cm. Distance from the center to the chord: √(25² − 24²) = √49 = 7 cm. Depth: 25 − 7 = 18 cm. Answer: 18."
    },
    {
      "q": "An inscribed angle subtends an arc that makes up {1|3} of the circle. Find this angle (in degrees).",
      "ans": "60",
      "hint": "Find the degree measure of the arc, then the inscribed angle is half of it.",
      "sol": "Arc: 360° : 3 = 120°. Inscribed angle: 120° : 2 = 60°. Answer: 60."
    },
    {
      "q": "A tangent PA is drawn from point P to a circle of radius 6 cm, PA = 8 cm. Find the distance from point P to the nearest point on the circle (in cm).",
      "ans": "4",
      "hint": "First find the distance from P to the center. The nearest point on the circle lies on the segment from P to the center.",
      "sol": "OP = √(6² + 8²) = √100 = 10 cm. The nearest point is at a distance of 10 − 6 = 4 cm. Answer: 4."
    }
  ],
  "bonus": {
    "q": "In a circle with center O, chords AB and CD are equal to each other. The distance from the center to AB is 5x − 3, and to CD is 2x + 9 (in the same units). Find x.",
    "ans": "4",
    "hint": "Equal chords are equidistant from the center — set the distance expressions equal.",
    "sol": "5x − 3 = 2x + 9 → 3x = 12 → x = 4."
  },
  "test": [
    {
      "q": "The central angle AOB = 48°. Find the inscribed angle that subtends the same arc (in degrees).",
      "ans": "24",
      "sol": "48° : 2 = 24°."
    },
    {
      "q": "An inscribed angle subtends a diameter of the circle. What is it equal to (in degrees)?",
      "ans": "90",
      "sol": "This is a corollary of the inscribed angle theorem: an angle subtending a diameter equals 90°."
    },
    {
      "q": "The radius of a circle is 6 cm, and the distance from an external point to the center is 10 cm. Find the length of the tangent (in cm).",
      "ans": "8",
      "sol": "√(10² − 6²) = √(100 − 36) = √64 = 8 cm."
    },
    {
      "q": "Tangents PA and PB are drawn from the same point, PA = 11 cm. What is PB equal to (in cm)?",
      "ans": "11",
      "sol": "Tangents from the same point are equal: PB = PA = 11 cm."
    },
    {
      "q": "The radius drawn to the point of tangency forms an angle with the tangent of…",
      "opts": [
        "90°",
        "45°",
        "Depends on the radius of the circle",
        "60°"
      ],
      "ans": 0,
      "sol": "The radius is always perpendicular to the tangent at the point of tangency — a 90° angle."
    },
    {
      "q": "A chord is 6 cm, and the distance from the center to the chord is 4 cm. Find the radius (in cm).",
      "ans": "5",
      "sol": "Half the chord is 3 cm. R = √(3² + 4²) = √(9 + 16) = √25 = 5 cm."
    },
    {
      "q": "Arc AB is 110°. Find the inscribed angle that subtends this arc (in degrees).",
      "ans": "55",
      "sol": "110° : 2 = 55°."
    },
    {
      "q": "If two tangents are drawn to a circle from the same external point, then the segments from that point to the points of tangency…",
      "opts": [
        "are equal",
        "differ by exactly a factor of 2",
        "are always equal to the circle's radius",
        "are not related to each other at all"
      ],
      "ans": 0,
      "sol": "This is the property of tangent segments: they are always equal to each other."
    }
  ],
  "lab": [
    {
      "t": "Central and inscribed angle on paper",
      "b": "Use a compass to draw a circle and mark an arc on it. Draw the central angle (from the center to the ends of the arc) and measure it with a protractor. Then mark a third point on the larger arc and draw an inscribed angle from it to the same ends of the arc — measure it. Check that the inscribed angle comes out exactly half the central angle."
    },
    {
      "t": "Tangent and radius",
      "b": "Draw a circle and use a ruler to draw a line that touches the circle at only one point (a tangent). Draw the radius to this point of tangency and use a protractor to measure the angle between the radius and the tangent — it should come out to exactly 90°."
    },
    {
      "t": "Equal tangents from one point",
      "b": "Mark a point outside the circle. Place a ruler against the circle twice, so it touches the circle from different sides while passing through the marked point — mark both points of tangency. Use the ruler to measure both segments from the external point to the points of tangency — they should be equal."
    },
    {
      "t": "Chord and perpendicular from the center",
      "b": "Draw a chord in the circle (a segment connecting two points on the circle). Using a set square, drop a perpendicular from the center onto this chord. Use a ruler to measure the distances from the foot of the perpendicular to both ends of the chord — they should match, meaning the perpendicular bisects the chord."
    }
  ],
  "steps": [
    {
      "title": "Central and inscribed angles",
      "body": "<p>A circle is the set of all points in a plane that are equidistant from the center. Let's look at angles related to a circle. See how they're related:</p><div class=\"figure\">__SVG_CIRC8_ANGLES_ANIM__</div><p>A <b>central angle</b> has its vertex at the center, with two radii as its sides. An <b>inscribed angle</b> has its vertex on the circle, with two chords as its sides.</p><div class=\"note\"><span class=\"hand\">Key property</span>An inscribed angle equals HALF the central angle that subtends the same arc (that is, half the arc's degree measure).</div><p>Corollary: all inscribed angles that subtend the same arc are equal to each other — no matter where on the circle the vertex is.</p>"
    },
    {
      "title": "An inscribed angle is half the central angle",
      "body": "<p>Let's apply the key property: if the central angle AOB equals 96°, then the inscribed angle subtending the same arc AB equals half of it — 48°.</p>",
      "exIdx": 0
    },
    {
      "title": "An angle subtending a diameter — a special case",
      "body": "<div class=\"note\"><span class=\"hand\">Important special case</span>If an inscribed angle subtends a diameter (that is, its sides pass through the endpoints of the diameter), then it equals 90°. A diameter subtends an arc of 180°, and the inscribed angle is half of that — exactly 90°.</div>",
      "exIdx": 1
    },
    {
      "title": "Tangent and radius",
      "body": "<p>A <b>tangent</b> is a line that has exactly one point in common with the circle (the point of tangency). The radius drawn to the point of tangency is ALWAYS perpendicular to the tangent.</p><div class=\"figure\">__SVG_CIRC8_TANGENT__</div><div class=\"warn\"><span class=\"hand\">Common mistake</span>The perpendicularity of the radius and the tangent isn't \"sometimes\" — it's always true, by the definition of a tangent. That's exactly why problems involving a tangent almost always bring in a right triangle and the Pythagorean theorem.</div><p>So we solve the tangent-length problem using a right triangle: the hypotenuse is the distance from the external point to the center, one leg is the radius, and the other leg is the tangent itself.</p>",
      "exIdx": 2
    },
    {
      "title": "Property of tangent segments",
      "body": "<p>If two tangents are drawn to a circle from the same external point, the segments from that point to the points of tangency are equal to each other. So knowing one tangent, we immediately know the other.</p>",
      "exIdx": 3
    },
    {
      "title": "Chords and distance from the center",
      "body": "<p>If you drop a perpendicular from the center of a circle onto a chord, it bisects the chord. This gives a right triangle: the legs are half the chord and the distance from the center to the chord, and the hypotenuse is the radius.</p>",
      "exIdx": 4
    },
    {
      "title": "A central angle equals the degree measure of the arc",
      "body": "<p>A central angle always equals the degree measure of the arc it subtends — this is precisely the definition of the degree measure of an arc.</p>",
      "exIdx": 5
    }
  ]
};

/* ---------- quadr ---------- */
CONTENT_EN.quadr = {
  "goal": "After this topic you will know the properties of parallelograms, rectangles, rhombi, and trapezoids, be able to apply them to find sides, angles, and diagonals, and recognize the tests (converse theorems) for a parallelogram.",
  "explain": "<p>A quadrilateral is a figure with four sides and four angles. Among quadrilaterals there are special types with their own properties: the parallelogram, rectangle, rhombus, square, and trapezoid.</p><div class=\"figure\">__SVG_QUADR_PARALLELOGRAM__</div><h3>Parallelogram</h3><p><b>A parallelogram</b> is a quadrilateral whose opposite sides are parallel in pairs. This gives several important properties:</p><ul><li>Opposite sides are equal: AB = DC, AD = BC.</li><li>Opposite angles are equal: angle A = angle C, angle B = angle D.</li><li>The sum of consecutive angles (angles sharing a side) is 180°.</li><li>The diagonals bisect each other at their point of intersection: AO = OC, BO = OD.</li></ul><div class=\"note\"><span class=\"hand\">Tests for a parallelogram</span>The converse is also true: if a quadrilateral's diagonals bisect each other at their point of intersection — OR its opposite sides are equal in pairs — OR one pair of opposite sides is both parallel and equal — then the quadrilateral must be a parallelogram.</div><h3>Rectangle, rhombus, square</h3><p><b>A rectangle</b> is a parallelogram in which all angles are right angles (90°). Additional property: the diagonals of a rectangle are equal to each other.</p><p><b>A rhombus</b> is a parallelogram in which all sides are equal. Additional properties: the diagonals of a rhombus are perpendicular and bisect its angles.</p><p><b>A square</b> is both a rectangle and a rhombus at once: all sides are equal, all angles are right angles, and the diagonals are equal, perpendicular, and bisect the angles.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>Don't mix up the properties! The diagonals are EQUAL in a rectangle (not a rhombus), and PERPENDICULAR in a rhombus (not an ordinary rectangle). In an arbitrary parallelogram the diagonals are neither equal nor perpendicular — they only bisect each other.</div><p>Since the diagonals of a rhombus are perpendicular and bisect each other, the half-diagonals and a side of the rhombus form a right triangle — so the side of a rhombus is conveniently found using the Pythagorean theorem.</p><h3>Trapezoid</h3><div class=\"figure\">__SVG_QUADR_MIDLINE_ANIM__</div><p><b>A trapezoid</b> is a quadrilateral in which only ONE pair of opposite sides is parallel (these sides are called the bases), while the other pair (the legs) is not parallel.</p><p><b>The midsegment of a trapezoid</b> is the segment joining the midpoints of the legs, parallel to the bases. See how its length is calculated:</p><p><b>An isosceles trapezoid</b> is a trapezoid with equal legs. In it, the angles at each base are equal to each other, and the diagonals are equal.</p><h3>Why this matters</h3><p>These properties and tests are the main tool for proving geometric statements and solving problems that involve finding sides, angles, diagonals, and midsegments in a wide variety of figures — from window frames to drafting layouts.</p>",
  "examples": [
    {
      "t": "The perimeter of a parallelogram is 40 cm, one side is 12 cm. Find the adjacent side.",
      "s": "The half-perimeter is the sum of two adjacent sides: 40 : 2 = 20 cm. The second side: 20 − 12 = 8 cm.<div class=\"figure\">__SVG_QUADR8_EX0_PERIM__</div>"
    },
    {
      "t": "The diagonals of a parallelogram intersect at point O, AO = 7 cm. What is OC?",
      "s": "The diagonals of a parallelogram bisect each other at their point of intersection, so OC = AO = 7 cm.<div class=\"figure\">__SVG_QUADR8_EX1_DIAG_HALF__</div>"
    },
    {
      "t": "An angle of a parallelogram equals 65°. Find the adjacent angle.",
      "s": "The sum of adjacent angles of a parallelogram is 180°: 180° − 65° = 115°.<div class=\"figure\">__SVG_QUADR8_EX2_ANGLES__</div>"
    },
    {
      "t": "The diagonals of a rhombus are 6 cm and 8 cm. Find the side of the rhombus.",
      "s": "The diagonals of a rhombus are perpendicular and bisect each other: the halves are 3 cm and 4 cm. The side is the hypotenuse of a right triangle: √(3² + 4²) = √25 = 5 cm.<div class=\"figure\">__SVG_QUADR8_EX3_RHOMBUS__</div>"
    },
    {
      "t": "The bases of a trapezoid are 10 cm and 16 cm. Find its midsegment.",
      "s": "The midsegment is half the sum of the bases: (10 + 16) : 2 = 13 cm.<div class=\"figure\">__SVG_QUADR8_EX4_TRAPEZOID_MID__</div>"
    },
    {
      "t": "In a rectangle the diagonal is 13 cm, one side is 5 cm. Find the other side.",
      "s": "The diagonal is the hypotenuse of a right triangle formed by the sides of the rectangle: √(13² − 5²) = √(169 − 25) = √144 = 12 cm.<div class=\"figure\">__SVG_QUADR8_EX5_RECT_DIAG__</div>"
    }
  ],
  "tasks": [
    {
      "q": "The perimeter of a parallelogram is 50 cm, one side is 17 cm. Find the adjacent side (in cm).",
      "ans": "8",
      "hint": "The half-perimeter is the sum of two adjacent sides.",
      "sol": "50 : 2 = 25, 25 − 17 = 8 cm."
    },
    {
      "q": "One side of a parallelogram is 9 cm, the second is 5 cm longer. Find the perimeter (in cm).",
      "ans": "46",
      "hint": "First find the second side, then the perimeter = 2 · (sum of two adjacent sides).",
      "sol": "The second side is 9 + 5 = 14 cm, perimeter = 2 · (9 + 14) = 46 cm."
    },
    {
      "q": "The diagonals of a parallelogram intersect at point O, BD = 18 cm. Find BO (in cm).",
      "ans": "9",
      "hint": "The point of intersection bisects each diagonal.",
      "sol": "18 : 2 = 9 cm."
    },
    {
      "q": "In parallelogram ABCD, angle A = 72°. Find angle B (in degrees).",
      "ans": "108",
      "hint": "The sum of adjacent angles of a parallelogram is 180°.",
      "sol": "180° − 72° = 108°."
    },
    {
      "q": "In a parallelogram, angle A = 50°. Find angle C (in degrees).",
      "ans": "50",
      "hint": "Opposite angles of a parallelogram are equal.",
      "sol": "Angle C = angle A = 50°."
    },
    {
      "q": "The diagonals of a rhombus are 16 cm and 12 cm. Find the side of the rhombus (in cm).",
      "ans": "10",
      "hint": "The half-diagonals are the legs of a right triangle, and the side of the rhombus is the hypotenuse.",
      "sol": "The half-diagonals are 8 and 6 cm, side = √(8² + 6²) = √(64 + 36) = √100 = 10 cm."
    },
    {
      "q": "The side of a rhombus is 13 cm, one of its diagonals is 10 cm. Find the other diagonal (in cm).",
      "ans": "24",
      "hint": "Half of the known diagonal is 5 cm; find the other half using the Pythagorean theorem, then double it.",
      "sol": "√(13² − 5²) = √(169 − 25) = √144 = 12 cm — half of the other diagonal, so the whole diagonal = 24 cm."
    },
    {
      "q": "Which quadrilateral's diagonals are always equal to each other?",
      "opts": [
        "A rectangle",
        "A rhombus",
        "Any parallelogram",
        "Any trapezoid"
      ],
      "ans": 0,
      "hint": "Recall how a rectangle differs from an arbitrary parallelogram.",
      "sol": "The diagonals are equal precisely in a rectangle (and in a square, as its special case)."
    },
    {
      "q": "Which quadrilateral's diagonals are always perpendicular?",
      "opts": [
        "A rhombus",
        "A rectangle",
        "Any parallelogram",
        "Any trapezoid"
      ],
      "ans": 0,
      "hint": "Think about which figure has diagonals that intersect at a right angle.",
      "sol": "The diagonals are perpendicular in a rhombus (and in a square)."
    },
    {
      "q": "The bases of a trapezoid are 14 cm and 22 cm. Find its midsegment (in cm).",
      "ans": "18",
      "hint": "The midsegment of a trapezoid is half the sum of the bases.",
      "sol": "(14 + 22) : 2 = 18 cm."
    },
    {
      "q": "The midsegment of a trapezoid is 15 cm, one base is 11 cm. Find the second base (in cm).",
      "ans": "19",
      "hint": "Double the midsegment and subtract the known base.",
      "sol": "15 · 2 = 30, 30 − 11 = 19 cm."
    },
    {
      "q": "In a rectangle, one side is 9 cm, the diagonal is 15 cm. Find the other side (in cm).",
      "ans": "12",
      "hint": "The diagonal is the hypotenuse of a right triangle formed by the sides of the rectangle.",
      "sol": "√(15² − 9²) = √(225 − 81) = √144 = 12 cm."
    },
    {
      "q": "In a rectangle, the sides are 7 cm and 24 cm. Find the diagonal (in cm).",
      "ans": "25",
      "hint": "7-24-25 is a right triangle.",
      "sol": "√(7² + 24²) = √(49 + 576) = √625 = 25 cm."
    },
    {
      "q": "The perimeter of a rhombus is 52 cm. Find the side of the rhombus (in cm).",
      "ans": "13",
      "hint": "All sides of a rhombus are equal.",
      "sol": "52 : 4 = 13 cm."
    },
    {
      "q": "The diagonals of a parallelogram intersect at point O; the shorter diagonal is 20 cm. Find the segment from a vertex to point O along this diagonal (in cm).",
      "ans": "10",
      "hint": "The diagonals of a parallelogram are bisected by their point of intersection.",
      "sol": "20 : 2 = 10 cm."
    },
    {
      "q": "In an isosceles trapezoid, one leg is 15 cm. What is the other leg (in cm)?",
      "ans": "15",
      "hint": "In an isosceles trapezoid, the legs are equal.",
      "sol": "15 cm — by the definition of an isosceles trapezoid."
    },
    {
      "q": "In an isosceles trapezoid, the angle at the longer base is 68°. Find the second angle at that same base (in degrees).",
      "ans": "68",
      "hint": "In an isosceles trapezoid, the angles at each base are equal to each other.",
      "sol": "68° — the angles at one base of an isosceles trapezoid are equal."
    },
    {
      "q": "In a parallelogram, one angle is 30° greater than its neighbor. Find the larger angle (in degrees).",
      "ans": "105",
      "hint": "Let the smaller angle be x, the larger one x+30. The sum of adjacent angles of a parallelogram is 180°.",
      "sol": "x + (x + 30) = 180 → 2x = 150 → x = 75°, the larger angle = 75° + 30° = 105°."
    },
    {
      "q": "One side of a parallelogram is 3 times the other, the perimeter is 64 cm. Find the longer side (in cm).",
      "ans": "24",
      "hint": "Let the shorter side be x, so the longer one is 3x. The half-perimeter = x + 3x.",
      "sol": "x + 3x = 32 → 4x = 32 → x = 8, the longer side = 24 cm."
    },
    {
      "q": "The sides of a rectangle are 6 cm and 8 cm. Find the diagonal (in cm).",
      "ans": "10",
      "hint": "6-8-10 is a right triangle.",
      "sol": "√(6² + 8²) = √(36 + 64) = √100 = 10 cm."
    },
    {
      "q": "The midsegment of a trapezoid is 20 cm, and the bases are in the ratio 3:5. Find the longer base (in cm).",
      "ans": "25",
      "hint": "The sum of the bases = 2 · the midsegment; split it into parts according to the ratio 3:5.",
      "sol": "The sum of the bases is 40 cm, total parts 3+5=8, each part is 5 cm, the longer base = 5 · 5 = 25 cm."
    },
    {
      "q": "If the diagonals of a quadrilateral bisect each other at their point of intersection, what does this mean?",
      "opts": [
        "This is a test for a parallelogram — the quadrilateral must be a parallelogram",
        "This is true only for a rectangle",
        "This is true only for a rhombus",
        "This proves nothing"
      ],
      "ans": 0,
      "hint": "Recall the tests for a parallelogram — the converse statements to its properties.",
      "sol": "If the diagonals of a quadrilateral bisect each other at their point of intersection, this is a test for a parallelogram, meaning the quadrilateral must be a parallelogram."
    },
    {
      "q": "In a rhombus, the diagonals are 18 cm and 24 cm. Find the perimeter of the rhombus (in cm).",
      "ans": "60",
      "hint": "The half-diagonals are the legs, and the side of the rhombus is the hypotenuse. Perimeter = 4 · side.",
      "sol": "The half-diagonals are 9 and 12 cm, side = √(9² + 12²) = √(81 + 144) = √225 = 15 cm, perimeter = 4 · 15 = 60 cm."
    },
    {
      "q": "The area of a square is 36 cm². Find its perimeter (in cm).",
      "ans": "24",
      "hint": "First find the side of the square: a = √S.",
      "sol": "Side = √36 = 6 cm, perimeter = 4 · 6 = 24 cm."
    },
    {
      "q": "The bisector of angle A of parallelogram ABCD meets side BC at point K, BK = 7 cm, KC = 3 cm. Find the perimeter of the parallelogram (in cm).",
      "ans": "34",
      "hint": "Angle KAD equals angle AKB (alternate interior angles with AD ∥ BC). So triangle ABK is isosceles.",
      "sol": "Angle BAK = angle KAD = angle AKB, so AB = BK = 7 cm. BC = 7 + 3 = 10 cm. Perimeter: 2 · (7 + 10) = 34 cm. Answer: 34."
    },
    {
      "q": "A side of a rhombus is 9 cm, one of its angles is 60°. Find the shorter diagonal of the rhombus (in cm).",
      "ans": "9",
      "hint": "The shorter diagonal cuts off a triangle with two sides of 9 cm and a 60° angle between them. What kind of triangle is this?",
      "sol": "The triangle is isosceles with a 60° angle at the vertex, so the base angles are also 60° each — it's equilateral. The shorter diagonal = 9 cm. Answer: 9."
    },
    {
      "q": "The diagonals of a rectangle intersect at an angle of 60°, the shorter side of the rectangle is 7 cm. Find the diagonal (in cm).",
      "ans": "14",
      "hint": "The diagonals of a rectangle are equal and bisect each other. Consider the triangle formed by the half-diagonals and the shorter side.",
      "sol": "The half-diagonals are equal, the angle between them is 60° — the triangle is equilateral, half of the diagonal = 7 cm. Diagonal = 14 cm. Answer: 14."
    },
    {
      "q": "The bases of an isosceles trapezoid are 10 cm and 22 cm, the leg is 10 cm. Find the height of the trapezoid (in cm).",
      "ans": "8",
      "hint": "Drop heights from the ends of the shorter base — equal segments are cut off at the edges of the longer base.",
      "sol": "Each segment: (22 − 10) : 2 = 6 cm. Height: √(10² − 6²) = √64 = 8 cm. Answer: 8."
    },
    {
      "q": "The perimeter of an isosceles trapezoid is 50 cm, the leg is 9 cm. Find the midsegment of the trapezoid (in cm).",
      "ans": "16",
      "hint": "Find the sum of the bases; the midsegment is half of that.",
      "sol": "Sum of the bases: 50 − 2 · 9 = 32 cm. Midsegment: 32 : 2 = 16 cm. Answer: 16."
    },
    {
      "q": "A carpenter made a rectangular window frame 90 × 120 cm. To check that the angles are right angles, he measures both diagonals. What should the length of each diagonal be (in cm)?",
      "ans": "150",
      "hint": "In a rectangle the diagonals are equal, and each one is the hypotenuse of a triangle formed by the sides of the frame.",
      "sol": "d = √(90² + 120²) = √(8100 + 14400) = √22500 = 150 cm. Answer: 150."
    },
    {
      "q": "Which statement is true?",
      "opts": [
        "Every rhombus is a square",
        "Every square is a rhombus",
        "The diagonals of any parallelogram are equal",
        "A trapezoid has two pairs of parallel sides"
      ],
      "ans": 1,
      "hint": "Recall the definitions: a rhombus has all sides equal, a square also has all right angles.",
      "sol": "A square has all sides equal, so it is a rhombus. The converse is false: a rhombus's angles aren't necessarily right angles. The diagonals aren't equal in every parallelogram, and a trapezoid has only one pair of parallel sides."
    },
    {
      "q": "The angles of a parallelogram adjacent to one side are in the ratio 2 : 7. Find the smaller angle of the parallelogram (in degrees).",
      "ans": "40",
      "hint": "The sum of the angles adjacent to one side of a parallelogram is 180°.",
      "sol": "2x + 7x = 180° ⇒ x = 20°. Smaller angle: 2 · 20° = 40°. Answer: 40."
    }
  ],
  "bonus": {
    "q": "The bases of a trapezoid are in the ratio 2:3, and its midsegment is 25 cm. Find the shorter base (in cm).",
    "ans": "20",
    "hint": "The sum of the bases = 2 · the midsegment; split it into parts according to the ratio 2:3.",
    "sol": "The sum of the bases is 50 cm, total parts 2+3=5, each part is 10 cm, the shorter base = 2 · 10 = 20 cm."
  },
  "test": [
    {
      "q": "The perimeter of a parallelogram is 34 cm, one side is 10 cm. Find the adjacent side (in cm).",
      "ans": "7",
      "sol": "34 : 2 = 17, 17 − 10 = 7 cm."
    },
    {
      "q": "In a parallelogram, angle A = 48°. Find angle B (in degrees).",
      "ans": "132",
      "sol": "180° − 48° = 132°."
    },
    {
      "q": "The diagonals of a rhombus are 6 cm and 8 cm. Find the side of the rhombus (in cm).",
      "ans": "5",
      "sol": "The half-diagonals are 3 and 4 cm, side = √(3² + 4²) = 5 cm."
    },
    {
      "q": "Which figure's diagonals are always equal to each other?",
      "opts": [
        "A rectangle",
        "A rhombus",
        "Any parallelogram",
        "Any trapezoid"
      ],
      "ans": 0,
      "sol": "The diagonals are equal in a rectangle."
    },
    {
      "q": "The bases of a trapezoid are 9 cm and 15 cm. Find the midsegment (in cm).",
      "ans": "12",
      "sol": "(9 + 15) : 2 = 12 cm."
    },
    {
      "q": "In a rectangle, the sides are 9 cm and 12 cm. Find the diagonal (in cm).",
      "ans": "15",
      "sol": "√(9² + 12²) = √(81 + 144) = √225 = 15 cm."
    },
    {
      "q": "The perimeter of a rhombus is 48 cm. Find its side (in cm).",
      "ans": "12",
      "sol": "48 : 4 = 12 cm."
    },
    {
      "q": "Which statement is true for ANY parallelogram?",
      "opts": [
        "The diagonals bisect each other at their point of intersection",
        "The diagonals are equal",
        "The diagonals are perpendicular",
        "All angles are right angles"
      ],
      "ans": 0,
      "sol": "This is a general property of all parallelograms — the other statements are true only for specific special types (rectangle, rhombus)."
    }
  ],
  "lab": [
    {
      "t": "Diagonals of a parallelogram on paper",
      "b": "Draw a parallelogram (grid paper is convenient for this), and draw both diagonals. Use a ruler to measure the segments from each vertex to the point where the diagonals intersect — check that they are equal in pairs."
    },
    {
      "t": "A rhombus from paper",
      "b": "Fold a square sheet of paper along both diagonals (crosswise) and unfold it. Use a set square or protractor to confirm that the fold lines (the diagonals) intersect at exactly a right angle — this is a property of a rhombus's diagonals."
    },
    {
      "t": "Midsegment of a trapezoid",
      "b": "Draw a trapezoid, mark the midpoints of the legs, and connect them with a segment — this is the midsegment. Use a ruler to measure both bases and the midsegment, and check the equality m = (a + b) : 2."
    },
    {
      "t": "Checking a rectangle by its diagonals",
      "b": "On grid paper, draw a quadrilateral whose opposite sides are parallel (a parallelogram). Measure both diagonals: if they are equal, the figure is a rectangle; if not, it's just a parallelogram."
    }
  ],
  "steps": [
    {
      "title": "Quadrilateral and parallelogram",
      "body": "<p>A quadrilateral is a figure with four sides and four angles. Among quadrilaterals there are special types with their own properties: the parallelogram, rectangle, rhombus, square, and trapezoid.</p><div class=\"figure\">__SVG_QUADR_PARALLELOGRAM__</div><p><b>A parallelogram</b> is a quadrilateral whose opposite sides are parallel in pairs. This gives several important properties: opposite sides are equal (AB = DC, AD = BC), opposite angles are equal (angle A = angle C, angle B = angle D), the sum of adjacent angles is 180°, and the diagonals bisect each other at their point of intersection (AO = OC, BO = OD).</p>"
    },
    {
      "title": "Sides of a parallelogram and the half-perimeter",
      "body": "<p>Since the opposite sides of a parallelogram are equal, the perimeter consists of two pairs of equal sides. Half the perimeter is the sum of two adjacent (not opposite) sides. If one side and the half-perimeter are known, the adjacent side is easy to find by subtraction.</p>",
      "exIdx": 0
    },
    {
      "title": "The diagonals bisect each other",
      "body": "<p>The diagonals of a parallelogram bisect each other at their point of intersection: AO = OC, BO = OD. So if one half of a diagonal is known, the other half (of the same diagonal) equals it.</p>",
      "exIdx": 1
    },
    {
      "title": "Adjacent and opposite angles",
      "body": "<p>Opposite angles of a parallelogram are equal to each other, and the sum of adjacent (angles sharing a side) angles is 180°. Knowing one angle, we find its neighbor by subtracting from 180°.</p>",
      "exIdx": 2
    },
    {
      "title": "Rhombus: diagonals are perpendicular",
      "body": "<p><b>A rhombus</b> is a parallelogram in which all sides are equal. Additional properties: the diagonals of a rhombus are perpendicular and bisect its angles. Since the diagonals of a rhombus are perpendicular and bisect each other, the half-diagonals and a side of the rhombus form a right triangle — so the side of a rhombus is conveniently found using the Pythagorean theorem.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>Don't mix up the properties! The diagonals are EQUAL in a rectangle (not a rhombus), and PERPENDICULAR in a rhombus (not an ordinary rectangle).</div>",
      "exIdx": 3
    },
    {
      "title": "Rectangle: diagonals are equal",
      "body": "<p><b>A rectangle</b> is a parallelogram in which all angles are right angles (90°). Additional property: the diagonals of a rectangle are equal to each other. The diagonal of a rectangle, together with two of its sides, forms a right triangle, so we find the third quantity using the Pythagorean theorem.</p><p><b>A square</b> is both a rectangle and a rhombus at once: all sides are equal, all angles are right angles, and the diagonals are equal, perpendicular, and bisect the angles.</p>",
      "exIdx": 5
    },
    {
      "title": "Trapezoid and the midsegment",
      "body": "<p><b>A trapezoid</b> is a quadrilateral in which only ONE pair of opposite sides is parallel (the bases), while the other pair (the legs) is not parallel.</p><div class=\"figure\">__SVG_QUADR_MIDLINE_ANIM__</div><p><b>The midsegment of a trapezoid</b> is the segment joining the midpoints of the legs, parallel to the bases. Its length equals half the sum of the bases. <b>An isosceles trapezoid</b> is a trapezoid with equal legs; in it, the angles at each base are equal to each other, and the diagonals are equal.</p>",
      "exIdx": 4
    }
  ]
};



})();
