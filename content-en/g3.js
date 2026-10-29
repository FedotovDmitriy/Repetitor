/* ===================================================================
   English content for grade 3 (CONTENT_EN) — loaded on demand by
   ensureContentEn() in index.html when the interface language is
   English and a grade-3 topic is opened. Mirrors the structure of
   the Russian CONTENT.<id> objects exactly (same field names, same
   example/task/test counts and order, same ans values) so progress
   saved while answering tasks lines up regardless of language.

   Illustrations (SVG figures referenced via __SVG_X__ markers) are
   NOT re-localized in this version — they still show Russian labels
   baked into the SVG itself. Re-drawing every figure in English is a
   separate, much larger task, deferred along with topic/node names
   and cheat-sheet formulas. See CHANGELOG.
   ================================================================= */
(function(){

CONTENT_EN.n3 = {
  goal: "After this topic you'll be able to confidently read, write and compare numbers up to 1000, break them down into hundreds, tens and ones, round them to the nearest ten or hundred, and add and subtract three-digit numbers in column form.",
  explain: "<p>So far you've worked with numbers up to a hundred. But in everyday life there are many more: a school might have 850 pupils, a box might hold 144 pencils, and an old coin might cost 999 rubles. Let's figure out how numbers up to a thousand work.</p>"
  + "<h3>Hundreds, tens and ones</h3>"
  + "<p>Ten ones make one ten, and ten tens make one <b>hundred</b>: 10 · 10 = 100. A three-digit number has three places: <b>hundreds</b>, <b>tens</b>, and <b>ones</b>. For example, in the number 527 the digit 5 is in the hundreds place, the digit 2 is in the tens place, and the digit 7 is in the ones place.</p>"
  + "<h3>Place-value addends</h3>"
  + "<p>Any three-digit number can be split into a sum of place-value addends — how many hundreds, how many tens, and how many ones it contains: 527 = 500 + 20 + 7. If some place holds a 0, that addend is simply left out: 408 = 400 + 8, not 400 + 0 + 8.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Mixing up a place's digit with its actual place-value addend. In the number 527 the hundreds digit is 5, but the hundreds addend isn't 5 — it's 500 (five whole hundreds).</div>"
  + "<h3>How to read and write numbers</h3>"
  + "<p>We read 527 as &ldquo;five hundred twenty-seven&rdquo;: first we name the hundreds, then the number made by the tens and ones. If there are no tens, we read &ldquo;…hundred and (the) ones&rdquo;: 503 is &ldquo;five hundred three.&rdquo; If there are no ones, we read the tens as usual: 580 is &ldquo;five hundred eighty.&rdquo;</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>If the tens or ones place holds a 0, it still has to be written in its place. &ldquo;Five hundred three&rdquo; is 503, not 53: the 0 holds the tens place, which this number doesn't have.</div>"
  + "<h3>Comparing numbers and neighbors</h3>"
  + "<p>To compare two three-digit numbers, compare the hundreds first. Whichever has more hundreds is the larger number. If the hundreds are equal, compare the tens, and if the tens are equal too, compare the ones. For example, 342 and 349: the hundreds and tens are the same, and 2 ones is less than 9 ones, so 342 &lt; 349.</p>"
  + "<p>If the numbers have a different number of digits, the one with more digits is larger: any three-digit number is larger than any two-digit number. The smallest three-digit number is 100, and the largest is 999.</p>"
  + "<p>A number's neighbors are the numbers right next to it when counting: the number before is 1 less, and the number after is 1 more. The neighbors of 400 are 399 and 401.</p>"
  + "<h3>Rounding</h3>"
  + "<p>When the exact number doesn't matter, we replace it with a nearby &ldquo;round&rdquo; number — we round it. To round a number to the nearest ten, look at the ones digit. If it's 0, 1, 2, 3, or 4, the tens digit stays the same and the ones digit becomes zero. If the ones digit is 5, 6, 7, 8, or 9, the tens digit goes up by 1, and the ones digit becomes zero again.</p>"
  + "<p>To round to the nearest hundred, look at the tens digit the same way. Watch how the number &ldquo;jumps&rdquo; to the nearest hundred. The ≈ sign means &ldquo;approximately equal to.&rdquo;<div class='figure'>__SVG_N3_ROUND_ANIM__</div></p>"
  + "<div class='note'><span class='hand'>Remember</span>A number ending in 50 rounds up when rounded to the nearest hundred: 350 ≈ 400. And 650 rounds up to 700.</div>"
  + "<h3>Column addition</h3>"
  + "<p>To add numbers in column form, write them one under the other so ones line up under ones, tens under tens, and hundreds under hundreds. Add from right to left, starting with the ones. If a place's sum comes to 10 or more, write only the ones digit and &ldquo;carry&rdquo; the ten into the next place.</p>"
  + "<p>Let's find 356 + 275. Ones: 6 + 5 = 11, write 1, carry 1 to the tens. Tens: 5 + 7 + 1 = 13, write 3, carry 1 to the hundreds. Hundreds: 3 + 2 + 1 = 6. We get 631.</p>"
  + "<h3>Column subtraction</h3>"
  + "<p>Subtraction also goes right to left. If the top digit is smaller than the bottom one, &ldquo;borrow&rdquo; a ten from the next place over. If that place holds a 0, you have to borrow further, through an extra place.</p>"
  + "<p>Let's find 500 − 268. Ones: 0 is less than 8, and the tens are 0 too — borrow from the hundreds: 5 hundreds → 4 hundreds, and the tens and ones become &ldquo;9 and 10&rdquo;: 9 tens, 10 ones. Now 10 − 8 = 2. Tens: 9 − 6 = 3. Hundreds: 4 − 2 = 2. Answer: 232.</p>"
  + "<div class='note'><span class='hand'>Remember</span>You can check subtraction by adding: if 500 − 268 = 232, then 232 + 268 should give 500 again.</div>"
  + "<h3>Estimating — a quick check</h3>"
  + "<p>Before solving exactly, it helps to estimate the answer in your head by rounding the numbers to tens or hundreds. 356 + 275 ≈ 360 + 280 = 640 — that's close to the exact answer of 631, so the answer looks right. If the exact answer is way off from the estimate, there's probably a mistake somewhere.</p>",
  examples: [
    {t:"Write the number 846 as a sum of place-value addends.", s:"In 846 there are 8 hundreds, 4 tens, 6 ones. So 846 = 800 + 40 + 6."},
    {t:"Write the number &ldquo;six hundred five&rdquo; in digits.", s:"6 hundreds, no tens, 5 ones. The tens place is empty, so we put a 0 there: 605."},
    {t:"Compare the numbers 708 and 780.", s:"The hundreds are equal: 7 = 7. Compare the tens: 0 and 8. Since 0 is less than 8, the first number is smaller: 708 < 780."},
    {t:"Find the neighbors of the number 300.", s:"The number before is 1 less: 300 − 1 = 299. The number after is 1 more: 300 + 1 = 301."},
    {t:"Round the number 572 to the nearest ten and to the nearest hundred.", s:"To the nearest ten: the ones digit 2 is less than 5, so the tens digit stays the same: 572 ≈ 570. To the nearest hundred: we look at the tens digit 7 — it isn't less than 5, so the hundreds digit goes up by 1: 572 ≈ 600."},
    {t:"Find the sum 468 + 357 in column form.", s:"Ones: 8 + 7 = 15, write 5, carry 1. Tens: 6 + 5 + 1 = 12, write 2, carry 1. Hundreds: 4 + 3 + 1 = 8. Answer: 825."},
    {t:"Find the difference 700 − 345 in column form and check by adding.", s:"Ones: 0 is less than 5, and there are no tens either — borrow from the hundreds: 7 hundreds → 6 hundreds, 9 in the tens, 10 in the ones. 10 − 5 = 5. Tens: 9 − 4 = 5. Hundreds: 6 − 3 = 3. We get 355. Check: 355 + 345 = 700."}
  ],
  tasks: [
    {q:"How many tens are there in total in the number 540?", ans:"54", hint:"Divide the number by 10.", sol:"540 : 10 = 54."},
    {q:"Which digit is in the tens place in the number 364?", ans:"6", hint:"Look at the second digit from the right.", sol:"In 364: hundreds 3, tens 6, ones 4. Answer: 6."},
    {q:"Write the number &ldquo;eight hundred nine&rdquo; in digits.", ans:"809", hint:"8 hundreds, no tens, 9 ones.", sol:"8 hundreds, 0 tens, 9 ones: 809."},
    {q:"What is the tens place-value addend in the number 735?", ans:"30", hint:"The tens digit is 3, so the addend is 3 tens.", sol:"In 735 the tens digit is 3, so the tens addend equals 30."},
    {q:"A number equals the sum 600 + 40 + 2. Write this number in digits.", ans:"642", hint:"Add up the place-value addends.", sol:"600 + 40 + 2 = 642."},
    {q:"How do you correctly read the number 406?", opts:["four hundred six","forty-six","four hundred sixty","four hundred, ten, six"], ans:0, hint:"There are no tens in 406.", sol:"4 hundreds, 0 tens, 6 ones — read as &ldquo;four hundred six.&rdquo;"},
    {q:"Which of these numbers is larger?", opts:["462","426"], ans:0, hint:"The hundreds are equal — compare the tens.", sol:"The hundreds are equal (4 = 4), tens: 6 and 2. Since 6 is greater than 2, 462 is larger: 462 > 426."},
    {q:"Find the number that comes right after 500.", ans:"501", hint:"The next number is 1 more.", sol:"500 + 1 = 501."},
    {q:"Find the number that comes right before 300.", ans:"299", hint:"The previous number is 1 less.", sol:"300 − 1 = 299."},
    {q:"Round the number 352 to the nearest ten.", ans:"350", hint:"Look at the ones digit.", sol:"The ones digit 2 is less than 5, so the tens digit stays the same: 352 ≈ 350."},
    {q:"Round the number 583 to the nearest hundred.", ans:"600", hint:"Look at the tens digit.", sol:"The tens digit is 8, which isn't less than 5, so we round the hundreds up: 583 ≈ 600."},
    {q:"Round the number 650 to the nearest hundred.", ans:"700", hint:"A number ending in 50 rounds up.", sol:"The tens digit is 5 — round up: 650 ≈ 700."},
    {q:"Find the sum: 347 + 286.", ans:"633", hint:"Add place by place, starting with the ones, and don't forget the carries.", sol:"Ones: 7 + 6 = 13, write 3, carry 1. Tens: 4 + 8 + 1 = 13, write 3, carry 1. Hundreds: 3 + 2 + 1 = 6. Answer: 633."},
    {q:"Find the sum: 458 + 365.", ans:"823", hint:"Check whether you forgot the carry from the ones or the tens place.", sol:"Ones: 8 + 5 = 13, write 3, carry 1. Tens: 5 + 6 + 1 = 12, write 2, carry 1. Hundreds: 4 + 3 + 1 = 8. Answer: 823."},
    {q:"Find the difference: 624 − 358.", ans:"266", hint:"4 ones is less than 8 — borrow a ten from the next place.", sol:"Ones: 4 is less than 8, borrow a ten: 14 − 8 = 6, 1 ten is left. Tens: 1 is less than 5, borrow a hundred: 11 − 5 = 6, 5 hundreds are left. Hundreds: 5 − 3 = 2. Answer: 266."},
    {q:"Find the difference: 800 − 456.", ans:"344", hint:"The top digits are zeros — borrow through two places in a chain.", sol:"The ones and tens are zeros, so we borrow from the hundreds: 8 hundreds → 7 hundreds, the tens become 9, the ones become 10. Ones: 10 − 6 = 4. Tens: 9 − 5 = 4. Hundreds: 7 − 4 = 3. Answer: 344. Check: 344 + 456 = 800."},
    {q:"A warehouse had 480 kg of apples. Another 265 kg were delivered. How many kilograms of apples are at the warehouse now?", ans:"745", hint:"Add the two amounts in column form.", sol:"480 + 265 = 745 kg."},
    {q:"The library had 348 math books. 126 books were given out to classrooms. How many books are left in the library?", ans:"222", hint:"Subtract what was given out from the total.", sol:"348 − 126 = 222 books."},
    {q:"How many hundreds in total are there in the number 700?", ans:"7", hint:"Divide the number by 100.", sol:"700 : 100 = 7."},
    {q:"Which of these numbers is the smallest?", opts:["199","201","210","100"], ans:3, hint:"Compare how many hundreds each number has.", sol:"The number 100 has just 1 hundred, while the others each have 2. So 100 is the smallest of them."}
  ],
  bonus: {q:"We picked a three-digit number. Rounded to the nearest hundred, it becomes 600; rounded to the nearest ten, it becomes 640. What is the smallest number that could have been picked?", ans:"635", hint:"First find the range of numbers for each rounding, then find where the two ranges overlap.", sol:"Rounding to the nearest hundred gives 600 for numbers from 550 to 649. Rounding to the nearest ten gives 640 for numbers from 635 to 644. Both conditions hold at once for numbers from 635 to 644. The smallest of these is 635. Check: in 635 the tens digit is 3 (less than 5) — it rounds down to 600; the ones digit is 5 — it rounds up to 640."},
  test: [
    {q:"Write the number &ldquo;seven hundred thirty-four&rdquo; in digits.", ans:"734", sol:"7 hundreds, 3 tens, 4 ones: 734."},
    {q:"Which digit is in the hundreds place in the number 286?", ans:"2", sol:"Hundreds: 2, tens: 8, ones: 6. Answer: 2."},
    {q:"Which of these numbers is larger?", opts:["519","591"], ans:1, sol:"The hundreds are equal (5 = 5), tens: 1 and 9. Since 9 is greater, 591 is larger: 591 > 519."},
    {q:"Find the sum: 274 + 158.", ans:"432", sol:"Ones: 4 + 8 = 12, write 2, carry 1. Tens: 7 + 5 + 1 = 13, write 3, carry 1. Hundreds: 2 + 1 + 1 = 4. Answer: 432."},
    {q:"Find the difference: 600 − 345.", ans:"255", sol:"Borrow through the zeros: 6 hundreds → 5 hundreds, tens become 9, ones become 10. Ones: 10 − 5 = 5. Tens: 9 − 4 = 5. Hundreds: 5 − 3 = 2. Answer: 255. Check: 255 + 345 = 600."},
    {q:"Round the number 475 to the nearest hundred.", ans:"500", sol:"The tens digit is 7, not less than 5, so we round the hundreds up: 475 ≈ 500."},
    {q:"How many hundreds in total are there in the number 900?", ans:"9", sol:"900 : 100 = 9."},
    {q:"Find the number that comes right before 1000.", ans:"999", sol:"1000 − 1 = 999."}
  ],
  lab: [
    {t:"Estimating from a receipt", b:"Grab a store receipt (or ask your parents for one). Round each price to the nearest ten and add the rounded numbers in your head — that's your estimate. Then add up the exact prices in column form on paper. Compare: how far off was your estimate from the exact total?"},
    {t:"The &ldquo;Digit Cards&rdquo; game", b:"Cut out ten cards with the digits 0 through 9. Draw three cards at random and arrange them into the largest and the smallest three-digit number you can make (0 can't go first). Read both numbers out loud and find their difference in column form. Play the game 3 times."},
    {t:"A piggy bank of hundreds, tens and ones", b:"If you have coins or bills worth 100, 10, and 1 at home (or draw them on paper), lay out any three-digit number — say, 346 — as three piles: 3 hundreds, 4 tens, 6 ones. Count how much that comes to in total and compare it with the number you started with."},
    {t:"Step counter", b:"Walk around your home or on a walk, counting your steps (or use a pedometer on a parent's phone), until you reach a three-digit number. Write it down and round it to the nearest ten. The next day, walk again and use column form to find how many more or fewer steps you took."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.n3.examples[0].s += "<div class='figure'>__SVG_N3_EX0_SUM846__</div>";
CONTENT_EN.n3.examples[1].s += "<div class='figure'>__SVG_N3_EX1_WRITE605__</div>";
CONTENT_EN.n3.examples[2].s += "<div class='figure'>__SVG_N3_EX2_COMPARE__</div>";
CONTENT_EN.n3.examples[3].s += "<div class='figure'>__SVG_N3_EX3_NEIGHBORS__</div>";
CONTENT_EN.n3.examples[4].s += "<div class='figure'>__SVG_N3_EX4_ROUND572__</div>";
CONTENT_EN.n3.examples[5].s += "<div class='figure'>__SVG_N3_EX5_COLSUM__</div>";
CONTENT_EN.n3.examples[6].s += "<div class='figure'>__SVG_N3_EX6_COLSUB__</div>";

CONTENT_EN.n3.steps = [
  {title:"Hundreds, tens and ones", body:
    "<p>So far you've worked with numbers up to a hundred. But in everyday life there are many more: a school might have 850 pupils, a box might hold 144 pencils, and an old coin might cost 999 rubles. Let's figure out how numbers up to a thousand work.</p>"
    +"<h3>Hundreds, tens and ones</h3><p>Ten ones make one ten, and ten tens make one <b>hundred</b>: 10 · 10 = 100. A three-digit number has three places: <b>hundreds</b>, <b>tens</b>, and <b>ones</b>. For example, in the number 527 the digit 5 is in the hundreds place, the digit 2 is in the tens place, and the digit 7 is in the ones place.</p>"
    +"<div class='figure'>__SVG_N3_INTRO_PLACEVALUE__</div>"},
  {title:"Place-value addends", body:
    "<h3>Place-value addends</h3><p>Any three-digit number can be split into a sum of place-value addends — how many hundreds, how many tens, and how many ones it contains: 527 = 500 + 20 + 7. If some place holds a 0, that addend is simply left out: 408 = 400 + 8, not 400 + 0 + 8.</p><div class='warn'><span class='hand'>Common mistake</span>Mixing up a place's digit with its actual place-value addend. In the number 527 the hundreds digit is 5, but the hundreds addend isn't 5 — it's 500 (five whole hundreds).</div>",
    exIdx:0},
  {title:"How to read and write numbers", body:
    "<h3>How to read and write numbers</h3><p>We read 527 as &ldquo;five hundred twenty-seven&rdquo;: first we name the hundreds, then the number made by the tens and ones. If there are no tens, we read &ldquo;…hundred and (the) ones&rdquo;: 503 is &ldquo;five hundred three.&rdquo; If there are no ones, we read the tens as usual: 580 is &ldquo;five hundred eighty.&rdquo;</p><div class='warn'><span class='hand'>Common mistake</span>If the tens or ones place holds a 0, it still has to be written in its place. &ldquo;Five hundred three&rdquo; is 503, not 53: the 0 holds the tens place, which this number doesn't have.</div>",
    exIdx:1},
  {title:"Comparing numbers", body:
    "<h3>Comparing numbers and neighbors</h3><p>To compare two three-digit numbers, compare the hundreds first. Whichever has more hundreds is the larger number. If the hundreds are equal, compare the tens, and if the tens are equal too, compare the ones. For example, 342 and 349: the hundreds and tens are the same, and 2 ones is less than 9 ones, so 342 &lt; 349.</p><p>If the numbers have a different number of digits, the one with more digits is larger: any three-digit number is larger than any two-digit number. The smallest three-digit number is 100, and the largest is 999.</p>",
    exIdx:2},
  {title:"Neighbors of a number", body:
    "<p>A number's neighbors are the numbers right next to it when counting: the number before is 1 less, and the number after is 1 more. The neighbors of 400 are 399 and 401.</p>",
    exIdx:3},
  {title:"Rounding", body:
    "<h3>Rounding</h3><p>When the exact number doesn't matter, we replace it with a nearby &ldquo;round&rdquo; number — we round it. To round a number to the nearest ten, look at the ones digit. If it's 0, 1, 2, 3, or 4, the tens digit stays the same and the ones digit becomes zero. If the ones digit is 5, 6, 7, 8, or 9, the tens digit goes up by 1, and the ones digit becomes zero again.</p><p>To round to the nearest hundred, look at the tens digit the same way. Watch how the number &ldquo;jumps&rdquo; to the nearest hundred. The ≈ sign means &ldquo;approximately equal to.&rdquo;<div class='figure'>__SVG_N3_ROUND_ANIM__</div></p><div class='note'><span class='hand'>Remember</span>A number ending in 50 rounds up when rounded to the nearest hundred: 350 ≈ 400. And 650 rounds up to 700.</div>",
    exIdx:4},
  {title:"Column addition", body:
    "<h3>Column addition</h3><p>To add numbers in column form, write them one under the other so ones line up under ones, tens under tens, and hundreds under hundreds. Add from right to left, starting with the ones. If a place's sum comes to 10 or more, write only the ones digit and &ldquo;carry&rdquo; the ten into the next place.</p><p>Let's find 356 + 275. Ones: 6 + 5 = 11, write 1, carry 1 to the tens. Tens: 5 + 7 + 1 = 13, write 3, carry 1 to the hundreds. Hundreds: 3 + 2 + 1 = 6. We get 631.</p>",
    exIdx:5},
  {title:"Column subtraction", body:
    "<h3>Column subtraction</h3><p>Subtraction also goes right to left. If the top digit is smaller than the bottom one, &ldquo;borrow&rdquo; a ten from the next place over. If that place holds a 0, you have to borrow further, through an extra place.</p><p>Let's find 500 − 268. Ones: 0 is less than 8, and the tens are 0 too — borrow from the hundreds: 5 hundreds → 4 hundreds, and the tens and ones become &ldquo;9 and 10&rdquo;: 9 tens, 10 ones. Now 10 − 8 = 2. Tens: 9 − 6 = 3. Hundreds: 4 − 2 = 2. Answer: 232.</p><div class='note'><span class='hand'>Remember</span>You can check subtraction by adding: if 500 − 268 = 232, then 232 + 268 should give 500 again.</div>",
    exIdx:6},
  {title:"Estimating — a quick check", body:
    "<h3>Estimating — a quick check</h3><p>Before solving exactly, it helps to estimate the answer in your head by rounding the numbers to tens or hundreds. 356 + 275 ≈ 360 + 280 = 640 — that's close to the exact answer of 631, so the answer looks right. If the exact answer is way off from the estimate, there's probably a mistake somewhere.</p>"
    +"<div class='figure'>__SVG_N3_ESTIMATE__</div>"}
];

CONTENT_EN.mul3 = {
  goal: "After this topic you'll know the multiplication table up to 9 · 9 confidently, be able to easily multiply two-digit and three-digit numbers by a one-digit number, and divide numbers — including with a remainder — while checking the result with the inverse operation.",
  explain: "<p>Multiplication is a quick way to add the same number many times over. Division helps you find out how many times one number &ldquo;fits&rdquo; into another, or how to split it into equal parts. Today we'll go through the whole multiplication table, learn to multiply and divide bigger numbers, and find out what to do when a number doesn't divide evenly.</p>"
  + "<h3>The multiplication table and division as the inverse operation</h3>"
  + "<p>You need to know the multiplication table from 1 to 9 by heart — it will be useful your whole life. But every product has an &ldquo;opposite pair&rdquo; — division. If 7 · 8 = 56, that immediately gives you two division facts: 56 : 7 = 8 and 56 : 8 = 7. Knowing one multiplication fact gets you two division facts for free!</p>"
  + "<div class='note'><span class='hand'>Remember</span>Multiplication and division are related operations. To check a division, multiply the quotient by the divisor — you should get the dividend back: if 56 : 8 = 7, the check is 8 · 7, and indeed that equals 56.</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Mixing up which number is being divided and which it's divided by. In 56 : 8 = 7, the dividend is 56 (what's being divided), the divisor is 8 (what it's divided by), and 7 is the quotient (the result). The dividend always comes first.</div>"
  + "<h3>Multiplying a two-digit or three-digit number by a one-digit number</h3>"
  + "<p>To multiply, say, 23 by 4, we multiply each place separately, starting from the ones, and if we get a two-digit number, we remember the &ldquo;extra&rdquo; ten and add it to the next place. Let's work through 47 · 3: first the ones — 7 · 3 = 21, write 1, remember (carry) the 2. Then the tens — 4 · 3 = 12, add the carried 2, we get 14. Write 14 next to the 1 — giving 141.</p>"
  + "<p>With three-digit numbers we do exactly the same, just with more places: ones, then tens, then hundreds — and any carries always go to the next (higher) place.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Forgetting the carry, or adding it to the wrong place. A carry from the ones place is added only to the tens place, not to the hundreds. If in doubt, make an estimate: 47 · 3 is a bit less than 50 · 3 = 150, so 141 looks like a reasonable answer.</div>"
  + "<h3>Dividing a two-digit or three-digit number by a one-digit number with no remainder</h3>"
  + "<p>Division with no remainder can be thought of as multiplication &ldquo;in reverse&rdquo;: we look for the number that, multiplied by the divisor, gives the dividend. For example, for 96 : 4 we look for the number that, multiplied by 4, gives 96. It's handy to split the dividend into parts: 96 = 80 + 16, so 80 : 4 = 20 and 16 : 4 = 4, together 20 + 4 = 24. Check: 24 · 4 = 96 — it matches!</p>"
  + "<p>We do the same with three-digit numbers: split the dividend into convenient &ldquo;round&rdquo; parts. 848 : 4 = (800 + 48) : 4 = 800 : 4 + 48 : 4 = 200 + 12 = 212.</p>"
  + "<h3>Division with a remainder</h3>"
  + "<p>See how a <b>remainder</b> shows up if 34 candies can't be split evenly into groups of 5: you get 6 whole plates, with 4 candies left over.</p><div class='figure'>__SVG_MUL3_REMAINDER_ANIM__</div>"
  + "<div class='note'><span class='hand'>Remember</span>The remainder is always <b>less than the divisor</b>. If you're dividing by 5, the remainder can only be 0, 1, 2, 3, or 4 — never 5 or more. If you end up with a remainder equal to or greater than the divisor, the quotient was taken too small — increase it by 1.</div>"
  + "<p>Checking division with a remainder is easy: <b>divisor · quotient + remainder = dividend</b>. For the example above: 5 · 6 + 4 = 30 + 4 = 34 — correct!</p>"
  + "<h3>The commutative property of multiplication</h3>"
  + "<p>Swapping the order of the factors doesn't change the product: a · b = b · a. For example, 6 · 9 and 9 · 6 are the same number, 54. This property is handy: if you forget what 8 · 3 is but remember 3 · 8 = 24, then 8 · 3 = 24 too.</p>",
  examples: [
    {t:"Knowing that 7 · 8 = 56, name both divisions that use these numbers.", s:"The product 56 splits into the factors 7 and 8. So 56 : 7 = 8 (dividing by 7 gives the second factor, 8) and 56 : 8 = 7 (dividing by 8 gives the first factor, 7)."},
    {t:"Find 23 · 4.", s:"Ones: 3 · 4 = 12, write 2, remember (carry) 1. Tens: 2 · 4 = 8, plus the carried 1 — we get 9. Answer: 92."},
    {t:"Find 124 · 3.", s:"Ones: 4 · 3 = 12, write 2, carry 1. Tens: 2 · 3 = 6, plus 1 — we get 7. Hundreds: 1 · 3 = 3. Answer: 372."},
    {t:"Divide 84 by 4.", s:"Let's split 84 into convenient parts: 80 and 4. 80 : 4 = 20, and 4 : 4 = 1. Add them: 20 + 1 = 21. Check: 21 · 4 = 84."},
    {t:"Divide 639 by 3.", s:"Let's split 639 into 600, 30, and 9. 600 : 3 = 200, 30 : 3 = 10, 9 : 3 = 3. Add them: 200 + 10 + 3 = 213. Check: 213 · 3 = 639."},
    {t:"Divide with a remainder: 29 by 4.", s:"We look for the largest number that, multiplied by 4, doesn't go over 29: 4 · 7 = 28, while 4 · 8 = 32 — already too big. So the quotient is 7, and the remainder is 29 − 28 = 1. We write: 29 : 4 = 7 (rem. 1). Check: 4 · 7 + 1 = 29."},
    {t:"Check the commutative property using 6 and 9.", s:"6 · 9 = 54. Swap the factors: 9 · 6 = 54. The result didn't change — the property holds."}
  ],
  tasks: [
    {q:"Find the value of the expression: 7 × 9.", ans:"63", hint:"Recall the multiplication table for 9 (or for 7).", sol:"7 × 9 = 63."},
    {q:"Find the value of the expression: 72 : 8.", ans:"9", hint:"Think about what you need to multiply 8 by to get 72.", sol:"8 × 9 = 72, so 72 : 8 = 9."},
    {q:"Find the value of the expression: 72 : 9.", ans:"8", hint:"This division is the inverse of the same multiplication as in the last task.", sol:"9 × 8 = 72, so 72 : 9 = 8."},
    {q:"Find the value of the expression: 34 × 2.", ans:"68", hint:"Multiply place by place: first the ones, then the tens.", sol:"4 × 2 = 8. 3 × 2 = 6. We get 68."},
    {q:"Find the value of the expression: 213 × 3.", ans:"639", hint:"Multiply each digit by 3, starting with the ones. There won't be any carries here.", sol:"3 × 3 = 9. 1 × 3 = 3. 2 × 3 = 6. We get 639."},
    {q:"Find the value of the expression: 142 × 4.", ans:"568", hint:"In which place will you cross over into the next ten?", sol:"2 × 4 = 8. 4 × 4 = 16, write 6, carry 1. 1 × 4 = 4, plus 1 — 5. We get 568."},
    {q:"Find the value of the expression: 47 × 3.", ans:"141", hint:"7 × 3 gives a two-digit number — don't forget the carry into the tens place.", sol:"7 × 3 = 21, write 1, carry 2. 4 × 3 = 12, plus 2 — 14. We get 141."},
    {q:"Find the value of the expression: 256 × 3.", ans:"768", hint:"Work place by place from right to left, and don't forget the carries.", sol:"6 × 3 = 18, write 8, carry 1. 5 × 3 = 15, plus 1 — 16, write 6, carry 1. 2 × 3 = 6, plus 1 — 7. We get 768."},
    {q:"Find the value of the expression: 96 : 4.", ans:"24", hint:"First split it into convenient parts: 80 and 16.", sol:"80 : 4 = 20, 16 : 4 = 4, together 20 + 4 = 24. Check: 24 × 4 = 96."},
    {q:"Find the value of the expression: 848 : 4.", ans:"212", hint:"Split it into parts: 800 : 4 and 48 : 4.", sol:"800 : 4 = 200, 48 : 4 = 12, together 200 + 12 = 212. Check: 212 × 4 = 848."},
    {q:"Divide with a remainder: 34 : 5. Find the QUOTIENT (without the remainder).", ans:"6", hint:"Pick the largest number that, multiplied by 5, doesn't go over 34.", sol:"5 × 6 = 30, which isn't more than 34, while 5 × 7 = 35 — already too big. So the quotient is 6."},
    {q:"Divide with a remainder: 34 : 5. Find the REMAINDER.", ans:"4", hint:"Remainder = dividend minus the divisor times the quotient.", sol:"The quotient is 6, 5 × 6 = 30. Remainder: 34 − 30 = 4 (it's less than the divisor 5, so this checks out)."},
    {q:"There are 6 rabbits in a cage. Each rabbit has 2 ears. How many ears do all the rabbits have together?", ans:"12", hint:"Multiply the number of rabbits by the number of ears per rabbit.", sol:"6 × 2 = 12 ears."},
    {q:"There are 9 pencils in one box. How many pencils are in 7 such boxes?", ans:"63", hint:"Multiply the number of pencils in one box by the number of boxes.", sol:"9 × 7 = 63 pencils."},
    {q:"Kolya divided 184 by 4 and got 46. What number should you get if you multiply 46 by 4, for the check to match the dividend?", ans:"184", hint:"When a division is correct, the divisor times the quotient equals the dividend.", sol:"46 × 4 = 184 — matches the dividend, so the division was done correctly."},
    {q:"Find the missing factor: 6 × □ = 48.", ans:"8", hint:"The missing factor equals the product divided by the known factor.", sol:"48 : 6 = 8. Check: 6 × 8 = 48."},
    {q:"Which of these is true?", opts:["4 × 9 is less than 9 × 4","9 × 4 is less than 4 × 9","4 × 9 and 9 × 4 are equal"], ans:2, hint:"Recall the commutative property of multiplication.", sol:"Swapping the factors doesn't change the product: 4 × 9 = 36 and 9 × 4 = 36. So the numbers are equal."},
    {q:"Can dividing a number by 6 give a remainder of 7?", opts:["Yes, it can","No, it cannot"], ans:1, hint:"Compare the possible remainder with the divisor.", sol:"The remainder is always less than the divisor. When dividing by 6, the remainder can only be 0, 1, 2, 3, 4, or 5 — a remainder of 7 is impossible."},
    {q:"50 buttons are sorted into boxes of 8 each. How many full boxes are there?", ans:"6", hint:"Pick the largest number that, multiplied by 8, doesn't go over 50.", sol:"8 × 6 = 48, which isn't more than 50, while 8 × 7 = 56 — already too big. There are 6 full boxes."},
    {q:"In the previous task (50 buttons, 8 per box), how many buttons are left over, not fitting into the full boxes?", ans:"2", hint:"The remainder is what didn't fit into the full boxes.", sol:"6 boxes hold 8 × 6 = 48 buttons. 50 − 48 = 2 buttons are left over."}
  ],
  bonus: {q:"We picked a number, multiplied it by 6, then divided the result by 2. We got 27. What number did we pick?", ans:"9", hint:"Work backward, undoing each operation: first &ldquo;undo&rdquo; the division, then &ldquo;undo&rdquo; the multiplication.", sol:"The last step was dividing by 2, so before that it was 27 × 2 = 54. Before that, it was multiplied by 6: 54 : 6 = 9. Check: 9 × 6 = 54; 54 : 2 = 27."},
  test: [
    {q:"Find the value of the expression: 8 × 7.", ans:"56", sol:"8 × 7 = 56."},
    {q:"Find the value of the expression: 63 : 7.", ans:"9", sol:"7 × 9 = 63, so 63 : 7 = 9."},
    {q:"Find the value of the expression: 213 × 4.", ans:"852", sol:"3 × 4 = 12, write 2, carry 1. 1 × 4 = 4, plus 1 — 5. 2 × 4 = 8. We get 852."},
    {q:"Find the value of the expression: 56 × 3.", ans:"168", sol:"6 × 3 = 18, write 8, carry 1. 5 × 3 = 15, plus 1 — 16. We get 168."},
    {q:"Find the value of the expression: 936 : 3.", ans:"312", sol:"900 : 3 = 300, 36 : 3 = 12, together 300 + 12 = 312. Check: 312 × 3 = 936."},
    {q:"Divide with a remainder: 41 : 6. Find the quotient.", ans:"6", sol:"6 × 6 = 36, which isn't more than 41, while 6 × 7 = 42 — already too big. The quotient is 6."},
    {q:"Divide with a remainder: 41 : 6. Find the remainder.", ans:"5", sol:"The quotient is 6, 6 × 6 = 36. Remainder: 41 − 36 = 5."},
    {q:"Which of these remainders CANNOT occur when dividing a number by 5?", opts:["0","3","5","4"], ans:2, sol:"The remainder is always less than the divisor. When dividing by 5, the remainders range from 0 to 4. A remainder of 5 is impossible."}
  ],
  lab: [
    {t:"Candy for friends", b:"Take 23 candies (or coins, buttons) and split them evenly among 5 friends. How many candies does each one get, and how many are left over for you? Write the result as 23 : 5 = 4 (rem. 3) and check it by multiplying: 5 · 4 + 3 should give 23."},
    {t:"Speed multiplication table", b:"Ask an adult or a friend to call out random multiplication facts (from 2 × 2 to 9 × 9) and time how long it takes you to answer 10 of them. Practice for a day or two and try again — did you get faster?"},
    {t:"Checking with a calculator", b:"Come up with three problems: multiplying a two-digit number by a one-digit one, multiplying a three-digit number by a one-digit one, and division with a remainder. First work them out on paper, then check with a calculator (for the division with a remainder, divide and separately check by multiplying the quotient by the divisor and adding the remainder). If the answer doesn't match, find which step went wrong."},
    {t:"Finding remainders at home", b:"Find some small items of one kind at home — buttons, nuts, paper clips — and count how many you have. Try splitting them evenly into groups of 3, of 4, and of 7. In which case was the remainder the biggest? Write down all three results as division with a remainder."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.mul3.examples[0].s += "<div class='figure'>__SVG_MUL3_EX0_FACTPAIR__</div>";
CONTENT_EN.mul3.examples[1].s += "<div class='figure'>__SVG_MUL3_EX1_MULT23x4__</div>";
CONTENT_EN.mul3.examples[2].s += "<div class='figure'>__SVG_MUL3_EX2_MULT124x3__</div>";
CONTENT_EN.mul3.examples[3].s += "<div class='figure'>__SVG_MUL3_EX3_DIV84__</div>";
CONTENT_EN.mul3.examples[4].s += "<div class='figure'>__SVG_MUL3_EX4_DIV639__</div>";
CONTENT_EN.mul3.examples[5].s += "<div class='figure'>__SVG_MUL3_EX5_REMAINDER29__</div>";
CONTENT_EN.mul3.examples[6].s += "<div class='figure'>__SVG_MUL3_EX6_COMMUTE__</div>";

CONTENT_EN.mul3.steps = [
  {title:"Multiplication and division: what this topic is about", body:
    "<p>Multiplication is a quick way to add the same number many times over. Division helps you find out how many times one number &ldquo;fits&rdquo; into another, or how to split it into equal parts. Today we'll go through the whole multiplication table, learn to multiply and divide bigger numbers, and find out what to do when a number doesn't divide evenly.</p>"
    +"<div class='figure'>__SVG_MUL3_INTRO_MULT__</div>"},
  {title:"The multiplication table and division as the inverse operation", body:
    "<h3>The multiplication table and division as the inverse operation</h3><p>You need to know the multiplication table from 1 to 9 by heart — it will be useful your whole life. But every product has an &ldquo;opposite pair&rdquo; — division. If 7 · 8 = 56, that immediately gives you two division facts: 56 : 7 = 8 and 56 : 8 = 7. Knowing one multiplication fact gets you two division facts for free!</p><div class='note'><span class='hand'>Remember</span>Multiplication and division are related operations. To check a division, multiply the quotient by the divisor — you should get the dividend back: if 56 : 8 = 7, the check is 8 · 7, and indeed that equals 56.</div><div class='warn'><span class='hand'>Common mistake</span>Mixing up which number is being divided and which it's divided by. In 56 : 8 = 7, the dividend is 56 (what's being divided), the divisor is 8 (what it's divided by), and 7 is the quotient (the result). The dividend always comes first.</div>",
    exIdx:0},
  {title:"Multiplying a two-digit number by a one-digit number", body:
    "<h3>Multiplying a two-digit or three-digit number by a one-digit number</h3><p>To multiply, say, 23 by 4, we multiply each place separately, starting from the ones, and if we get a two-digit number, we remember the &ldquo;extra&rdquo; ten and add it to the next place. Let's work through 47 · 3: first the ones — 7 · 3 = 21, write 1, remember (carry) the 2. Then the tens — 4 · 3 = 12, add the carried 2, we get 14. Write 14 next to the 1 — giving 141.</p>",
    exIdx:1},
  {title:"Multiplying a three-digit number by a one-digit number", body:
    "<p>With three-digit numbers we do exactly the same, just with more places: ones, then tens, then hundreds — and any carries always go to the next (higher) place.</p><div class='warn'><span class='hand'>Common mistake</span>Forgetting the carry, or adding it to the wrong place. A carry from the ones place is added only to the tens place, not to the hundreds. If in doubt, make an estimate: 47 · 3 is a bit less than 50 · 3 = 150, so 141 looks like a reasonable answer.</div>",
    exIdx:2},
  {title:"Dividing with no remainder: a two-digit number", body:
    "<h3>Dividing a two-digit or three-digit number by a one-digit number with no remainder</h3><p>Division with no remainder can be thought of as multiplication &ldquo;in reverse&rdquo;: we look for the number that, multiplied by the divisor, gives the dividend. For example, for 96 : 4 we look for the number that, multiplied by 4, gives 96. It's handy to split the dividend into parts: 96 = 80 + 16, so 80 : 4 = 20 and 16 : 4 = 4, together 20 + 4 = 24. Check: 24 · 4 = 96 — it matches!</p>",
    exIdx:3},
  {title:"Dividing with no remainder: a three-digit number", body:
    "<p>We do the same with three-digit numbers: split the dividend into convenient &ldquo;round&rdquo; parts. 848 : 4 = (800 + 48) : 4 = 800 : 4 + 48 : 4 = 200 + 12 = 212.</p>",
    exIdx:4},
  {title:"Division with a remainder", body:
    "<h3>Division with a remainder</h3><p>See how a <b>remainder</b> shows up if 34 candies can't be split evenly into groups of 5: you get 6 whole plates, with 4 candies left over.</p><div class='figure'>__SVG_MUL3_REMAINDER_ANIM__</div><div class='note'><span class='hand'>Remember</span>The remainder is always <b>less than the divisor</b>. If you're dividing by 5, the remainder can only be 0, 1, 2, 3, or 4 — never 5 or more. If you end up with a remainder equal to or greater than the divisor, the quotient was taken too small — increase it by 1.</div><p>Checking division with a remainder is easy: <b>divisor · quotient + remainder = dividend</b>. For the example above: 5 · 6 + 4 = 30 + 4 = 34 — correct!</p>",
    exIdx:5},
  {title:"The commutative property of multiplication", body:
    "<h3>The commutative property of multiplication</h3><p>Swapping the order of the factors doesn't change the product: a · b = b · a. For example, 6 · 9 and 9 · 6 are the same number, 54. This property is handy: if you forget what 8 · 3 is but remember 3 · 8 = 24, then 8 · 3 = 24 too.</p>",
    exIdx:6}
];

CONTENT_EN.word3 = {
  goal: "After this topic you'll be able to solve multi-step word problems in 2–3 steps, compare numbers using &ldquo;by how much&rdquo; and &ldquo;how many times,&rdquo; solve simple problems about motion, and check your answer by whether it makes sense.",
  explain: "<p>A simple problem is solved in one step: there were 5 apples, 2 were eaten — how many are left? But in real life you more often meet problems where one step isn't enough. These are called <b>multi-step</b> problems: several simple problems are hidden inside them, and you need to work toward the answer one step at a time.</p>"
  + "<h3>How to work through a multi-step problem</h3>"
  + "<p>To avoid getting confused, break the problem down by a plan: 1) what is known; 2) what you need to find; 3) can you answer the question in one step, or do you first need to find something in between; 4) which operations to do, and in what order; 5) check whether the answer makes sense.</p>"
  + "<p>Example: &ldquo;One box has 8 pencils, and another has 3 more. How many pencils are in the two boxes?&rdquo; The main question — &ldquo;how many in total&rdquo; — can't be answered right away: we don't know how many pencils are in the second box. First we find this in-between number: 8 + 3 = 11. Now we can answer the main question: 8 + 11 = 19.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Rushing and adding (or subtracting) all the numbers from the problem one after another, without figuring out what each step is actually for. Before calculating, ask yourself: what am I finding with this step, and why do I need it for the main question?</div>"
  + "<h3>Comparing &ldquo;by how much more or less&rdquo;</h3>"
  + "<p>To find out <b>by how much</b> one number is greater or less than another, subtract the smaller number from the bigger one. Masha collected 24 stickers, and Kolya collected 17. By how many stickers does Masha have more? 24 − 17 = 7 — that's how we compared by difference.</p>"
  + "<h3>Comparing &ldquo;how many times more or less&rdquo;</h3>"
  + "<p>Sometimes you need to compare not by how much, but by how many times one number is bigger than another — then you divide the bigger number by the smaller one. Look at how Serёzha's 12 toy cars line up in groups of 4, just like Petya's:<div class='figure'>__SVG_WORD3_TIMES_ANIM__</div></p>"
  + "<div class='note'><span class='hand'>Remember</span>The words &ldquo;by how much&rdquo; are a signal for <b>subtraction</b>. The words &ldquo;how many times&rdquo; are a signal for <b>division</b>. It's easy to mix them up, so always re-read the question.</div>"
  + "<h3>Problems about motion</h3>"
  + "<p><b>Speed</b> shows how much distance is covered — walked, driven, or flown — in one unit of time, for example in 1 hour. If a pedestrian's speed is 4 km/h, that means they cover 4 km every hour, and twice as much in 2 hours. To find the distance traveled, multiply speed by time:</p>"
  + "<p style=\"text-align:center\"><b>distance = speed · time</b></p>"
  + "<p>From this same formula you can find the other quantities too: if you know the distance and the time, you find the speed by dividing distance by time (speed = distance : time); and if you know the distance and the speed, you find the time by dividing distance by speed (time = distance : speed).</p>"
  + "<p>A cyclist rides at a speed of 12 km/h. What distance will they cover in 3 hours? 12 · 3 = 36 km. And if they had to cover 36 km at the same speed, the time would be found by division: 36 : 12 = 3 hours.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Mixing up what to multiply or divide by what. Remember it by meaning: the higher the speed, the greater the distance covered in the same time — so distance = speed · time, not the other way around.</div>"
  + "<h3>Extra information and checking the answer by meaning</h3>"
  + "<p>Some problems include numbers that aren't actually needed to answer the question — <b>extra information</b>. Before calculating, think about which numbers you'll definitely need, and which ones are just describing the situation.</p>"
  + "<p>Any answer is worth checking without recalculating — just think about whether the number makes sense. If there are 28 pupils in a class and a few got sick, the answer can't come out bigger than 28. If the problem asked &ldquo;by how much more,&rdquo; the answer is usually noticeably smaller than the numbers being compared. And if the check gives a negative number, or one that's much too big, there's a mistake somewhere in the steps.</p>"
  + "<div class='note'><span class='hand'>Remember</span>Solved the problem? Don't rush to write down the answer. Ask yourself: does this number look like it could be true? Could it really happen in real life?</div>",
  examples: [
    {t:"A store had 54 loaves of bread. In the morning 18 loaves were sold, and another 23 during the day. How many loaves of bread are left?", s:"The main question is how many are left, but first we need to find out how many were sold in total. 1) Sold in total: 18 + 23 = 41 loaves. 2) Left: 54 − 41 = 13 loaves. Checking by meaning: 13 is less than there were at the start (54) — that makes sense."},
    {t:"One shelf has 36 books, and another has 9 fewer. How many books are on the two shelves together?", s:"First we find the in-between number — how many books are on the second shelf: 36 − 9 = 27. Now we answer the main question: 36 + 27 = 63 books. Check: 63 is more than there were on one shelf alone — that's logical, since we added both shelves together."},
    {t:"A farmer has 8 cows, and 5 times as many sheep. How many animals does the farmer have in total?", s:"The words &ldquo;5 times as many&rdquo; are a signal for multiplication. 1) Sheep: 8 · 5 = 40. 2) Total animals: 8 + 40 = 48. Check: 48 is more than the cows alone, which makes sense, since we added the sheep."},
    {t:"A car drives at a speed of 65 km/h for 3 hours, then another 2 hours at 70 km/h. What distance did the car cover in total?", s:"We find the distance for each leg by multiplying speed by time. 1) First leg: 65 · 3 = 195 km. 2) Second leg: 70 · 2 = 140 km. 3) Whole trip: 195 + 140 = 335 km."},
    {t:"A bus needs to cover 180 km at a speed of 45 km/h. How many hours will it take?", s:"We know the distance and the speed, and need to find the time, so we divide distance by speed: 180 : 45 = 4. The bus will travel for 4 hours. Check by the inverse operation: 45 · 4 = 180 — matches the given distance."},
    {t:"54 pupils took part in the school running competition. Of them, 30 are boys, the rest are girls. The boys were split evenly into 5 teams. How many boys are on each team?", s:"The number of girls isn't needed to answer the question — it's extra information. We only need the number of boys and the number of teams: 30 : 5 = 6 boys on each team. (The number of girls, 54 − 30 = 24, wasn't needed in this problem.)"},
    {t:"The zoo has 16 parrots, and 4 times fewer storks. By how many is the number of storks less than the number of parrots?", s:"First we find how many storks there are: the words &ldquo;4 times fewer&rdquo; are a signal for division: 16 : 4 = 4 storks. Now we find the difference: 16 − 4 = 12. Checking by meaning: 12 is less than 16 parrots — the number makes sense."}
  ],
  tasks: [
    {q:"There were 42 passengers on a bus. At one stop 15 people got off, and at the next 9 got on. How many passengers are on the bus now?", ans:"36", hint:"First find out how many passengers were left after the 15 people got off.", sol:"After getting off: 42 − 15 = 27. After 9 got on: 27 + 9 = 36. Answer: 36 passengers."},
    {q:"Kira had 50 rubles. She bought a notebook for 18 rubles and a pen for 12 rubles. How many rubles does she have left?", ans:"20", hint:"Find how much Kira spent in total.", sol:"Spent: 18 + 12 = 30 rubles. Left: 50 − 30 = 20 rubles."},
    {q:"One crate has 24 kg of apples, and another has 7 kg more. How many kilograms of apples are in the two crates together?", ans:"55", hint:"First find how many apples are in the second crate.", sol:"In the second crate: 24 + 7 = 31 kg. Total: 24 + 31 = 55 kg."},
    {q:"There are 9 apple trees growing in a garden, and 3 times as many pear trees. How many fruit trees are growing in the garden in total?", ans:"36", hint:"The words &ldquo;3 times as many&rdquo; mean multiplication.", sol:"Pear trees: 9 · 3 = 27. Total trees: 9 + 27 = 36."},
    {q:"Lyosha has 6 toy cars, and Vova has 18 toy cars. How many times more cars does Vova have than Lyosha?", opts:["2","3","4","12"], ans:1, hint:"To compare &ldquo;how many times,&rdquo; divide the bigger number by the smaller one.", sol:"18 : 6 = 3. Vova has 3 times as many cars."},
    {q:"A school bus drives at a speed of 50 km/h. What distance will it cover in 6 hours?", ans:"300", hint:"Distance = speed · time.", sol:"50 · 6 = 300 km."},
    {q:"A cyclist covered 48 km at a speed of 16 km/h. How many hours was the trip?", ans:"3", hint:"You know the distance and the speed — divide distance by speed.", sol:"48 : 16 = 3 hours. Check: 16 · 3 = 48."},
    {q:"A tourist walked at a speed of 5 km/h for 2 hours, then another 3 hours at 4 km/h. What distance did they cover in total?", ans:"22", hint:"Find the distance for each leg separately, then add them.", sol:"First leg: 5 · 2 = 10 km. Second leg: 4 · 3 = 12 km. Total: 10 + 12 = 22 km."},
    {q:"There are 27 pupils in the first class, and 4 fewer in the second. How many pupils are there in the two classes together?", ans:"50", hint:"First find the number of pupils in the second class.", sol:"In the second class: 27 − 4 = 23. Total: 27 + 23 = 50 pupils."},
    {q:"A store sold 120 kg of potatoes and 45 kg of carrots in one day. The potatoes were delivered in the morning in 20 kg sacks. How many sacks of potatoes were delivered, if all the potatoes were sold?", ans:"6", hint:"You'll only need the weight of the potatoes to answer, not the carrots.", sol:"120 : 20 = 6 sacks. The weight of the carrots (45 kg) isn't needed in this problem — it's extra information."},
    {q:"One box has 15 pencils, and another has 3 times as many. By how many pencils does the second box have more than the first?", ans:"30", hint:"First find how many pencils are in the second box.", sol:"In the second box: 15 · 3 = 45. Difference: 45 − 15 = 30."},
    {q:"A cat catches mice. On Monday it caught 3 mice, on Tuesday twice as many as Monday, and on Wednesday as many as Monday and Tuesday together. How many mice did the cat catch over three days?", ans:"18", hint:"Find in order: how many on Tuesday, how many on Wednesday, and then add up all three days.", sol:"Tuesday: 3 · 2 = 6. Wednesday: 3 + 6 = 9. Total: 3 + 6 + 9 = 18 mice."},
    {q:"A car covered 240 km in 4 hours. What was its speed?", ans:"60", hint:"You know the distance and the time — divide distance by time.", sol:"240 : 4 = 60 km/h. Check: 60 · 4 = 240."},
    {q:"One class has 12 boys and 16 girls. The whole class was split into equal groups of 4. How many groups were formed?", ans:"7", hint:"First find how many pupils are in the class in total.", sol:"Total pupils: 12 + 16 = 28. Groups: 28 : 4 = 7."},
    {q:"A library has 48 children's books and 16 books for adults. How many times more children's books are there than books for adults?", opts:["2","3","4","16"], ans:1, hint:"Divide the bigger number by the smaller one.", sol:"48 : 16 = 3. There are 3 times as many children's books."},
    {q:"One basket has 5 kg of cherries, and another has 9 kg more. How many kilograms of cherries are in the two baskets together?", ans:"19", hint:"First find the weight of cherries in the second basket.", sol:"In the second basket: 5 + 9 = 14 kg. Total: 5 + 14 = 19 kg."},
    {q:"Mom gave Petya 200 rubles. He bought 3 notebooks at 15 rubles each and an album for 45 rubles. How many rubles does he have left?", ans:"110", hint:"First find how much all the notebooks cost, then how much he spent in total.", sol:"Notebooks: 3 · 15 = 45 rubles. Total spent: 45 + 45 = 90 rubles. Left: 200 − 90 = 110 rubles."},
    {q:"A train travels for 2 hours at 70 km/h, then another 3 hours at 80 km/h. What distance did the train cover in these 5 hours?", ans:"380", hint:"Find the distance for each leg and add them.", sol:"First leg: 70 · 2 = 140 km. Second leg: 80 · 3 = 240 km. Total: 140 + 240 = 380 km."},
    {q:"One shelf has 36 books, and another has 6 times fewer. How many books are on the two shelves together?", ans:"42", hint:"First find how many books are on the second shelf.", sol:"On the second shelf: 36 : 6 = 6 books. Total: 36 + 6 = 42 books."},
    {q:"A farm has 56 chickens and 10 geese. There are 8 times fewer roosters than chickens. How many roosters are on the farm?", ans:"7", hint:"The number of geese isn't needed to answer.", sol:"56 : 8 = 7 roosters. The number of geese (10) is extra information in this problem."}
  ],
  bonus: {q:"Three friends were picking mushrooms. Anya picked twice as many mushrooms as Valya, and Sonya picked 5 more than Anya. Together the three of them picked 45 mushrooms. How many mushrooms did Valya pick?", ans:"8", hint:"Imagine Valya picked x mushrooms. Then Anya picked 2x, and Sonya picked 2x + 5. Write the sum and find a number that fits.", sol:"Let Valya have x mushrooms. Then Anya has 2x, and Sonya has 2x + 5. Sum: x + 2x + (2x + 5) = 45, that is, 5x + 5 = 45, so 5x = 40, x = 8. Check: Valya — 8, Anya — 16, Sonya — 21. Sum: 8 + 16 + 21 = 45 — correct."},
  test: [
    {q:"There were 40 passengers on a bus. At a stop 12 people got off, and 5 got on. How many passengers are on the bus now?", ans:"33", sol:"After getting off: 40 − 12 = 28. After 5 got on: 28 + 5 = 33."},
    {q:"One bag has 3 kg of sugar, and another has 2 kg more. How many kilograms of sugar are in the two bags together?", ans:"8", sol:"In the second bag: 3 + 2 = 5 kg. Total: 3 + 5 = 8 kg."},
    {q:"Ira has 4 notebooks, and Oleg has 3 times as many. How many notebooks does Oleg have?", ans:"12", sol:"4 · 3 = 12 notebooks."},
    {q:"One garden bed has 24 bushes, and another has 4 times fewer. How many bushes are on the two beds together?", opts:["6","24","30","18"], ans:2, sol:"On the second bed: 24 : 4 = 6 bushes. Total: 24 + 6 = 30 bushes."},
    {q:"A car drives at a speed of 55 km/h. What distance will it cover in 3 hours?", ans:"165", sol:"55 · 3 = 165 km."},
    {q:"A train covered 320 km at a speed of 80 km/h. How many hours was it traveling?", ans:"4", sol:"320 : 80 = 4 hours. Check: 80 · 4 = 320."},
    {q:"A store has 60 kg of apples and 25 kg of oranges. The apples were packed into 5 kg bags. How many bags of apples were there?", ans:"12", sol:"60 : 5 = 12 bags. The weight of the oranges (25 kg) isn't needed here."},
    {q:"Mom baked 36 pies. In the morning 9 were eaten, and in the evening 3 times as many as in the morning. How many pies are left?", ans:"0", sol:"Eaten in the evening: 9 · 3 = 27. Total eaten: 9 + 27 = 36. Left: 36 − 36 = 0 — no pies left at all."}
  ],
  lab: [
    {t:"Your own shopping problem", b:"Make up your own multi-step problem about a trip to the store — in 2 steps, with a &ldquo;how many are left&rdquo; or &ldquo;how many in total&rdquo; question. Write the problem down on a sheet of paper, and then solve it together with an adult following the plan: what is known, what you need to find, which operations and in what order."},
    {t:"Measuring your own speed", b:"Ask an adult to time you with a clock that has a second hand, or with a phone, while you walk 50 or 100 meters at a normal pace (measure the distance with a tape measure or by counting steps). Work out how many meters you walk in one minute — that's your own speed. Then estimate how long it would take to walk 1 kilometer at that speed."},
    {t:"Comparing &ldquo;by how much&rdquo; and &ldquo;how many times&rdquo;", b:"Count how many books (or toys, or pencils) you have, and how many a brother, sister, or friend has of the same thing. Find by how much your amounts differ, and then by how many times more the person with more has. Write down both answers and explain in words the difference between these two kinds of comparison."},
    {t:"A week of saving", b:"Keep track: how much money you had in your piggy bank at the start of the week, how much you added each day, and how much you spent. At the end of the week, use your notes to make up a multi-step problem (&ldquo;how much is left in the piggy bank?&rdquo;) and solve it step by step, then check the answer by counting the coins or bills."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.word3.examples[0].s += "<div class='figure'>__SVG_WORD3_EX0_REMAIN__</div>";
CONTENT_EN.word3.examples[1].s += "<div class='figure'>__SVG_WORD3_EX1_SHELVES__</div>";
CONTENT_EN.word3.examples[2].s += "<div class='figure'>__SVG_WORD3_EX2_FARM__</div>";
CONTENT_EN.word3.examples[3].s += "<div class='figure'>__SVG_WORD3_EX3_CARTRIP__</div>";
CONTENT_EN.word3.examples[4].s += "<div class='figure'>__SVG_WORD3_EX4_BUS__</div>";
CONTENT_EN.word3.examples[5].s += "<div class='figure'>__SVG_WORD3_EX5_RACE__</div>";
CONTENT_EN.word3.examples[6].s += "<div class='figure'>__SVG_WORD3_EX6_ZOO__</div>";

CONTENT_EN.word3.steps = [
  {title:"Simple vs. multi-step problems", body:
    "<p>A simple problem is solved in one step: there were 5 apples, 2 were eaten — how many are left? But in real life you more often meet problems where one step isn't enough. These are called <b>multi-step</b> problems: several simple problems are hidden inside them, and you need to work toward the answer one step at a time.</p>"
    +"<div class='figure'>__SVG_WORD3_INTRO_STEPS__</div>"},
  {title:"How to work through a multi-step problem", body:
    "<h3>How to work through a multi-step problem</h3><p>To avoid getting confused, break the problem down by a plan: 1) what is known; 2) what you need to find; 3) can you answer the question in one step, or do you first need to find something in between; 4) which operations to do, and in what order; 5) check whether the answer makes sense.</p><p>Example: &ldquo;One box has 8 pencils, and another has 3 more. How many pencils are in the two boxes?&rdquo; The main question — &ldquo;how many in total&rdquo; — can't be answered right away: we don't know how many pencils are in the second box. First we find this in-between number: 8 + 3 = 11. Now we can answer the main question: 8 + 11 = 19.</p><div class='warn'><span class='hand'>Common mistake</span>Rushing and adding (or subtracting) all the numbers from the problem one after another, without figuring out what each step is actually for. Before calculating, ask yourself: what am I finding with this step, and why do I need it for the main question?</div>",
    exIdx:0},
  {title:"Comparing &ldquo;by how much more or less&rdquo;", body:
    "<h3>Comparing &ldquo;by how much more or less&rdquo;</h3><p>To find out <b>by how much</b> one number is greater or less than another, subtract the smaller number from the bigger one. Masha collected 24 stickers, and Kolya collected 17. By how many stickers does Masha have more? 24 − 17 = 7 — that's how we compared by difference.</p>",
    exIdx:1},
  {title:"Comparing &ldquo;how many times more or less&rdquo;", body:
    "<h3>Comparing &ldquo;how many times more or less&rdquo;</h3><p>Sometimes you need to compare not by how much, but by how many times one number is bigger than another — then you divide the bigger number by the smaller one. Look at how Serёzha's 12 toy cars line up in groups of 4, just like Petya's:<div class='figure'>__SVG_WORD3_TIMES_ANIM__</div></p><div class='note'><span class='hand'>Remember</span>The words &ldquo;by how much&rdquo; are a signal for <b>subtraction</b>. The words &ldquo;how many times&rdquo; are a signal for <b>division</b>. It's easy to mix them up, so always re-read the question.</div>",
    exIdx:[2,6]},
  {title:"Speed, time and distance", body:
    "<h3>Problems about motion</h3><p><b>Speed</b> shows how much distance is covered — walked, driven, or flown — in one unit of time, for example in 1 hour. If a pedestrian's speed is 4 km/h, that means they cover 4 km every hour, and twice as much in 2 hours. To find the distance traveled, multiply speed by time:</p><p style=\"text-align:center\"><b>distance = speed · time</b></p>",
    exIdx:3},
  {title:"Finding speed or time", body:
    "<p>From this same formula you can find the other quantities too: if you know the distance and the time, you find the speed by dividing distance by time (speed = distance : time); and if you know the distance and the speed, you find the time by dividing distance by speed (time = distance : speed).</p><p>A cyclist rides at a speed of 12 km/h. What distance will they cover in 3 hours? 12 · 3 = 36 km. And if they had to cover 36 km at the same speed, the time would be found by division: 36 : 12 = 3 hours.</p><div class='warn'><span class='hand'>Common mistake</span>Mixing up what to multiply or divide by what. Remember it by meaning: the higher the speed, the greater the distance covered in the same time — so distance = speed · time, not the other way around.</div>",
    exIdx:4},
  {title:"Extra information and checking the answer", body:
    "<h3>Extra information and checking the answer by meaning</h3><p>Some problems include numbers that aren't actually needed to answer the question — <b>extra information</b>. Before calculating, think about which numbers you'll definitely need, and which ones are just describing the situation.</p><p>Any answer is worth checking without recalculating — just think about whether the number makes sense. If there are 28 pupils in a class and a few got sick, the answer can't come out bigger than 28. If the problem asked &ldquo;by how much more,&rdquo; the answer is usually noticeably smaller than the numbers being compared. And if the check gives a negative number, or one that's much too big, there's a mistake somewhere in the steps.</p><div class='note'><span class='hand'>Remember</span>Solved the problem? Don't rush to write down the answer. Ask yourself: does this number look like it could be true? Could it really happen in real life?</div>",
    exIdx:5}
];

CONTENT_EN.geo3 = {
  goal: "After this topic you'll be able to tell triangles apart from quadrilaterals, find the perimeter and area of a rectangle and a square, avoid mixing up these two quantities, and solve practical problems with them.",
  explain: "<p>There are many flat shapes around us: a notebook page, a tabletop, a phone screen. Every shape has a border — you can trace it with your finger along the edge — and also a &ldquo;filling&rdquo; — the space inside the border. Today we'll learn to measure both.</p>"
  + "<h3>Triangles and quadrilaterals</h3>"
  + "<p>A polygon is a shape whose sides are straight segments, with an equal number of angles and sides. A <b>triangle</b> has 3 sides and 3 angles, a <b>quadrilateral</b> has 4 sides and 4 angles. Among quadrilaterals there are special ones: a <b>rectangle</b> has all 4 angles right angles (like the corner of a sheet of paper or the corner of an ordinary book — if you line up that corner with the shape's angle, they match exactly). A <b>square</b> also has all right angles, and in addition all 4 sides are equal to each other. So a square is really a special rectangle whose sides happen to be equal.</p>"
  + "<div class='note'><span class='hand'>Remember</span>A right angle is easy to check with the corner of an ordinary sheet of paper: if the corner fits exactly into the shape's angle, that angle is a right angle.</div>"
  + "<h3>The perimeter of a polygon</h3>"
  + "<p><b>Perimeter</b> is the length of a shape's whole border, that is, the sum of the lengths of all its sides. If you trace the shape with a piece of string along the edge and then measure the string with a ruler, you get exactly the perimeter.</p>"
  + "<p>In a rectangle, opposite sides are equal: one pair of sides equals <b>a</b>, the other equals <b>b</b>. To find the perimeter, you add up all 4 sides: a + b + a + b. That's the same as adding a and b once and then taking the result twice. So the formula for the perimeter of a rectangle is: <b>P = 2 · (a + b)</b>.</p>"
  + "<p>In a square, all 4 sides are the same and equal a, so their sum is a taken 4 times: <b>P = 4 · a</b>. For example, if a square's side is 6 cm, the perimeter equals 6 + 6 + 6 + 6 = 24 cm, that is, 4 · 6 = 24 cm.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Adding only two sides of a rectangle instead of all four: writing P = a + b instead of P = 2 · (a + b). Don't forget that a rectangle has four sides, not two — opposite sides just repeat.</div>"
  + "<h3>The area of a shape</h3>"
  + "<p><b>Area</b> shows how much space a shape takes up — how many identical little squares fit inside it. If you take a square with a side of 1 cm, its area is called a <b>square centimeter</b> and is written 1 cm².</p>"
  + "<p>Picture a squared grid where each square is one square centimeter. Let's draw a rectangle on it that's 4 squares wide and 3 squares high. If we count the squares row by row, each row has 4 squares, and there are 3 rows, so instead of counting every square one by one, it's easier to multiply: 4 · 3 = 12 squares, meaning the area of this rectangle is 12 cm².</p>"
  + "<p>That gives the general formula: the area of a rectangle equals the product of its sides: <b>S = a · b</b>. And since a square's sides are both equal, its area is: <b>S = a · a</b>. For example, the area of a square with a side of 5 cm equals 5 · 5 = 25 cm².</p>"
  + "<div class='note'><span class='hand'>Remember</span>Perimeter is measured in ordinary units of length (cm, m), while area is measured in square units (cm², m²), because we're counting little squares, not segments.</div>"
  + "<h3>Perimeter and area — don't mix them up!</h3>"
  + "<p>These are two different quantities, even for the same shape. Look at this example:</p><div class='figure'>__SVG_GEO3_PERIM_AREA_ANIM__</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Thinking that shapes with the same perimeter must have the same area (or the other way around). That's not true! A rectangle 8 cm by 2 cm has a perimeter of 2 · (8 + 2) = 20 cm and an area of 8 · 2 = 16 cm². A square with a side of 4 cm has a perimeter of 4 · 4 = 16 cm and an area of 4 · 4 = 16 cm². The perimeters are different, but the areas matched — that's just a coincidence of numbers; you can't work out the area from the perimeter, or the other way around.</div>",
  examples: [
    {t:"Find the perimeter of a rectangle with sides 6 cm and 4 cm.", s:"A rectangle has two pairs of equal sides: 6 cm, 4 cm, 6 cm, 4 cm. By the formula P = 2 · (a + b) = 2 · (6 + 4) = 2 · 10 = 20 cm."},
    {t:"Find the area of the same rectangle (sides 6 cm and 4 cm).", s:"Picture a squared grid: 6 squares wide and 4 squares high. Total squares: 6 · 4 = 24. Area S = a · b = 6 · 4 = 24 cm²."},
    {t:"Find the perimeter of a square with a side of 5 cm.", s:"All 4 sides of a square equal 5 cm. P = 4 · a = 4 · 5 = 20 cm."},
    {t:"Find the area of a square with a side of 5 cm.", s:"S = a · a = 5 · 5 = 25 cm². If you picture a 5-by-5 grid, it has exactly 25 little squares."},
    {t:"A rectangle's perimeter equals 22 cm, and one of its sides is 6 cm. Find the other side.", s:"By the formula P = 2 · (a + b), so a + b = P : 2 = 22 : 2 = 11 cm. One side is 6 cm, so the other is: 11 − 6 = 5 cm."},
    {t:"A rectangle's area equals 18 cm², and one side is 3 cm. Find the other side.", s:"From S = a · b we get the other side: b = S : a = 18 : 3 = 6 cm."},
    {t:"A rectangle has sides 8 cm and 2 cm, and a square has a side of 4 cm. Which has the bigger perimeter, and which has the bigger area?", s:"Rectangle's perimeter: 2 · (8 + 2) = 20 cm. Square's perimeter: 4 · 4 = 16 cm — the rectangle has the bigger perimeter. Rectangle's area: 8 · 2 = 16 cm². Square's area: 4 · 4 = 16 cm² — the areas turned out equal! This shows that perimeter and area are different quantities, independent of each other."}
  ],
  tasks: [
    {q:"A rectangle's sides are 5 cm and 3 cm. Find its perimeter.", ans:"16", hint:"Add up all four sides, or use the formula P = 2 · (a + b).", sol:"P = 2 · (5 + 3) = 2 · 8 = 16 cm."},
    {q:"For the same rectangle (5 cm and 3 cm), find the area.", ans:"15", hint:"Multiply the sides together.", sol:"S = 5 · 3 = 15 cm²."},
    {q:"A square's side equals 6 cm. Find its perimeter.", ans:"24", hint:"A square's sides are all the same, and there are 4 of them.", sol:"P = 4 · 6 = 24 cm."},
    {q:"Find the area of a square with a side of 6 cm.", ans:"36", hint:"Multiply the side by itself.", sol:"S = 6 · 6 = 36 cm²."},
    {q:"A rectangle's perimeter equals 20 cm, and one of its sides is 7 cm. Find the other side.", ans:"3", hint:"First find the sum of two adjacent sides: divide the perimeter by 2.", sol:"a + b = 20 : 2 = 10 cm. The other side: 10 − 7 = 3 cm."},
    {q:"A rectangle's area equals 24 cm², and one side is 6 cm. Find the other side.", ans:"4", hint:"Divide the area by the known side.", sol:"The other side: 24 : 6 = 4 cm."},
    {q:"A square's perimeter equals 28 cm. Find the side of the square.", ans:"7", hint:"Divide the perimeter by 4.", sol:"Side: 28 : 4 = 7 cm."},
    {q:"A square's area equals 49 cm². Find the side of the square.", ans:"7", hint:"Think of what number, multiplied by itself, gives 49.", sol:"7 · 7 = 49, so the square's side is 7 cm."},
    {q:"A vegetable garden is shaped like a rectangle with sides 8 m and 5 m. How many meters of fencing are needed to go around it?", ans:"26", hint:"That's the rectangle's perimeter.", sol:"P = 2 · (8 + 5) = 2 · 13 = 26 m."},
    {q:"For the same garden (8 m and 5 m), find the area — how many square meters of land are inside it.", ans:"40", hint:"Multiply the garden's sides.", sol:"S = 8 · 5 = 40 m²."},
    {q:"Which of these shapes has the biggest perimeter?", opts:["A rectangle with sides 6 cm and 2 cm","A rectangle with sides 4 cm and 3 cm","A square with a side of 5 cm"], ans:2, hint:"Calculate the perimeter of each shape and compare the numbers.", sol:"First: 2 · (6 + 2) = 16 cm. Second: 2 · (4 + 3) = 14 cm. Third: 4 · 5 = 20 cm. The biggest perimeter belongs to the square, 20 cm."},
    {q:"Graph paper shows a rectangle that's 4 squares wide and 3 squares high. How many squares in total are inside this rectangle?", ans:"12", hint:"Multiply the number of squares in a row by the number of rows.", sol:"Each of the 3 rows has 4 squares: 4 · 3 = 12 squares."},
    {q:"A room is shaped like a rectangle, 6 m by 4 m. Find the room's perimeter.", ans:"20", hint:"P = 2 · (a + b).", sol:"P = 2 · (6 + 4) = 2 · 10 = 20 m."},
    {q:"For the same room (6 m by 4 m), find the floor area.", ans:"24", hint:"Multiply the length and width.", sol:"S = 6 · 4 = 24 m²."},
    {q:"How many sides does a quadrilateral have?", opts:["3","4","5","6"], ans:1, hint:"Count based on the shape's name.", sol:"A quadrilateral has 4 sides and 4 angles — that's clear from the name itself."},
    {q:"How many angles does a triangle have?", ans:"3", hint:"The shape's name gives you the answer.", sol:"A triangle has 3 sides and 3 angles."},
    {q:"A square's side equals 9 cm. Find its perimeter.", ans:"36", hint:"A square has 4 equal sides.", sol:"P = 4 · 9 = 36 cm."},
    {q:"Which is bigger: the area of a rectangle with sides 6 cm and 4 cm, or the area of a square with a side of 5 cm?", opts:["The rectangle's area is bigger","The square's area is bigger","The areas are equal"], ans:1, hint:"Calculate both areas and compare the numbers.", sol:"Rectangle's area: 6 · 4 = 24 cm². Square's area: 5 · 5 = 25 cm². 25 is bigger than 24, so the square's area is bigger."},
    {q:"A sheet of paper is shaped like a rectangle with sides 20 cm and 30 cm. Find the sheet's perimeter.", ans:"100", hint:"P = 2 · (a + b).", sol:"P = 2 · (20 + 30) = 2 · 50 = 100 cm."},
    {q:"For the same sheet of paper (20 cm and 30 cm), find its area.", ans:"600", hint:"Multiply the sheet's sides.", sol:"S = 20 · 30 = 600 cm²."}
  ],
  bonus: {q:"A rectangle's perimeter equals 26 cm, and one of its sides is 9 cm. Find this rectangle's area.", ans:"36", hint:"First find the other side using the perimeter, then calculate the area.", sol:"Sum of two adjacent sides: 26 : 2 = 13 cm. The other side: 13 − 9 = 4 cm. Area: S = 9 · 4 = 36 cm²."},
  test: [
    {q:"A rectangle's sides are 7 cm and 4 cm. Find its perimeter.", ans:"22", sol:"P = 2 · (7 + 4) = 2 · 11 = 22 cm."},
    {q:"For the same rectangle (7 cm and 4 cm), find the area.", ans:"28", sol:"S = 7 · 4 = 28 cm²."},
    {q:"A square's side equals 8 cm. Find the square's perimeter.", ans:"32", sol:"P = 4 · 8 = 32 cm."},
    {q:"Find the area of a square with a side of 8 cm.", ans:"64", sol:"S = 8 · 8 = 64 cm²."},
    {q:"A rectangle's perimeter equals 24 cm, and one side is 5 cm. Find the other side.", ans:"7", sol:"Sum of the sides: 24 : 2 = 12 cm. The other side: 12 − 5 = 7 cm."},
    {q:"A rectangle's area equals 42 cm², and one side is 6 cm. Find the other side.", ans:"7", sol:"The other side: 42 : 6 = 7 cm."},
    {q:"How many sides does a triangle have?", opts:["2","3","4","5"], ans:1, sol:"A triangle has 3 sides and 3 angles."},
    {q:"A rug is shaped like a rectangle with sides 5 m and 3 m. Find its area.", ans:"15", sol:"S = 5 · 3 = 15 m²."}
  ],
  lab: [
    {t:"Measure a textbook", b:"Take a ruler and measure the length and width of your textbook's cover (in centimeters, rounding to a whole number is fine). Calculate the cover's perimeter using the formula P = 2 · (a + b) and its area using S = a · b. Check the area by estimating in your head how many 1 cm squares would fit on the cover."},
    {t:"A rectangle on graph paper", b:"Draw a rectangle on graph paper that's 5 squares wide and 3 squares high. Calculate its perimeter in squares (add up all the sides) and its area by counting all the squares inside, row by row. Compare the result with calculating using the formulas P = 2 · (a + b) and S = a · b."},
    {t:"The table in your room", b:"Measure the length and width of your desk's tabletop with a tape measure or ruler. Find the perimeter of the table's edge and the area of the tabletop. Think and answer: do you need to know the perimeter or the area if you want to buy a tablecloth that will cover the whole table?"},
    {t:"Floor plan of a room", b:"With a tape measure (or ask an adult to help), measure the length and width of your room in meters. Calculate the room's perimeter (useful, for example, for finding the length of baseboard along the walls) and the floor area (useful for finding out how much linoleum or carpet you'll need)."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.geo3.examples[0].s += "<div class='figure'>__SVG_GEO3_EX0_RECT_PERIM__</div>";
CONTENT_EN.geo3.examples[1].s += "<div class='figure'>__SVG_GEO3_EX1_RECT_AREA__</div>";
CONTENT_EN.geo3.examples[2].s += "<div class='figure'>__SVG_GEO3_EX2_SQUARE_PERIM__</div>";
CONTENT_EN.geo3.examples[3].s += "<div class='figure'>__SVG_GEO3_EX3_SQUARE_AREA__</div>";
CONTENT_EN.geo3.examples[4].s += "<div class='figure'>__SVG_GEO3_EX4_FIND_SIDE_PERIM__</div>";
CONTENT_EN.geo3.examples[5].s += "<div class='figure'>__SVG_GEO3_EX5_FIND_SIDE_AREA__</div>";
CONTENT_EN.geo3.examples[6].s += "<div class='figure'>__SVG_GEO3_EX6_COMPARE__</div>";

CONTENT_EN.geo3.steps = [
  {title:"Borders and area of a shape", body:
    "<p>There are many flat shapes around us: a notebook page, a tabletop, a phone screen. Every shape has a border — you can trace it with your finger along the edge — and also a &ldquo;filling&rdquo; — the space inside the border. Today we'll learn to measure both.</p>"
    +"<div class='figure'>__SVG_GEO3_INTRO_BORDERFILL__</div>"},
  {title:"Triangles and quadrilaterals", body:
    "<h3>Triangles and quadrilaterals</h3><p>A polygon is a shape whose sides are straight segments, with an equal number of angles and sides. A <b>triangle</b> has 3 sides and 3 angles, a <b>quadrilateral</b> has 4 sides and 4 angles. Among quadrilaterals there are special ones: a <b>rectangle</b> has all 4 angles right angles (like the corner of a sheet of paper or the corner of an ordinary book — if you line up that corner with the shape's angle, they match exactly). A <b>square</b> also has all right angles, and in addition all 4 sides are equal to each other. So a square is really a special rectangle whose sides happen to be equal.</p><div class='note'><span class='hand'>Remember</span>A right angle is easy to check with the corner of an ordinary sheet of paper: if the corner fits exactly into the shape's angle, that angle is a right angle.</div>"
    +"<div class='figure'>__SVG_GEO3_SHAPES_GALLERY__</div>"},
  {title:"The perimeter of a polygon", body:
    "<h3>The perimeter of a polygon</h3><p><b>Perimeter</b> is the length of a shape's whole border, that is, the sum of the lengths of all its sides. If you trace the shape with a piece of string along the edge and then measure the string with a ruler, you get exactly the perimeter.</p>"
    +"<div class='figure'>__SVG_GEO3_PERIM_DEF__</div>"},
  {title:"The perimeter of a rectangle", body:
    "<p>In a rectangle, opposite sides are equal: one pair of sides equals <b>a</b>, the other equals <b>b</b>. To find the perimeter, you add up all 4 sides: a + b + a + b. That's the same as adding a and b once and then taking the result twice. So the formula for the perimeter of a rectangle is: <b>P = 2 · (a + b)</b>.</p>",
    exIdx:[0,4]},
  {title:"The perimeter of a square", body:
    "<p>In a square, all 4 sides are the same and equal a, so their sum is a taken 4 times: <b>P = 4 · a</b>. For example, if a square's side is 6 cm, the perimeter equals 6 + 6 + 6 + 6 = 24 cm, that is, 4 · 6 = 24 cm.</p><div class='warn'><span class='hand'>Common mistake</span>Adding only two sides of a rectangle instead of all four: writing P = a + b instead of P = 2 · (a + b). Don't forget that a rectangle has four sides, not two — opposite sides just repeat.</div>",
    exIdx:2},
  {title:"The area of a shape", body:
    "<h3>The area of a shape</h3><p><b>Area</b> shows how much space a shape takes up — how many identical little squares fit inside it. If you take a square with a side of 1 cm, its area is called a <b>square centimeter</b> and is written 1 cm².</p><p>Picture a squared grid where each square is one square centimeter. Let's draw a rectangle on it that's 4 squares wide and 3 squares high. If we count the squares row by row, each row has 4 squares, and there are 3 rows, so instead of counting every square one by one, it's easier to multiply: 4 · 3 = 12 squares, meaning the area of this rectangle is 12 cm².</p>",
    exIdx:1},
  {title:"The area formula", body:
    "<p>That gives the general formula: the area of a rectangle equals the product of its sides: <b>S = a · b</b>. And since a square's sides are both equal, its area is: <b>S = a · a</b>. For example, the area of a square with a side of 5 cm equals 5 · 5 = 25 cm².</p><div class='note'><span class='hand'>Remember</span>Perimeter is measured in ordinary units of length (cm, m), while area is measured in square units (cm², m²), because we're counting little squares, not segments.</div>",
    exIdx:[3,5]},
  {title:"Perimeter and area — don't mix them up", body:
    "<h3>Perimeter and area — don't mix them up!</h3><p>These are two different quantities, even for the same shape. Look at this example:</p><div class='figure'>__SVG_GEO3_PERIM_AREA_ANIM__</div>"},
  {title:"Common mistake: same perimeter doesn't mean same area", body:
    "<div class='warn'><span class='hand'>Common mistake</span>Thinking that shapes with the same perimeter must have the same area (or the other way around). That's not true! A rectangle 8 cm by 2 cm has a perimeter of 2 · (8 + 2) = 20 cm and an area of 8 · 2 = 16 cm². A square with a side of 4 cm has a perimeter of 4 · 4 = 16 cm and an area of 4 · 4 = 16 cm². The perimeters are different, but the areas matched — that's just a coincidence of numbers; you can't work out the area from the perimeter, or the other way around.</div>",
    exIdx:6}
];

})();
