/* =======================================================================
   content-en/g9.js — English translation of grade-9 topic content
   Version 2.52.0

   7 topics: qfunc (quadratic function), nsys (nonlinear systems of
   equations), prog (arithmetic/geometric progressions), stat (statistics
   and probability, grade-9 level — distinct from grade-6 "stat6"),
   simil (similarity of triangles), vect (vectors), trig (right-triangle
   trigonometry).

   Architecture notes (verified before translation):
   - Grade 9 has NO overlay of any kind: grep for the old literal
     EXTRA.<id> overlay found 0 matches for all 7 topics, and none of
     the 7 ids appear anywhere in the newer EXTRA2_A/EXTRA2_B/EXTRA3
     task-overlay objects (those cover only grades 4-8). The literal
     CONTENT.<id> body already contains the full, final content —
     confirmed by a jsdom dump of the fully-resolved CONTENT.<id>
     matching the literal body exactly for every field (examples:6,
     tasks:32, test:8, lab:4, steps:7 for all topics except stat,
     which has steps:8). No task-count anomaly like grade 8's sqrt=33
     was found here — all 7 topics are uniformly 32 tasks.
   - No decimal-comma "ans" values were found in the Russian ground
     truth for any of the 7 topics (unlike earlier grades). A few
     decimal commas inside "hint"/"sol" prose text (not "ans") were
     found and normalized to periods during translation (e.g. prog's
     "15,5·10=155" -> "15.5*10=155") for consistency with the rest of
     the English content; this does not affect answer-checking, which
     only ever reads "ans".
   - Translated by 4 parallel subagents in 2 batches: (1) qfunc+nsys
     and prog+stat together, then (2) simil+vect and trig alone, same
     batching pattern as 2.49.0-2.51.0. One real discrepancy was found
     and fixed during a subagent's own self-verification: the first
     draft of vect's "lab" array was missing 1 of 4 items ("Magnitude
     of a vector and the Pythagorean theorem") - caught before the
     report was sent, final output is 4/4.
   - Claude independently re-verified all 7 topics after assembly via
     a Node vm-based structural/ans/SVG-marker parity test against the
     7 ground-truth JSON dumps (jsdom-resolved, not literal-body), plus
     a loading-architecture regression test via a local HTTP server
     (http.server + JSDOM url:'http://127.0.0.1:<port>/...',
     resources:'usable' — needed because file:// origin makes
     localStorage unavailable in jsdom, breaking getLang()/setLang(),
     a lesson carried over from 2.51.0's verification).
   - As with all previous grades, illustrations (SVG via __SVG_X__
     markers) are intentionally NOT redrawn in English yet — they keep
     showing Russian captions/labels baked into the SVG. trig keeps its
     one pre-existing marker, __SVG_TRIG_RATIOS__, used twice (once in
     explain, once in steps[0].body), exactly as in the Russian source.
   ======================================================================= */
