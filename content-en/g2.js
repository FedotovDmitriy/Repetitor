/* ===================================================================
   English content for grade 2 (CONTENT_EN) — loaded on demand by
   ensureContentEn() in index.html when the interface language is
   English and a grade-2 topic is opened. Mirrors the structure of
   the Russian CONTENT.<id> objects exactly (same field names, same
   example/task/test counts and order, same ans values) so progress
   saved while answering tasks lines up regardless of language.

   Illustrations (SVG figures referenced via __SVG_X__ markers) are
   NOT re-localized in this version — they still show Russian labels
   baked into the SVG itself (e.g. "дес."/"ед."). Re-drawing every
   figure in English is a separate, much larger task, deferred along
   with topic/node names and cheat-sheet formulas. See CHANGELOG.
   ================================================================= */
(function(){

CONTENT_EN.n2 = {
  goal: "After this topic, you will be able to confidently read, write, and compare numbers up to 100, and add and subtract them both mentally and in columns.",
  explain: "<p>You already know how to count to 20. But what if you need to count to 100? To do that, numbers are grouped into tens — just like apples are packed into bags of 10. Let us see how it works.</p>"
  + "<h3>Tens and ones</h3>"
  + "<p>The number 35 is made up of 3 tens and 5 ones: that is 3 full bags of 10 apples plus 5 more apples on their own. In how a number is written, the digit on the right shows the <b>ones</b>, and the digit on the left shows the <b>tens</b>. In the number 35, the digit 3 is in the tens place, and the digit 5 is in the ones place.</p>"
  + "<p>10 tens make 100 (one hundred). That is why every number from 1 to 99 has only two places: tens and ones.</p>"
  + "<div class='note'><span class='hand'>Remember</span>35 = 30 + 5. Any number up to 100 can be split into a round number of tens plus ones.</div>"
  + "<h3>Reading and writing numbers to 100</h3>"
  + "<p>We say the tens first, then the ones: 4 tens and 7 ones is &ldquo;forty-seven,&rdquo; written 47. If there are no ones, we must write 0 in their place: 6 tens with no ones is &ldquo;sixty,&rdquo; written 60, not 6.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>The number &ldquo;sixty&rdquo; is sometimes mistakenly written as 6 — forgetting the zero in the ones place. But 6 and 60 are completely different numbers! If there are no ones, you must write the zero.</div>"
  + "<h3>Comparing numbers and neighbors</h3>"
  + "<p>To compare two numbers up to 100, first look at who has more tens — that number is bigger. If the tens are equal, compare the ones. For example, 52 and 58: the tens are equal, both 5, but the ones are 2 and 8 — so 52 is less than 58. But take 63 and 59: the tens are 6 and 5 — so 63 is bigger, even though its ones digit 3 is less than 9.</p>"
  + "<p><b>A number&rsquo;s neighbors</b> are the number right before it and the number right after it. The previous number is 1 less, the next number is 1 more. The neighbors of 40 are 39 and 41.</p>"
  + "<h3>Adding and subtracting mentally</h3>"
  + "<p>Mental math is easier if you break numbers into convenient parts.</p>"
  + "<p><b>The &ldquo;friendly numbers&rdquo; trick.</b> To add 34 + 42, first add the round tens: 30 + 40 = 70, then the ones: 4 + 2 = 6, then add the results: 70 + 6 = 76.</p>"
  + "<p><b>The &ldquo;bridge through ten&rdquo; trick.</b> To add 48 + 6, first top up 48 to a round ten: 48 + 2 = 50. We split 6 into 2 and 4 (6 = 2 + 4), so we still need to add 4: 50 + 4 = 54.</p>"
  + "<p>The same trick helps with subtraction too. Let us find 52 − 5: first subtract down to a round ten: 52 − 2 = 50. We split 5 into 2 and 3 (5 = 2 + 3), so we still need to subtract 3: 50 − 3 = 47.</p>"
  + "<div class='note'><span class='hand'>Remember</span>It is handy to first &ldquo;stretch&rdquo; a number to a round ten, then add or subtract whatever is left.</div>"
  + "<h3>Column addition and subtraction</h3>"
  + "<p>When numbers are added or subtracted in writing, they are lined up one under the other so tens are under tens and ones are under ones. We count right to left: ones first, then tens.</p>"
  + "<p>See how a ten carries over: 27 + 35 = 62.</p><div class='figure'>__SVG_N2_COLSUM_ANIM__</div>"
  + "<p>Subtraction also goes right to left. If there are not enough ones on top, we &ldquo;borrow&rdquo; a ten from the next place. Let us find 54 − 28. Ones: 4 is less than 8, so we borrow a ten: 5 tens becomes 4 tens, and 4 ones becomes 14. 14 − 8 = 6. Tens: 4 − 2 = 2. We get 26.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>After &ldquo;borrowing&rdquo; a ten, the higher place has 1 less than before. Forgetting this makes the answer come out 10 too high.</div>"
  + "<h3>Equations with a box</h3>"
  + "<p>Sometimes a number in a problem is hidden behind a box □ — you need to find it. In addition, you find the box by subtracting the known addend from the sum. In 36 + □ = 50, the box equals 50 − 36 = 14. Check: 36 + 14 = 50 — correct.</p>"
  + "<p>In subtraction, the box can be in different spots. If the box is what is being subtracted from: □ − 23 = 19, then the box equals 19 + 23 = 42. If the box is what is being subtracted: 70 − □ = 25, then the box equals 70 − 25 = 45.</p>"
  + "<div class='note'><span class='hand'>Remember</span>Always check the box: plug the number you found back into the problem and calculate — it should give a true equation.</div>",
  examples: [
    {t:"Split the number 68 into tens and ones.", s:"In the number 68, the digit 6 is in the tens place — that is 6 tens, or 60. The digit 8 is in the ones place — that is 8 ones. So 68 = 60 + 8."},
    {t:"Write the number &ldquo;seven tens, four ones&rdquo; in digits.", s:"7 tens — write 7 in the tens place. 4 ones — write 4 in the ones place. We get the number 74."},
    {t:"Compare the numbers 47 and 52.", s:"Look at the tens: 47 has 4 tens, 52 has 5 tens. 5 is more than 4, so 52 is bigger. That means 47 is less than 52."},
    {t:"Find the neighbors of the number 90.", s:"The previous number is 1 less: 90 − 1 = 89. The next number is 1 more: 90 + 1 = 91. The neighbors of 90 are 89 and 91."},
    {t:"Add mentally using a convenient method: 29 + 6.", s:"Top up 29 to a round ten: 29 + 1 = 30. We split 6 into 1 and 5 (6 = 1 + 5), so we still need to add 5: 30 + 5 = 35."},
    {t:"Find the sum in columns: 48 + 37.", s:"Ones: 8 + 7 = 15, write 5, carry 1 ten. Tens: 4 + 3 + 1 (carried) = 8. Answer: 85."},
    {t:"Find the box: 54 − □ = 20.", s:"Here the box is what is being subtracted. To find it, subtract the difference from the minuend: 54 − 20 = 34. Check: 54 − 34 = 20 — correct."}
  ],
  tasks: [
    {q:"How many tens are in the number 95?", ans:"9", hint:"The tens digit is the one on the left in how the number is written.", sol:"In the number 95, the digit 9 is in the tens place. So the number 95 has 9 tens."},
    {q:"Which digit is in the ones place in the number 48?", ans:"8", hint:"The ones digit is on the right in how the number is written.", sol:"In the number 48, the digit on the right is 8, and it is in the ones place."},
    {q:"Write the number &ldquo;six tens and zero ones&rdquo; in digits.", ans:"60", hint:"If there are no ones, write 0 in their place.", sol:"6 tens — digit 6 in the tens place, 0 ones — digit 0 in the ones place. We get the number 60."},
    {q:"What number has 5 tens and 3 ones?", ans:"53", hint:"Write the tens first, then the ones.", sol:"5 tens — digit 5 in the tens place, 3 ones — digit 3 in the ones place. The number is 53."},
    {q:"Which of these numbers is the smallest?", opts:["38","52","29","61"], ans:2, hint:"Compare how many tens each number has.", sol:"The numbers have 3, 5, 2, and 6 tens respectively. The fewest tens belongs to 29 — so it is the smallest."},
    {q:"Name the number that comes before 50.", ans:"49", hint:"The previous number is 1 less.", sol:"50 − 1 = 49."},
    {q:"Name the number that comes after 79.", ans:"80", hint:"The next number is 1 more.", sol:"79 + 1 = 80."},
    {q:"Calculate mentally: 57 + 8.", ans:"65", hint:"Top up 57 to the round ten 60, then add what is left.", sol:"57 + 3 = 60 (topped up to a ten). We split 8 into 3 and 5, so we still add 5: 60 + 5 = 65."},
    {q:"Calculate using a convenient method: 34 + 42.", ans:"76", hint:"Add the tens separately, then the ones separately.", sol:"Tens: 30 + 40 = 70. Ones: 4 + 2 = 6. Together: 70 + 6 = 76."},
    {q:"Calculate mentally: 63 − 7.", ans:"56", hint:"First subtract down to the round ten 60, then subtract the rest.", sol:"63 − 3 = 60 (reached the ten). We split 7 into 3 and 4, so we still subtract 4: 60 − 4 = 56."},
    {q:"Find the sum in columns: 46 + 39.", ans:"85", hint:"Add right to left, and do not forget to carry.", sol:"Ones: 6 + 9 = 15, write 5, carry 1 to the tens. Tens: 4 + 3 + 1 = 8. Answer: 85."},
    {q:"Find the difference in columns: 72 − 48.", ans:"24", hint:"There are not enough ones on top — borrow a ten.", sol:"Ones: 2 is less than 8, borrow a ten: 7 tens becomes 6, and 2 ones becomes 12. 12 − 8 = 4. Tens: 6 − 4 = 2. Answer: 24."},
    {q:"Find the box: 28 + □ = 61.", ans:"33", hint:"Subtract the known addend from the sum.", sol:"□ = 61 − 28 = 33. Check: 28 + 33 = 61 — correct."},
    {q:"Find the box: □ − 17 = 26.", ans:"43", hint:"The box is what is being subtracted from. Add the subtrahend and the difference.", sol:"□ = 26 + 17 = 43. Check: 43 − 17 = 26 — correct."},
    {q:"Find the box: 90 − □ = 35.", ans:"55", hint:"The box is what is being subtracted. Subtract the difference from the minuend.", sol:"□ = 90 − 35 = 55. Check: 90 − 55 = 35 — correct."},
    {q:"Marina had 24 stickers. She was given 19 more stickers. How many stickers does Marina have now?", ans:"43", hint:"She had some and was given more — add them.", sol:"24 + 19 = 43 stickers."},
    {q:"There were 56 passengers on the bus. 23 people got off at a stop. How many passengers are left on the bus?", ans:"33", hint:"Some got off, so there are fewer — subtract.", sol:"56 − 23 = 33 passengers."},
    {q:"Which of these is solved INCORRECTLY?", opts:["35+20=55","48−6=42","27+5=42","90−40=50"], ans:2, hint:"Check each one separately.", sol:"35 + 20 = 55 — correct. 48 − 6 = 42 — correct. 27 + 5 = 32, not 42 — that is the mistake. 90 − 40 = 50 — correct."},
    {q:"How many tens do you get if you combine 4 tens and 3 more tens?", ans:"7", hint:"Add up the number of tens.", sol:"4 tens + 3 tens = 7 tens, which is the number 70."},
    {q:"Compare: 6 tens 3 ones and the number 59. Which is bigger?", opts:["6 tens 3 ones","59","They are equal"], ans:0, hint:"First write &ldquo;6 tens 3 ones&rdquo; as an ordinary number.", sol:"6 tens 3 ones is the number 63. Comparing 63 and 59, the tens are 6 and 5 — so 63 is bigger."}
  ],
  bonus: {q:"I am thinking of a number. If you add 24 to it and then subtract 9, you get 50. What number am I thinking of?", ans:"35", hint:"Do the opposite operations, starting from the end.", sol:"The last step was subtracting 9, so before that it was 50 + 9 = 59. Before that, 24 was added, so the number is 59 − 24 = 35. Check: 35 + 24 = 59, 59 − 9 = 50."},
  test: [
    {q:"How many tens are in the number 67?", ans:"6", sol:"In the number 67, the digit 6 is in the tens place. So, 6 tens."},
    {q:"Write the number &ldquo;nine tens and five ones&rdquo; in digits.", ans:"95", sol:"9 tens — digit 9 in the tens place, 5 ones — digit 5 in the ones place. The number is 95."},
    {q:"Compare the numbers 83 and 79. Which is bigger?", opts:["83","79","They are equal"], ans:0, sol:"83 has 8 tens, 79 has 7 tens. 8 is more than 7, so 83 is bigger."},
    {q:"Name the number that comes before 60.", ans:"59", sol:"60 − 1 = 59."},
    {q:"Calculate mentally: 56 + 7.", ans:"63", sol:"56 + 4 = 60 (topped up to a ten). We split 7 into 4 and 3, so we still add 3: 60 + 3 = 63."},
    {q:"Find the difference in columns: 81 − 37.", ans:"44", sol:"Ones: 1 is less than 7, borrow a ten: 8 tens becomes 7, and 1 one becomes 11. 11 − 7 = 4. Tens: 7 − 3 = 4. Answer: 44."},
    {q:"Find the box: 45 + □ = 72.", ans:"27", sol:"□ = 72 − 45 = 27. Check: 45 + 27 = 72 — correct."},
    {q:"There were 50 pencils in a box. 18 pencils were taken out. How many pencils are left in the box?", ans:"32", sol:"50 − 18 = 32 pencils."}
  ],
  lab: [
    {t:"Tens from sticks", b:"Take counting sticks, buttons, or dry pasta. Gather them into bundles of 10 and secure each with a rubber band — these are tens. Put together 4 full bundles plus 6 more pieces on their own. How many do you have in total? Write the number in digits and say how many tens and ones it has."},
    {t:"Coins to a hundred", b:"Take coins worth 10 (or draw them on paper). Lay out 7 such coins — how much is that? Add 3 more 1-value coins. Write the resulting number and read it aloud."},
    {t:"Number line", b:"Draw a line on paper with numbers from 0 to 100 every 10: 0, 10, 20, and so on up to 100. Mark the number 47 on it. Find its neighbors on the line — 46 and 48 — as well as the nearest round tens — 40 and 50."},
    {t:"Shop with a box", b:"Play shop with your parents. Say you had 100 rubles, you bought a toy, and 65 rubles are left. How much did the toy cost? Write the problem with a box: 100 − □ = 65, and find what the box equals."}
  ]
};
CONTENT_EN.n2.examples[0].s += "<div class='figure'>__SVG_N2_EX0_PLACEVALUE68__</div>";
CONTENT_EN.n2.examples[1].s += "<div class='figure'>__SVG_N2_EX1_WRITE74__</div>";
CONTENT_EN.n2.examples[2].s += "<div class='figure'>__SVG_N2_EX2_COMPARE__</div>";
CONTENT_EN.n2.examples[3].s += "<div class='figure'>__SVG_N2_EX3_NEIGHBORS__</div>";
CONTENT_EN.n2.examples[4].s += "<div class='figure'>__SVG_N2_EX4_THROUGHTEN__</div>";
CONTENT_EN.n2.examples[5].s += "<div class='figure'>__SVG_N2_EX5_COLSUM__</div>";
CONTENT_EN.n2.examples[6].s += "<div class='figure'>__SVG_N2_EX6_WINDOW__</div>";
CONTENT_EN.n2.steps = [
  {title:"Tens and ones", body:
    "<p>You already know how to count to 20. But what if you need to count to 100? To do that, numbers are grouped into tens — just like apples are packed into bags of 10. Let us see how it works.</p>"
    +"<h3>Tens and ones</h3><p>The number 35 is made up of 3 tens and 5 ones: that is 3 full bags of 10 apples plus 5 more apples on their own. In how a number is written, the digit on the right shows the <b>ones</b>, and the digit on the left shows the <b>tens</b>. In the number 35, the digit 3 is in the tens place, and the digit 5 is in the ones place.</p><p>10 tens make 100 (one hundred). That is why every number from 1 to 99 has only two places: tens and ones.</p><div class='note'><span class='hand'>Remember</span>35 = 30 + 5. Any number up to 100 can be split into a round number of tens plus ones.</div>",
    exIdx:0},
  {title:"Reading and writing numbers to 100", body:
    "<h3>Reading and writing numbers to 100</h3><p>We say the tens first, then the ones: 4 tens and 7 ones is &ldquo;forty-seven,&rdquo; written 47. If there are no ones, we must write 0 in their place: 6 tens with no ones is &ldquo;sixty,&rdquo; written 60, not 6.</p><div class='warn'><span class='hand'>Common mistake</span>The number &ldquo;sixty&rdquo; is sometimes mistakenly written as 6 — forgetting the zero in the ones place. But 6 and 60 are completely different numbers! If there are no ones, you must write the zero.</div>",
    exIdx:1},
  {title:"Comparing numbers", body:
    "<h3>Comparing numbers and neighbors</h3><p>To compare two numbers up to 100, first look at who has more tens — that number is bigger. If the tens are equal, compare the ones. For example, 52 and 58: the tens are equal, both 5, but the ones are 2 and 8 — so 52 is less than 58. But take 63 and 59: the tens are 6 and 5 — so 63 is bigger, even though its ones digit 3 is less than 9.</p>",
    exIdx:2},
  {title:"A number's neighbors", body:
    "<p><b>A number&rsquo;s neighbors</b> are the number right before it and the number right after it. The previous number is 1 less, the next number is 1 more. The neighbors of 40 are 39 and 41.</p>",
    exIdx:3},
  {title:"Convenient mental math: round tens", body:
    "<h3>Adding and subtracting mentally</h3><p>Mental math is easier if you break numbers into convenient parts.</p><p><b>The &ldquo;friendly numbers&rdquo; trick.</b> To add 34 + 42, first add the round tens: 30 + 40 = 70, then the ones: 4 + 2 = 6, then add the results: 70 + 6 = 76.</p>"
    +"<div class='figure'>__SVG_N2_MENTAL_TENS__</div>"},
  {title:"The 'bridge through ten' trick", body:
    "<p><b>The &ldquo;bridge through ten&rdquo; trick.</b> To add 48 + 6, first top up 48 to a round ten: 48 + 2 = 50. We split 6 into 2 and 4 (6 = 2 + 4), so we still need to add 4: 50 + 4 = 54.</p><p>The same trick helps with subtraction too. Let us find 52 − 5: first subtract down to a round ten: 52 − 2 = 50. We split 5 into 2 and 3 (5 = 2 + 3), so we still need to subtract 3: 50 − 3 = 47.</p><div class='note'><span class='hand'>Remember</span>It is handy to first &ldquo;stretch&rdquo; a number to a round ten, then add or subtract whatever is left.</div>",
    exIdx:4},
  {title:"Column addition", body:
    "<h3>Column addition and subtraction</h3><p>When numbers are added or subtracted in writing, they are lined up one under the other so tens are under tens and ones are under ones. We count right to left: ones first, then tens.</p><p>See how a ten carries over: 27 + 35 = 62.</p><div class='figure'>__SVG_N2_COLSUM_ANIM__</div>",
    exIdx:5},
  {title:"Column subtraction", body:
    "<p>Subtraction also goes right to left. If there are not enough ones on top, we &ldquo;borrow&rdquo; a ten from the next place. Let us find 54 − 28. Ones: 4 is less than 8, so we borrow a ten: 5 tens becomes 4 tens, and 4 ones becomes 14. 14 − 8 = 6. Tens: 4 − 2 = 2. We get 26.</p><div class='warn'><span class='hand'>Common mistake</span>After &ldquo;borrowing&rdquo; a ten, the higher place has 1 less than before. Forgetting this makes the answer come out 10 too high.</div>"
    +"<div class='figure'>__SVG_N2_BORROW_54_28__</div>"},
  {title:"Equations with a box", body:
    "<h3>Equations with a box</h3><p>Sometimes a number in a problem is hidden behind a box □ — you need to find it. In addition, you find the box by subtracting the known addend from the sum. In 36 + □ = 50, the box equals 50 − 36 = 14. Check: 36 + 14 = 50 — correct.</p><p>In subtraction, the box can be in different spots. If the box is what is being subtracted from: □ − 23 = 19, then the box equals 19 + 23 = 42. If the box is what is being subtracted: 70 − □ = 25, then the box equals 70 − 25 = 45.</p><div class='note'><span class='hand'>Remember</span>Always check the box: plug the number you found back into the problem and calculate — it should give a true equation.</div>",
    exIdx:6}
];

CONTENT_EN.mul2 = {
  goal: "After this topic, you will be able to replace a sum of equal addends with multiplication, use the multiplication tables for 2, 3, 4, and 5, and divide objects into equal groups while understanding how division connects to multiplication.",
  explain: "<p>You already know how to add numbers. But what if you need to add many identical numbers, like 5 + 5 + 5? There is a shorter way to write that — multiplication. Let us see how it works.</p>"
  + "<h3>Multiplication — a short way to write addition</h3>"
  + "<p>A sum of equal addends can be replaced with multiplication: 5 + 5 + 5 = 5 · 3. Here the number 5 is the addend that repeats, and the number 3 shows <b>how many times</b> it repeats. We read this as &ldquo;five times three.&rdquo; Let us check: 5 + 5 + 5 = 15, so 5 · 3 = 15.</p>"
  + "<p>In a · b, the first number is what we are adding, the second is how many times we take it. For example, 4 · 2 is 4 taken 2 times: 4 + 4 = 8.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>In 5 · 3, there must be exactly as many addends as the <b>second</b> number shows — that is, 3 fives (5 + 5 + 5), not 5 fives. Taking one extra addend, or forgetting one, throws off the answer.</div>"
  + "<h3>The commutative property of multiplication</h3>"
  + "<p>Imagine trees planted in rows in a garden: 3 rows, with 4 trees in each row. The total is 4 + 4 + 4 = 12, that is, 4 · 3 = 12. Now look at the same trees a different way: each row has one tree from each of four &ldquo;columns,&rdquo; and each column has 3 trees — that gives 4 rows of 3 trees: 3 + 3 + 3 + 3 = 12, that is, 3 · 4 = 12. The trees are the same, we just counted differently — and the answer matched!</p>"
  + "<div class='note'><span class='hand'>Remember</span>In multiplication, you can swap the factors — the answer will not change: a · b = b · a. For example, 6 · 4 = 4 · 6. That is very handy: if you forget one product, you can work it out &ldquo;from the other side.&rdquo;</div>"
  + "<h3>The multiplication tables for 2, 3, 4, and 5</h3>"
  + "<p>Each next product in the table is bigger than the one before by the same factor. For example, in the table for 3, each step adds 3: 3 · 2 = 6, 3 · 3 = 9 (that is 6 + 3), 3 · 4 = 12 (that is 9 + 3), and so on. Learning these tables by heart is very useful — then you will calculate quickly.</p>"
  + "<ul><li><b>Multiplying by 2:</b> 2·2=4, 2·3=6, 2·4=8, 2·5=10, 2·6=12, 2·7=14, 2·8=16, 2·9=18.</li>"
  + "<li><b>Multiplying by 3:</b> 3·2=6, 3·3=9, 3·4=12, 3·5=15, 3·6=18, 3·7=21, 3·8=24, 3·9=27.</li>"
  + "<li><b>Multiplying by 4:</b> 4·2=8, 4·3=12, 4·4=16, 4·5=20, 4·6=24, 4·7=28, 4·8=32, 4·9=36.</li>"
  + "<li><b>Multiplying by 5:</b> 5·2=10, 5·3=15, 5·4=20, 5·5=25, 5·6=30, 5·7=35, 5·8=40, 5·9=45.</li></ul>"
  + "<div class='note'><span class='hand'>Remember</span>In the table for 2, every answer is even (ends in 0, 2, 4, 6, 8). In the table for 5, every answer ends in either 0 or 5 — easy to check yourself.</div>"
  + "<h3>Division is splitting into equal groups</h3>"
  + "<p>Division is the opposite of multiplication. There are two kinds of problems. The first: we know <b>how many groups</b>, and we look for how many objects are in each. For example, 12 apples are split evenly into 3 bags — how many apples are in one bag? Divide: 12 : 3 = 4 apples per bag.</p>"
  + "<p>The second kind: we know <b>how many objects are in each group</b>, and we look for how many groups there are. For example, 12 apples are packed 4 to a bag — how many bags will be needed? Divide: 12 : 4 = 3 bags.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>In a division problem, we always write the number being divided first (called the dividend), and second the number of parts or the amount per part we are dividing by (the divisor). 12 : 3 and 3 : 12 are completely different operations!</div>"
  + "<h3>Division — the inverse of multiplication</h3>"
  + "<p>Division and multiplication are connected: one multiplication fact gives you two division facts right away. Look:</p><div class='figure'>__SVG_MUL2_INVERSE_ANIM__</div>"
  + "<div class='note'><span class='hand'>Remember</span>To check a division, multiply the quotient by the divisor — you should get the dividend. Checking 20 : 4 = 5: 5 · 4 = 20 — correct!</div>",
  examples: [
    {t:"Replace the sum 6 + 6 + 6 with multiplication and find its value.", s:"The addend 6 repeats 3 times, so the sum can be written as 6 · 3. Let us check: 6 + 6 + 6 = 18. So 6 · 3 = 18."},
    {t:"Calculate 3 · 5 using the table for 3.", s:"In the table for 3, after 3 · 4 = 12 comes 3 · 5 = 12 + 3 = 15. So 3 · 5 = 15."},
    {t:"Apple trees in a garden are planted in 4 rows of 3 trees each. How many trees are there in total? Write the answer using two different multiplications.", s:"Method 1: 4 rows of 3 trees is 3 · 4 = 12. Method 2: the same trees can be counted as 3 columns of 4 trees — that is 4 · 3 = 12. Both methods give the same answer: 12 trees."},
    {t:"20 pencils were split evenly into 4 boxes. How many pencils are in each box?", s:"We know the total (20) and the number of groups (4), and we are looking for how many are in each group. Divide: 20 : 4 = 5 pencils per box."},
    {t:"Masha has 18 candies, and she hands out 3 candies to each friend. How many friends will have enough candies?", s:"We know the total number of candies (18) and how many are in each &ldquo;portion&rdquo; (3), and we are looking for the number of portions — that is, friends. Divide: 18 : 3 = 6 friends."},
    {t:"We know that 5 · 4 = 20. Write two division facts that follow from this multiplication.", s:"If 5 · 4 = 20, then dividing 20 by one factor gives the other: 20 : 5 = 4 and 20 : 4 = 5."},
    {t:"Compare: 3 · 4 and 4 · 2. Which expression is bigger?", s:"Calculate each: 3 · 4 = 12, and 4 · 2 = 8. Since 12 is more than 8, the expression 3 · 4 is bigger."}
  ],
  tasks: [
    {q:"Replace the sum 7 + 7 + 7 with multiplication and find its value.", ans:"21", hint:"The addend 7 repeats 3 times: that is 7 · 3.", sol:"7 + 7 + 7 = 7 · 3 = 21."},
    {q:"Use the multiplication table to calculate: 2 · 6.", ans:"12", hint:"Each next product in the table for 2 is bigger than the one before by 2.", sol:"2 · 5 = 10, so 2 · 6 = 10 + 2 = 12."},
    {q:"Calculate: 3 · 9.", ans:"27", hint:"Use the table for 3.", sol:"3 · 8 = 24, so 3 · 9 = 24 + 3 = 27."},
    {q:"Calculate: 4 · 7.", ans:"28", hint:"Use the table for 4.", sol:"4 · 6 = 24, so 4 · 7 = 24 + 4 = 28."},
    {q:"Calculate: 5 · 8.", ans:"40", hint:"All the answers in the table for 5 end in 0 or 5.", sol:"5 · 7 = 35, so 5 · 8 = 35 + 5 = 40."},
    {q:"Write 6 · 3 as a sum of equal addends and find its value.", ans:"18", hint:"You need to take 6, 3 times.", sol:"6 · 3 = 6 + 6 + 6 = 18."},
    {q:"Find the value: 16 : 4.", ans:"4", hint:"Think about which number you need to multiply by 4 to get 16.", sol:"4 · 4 = 16, so 16 : 4 = 4."},
    {q:"Find the value: 15 : 3.", ans:"5", hint:"Think about which number you need to multiply by 3 to get 15.", sol:"3 · 5 = 15, so 15 : 3 = 5."},
    {q:"We know that 4 · 5 = 20. What is 20 : 5?", ans:"4", hint:"Division is the opposite of multiplication: one factor can be found from the product and the other factor.", sol:"Since 4 · 5 = 20, then 20 : 5 = 4."},
    {q:"We know that 3 · 6 = 18. What is 18 : 3?", ans:"6", hint:"A multiplication fact gives you two division facts.", sol:"Since 3 · 6 = 18, then 18 : 3 = 6."},
    {q:"There are 5 notebooks in one pack. How many notebooks are in 4 such packs?", ans:"20", hint:"Multiply the amount in one pack by the number of packs.", sol:"5 · 4 = 20 notebooks."},
    {q:"24 apples were split evenly into 4 bags. How many apples are in one bag?", ans:"6", hint:"We know the total and the number of bags — we are looking for how many are in each.", sol:"24 : 4 = 6 apples in one bag."},
    {q:"Petya has 20 blocks, and he is building towers of 4 blocks each. How many towers will there be?", ans:"5", hint:"We know the total number of blocks and the number in each tower — we are looking for the number of towers.", sol:"20 : 4 = 5 towers."},
    {q:"Misha calculated: 3 · 5 = 8. He made a mistake. What is the correct answer?", ans:"15", hint:"3 · 5 is 3 taken 5 times, that is, 3 + 3 + 3 + 3 + 3.", sol:"3 · 5 = 3 + 3 + 3 + 3 + 3 = 15, not 8 (Misha likely mixed up multiplication with the addition 3 + 5)."},
    {q:"Which is bigger: 3 · 6 or 4 · 4?", opts:["3 · 6 is bigger","4 · 4 is bigger","they are equal"], ans:0, hint:"Calculate each product and compare.", sol:"3 · 6 = 18, and 4 · 4 = 16. Since 18 is more than 16, the first expression is bigger: 3 · 6."},
    {q:"If 6 · 4 = 24, what is 4 · 6?", ans:"24", hint:"In multiplication, you can swap the factors — the answer will not change.", sol:"By the commutative property, 4 · 6 = 6 · 4 = 24."},
    {q:"Someone made a mistake in the multiplication table and wrote: 4 · 6 = 28. Find the correct value of 4 · 6.", ans:"24", hint:"4 · 5 = 20, then add one more four.", sol:"4 · 5 = 20, 4 · 6 = 20 + 4 = 24. The statement 4 · 6 = 28 is wrong."},
    {q:"Chairs were set up in a hall in 5 rows of 6 chairs each. How many chairs are there in total?", ans:"30", hint:"Multiply the number of rows by the number of chairs in a row.", sol:"6 · 5 = 30 chairs."},
    {q:"Toma split 12 buttons evenly between 2 friends. How many buttons did each friend get?", ans:"6", hint:"We know the total number of buttons and the number of friends — we are looking for how many each one gets.", sol:"12 : 2 = 6 buttons per friend."},
    {q:"There are 3 boxes on a shelf, with 5 pencils in each. Which expression finds the total number of pencils?", opts:["3 + 5","3 · 5","5 : 3"], ans:1, hint:"You need to add equal addends — and that can be replaced with multiplication.", sol:"There are 5 pencils in one box, and 3 boxes, so the total is 5 · 3 — that is, the expression &ldquo;3 · 5&rdquo; (either order of the factors gives the same number). The correct answer is the second option."}
  ],
  bonus: {q:"I thought of a number, multiplied it by 3, then added 4 — and got 19. What number did I think of?", ans:"5", hint:"Do the operations in reverse order, starting from the last one.", sol:"The last step was &ldquo;add 4,&rdquo; so before that it was 19 − 4 = 15. And before that, the number was multiplied by 3: 15 : 3 = 5. Check: 5 · 3 = 15, 15 + 4 = 19."},
  test: [
    {q:"Calculate: 2 · 8.", ans:"16", sol:"2 · 7 = 14, so 2 · 8 = 14 + 2 = 16."},
    {q:"Calculate: 3 · 7.", ans:"21", sol:"3 · 6 = 18, so 3 · 7 = 18 + 3 = 21."},
    {q:"Calculate: 4 · 9.", ans:"36", sol:"4 · 8 = 32, so 4 · 9 = 32 + 4 = 36."},
    {q:"Calculate: 5 · 5.", ans:"25", sol:"5 · 4 = 20, so 5 · 5 = 20 + 5 = 25."},
    {q:"If 6 · 3 = 18, what is 18 : 3?", ans:"6", sol:"Since 6 · 3 = 18, then 18 : 3 = 6."},
    {q:"There are 4 boxes with 5 balls each. How many balls are there in total?", ans:"20", sol:"5 · 4 = 20 balls."},
    {q:"28 plums were split evenly into 4 jars. How many plums are in one jar?", ans:"7", sol:"28 : 4 = 7 plums in one jar."},
    {q:"Which is bigger: 4 · 6 or 5 · 5?", opts:["4 · 6 is bigger","5 · 5 is bigger","they are equal"], ans:1, sol:"4 · 6 = 24, and 5 · 5 = 25. Since 25 is more than 24, the second expression is bigger: 5 · 5."}
  ],
  lab: [
    {t:"Rows of buttons", b:"Take 20–24 buttons or coins. Lay them out in 4 even rows. Count how many are in one row, and write the multiplication: number per row · 4 = total buttons. Then rearrange the same buttons differently — in rows of a different length — and write the new multiplication. Check that the total number of buttons has not changed."},
    {t:"Treats for friends", b:"Take 12–18 candies or cookies. Split them evenly among 3 toys or family members. How many did each one get? Write the division. Then try splitting the same amount among a different number of &ldquo;friends&rdquo; — say, 2 or 6 — and each time write down what you get."},
    {t:"Table flashcards", b:"Cut out 8 cards. On one side of each, write a fact from the table for 2, 3, 4, or 5 (for example, &ldquo;4 · 6&rdquo;), and the answer on the other side. Shuffle the cards and try to say the answer without looking at the other side. Set aside any cards you got wrong and try them again in 5 minutes."},
    {t:"Multiplication all around us", b:"Find 3 examples at home where objects are arranged in equal groups: for example, eggs in a carton, wheels on toy cars, windows in a building by floor. For each example, write the multiplication (how many in one group · how many groups) and calculate the total."}
  ]
};
CONTENT_EN.mul2.examples[0].s += "<div class='figure'>__SVG_MUL2_EX0_SUM_TO_PRODUCT__</div>";
CONTENT_EN.mul2.examples[1].s += "<div class='figure'>__SVG_MUL2_EX1_TABLE_STEP__</div>";
CONTENT_EN.mul2.examples[2].s += "<div class='figure'>__SVG_MUL2_EX2_ORCHARD__</div>";
CONTENT_EN.mul2.examples[3].s += "<div class='figure'>__SVG_MUL2_EX3_PENCIL_BOXES__</div>";
CONTENT_EN.mul2.examples[4].s += "<div class='figure'>__SVG_MUL2_EX4_CANDY_GROUPS__</div>";
CONTENT_EN.mul2.examples[5].s += "<div class='figure'>__SVG_MUL2_EX5_FACT_FAMILY__</div>";
CONTENT_EN.mul2.examples[6].s += "<div class='figure'>__SVG_MUL2_EX6_COMPARE_BARS__</div>";
CONTENT_EN.mul2.steps = [
  {title:"Multiplication — a short way to write addition", body:
    "<p>You already know how to add numbers. But what if you need to add many identical numbers, like 5 + 5 + 5? There is a shorter way to write that — multiplication. Let us see how it works.</p><h3>Multiplication — a short way to write addition</h3><p>A sum of equal addends can be replaced with multiplication: 5 + 5 + 5 = 5 · 3. Here the number 5 is the addend that repeats, and the number 3 shows <b>how many times</b> it repeats. We read this as &ldquo;five times three.&rdquo; Let us check: 5 + 5 + 5 = 15, so 5 · 3 = 15.</p><p>In a · b, the first number is what we are adding, the second is how many times we take it. For example, 4 · 2 is 4 taken 2 times: 4 + 4 = 8.</p>",
    exIdx:0},
  {title:"Common mistake in writing multiplication", body:
    "<div class='warn'><span class='hand'>Common mistake</span>In 5 · 3, there must be exactly as many addends as the <b>second</b> number shows — that is, 3 fives (5 + 5 + 5), not 5 fives. Taking one extra addend, or forgetting one, throws off the answer.</div>"
    +"<div class='figure'>__SVG_MUL2_MISTAKE_ADDENDS__</div>"},
  {title:"The commutative property of multiplication", body:
    "<h3>The commutative property of multiplication</h3><p>Imagine trees planted in rows in a garden: 3 rows, with 4 trees in each row. The total is 4 + 4 + 4 = 12, that is, 4 · 3 = 12. Now look at the same trees a different way: each row has one tree from each of four &ldquo;columns,&rdquo; and each column has 3 trees — that gives 4 rows of 3 trees: 3 + 3 + 3 + 3 = 12, that is, 3 · 4 = 12. The trees are the same, we just counted differently — and the answer matched!</p><div class='note'><span class='hand'>Remember</span>In multiplication, you can swap the factors — the answer will not change: a · b = b · a. For example, 6 · 4 = 4 · 6. That is very handy: if you forget one product, you can work it out &ldquo;from the other side.&rdquo;</div>",
    exIdx:2},
  {title:"The multiplication tables for 2, 3, 4, and 5", body:
    "<h3>The multiplication tables for 2, 3, 4, and 5</h3><p>Each next product in the table is bigger than the one before by the same factor. For example, in the table for 3, each step adds 3: 3 · 2 = 6, 3 · 3 = 9 (that is 6 + 3), 3 · 4 = 12 (that is 9 + 3), and so on. Learning these tables by heart is very useful — then you will calculate quickly.</p><ul><li><b>Multiplying by 2:</b> 2·2=4, 2·3=6, 2·4=8, 2·5=10, 2·6=12, 2·7=14, 2·8=16, 2·9=18.</li><li><b>Multiplying by 3:</b> 3·2=6, 3·3=9, 3·4=12, 3·5=15, 3·6=18, 3·7=21, 3·8=24, 3·9=27.</li><li><b>Multiplying by 4:</b> 4·2=8, 4·3=12, 4·4=16, 4·5=20, 4·6=24, 4·7=28, 4·8=32, 4·9=36.</li><li><b>Multiplying by 5:</b> 5·2=10, 5·3=15, 5·4=20, 5·5=25, 5·6=30, 5·7=35, 5·8=40, 5·9=45.</li></ul><div class='note'><span class='hand'>Remember</span>In the table for 2, every answer is even (ends in 0, 2, 4, 6, 8). In the table for 5, every answer ends in either 0 or 5 — easy to check yourself.</div>",
    exIdx:[1,6]},
  {title:"Division — how many objects in each group", body:
    "<h3>Division is splitting into equal groups</h3><p>Division is the opposite of multiplication. There are two kinds of problems. The first: we know <b>how many groups</b>, and we look for how many objects are in each. For example, 12 apples are split evenly into 3 bags — how many apples are in one bag? Divide: 12 : 3 = 4 apples per bag.</p>",
    exIdx:3},
  {title:"Division — how many groups you get", body:
    "<p>The second kind: we know <b>how many objects are in each group</b>, and we look for how many groups there are. For example, 12 apples are packed 4 to a bag — how many bags will be needed? Divide: 12 : 4 = 3 bags.</p><div class='warn'><span class='hand'>Common mistake</span>In a division problem, we always write the number being divided first (called the dividend), and second the number of parts or the amount per part we are dividing by (the divisor). 12 : 3 and 3 : 12 are completely different operations!</div>",
    exIdx:4},
  {title:"Division — the inverse of multiplication", body:
    "<h3>Division — the inverse of multiplication</h3><p>Division and multiplication are connected: one multiplication fact gives you two division facts right away. Look:</p><div class='figure'>__SVG_MUL2_INVERSE_ANIM__</div><div class='note'><span class='hand'>Remember</span>To check a division, multiply the quotient by the divisor — you should get the dividend. Checking 20 : 4 = 5: 5 · 4 = 20 — correct!</div>",
    exIdx:5}
];

CONTENT_EN.word2 = {
  goal: "After this topic, you will be able to solve one- and two-step word problems, convert centimeters to meters and back, hours to minutes, find mass in kilograms, and find the perimeter of a polygon.",
  explain: "<p>We solve problems every day: how many apples to buy, how many minutes are left until the cartoon starts, which segment is longer. To solve problems like these quickly and without mistakes, you need to read the problem carefully and know the units of measurement. Let us go through it step by step.</p>"
  + "<h3>One-step problems</h3>"
  + "<p>Every problem has something we know and something we need to find. Clue words help you pick the operation. If a problem says &ldquo;<b>more by some amount</b>,&rdquo; we add. If it says &ldquo;<b>less by some amount</b>,&rdquo; we subtract.</p>"
  + "<p>Katya has 6 stickers, and Sveta has 3 more stickers than Katya. To find how many stickers Sveta has, we add: 6 + 3 = 9 stickers.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>The word &ldquo;more&rdquo; does not always mean &ldquo;add&rdquo; to the number sitting right next to it in the sentence! Read carefully: more (or less) <b>than whom</b>. &ldquo;Sveta has 3 more than Katya&rdquo; means we add to Katya&rsquo;s number, not the other way around.</div>"
  + "<h3>Two-step problems</h3>"
  + "<p>Sometimes one operation is not enough to answer the question: first you need to find an intermediate result, and only then the final answer. Misha had 5 toy cars, his mom gave him 3 more, and then he gave 2 cars to a friend. First we find out how many cars there were after the gift: 5 + 3 = 8. Then we find out how many are left after he gave away 2: 8 − 2 = 6 cars.</p>"
  + "<p>The main thing is not to rush to write down an answer right away, but first understand what you need to find <b>first</b>, and what second.</p>"
  + "<h3>Units of length: centimeter and meter</h3>"
  + "<p>Small distances are measured in <b>centimeters (cm)</b> — about the width of a finger. Large distances are measured in <b>meters (m)</b> — a meter is a bit more than one adult step.</p>"
  + "<div class='note'><span class='hand'>Remember</span>1 m = 100 cm. To convert meters to centimeters, multiply by 100. To convert centimeters to meters (when there are exactly 100, 200, 300…), divide by 100.</div>"
  + "<p>If a length has both meters and centimeters, say 2 m 30 cm, then to convert to centimeters, convert the meters and add the remainder: 2 · 100 + 30 = 230 cm.</p>"
  + "<h3>Unit of mass: kilogram</h3>"
  + "<p>Mass (often just called &ldquo;weight&rdquo; in everyday life) is measured in <b>kilograms (kg)</b>. For example, a bag of sugar weighs 1 kg, and a watermelon weighs several kilograms. For very light objects, there is the unit <b>gram (g)</b>, which is much smaller than a kilogram, but in this topic we will work only with kilograms.</p>"
  + "<h3>Units of time</h3>"
  + "<p>Time is measured in <b>hours (h)</b> and <b>minutes (min)</b>. On a clock with hands, the small hand shows the hours, and the large hand shows the minutes. When the large hand points to 12, that means 0 minutes — a whole hour. When it points to 6, exactly half an hour has passed, that is, 30 minutes.</p>"
  + "<div class='note'><span class='hand'>Remember</span>1 h = 60 min (not 100, like meters and centimeters!). To find the total number of minutes in some hours, multiply the number of hours by 60.</div>"
  + "<p>A week has 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. A year has 12 months: January, February, March, April, May, June, July, August, September, October, November, December.</p>"
  + "<h3>Perimeter of a polygon</h3>"
  + "<p><b>Perimeter</b> is the length of a shape&rsquo;s boundary, that is, the sum of the lengths of all its sides. To find the perimeter of any polygon — a triangle, a quadrilateral, or any other — you simply add up the lengths of all its sides.</p>"
  + "<p>Perimeter is the sum of all the sides. Look at the example of a triangle:</p><div class='figure'>__SVG_WORD2_PERIM_ANIM__</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Forgetting to add one of the sides, or adding only some of the sides instead of all of them. Before calculating, count out loud how many sides the shape has, and check off each one as you add its number.</div>",
  examples: [
    {t:"Katya has 6 stickers, and Sveta has 3 more stickers than Katya. How many stickers does Sveta have?", s:"The word &ldquo;more&rdquo; means we add to Katya&rsquo;s number: 6 + 3 = 9. Sveta has 9 stickers."},
    {t:"There are 10 apples in a vase, and 4 fewer pears. How many pears are in the vase?", s:"The word &ldquo;fewer&rdquo; means we subtract: 10 − 4 = 6. There are 6 pears in the vase."},
    {t:"Misha had 5 toy cars, his mom gave him 3 more, and then he gave 2 cars to a friend. How many cars does Misha have left?", s:"First we find how many there were after the gift: 5 + 3 = 8. Then we subtract the ones given away: 8 − 2 = 6. Misha has 6 cars left."},
    {t:"A ruler was used to measure the length of a table — it came out to 2 m 30 cm. How many centimeters is that?", s:"Convert the meters to centimeters and add the remainder: 2 · 100 = 200, 200 + 30 = 230 cm."},
    {t:"A cartoon lasted 1 h 20 min. How many minutes in total did the cartoon last?", s:"There are 60 minutes in 1 hour, add 20 more: 60 + 20 = 80 minutes."},
    {t:"The sides of a triangle are 4 cm, 5 cm, and 6 cm. Find the triangle's perimeter.", s:"Perimeter is the sum of all the sides: 4 + 5 + 6 = 15 cm."},
    {t:"One bag has 2 kg of potatoes, and another has 3 kg more. How many kilograms of potatoes are in the two bags together?", s:"First find the mass of the second bag: 2 + 3 = 5 kg. Then add both bags: 2 + 5 = 7 kg."}
  ],
  tasks: [
    {q:"Arina has 7 pencils, and Oleg has 5 more pencils than Arina. How many pencils does Oleg have?", ans:"12", hint:"The word &ldquo;more&rdquo; means we add to Arina&rsquo;s number.", sol:"7 + 5 = 12 pencils for Oleg."},
    {q:"There are 14 parrots in a cage, and 6 fewer canaries. How many canaries are in the cage?", ans:"8", hint:"The word &ldquo;fewer&rdquo; means we subtract.", sol:"14 − 6 = 8 canaries."},
    {q:"The first crate has 18 kg of apples, the second has 11 kg. How many kilograms more are in the first crate than the second?", ans:"7", hint:"To find &ldquo;how much more,&rdquo; subtract the smaller number from the bigger one.", sol:"18 − 11 = 7 kg."},
    {q:"Vova had 9 rubles, his grandmother gave him 15 more rubles, and he bought a notebook for 12 rubles. How many rubles does he have left?", ans:"12", hint:"First find how much money there was after his grandmother's gift, then subtract the cost of the notebook.", sol:"9 + 15 = 24 rubles after the gift. 24 − 12 = 12 rubles left."},
    {q:"There are 23 students in the first grade, and 2 more students in the second grade than in the first. How many students are there in the first and second grades together?", ans:"48", hint:"First find how many students are in the second grade.", sol:"The second grade has 23 + 2 = 25 students. Total: 23 + 25 = 48 students."},
    {q:"A segment is 300 cm long. How many meters is that?", ans:"3", hint:"1 m = 100 cm, divide the number of centimeters by 100.", sol:"300 : 100 = 3 m."},
    {q:"A ribbon is 4 m long. How many centimeters is that?", ans:"400", hint:"1 m = 100 cm, multiply the number of meters by 100.", sol:"4 · 100 = 400 cm."},
    {q:"A board is 2 m 50 cm long. How many centimeters is that in total?", ans:"250", hint:"Convert the meters to centimeters and add the remainder.", sol:"2 · 100 = 200 cm, 200 + 50 = 250 cm."},
    {q:"Which segment is longer?", opts:["95 cm","1 m","they are equal"], ans:1, hint:"Convert 1 meter to centimeters and compare the numbers.", sol:"1 m = 100 cm, and 100 is more than 95. So the 1 m segment is longer."},
    {q:"A cartoon lasted 2 hours. How many minutes is that?", ans:"120", hint:"1 h = 60 min, multiply the number of hours by 60.", sol:"2 · 60 = 120 minutes."},
    {q:"Recess lasts 10 minutes, and a lesson lasts 40 minutes. How many minutes longer is the lesson than recess?", ans:"30", hint:"Subtract the smaller number from the bigger one.", sol:"40 − 10 = 30 minutes."},
    {q:"A movie lasted 1 h 45 min. How many minutes in total did the movie last?", ans:"105", hint:"There are 60 minutes in 1 hour, add the remaining minutes.", sol:"60 + 45 = 105 minutes."},
    {q:"The sides of a triangle are 3 cm, 7 cm, and 8 cm. Find the triangle's perimeter.", ans:"18", hint:"Add up the lengths of all three sides.", sol:"3 + 7 + 8 = 18 cm."},
    {q:"The sides of a quadrilateral are 5 cm, 6 cm, 4 cm, and 7 cm. Find the perimeter of this quadrilateral.", ans:"22", hint:"A quadrilateral has four sides — add all four numbers.", sol:"5 + 6 + 4 + 7 = 22 cm."},
    {q:"What is the perimeter of a polygon?", opts:["the area of a shape","the sum of the lengths of all its sides","the length of one side","the number of angles in a shape"], ans:1, hint:"Perimeter is about a shape's boundary, not the space inside it.", sol:"Perimeter is the sum of the lengths of all the sides of a polygon."},
    {q:"There were 20 kg of flour in a sack. 8 kg were taken out. How many kilograms of flour are left in the sack?", ans:"12", hint:"Subtract the amount taken from the total mass.", sol:"20 − 8 = 12 kg."},
    {q:"A watermelon weighs 6 kg, and a pumpkin is 2 kg heavier than the watermelon. How many kilograms do the watermelon and pumpkin weigh together?", ans:"14", hint:"First find the pumpkin's mass, then add both masses.", sol:"The pumpkin weighs 6 + 2 = 8 kg. Together: 6 + 8 = 14 kg."},
    {q:"How many days after Monday does Friday come?", ans:"4", hint:"Count the days in order: Tuesday, Wednesday, Thursday, Friday.", sol:"Tuesday is day 1, Wednesday is day 2, Thursday is day 3, Friday is day 4 after Monday."},
    {q:"How many months pass from March to June, not counting March?", ans:"3", hint:"List the months after March up to and including June.", sol:"After March come April, May, June — that is 3 months."},
    {q:"A fence is 12 m long. The fence has a gate 90 cm wide. How many centimeters of fence will remain if you remove the gate's width?", ans:"1110", hint:"Convert the fence's length to centimeters, then subtract the gate's width.", sol:"12 m = 1200 cm. 1200 − 90 = 1110 cm."}
  ],
  bonus: {q:"There are apple trees and pear trees in a garden — 17 trees in total. There are 5 more apple trees than pear trees. How many apple trees are growing in the garden?", ans:"11", hint:"If you remove the &ldquo;extra&rdquo; 5 apple trees, the apple and pear trees would be equal. First find how many trees would be left equal, divide in half — that is the number of pear trees — then give the apple trees back their 5 extra trees.", sol:"Remove the difference: 17 − 5 = 12 — that is how many trees there would be if the apple and pear trees were equal. Divide in half: 12 : 2 = 6 — that is the number of pear trees. There are 5 more apple trees: 6 + 5 = 11. Check: 6 + 11 = 17, 11 − 6 = 5."},
  test: [
    {q:"Liza has 8 pins, and her brother has 6 more pins than her. How many pins does her brother have?", ans:"14", sol:"8 + 6 = 14 pins."},
    {q:"There were 25 passengers on the bus, and after a stop there were 9 fewer. How many passengers are left on the bus?", ans:"16", sol:"25 − 9 = 16 passengers."},
    {q:"A shoelace is 1 m 15 cm long. How many centimeters is that?", ans:"115", sol:"1 · 100 = 100 cm, 100 + 15 = 115 cm."},
    {q:"How many minutes are in 3 hours?", ans:"180", sol:"3 · 60 = 180 minutes."},
    {q:"The sides of a triangle are 6 cm, 6 cm, and 9 cm. Find the triangle's perimeter.", ans:"21", sol:"6 + 6 + 9 = 21 cm."},
    {q:"Which is more?", opts:["1 m","80 cm","they are equal"], ans:0, sol:"1 m = 100 cm, and 100 is more than 80. So 1 m is more."},
    {q:"The first aquarium has 14 fish, the second has 5 fewer fish than the first. How many fish are in both aquariums together?", ans:"23", sol:"The second aquarium has 14 − 5 = 9 fish. Total: 14 + 9 = 23 fish."},
    {q:"There were 15 kg of apples in a box. 6 kg of apples were poured into a bag. How many kilograms of apples are left in the box?", ans:"9", sol:"15 − 6 = 9 kg."}
  ],
  lab: [
    {t:"Measuring the room", b:"First walk across the room from wall to wall with regular steps and count them. Then measure the same length with a tape measure or ruler in meters and centimeters. Compare: how many centimeters is one of your steps? Is everyone's step the same length in your family?"},
    {t:"Kitchen scale", b:"Ask an adult to help you weigh 5 different objects on the kitchen scale (a bag of grain, a book, a piece of fruit, and others) and write down each one's mass in kilograms. Arrange the objects in order — from lightest to heaviest."},
    {t:"Perimeter of a table", b:"Use a ruler to measure the length of each side of your desk in centimeters. Add up all four numbers to find the table's perimeter. Check it: go all the way around the edge of the table with a tape measure — you should get the same number."},
    {t:"Minutes at work", b:"Time how many minutes your favorite activity takes — reading one page, brushing your teeth, or walking to the bus stop. Repeat the next day and compare the results in minutes: was the time the same or different?"}
  ]
};
CONTENT_EN.word2.examples[0].s += "<div class='figure'>__SVG_WORD2_EX0_MORE__</div>";
CONTENT_EN.word2.examples[1].s += "<div class='figure'>__SVG_WORD2_EX1_LESS__</div>";
CONTENT_EN.word2.examples[2].s += "<div class='figure'>__SVG_WORD2_EX2_TWOSTEP__</div>";
CONTENT_EN.word2.examples[3].s += "<div class='figure'>__SVG_WORD2_EX3_RULER__</div>";
CONTENT_EN.word2.examples[4].s += "<div class='figure'>__SVG_WORD2_EX4_CLOCK__</div>";
CONTENT_EN.word2.examples[5].s += "<div class='figure'>__SVG_WORD2_EX5_PERIM__</div>";
CONTENT_EN.word2.examples[6].s += "<div class='figure'>__SVG_WORD2_EX6_SCALE__</div>";
CONTENT_EN.word2.steps = [
  {title:"One step: \"more\" and \"less\"", body:
    "<p>We solve problems every day: how many apples to buy, how many minutes are left until the cartoon starts, which segment is longer. To solve problems like these quickly and without mistakes, you need to read the problem carefully and know the units of measurement. Let us go through it step by step.</p>"
    +"<p>Every problem has something we know and something we need to find. Clue words help you pick the operation. If a problem says &ldquo;<b>more by some amount</b>,&rdquo; we add. If it says &ldquo;<b>less by some amount</b>,&rdquo; we subtract.</p>"
    +"<p>Katya has 6 stickers, and Sveta has 3 more stickers than Katya. To find how many stickers Sveta has, we add: 6 + 3 = 9 stickers.</p>"
    +"<div class='warn'><span class='hand'>Common mistake</span>The word &ldquo;more&rdquo; does not always mean &ldquo;add&rdquo; to the number sitting right next to it in the sentence! Read carefully: more (or less) <b>than whom</b>. &ldquo;Sveta has 3 more than Katya&rdquo; means we add to Katya&rsquo;s number, not the other way around.</div>",
    exIdx:[0,1]},
  {title:"Two-step problems", body:
    "<h3>Two-step problems</h3>"
    +"<p>Sometimes one operation is not enough to answer the question: first you need to find an intermediate result, and only then the final answer. Misha had 5 toy cars, his mom gave him 3 more, and then he gave 2 cars to a friend. First we find out how many cars there were after the gift: 5 + 3 = 8. Then we find out how many are left after he gave away 2: 8 − 2 = 6 cars.</p>"
    +"<p>The main thing is not to rush to write down an answer right away, but first understand what you need to find <b>first</b>, and what second.</p>",
    exIdx:2},
  {title:"Centimeters and meters", body:
    "<h3>Units of length: centimeter and meter</h3>"
    +"<p>Small distances are measured in <b>centimeters (cm)</b> — about the width of a finger. Large distances are measured in <b>meters (m)</b> — a meter is a bit more than one adult step.</p>"
    +"<div class='note'><span class='hand'>Remember</span>1 m = 100 cm. To convert meters to centimeters, multiply by 100. To convert centimeters to meters (when there are exactly 100, 200, 300…), divide by 100.</div>"
    +"<p>If a length has both meters and centimeters, say 2 m 30 cm, then to convert to centimeters, convert the meters and add the remainder: 2 · 100 + 30 = 230 cm.</p>",
    exIdx:3},
  {title:"Kilogram — a unit of mass", body:
    "<h3>Unit of mass: kilogram</h3>"
    +"<p>Mass (often just called &ldquo;weight&rdquo; in everyday life) is measured in <b>kilograms (kg)</b>. For example, a bag of sugar weighs 1 kg, and a watermelon weighs several kilograms. For very light objects, there is the unit <b>gram (g)</b>, which is much smaller than a kilogram, but in this topic we will work only with kilograms.</p>",
    exIdx:6},
  {title:"Hours and minutes", body:
    "<h3>Units of time</h3>"
    +"<p>Time is measured in <b>hours (h)</b> and <b>minutes (min)</b>. On a clock with hands, the small hand shows the hours, and the large hand shows the minutes. When the large hand points to 12, that means 0 minutes — a whole hour. When it points to 6, exactly half an hour has passed, that is, 30 minutes.</p>"
    +"<div class='note'><span class='hand'>Remember</span>1 h = 60 min (not 100, like meters and centimeters!). To find the total number of minutes in some hours, multiply the number of hours by 60.</div>"
    +"<p>A week has 7 days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday. A year has 12 months: January, February, March, April, May, June, July, August, September, October, November, December.</p>",
    exIdx:4},
  {title:"Perimeter of a polygon", body:
    "<h3>Perimeter of a polygon</h3>"
    +"<p><b>Perimeter</b> is the length of a shape&rsquo;s boundary, that is, the sum of the lengths of all its sides. To find the perimeter of any polygon — a triangle, a quadrilateral, or any other — you simply add up the lengths of all its sides.</p>"
    +"<p>Perimeter is the sum of all the sides. Look at the example of a triangle:</p>"
    +"<div class='figure'>__SVG_WORD2_PERIM_ANIM__</div>"
    +"<div class='warn'><span class='hand'>Common mistake</span>Forgetting to add one of the sides, or adding only some of the sides instead of all of them. Before calculating, count out loud how many sides the shape has, and check off each one as you add its number.</div>",
    exIdx:5}
];

})();