(function(){
CONTENT_EN.qfunc = {
 "goal": "After this topic you will be able to find the vertex and zeros of a quadratic function, graph it point by point, and describe the intervals of constant sign and monotonicity.",
 "explain": "<p>A quadratic function is a function of the form <b>y = ax² + bx + c</b>, where a, b, c are numbers and <b>a ≠ 0</b> must hold (if a = 0, the x² term disappears and the function becomes linear). The graph of such a function is always a special curve called a <b>parabola</b>.</p><h3>Direction of the branches</h3><p>The direction of the parabola's branches depends only on the sign of coefficient a: if <b>a &gt; 0</b>, the branches point upward (the parabola looks like a bowl); if <b>a &lt; 0</b>, they point downward (like a dome). For example, for the function y = 2x² − 3x + 1 the coefficient a = 2 &gt; 0, so the branches point upward; while for y = −x² + 4x the branches point downward, since a = −1 &lt; 0.</p><h3>The vertex of the parabola and the axis of symmetry</h3><p>Every parabola has a vertex — its lowest point (if the branches point upward) or its highest point (if the branches point downward). Its coordinates are found by the formulas: x₀ = {-b|2a}, and y₀ is the value of the function at x₀, that is, y₀ = f(x₀). The vertical line x = x₀ passing through the vertex is called the axis of symmetry: the parabola is arranged so that its left and right halves are mirror images of each other across this line.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>In the formula x₀ = {-b|2a} the minus sign before b is often lost or forgotten altogether, especially when b itself is negative (giving two minus signs that cancel to a plus). For example, for y = x² − 6x + 5 the coefficient b = −6, and x₀ = −(−6)/2 = 3, not −6/2 = −3. Always substitute b with its own sign first, and only then flip the sign.</div><h3>Graphing point by point</h3><p>To sketch a parabola by hand, you don't need to compute dozens of points. The order is: 1) find the vertex (x₀; y₀); 2) take 2–3 more x-values arranged symmetrically around x₀ (for example, x₀ − 1 and x₀ + 1); 3) compute y for them; 4) plot all the points on the coordinate plane and connect them with a smooth parabola-shaped curve. Because of the symmetry, the y-values at x₀ − 1 and x₀ + 1 will always match — handy for checking your work.</p><h3>Zeros of the function and the discriminant</h3><p>The zeros of a function are the x-values where y = 0, that is, the points where the parabola crosses the x-axis. To find them, solve the equation ax² + bx + c = 0 using the discriminant D = b² − 4ac: if <b>D &gt; 0</b> — two zeros; if <b>D = 0</b> — one zero (the vertex lies exactly on the x-axis); if <b>D &lt; 0</b> — no zeros, and the graph never crosses the x-axis at all.</p><h3>Intervals of constant sign and monotonicity</h3><p>If a function has zeros, they split the x-axis into intervals where the function keeps a constant sign: between the zeros the sign is one value (opposite to the sign of a), and outside that interval it is the other value (matching the sign of a). Increasing and decreasing behavior is determined by the position of the vertex: if the branches point upward, the function decreases to the left of the vertex and increases to the right; if the branches point downward, it's the opposite — increasing to the left and decreasing to the right.</p><h3>The reference parabola y = x²</h3><p>The simplest case is the function y = x² (a = 1, b = 0, c = 0): its vertex is at (0; 0), the branches point upward, and it is symmetric about the y-axis. Any other parabola y = ax² + bx + c can be thought of as \"similar\" to this reference one, just stretched, compressed, flipped, or shifted — its overall shape always stays a parabola.</p><div class=\"note\"><span class=\"hand\">Remember</span>The sign of a decides everything important: which way the branches point (upward when a &gt; 0, downward when a &lt; 0), and what sign the function has outside the zeros (it matches the sign of a).</div>",
 "examples": [
  {
   "t": "Find the vertex of the parabola y = x² − 4x + 3.",
   "s": "x₀ = −(−4)/(2·1) = 2. y₀ = 2² − 4·2 + 3 = 4 − 8 + 3 = −1. Vertex (2; −1), branches upward, since a = 1 > 0.<div class=\"figure\">__SVG_QFUNC_EX0_VERTEX_UP__</div>"
  },
  {
   "t": "Find the vertex of the parabola y = −x² + 6x − 5.",
   "s": "x₀ = −6/(2·(−1)) = 3. y₀ = −3² + 6·3 − 5 = −9 + 18 − 5 = 4. Vertex (3; 4), branches downward, since a = −1 < 0.<div class=\"figure\">__SVG_QFUNC_EX1_VERTEX_DOWN__</div>"
  },
  {
   "t": "Find the zeros of the function y = x² − x − 6.",
   "s": "D = (−1)² − 4·1·(−6) = 1 + 24 = 25, √D = 5. x = (1 ± 5)/2: x₁ = 3, x₂ = −2.<div class=\"figure\">__SVG_QFUNC_EX2_ROOTS__</div>"
  },
  {
   "t": "How many zeros does the function y = x² + 3x + 5 have?",
   "s": "D = 3² − 4·1·5 = 9 − 20 = −11 < 0. No zeros — the graph never crosses the x-axis at all.<div class=\"figure\">__SVG_QFUNC_EX3_NOROOTS__</div>"
  },
  {
   "t": "Determine the intervals of constant sign and monotonicity for y = x² − 4x + 3.",
   "s": "Zeros: D = 16 − 12 = 4, √D = 2, x = (4 ± 2)/2 = 3 or 1. Branches upward (a=1>0), so between the zeros (on (1; 3)) the function is negative, and outside that interval it is positive. Vertex at x₀ = 2 (from the first example): to the left of it (x < 2) the function decreases, to the right (x > 2) it increases.<div class=\"figure\">__SVG_QFUNC_EX4_SIGN__</div>"
  },
  {
   "t": "Graph the function y = x² − 2x − 3 using several points.",
   "s": "Vertex: x₀ = 1, y₀ = 1 − 2 − 3 = −4. Take symmetric points: x=0 → y=−3; x=2 → y=4−4−3=−3 (matches, as it should); x=−2 → y=4+4−3=5; x=4 → y=16−8−3=5 (also matches). Plot the points (1;−4), (0;−3), (2;−3), (−2;5), (4;5) and connect them with a smooth parabola-shaped curve opening upward.<div class=\"figure\">__SVG_QFUNC_EX5_POINTS__</div>"
  }
 ],
 "tasks": [
  {
   "q": "For the function y = 3x² − 5x + 1, name the leading coefficient a.",
   "ans": "3",
   "hint": "Coefficient a is the number in front of x².",
   "sol": "In the form y = ax² + bx + c, the coefficient a = 3."
  },
  {
   "q": "For the function y = −2x² + 7x − 1, name the constant term c.",
   "ans": "-1",
   "hint": "The constant term c is the number with no variable.",
   "sol": "In the form y = ax² + bx + c, the constant term c = −1."
  },
  {
   "q": "Which way do the branches of the parabola y = −4x² + x + 10 point?",
   "opts": [
    "up",
    "down"
   ],
   "ans": 1,
   "hint": "Look at the sign of coefficient a.",
   "sol": "a = −4 < 0, so the branches point downward."
  },
  {
   "q": "Which way do the branches of the parabola y = 5x² − 3x point?",
   "opts": [
    "up",
    "down"
   ],
   "ans": 0,
   "hint": "Look at the sign of coefficient a.",
   "sol": "a = 5 > 0, so the branches point upward."
  },
  {
   "q": "Find the x-coordinate of the vertex of the parabola y = x² − 6x + 8.",
   "ans": "3",
   "hint": "x₀ = −b/(2a).",
   "sol": "x₀ = −(−6)/(2·1) = 6/2 = 3."
  },
  {
   "q": "Find the y-coordinate of the vertex of the parabola y = x² − 6x + 8.",
   "ans": "-1",
   "hint": "Substitute x₀ = 3 (from the previous task) into the function.",
   "sol": "y₀ = 3² − 6·3 + 8 = 9 − 18 + 8 = −1."
  },
  {
   "q": "Find the x-coordinate of the vertex of the parabola y = x² + 4x + 1.",
   "ans": "-2",
   "hint": "x₀ = −b/(2a), don't forget the sign of b.",
   "sol": "x₀ = −4/(2·1) = −2."
  },
  {
   "q": "Find the y-coordinate of the vertex of the parabola y = x² + 4x + 1.",
   "ans": "-3",
   "hint": "Substitute x₀ = −2 (from the previous task) into the function.",
   "sol": "y₀ = (−2)² + 4·(−2) + 1 = 4 − 8 + 1 = −3."
  },
  {
   "q": "Find the x-coordinate of the vertex of the parabola y = −2x² + 8x − 3.",
   "ans": "2",
   "hint": "x₀ = −b/(2a); note that a is negative.",
   "sol": "x₀ = −8/(2·(−2)) = −8/(−4) = 2."
  },
  {
   "q": "Find the y-coordinate of the vertex of the parabola y = −2x² + 8x − 3.",
   "ans": "5",
   "hint": "Substitute x₀ = 2 (from the previous task) into the function.",
   "sol": "y₀ = −2·2² + 8·2 − 3 = −8 + 16 − 3 = 5."
  },
  {
   "q": "The axis of symmetry of the parabola y = x² − 10x + 21 is given by the equation x = ... Find this number.",
   "ans": "5",
   "hint": "The axis of symmetry passes through the vertex, x = x₀ = −b/(2a).",
   "sol": "x₀ = −(−10)/(2·1) = 10/2 = 5."
  },
  {
   "q": "Find the y-coordinate of the vertex of the parabola y = 3x² − 6x + 4.",
   "ans": "1",
   "hint": "First find x₀ = −b/(2a), then substitute into the function.",
   "sol": "x₀ = 6/(2·3) = 1. y₀ = 3·1² − 6·1 + 4 = 3 − 6 + 4 = 1."
  },
  {
   "q": "For the function y = x² − 2x − 5, the vertex has x₀ = 1. Find the value of the function at x = 4 (3 more than x₀).",
   "ans": "3",
   "hint": "Just substitute x = 4 into the function.",
   "sol": "y(4) = 4² − 2·4 − 5 = 16 − 8 − 5 = 3."
  },
  {
   "q": "For the same function y = x² − 2x − 5 (vertex x₀ = 1), find the value of the function at x = −2 (3 less than x₀).",
   "ans": "3",
   "hint": "Substitute x = −2 into the function — by symmetry the answer will match the previous one.",
   "sol": "y(−2) = (−2)² − 2·(−2) − 5 = 4 + 4 − 5 = 3 — matches y(4), since the points are symmetric about the vertex."
  },
  {
   "q": "For the function y = −x² + 4x − 1, the vertex has x₀ = 2. Find the value of the function at x = 5 (3 more than x₀).",
   "ans": "-6",
   "hint": "Substitute x = 5 into the function.",
   "sol": "y(5) = −5² + 4·5 − 1 = −25 + 20 − 1 = −6."
  },
  {
   "q": "For the function y = −x² + 4x − 1 (vertex x₀ = 2), find the value of the function at x = −1 (3 less than x₀).",
   "ans": "-6",
   "hint": "Substitute x = −1 — the answer should match the previous one by symmetry.",
   "sol": "y(−1) = −(−1)² + 4·(−1) − 1 = −1 − 4 − 1 = −6."
  },
  {
   "q": "Find the discriminant of the equation x² − 7x + 10 = 0.",
   "ans": "9",
   "hint": "D = b² − 4ac.",
   "sol": "D = (−7)² − 4·1·10 = 49 − 40 = 9."
  },
  {
   "q": "Using D = 9 (from the previous task), find the larger zero of the function y = x² − 7x + 10.",
   "ans": "5",
   "hint": "√D = 3. Substitute into the formula x = (−b ± √D)/(2a).",
   "sol": "x = (7 ± 3)/2: x₁ = 5, x₂ = 2. The larger zero is 5."
  },
  {
   "q": "Find the smaller zero of the function y = x² − 7x + 10.",
   "ans": "2",
   "hint": "The other root from the formula x = (7 ± 3)/2.",
   "sol": "x = (7 − 3)/2 = 2."
  },
  {
   "q": "Find the discriminant of the equation x² − 2x + 1 = 0.",
   "ans": "0",
   "hint": "D = b² − 4ac.",
   "sol": "D = (−2)² − 4·1·1 = 4 − 4 = 0."
  },
  {
   "q": "How many zeros does the function y = x² − 2x + 1 have?",
   "ans": "1",
   "hint": "Look at the sign of the discriminant from the previous task.",
   "sol": "D = 0, so there is exactly one zero."
  },
  {
   "q": "Find the single zero of the function y = x² − 2x + 1.",
   "ans": "1",
   "hint": "When D = 0, the zero equals x = −b/(2a).",
   "sol": "x = 2/(2·1) = 1."
  },
  {
   "q": "Find the discriminant of the equation x² + x + 3 = 0.",
   "ans": "-11",
   "hint": "D = b² − 4ac.",
   "sol": "D = 1² − 4·1·3 = 1 − 12 = −11."
  },
  {
   "q": "How many zeros does the function y = x² + x + 3 have?",
   "ans": "0",
   "hint": "Look at the sign of the discriminant from the previous task.",
   "sol": "D = −11 < 0, so there are no real zeros."
  },
  {
   "q": "Find the larger zero of the function y = x² − x − 12.",
   "ans": "4",
   "hint": "Find the discriminant, then substitute into the root formula.",
   "sol": "D = 1 + 48 = 49, √D = 7, x = (1 ± 7)/2: x₁ = 4, x₂ = −3. The larger one is 4."
  },
  {
   "q": "Find the smaller zero of the function y = x² − x − 12.",
   "ans": "-3",
   "hint": "The other root from the formula x = (1 ± 7)/2.",
   "sol": "x = (1 − 7)/2 = −3."
  },
  {
   "q": "The function y = x² − 5x + 4 has zeros x=1 and x=4, branches upward. How many integers x lie strictly between the zeros (excluding the zeros themselves)?",
   "ans": "2",
   "hint": "List the integers between 1 and 4, not including the endpoints.",
   "sol": "Between 1 and 4 lie the integers 2 and 3 — that's 2 of them."
  },
  {
   "q": "The parabola y = x² − 6x + 5 has its vertex at x₀=3, branches upward. How does the function behave for x < 3?",
   "opts": [
    "increases",
    "decreases"
   ],
   "ans": 1,
   "hint": "With branches upward, the function decreases to the left of the vertex and increases to the right.",
   "sol": "x₀ = 3, branches upward: to the left of the vertex (x < 3) the function decreases."
  },
  {
   "q": "The function y = x² − 4x + 3 has zeros x=1 and x=3 — between them the function is negative. Find the value of the function at x=2 (inside the interval).",
   "ans": "-1",
   "hint": "Substitute x=2 into the function.",
   "sol": "y(2) = 4 − 8 + 3 = −1 — indeed negative."
  },
  {
   "q": "The function y = −x² + 4x − 3 has zeros x=1 and x=3, branches downward — so between the zeros the function is positive. Find the value of the function at x=2.",
   "ans": "1",
   "hint": "Substitute x=2 into the function.",
   "sol": "y(2) = −4 + 8 − 3 = 1 — indeed positive."
  },
  {
   "q": "For the reference parabola y = x², find the value of the function at x = −5.",
   "ans": "25",
   "hint": "Just substitute x = −5 into y = x².",
   "sol": "y = (−5)² = 25."
  },
  {
   "q": "The parabola y = x² has its vertex at (0; 0). How far does this vertex shift along the y-axis if we move to the parabola y = x² + 7?",
   "ans": "7",
   "hint": "The new vertex is at (0; 7).",
   "sol": "The vertex shifts from y=0 to y=7, that is, 7 units up."
  }
 ],
 "bonus": {
  "q": "For which positive value of b does the function y = x² + bx + 9 have exactly one zero?",
  "ans": "6",
  "hint": "There is exactly one zero when the discriminant equals zero. Set up an equation in b and pick the positive root.",
  "sol": "D = b² − 4·1·9 = b² − 36. One zero occurs when D=0: b² = 36, b = ±6. Since b > 0, b = 6."
 },
 "test": [
  {
   "q": "Find the x-coordinate of the vertex of the parabola y = x² − 8x + 15.",
   "ans": "4",
   "sol": "x₀ = 8/(2·1) = 4."
  },
  {
   "q": "Find the y-coordinate of the vertex of the parabola y = x² − 8x + 15.",
   "ans": "-1",
   "sol": "y₀ = 4² − 8·4 + 15 = 16 − 32 + 15 = −1."
  },
  {
   "q": "Find the discriminant of the equation x² − 3x − 10 = 0.",
   "ans": "49",
   "sol": "D = (−3)² − 4·1·(−10) = 9 + 40 = 49."
  },
  {
   "q": "Solve the equation x² − 3x − 10 = 0 and name the larger root.",
   "ans": "5",
   "sol": "√D = 7, x = (3 ± 7)/2: x₁ = 5, x₂ = −2. The larger root is 5."
  },
  {
   "q": "Which way do the branches of the parabola y = −3x² + 2x + 1 point?",
   "opts": [
    "up",
    "down"
   ],
   "ans": 1,
   "sol": "a = −3 < 0, so the branches point downward."
  },
  {
   "q": "How many zeros does the function y = x² + 5x + 10 have?",
   "opts": [
    "0",
    "1",
    "2"
   ],
   "ans": 0,
   "sol": "D = 25 − 40 = −15 < 0, so there are no zeros."
  },
  {
   "q": "For the reference parabola y = x², find the value of the function at x = −8.",
   "ans": "64",
   "sol": "y = (−8)² = 64."
  },
  {
   "q": "The function y = x² − 6x + 8 has zeros x=2 and x=4, branches upward. Find the value of the function at x=3 (between the zeros).",
   "ans": "-1",
   "sol": "y(3) = 9 − 18 + 8 = −1 — indeed negative, as it should be between the zeros when the branches point upward."
  }
 ],
 "lab": [
  {
   "t": "Ball flight",
   "b": "Pick your own numbers a, b, c for the ball-height function y = ax² + bx + c, where a < 0 (the ball flies along a parabola and falls back down). Find the vertex — that's the moment of maximum flight height. Compute the positive zero of the function — that's the moment the ball hits the ground."
  },
  {
   "t": "A parabola on grid paper",
   "b": "Draw coordinate axes on grid paper and plot 6–7 points of the parabola y = x² − 4x + 3 by computing y for several x values from −1 to 5. Connect the points with a smooth curve — you'll get a parabola. Mark the vertex and both zeros in a different color."
  },
  {
   "t": "Your own parabola",
   "b": "Choose your own coefficients a, b, c (a — an integer from −3 to 3, not equal to 0) and build the function y = ax² + bx + c. Find the vertex, the zeros (if any), and determine for which x the function is positive and for which it is negative. Compare your parabola with a parent's or friend's — whose branches are wider?"
  },
  {
   "t": "Comparing parabola width",
   "b": "Compute tables of values for the functions y = x², y = 2x², and y = 0.5x² for the same x values (for example, −3, −2, −1, 0, 1, 2, 3). Describe in your own words how the parabola's \"width\" changes as coefficient a increases and decreases."
  }
 ],
 "steps": [
  {
   "title": "What is a quadratic function",
   "body": "<p>A quadratic function is a function of the form <b>y = ax² + bx + c</b>, where a, b, c are numbers and <b>a ≠ 0</b> must hold (if a = 0, the x² term disappears and the function becomes linear). The graph of such a function is always a special curve called a <b>parabola</b>.</p>",
   "exIdx": 0
  },
  {
   "title": "Direction of the branches",
   "body": "<h3>Direction of the branches</h3><p>The direction of the parabola's branches depends only on the sign of coefficient a: if <b>a &gt; 0</b>, the branches point upward (the parabola looks like a bowl); if <b>a &lt; 0</b>, they point downward (like a dome). For example, for the function y = 2x² − 3x + 1 the coefficient a = 2 &gt; 0, so the branches point upward; while for y = −x² + 4x the branches point downward, since a = −1 &lt; 0.</p>",
   "exIdx": [
    0,
    1
   ]
  },
  {
   "title": "The vertex of the parabola and the axis of symmetry",
   "body": "<h3>The vertex of the parabola and the axis of symmetry</h3><p>Every parabola has a vertex — its lowest point (if the branches point upward) or its highest point (if the branches point downward). Its coordinates are found by the formulas: x₀ = {-b|2a}, and y₀ is the value of the function at x₀, that is, y₀ = f(x₀). The vertical line x = x₀ passing through the vertex is called the axis of symmetry: the parabola is arranged so that its left and right halves are mirror images of each other across this line.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>In the formula x₀ = {-b|2a} the minus sign before b is often lost or forgotten altogether, especially when b itself is negative (giving two minus signs that cancel to a plus). For example, for y = x² − 6x + 5 the coefficient b = −6, and x₀ = −(−6)/2 = 3, not −6/2 = −3. Always substitute b with its own sign first, and only then flip the sign.</div>",
   "exIdx": [
    0,
    1
   ]
  },
  {
   "title": "Graphing point by point",
   "body": "<h3>Graphing point by point</h3><p>To sketch a parabola by hand, you don't need to compute dozens of points. The order is: 1) find the vertex (x₀; y₀); 2) take 2–3 more x-values arranged symmetrically around x₀ (for example, x₀ − 1 and x₀ + 1); 3) compute y for them; 4) plot all the points on the coordinate plane and connect them with a smooth parabola-shaped curve. Because of the symmetry, the y-values at x₀ − 1 and x₀ + 1 will always match — handy for checking your work.</p>",
   "exIdx": 5
  },
  {
   "title": "Zeros of the function and the discriminant",
   "body": "<h3>Zeros of the function and the discriminant</h3><p>The zeros of a function are the x-values where y = 0, that is, the points where the parabola crosses the x-axis. To find them, solve the equation ax² + bx + c = 0 using the discriminant D = b² − 4ac: if <b>D &gt; 0</b> — two zeros; if <b>D = 0</b> — one zero (the vertex lies exactly on the x-axis); if <b>D &lt; 0</b> — no zeros, and the graph never crosses the x-axis at all.</p>",
   "exIdx": [
    2,
    3
   ]
  },
  {
   "title": "Intervals of constant sign and monotonicity",
   "body": "<h3>Intervals of constant sign and monotonicity</h3><p>If a function has zeros, they split the x-axis into intervals where the function keeps a constant sign: between the zeros the sign is one value (opposite to the sign of a), and outside that interval it is the other value (matching the sign of a). Increasing and decreasing behavior is determined by the position of the vertex: if the branches point upward, the function decreases to the left of the vertex and increases to the right; if the branches point downward, it's the opposite — increasing to the left and decreasing to the right.</p>",
   "exIdx": 4
  },
  {
   "title": "The reference parabola y = x²",
   "body": "<h3>The reference parabola y = x²</h3><p>The simplest case is the function y = x² (a = 1, b = 0, c = 0): its vertex is at (0; 0), the branches point upward, and it is symmetric about the y-axis. Any other parabola y = ax² + bx + c can be thought of as \"similar\" to this reference one, just stretched, compressed, flipped, or shifted — its overall shape always stays a parabola.</p><div class=\"figure\">__SVG_QFUNC_REF_PARABOLA__</div><div class=\"note\"><span class=\"hand\">Remember</span>The sign of a decides everything important: which way the branches point (upward when a &gt; 0, downward when a &lt; 0), and what sign the function has outside the zeros (it matches the sign of a).</div>"
  }
 ]
}

CONTENT_EN.nsys = {
 "goal": "After this topic you will be able to solve systems of equations where one equation is quadratic (a parabola, a circle, or a condition on the product of two numbers) by substitution via the discriminant, understand the geometric meaning of the number of solutions, and find two numbers from their sum and product using Vieta's theorem.",
 "explain": "<p>Until now, in systems both equations were linear — a line and a line. But if at least one equation is <b>quadratic</b> (it contains x² or y²), the system is called <b>nonlinear</b>. For example: {y = x²; y = x + 2}. Solving such a system means finding all pairs of numbers (x; y) that satisfy both the first and the second equation at the same time.</p><h3>The substitution method</h3><p>It works the same way as for linear systems, except a quadratic equation appears at the end.</p><ul><li>1. From the linear equation, express one variable in terms of the other (for example, y in terms of x).</li><li>2. Substitute this expression into the nonlinear equation in place of the variable — this gives a quadratic equation in one variable.</li><li>3. Solve it using the discriminant: find x₁ and x₂ (or a single root, or see that there are no roots).</li><li>4. For <b>each</b> x found, substitute it into the linear equation and find the corresponding y.</li><li>5. Check your work: substitute both found values into BOTH original equations of the system.</li></ul><p>For example, for the system {y = x²; y = x + 2}: substitute x + 2 in place of y into the first equation — x² = x + 2, that is, x² − x − 2 = 0. D = 1 + 8 = 9, roots x₁ = 2 and x₂ = −1. For x = 2 we get y = 4, for x = −1 we get y = 1. Solutions: (2; 4) and (−1; 1).</p><h3>Geometric meaning: a parabola and a line</h3><p>If the first equation is a parabola y = x² (or something similar) and the second is a line, then the solutions of the system are the <b>intersection points</b> of the parabola's graph and the line's graph on the coordinate plane. The quadratic equation that results from the substitution \"accounts for\" how many common points these graphs have, and this is decided entirely by the discriminant:</p><ul><li><b>D &gt; 0</b> — the quadratic equation has two roots, so the line intersects the parabola at two points.</li><li><b>D = 0</b> — one root (two coinciding roots), so the line is <b>tangent</b> to the parabola at exactly one point.</li><li><b>D &lt; 0</b> — there are no real roots, so the line and the parabola don't intersect at all.</li></ul><h3>A circle and a line</h3><p>A system of the form {x² + y² = R²; y = kx + b} works the same way: the first equation is a circle of radius R centered at the origin, and the second is a line. The method of solving is the same: express y from the linear equation, substitute it into the circle's equation, get a quadratic equation in x, and its discriminant shows, just as before, whether the line intersects the circle at two points (D &gt; 0), is tangent to it (D = 0, such a line is called a <b>tangent line</b> to the circle), or misses it entirely without touching the circle (D &lt; 0).</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>The most common mistake is to find x (solve the quadratic equation) and stop there, forgetting to find the second variable y. The solution of a system is a <b>pair of numbers</b> (x; y), not a single number! And if the quadratic equation turns out to have two roots x₁ and x₂, you need to find a separate y for EACH of them — that gives two different solution pairs, not one. Losing the second root or forgetting to find y for it are equally damaging mistakes to the whole answer.</div><h3>Sum and product: Vieta's theorem for two numbers</h3><p>A separate, very convenient type of nonlinear system is when the sum and product of two numbers are known: {x + y = S; x · y = P}. Such a system can be solved by substitution (as usual), but there's a shortcut: by Vieta's theorem, x and y are the <b>roots of the quadratic equation</b> t² − St + P = 0. Solve it using the discriminant — and you find both numbers at once, without a separate substitution.</p><p>For example, {x + y = 7; x · y = 10}: set up t² − 7t + 10 = 0. D = 49 − 40 = 9, roots t₁ = 5 and t₂ = 2. So the numbers sought are 5 and 2 (which one is x and which is y doesn't matter — they're interchangeable).</p><div class=\"note\"><span class=\"hand\">Remember</span>The solution of a nonlinear system is a pair (x; y), and the quadratic equation inside the system can have two roots, one root, or no roots at all — the whole system will have exactly that many solutions (0, 1, or 2) as well.</div>",
 "examples": [
  {
   "t": "Solve the system {y = x²; y = x + 2}.",
   "s": "Substitute x + 2 in place of y into the first equation: x² = x + 2 → x² − x − 2 = 0. D = 1 + 8 = 9, √D = 3. x = (1 ± 3)/2: x₁ = 2, x₂ = −1. Find y for each root: y₁ = 2² = 4, y₂ = (−1)² = 1. Check: 2² = 4 and 4 = 2+2 ✓; (−1)² = 1 and 1 = −1+2 ✓. Answer: (2; 4) and (−1; 1).<div class=\"figure\">__SVG_NSYS_EX0_PARAB_LINE2__</div>"
  },
  {
   "t": "Solve the system {x² + y² = 25; y = x + 1}.",
   "s": "Substitute y = x+1 into the circle's equation: x² + (x+1)² = 25 → x² + x² + 2x + 1 = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0. D = 1 + 48 = 49, √D = 7. x = (−1 ± 7)/2: x₁ = 3, x₂ = −4. Find y: y₁ = 3+1 = 4, y₂ = −4+1 = −3. Check: 3²+4² = 9+16 = 25 ✓; (−4)²+(−3)² = 16+9 = 25 ✓. Answer: (3; 4) and (−4; −3).<div class=\"figure\">__SVG_NSYS_EX1_CIRCLE_LINE2__</div>"
  },
  {
   "t": "Solve the system {y = x²; y = 4x − 4} and explain what this means for the graphs.",
   "s": "x² = 4x − 4 → x² − 4x + 4 = 0 → (x−2)² = 0 → x = 2 — the only root, since D = 0. y = 2² = 4. Geometrically: the line y = 4x−4 doesn't intersect the parabola at two places but is tangent to it at exactly one point (2; 4).<div class=\"figure\">__SVG_NSYS_EX2_PARAB_TANGENT__</div>"
  },
  {
   "t": "Solve the system {y = x²; y = x − 3} and explain why there are no solutions.",
   "s": "x² = x − 3 → x² − x + 3 = 0. D = 1 − 12 = −11 &lt; 0. A negative discriminant means there are no real roots: the line lies entirely above the parabola and never intersects it, so the system has no solutions.<div class=\"figure\">__SVG_NSYS_EX3_PARAB_MISS__</div>"
  },
  {
   "t": "Solve the system {x + y = 7; x · y = 10}.",
   "s": "By Vieta's theorem, x and y are the roots of the equation t² − 7t + 10 = 0 (sum 7, product 10). D = 49 − 40 = 9, √D = 3. t = (7 ± 3)/2: t₁ = 5, t₂ = 2. Check: 5+2 = 7 ✓, 5·2 = 10 ✓. Answer: x = 5, y = 2 (or, equivalently, x = 2, y = 5).<div class=\"figure\">__SVG_NSYS_EX4_VIETA_ROOTS1__</div>"
  },
  {
   "t": "The sum of two numbers is 13, and their product is 36. Find both numbers.",
   "s": "The numbers are the roots of the equation t² − 13t + 36 = 0. D = 169 − 144 = 25, √D = 5. t = (13 ± 5)/2: t₁ = 9, t₂ = 4. Check: 9+4 = 13 ✓, 9·4 = 36 ✓. The numbers are 9 and 4.<div class=\"figure\">__SVG_NSYS_EX5_VIETA_ROOTS2__</div>"
  }
 ],
 "tasks": [
  {
   "q": "How many solutions does the system {y = x²; y = x + 2} have?",
   "ans": "2",
   "hint": "Substitute x+2 in place of y into the first equation and find the discriminant of the resulting quadratic equation.",
   "sol": "x² = x+2 → x²−x−2=0. D = 1+8 = 9 &gt; 0 — two distinct roots, so the system has two solutions."
  },
  {
   "q": "Solve the system {y = x²; y = x + 2} by substitution. Find the larger of the two roots x.",
   "ans": "2",
   "hint": "The quadratic equation is x²−x−2=0; find both roots using the discriminant.",
   "sol": "D=9, √D=3, x=(1±3)/2: x₁=2, x₂=−1. The larger root is 2."
  },
  {
   "q": "For the system {y = x²; y = x + 2}, find the value of y corresponding to the larger root x=2.",
   "ans": "4",
   "hint": "Substitute x=2 into either equation of the system.",
   "sol": "y=x²=2²=4 (check using the second equation: y=2+2=4 ✓)."
  },
  {
   "q": "Solve the system {y = x²; y = x + 2}. Find the smaller of the two roots x.",
   "ans": "-1",
   "hint": "The other root of the equation x²−x−2=0.",
   "sol": "x=(1−3)/2=−1."
  },
  {
   "q": "For the system {y = x²; y = x + 2}, find the sum of the x-coordinates of both intersection points of the graphs.",
   "ans": "1",
   "hint": "Add both roots x you found.",
   "sol": "x₁+x₂ = 2+(−1) = 1."
  },
  {
   "q": "Solve the system {y = x²; y = 2x + 3} by substitution. Find the larger root x.",
   "ans": "3",
   "hint": "Substitute 2x+3 in place of y: x²=2x+3 → x²−2x−3=0.",
   "sol": "D=4+12=16, √D=4, x=(2±4)/2: x₁=3, x₂=−1. The larger root is 3."
  },
  {
   "q": "For the system {y = x²; y = 2x + 3}, find y corresponding to the root found, x=3.",
   "ans": "9",
   "hint": "Substitute x=3 into y=x².",
   "sol": "y=3²=9 (check: y=2·3+3=9 ✓)."
  },
  {
   "q": "For the system {y = x²; y = 2x + 3}, find the product of the x-coordinates of both intersection points.",
   "ans": "-3",
   "hint": "The roots of the equation x²−2x−3=0 are 3 and −1.",
   "sol": "3 · (−1) = −3."
  },
  {
   "q": "Solve the system {y = x²; x + y = 6}. Find the larger value of y among the solutions.",
   "ans": "9",
   "hint": "Express y=6−x and substitute into y=x².",
   "sol": "x²=6−x → x²+x−6=0. D=1+24=25, √D=5, x=(−1±5)/2: x₁=2, x₂=−3. y=x²: 4 and 9. The larger value of y is 9."
  },
  {
   "q": "For the system {y = x²; x + y = 6}, find the sum of the y-coordinates of both intersection points.",
   "ans": "13",
   "hint": "Find both values of y (4 and 9 from the previous task) and add them.",
   "sol": "4+9=13."
  },
  {
   "q": "How many solutions does the system {y = x²; y = 4x − 4} have?",
   "ans": "1",
   "hint": "Set up the quadratic equation and find its discriminant.",
   "sol": "x²=4x−4 → x²−4x+4=0. D=16−16=0 — exactly one root, so the system has one solution (the line is tangent to the parabola)."
  },
  {
   "q": "Solve the system {y = x²; y = 4x − 4}. What is the single root x equal to?",
   "ans": "2",
   "hint": "When D=0, the equation x²−4x+4=0 factors as a perfect square.",
   "sol": "x²−4x+4=0 → (x−2)²=0 → x=2."
  },
  {
   "q": "How many solutions does the system {y = x²; y = x − 3} have?",
   "ans": "0",
   "hint": "Set up the equation x²−x+3=0 and find the discriminant.",
   "sol": "D=1−12=−11 &lt; 0 — no real roots, so the line and the parabola don't intersect, and there are no solutions."
  },
  {
   "q": "Solve the system {y = x²; y = 5x + 6}. Find the larger root x.",
   "ans": "6",
   "hint": "Set up the equation x²−5x−6=0 and find the discriminant.",
   "sol": "D=25+24=49, √D=7, x=(5±7)/2: x₁=6, x₂=−1. The larger root is 6."
  },
  {
   "q": "For the system {y = x²; y = 5x + 6}, find the smaller value of y among the solutions.",
   "ans": "1",
   "hint": "Find both values of y by substituting both roots x (6 and −1) into y=x².",
   "sol": "y(6)=36, y(−1)=1. The smaller value of y is 1."
  },
  {
   "q": "How many solutions does the system {x² + y² = 25; y = x + 1} have?",
   "ans": "2",
   "hint": "Substitute y=x+1 into the circle's equation and find the discriminant of the resulting quadratic equation.",
   "sol": "x²+(x+1)²=25 → 2x²+2x−24=0 → x²+x−12=0. D=1+48=49 &gt; 0 — two solutions."
  },
  {
   "q": "Solve the system {x² + y² = 25; y = x + 1} by substitution. Find the larger root x.",
   "ans": "3",
   "hint": "The equation is x²+x−12=0, D=49.",
   "sol": "√D=7, x=(−1±7)/2: x₁=3, x₂=−4. The larger root is 3."
  },
  {
   "q": "For the system {x² + y² = 25; y = x + 1}, find the value of y corresponding to the root x=3.",
   "ans": "4",
   "hint": "Substitute x=3 into y=x+1.",
   "sol": "y=3+1=4 (check: 3²+4²=9+16=25 ✓)."
  },
  {
   "q": "For the system {x² + y² = 25; y = x + 1}, find the sum of the x-coordinates of both intersection points with the circle.",
   "ans": "-1",
   "hint": "Add both roots of the equation x²+x−12=0.",
   "sol": "x₁+x₂ = 3+(−4) = −1."
  },
  {
   "q": "Solve the system {x² + y² = 25; x + y = 7}. Find the larger root x.",
   "ans": "4",
   "hint": "Express y=7−x and substitute into the circle's equation.",
   "sol": "x²+(7−x)²=25 → 2x²−14x+24=0 → x²−7x+12=0. D=49−48=1, √D=1, x=(7±1)/2: x₁=4, x₂=3. The larger root is 4."
  },
  {
   "q": "For the system {x² + y² = 25; x + y = 7}, find the smaller value of y among the solutions.",
   "ans": "3",
   "hint": "Find both values of y=7−x for the roots x=4 and x=3.",
   "sol": "y(4)=3, y(3)=4. The smaller value of y is 3."
  },
  {
   "q": "How many solutions does the system {x² + y² = 25; y = 5} have?",
   "ans": "1",
   "hint": "Substitute y=5 into the circle's equation.",
   "sol": "x²+25=25 → x²=0 → x=0 — exactly one root. The line y=5 is tangent to the circle at its topmost point."
  },
  {
   "q": "Solve the system {x² + y² = 25; y = 5}. What is the single root x equal to?",
   "ans": "0",
   "hint": "See the previous task.",
   "sol": "x²=0 → x=0."
  },
  {
   "q": "Solve the system {x + y = 7; x · y = 10}. Find the larger of the numbers x and y.",
   "ans": "5",
   "hint": "By Vieta's theorem, x and y are the roots of the equation t²−7t+10=0.",
   "sol": "D=49−40=9, √D=3, t=(7±3)/2: t₁=5, t₂=2. The larger number is 5."
  },
  {
   "q": "For the system {x + y = 7; x · y = 10}, find the smaller of the numbers.",
   "ans": "2",
   "hint": "The other root of the equation t²−7t+10=0.",
   "sol": "t=(7−3)/2=2. Check: 5+2=7 ✓, 5·2=10 ✓."
  },
  {
   "q": "Solve the system {x + y = 9; x · y = 20}. Find the larger of the numbers.",
   "ans": "5",
   "hint": "Set up the equation t²−9t+20=0.",
   "sol": "D=81−80=1, √D=1, t=(9±1)/2: t₁=5, t₂=4. The larger number is 5."
  },
  {
   "q": "For the system {x + y = 9; x · y = 20}, find the smaller of the numbers.",
   "ans": "4",
   "hint": "The other root of the equation t²−9t+20=0.",
   "sol": "t=(9−1)/2=4. Check: 5+4=9 ✓, 5·4=20 ✓."
  },
  {
   "q": "The sum of two numbers is 13, and their product is 36. Find the larger number.",
   "ans": "9",
   "hint": "The numbers are the roots of the equation t²−13t+36=0 (by Vieta's theorem).",
   "sol": "D=169−144=25, √D=5, t=(13±5)/2: t₁=9, t₂=4. The larger number is 9."
  },
  {
   "q": "For the numbers in the previous task (sum 13, product 36), find the smaller number.",
   "ans": "4",
   "hint": "The other root of the equation t²−13t+36=0.",
   "sol": "t=(13−5)/2=4. Check: 9+4=13 ✓, 9·4=36 ✓."
  },
  {
   "q": "The perimeter of a rectangle is 20 cm, and its area is 21 cm². Find the larger side (in cm).",
   "ans": "7",
   "hint": "The semi-perimeter is 10 — that's the sum of the sides. The sides are the roots of the equation t²−10t+21=0.",
   "sol": "D=100−84=16, √D=4, t=(10±4)/2: t₁=7, t₂=3. The larger side is 7 cm."
  },
  {
   "q": "For the rectangle in the previous task (perimeter 20 cm, area 21 cm²), find the smaller side (in cm).",
   "ans": "3",
   "hint": "The other root of the equation t²−10t+21=0.",
   "sol": "t=(10−4)/2=3. Check: 2·(7+3)=20 ✓, 7·3=21 ✓."
  },
  {
   "q": "The difference of two numbers is 3, and their product is 28. Find the larger number (both numbers are positive).",
   "ans": "7",
   "hint": "Express x=y+3 and substitute into x·y=28 — this gives a quadratic equation in y.",
   "sol": "(y+3)y=28 → y²+3y−28=0. D=9+112=121, √D=11, y=(−3±11)/2: y=4 or y=−7. Take the positive y=4, then x=4+3=7."
  }
 ],
 "bonus": {
  "q": "For which value of m does the system {y = x²; y = x + m} have exactly one solution?",
  "ans": "-1/4",
  "hint": "The system has exactly one solution when the discriminant of the resulting quadratic equation equals zero.",
  "sol": "x² = x+m → x²−x−m=0. D = 1 − 4·1·(−m) = 1+4m. One solution occurs when D=0: 1+4m=0 → m = −1/4."
 },
 "test": [
  {
   "q": "How many solutions does the system {y = x²; y = x + 6} have?",
   "opts": [
    "0",
    "1",
    "2"
   ],
   "ans": 2,
   "sol": "x²=x+6 → x²−x−6=0. D=1+24=25 &gt; 0 — two solutions."
  },
  {
   "q": "Solve the system {y = x²; y = x + 6}. Find the larger root x.",
   "ans": "3",
   "sol": "D=25, √D=5, x=(1±5)/2: x₁=3, x₂=−2. The larger root is 3."
  },
  {
   "q": "For the system {y = x²; y = x + 6}, find the value of y corresponding to the root x=3.",
   "ans": "9",
   "sol": "y=3²=9 (check: 3+6=9 ✓)."
  },
  {
   "q": "Solve the system {x² + y² = 25; y = x − 7}. Find the larger root x.",
   "ans": "4",
   "sol": "x²+(x−7)²=25 → 2x²−14x+24=0 → x²−7x+12=0. D=49−48=1, √D=1, x=(7±1)/2: x₁=4, x₂=3. The larger root is 4."
  },
  {
   "q": "For the system {x² + y² = 25; y = x − 7}, find the value of y corresponding to the root x=4.",
   "ans": "-3",
   "sol": "y=4−7=−3 (check: 4²+(−3)²=16+9=25 ✓)."
  },
  {
   "q": "How many solutions does the system {y = x²; y = −2x − 1} have?",
   "opts": [
    "0",
    "1",
    "2"
   ],
   "ans": 1,
   "sol": "x²=−2x−1 → x²+2x+1=0 → (x+1)²=0. One root (D=0), so one solution."
  },
  {
   "q": "Solve the system {x + y = 11; x · y = 24}. Find the larger of the numbers.",
   "ans": "8",
   "sol": "t²−11t+24=0. D=121−96=25, √D=5, t=(11±5)/2: t₁=8, t₂=3. The larger number is 8."
  },
  {
   "q": "For the system {x + y = 11; x · y = 24}, find the smaller of the numbers.",
   "ans": "3",
   "sol": "t=(11−5)/2=3. Check: 8+3=11 ✓, 8·3=24 ✓."
  }
 ],
 "lab": [
  {
   "t": "Intersection of a parabola and a line on grid paper",
   "b": "On grid paper, graph y = x² (plot points at x = −3, −2, −1, 0, 1, 2, 3) and the line y = x + 2 using two points. Mark the intersection points of the graphs on your drawing and compare their coordinates with what you get by solving the system {y = x²; y = x + 2} by substitution."
  },
  {
   "t": "A circle and a line with compass and ruler",
   "b": "Use a compass to draw the circle x² + y² = 25 (radius 5 grid squares from the origin) and use a ruler to draw the line y = x + 1 through suitable points. Mark both intersection points on your drawing and compare their coordinates with the solution of the system {x² + y² = 25; y = x + 1} obtained by substitution."
  },
  {
   "t": "Guess the numbers from their sum and product",
   "b": "With a parent or friend, each pick two numbers and tell each other only their sum and product (for example, sum 9, product 20). The other player should set up the quadratic equation t² − (sum)·t + (product) = 0 and solve it using the discriminant to find both chosen numbers. Make the game harder by allowing negative numbers."
  },
  {
   "t": "Ball trajectory and a wall's height",
   "b": "Imagine a ball flying along the parabola y = −x² + 4x (x is the distance, y is the height, both in meters), with a 3-meter-tall wall in its path (the line y = 3). Set up the system {y = −x² + 4x; y = 3} and solve it by substitution — find the distance x at which the ball is at the wall's height (this happens twice: on the way up and on the way down)."
  }
 ],
 "steps": [
  {
   "title": "What is a nonlinear system",
   "body": "<p>Until now, in systems both equations were linear — a line and a line. But if at least one equation is <b>quadratic</b> (it contains x² or y²), the system is called <b>nonlinear</b>. For example: {y = x²; y = x + 2}. Solving such a system means finding all pairs of numbers (x; y) that satisfy both the first and the second equation at the same time.</p><p>See what the solutions of such a system look like on the coordinate plane:</p>",
   "exIdx": 0
  },
  {
   "title": "The substitution method",
   "body": "<h3>The substitution method</h3><p>It works the same way as for linear systems, except a quadratic equation appears at the end.</p><ul><li>1. From the linear equation, express one variable in terms of the other (for example, y in terms of x).</li><li>2. Substitute this expression into the nonlinear equation in place of the variable — this gives a quadratic equation in one variable.</li><li>3. Solve it using the discriminant: find x₁ and x₂ (or a single root, or see that there are no roots).</li><li>4. For <b>each</b> x found, substitute it into the linear equation and find the corresponding y.</li><li>5. Check your work: substitute both found values into BOTH original equations of the system.</li></ul><p>For example, for the system {y = x²; y = x + 2}: substitute x + 2 in place of y into the first equation — x² = x + 2, that is, x² − x − 2 = 0. D = 1 + 8 = 9, roots x₁ = 2 and x₂ = −1. For x = 2 we get y = 4, for x = −1 we get y = 1. Solutions: (2; 4) and (−1; 1).</p>",
   "exIdx": 0
  },
  {
   "title": "Geometric meaning: a parabola and a line",
   "body": "<h3>Geometric meaning: a parabola and a line</h3><p>If the first equation is a parabola y = x² (or something similar) and the second is a line, then the solutions of the system are the <b>intersection points</b> of the parabola's graph and the line's graph on the coordinate plane. The quadratic equation that results from the substitution \"accounts for\" how many common points these graphs have, and this is decided entirely by the discriminant:</p><ul><li><b>D &gt; 0</b> — the quadratic equation has two roots, so the line intersects the parabola at two points.</li><li><b>D = 0</b> — one root (two coinciding roots), so the line is <b>tangent</b> to the parabola at exactly one point.</li><li><b>D &lt; 0</b> — there are no real roots, so the line and the parabola don't intersect at all.</li></ul><p>Compare all three cases in the examples below — intersection at two points, tangency, and no common points at all:</p>",
   "exIdx": [
    0,
    2,
    3
   ]
  },
  {
   "title": "A circle and a line",
   "body": "<h3>A circle and a line</h3><p>A system of the form {x² + y² = R²; y = kx + b} works the same way: the first equation is a circle of radius R centered at the origin, and the second is a line. The method of solving is the same: express y from the linear equation, substitute it into the circle's equation, get a quadratic equation in x, and its discriminant shows, just as before, whether the line intersects the circle at two points (D &gt; 0), is tangent to it (D = 0, such a line is called a <b>tangent line</b> to the circle), or misses it entirely without touching the circle (D &lt; 0).</p>",
   "exIdx": 1
  },
  {
   "title": "Common mistake: losing y",
   "body": "<div class=\"warn\"><span class=\"hand\">Common mistake</span>The most common mistake is to find x (solve the quadratic equation) and stop there, forgetting to find the second variable y. The solution of a system is a <b>pair of numbers</b> (x; y), not a single number! And if the quadratic equation turns out to have two roots x₁ and x₂, you need to find a separate y for EACH of them — that gives two different solution pairs, not one. Losing the second root or forgetting to find y for it are equally damaging mistakes to the whole answer.</div><p>In the worked examples below, you can see that a separate y is computed for each of the two x values found:</p>",
   "exIdx": [
    0,
    1
   ]
  },
  {
   "title": "Sum and product: Vieta's theorem",
   "body": "<h3>Sum and product: Vieta's theorem for two numbers</h3><p>A separate, very convenient type of nonlinear system is when the sum and product of two numbers are known: {x + y = S; x · y = P}. Such a system can be solved by substitution (as usual), but there's a shortcut: by Vieta's theorem, x and y are the <b>roots of the quadratic equation</b> t² − St + P = 0. Solve it using the discriminant — and you find both numbers at once, without a separate substitution.</p><p>For example, {x + y = 7; x · y = 10}: set up t² − 7t + 10 = 0. D = 49 − 40 = 9, roots t₁ = 5 and t₂ = 2. So the numbers sought are 5 and 2 (which one is x and which is y doesn't matter — they're interchangeable).</p>",
   "exIdx": 4
  },
  {
   "title": "Remember: how many solutions a system has",
   "body": "<div class=\"note\"><span class=\"hand\">Remember</span>The solution of a nonlinear system is a pair (x; y), and the quadratic equation inside the system can have two roots, one root, or no roots at all — the whole system will have exactly that many solutions (0, 1, or 2) as well.</div><p>The same idea works for sum-and-product problems too — Vieta's quadratic equation gives both numbers at once:</p>",
   "exIdx": 5
  }
 ]
}

CONTENT_EN.prog = {
 "goal": "After this topic you will be able to find any term and the sum of the first n terms of arithmetic and geometric progressions and apply this to practical problems.",
 "explain": "<p>A numerical sequence is a set of numbers that follow one another in a specific order and are numbered: a₁ (first term), a₂ (second term), a₃ and so on. For example, 2, 5, 8, 11, 14 is a sequence of five numbers.</p><h3>Arithmetic progression</h3><p>An arithmetic progression is a sequence in which each next term is obtained from the previous one by adding the same number d — it is called the <b>common difference of the progression</b>. For example, 2, 5, 8, 11, 14 is an arithmetic progression with common difference d = 3, because each next number is 3 more than the previous one (5−2=3, 8−5=3, and so on). The common difference can also be negative: 20, 14, 8, 2 is also an arithmetic progression, here d = −6, meaning the numbers decrease.</p><h3>Formula for the n-th term of an arithmetic progression</h3><p>To avoid adding d many times in a row, we use the formula: <b>aₙ = a₁ + (n−1)·d</b>. It says: to get the n-th term, you need to add the common difference d to the first term exactly (n−1) times — that is exactly how many \"steps\" separate the first term from the n-th.</p><p>For example, for a progression with a₁=3 and d=4, the fifth term equals a₅ = 3 + 4·4 = 19 (4 steps from the first term to the fifth).</p><h3>Sum of the first n terms of an arithmetic progression</h3><p>To add up many terms in a row, you don't have to add them one by one: the sum of the first n terms of an arithmetic progression equals <b>Sₙ = {a₁+aₙ|2} · n</b> — that is, the arithmetic mean of the first and last of these terms, multiplied by their number. This works because in an arithmetic progression the first term with the last, the second with the second-to-last, and so on, always add up to the same number.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>In the formula for the n-th term of a geometric progression bₙ = b₁ · qⁿ⁻¹, the exponent is (n−1), not n! For example, for the progression 3, 6, 12, 24, ... the third term is b₃ = 3·2² = 12 (exponent 2, not 3) — precisely because there are only two \"steps\" of multiplying by q from the first term to the third. If you mistakenly substitute qⁿ, the answer will be q times larger than the correct one.</div><h3>Geometric progression</h3><p>A geometric progression is a sequence in which each next term is obtained from the previous one by multiplying by the same number q ≠ 0 — it is called the <b>common ratio of the progression</b>. For example, 3, 6, 12, 24, 48 is a geometric progression with common ratio q = 2, because each next number is 2 times the previous one. If |q| is less than 1 (for example, q = {1|2}), the progression decreases: 16, 8, 4, 2, 1.</p><h3>Formula for the n-th term of a geometric progression</h3><p>By analogy with the arithmetic progression: <b>bₙ = b₁ · qⁿ⁻¹</b>. To go from the first term to the n-th, you need to multiply by q (n−1) times. For example, for b₁=3 and q=2, the fourth term equals b₄ = 3·2³ = 3·8 = 24.</p><h3>Sum of the first n terms of a geometric progression</h3><p>If q ≠ 1, the sum of the first n terms is calculated by the formula <b>Sₙ = {b₁(qⁿ−1)|q−1}</b>. For example, for b₁=1, q=2, n=4: S₄ = {1·(2⁴−1)|2−1} = {15|1} = 15 — and indeed, 1+2+4+8=15.</p><p>In practice, an arithmetic progression describes uniform growth or decrease by the same number — for example, the number of bricks in the rows of a stack, if each next row is shorter than the previous one by a fixed number of bricks, or a train schedule with equal intervals. A geometric progression describes growth or decrease by the same factor — for example, a cell dividing in half every hour, the growth of a bank deposit with interest, or the height a ball reaches after each bounce, if it loses the same fraction of its height each time.</p><div class=\"note\"><span class=\"hand\">Remember</span>If q = 1, all terms of the geometric progression are equal to each other (b₁, b₁, b₁, ...), and the formula Sₙ={b₁(qⁿ−1)|q−1} doesn't work (it would give division by 0) — in this case the sum is simply calculated as Sₙ = n · b₁.</div>",
 "examples": [
  {
   "t": "Arithmetic progression: a₁=5, d=4. Find a₆.",
   "s": "aₙ = a₁ + (n−1)d. a₆ = 5 + 4·(6−1) = 5 + 4·5 = 5 + 20 = 25.<div class=\"figure\">__SVG_PROG_EX0_AP_BARS__</div>"
  },
  {
   "t": "For the same progression (a₁=5, d=4, a₆=25) find the sum of the first 6 terms.",
   "s": "Sₙ = {a₁+aₙ|2}·n. S₆ = {5+25|2}·6 = {30|2}·6 = 15·6 = 90.<div class=\"figure\">__SVG_PROG_EX1_AP_SUM_PAIRS__</div>"
  },
  {
   "t": "In the first row of a greenhouse there are 8 plants, and each next row has 3 more plants. How many plants are in the 5th row?",
   "s": "This is an arithmetic progression: a₁=8, d=3. a₅ = 8 + 3·(5−1) = 8 + 12 = 20 plants.<div class=\"figure\">__SVG_PROG_EX2_AP_ROWS__</div>"
  },
  {
   "t": "Geometric progression: b₁=2, q=3. Find b₄.",
   "s": "bₙ = b₁·qⁿ⁻¹. b₄ = 2·3³ = 2·27 = 54.<div class=\"figure\">__SVG_PROG_EX3_GP_BARS__</div>"
  },
  {
   "t": "For the same progression (b₁=2, q=3) find the sum of the first 4 terms.",
   "s": "Sₙ = {b₁(qⁿ−1)|q−1}. S₄ = {2·(3⁴−1)|3−1} = {2·80|2} = {160|2} = 80. Check: 2+6+18+54=80.<div class=\"figure\">__SVG_PROG_EX4_GP_SUM_STAIR__</div>"
  },
  {
   "t": "A cell divides into two every hour. How many cells will there be after 4 hours, if there was 1 cell at the start?",
   "s": "This is a geometric progression with b₁=1 (the cell at time 0 hours) and q=2. After 4 hours this is the 5th term: b₅ = 1·2⁴ = 16 cells.<div class=\"figure\">__SVG_PROG_EX5_GP_CELLS__</div>"
  }
 ],
 "tasks": [
  {
   "q": "Arithmetic progression: a₁=3, d=4. Find a₅.",
   "ans": "19",
   "hint": "aₙ = a₁ + (n−1)d.",
   "sol": "a₅ = 3 + 4·4 = 3 + 16 = 19."
  },
  {
   "q": "Arithmetic progression: a₁=-2, d=5. Find a₇.",
   "ans": "28",
   "hint": "aₙ = a₁ + (n−1)d.",
   "sol": "a₇ = −2 + 5·6 = −2 + 30 = 28."
  },
  {
   "q": "Arithmetic progression: a₁=10, d=-3. Find a₆.",
   "ans": "-5",
   "hint": "aₙ = a₁ + (n−1)d, the common difference is negative.",
   "sol": "a₆ = 10 + (−3)·5 = 10 − 15 = −5."
  },
  {
   "q": "Arithmetic progression: 2, 5, 8, 11, ... Find the common difference d.",
   "ans": "3",
   "hint": "d is the difference between neighboring terms.",
   "sol": "d = 5 − 2 = 3 (check: 8−5=3)."
  },
  {
   "q": "Arithmetic progression: 20, 14, 8, 2, ... Find the common difference d.",
   "ans": "-6",
   "hint": "d is the difference between neighboring terms, it can be negative.",
   "sol": "d = 14 − 20 = −6 (check: 8−14=−6)."
  },
  {
   "q": "Arithmetic progression: a₁=7, d=2. Find a₁₀.",
   "ans": "25",
   "hint": "aₙ = a₁ + (n−1)d.",
   "sol": "a₁₀ = 7 + 2·9 = 7 + 18 = 25."
  },
  {
   "q": "Arithmetic progression: a₁=1, d=4. For what number n is the term of the progression equal to 41?",
   "ans": "11",
   "hint": "Substitute aₙ=41 into the formula and solve the equation for n.",
   "sol": "41 = 1 + 4(n−1) ⇒ 40 = 4(n−1) ⇒ n−1=10 ⇒ n=11."
  },
  {
   "q": "An arithmetic progression begins like this: a₁=5, a₂=9. Find a₄.",
   "ans": "17",
   "hint": "First find the common difference d = a₂ − a₁.",
   "sol": "d=9−5=4. a₄ = 5 + 4·3 = 5+12 = 17."
  },
  {
   "q": "In an arithmetic progression a₅=17, d=3. Find a₁.",
   "ans": "5",
   "hint": "a₅ = a₁ + 4d — express a₁.",
   "sol": "17 = a₁ + 3·4 ⇒ 17 = a₁+12 ⇒ a₁=5."
  },
  {
   "q": "Arithmetic progression: a₁=2, d=3. Find the sum of the first 10 terms.",
   "ans": "155",
   "hint": "First find a₁₀, then use Sₙ=(a₁+aₙ)/2·n.",
   "sol": "a₁₀=2+3·9=29. S₁₀={2+29|2}·10=15.5·10=155."
  },
  {
   "q": "Arithmetic progression: a₁=4, d=5. Find the sum of the first 6 terms.",
   "ans": "99",
   "hint": "First find a₆, then use the sum formula.",
   "sol": "a₆=4+5·5=29. S₆={4+29|2}·6=16.5·6=99."
  },
  {
   "q": "Find the sum of the first 20 odd natural numbers: 1+3+5+...+39.",
   "ans": "400",
   "hint": "This is an arithmetic progression with a₁=1, d=2, n=20. Find a₂₀, then the sum.",
   "sol": "a₂₀=1+2·19=39. S₂₀={1+39|2}·20=20·20=400."
  },
  {
   "q": "The bottom row of a stack has 50 bricks, and each next row has 2 fewer bricks. How many bricks are in the 8th row?",
   "ans": "36",
   "hint": "This is an arithmetic progression with a₁=50, d=-2. Use the formula for the n-th term.",
   "sol": "a₈=50+(−2)·7=50−14=36."
  },
  {
   "q": "For the brick stack from the previous problem (a₁=50, d=-2, 8 rows) find the total number of bricks in all 8 rows.",
   "ans": "344",
   "hint": "Use a₈=36 (from the previous problem) and the sum formula.",
   "sol": "S₈={50+36|2}·8=43·8=344."
  },
  {
   "q": "In an arithmetic progression a₁=-7, a₁₀=20. Find the common difference d.",
   "ans": "3",
   "hint": "a₁₀ = a₁ + 9d — express d.",
   "sol": "20 = −7 + 9d ⇒ 27 = 9d ⇒ d=3."
  },
  {
   "q": "Arithmetic progression: 5, 9, 13, 17, ... What number comes next?",
   "opts": [
    "19",
    "20",
    "21",
    "25"
   ],
   "ans": 2,
   "hint": "Find the common difference d and add it to the last known number.",
   "sol": "d=4. The next number: 17+4=21."
  },
  {
   "q": "Geometric progression: b₁=3, q=2. Find b₄.",
   "ans": "24",
   "hint": "bₙ = b₁·qⁿ⁻¹.",
   "sol": "b₄ = 3·2³ = 3·8 = 24."
  },
  {
   "q": "Geometric progression: b₁=2, q=3. Find b₅.",
   "ans": "162",
   "hint": "bₙ = b₁·qⁿ⁻¹.",
   "sol": "b₅ = 2·3⁴ = 2·81 = 162."
  },
  {
   "q": "Geometric progression: b₁=16, q=1/2. Find b₄.",
   "ans": "2",
   "hint": "bₙ = b₁·qⁿ⁻¹, q is a fraction.",
   "sol": "b₄ = 16·(1/2)³ = 16·(1/8) = 2."
  },
  {
   "q": "Geometric progression: b₁=-2, q=-3. Find b₄.",
   "ans": "54",
   "hint": "bₙ = b₁·qⁿ⁻¹, don't forget about the signs with a negative q.",
   "sol": "b₄ = −2·(−3)³ = −2·(−27) = 54."
  },
  {
   "q": "A geometric progression begins like this: b₁=5, b₂=15. Find q.",
   "ans": "3",
   "hint": "q is the ratio of the second term to the first.",
   "sol": "q = 15/5 = 3."
  },
  {
   "q": "In a geometric progression b₂=6, b₃=18. Find b₁.",
   "ans": "2",
   "hint": "First find q = b₃/b₂, then b₁ = b₂/q.",
   "sol": "q=18/6=3. b₁=6/3=2."
  },
  {
   "q": "Geometric progression: b₁=1, q=2. Find the sum of the first 4 terms.",
   "ans": "15",
   "hint": "Sₙ = b₁(qⁿ−1)/(q−1).",
   "sol": "S₄ = 1·(2⁴−1)/(2−1) = 15/1 = 15 (check: 1+2+4+8=15)."
  },
  {
   "q": "Geometric progression: b₁=3, q=2. Find the sum of the first 5 terms.",
   "ans": "93",
   "hint": "Sₙ = b₁(qⁿ−1)/(q−1).",
   "sol": "S₅ = 3·(2⁵−1)/(2−1) = 3·31 = 93."
  },
  {
   "q": "Geometric progression: b₁=4, q=3. Find the sum of the first 3 terms.",
   "ans": "52",
   "hint": "Sₙ = b₁(qⁿ−1)/(q−1).",
   "sol": "S₃ = 4·(3³−1)/(3−1) = 4·26/2 = 4·13 = 52 (check: 4+12+36=52)."
  },
  {
   "q": "Geometric progression: b₁=16, q=1/2. Find the sum of the first 4 terms.",
   "ans": "30",
   "hint": "Sₙ = b₁(qⁿ−1)/(q−1), q is a fraction.",
   "sol": "S₄ = 16·((1/2)⁴−1)/((1/2)−1) = 16·(−15/16)/(−1/2) = 16·15/8 = 30 (check: 16+8+4+2=30)."
  },
  {
   "q": "A cell divides into two every hour. How many cells will there be after 6 hours, if there was 1 cell at the start?",
   "ans": "64",
   "hint": "This is a geometric progression with b₁=1 (at time 0 hours), q=2. After 6 hours this is the 7th term.",
   "sol": "b₇ = 1·2⁶ = 64 cells."
  },
  {
   "q": "A bank deposit is 1000 rubles, and each year the amount increases by a factor of 1.1 (by 10%). How many rubles will be in the deposit after 3 years?",
   "ans": "1331",
   "hint": "This is a geometric progression with b₁=1000 (at time 0 years), q=1.1. After 3 years this is the 4th term.",
   "sol": "b₄ = 1000·1.1³ = 1000·1.331 = 1331 rubles."
  },
  {
   "q": "A ball fell from a height of 100 m, and after each bounce it rises to half the height of the previous bounce. To what height (in m) will it rise after the 3rd bounce?",
   "ans": "12.5",
   "hint": "This is a geometric progression with b₁=100 (the drop height), q=1/2. After the 3rd bounce this is the 4th term.",
   "sol": "b₄ = 100·(1/2)³ = 100/8 = 12.5 m."
  },
  {
   "q": "In a geometric progression b₁=81, b₅=1, all terms are positive. Find q.",
   "ans": "1/3",
   "hint": "b₅ = b₁·q⁴ — express q⁴, then q.",
   "sol": "1 = 81·q⁴ ⇒ q⁴=1/81 ⇒ q=1/3 (the positive value)."
  },
  {
   "q": "Geometric progression: b₁=2, q=-2. Find b₅.",
   "ans": "32",
   "hint": "bₙ = b₁·qⁿ⁻¹, a negative number raised to an even power is positive.",
   "sol": "b₅ = 2·(−2)⁴ = 2·16 = 32."
  },
  {
   "q": "Which of the sequences is a geometric progression?",
   "opts": [
    "2, 4, 6, 8, ...",
    "3, 6, 12, 24, ...",
    "1, 1, 2, 3, 5, ...",
    "5, 5, 5, 6, 6, 6, ..."
   ],
   "ans": 1,
   "hint": "In a geometric progression, each next term is obtained by multiplying the previous one by the same number.",
   "sol": "3, 6, 12, 24 — each term is 2 times the previous one (q=2). The other sequences don't fit: the first is arithmetic, the third and fourth have no constant multiplier."
  }
 ],
 "bonus": {
  "q": "The first, third, and ninth terms of an arithmetic progression with common difference d≠0 (in that same order) form a geometric progression. It is known that a₁=2. Find d.",
  "ans": "2",
  "hint": "In a geometric progression, the square of the middle term equals the product of the outer ones: a₃²=a₁·a₉. Express a₃ and a₉ in terms of a₁ and d, substitute, and solve the equation for d.",
  "sol": "a₃=2+2d, a₉=2+8d. Condition: (2+2d)²=2·(2+8d). Expanding: 4+8d+4d²=4+16d ⇒ 4d²−8d=0 ⇒ 4d(d−2)=0 ⇒ d=0 or d=2. Since d≠0, we get d=2. Check: a₁=2, a₃=6, a₉=18 — indeed 6²=36=2·18."
 },
 "test": [
  {
   "q": "Arithmetic progression: a₁=4, d=3. Find a₈.",
   "ans": "25",
   "sol": "a₈=4+3·7=4+21=25."
  },
  {
   "q": "Arithmetic progression: 100, 95, 90, ... Find the common difference d.",
   "ans": "-5",
   "sol": "d=95−100=−5."
  },
  {
   "q": "Find the sum of the first 10 odd natural numbers: 1+3+5+...+19.",
   "ans": "100",
   "sol": "This is an arithmetic progression a₁=1, d=2. a₁₀=1+2·9=19. S₁₀={1+19|2}·10=100."
  },
  {
   "q": "Geometric progression: b₁=2, q=4. Find b₄.",
   "ans": "128",
   "sol": "b₄=2·4³=2·64=128."
  },
  {
   "q": "Geometric progression: b₁=10, q=1/2. Find the sum of the first 3 terms.",
   "ans": "17.5",
   "sol": "S₃=10·((1/2)³−1)/((1/2)−1)=10·(−7/8)/(−1/2)=10·7/4=17.5 (check: 10+5+2.5=17.5)."
  },
  {
   "q": "If the common ratio of a geometric progression is q=1, what is the sum of the first n terms equal to?",
   "opts": [
    "b₁",
    "n·b₁",
    "b₁/n",
    "b₁ⁿ"
   ],
   "ans": 1,
   "sol": "When q=1, all terms equal b₁, so their sum is n·b₁."
  },
  {
   "q": "A bank deposit is 500 rubles, and each year the amount increases by a factor of 1.2 (by 20%). How many rubles will be in the deposit after 2 years?",
   "ans": "720",
   "sol": "This is a geometric progression with b₁=500, q=1.2. After 2 years this is the 3rd term: b₃=500·1.2²=500·1.44=720."
  },
  {
   "q": "Arithmetic progression: a₁=7, d=-3. Find a₆.",
   "ans": "-8",
   "sol": "a₆=7+(−3)·5=7−15=−8."
  }
 ],
 "lab": [
  {
   "t": "Stack of bricks or jars",
   "b": "Build a pyramid at home out of identical objects (blocks, jars, books) so that each next row has the same number fewer objects than the previous one. Count the total number of objects using the arithmetic progression sum formula and compare it with counting directly row by row."
  },
  {
   "t": "Folding a sheet of paper in half",
   "b": "Take a long strip of paper and fold it in half several times, each time measuring (or just counting) the thickness in layers — it goes 1, 2, 4, 8, 16... This is a geometric progression with q=2. Use the formula to calculate how many layers you'll get after 8 folds, and explain why folding paper that many times is almost impossible in practice."
  },
  {
   "t": "A bank deposit on paper",
   "b": "Come up with a deposit amount and an interest rate (for example, 2000 rubles at 15% per year, that is, q=1.15). Use the geometric progression formula to calculate how much will be in the account after 5 years, and compare it with what you'd get if the bank simply added the same amount every year (an arithmetic progression) — which option is more profitable after several years?"
  },
  {
   "t": "A ball that gets tired",
   "b": "If you have a ball, drop it from the same height several times in a row and estimate by eye how many times lower each next bounce is than the previous one (usually you get roughly the same ratio). Record three or four bounce heights and check whether they look like a geometric progression: divide each height by the previous one — the ratios should come out approximately the same."
  }
 ],
 "steps": [
  {
   "title": "Numerical sequence and arithmetic progression",
   "body": "<p>A numerical sequence is a set of numbers that follow one another in a specific order and are numbered: a₁ (first term), a₂ (second term), a₃ and so on. For example, 2, 5, 8, 11, 14 is a sequence of five numbers.</p><h3>Arithmetic progression</h3><p>An arithmetic progression is a sequence in which each next term is obtained from the previous one by adding the same number d — it is called the <b>common difference of the progression</b>. For example, 2, 5, 8, 11, 14 is an arithmetic progression with common difference d = 3, because each next number is 3 more than the previous one (5−2=3, 8−5=3, and so on). The common difference can also be negative: 20, 14, 8, 2 is also an arithmetic progression, here d = −6, meaning the numbers decrease.</p><p>The same idea works in the problem about rows of plants in a greenhouse — look at how the number of plants grows from row to row there:</p>",
   "exIdx": 2
  },
  {
   "title": "Formula for the n-th term of an arithmetic progression",
   "body": "<h3>Formula for the n-th term of an arithmetic progression</h3><p>To avoid adding d many times in a row, we use the formula: <b>aₙ = a₁ + (n−1)·d</b>. It says: to get the n-th term, you need to add the common difference d to the first term exactly (n−1) times — that is exactly how many \"steps\" separate the first term from the n-th.</p><p>For example, for a progression with a₁=3 and d=4, the fifth term equals a₅ = 3 + 4·4 = 19 (4 steps from the first term to the fifth).</p><p>Look at the bars to see how this works for a₁=5, d=4 — let's find a₆:</p>",
   "exIdx": 0
  },
  {
   "title": "Sum of the first n terms of an arithmetic progression",
   "body": "<h3>Sum of the first n terms of an arithmetic progression</h3><p>To add up many terms in a row, you don't have to add them one by one: the sum of the first n terms of an arithmetic progression equals <b>Sₙ = {a₁+aₙ|2} · n</b> — that is, the arithmetic mean of the first and last of these terms, multiplied by their number. This works because in an arithmetic progression the first term with the last, the second with the second-to-last, and so on, always add up to the same number.</p><p>Look at the same progression (a₁=5, d=4) to see how the terms split into pairs with the same sum:</p>",
   "exIdx": 1
  },
  {
   "title": "Geometric progression",
   "body": "<h3>Geometric progression</h3><p>A geometric progression is a sequence in which each next term is obtained from the previous one by multiplying by the same number q ≠ 0 — it is called the <b>common ratio of the progression</b>. For example, 3, 6, 12, 24, 48 is a geometric progression with common ratio q = 2, because each next number is 2 times the previous one. If |q| is less than 1 (for example, q = {1|2}), the progression decreases: 16, 8, 4, 2, 1.</p><p>A cell dividing every hour is a good example of this kind of growth by the same factor:</p>",
   "exIdx": 5
  },
  {
   "title": "Formula for the n-th term of a geometric progression",
   "body": "<h3>Formula for the n-th term of a geometric progression</h3><p>By analogy with the arithmetic progression: <b>bₙ = b₁ · qⁿ⁻¹</b>. To go from the first term to the n-th, you need to multiply by q (n−1) times. For example, for b₁=3 and q=2, the fourth term equals b₄ = 3·2³ = 3·8 = 24.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>In the formula for the n-th term of a geometric progression bₙ = b₁ · qⁿ⁻¹, the exponent is (n−1), not n! For example, for the progression 3, 6, 12, 24, ... the third term is b₃ = 3·2² = 12 (exponent 2, not 3) — precisely because there are only two \"steps\" of multiplying by q from the first term to the third. If you mistakenly substitute qⁿ, the answer will be q times larger than the correct one.</div><p>Check the formula on the progression b₁=2, q=3 — let's find b₄:</p>",
   "exIdx": 3
  },
  {
   "title": "Sum of the first n terms of a geometric progression",
   "body": "<h3>Sum of the first n terms of a geometric progression</h3><p>If q ≠ 1, the sum of the first n terms is calculated by the formula <b>Sₙ = {b₁(qⁿ−1)|q−1}</b>. For example, for b₁=1, q=2, n=4: S₄ = {1·(2⁴−1)|2−1} = {15|1} = 15 — and indeed, 1+2+4+8=15.</p><p>Look at how the sum accumulates for b₁=2, q=3 — let's find the sum of the first 4 terms:</p>",
   "exIdx": 4
  },
  {
   "title": "Where progressions are found in practice",
   "body": "<p>In practice, an arithmetic progression describes uniform growth or decrease by the same number — for example, the number of bricks in the rows of a stack, if each next row is shorter than the previous one by a fixed number of bricks, or a train schedule with equal intervals. A geometric progression describes growth or decrease by the same factor — for example, a cell dividing in half every hour, the growth of a bank deposit with interest, or the height a ball reaches after each bounce, if it loses the same fraction of its height each time.</p><div class=\"note\"><span class=\"hand\">Remember</span>If q = 1, all terms of the geometric progression are equal to each other (b₁, b₁, b₁, ...), and the formula Sₙ={b₁(qⁿ−1)|q−1} doesn't work (it would give division by 0) — in this case the sum is simply calculated as Sₙ = n · b₁.</div><p>Two practical examples — rows in a greenhouse (arithmetic progression) and cell division (geometric progression):</p>",
   "exIdx": [
    2,
    5
   ]
  }
 ]
}

CONTENT_EN.stat = {
 "goal": "After this topic you will be able to find the probability of a random event using the classical formula, distinguish certain and impossible events, count the number of outcomes using the multiplication rule, and find the relative frequency of an event from experimental results, as well as confidently find the mean, range, mode, and median for numbers more complex than in grade 6.",
 "explain": "<p>In grade 6 you already found the arithmetic mean, range, mode, and median for small sets of numbers, and encountered your first probability problems. In grade 9 the same ideas will be needed for more complex numbers, and we will formalize probability as a precise formula and learn to count the number of outcomes not by manual enumeration, but using the multiplication rule — this is exactly the skill that is tested on the exam.</p><h3>Mean, range, mode, and median: a reminder</h3><p>Let's recall the rules. The <b>arithmetic mean</b> of a series is the sum of all the numbers divided by their count. The <b>range</b> is the difference between the largest and smallest number in the series. The <b>mode</b> is the number that occurs most often in the series. The <b>median</b> is the middle number of a series arranged in increasing order (and if there is an even number of numbers — the arithmetic mean of the two middle numbers). The rules are the same as before, but the numbers are larger and can be negative: for example, for the series −5, 8, −12, 3, 15, −2, the largest number is 15, the smallest is −12, and the range equals 15 − (−12) = 27.</p><h3>Random event and classical probability</h3><p>An experiment with a random result (rolling a die, drawing a ball, tossing a coin) is called a <b>random trial</b>, and its individual result is called an <b>outcome</b>. A <b>random event</b> is something that may or may not happen as a result of a trial. If all outcomes of a trial are equally likely (none occurs more often than the others), the probability of event A is found using the classical probability formula.</p><div class=\"note\"><span class=\"hand\">Remember</span>P(A) = (number of favorable outcomes) : (number of all outcomes) — but only if all outcomes are equally likely. The probability of any event is a number from 0 to 1 inclusive.</div><p>For example, a bag contains 3 red and 7 blue balls — 10 balls in total, and any one of them can be drawn at random with equal probability. The probability of drawing a red ball equals {3|10}. A coin has only 2 equally likely outcomes (heads, tails), so the probability of heads is {1|2}. A die has 6 equally likely outcomes, so the probability of rolling, say, the number 4 equals {1|6}.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>Applying the classical probability formula when the outcomes are NOT equally likely. If a bag contains 3 red and 7 blue balls, it's incorrect to say there are only 2 outcomes (\"red\" or \"blue\") each with probability {1|2} — there really are two colors, but there are different numbers of balls of each color, so they are not equally likely. You need to count individual balls (there are 10 of them, and those are equally likely), not colors. A second common mistake is to mix up the number of favorable outcomes with the number of all outcomes and write the fraction \"upside down.\"</div><h3>Certain and impossible events</h3><p>If an event happens for any outcome of a trial, it is called <b>certain</b>, and its probability equals 1. If an event cannot happen for any outcome, it is <b>impossible</b>, and its probability equals 0. For example, when rolling an ordinary die with faces from 1 to 6, the event \"a number from 1 to 6 comes up\" is certain (P = 1), while \"the number 7 comes up\" is impossible (P = 0). For all other events, the probability is a number strictly between 0 and 1.</p><h3>The multiplication rule: counting all outcomes</h3><p>To apply the probability formula, you often first need to count exactly how many outcomes exist in total — and there can be too many to list one by one. For this, there is the <b>basic rule of combinatorics (the multiplication rule)</b>: if a first action can be performed in m ways, and after each of them a second action can be performed in n ways, then both actions one after another can be performed in m · n ways.</p><p>For example, a cafe offers 3 kinds of soup and 4 kinds of main course: the number of different lunches (soup + main) equals 3 · 4 = 12 — you don't need to list all 12 pairs to see this. The rule also works for three or more actions in a row: when rolling two dice, the number of outcomes is 6 · 6 = 36, and when tossing a coin three times, it is 2 · 2 · 2 = 8.</p><h3>Relative frequency</h3><p>Classical probability can be calculated exactly if all outcomes are known and they are equally likely. But sometimes it can't be calculated that way — then probability is estimated experimentally. The <b>relative frequency</b> of an event is the ratio of the number of trials in which the event occurred to the total number of trials conducted. For example, if a basketball player made 18 out of 25 shots, the relative frequency of scoring equals {18|25} = 0.72. The greater the number of trials, the closer, as a rule, the relative frequency gets to the classical probability — so, with 1000 coin tosses, the relative frequency of heads is usually close to 0.5, although it may not be exactly equal to 0.5.</p>",
 "examples": [
  {
   "t": "Find the arithmetic mean of the numbers 18, 34, 9, 27, 22.",
   "s": "Sum: 18 + 34 + 9 + 27 + 22 = 110. There are 5 numbers. Mean: 110 : 5 = 22.<div class=\"figure\">__SVG_STAT9_EX0_MEAN182709__</div>"
  },
  {
   "t": "For the series 45, 12, 78, 33, 56, 9 find the range and the median.",
   "s": "Let's order them: 9, 12, 33, 45, 56, 78. Range: 78 − 9 = 69. There are six numbers, in the middle are 33 and 45, median (33 + 45) : 2 = 39.<div class=\"figure\">__SVG_STAT9_EX1_RANGEMEDIAN6__</div>"
  },
  {
   "t": "An urn contains 4 yellow and 5 green balls. A ball is drawn at random from the urn. Find the probability that it is green.",
   "s": "There are 4 + 5 = 9 balls in total, all equally likely. Favorable outcomes (green ball) — 5. Probability {5|9}.<div class=\"figure\">__SVG_STAT9_EX2_URNPROB__</div>"
  },
  {
   "t": "A box contains only red pencils — 12 of them. Find the probability that a randomly drawn pencil turns out to be red, and the probability that it turns out to be blue.",
   "s": "All 12 pencils are red, so the event \"a red pencil is drawn\" always happens — it is certain, its probability equals 1. The event \"a blue pencil is drawn\" cannot happen for any outcome — it is impossible, its probability equals 0.<div class=\"figure\">__SVG_STAT9_EX3_PENCILS__</div>"
  },
  {
   "t": "A cafe offers 3 kinds of soup and 4 kinds of main course. How many different lunches (soup + main) can be made, taking one soup and one main?",
   "s": "The soup can be chosen in 3 ways, and for each choice of soup the main course can be chosen in 4 ways. By the multiplication rule, the number of lunches: 3 · 4 = 12.<div class=\"figure\">__SVG_STAT9_EX4_CAFEGRID__</div>"
  },
  {
   "t": "Two dice are rolled. Find the probability that the sum of the points rolled equals 9.",
   "s": "The total number of outcomes by the multiplication rule: 6 · 6 = 36 (all pairs are equally likely). A sum of 9 occurs in the pairs (3;6), (4;5), (5;4), (6;3) — there are 4 of them. Probability {4|36} = {1|9}.<div class=\"figure\">__SVG_STAT9_EX5_DICESUM9__</div>"
  }
 ],
 "tasks": [
  {
   "q": "Find the arithmetic mean of the numbers 12, 18, 25, 31, 19, and 27.",
   "ans": "22",
   "hint": "Add up all six numbers and divide the sum by their count.",
   "sol": "Sum: 12 + 18 + 25 + 31 + 19 + 27 = 132. There are 6 numbers. Mean: 132 : 6 = 22."
  },
  {
   "q": "Find the range of the series of numbers: 45, 12, 78, 33, 56, 9.",
   "ans": "69",
   "hint": "The range is the largest number minus the smallest.",
   "sol": "The largest number is 78, the smallest is 9. Range: 78 − 9 = 69."
  },
  {
   "q": "Find the mode of the series: 7, 12, 9, 12, 15, 9, 12.",
   "ans": "12",
   "hint": "Count how many times each number occurs.",
   "sol": "The number 12 occurs 3 times, the number 9 occurs 2 times, the rest occur once each. 12 occurs most often, so the mode equals 12."
  },
  {
   "q": "Find the median of the series: 8, 23, 14, 5, 19, 11.",
   "ans": "12.5",
   "hint": "First arrange the numbers in increasing order. There are six numbers — an even count.",
   "sol": "Let's order them: 5, 8, 11, 14, 19, 23. The middle numbers are 11 and 14: median (11 + 14) : 2 = 12.5."
  },
  {
   "q": "Find the median of the series: 17, 42, 9, 31, 25.",
   "ans": "25",
   "hint": "Arrange the numbers in increasing order and take the middle number.",
   "sol": "Let's order them: 9, 17, 25, 31, 42. The number in the middle is 25."
  },
  {
   "q": "The arithmetic mean of five numbers equals 18. Four of them are: 12, 20, 25, and 9. Find the fifth number.",
   "ans": "24",
   "hint": "First find the sum of all five numbers: mean times count.",
   "sol": "Sum of the five numbers: 18 · 5 = 90. Sum of the four known numbers: 12 + 20 + 25 + 9 = 66. The fifth number: 90 − 66 = 24."
  },
  {
   "q": "Find the range of the series of numbers: −5, 8, −12, 3, 15, −2.",
   "ans": "27",
   "hint": "Find the largest and smallest numbers of the series, taking into account the negative ones.",
   "sol": "The largest number is 15, the smallest is −12. Range: 15 − (−12) = 15 + 12 = 27."
  },
  {
   "q": "Find the mode of the series: 6, 14, 6, 21, 6, 14, 9.",
   "ans": "6",
   "hint": "Count how many times each number occurs.",
   "sol": "The number 6 occurs 3 times, the number 14 occurs 2 times, the rest occur once each. The mode equals 6."
  },
  {
   "q": "A coin is tossed once. Find the probability that heads comes up.",
   "ans": "1/2",
   "hint": "A coin has two equally likely outcomes.",
   "sol": "There are 2 outcomes in total (heads, tails), 1 is favorable. Probability 1/2."
  },
  {
   "q": "A die is rolled once. Find the probability that a number divisible by 3 comes up.",
   "ans": "1/3",
   "hint": "Which numbers on a die are divisible by 3?",
   "sol": "Numbers on a die divisible by 3: 3 and 6 — there are 2 of them. Total outcomes 6. Probability 2/6 = 1/3."
  },
  {
   "q": "A die is rolled once. Find the probability that a prime number comes up.",
   "ans": "1/2",
   "hint": "Prime numbers among 1–6: which numbers are these?",
   "sol": "Prime numbers from 1 to 6: 2, 3, 5 — there are 3 of them. Total outcomes 6. Probability 3/6 = 1/2."
  },
  {
   "q": "A bag contains 5 red and 7 blue balls. A ball is drawn at random from the bag. Find the probability that it is red.",
   "ans": "5/12",
   "hint": "First find the total number of balls in the bag.",
   "sol": "There are 5 + 7 = 12 balls in total, 5 favorable (red). Probability 5/12."
  },
  {
   "q": "A box contains cards numbered from 1 to 10, each with its own number. A card is drawn at random. Find the probability that the number on it is divisible by 4.",
   "ans": "1/5",
   "hint": "Find how many numbers from 1 to 10 are divisible by 4.",
   "sol": "Numbers from 1 to 10 divisible by 4: 4 and 8 — there are 2 of them. Total cards 10. Probability 2/10 = 1/5."
  },
  {
   "q": "A box contains 4 blue, 3 green, and 2 yellow cubes. A cube is drawn at random. Find the probability that it is yellow.",
   "ans": "2/9",
   "hint": "First find the total number of cubes.",
   "sol": "There are 4 + 3 + 2 = 9 cubes in total, 2 yellow. Probability 2/9."
  },
  {
   "q": "A die is rolled once. Find the probability that exactly one point comes up.",
   "ans": "1/6",
   "hint": "How many faces of the die fit, how many faces are there in total?",
   "sol": "There is one favorable outcome (rolling a 1), 6 outcomes in total. Probability 1/6."
  },
  {
   "q": "A bag contains 3 white and 5 black balls. A ball is drawn at random from the bag. Find the probability that it is white.",
   "ans": "3/8",
   "hint": "First find the total number of balls.",
   "sol": "There are 3 + 5 = 8 balls in total, 3 white. Probability 3/8."
  },
  {
   "q": "An urn contains balls numbered from 1 to 10. A ball is drawn at random. Find the probability that the number of the ball is divisible by 3.",
   "ans": "3/10",
   "hint": "Find how many numbers from 1 to 10 are divisible by 3.",
   "sol": "Numbers from 1 to 10 divisible by 3: 3, 6, 9 — there are 3 of them. Total balls 10. Probability 3/10."
  },
  {
   "q": "A box contains cards numbered from 1 to 20, each with its own number. A card is drawn at random. Find the probability that the number on it is divisible by 5.",
   "ans": "1/5",
   "hint": "Find how many numbers from 1 to 20 are divisible by 5.",
   "sol": "Numbers from 1 to 20 divisible by 5: 5, 10, 15, 20 — there are 4 of them. Total cards 20. Probability 4/20 = 1/5."
  },
  {
   "q": "A die is rolled once (faces numbered from 1 to 6). Which of the events is impossible?",
   "opts": [
    "a 6 comes up",
    "a number greater than 6 comes up",
    "an even number comes up",
    "a 1 comes up"
   ],
   "ans": 1,
   "hint": "An impossible event cannot happen for any outcome of the given trial.",
   "sol": "A die only has numbers from 1 to 6, so a number greater than 6 cannot come up — this is an impossible event. The other events are possible."
  },
  {
   "q": "A bag contains only red balls — 10 of them. Which of the events is certain (always happens)?",
   "opts": [
    "a red ball is drawn",
    "a blue ball is drawn",
    "a ball weighing exactly 1 kg is drawn",
    "two balls are drawn at once"
   ],
   "ans": 0,
   "hint": "A certain event happens for any outcome of a trial.",
   "sol": "Since all the balls in the bag are red, any draw will produce exactly a red ball — this event is certain, its probability equals 1."
  },
  {
   "q": "Which of the numbers cannot be the probability of any event?",
   "opts": [
    "0",
    "1",
    "0.5",
    "1.5"
   ],
   "ans": 3,
   "hint": "The probability of any event lies between 0 and 1.",
   "sol": "The number 1.5 is greater than 1, and probability cannot be greater than 1. The numbers 0, 1, and 0.5 can be probabilities."
  },
  {
   "q": "A cafe offers 4 main dishes and 3 kinds of drinks. How many different lunches (one dish and one drink) can be made?",
   "ans": "12",
   "hint": "Use the multiplication rule: multiply the number of ways for the first action by the number of ways for the second.",
   "sol": "The dish can be chosen in 4 ways, the drink in 3 ways. By the multiplication rule, the total number of lunches: 4 · 3 = 12."
  },
  {
   "q": "A code consists of two digits: the first digit is one of 6 possible, the second is one of 5 possible. How many different codes can be made?",
   "ans": "30",
   "hint": "Apply the multiplication rule for two consecutive actions.",
   "sol": "The first digit can be chosen in 6 ways, the second in 5 ways. Total codes: 6 · 5 = 30."
  },
  {
   "q": "Marina has 5 shirts and 4 pairs of pants. How many different outfits of \"shirt + pants\" can she make?",
   "ans": "20",
   "hint": "Use the multiplication rule.",
   "sol": "The shirt can be chosen in 5 ways, the pants in 4 ways. Total outfits: 5 · 4 = 20."
  },
  {
   "q": "There are 3 different roads from home to school, and 4 different roads from school to the library. How many ways are there to get from home to the library if you go through the school?",
   "ans": "12",
   "hint": "The road to school and the road from school are chosen separately — apply the multiplication rule.",
   "sol": "The road to school can be chosen in 3 ways, and from there to the library in 4 ways. Total ways: 3 · 4 = 12."
  },
  {
   "q": "Two dice are rolled. How many different outcomes (pairs of numbers rolled) are there in total?",
   "ans": "36",
   "hint": "For each of the 6 outcomes of the first die, there are 6 outcomes of the second.",
   "sol": "By the multiplication rule: 6 · 6 = 36."
  },
  {
   "q": "A coin is tossed 3 times in a row. How many different sequences of heads and tails can there be in total?",
   "ans": "8",
   "hint": "Each of the three tosses has 2 outcomes — apply the multiplication rule three times.",
   "sol": "By the multiplication rule: 2 · 2 · 2 = 8."
  },
  {
   "q": "A test has 3 questions, and each question has 4 answer options. How many ways are there to answer all 3 questions (choosing one option for each)?",
   "ans": "64",
   "hint": "Each question has 4 options, there are 3 questions — apply the multiplication rule.",
   "sol": "By the multiplication rule: 4 · 4 · 4 = 64."
  },
  {
   "q": "A basketball player took 25 shots, 18 of which went in. Find the relative frequency of scoring.",
   "ans": "0.72",
   "hint": "Relative frequency = number of successful trials : total number of trials.",
   "sol": "Relative frequency: 18 : 25 = 0.72."
  },
  {
   "q": "A coin was tossed 50 times, and heads came up 23 times. Find the relative frequency of heads.",
   "ans": "0.46",
   "hint": "Divide the number of successful trials by the total number of trials.",
   "sol": "Relative frequency: 23 : 50 = 0.46."
  },
  {
   "q": "Two coins are tossed at the same time. Find the probability that heads comes up on both coins.",
   "ans": "1/4",
   "hint": "First use the multiplication rule to find the total number of outcomes for two coins.",
   "sol": "The total number of outcomes (by the multiplication rule) is 2 · 2 = 4: HH, HT, TH, TT. There is one favorable outcome — HH. Probability 1/4."
  },
  {
   "q": "Two dice are rolled. Find the probability that the sum of the points rolled equals 11.",
   "ans": "1/18",
   "hint": "There are 36 outcomes in total (by the multiplication rule). Find the pairs of numbers whose sum is 11.",
   "sol": "Pairs with sum 11: (5; 6) and (6; 5) — there are 2 of them. Total outcomes 36. Probability 2/36 = 1/18."
  }
 ],
 "bonus": {
  "q": "An urn contains 4 red and 6 blue balls. Two balls are drawn one after another from the urn, without replacement. Find the probability that both balls drawn turn out to be red.",
  "ans": "2/15",
  "hint": "First find the probability that the first ball is red, then — that the second ball is also red given that the first has already been drawn (there is one fewer ball and one fewer red ball). Multiply these probabilities.",
  "sol": "The probability that the first ball is red: 4/10. After it is drawn, there are 9 balls left in the urn, 3 of them red, so the probability that the second ball is also red: 3/9. By the multiplication rule, the probability that both balls are red: (4/10) · (3/9) = 12/90 = 2/15."
 },
 "test": [
  {
   "q": "Find the arithmetic mean of the numbers 14, 22, 9, 31, and 19.",
   "ans": "19",
   "sol": "Sum: 14 + 22 + 9 + 31 + 19 = 95. There are 5 numbers. Mean: 95 : 5 = 19."
  },
  {
   "q": "Find the median of the series: 15, 40, 7, 23, 19, 33.",
   "ans": "21",
   "sol": "Let's order them: 7, 15, 19, 23, 33, 40. The middle numbers are 19 and 23: median (19 + 23) : 2 = 21."
  },
  {
   "q": "Find the range of the series of numbers: 52, 9, 38, 71, 16.",
   "ans": "62",
   "sol": "The largest number is 71, the smallest is 9. Range: 71 − 9 = 62."
  },
  {
   "q": "A card is drawn at random from a set of cards numbered from 1 to 9. Which of the events is impossible?",
   "opts": [
    "a card with the number 9 is drawn",
    "a card with the number 10 is drawn",
    "a card with an even number is drawn",
    "a card with the number 1 is drawn"
   ],
   "ans": 1,
   "sol": "The cards only have numbers from 1 to 9, so there is no card with the number 10 — this event is impossible."
  },
  {
   "q": "A die is rolled once. Find the probability that a number less than 3 comes up.",
   "ans": "1/3",
   "sol": "Numbers less than 3 on a die: 1 and 2 — there are 2 of them. Total outcomes 6. Probability 2/6 = 1/3."
  },
  {
   "q": "A bag contains 6 red and 9 blue balls. A ball is drawn at random from the bag. Find the probability that it is blue.",
   "ans": "3/5",
   "sol": "There are 6 + 9 = 15 balls in total, 9 blue. Probability 9/15 = 3/5."
  },
  {
   "q": "A bakery offers 3 kinds of bread and 5 kinds of filling for a sandwich. How many different sandwiches (one bread and one filling) can be made?",
   "ans": "15",
   "sol": "By the multiplication rule: 3 · 5 = 15."
  },
  {
   "q": "Which of the numbers cannot be the probability of any event?",
   "opts": [
    "0.3",
    "1",
    "0",
    "-0.2"
   ],
   "ans": 3,
   "sol": "Probability cannot be negative. The number −0.2 is less than 0, so it cannot be a probability."
  }
 ],
 "lab": [
  {
   "t": "Steps in a week",
   "b": "Record how many steps (or minutes of activity) you got each day over 7–10 days — using your phone's step counter or by estimate. Find the arithmetic mean, range, median, and mode of this series of numbers. Compare the mean and the median: are they very different? If on some day you got noticeably more or less than usual, see what happens if you remove that day — how much does the mean change, and how does the median change?"
  },
  {
   "t": "Coin and relative frequency",
   "b": "Toss a coin 20 times and count how many times heads came up. Find the relative frequency (number of heads : 20). Continue up to 50, then up to 100 tosses, recalculating the relative frequency each time. Record in a table: how does the frequency change as the number of tosses grows, and does it get closer to 0.5?"
  },
  {
   "t": "Counting codes with the multiplication rule",
   "b": "Come up with your own simple code made of two parts — for example, one digit from 1 to 4 and one letter from three chosen letters. Use the multiplication rule to calculate how many different codes there are in total. Then write out all these codes in a list and check that their number matches your calculation."
  },
  {
   "t": "Experimental probability in a card game",
   "b": "Take a small set of cards or tokens with a known composition — for example, 10 cards, of which 3 are one color and 7 are another. Calculate the classical probability of drawing a card of the rarer color. Then draw a card 30 times (each time putting it back and shuffling), and record how many times that color came up. Compare the experimental relative frequency with the calculated probability — how close are they?"
  }
 ],
 "steps": [
  {
   "title": "Mean, range, mode, and median: a review",
   "body": "<p>In grade 6 you already found the arithmetic mean, range, mode, and median for small sets of numbers, and encountered your first probability problems. In grade 9 the same ideas will be needed for more complex numbers, and we will formalize probability as a precise formula and learn to count the number of outcomes not by manual enumeration, but using the multiplication rule — this is exactly the skill that is tested on the exam.</p><h3>Mean, range, mode, and median: a reminder</h3><p>Let's recall the rules. The <b>arithmetic mean</b> of a series is the sum of all the numbers divided by their count. The <b>range</b> is the difference between the largest and smallest number in the series. The <b>mode</b> is the number that occurs most often in the series. The <b>median</b> is the middle number of a series arranged in increasing order (and if there is an even number of numbers — the arithmetic mean of the two middle numbers). The rules are the same as before, but the numbers are larger and can be negative: for example, for the series −5, 8, −12, 3, 15, −2, the largest number is 15, the smallest is −12, and the range equals 15 − (−12) = 27.</p>",
   "exIdx": [
    0,
    1
   ]
  },
  {
   "title": "Random trial, outcome, and event",
   "body": "<h3>Random event and classical probability</h3><p>An experiment with a random result (rolling a die, drawing a ball, tossing a coin) is called a <b>random trial</b>, and its individual result is called an <b>outcome</b>. A <b>random event</b> is something that may or may not happen as a result of a trial. If all outcomes of a trial are equally likely (none occurs more often than the others), the probability of event A is found using the classical probability formula.</p>",
   "exIdx": 2
  },
  {
   "title": "The classical probability formula",
   "body": "<div class=\"note\"><span class=\"hand\">Remember</span>P(A) = (number of favorable outcomes) : (number of all outcomes) — but only if all outcomes are equally likely. The probability of any event is a number from 0 to 1 inclusive.</div><p>For example, a bag contains 3 red and 7 blue balls — 10 balls in total, and any one of them can be drawn at random with equal probability. The probability of drawing a red ball equals {3|10}. A coin has only 2 equally likely outcomes (heads, tails), so the probability of heads is {1|2}. A die has 6 equally likely outcomes, so the probability of rolling, say, the number 4 equals {1|6}.</p>",
   "exIdx": 2
  },
  {
   "title": "Common mistake: confusing outcomes and options",
   "body": "<div class=\"warn\"><span class=\"hand\">Common mistake</span>Applying the classical probability formula when the outcomes are NOT equally likely. If a bag contains 3 red and 7 blue balls, it's incorrect to say there are only 2 outcomes (\"red\" or \"blue\") each with probability {1|2} — there really are two colors, but there are different numbers of balls of each color, so they are not equally likely. You need to count individual balls (there are 10 of them, and those are equally likely), not colors. A second common mistake is to mix up the number of favorable outcomes with the number of all outcomes and write the fraction \"upside down.\"</div>",
   "exIdx": 2
  },
  {
   "title": "Certain and impossible events",
   "body": "<h3>Certain and impossible events</h3><p>If an event happens for any outcome of a trial, it is called <b>certain</b>, and its probability equals 1. If an event cannot happen for any outcome, it is <b>impossible</b>, and its probability equals 0. For example, when rolling an ordinary die with faces from 1 to 6, the event \"a number from 1 to 6 comes up\" is certain (P = 1), while \"the number 7 comes up\" is impossible (P = 0). For all other events, the probability is a number strictly between 0 and 1.</p>",
   "exIdx": 3
  },
  {
   "title": "The multiplication rule: counting all outcomes",
   "body": "<h3>The multiplication rule: counting all outcomes</h3><p>To apply the probability formula, you often first need to count exactly how many outcomes exist in total — and there can be too many to list one by one. For this, there is the <b>basic rule of combinatorics (the multiplication rule)</b>: if a first action can be performed in m ways, and after each of them a second action can be performed in n ways, then both actions one after another can be performed in m · n ways.</p>",
   "exIdx": 4
  },
  {
   "title": "The multiplication rule in action",
   "body": "<p>For example, a cafe offers 3 kinds of soup and 4 kinds of main course: the number of different lunches (soup + main) equals 3 · 4 = 12 — you don't need to list all 12 pairs to see this. The rule also works for three or more actions in a row: when rolling two dice, the number of outcomes is 6 · 6 = 36, and when tossing a coin three times, it is 2 · 2 · 2 = 8.</p>",
   "exIdx": [
    4,
    5
   ]
  },
  {
   "title": "Relative frequency",
   "body": "<h3>Relative frequency</h3><p>Classical probability can be calculated exactly if all outcomes are known and they are equally likely. But sometimes it can't be calculated that way — then probability is estimated experimentally. The <b>relative frequency</b> of an event is the ratio of the number of trials in which the event occurred to the total number of trials conducted. For example, if a basketball player made 18 out of 25 shots, the relative frequency of scoring equals {18|25} = 0.72. The greater the number of trials, the closer, as a rule, the relative frequency gets to the classical probability — so, with 1000 coin tosses, the relative frequency of heads is usually close to 0.5, although it may not be exactly equal to 0.5.</p>",
   "exIdx": 5
  }
 ]
}

CONTENT_EN.simil = {
 "goal": "After this topic, you will find the ratio of similarity of triangles, apply the three criteria for similarity, recalculate perimeters (using k) and areas (using k²) of similar triangles, and use similarity to measure the height of inaccessible objects and work with the midsegment of a triangle.",
 "explain": "<p>Two triangles are called <b>similar</b> if their angles are respectively equal, and the sides of one are proportional to the sides of the other (that is, one is larger or smaller than the other by the same factor). Notation: △ABC ∼ △A₁B₁C₁.</p><h3>Ratio of similarity</h3><p>The number k, showing how many times the sides of one triangle are larger (or smaller) than the corresponding sides of the other, is called the <b>ratio of similarity</b> (or scale factor). If k=3, then each side of the second triangle is three times larger than the corresponding side of the first. If k=1, the triangles are congruent — this is simply a special case of similarity.</p><h3>Criteria for similarity of triangles</h3><p>To prove similarity, it is enough to check one of three criteria:</p><ul><li><b>By two angles.</b> If two angles of one triangle are equal to two angles of another, the triangles are similar (the third angle is equal automatically — the sum of angles is always 180°).</li><li><b>By two sides and the angle between them.</b> If two sides of one triangle are proportional to two sides of another, and the angles between these sides are equal, the triangles are similar.</li><li><b>By three sides.</b> If all three sides of one triangle are proportional to the three sides of another (all three ratios of corresponding sides are equal), the triangles are similar.</li></ul><h3>Perimeters and areas of similar triangles</h3><p>The ratio of the perimeters of similar triangles equals the ratio of similarity k — just like the ratio of the sides. But the ratio of the areas equals <b>k²</b> — the square of the ratio of similarity, since area is a two-dimensional quantity (it depends on two measurements at once, not on one, like perimeter).</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>You cannot recalculate the area of a similar triangle the same way as the perimeter! If k=3, the perimeter increases threefold, but the area increases 3²=9 times, not 3 times. Forgetting to square k when recalculating area is the most common mistake in this topic.</div><h3>Application: measuring inaccessible distances</h3><p>Similarity of triangles lets you find the height of objects that cannot be measured directly with a tape measure — a tree, a pole, a building. The simplest method: on a sunny day, measure the shadow of a stick of known height and the shadow of the tree at the same moment (sunlight rays are parallel, so the object with its shadow and the tree with its shadow form similar triangles). A similar method: place a mirror on the ground and, walking away from it, find the point from which you can see the top of the object: then the observer's height and the distance to the mirror form a proportion with the height of the object and the distance from the mirror to it.</p><h3>Midsegment of a triangle</h3><p>The <b>midsegment</b> of a triangle is a segment connecting the midpoints of two of its sides. It is always parallel to the third side and equal to half of it. In fact, this is a special case of similarity: the small triangle cut off by the midsegment at the vertex is similar to the whole triangle with ratio k={1|2}.</p><div class=\"note\"><span class=\"hand\">Remember</span>The midsegment equals half of the third side and is parallel to it — both facts follow directly from similarity with ratio {1|2}.</div>",
 "examples": [
  {
   "t": "Triangles ABC and A1B1C1 are similar. The sides of ABC equal 4, 6, and 8 cm, and the corresponding sides of A1B1C1 equal 12, 18, and 24 cm. Find the ratio of similarity k.",
   "s": "k=12:4=3 (check: 18:6=3, 24:8=3 — all ratios match).<div class=\"figure\">__SVG_SIMIL_EX0_RATIO48__</div>"
  },
  {
   "t": "The ratio of similarity of two triangles is k=2.5 (from the smaller to the larger). The perimeter of the smaller triangle is 16 cm. Find the perimeter of the larger one.",
   "s": "The perimeters of similar triangles relate the same way as the sides — as the ratio of similarity: 16·2.5=40 cm.<div class=\"figure\">__SVG_SIMIL_EX1_PERIM16K25__</div>"
  },
  {
   "t": "The area of the smaller of two similar triangles equals 12 cm², the ratio of similarity k=4. Find the area of the larger triangle.",
   "s": "Areas relate as the square of the ratio of similarity: k²=16. S=12·16=192 cm² (not 12·4=48 — that's a common mistake!).<div class=\"figure\">__SVG_SIMIL_EX2_AREA12K4__</div>"
  },
  {
   "t": "In triangles ABC and MNK it is known: angle A=50°, angle B=70°, angle M=50°, angle K=60°. Are the triangles similar?",
   "s": "Let's find angle C: 180°−50°−70°=60°. So angle C=angle K=60°, and angle A=angle M=50° — the triangles have two pairs of equal angles, so they are similar by the \"two angles\" criterion.<div class=\"figure\">__SVG_SIMIL_EX3_TWOANGLES__</div>"
  },
  {
   "t": "A pole 1 m high casts a shadow of 1.2 m. At the same moment, a tree casts a shadow of 7.2 m. Find the height of the tree.",
   "s": "Sunlight rays are parallel, so the pole with its shadow and the tree with its shadow form similar triangles. Ratio of similarity: 7.2:1.2=6. Height of the tree: 1·6=6 m.<div class=\"figure\">__SVG_SIMIL_EX4_SHADOW__</div>"
  },
  {
   "t": "In triangle ABC, side BC=18 cm. M and N are the midpoints of sides AB and AC. Find the length of the midsegment MN.",
   "s": "MN is the midsegment, it equals half of the side it is parallel to: MN=18:2=9 cm.<div class=\"figure\">__SVG_SIMIL_EX5_MIDSEGMENT__</div>"
  }
 ],
 "tasks": [
  {
   "q": "The sides of triangle ABC equal 4, 6, and 8 cm. The sides of a similar triangle A1B1C1 equal 12, 18, and 24 cm. Find the ratio of similarity k (from ABC to A1B1C1).",
   "ans": "3",
   "hint": "k is how many times the sides of the second triangle are larger than the sides of the first.",
   "sol": "k=12:4=3 (check: 18:6=3, 24:8=3 — everything matches)."
  },
  {
   "q": "The triangles are similar with ratio k=3. The smaller triangle has sides 5, 7, and 9 cm. What is the side of the larger triangle corresponding to the 7 cm side (in cm)?",
   "ans": "21",
   "hint": "Multiply the given side by the ratio of similarity k.",
   "sol": "7·3=21 cm."
  },
  {
   "q": "The triangles are similar with ratio of similarity k=0.5 (from the larger to the smaller). The side of the larger triangle equals 20 cm. Find the corresponding side of the smaller triangle (in cm).",
   "ans": "10",
   "hint": "Multiply the side of the larger triangle by k.",
   "sol": "20·0.5=10 cm."
  },
  {
   "q": "The triangles are similar with ratio k=4 (from the smaller to the larger). The perimeter of the smaller triangle equals 15 cm. Find the perimeter of the larger triangle (in cm).",
   "ans": "60",
   "hint": "The perimeters of similar triangles relate the same way as the sides — that is, as k.",
   "sol": "15·4=60 cm."
  },
  {
   "q": "The triangles are similar with ratio k=3 (from the smaller to the larger). The perimeter of the larger triangle equals 54 cm. Find the perimeter of the smaller triangle (in cm).",
   "ans": "18",
   "hint": "Divide the perimeter of the larger triangle by k.",
   "sol": "54:3=18 cm."
  },
  {
   "q": "The triangles are similar with ratio k=5 (from the smaller to the larger). The area of the smaller triangle equals 6 cm². Find the area of the larger triangle (in cm²).",
   "ans": "150",
   "hint": "The areas of similar triangles relate as the square of the ratio of similarity: k².",
   "sol": "k²=25. S=6·25=150 cm²."
  },
  {
   "q": "The triangles are similar with ratio k=2 (from the smaller to the larger). The area of the larger triangle equals 48 cm². Find the area of the smaller triangle (in cm²).",
   "ans": "12",
   "hint": "Divide the area of the larger triangle by k² (not by k!).",
   "sol": "k²=4. S=48:4=12 cm²."
  },
  {
   "q": "The triangles are similar with ratio k=3 (from the smaller to the larger). The area of the smaller triangle equals 7 cm². Find the area of the larger triangle (in cm²).",
   "ans": "63",
   "hint": "Multiply the area of the smaller triangle by k².",
   "sol": "k²=9. S=7·9=63 cm²."
  },
  {
   "q": "The perimeter of one of two similar triangles equals 18 cm, the perimeter of the other — 54 cm. Find the ratio of similarity (from the smaller to the larger).",
   "ans": "3",
   "hint": "Divide the larger perimeter by the smaller one — perimeters relate the same way as the ratio of similarity.",
   "sol": "54:18=3."
  },
  {
   "q": "The area of one of two similar triangles equals 5 cm², the area of the other — 80 cm². Find the ratio of similarity (from the smaller to the larger).",
   "ans": "4",
   "hint": "First find the ratio of the areas, then take its square root to get k.",
   "sol": "80:5=16=k². k=√16=4."
  },
  {
   "q": "The area of one of two similar triangles equals 9 cm², the area of the other — 225 cm². Find the ratio of similarity (from the smaller to the larger).",
   "ans": "5",
   "hint": "The ratio of areas equals k² — find it and take the square root.",
   "sol": "225:9=25=k². k=√25=5."
  },
  {
   "q": "In triangles ABC and MNK the sides are proportional: AB:MN=3:9, BC:NK=4:12, AC:MK=5:15. By which criterion are these triangles similar?",
   "opts": [
    "By two angles",
    "By two sides and the angle between them",
    "By three sides",
    "There is no such criterion"
   ],
   "ans": 2,
   "hint": "All three pairs of sides are given, and all ratios are the same (1:3).",
   "sol": "Check: 3/9=4/12=5/15=1/3 — all three pairs of sides are proportional. This is the criterion of similarity by three sides."
  },
  {
   "q": "In triangles ABC and MNK, angle A=50°, angle B=70°, angle M=50°, angle N=70°. By which criterion are these triangles similar?",
   "opts": [
    "By two angles",
    "By two sides and the angle between them",
    "By three sides",
    "There is no such criterion"
   ],
   "ans": 0,
   "hint": "Only angles are given — compare the pairs.",
   "sol": "Angle A=angle M=50°, angle B=angle N=70° — two pairs of angles are equal. This is the criterion of similarity by two angles."
  },
  {
   "q": "In triangles ABC and MNK it is known: AB:MN=2:5, BC:NK=3:7.5, and angle B=angle N (the angle between sides AB, BC and MN, NK respectively). By which criterion are the triangles similar?",
   "opts": [
    "By two angles",
    "By two sides and the angle between them",
    "By three sides",
    "There is no such criterion"
   ],
   "ans": 1,
   "hint": "Check whether exactly the two sides between which the given angle lies are proportional.",
   "sol": "AB/MN=2/5=0.4 and BC/NK=3/7.5=0.4 — equal, and the angle between these sides (B and N) is also equal. This is the criterion of similarity by two sides and the angle between them."
  },
  {
   "q": "In triangle ABC, side BC=16 cm. M and N are the midpoints of sides AB and AC. Find the length of the midsegment MN (in cm).",
   "ans": "8",
   "hint": "The midsegment equals half of the side it is parallel to.",
   "sol": "MN=BC:2=16:2=8 cm."
  },
  {
   "q": "The midsegment of a triangle equals 11 cm. Find the length of the side it is parallel to (in cm).",
   "ans": "22",
   "hint": "The side equals the midsegment multiplied by 2.",
   "sol": "11·2=22 cm."
  },
  {
   "q": "The perimeter of triangle ABC equals 50 cm. Find the perimeter of the triangle formed by the three midsegments of triangle ABC (in cm).",
   "ans": "25",
   "hint": "The triangle formed by the midsegments is similar to the original with ratio k=0.5, and the perimeters of similar triangles relate as k.",
   "sol": "50·0.5=25 cm."
  },
  {
   "q": "The area of triangle ABC equals 40 cm². Find the area of the triangle formed by the three midsegments of triangle ABC (in cm²).",
   "ans": "10",
   "hint": "The ratio of similarity k=0.5, and areas relate as k² — don't forget to square the ratio!",
   "sol": "k²=0.25. S=40·0.25=10 cm²."
  },
  {
   "q": "A girl 1.4 m tall casts a shadow 2.1 m long. At the same moment, a pole casts a shadow 4.5 m long. Find the height of the pole (in m).",
   "ans": "3",
   "hint": "An object and its shadow form similar right triangles (sunlight rays are parallel) — set up a proportion of height/shadow.",
   "sol": "1.4:2.1 = h:4.5. h=4.5·(1.4:2.1)=4.5·(2:3)=3 m."
  },
  {
   "q": "A mirror lies on the ground 2 m from the base of a tree. An observer 1.6 m tall stands so that they see the top of the tree in the mirror, and the distance from the observer to the mirror equals 0.5 m. Find the height of the tree (in m).",
   "ans": "6.4",
   "hint": "The angle of incidence of the gaze in the mirror equals the angle of reflection, so the triangle 'observer–mirror' is similar to the triangle 'tree–mirror': height:observer's_distance = tree's_height:tree's_distance.",
   "sol": "1.6:0.5 = h:2. h=2·(1.6:0.5)=2·3.2=6.4 m."
  },
  {
   "q": "Two people are standing next to each other: the first, 1.8 m tall, casts a shadow of 2.4 m. The second person is 1.5 m tall. What is his shadow at the same moment (in m)?",
   "ans": "2",
   "hint": "At the same moment, the ratio of height to shadow is the same for both — set up a proportion.",
   "sol": "1.8:2.4 = 1.5:x. x=1.5·2.4:1.8=2 m."
  },
  {
   "q": "The sides of the smaller triangle equal 4 and 6 cm. The corresponding sides of a similar larger triangle: one equals 10 cm (corresponding to the 4 cm side), the other — x. Find x (in cm).",
   "ans": "15",
   "hint": "First find the ratio of similarity from the first pair of sides, then apply it to the second.",
   "sol": "k=10:4=2.5. x=6·2.5=15 cm."
  },
  {
   "q": "Corresponding sides of two similar triangles equal 8 cm and 20 cm. Find the ratio of similarity (from the smaller triangle to the larger).",
   "ans": "2.5",
   "hint": "Divide the larger side by the smaller one.",
   "sol": "20:8=2.5."
  },
  {
   "q": "Two triangles are similar, the sides of the smaller one equal 9, 12, and 15 cm. The ratio of similarity (from the smaller to the larger) equals {5|3}. Find the perimeter of the larger triangle (in cm).",
   "ans": "60",
   "hint": "First find the perimeter of the smaller triangle, then multiply by the ratio of similarity.",
   "sol": "Perimeter of the smaller: 9+12+15=36 cm. Perimeter of the larger: 36·{5|3}=60 cm."
  },
  {
   "q": "Two triangles are similar. The area of the larger triangle equals 54 cm², and the ratio of similarity (from the smaller to the larger) equals {2|3}. Find the area of the smaller triangle (in cm²).",
   "ans": "24",
   "hint": "Areas relate as k² — multiply the area of the larger triangle by the square of the ratio.",
   "sol": "k²={4|9}. S_smaller=54·{4|9}=24 cm²."
  },
  {
   "q": "The perimeters of two similar triangles equal 24 cm and 36 cm. The smaller side of the first triangle (with perimeter 24 cm) equals 8 cm. Find the corresponding side of the second triangle (in cm).",
   "ans": "12",
   "hint": "First find the ratio of similarity as the ratio of the perimeters, then apply it to the side.",
   "sol": "k=36:24=1.5. Corresponding side: 8·1.5=12 cm."
  },
  {
   "q": "The sides of triangle ABC equal 6, 10, and 14 cm. The sides of triangle A1B1C1 equal 9, 15, and 21 cm. Are these triangles similar, and if so — what is the ratio of similarity (from ABC to A1B1C1)?",
   "ans": "1.5",
   "hint": "Check whether the ratio of all three pairs of corresponding sides is the same.",
   "sol": "9:6=1.5; 15:10=1.5; 21:14=1.5 — all three ratios are equal, the triangles are similar by three sides, k=1.5."
  },
  {
   "q": "A stick 1 m high casts a shadow 1.3 m long. At the same moment, the shadow of a building equals 26 m. Find the height of the building (in m).",
   "ans": "20",
   "hint": "Set up a proportion: the height of the stick to its shadow, as the height of the building to its shadow.",
   "sol": "1:1.3 = h:26. h=26:1.3=20 m."
  },
  {
   "q": "The triangles are similar with ratio k=0.25 (from the smaller to the larger). The perimeter of the larger triangle equals 100 cm. Find the perimeter of the smaller triangle (in cm).",
   "ans": "25",
   "hint": "Multiply the perimeter of the larger triangle by k.",
   "sol": "100·0.25=25 cm."
  },
  {
   "q": "The triangles are similar with ratio k=0.2 (from the smaller to the larger). The area of the larger triangle equals 75 cm². Find the area of the smaller triangle (in cm²).",
   "ans": "3",
   "hint": "Areas relate as k² — don't forget to square the ratio.",
   "sol": "k²=0.04. S=75·0.04=3 cm²."
  },
  {
   "q": "In triangle ABC, side AB=18 cm, side AC=24 cm, side BC=30 cm. M is the midpoint of AB, N is the midpoint of AC. Find the length of the midsegment MN, parallel to side BC (in cm).",
   "ans": "15",
   "hint": "The midsegment equals half of the side it is parallel to (in this case — BC).",
   "sol": "MN=BC:2=30:2=15 cm."
  },
  {
   "q": "The height of a tree equals 9 m. At the same moment, a peg 1.2 m high casts a shadow of 0.8 m. How long is the shadow cast by the tree (in m)?",
   "ans": "6",
   "hint": "Set up a proportion: the height of the peg to its shadow, as the height of the tree to its shadow.",
   "sol": "1.2:0.8=1.5. Shadow of the tree: 9:1.5=6 m."
  }
 ],
 "bonus": {
  "q": "In trapezoid ABCD with bases AD=8 cm and BC=20 cm, diagonals AC and BD intersect at point O. Triangles AOD and COB are similar (since AD∥BC). The area of triangle COB equals 50 cm². Find the area of triangle AOD (in cm²).",
  "ans": "8",
  "hint": "The ratio of similarity of triangles AOD and COB equals the ratio of the bases AD:BC, and the areas relate as the square of this ratio.",
  "sol": "k=AD:BC=8:20=0.4. k²=0.16. S(AOD)=50·0.16=8 cm²."
 },
 "test": [
  {
   "q": "The triangles are similar with ratio k=3 (from the smaller to the larger). The perimeter of the smaller triangle equals 14 cm. Find the perimeter of the larger triangle (in cm).",
   "ans": "42",
   "sol": "14·3=42 cm."
  },
  {
   "q": "Corresponding sides of two similar triangles equal 5 cm and 15 cm. Find the ratio of similarity (from the smaller to the larger).",
   "ans": "3",
   "sol": "15:5=3."
  },
  {
   "q": "The triangles are similar with ratio k=2 (from the smaller to the larger). The area of the smaller triangle equals 9 cm². Find the area of the larger triangle (in cm²).",
   "ans": "36",
   "sol": "k²=4. S=9·4=36 cm²."
  },
  {
   "q": "The triangles are similar with ratio k=5 (from the smaller to the larger). The area of the larger triangle equals 100 cm². Find the area of the smaller triangle (in cm²).",
   "ans": "4",
   "sol": "k²=25. S=100:25=4 cm²."
  },
  {
   "q": "A side of a triangle equals 24 cm. Find the length of the midsegment parallel to this side (in cm).",
   "ans": "12",
   "sol": "24:2=12 cm."
  },
  {
   "q": "The midsegment of a triangle equals 10 cm. Find the length of the side it is parallel to (in cm).",
   "ans": "20",
   "sol": "10·2=20 cm."
  },
  {
   "q": "A person 1.5 m tall casts a shadow of 2 m. At the same moment, a pole casts a shadow of 10 m. Find the height of the pole (in m).",
   "ans": "7.5",
   "sol": "1.5:2=0.75. h=10·0.75=7.5 m."
  },
  {
   "q": "By which criterion are triangles similar if two of their angles are respectively equal?",
   "opts": [
    "By two angles",
    "By two sides and the angle between them",
    "By three sides",
    "There is no such criterion"
   ],
   "ans": 0,
   "sol": "This is the criterion of similarity by two angles (AA)."
  }
 ],
 "lab": [
  {
   "t": "Height of a tree using its shadow",
   "b": "Choose a sunny day. Measure with a tape measure the length of the shadow of a stick or ruler of known height (for example, 1 m), then immediately measure the shadow of a tree, pole, or building. Set up a proportion (height of the stick : its shadow = height of the object : its shadow) and calculate the height of the object that cannot be measured directly."
  },
  {
   "t": "Mirror on the ground",
   "b": "Place a small mirror on the ground between yourself and a tall object (a tree, a lamppost). Walk away from the mirror until you see the top of the object in it. Measure the distance from your feet to the mirror, your own height, and the distance from the mirror to the base of the object — calculate the height of the object using similarity of triangles."
  },
  {
   "t": "Two people and their shadows",
   "b": "Together with someone close to you, stand side by side in the sun and measure each person's height and the length of each shadow. Check: the ratio of height to shadow should be the same for both (with a small measurement error) — this is similarity of triangles in practice."
  },
  {
   "t": "Midsegment with your own hands",
   "b": "Draw an arbitrary triangle on paper, use a ruler to find the midpoints of two of its sides, and connect them with a segment — this is the midsegment. Measure its length and the length of the third side: make sure the midsegment is exactly half as long and parallel to that side."
  }
 ],
 "steps": [
  {
   "title": "What similar triangles are",
   "body": "<p>Two triangles are called <b>similar</b> if their angles are respectively equal, and the sides of one are proportional to the sides of the other (that is, one is larger or smaller than the other by the same factor). Notation: △ABC ∼ △A₁B₁C₁.</p>",
   "exIdx": 0
  },
  {
   "title": "Ratio of similarity",
   "body": "<h3>Ratio of similarity</h3><p>The number k, showing how many times the sides of one triangle are larger (or smaller) than the corresponding sides of the other, is called the <b>ratio of similarity</b> (or scale factor). If k=3, then each side of the second triangle is three times larger than the corresponding side of the first. If k=1, the triangles are congruent — this is simply a special case of similarity.</p>",
   "exIdx": 0
  },
  {
   "title": "Criteria for similarity of triangles",
   "body": "<h3>Criteria for similarity of triangles</h3><p>To prove similarity, it is enough to check one of three criteria:</p><ul><li><b>By two angles.</b> If two angles of one triangle are equal to two angles of another, the triangles are similar (the third angle is equal automatically — the sum of angles is always 180°).</li><li><b>By two sides and the angle between them.</b> If two sides of one triangle are proportional to two sides of another, and the angles between these sides are equal, the triangles are similar.</li><li><b>By three sides.</b> If all three sides of one triangle are proportional to the three sides of another (all three ratios of corresponding sides are equal), the triangles are similar.</li></ul>",
   "exIdx": 3
  },
  {
   "title": "Perimeters and areas of similar triangles",
   "body": "<h3>Perimeters and areas of similar triangles</h3><p>The ratio of the perimeters of similar triangles equals the ratio of similarity k — just like the ratio of the sides. But the ratio of the areas equals <b>k²</b> — the square of the ratio of similarity, since area is a two-dimensional quantity (it depends on two measurements at once, not on one, like perimeter).</p>",
   "exIdx": 1
  },
  {
   "title": "Common mistake with area",
   "body": "<div class=\"warn\"><span class=\"hand\">Common mistake</span>You cannot recalculate the area of a similar triangle the same way as the perimeter! If k=3, the perimeter increases threefold, but the area increases 3²=9 times, not 3 times. Forgetting to square k when recalculating area is the most common mistake in this topic.</div>",
   "exIdx": 2
  },
  {
   "title": "Measuring inaccessible distances",
   "body": "<h3>Application: measuring inaccessible distances</h3><p>Similarity of triangles lets you find the height of objects that cannot be measured directly with a tape measure — a tree, a pole, a building. The simplest method: on a sunny day, measure the shadow of a stick of known height and the shadow of the tree at the same moment (sunlight rays are parallel, so the object with its shadow and the tree with its shadow form similar triangles). A similar method: place a mirror on the ground and, walking away from it, find the point from which you can see the top of the object: then the observer's height and the distance to the mirror form a proportion with the height of the object and the distance from the mirror to it.</p>",
   "exIdx": 4
  },
  {
   "title": "Midsegment of a triangle",
   "body": "<h3>Midsegment of a triangle</h3><p>The <b>midsegment</b> of a triangle is a segment connecting the midpoints of two of its sides. It is always parallel to the third side and equal to half of it. In fact, this is a special case of similarity: the small triangle cut off by the midsegment at the vertex is similar to the whole triangle with ratio k={1|2}.</p><div class=\"note\"><span class=\"hand\">Remember</span>The midsegment equals half of the third side and is parallel to it — both facts follow directly from similarity with ratio {1|2}.</div>",
   "exIdx": 5
  }
 ]
}

CONTENT_EN.vect = {
 "goal": "After this topic, you will be able to find the coordinates and length of a vector from two points, add and subtract vectors, multiply a vector by a number, and check whether two vectors are collinear.",
 "explain": "<p>Distance and direction are two different questions. \"It's 500 meters to school\" is a number (distance). \"It's 500 meters to school, to the northeast\" is already a <b>vector</b>: a number plus a direction. Velocity, force, displacement — these are all vector quantities, and a separate algebra was invented for them.</p><h3>A vector is a directed segment</h3><p>A <b>vector</b> is a segment with a marked beginning and end: an arrow runs, as it were, from the beginning to the end. A vector starting at point A and ending at point B is denoted <b>AB</b> (an arrow is drawn above the letters; in text we simply write AB, but remember the direction). The length of a vector is called its <b>magnitude</b> and is denoted |AB|. If the beginning and end of a vector coincide (A = B), the vector is called the <b>zero vector</b>: its length equals 0, and its direction is undefined. Two vectors are equal if they have the same length and the same direction — the segments themselves may be located in different places on the plane.</p><h3>Coordinates of a vector</h3><p>If the coordinates of the beginning A(x₁; y₁) and the end B(x₂; y₂) are known, the coordinates of vector AB are found like this: subtract the coordinates of the beginning from the coordinates of the end.</p><p><b>AB = (x₂ − x₁; y₂ − y₁)</b></p><p>For example, A(1; 2), B(4; 6). Then AB = (4 − 1; 6 − 2) = (3; 4). The reverse vector BA goes the other way, and its coordinates are numbers with opposite signs: BA = (1 − 4; 2 − 6) = (−3; −4).</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>People confuse what to subtract from what. The coordinates of vector AB are the coordinates of the END minus the coordinates of the BEGINNING (B minus A), not the other way around. The letter named first in the vector's name (in \"AB\" — that's A) is always the beginning.</div><h3>Length of a vector from its coordinates</h3><p>If a vector has coordinates (x; y), then together with the axes it forms a right triangle: the legs equal |x| and |y|, and the vector itself is the hypotenuse. By the Pythagorean theorem, the length of the vector is found like this:</p><p><b>|v| = √(x² + y²)</b></p><p>For the vector (3; 4), the length is √(9 + 16) = √25 = 5. It's handy to remember ready-made \"Pythagorean triples\": 3-4-5, 6-8-10, 5-12-13, 8-15-17 — if a vector's coordinates fit such a pair, the square root comes out without a calculator.</p><h3>Addition and subtraction of vectors</h3><p>Geometrically, vectors are added by the <b>triangle rule</b>: the second vector is laid off from the end of the first, and the sum runs from the beginning of the first to the end of the second. There is also an equivalent <b>parallelogram rule</b>: if both vectors are laid off from one point and a parallelogram is built on them, the sum is the diagonal from the common beginning.</p><p>With coordinates it's simpler: we add (or subtract) the x-coordinates separately and the y-coordinates separately.</p><ul><li>Addition: a(x₁; y₁) + b(x₂; y₂) = (x₁ + x₂; y₁ + y₂).</li><li>Subtraction: a(x₁; y₁) − b(x₂; y₂) = (x₁ − x₂; y₁ − y₂).</li></ul><p>For example, a(3; 5) and b(−1; 2): the sum (3 + (−1); 5 + 2) = (2; 7). The difference a − b: (3 − (−1); 5 − 2) = (4; 3).</p><div class=\"note\"><span class=\"hand\">Remember</span>Addition and subtraction of vectors by coordinates are done \"floor by floor\": x with x, y with y — the coordinates are never mixed with each other.</div><h3>Multiplying a vector by a number</h3><p>If vector v is multiplied by a number k, the result is a vector kv: its length equals |k| · |v|, and its direction matches the direction of v when k &gt; 0 and becomes opposite when k &lt; 0 (when k = 0 the result is the zero vector). By coordinates, both coordinates are multiplied by k: k · (x; y) = (kx; ky). For example, for v(4; 3) and k = 3 we get 3v = (12; 9), and the length grows threefold: 3 · 5 = 15. For k = −{1|2} we get a vector twice as short and pointing in the opposite direction.</p><h3>Collinear vectors</h3><p>Vectors are called <b>collinear</b> if they lie on the same line or on parallel lines — in other words, one of them can be obtained from the other by multiplying by a number. Collinear vectors have <b>proportional</b> coordinates: if a(x₁; y₁) and b(x₂; y₂) are collinear, then x₂ = k · x₁ and y₂ = k · y₁ for one and the same number k. This can be checked without division, by comparing \"cross\" products: the vectors are collinear if x₁ · y₂ − y₁ · x₂ = 0. For example, a(2; 3) and b(6; 9): 2 · 9 − 3 · 6 = 18 − 18 = 0 — collinear (here k = 3). But a(2; 3) and b(6; 10) are not collinear: 2 · 10 − 3 · 6 = 20 − 18 = 2 ≠ 0.</p>",
 "examples": [
  {
   "t": "Points A and B coincide: A(4; −3), B(4; −3). What is the magnitude of vector AB?",
   "s": "The beginning and end of the vector coincide, so vector AB is the zero vector. The length (magnitude) of the zero vector equals 0.<div class=\"figure\">__SVG_VECT_EX0_ZERO__</div>"
  },
  {
   "t": "Find the coordinates of vector AB, if A(1; 2) and B(4; 6).",
   "s": "The coordinates of a vector are the coordinates of the end minus the coordinates of the beginning: AB = (4 − 1; 6 − 2) = (3; 4).<div class=\"figure\">__SVG_VECT_EX1_COORDS__</div>"
  },
  {
   "t": "Find the length of a vector with coordinates (3; 4).",
   "s": "By the Pythagorean theorem, |v| = √(x² + y²) = √(3² + 4²) = √(9 + 16) = √25 = 5.<div class=\"figure\">__SVG_VECT_EX2_LENGTH__</div>"
  },
  {
   "t": "Add vectors a(2; 5) and b(3; −1). Also find the difference a − b.",
   "s": "Sum: add the coordinates separately: (2 + 3; 5 + (−1)) = (5; 4). Difference: (2 − 3; 5 − (−1)) = (−1; 6).<div class=\"figure\">__SVG_VECT_EX3_ADDSUB__</div>"
  },
  {
   "t": "Given vector v(4; 3), |v| = 5. Find the coordinates and length of vector 3v, and also of vector −2v.",
   "s": "When multiplying by a number, the coordinates are multiplied by that number: 3v = (3·4; 3·3) = (12; 9), length 3·5 = 15. −2v = (−2·4; −2·3) = (−8; −6), length |−2|·5 = 10, and the direction is opposite to the direction of v, since the number is negative.<div class=\"figure\">__SVG_VECT_EX4_SCALAR__</div>"
  },
  {
   "t": "Are vectors a(2; 3) and b(4; 6) collinear?",
   "s": "Let's check the proportionality of the coordinates: 4 : 2 = 2 and 6 : 3 = 2 — the ratios are equal, so b = 2a, and the vectors are collinear. Cross check: 2 · 6 − 3 · 4 = 12 − 12 = 0 — confirms collinearity.<div class=\"figure\">__SVG_VECT_EX5_COLLINEAR__</div>"
  }
 ],
 "tasks": [
  {
   "q": "Vector AB has coinciding beginning and end: A(5; −1), B(5; −1). Which statement is true?",
   "opts": [
    "The vector's length equals 0, direction is undefined",
    "The vector's length equals 1",
    "Vector AB points to the right",
    "No such vector exists"
   ],
   "ans": 0,
   "hint": "Recall what a vector whose beginning coincides with its end is called.",
   "sol": "If A = B, the vector is called the zero vector: its length equals 0, and its direction is undefined."
  },
  {
   "q": "Given points A(1; 2), B(5; 9). Find the x-coordinate of vector AB.",
   "ans": "4",
   "hint": "The coordinate of vector AB is found as x₂ − x₁ (end minus beginning).",
   "sol": "Vector AB = (B − A) = (5 − (1); 9 − (2)) = (4; 7). The required coordinate equals 4."
  },
  {
   "q": "Given points A(−2; 3), B(4; −1). Find the y-coordinate of vector AB.",
   "ans": "-4",
   "hint": "The coordinate of vector AB is found as y₂ − y₁ (end minus beginning).",
   "sol": "Vector AB = (B − A) = (4 − (-2); -1 − (3)) = (6; -4). The required coordinate equals -4."
  },
  {
   "q": "Given points A(5; −3), B(2; 1). Find the x-coordinate of vector AB.",
   "ans": "-3",
   "hint": "The coordinate of vector AB is found as x₂ − x₁ (end minus beginning).",
   "sol": "Vector AB = (B − A) = (2 − (5); 1 − (-3)) = (-3; 4). The required coordinate equals -3."
  },
  {
   "q": "Given points A(−4; −5), B(−4; 6). Find the y-coordinate of vector AB.",
   "ans": "11",
   "hint": "The coordinate of vector AB is found as y₂ − y₁ (end minus beginning).",
   "sol": "Vector AB = (B − A) = (-4 − (-4); 6 − (-5)) = (0; 11). The required coordinate equals 11."
  },
  {
   "q": "Given points A(7; 0), B(0; 0). Find the x-coordinate of vector AB.",
   "ans": "-7",
   "hint": "The coordinate of vector AB is found as x₂ − x₁ (end minus beginning).",
   "sol": "Vector AB = (B − A) = (0 − (7); 0 − (0)) = (-7; 0). The required coordinate equals -7."
  },
  {
   "q": "Given points A(3; 3), B(8; 3). Find the y-coordinate of vector AB.",
   "ans": "0",
   "hint": "The coordinate of vector AB is found as y₂ − y₁ (end minus beginning).",
   "sol": "Vector AB = (B − A) = (8 − (3); 3 − (3)) = (5; 0). The required coordinate equals 0."
  },
  {
   "q": "Find the length (magnitude) of a vector with coordinates (3; 4).",
   "ans": "5",
   "hint": "Use the formula |v| = √(x² + y²) — this is the Pythagorean theorem for legs |x| and |y|.",
   "sol": "|v| = √(3² + 4²) = √(9 + 16) = √25 = 5."
  },
  {
   "q": "Find the length (magnitude) of a vector with coordinates (-6; 8).",
   "ans": "10",
   "hint": "Use the formula |v| = √(x² + y²) — this is the Pythagorean theorem for legs |x| and |y|.",
   "sol": "|v| = √(-6² + 8²) = √(36 + 64) = √100 = 10."
  },
  {
   "q": "Find the length (magnitude) of a vector with coordinates (5; 12).",
   "ans": "13",
   "hint": "Use the formula |v| = √(x² + y²) — this is the Pythagorean theorem for legs |x| and |y|.",
   "sol": "|v| = √(5² + 12²) = √(25 + 144) = √169 = 13."
  },
  {
   "q": "Find the length (magnitude) of a vector with coordinates (-8; -6).",
   "ans": "10",
   "hint": "Use the formula |v| = √(x² + y²) — this is the Pythagorean theorem for legs |x| and |y|.",
   "sol": "|v| = √(-8² + -6²) = √(64 + 36) = √100 = 10."
  },
  {
   "q": "Find the length (magnitude) of a vector with coordinates (9; 12).",
   "ans": "15",
   "hint": "Use the formula |v| = √(x² + y²) — this is the Pythagorean theorem for legs |x| and |y|.",
   "sol": "|v| = √(9² + 12²) = √(81 + 144) = √225 = 15."
  },
  {
   "q": "Find the length (magnitude) of a vector with coordinates (7; 24).",
   "ans": "25",
   "hint": "Use the formula |v| = √(x² + y²) — this is the Pythagorean theorem for legs |x| and |y|.",
   "sol": "|v| = √(7² + 24²) = √(49 + 576) = √625 = 25."
  },
  {
   "q": "Given points A(1; 1) and B(4; 5). Find the length of vector AB.",
   "ans": "5",
   "hint": "First find the coordinates of vector AB (end minus beginning), then apply the Pythagorean theorem.",
   "sol": "AB = (4 − (1); 5 − (1)) = (3; 4). |AB| = √(3² + 4²) = √25 = 5."
  },
  {
   "q": "Given points A(-2; 0) and B(4; 8). Find the length of vector AB.",
   "ans": "10",
   "hint": "First find the coordinates of vector AB (end minus beginning), then apply the Pythagorean theorem.",
   "sol": "AB = (4 − (-2); 8 − (0)) = (6; 8). |AB| = √(6² + 8²) = √100 = 10."
  },
  {
   "q": "Given points A(0; 0) and B(-5; 12). Find the length of vector AB.",
   "ans": "13",
   "hint": "First find the coordinates of vector AB (end minus beginning), then apply the Pythagorean theorem.",
   "sol": "AB = (-5 − (0); 12 − (0)) = (-5; 12). |AB| = √(-5² + 12²) = √169 = 13."
  },
  {
   "q": "Given points A(2; -3) and B(10; 3). Find the length of vector AB.",
   "ans": "10",
   "hint": "First find the coordinates of vector AB (end minus beginning), then apply the Pythagorean theorem.",
   "sol": "AB = (10 − (2); 3 − (-3)) = (8; 6). |AB| = √(8² + 6²) = √100 = 10."
  },
  {
   "q": "Given vectors a(3; 5) and b(-1; 2). Find the x-coordinate of vector a + b.",
   "ans": "2",
   "hint": "To add vectors by coordinates, add x to x and y to y separately.",
   "sol": "a + b = (3 + -1; 5 + 2) = (2; 7). Answer: 2."
  },
  {
   "q": "Given vectors a(-4; 6) and b(7; -9). Find the y-coordinate of vector a + b.",
   "ans": "-3",
   "hint": "To add vectors by coordinates, add x to x and y to y separately.",
   "sol": "a + b = (-4 + 7; 6 + -9) = (3; -3). Answer: -3."
  },
  {
   "q": "Given vectors a(2; -5) and b(2; 5). Find the sum of the coordinates of vector a + b (that is, the x-coordinate plus the y-coordinate).",
   "ans": "4",
   "hint": "To add vectors by coordinates, add x to x and y to y separately.",
   "sol": "a + b = (2 + 2; -5 + 5) = (4; 0). Answer: 4."
  },
  {
   "q": "Given vectors a(0; -3) and b(-6; 0). Find the x-coordinate of vector a + b.",
   "ans": "-6",
   "hint": "To add vectors by coordinates, add x to x and y to y separately.",
   "sol": "a + b = (0 + -6; -3 + 0) = (-6; -3). Answer: -6."
  },
  {
   "q": "Given vectors a(5; 2) and b(3; 7). Find the y-coordinate of vector a − b.",
   "ans": "-5",
   "hint": "To subtract vectors by coordinates, subtract x from x and y from y separately.",
   "sol": "a − b = (5 − (3); 2 − (7)) = (2; -5). Answer: -5."
  },
  {
   "q": "Given vectors a(-3; 4) and b(-3; -4). Find the y-coordinate of vector a − b.",
   "ans": "8",
   "hint": "To subtract vectors by coordinates, subtract x from x and y from y separately.",
   "sol": "a − b = (-3 − (-3); 4 − (-4)) = (0; 8). Answer: 8."
  },
  {
   "q": "Given vectors a(6; -1) and b(2; 5). Find the x-coordinate of vector a − b.",
   "ans": "4",
   "hint": "To subtract vectors by coordinates, subtract x from x and y from y separately.",
   "sol": "a − b = (6 − (2); -1 − (5)) = (4; -6). Answer: 4."
  },
  {
   "q": "Given vectors a(1; 1) and b(10; 10). Find the sum of the coordinates of vector a − b.",
   "ans": "-18",
   "hint": "To subtract vectors by coordinates, subtract x from x and y from y separately.",
   "sol": "a − b = (1 − (10); 1 − (10)) = (-9; -9). Answer: -18."
  },
  {
   "q": "Given vector v(3; −2). Find the x-coordinate of vector 4v.",
   "ans": "12",
   "hint": "When a vector is multiplied by a number, both coordinates are multiplied by that number.",
   "sol": "4v = (4·3; 4·(−2)) = (12; −8). The x-coordinate equals 12."
  },
  {
   "q": "Given vector v(−5; 6). Find the y-coordinate of vector −2v.",
   "ans": "-12",
   "hint": "Multiply both coordinates by −2.",
   "sol": "−2v = (−2·(−5); −2·6) = (10; −12). The y-coordinate equals −12."
  },
  {
   "q": "Given vector v(4; 3), its length equals 5. Find the length of vector 3v.",
   "ans": "15",
   "hint": "When a vector is multiplied by a number k, its length is multiplied by |k|.",
   "sol": "The length of 3v equals |3| · |v| = 3 · 5 = 15. Check by coordinates: 3v = (12; 9), |3v| = √(144+81) = √225 = 15."
  },
  {
   "q": "Given vector v(8; −6), its length equals 10. Find the length of the vector obtained by multiplying v by the number −0.5.",
   "ans": "5",
   "hint": "The length is multiplied by the absolute value of the number, that is, by |−0.5| = 0.5.",
   "sol": "The new length equals |−0.5| · 10 = 0.5 · 10 = 5. Check: −0.5v = (−4; 3), √(16+9) = √25 = 5."
  },
  {
   "q": "Are vectors a(2; 3) and b(6; 9) collinear?",
   "opts": [
    "yes",
    "no"
   ],
   "ans": 0,
   "hint": "Check whether the coordinates are proportional: 6 : 2 and 9 : 3.",
   "sol": "6 : 2 = 3 and 9 : 3 = 3 — the ratios are equal, so b = 3a and the vectors are collinear. Answer: yes."
  },
  {
   "q": "Vector b is collinear with vector a(3; 5). It is known that the x-coordinate of vector b equals 9. Find the y-coordinate of vector b.",
   "ans": "15",
   "hint": "Find the coefficient k from the ratio of the x-coordinates: k = 9 : 3, then multiply the y-coordinate of a by k.",
   "sol": "k = 9 : 3 = 3. Then the y-coordinate of b equals 5 · 3 = 15: vector b = (9; 15) = 3a."
  },
  {
   "q": "Vectors a(4; 6) and b(x; 9) are collinear. Find x.",
   "ans": "6",
   "hint": "Find the coefficient k from the ratio of the y-coordinates: k = 9 : 6, then multiply the x-coordinate of a by k.",
   "sol": "k = 9 : 6 = 1.5. Then x = 4 · 1.5 = 6: vector b = (6; 9) = 1.5a."
  }
 ],
 "bonus": {
  "q": "Given points A(1; −2) and B(7; 6). On the extension of segment AB beyond point B, a point C is marked so that vector BC is collinear with vector AB, points in the same direction, and its length equals half the length of AB. Find the sum of the coordinates of point C.",
  "ans": "20",
  "hint": "First find the coordinates of vector AB and its length. Vector BC is half of vector AB (same direction, twice as short). Get the coordinates of C by adding BC to the coordinates of B.",
  "sol": "AB = (7 − 1; 6 − (−2)) = (6; 8), |AB| = √(36+64) = √100 = 10. Since BC is codirectional with AB and twice as short, BC = 0.5 · AB = (3; 4). Then C = B + BC = (7 + 3; 6 + 4) = (10; 10). Sum of coordinates: 10 + 10 = 20."
 },
 "test": [
  {
   "q": "Given points A(2; 5) and B(9; 1). Find the x-coordinate of vector AB.",
   "ans": "7",
   "sol": "AB = (9 − 2; 1 − 5) = (7; −4). The x-coordinate equals 7."
  },
  {
   "q": "Find the length of a vector with coordinates (5; 12).",
   "ans": "13",
   "sol": "|v| = √(25 + 144) = √169 = 13."
  },
  {
   "q": "Given points A(−1; −1) and B(5; 7). Find the length of vector AB.",
   "ans": "10",
   "sol": "AB = (5 − (−1); 7 − (−1)) = (6; 8). |AB| = √(36+64) = √100 = 10."
  },
  {
   "q": "Given vectors a(4; −3) and b(−1; 5). Find the y-coordinate of vector a + b.",
   "ans": "2",
   "sol": "a + b = (4 + (−1); −3 + 5) = (3; 2). The y-coordinate equals 2."
  },
  {
   "q": "Given vectors a(7; 2) and b(3; 9). Find the x-coordinate of vector a − b.",
   "ans": "4",
   "sol": "a − b = (7 − 3; 2 − 9) = (4; −7). The x-coordinate equals 4."
  },
  {
   "q": "Given vector v(6; −8), its length equals 10. Find the length of vector 2v.",
   "ans": "20",
   "sol": "The length of 2v equals 2 · 10 = 20. Check: 2v = (12; −16), √(144+256) = √400 = 20."
  },
  {
   "q": "Are vectors a(3; −6) and b(−2; 4) collinear?",
   "opts": [
    "yes",
    "no"
   ],
   "ans": 0,
   "sol": "Cross check: 3 · 4 − (−6) · (−2) = 12 − 12 = 0, so the vectors are collinear. Answer: yes."
  },
  {
   "q": "Vectors a(5; 10) and b(x; 4) are collinear. Find x.",
   "ans": "2",
   "sol": "Coefficient k = 4 : 10 = 0.4. Then x = 5 · 0.4 = 2."
  }
 ],
 "lab": [
  {
   "t": "Vectors on a city map",
   "b": "Open a map of your neighborhood (paper or on your phone) and choose a coordinate system: for example, the intersection near your home as the origin, the streets as the axes. Mark the coordinates (in grid squares or meters) of three familiar places: school, store, friend's house. Write down the coordinates of the vector from home to school and from school to the store. Add these two vectors together — do you get a vector straight from home to the store? Check by adding the coordinates."
  },
  {
   "t": "Forces on grid paper",
   "b": "On grid paper, mark a point — this will be the common beginning. Draw two vectors of different lengths and directions from it (like two forces acting on an object), and write down their coordinates in grid squares. Build a parallelogram on these vectors and draw the diagonal from the common beginning — this is the sum vector. Compare the length of the diagonal, measured with a ruler, with the length calculated by the formula using the coordinates of the sum."
  },
  {
   "t": "Checking for collinearity",
   "b": "Draw four vectors with different coordinates on grid paper (for example, (2;3), (4;6), (1;4), (−3;−4.5)), laying them all off from one point. Judge by eye which pairs lie on the same line, then check your guess by calculation (comparing the ratios of the coordinates or the cross products). How many pairs turned out to be collinear?"
  },
  {
   "t": "Magnitude of a vector and the Pythagorean theorem",
   "b": "On grid paper, construct five vectors with integer coordinates, chosen so that their length is a whole number (use the triples 3-4-5, 6-8-10, 5-12-13). For each vector, measure its length with a ruler (in centimeters, if the grid square is 1 cm) and compare it with the result calculated using the formula |v| = √(x² + y²)."
  }
 ],
 "steps": [
  {
   "title": "A vector is a directed segment",
   "body": "<p>Distance and direction are two different questions. \"It's 500 meters to school\" is a number (distance). \"It's 500 meters to school, to the northeast\" is already a <b>vector</b>: a number plus a direction. Velocity, force, displacement — these are all vector quantities, and a separate algebra was invented for them.</p><h3>A vector is a directed segment</h3><p>A <b>vector</b> is a segment with a marked beginning and end: an arrow runs, as it were, from the beginning to the end. A vector starting at point A and ending at point B is denoted <b>AB</b> (an arrow is drawn above the letters; in text we simply write AB, but remember the direction). The length of a vector is called its <b>magnitude</b> and is denoted |AB|. If the beginning and end of a vector coincide (A = B), the vector is called the <b>zero vector</b>: its length equals 0, and its direction is undefined. Two vectors are equal if they have the same length and the same direction — the segments themselves may be located in different places on the plane.</p>",
   "exIdx": 0
  },
  {
   "title": "Coordinates of a vector",
   "body": "<h3>Coordinates of a vector</h3><p>If the coordinates of the beginning A(x₁; y₁) and the end B(x₂; y₂) are known, the coordinates of vector AB are found like this: subtract the coordinates of the beginning from the coordinates of the end.</p><p><b>AB = (x₂ − x₁; y₂ − y₁)</b></p><p>For example, A(1; 2), B(4; 6). Then AB = (4 − 1; 6 − 2) = (3; 4). The reverse vector BA goes the other way, and its coordinates are numbers with opposite signs: BA = (1 − 4; 2 − 6) = (−3; −4).</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>People confuse what to subtract from what. The coordinates of vector AB are the coordinates of the END minus the coordinates of the BEGINNING (B minus A), not the other way around. The letter named first in the vector's name (in \"AB\" — that's A) is always the beginning.</div>",
   "exIdx": 1
  },
  {
   "title": "Length of a vector from its coordinates",
   "body": "<h3>Length of a vector from its coordinates</h3><p>If a vector has coordinates (x; y), then together with the axes it forms a right triangle: the legs equal |x| and |y|, and the vector itself is the hypotenuse. By the Pythagorean theorem, the length of the vector is found like this:</p><p><b>|v| = √(x² + y²)</b></p><p>For the vector (3; 4), the length is √(9 + 16) = √25 = 5. It's handy to remember ready-made \"Pythagorean triples\": 3-4-5, 6-8-10, 5-12-13, 8-15-17 — if a vector's coordinates fit such a pair, the square root comes out without a calculator.</p>",
   "exIdx": 2
  },
  {
   "title": "Adding vectors: the triangle and parallelogram rules",
   "body": "<h3>Addition and subtraction of vectors</h3><p>Geometrically, vectors are added by the <b>triangle rule</b>: the second vector is laid off from the end of the first, and the sum runs from the beginning of the first to the end of the second. There is also an equivalent <b>parallelogram rule</b>: if both vectors are laid off from one point and a parallelogram is built on them, the sum is the diagonal from the common beginning.</p>",
   "exIdx": 3
  },
  {
   "title": "Addition and subtraction of vectors by coordinates",
   "body": "<p>With coordinates it's simpler: we add (or subtract) the x-coordinates separately and the y-coordinates separately.</p><ul><li>Addition: a(x₁; y₁) + b(x₂; y₂) = (x₁ + x₂; y₁ + y₂).</li><li>Subtraction: a(x₁; y₁) − b(x₂; y₂) = (x₁ − x₂; y₁ − y₂).</li></ul><p>For example, a(3; 5) and b(−1; 2): the sum (3 + (−1); 5 + 2) = (2; 7). The difference a − b: (3 − (−1); 5 − 2) = (4; 3).</p><div class=\"note\"><span class=\"hand\">Remember</span>Addition and subtraction of vectors by coordinates are done \"floor by floor\": x with x, y with y — the coordinates are never mixed with each other.</div>",
   "exIdx": 3
  },
  {
   "title": "Multiplying a vector by a number",
   "body": "<h3>Multiplying a vector by a number</h3><p>If vector v is multiplied by a number k, the result is a vector kv: its length equals |k| · |v|, and its direction matches the direction of v when k &gt; 0 and becomes opposite when k &lt; 0 (when k = 0 the result is the zero vector). By coordinates, both coordinates are multiplied by k: k · (x; y) = (kx; ky). For example, for v(4; 3) and k = 3 we get 3v = (12; 9), and the length grows threefold: 3 · 5 = 15. For k = −{1|2} we get a vector twice as short and pointing in the opposite direction.</p>",
   "exIdx": 4
  },
  {
   "title": "Collinear vectors",
   "body": "<h3>Collinear vectors</h3><p>Vectors are called <b>collinear</b> if they lie on the same line or on parallel lines — in other words, one of them can be obtained from the other by multiplying by a number. Collinear vectors have <b>proportional</b> coordinates: if a(x₁; y₁) and b(x₂; y₂) are collinear, then x₂ = k · x₁ and y₂ = k · y₁ for one and the same number k. This can be checked without division, by comparing \"cross\" products: the vectors are collinear if x₁ · y₂ − y₁ · x₂ = 0. For example, a(2; 3) and b(6; 9): 2 · 9 − 3 · 6 = 18 − 18 = 0 — collinear (here k = 3). But a(2; 3) and b(6; 10) are not collinear: 2 · 10 − 3 · 6 = 20 − 18 = 2 ≠ 0.</p>",
   "exIdx": 5
  }
 ]
}

CONTENT_EN.trig = {
 "goal": "After this topic you will be able to find the sine, cosine, and tangent of an acute angle of a right triangle, use the table of values for 30°, 45°, and 60°, solve a right triangle (find its sides and angles), and apply this to problems involving height, distance, and angle of incline.",
 "explain": "<h3>Sine, Cosine, and Tangent of an Acute Angle</h3><p>Take a right triangle with an acute angle α. The side opposite the right angle is called the <b>hypotenuse</b> — it is always the longest side. Of the two legs, one lies next to angle α — this is the <b>adjacent leg</b>, and the other lies opposite angle α — this is the <b>opposite leg</b>.</p><p>For angle α, three ratios of the sides are defined:</p><ul><li><b>sin α</b> = opposite leg : hypotenuse</li><li><b>cos α</b> = adjacent leg : hypotenuse</li><li><b>tan α</b> = opposite leg : adjacent leg</li></ul><p>Important: these ratios depend only on the size of angle α, not on the size of the triangle itself — for any triangle with a 30° angle, the ratio of the opposite leg to the hypotenuse will be the same number.</p><div class=\"figure\">__SVG_TRIG_RATIOS__</div><h3>Table of Values for 30°, 45°, and 60°</h3><p>For three “convenient” angles, the values of sin, cos, and tan can be calculated exactly and memorized — they are used constantly in 9th-grade problems:</p><table><tr><th>α</th><th>sin α</th><th>cos α</th><th>tan α</th></tr><tr><td>30°</td><td>0.5</td><td>√3/2 ≈ 0.87</td><td>√3/3 ≈ 0.58</td></tr><tr><td>45°</td><td>√2/2 ≈ 0.71</td><td>√2/2 ≈ 0.71</td><td>1</td></tr><tr><td>60°</td><td>√3/2 ≈ 0.87</td><td>0.5</td><td>√3 ≈ 1.73</td></tr></table><p>Notice: sin 30° = cos 60°, and sin 60° = cos 30° — this is not a coincidence but a general property: the sine of an angle equals the cosine of its complement to 90°.</p><div class=\"warn\"><span class=\"hand\">Common mistake</span>The adjacent and opposite legs are not fixed labels for the sides of a triangle — they depend on which angle we are currently looking at! The same leg can be adjacent to one acute angle and opposite to the other. Before writing a formula, always first clearly mark: “this is the angle I am measuring relative to.”</div><h3>Fundamental Trigonometric Identity</h3><p>For any acute angle α, the following equality holds:</p><p><b>sin² α + cos² α = 1</b></p><p>It follows directly from the Pythagorean theorem: if the legs of the triangle are a (opposite) and b (adjacent), and the hypotenuse is c, then a² + b² = c². Divide both sides by c²: (a/c)² + (b/c)² = 1, and by definition a/c = sin α and b/c = cos α.</p><div class=\"note\"><span class=\"hand\">Remember</span>If sin α (or cos α) is known, the other value can always be found from the identity: cos α = √(1 − sin²α), sin α = √(1 − cos²α) — you don't need to know the angle itself to relate sine and cosine to each other.</div><h3>Solving a Right Triangle</h3><p>“Solving a triangle” means finding all of its unknown sides and angles. Two main cases for 9th grade:</p><ul><li><b>The hypotenuse and an angle are known.</b> Then the leg opposite this angle equals hypotenuse × sin α, and the leg adjacent to this angle equals hypotenuse × cos α.</li><li><b>Both legs are known.</b> Then tan α = opposite : adjacent, and if this ratio matches one of the table values (0.58, 1, or 1.73), the angle is immediately identified — 30°, 45°, or 60°.</li></ul><h3>Where This Is Applied</h3><p>Right-triangle trigonometry constantly comes up in measurement problems: the height of a tree or pole from a viewing angle, the distance to a nearby but inaccessible object (for example, across a river), the length of a shadow of an object at a known angle of elevation of the sun, the height reached by a ramp or ladder at a known angle of incline to the ground. In each such case, first determine which side is sought (the opposite or adjacent leg, or the hypotenuse), and then apply the needed formula.</p>",
 "examples": [
  {
   "t": "In a right triangle, the hypotenuse is 10 cm, and the acute angle α = 60°. Find the leg opposite angle α.",
   "s": "Opposite leg = hypotenuse · sin α = 10 · sin 60° = 10 · (√3/2) ≈ 10 · 0.87 = 8.66 cm.<div class=\"figure\">__SVG_TRIGEX_EX0_HYP10A60__</div>"
  },
  {
   "t": "In a right triangle, the hypotenuse is 8 cm, and the acute angle α = 45°. Find the leg opposite angle α.",
   "s": "At α = 45°, the leg = hypotenuse · sin 45° = 8 · (√2/2) ≈ 8 · 0.71 = 5.66 cm (the second leg turns out the same, since the 45° angle makes the triangle isosceles).<div class=\"figure\">__SVG_TRIGEX_EX1_HYP8A45__</div>"
  },
  {
   "t": "The legs of a right triangle are: the leg opposite angle α is 7 cm, the adjacent leg is 7√3 cm. Find angle α.",
   "s": "tan α = opposite : adjacent = 7 : (7√3) = 1/√3 ≈ 0.58. This is the table value of tan 30°, so α = 30°.<div class=\"figure\">__SVG_TRIGEX_EX2_LEGS7_7R3__</div>"
  },
  {
   "t": "It is known that sin α = √3/2 (this is sin 60°). Find cos α using the fundamental trigonometric identity.",
   "s": "cos α = √(1 − sin²α) = √(1 − 3/4) = √(1/4) = 1/2 = 0.5 — and indeed, from the table cos 60° = 0.5.<div class=\"figure\">__SVG_TRIGEX_EX3_SIN60FINDCOS__</div>"
  },
  {
   "t": "From the top of a cliff 9 m high, a campfire at its base is seen at an angle of depression of 60° to the horizontal. Find the distance from the base of the cliff to the campfire.",
   "s": "The height of the cliff is the opposite leg, the distance to the campfire is the adjacent leg: adjacent = opposite : tan α = 9 : tan 60° = 9 : 1.73 ≈ 5.2 m.<div class=\"figure\">__SVG_TRIGEX_EX4_CLIFF9A60__</div>"
  },
  {
   "t": "A ladder (hypotenuse) 9 m long is leaned against a wall at an angle of 45° to the ground. To what height does the top end of the ladder rise?",
   "s": "The height is the leg opposite the 45° angle: height = hypotenuse · sin 45° = 9 · (√2/2) ≈ 9 · 0.71 = 6.36 m.<div class=\"figure\">__SVG_TRIGEX_EX5_LADDER9A45__</div>"
  }
 ],
 "tasks": [
  {
   "q": "What is sin 30°?",
   "ans": "0.5",
   "hint": "This is one of the table values — it's worth simply memorizing.",
   "sol": "sin 30° = 0.5 (from the table of values)."
  },
  {
   "q": "What is cos 60°?",
   "ans": "0.5",
   "hint": "cos 60° is a table value.",
   "sol": "cos 60° = 0.5."
  },
  {
   "q": "What is tan 45°?",
   "ans": "1",
   "hint": "At a 45° angle, both legs are equal, so their ratio equals 1.",
   "sol": "tan 45° = 1 (the legs are equal to each other)."
  },
  {
   "q": "What is cos 30° (round to 2 decimal places)?",
   "ans": "0.87",
   "hint": "cos 30° = √3/2.",
   "sol": "cos 30° = √3/2 ≈ 0.87."
  },
  {
   "q": "What is sin 60° (round to 2 decimal places)?",
   "ans": "0.87",
   "hint": "sin 60° = √3/2.",
   "sol": "sin 60° = √3/2 ≈ 0.87."
  },
  {
   "q": "What is tan 60° (round to 2 decimal places)?",
   "ans": "1.73",
   "hint": "tan 60° = √3.",
   "sol": "tan 60° = √3 ≈ 1.73."
  },
  {
   "q": "It is known that cos α = √3/2 (this is a 30° angle). Find sin α using the fundamental trigonometric identity (round to 2 decimal places).",
   "ans": "0.5",
   "hint": "sin α = √(1 − cos²α).",
   "sol": "sin α = √(1 − 3/4) = √(1/4) = 0.5 — matches the table value sin 30°."
  },
  {
   "q": "It is known that sin α = √2/2 (this is a 45° angle). Find cos α using the fundamental trigonometric identity (round to 2 decimal places).",
   "ans": "0.71",
   "hint": "cos α = √(1 − sin²α).",
   "sol": "cos α = √(1 − 1/2) = √(1/2) = √2/2 ≈ 0.71 — matches the table value cos 45°."
  },
  {
   "q": "It is known that cos α = 0.5 (this is a 60° angle). Find sin α using the fundamental trigonometric identity (round to 2 decimal places).",
   "ans": "0.87",
   "hint": "sin α = √(1 − cos²α).",
   "sol": "sin α = √(1 − 0.25) = √0.75 = √3/2 ≈ 0.87 — matches the table value sin 60°."
  },
  {
   "q": "What is sin² 30° + cos² 30°?",
   "opts": [
    "0",
    "0.5",
    "1",
    "2"
   ],
   "ans": 2,
   "hint": "This is the fundamental trigonometric identity — it holds for any angle.",
   "sol": "By the fundamental trigonometric identity, sin²α + cos²α = 1 for any acute angle, including 30°."
  },
  {
   "q": "The hypotenuse of a right triangle is 10 cm, and the acute angle α = 30°. Find the leg opposite angle α (in cm).",
   "ans": "5",
   "hint": "Opposite leg = hypotenuse · sin α.",
   "sol": "10 · sin 30° = 10 · 0.5 = 5 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 10 cm, and the acute angle α = 30°. Find the leg adjacent to angle α (in cm, round to 2 decimal places).",
   "ans": "8.66",
   "hint": "Adjacent leg = hypotenuse · cos α.",
   "sol": "10 · cos 30° = 10 · (√3/2) ≈ 10 · 0.87 = 8.66 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 20 cm, and the acute angle α = 60°. Find the leg opposite angle α (in cm, round to 2 decimal places).",
   "ans": "17.32",
   "hint": "Opposite leg = hypotenuse · sin α.",
   "sol": "20 · sin 60° = 20 · (√3/2) ≈ 20 · 0.87 = 17.32 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 20 cm, and the acute angle α = 60°. Find the leg adjacent to angle α (in cm).",
   "ans": "10",
   "hint": "Adjacent leg = hypotenuse · cos α.",
   "sol": "20 · cos 60° = 20 · 0.5 = 10 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 14 cm, and the acute angle α = 45°. Find the leg opposite angle α (in cm, round to 1 decimal place).",
   "ans": "9.9",
   "hint": "At a 45° angle, leg = hypotenuse · sin 45°.",
   "sol": "14 · sin 45° = 14 · (√2/2) ≈ 14 · 0.71 = 9.9 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 8 cm, and the acute angle α = 30°. Find the leg opposite angle α (in cm).",
   "ans": "4",
   "hint": "Opposite leg = hypotenuse · sin α.",
   "sol": "8 · sin 30° = 8 · 0.5 = 4 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 16 cm, and the acute angle α = 60°. Find the leg adjacent to angle α (in cm).",
   "ans": "8",
   "hint": "Adjacent leg = hypotenuse · cos α.",
   "sol": "16 · cos 60° = 16 · 0.5 = 8 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 12 cm, and the acute angle α = 45°. Find the leg opposite angle α (in cm, round to 2 decimal places).",
   "ans": "8.49",
   "hint": "At a 45° angle, leg = hypotenuse · sin 45°.",
   "sol": "12 · sin 45° = 12 · (√2/2) ≈ 12 · 0.71 = 8.49 cm."
  },
  {
   "q": "The legs of a right triangle are 6 cm and 6 cm. Find the acute angle opposite one of these legs (in degrees).",
   "ans": "45",
   "hint": "Find the tangent of the angle as the ratio of the opposite leg to the adjacent leg and compare it with the table.",
   "sol": "tan α = 6 : 6 = 1 — this is the table value of tan 45°, so α = 45°."
  },
  {
   "q": "The leg opposite angle α is 5√3 cm, and the adjacent leg is 5 cm. Find angle α (in degrees).",
   "ans": "60",
   "hint": "tan α = opposite : adjacent.",
   "sol": "tan α = (5√3) : 5 = √3 ≈ 1.73 — this is the table value of tan 60°, so α = 60°."
  },
  {
   "q": "The leg opposite angle α is 3 cm, and the adjacent leg is 3√3 cm. Find angle α (in degrees).",
   "ans": "30",
   "hint": "tan α = opposite : adjacent.",
   "sol": "tan α = 3 : (3√3) = 1/√3 ≈ 0.58 — this is the table value of tan 30°, so α = 30°."
  },
  {
   "q": "The legs of a right triangle are 9 cm and 9 cm. Find the acute angle opposite one of these legs (in degrees).",
   "ans": "45",
   "hint": "Find the tangent of the angle as the ratio of the legs.",
   "sol": "tan α = 9 : 9 = 1 — the table value tan 45°, so α = 45°."
  },
  {
   "q": "The leg opposite angle α is 4√3 cm, and the adjacent leg is 4 cm. Find angle α (in degrees).",
   "ans": "60",
   "hint": "tan α = opposite : adjacent.",
   "sol": "tan α = (4√3) : 4 = √3 ≈ 1.73 — the table value tan 60°, so α = 60°."
  },
  {
   "q": "The leg opposite angle α is 2 cm, and the adjacent leg is 2√3 cm. Find angle α (in degrees).",
   "ans": "30",
   "hint": "tan α = opposite : adjacent.",
   "sol": "tan α = 2 : (2√3) = 1/√3 ≈ 0.58 — the table value tan 30°, so α = 30°."
  },
  {
   "q": "A ramp 8 m long forms a 30° angle with the ground. To what height does the upper end of the ramp rise (in m)?",
   "ans": "4",
   "hint": "The height is the leg opposite the angle of incline; the ramp's length is the hypotenuse.",
   "sol": "Height = 8 · sin 30° = 8 · 0.5 = 4 m."
  },
  {
   "q": "A ramp 10 m long forms a 30° angle with the ground. What horizontal distance does it cover (in m, round to 2 decimal places)?",
   "ans": "8.66",
   "hint": "The horizontal distance is the leg adjacent to the angle of incline.",
   "sol": "Distance = 10 · cos 30° = 10 · (√3/2) ≈ 10 · 0.87 = 8.66 m."
  },
  {
   "q": "An observer stands 20 m from a tree and sees its top at an angle of 45° to the horizontal. Find the height of the tree (in m).",
   "ans": "20",
   "hint": "tan of the angle = height : distance to the tree.",
   "sol": "Height = 20 · tan 45° = 20 · 1 = 20 m."
  },
  {
   "q": "From the top of a cliff 30 m high, a boat at its base is seen at an angle of depression of 30° to the horizontal. Find the distance from the base of the cliff to the boat (in m, round to 2 decimal places).",
   "ans": "51.96",
   "hint": "The height of the cliff is the opposite leg, the distance to the boat is the adjacent leg: adjacent = opposite : tan α.",
   "sol": "Distance = 30 : tan 30° = 30 : (1/√3) = 30 : 0.58 ≈ 51.96 m."
  },
  {
   "q": "A pole 6 m high casts a shadow when the sun's angle of elevation above the horizon is 60°. Find the length of the shadow (in m, round to 2 decimal places).",
   "ans": "3.46",
   "hint": "tan of the angle = pole height : shadow length, so shadow = height : tan of the angle.",
   "sol": "Shadow = 6 : tan 60° = 6 : 1.73 ≈ 3.46 m."
  },
  {
   "q": "A ladder 6 m long stands at a 60° angle to the ground. At what height is its upper end (in m, round to 1 decimal place)?",
   "ans": "5.2",
   "hint": "The height is the leg opposite the ladder's angle of incline to the ground.",
   "sol": "Height = 6 · sin 60° = 6 · (√3/2) ≈ 6 · 0.87 = 5.2 m."
  },
  {
   "q": "A cable 15 m long runs from the top of a flagpole to the ground at a 45° angle to the ground. What is the distance from the flagpole to the point where the cable is anchored on the ground (in m, round to 2 decimal places)?",
   "ans": "10.61",
   "hint": "The distance along the ground is the leg adjacent to the cable's angle of incline.",
   "sol": "Distance = 15 · cos 45° = 15 · (√2/2) ≈ 15 · 0.71 = 10.61 m."
  },
  {
   "q": "A ski slope 40 m long (in a straight line) is inclined to the ground at a 30° angle. What is the height of the hill that this slope climbs (in m)?",
   "ans": "20",
   "hint": "The height is the leg opposite the angle of incline; the slope's length is the hypotenuse.",
   "sol": "Height = 40 · sin 30° = 40 · 0.5 = 20 m."
  }
 ],
 "bonus": {
  "q": "In a right triangle, the acute angle is 30°, and the leg opposite this angle is 5 cm. Find the perimeter of the triangle (in cm, round to 2 decimal places).",
  "ans": "23.66",
  "hint": "First find the hypotenuse from sin 30° = opposite : hypotenuse, then the second leg via cos 30° (or via tan 30°), and then add up all three sides.",
  "sol": "Hypotenuse: 5 : sin 30° = 5 : 0.5 = 10 cm. Second leg (adjacent to the 30° angle): 10 · cos 30° = 10 · (√3/2) ≈ 8.66 cm. Perimeter: 5 + 8.66 + 10 = 23.66 cm."
 },
 "test": [
  {
   "q": "Which formula is correct for the acute angle α of a right triangle?",
   "opts": [
    "sin α = opposite : hypotenuse",
    "sin α = hypotenuse : opposite",
    "sin α = adjacent : hypotenuse",
    "sin α = opposite : adjacent"
   ],
   "ans": 0,
   "sol": "By definition, sin α is the ratio of the opposite leg to the hypotenuse."
  },
  {
   "q": "What is tan 60° (round to 2 decimal places)?",
   "ans": "1.73",
   "sol": "tan 60° = √3 ≈ 1.73."
  },
  {
   "q": "The hypotenuse of a right triangle is 14 cm, and the acute angle α = 30°. Find the leg opposite angle α (in cm).",
   "ans": "7",
   "sol": "14 · sin 30° = 14 · 0.5 = 7 cm."
  },
  {
   "q": "The hypotenuse of a right triangle is 10 cm, and the acute angle α = 45°. Find the leg opposite angle α (in cm, round to 2 decimal places).",
   "ans": "7.07",
   "sol": "10 · sin 45° = 10 · (√2/2) ≈ 10 · 0.71 = 7.07 cm."
  },
  {
   "q": "The legs of a right triangle are 8 cm and 8 cm. Find the acute angle opposite one of them (in degrees).",
   "ans": "45",
   "sol": "tan α = 8 : 8 = 1 — the table value tan 45°, so α = 45°."
  },
  {
   "q": "The leg opposite angle α is 5√3 cm, and the adjacent leg is 5 cm. Find angle α (in degrees).",
   "ans": "60",
   "sol": "tan α = (5√3) : 5 = √3 ≈ 1.73 — the table value tan 60°, so α = 60°."
  },
  {
   "q": "A ramp 12 m long forms a 30° angle with the ground. To what height does it rise (in m)?",
   "ans": "6",
   "sol": "Height = 12 · sin 30° = 12 · 0.5 = 6 m."
  },
  {
   "q": "What is sin² 60° + cos² 60°?",
   "opts": [
    "0",
    "0.5",
    "1",
    "2"
   ],
   "ans": 2,
   "sol": "By the fundamental trigonometric identity, sin²α + cos²α = 1 for any angle, including 60°."
  }
 ],
 "lab": [
  {
   "t": "Homemade Clinometer",
   "b": "Attach a protractor, a straight tube (or straw) along its zero line, and a weight on a string hung from the center — this makes a simple clinometer for measuring the angle of elevation of your line of sight. Look through the tube at the top of a tree or pole, record the angle, measure the distance to its base with a tape measure, and calculate the height using the tangent of this angle."
  },
  {
   "t": "Height of a Tree from Shadow Length",
   "b": "On a sunny day, measure your height and the length of your shadow, and calculate the sun's angle of elevation using tan α = height : shadow. Then measure the length of the shadow of a tree, pole, or house, and, using the same angle (there's only one sun for everyone!), calculate their height."
  },
  {
   "t": "Angle of Incline of a Staircase",
   "b": "Choose a staircase (in a house, a stairwell, or outside) and measure the height of one step and its horizontal depth with a tape measure. Calculate the angle of incline of the staircase using tan α = step height : step depth. Compare the angles of several different staircases — which one turned out to be the steepest?"
  },
  {
   "t": "Checking Table Values on Paper",
   "b": "Using a protractor and ruler, draw a right triangle with an acute angle of 30° and a hypotenuse of exactly 10 cm. Measure both legs with a ruler and divide each by the length of the hypotenuse — compare the resulting ratios with the table values sin 30° and cos 30°. Repeat the construction for a 45° or 60° angle."
  }
 ],
 "steps": [
  {
   "title": "Sine, Cosine, and Tangent of an Acute Angle",
   "body": "<h3>Sine, Cosine, and Tangent of an Acute Angle</h3><p>Take a right triangle with an acute angle α. The side opposite the right angle is called the <b>hypotenuse</b> — it is always the longest side. Of the two legs, one lies next to angle α — this is the <b>adjacent leg</b>, and the other lies opposite angle α — this is the <b>opposite leg</b>.</p><p>For angle α, three ratios of the sides are defined:</p><ul><li><b>sin α</b> = opposite leg : hypotenuse</li><li><b>cos α</b> = adjacent leg : hypotenuse</li><li><b>tan α</b> = opposite leg : adjacent leg</li></ul><p>Important: these ratios depend only on the size of angle α, not on the size of the triangle itself — for any triangle with a 30° angle, the ratio of the opposite leg to the hypotenuse will be the same number.</p><div class=\"figure\">__SVG_TRIG_RATIOS__</div>"
  },
  {
   "title": "Table of Values for 30°, 45°, and 60°",
   "body": "<h3>Table of Values for 30°, 45°, and 60°</h3><p>For three “convenient” angles, the values of sin, cos, and tan can be calculated exactly and memorized — they are used constantly in 9th-grade problems:</p><table><tr><th>α</th><th>sin α</th><th>cos α</th><th>tan α</th></tr><tr><td>30°</td><td>0.5</td><td>√3/2 ≈ 0.87</td><td>√3/3 ≈ 0.58</td></tr><tr><td>45°</td><td>√2/2 ≈ 0.71</td><td>√2/2 ≈ 0.71</td><td>1</td></tr><tr><td>60°</td><td>√3/2 ≈ 0.87</td><td>0.5</td><td>√3 ≈ 1.73</td></tr></table><p>Notice: sin 30° = cos 60°, and sin 60° = cos 30° — this is not a coincidence but a general property: the sine of an angle equals the cosine of its complement to 90°.</p>",
   "exIdx": [
    0,
    1
   ]
  },
  {
   "title": "Adjacent or Opposite — Look at the Angle",
   "body": "<div class=\"warn\"><span class=\"hand\">Common mistake</span>The adjacent and opposite legs are not fixed labels for the sides of a triangle — they depend on which angle we are currently looking at! The same leg can be adjacent to one acute angle and opposite to the other. Before writing a formula, always first clearly mark: “this is the angle I am measuring relative to.”</div>",
   "exIdx": 2
  },
  {
   "title": "Fundamental Trigonometric Identity",
   "body": "<h3>Fundamental Trigonometric Identity</h3><p>For any acute angle α, the following equality holds:</p><p><b>sin² α + cos² α = 1</b></p><p>It follows directly from the Pythagorean theorem: if the legs of the triangle are a (opposite) and b (adjacent), and the hypotenuse is c, then a² + b² = c². Divide both sides by c²: (a/c)² + (b/c)² = 1, and by definition a/c = sin α and b/c = cos α.</p><div class=\"note\"><span class=\"hand\">Remember</span>If sin α (or cos α) is known, the other value can always be found from the identity: cos α = √(1 − sin²α), sin α = √(1 − cos²α) — you don't need to know the angle itself to relate sine and cosine to each other.</div>",
   "exIdx": 3
  },
  {
   "title": "Solving a Triangle: Hypotenuse and Angle Known",
   "body": "<h3>Solving a Right Triangle</h3><p>“Solving a triangle” means finding all of its unknown sides and angles. Two main cases for 9th grade:</p><ul><li><b>The hypotenuse and an angle are known.</b> Then the leg opposite this angle equals hypotenuse × sin α, and the leg adjacent to this angle equals hypotenuse × cos α.</li></ul>",
   "exIdx": [
    0,
    1
   ]
  },
  {
   "title": "Solving a Triangle: Both Legs Known",
   "body": "<ul><li><b>Both legs are known.</b> Then tan α = opposite : adjacent, and if this ratio matches one of the table values (0.58, 1, or 1.73), the angle is immediately identified — 30°, 45°, or 60°.</li></ul>",
   "exIdx": 2
  },
  {
   "title": "Where This Is Applied",
   "body": "<h3>Where This Is Applied</h3><p>Right-triangle trigonometry constantly comes up in measurement problems: the height of a tree or pole from a viewing angle, the distance to a nearby but inaccessible object (for example, across a river), the length of a shadow of an object at a known angle of elevation of the sun, the height reached by a ramp or ladder at a known angle of incline to the ground. In each such case, first determine which side is sought (the opposite or adjacent leg, or the hypotenuse), and then apply the needed formula.</p>",
   "exIdx": [
    4,
    5
   ]
  }
 ]
}
})();
