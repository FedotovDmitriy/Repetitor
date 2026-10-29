/* ===================================================================
   English content for grade 4 (CONTENT_EN) — loaded on demand by
   ensureContentEn() in index.html when the interface language is
   English and a grade-4 topic is opened. Mirrors the structure of
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

CONTENT_EN.n4 = {
  goal: "After this topic you'll be able to read and write any number up to a billion, compare them, round them, break them down into place-value addends, and confidently add and subtract multi-digit numbers in column form.",
  explain: "<p>Multi-digit numbers are everywhere: a city has 1,250,000 people living in it, the Moon is about 384,000 km away, and a school library has 12,480 books. So numbers like these don't get mixed up, they're written following strict rules. Let's figure out how they work.</p>"
  + "<h3>Places and classes</h3>"
  + "<p>Each digit in a number's written form sits in its own <b>place</b>: ones, tens, hundreds. Each next place is 10 times the previous one: 10 ones make a ten, 10 tens make a hundred, 10 hundreds make a thousand. To make numbers easy to read, places are grouped into threes — <b>classes</b>. We count from right to left: the first class is the <b>ones class</b> (ones, tens, hundreds), the second is the <b>thousands class</b>, the third is the <b>millions class</b>, the fourth is the <b>billions class</b>.</p>"
  + "<div class='figure'>__SVG_N4_CLASSES__</div>"
  + "<p>A thousand thousands make a million: 1,000,000. A thousand millions make a billion: 1,000,000,000. A comma is placed between classes when writing a number: 208,054,730.</p>"
  + "<h3>How to read and write numbers</h3>"
  + "<p>We read left to right: each class is read as an ordinary three-digit number, with the class name added. We don't say the name &ldquo;ones.&rdquo; The number 40,305,007: millions class — 40, thousands class — 305, ones class — 007. We read it: &ldquo;forty million three hundred five thousand seven.&rdquo; If a class is all zeros, we simply skip it: 5,000,302 is read &ldquo;five million three hundred two.&rdquo;</p>"
  + "<p>We write it the other way round: listen to the number by classes and write each class with three digits (except the leftmost one). &ldquo;One hundred five thousand twelve&rdquo; is 105 thousand and 012 ones: 105,012.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Skipping zeros. &ldquo;One hundred five thousand&rdquo; can't be written as 15,000 — the digit 0 holds the ten-thousands place. Correct: 105,000. If a place isn't named, write 0 in its place.</div>"
  + "<h3>Place-value addends and &ldquo;how many in total&rdquo;</h3>"
  + "<p>A number can be broken down into a sum of place-value addends — one addend for each digit that isn't zero: 5,302,407 = 5,000,000 + 300,000 + 2,000 + 400 + 7. A place holding 0 isn't written into the sum.</p>"
  + "<p>A common question: how many hundreds (or thousands) in total are in a number? To find out, cover up the digits to the right of the place you need. In the number 74,300 there are 74 thousand in total and 743 hundred in total, because 74,300 = 743 · 100. But the &ldquo;hundreds digit&rdquo; in it is only one digit, 3.</p>"
  + "<h3>Comparing numbers and neighbors</h3>"
  + "<p>We compare numbers by place: first by whoever has more digits, and if equal, we compare digits left to right until we find the first difference. Watch how this works:<div class='figure'>__SVG_N4_COMPARE_ANIM__</div></p>"
  + "<p>Neighbor numbers differ by 1. The next number is 1 more, the previous is 1 less. The neighbors of 300,000 are 299,999 and 300,001. The largest five-digit number is 99,999, the smallest six-digit number is 100,000.</p>"
  + "<h3>Column addition and subtraction</h3>"
  + "<p>We write numbers so that each place lines up under the matching place. If a place's sum comes to 10 or more, we &ldquo;carry&rdquo; the ten into the next place. Watch how this works:</p>"
  + "<div class='figure'>__SVG_N4_ADD_ANIM__</div>"
  + "<p>We subtract right to left too. If the top digit is smaller, we &ldquo;borrow&rdquo; a unit from the neighboring higher place. Be especially careful when that place holds zeros. Let's find 7,003 − 2,458. Ones: 3 is less than 8, and there are no tens or hundreds — borrow from the thousands: 7 thousand → 6 thousand, the hundreds become 9, the tens become 9, and the ones become 13. Now 13 − 8 = 5, 9 − 5 = 4, 9 − 4 = 5, 6 − 2 = 4. Answer: 4,545. Check by adding: 4,545 + 2,458 = 7,003.</p>"
  + "<div class='note'><span class='hand'>Remember</span>The check for addition is subtraction, and the check for subtraction is addition: if 7,003 − 2,458 = 4,545, then 4,545 + 2,458 should give 7,003 again.</div>"
  + "<h3>Rounding</h3>"
  + "<p>Sometimes the exact number isn't needed: &ldquo;about 48 thousand spectators in the arena.&rdquo; Then the number is rounded — replaced with a nearby &ldquo;round&rdquo; number. To round to a given place, we look at the digit just to the <b>right</b> of it. If it's 0, 1, 2, 3, or 4, the digit in the place being rounded stays the same; if it's 5, 6, 7, 8, or 9, it increases by 1. All digits to the right are replaced with zeros. We write the sign ≈ (&ldquo;approximately equal to&rdquo;).</p>"
  + "<div class='figure'>__SVG_N4_ROUND__</div>"
  + "<p>47,385 ≈ 47,000 (the hundreds digit 3 is less than 5), while 47,685 ≈ 48,000 (the hundreds digit 6 isn't less than 5). The same number to the nearest hundred: 47,385 ≈ 47,400, because the tens digit is 8.</p>"
  + "<div class='note'><span class='hand'>Remember</span>A number exactly halfway between two round numbers rounds up: 47,500 ≈ 48,000. And 49,800 to the nearest thousand becomes 50,000: 1 was added to 49, giving 50.</div>",
  examples: [
    {t:"Write the number &ldquo;five million three hundred two thousand seven&rdquo; in digits.", s:"We break it into classes. Millions: 5. Thousands: &ldquo;three hundred two&rdquo; — 302. Ones: &ldquo;seven&rdquo; — written as three digits, 007. We get 5,302,007. The tens and hundreds of the ones place are empty, so they're zeros."},
    {t:"Read the number 40,305,007 and write it as a sum of place-value addends.", s:"Classes: 40, 305 and 007. We read it: &ldquo;forty million three hundred five thousand seven.&rdquo; Addends (skipping zero places): 40,000,000 + 300,000 + 5,000 + 7."},
    {t:"Compare the numbers 6,205,371 and 6,250,137.", s:"Equal number of digits (7 each). Compare left to right: 6 = 6, 2 = 2, and in the ten-thousands place: 0 and 5. Since 0 is less than 5, the first number is smaller: 6,205,371 < 6,250,137."},
    {t:"Find the sum 48,764 + 35,693 in column form.", s:"Ones: 4 + 3 = 7. Tens: 6 + 9 = 15, write 5, carry 1. Hundreds: 7 + 6 + 1 = 14, write 4, carry 1. Thousands: 8 + 5 + 1 = 14, write 4, carry 1. Ten-thousands: 4 + 3 + 1 = 8. Answer: 84,457."},
    {t:"Find the difference 50,302 − 18,745 and check by adding.", s:"Ones: 2 < 5, there are no tens, borrow from the hundreds: hundreds 3 → 2, the tens become 9, the ones become 12. 12 − 5 = 7; 9 − 4 = 5. Hundreds: 2 < 7, borrow from the thousands, but there's a 0 there, so we borrow from the ten-thousands: 5 → 4, the thousands become 9, the hundreds become 12. 12 − 7 = 5; 9 − 8 = 1; 4 − 1 = 3. We get 31,557. Check: 31,557 + 18,745 = 50,302, correct."},
    {t:"Round the number 47,385 to the nearest thousand and to the nearest hundred.", s:"To the nearest thousand: the hundreds digit 3 is less than 5, so the thousands stay the same, the rest become zeros: 47,385 ≈ 47,000. To the nearest hundred: look at the tens digit 8, it's greater than 5, so the hundreds increase by 1: 47,385 ≈ 47,400."},
    {t:"Find the neighbors of the number 1,000,000 and say how many tens in total are in the number 3,470.", s:"The previous number is 1 less: 999,999, the next is 1 more: 1,000,001. There are 347 tens in total in 3,470, because 3,470 : 10 = 347."}
  ],
  tasks: [
    {q:"How many digits are in the written form of the number &ldquo;eight hundred three thousand twelve&rdquo;?", ans:"6", hint:"Write the number by classes: thousands and ones. Write the ones with three digits.", sol:"Thousands class: 803, ones class: 012. The number 803,012 has six digits."},
    {q:"Write the number in digits: five million three hundred two thousand seven.", ans:"5302007", hint:"Millions class — 5, thousands class — 302, ones class — 007.", sol:"Classes: 5, 302, and 007 → 5,302,007."},
    {q:"Which digit is in the hundred-thousands place in the number 3,482,615?", ans:"4", hint:"Split the number into classes: 3, 482, and 615. Hundred-thousands is the highest place in the thousands class.", sol:"Thousands class — 482: hundred-thousands 4, ten-thousands 8, thousands 2. Answer: 4."},
    {q:"Which of these numbers is the largest?", opts:["89,999","90,001","9,999","90,000"], ans:1, hint:"Fewer digits means a smaller number. Among the five-digit numbers, compare left to right.", sol:"9,999 has four digits, so it's the smallest. Among the five-digit numbers, 90,001 is greater than both 90,000 and 89,999."},
    {q:"Find the number that comes right after 599,999.", ans:"600000", hint:"The next number is 1 more.", sol:"599,999 + 1 = 600,000."},
    {q:"Find the sum: 47,385 + 28,749.", ans:"76134", hint:"Write place under place and don't forget the carries.", sol:"Ones 5 + 9 = 14, write 4, carry 1. Tens 8 + 4 + 1 = 13, write 3, carry 1. Hundreds 3 + 7 + 1 = 11, write 1, carry 1. Thousands 7 + 8 + 1 = 16, write 6, carry 1. Ten-thousands 4 + 2 + 1 = 7. Answer: 76,134."},
    {q:"Find the difference: 70,000 − 34,568.", ans:"35432", hint:"There are lots of zeros at the top — borrow in a chain. Check the answer by adding.", sol:"70,000 − 34,568 = 35,432. Check: 35,432 + 34,568 = 70,000."},
    {q:"Round the number 68,472 to the nearest thousand.", ans:"68000", hint:"Look at the hundreds digit.", sol:"The hundreds digit 4 is less than 5, so the thousands stay the same: 68,472 ≈ 68,000."},
    {q:"Write the number that equals the sum 3,000,000 + 40,000 + 500 + 7.", ans:"3040507", hint:"Put each addend in its place, fill empty places with zeros.", sol:"3 million, 4 ten-thousands, 5 hundreds, 7 ones. The hundred-thousands, thousands, and tens places are empty — zeros: 3,040,507."},
    {q:"How many thousands in total are in the number 5,842,000?", ans:"5842", hint:"How many times does 1,000 fit into the number?", sol:"5,842,000 : 1,000 = 5,842."},
    {q:"How many hundreds in total are in the number 74,300?", ans:"743", hint:"Cut off the last two digits.", sol:"74,300 : 100 = 743."},
    {q:"A number consists of 2 units of the millions class, 15 units of the thousands class, and 8 units of the ones class. Write this number.", ans:"2015008", hint:"Write the thousands class with three digits: 15 thousand is 015.", sol:"Millions 2, thousands 015, ones 008: 2,015,008."},
    {q:"Round the number 1,596,274 to the nearest hundred thousand.", ans:"1600000", hint:"Look at the ten-thousands digit — it's right next to the hundred-thousands place.", sol:"The hundred-thousands digit is 5, and the digit to its right is 9 (ten-thousands), so we increase 5 by 1: it becomes 6. 1,596,274 ≈ 1,600,000."},
    {q:"The number 249,500 was rounded to the nearest thousand. What number did you get?", opts:["249,000","250,000","249,500","240,000"], ans:1, hint:"Look at the hundreds digit: if it's 5 or more, the number increases.", sol:"The hundreds digit is 5, so we increase 249 thousand by 1: 250 thousand. We get 250,000."},
    {q:"A store took in 128,450 rubles on Monday, and 36,780 rubles less on Tuesday. How many rubles did the store take in over both days?", ans:"220120", hint:"First find Tuesday's earnings.", sol:"Tuesday: 128,450 − 36,780 = 91,670 rubles. Total: 128,450 + 91,670 = 220,120 rubles."},
    {q:"Find the smallest six-digit number in which all the digits are different.", ans:"102345", hint:"The first digit can't be 0, but the rest can be the smallest ones remaining.", sol:"The first digit is 1 (the smallest, not zero). Then the smallest of the rest: 0, 2, 3, 4, 5. We get 102,345."},
    {q:"How many natural numbers lie between 99,998 and 100,003?", ans:"4", hint:"List all the numbers in order, starting from 99,999.", sol:"Between them: 99,999, 100,000, 100,001, 100,002. That's 4 numbers in total."},
    {q:"Find the sum of the largest five-digit number and the smallest four-digit number.", ans:"100999", hint:"The largest five-digit number is written with five nines.", sol:"99,999 + 1,000 = 100,999."},
    {q:"Find the difference between the smallest seven-digit number and the largest five-digit number.", ans:"900001", hint:"The smallest seven-digit number is a million.", sol:"1,000,000 − 99,999 = 900,001. Check: 900,001 + 99,999 = 1,000,000."},
    {q:"A number was rounded to the nearest thousand and gave 83,000. What is the largest natural number that could round this way?", ans:"83499", hint:"At what hundreds digit does the number still round down?", sol:"The number 83,499 rounds down to 83,000 (hundreds digit 4). But 83,500 already rounds up to 84,000. So the largest number is 83,499."},
    {q:"Write the number in digits: eight million fifty thousand sixteen.", ans:"8050016", hint:"Split the number into classes: millions, thousands, ones. Write the ones class with three digits.", sol:"Millions class: 8. Thousands class: 050. Ones class: 016. We get 8,050,016."},
    {q:"By how much is the number 3,087,214 greater than 3,078,999?", ans:"8215", hint:"Find the difference of the two numbers by subtracting in column form.", sol:"3,087,214 − 3,078,999 = 8,215. Check: 8,215 + 3,078,999 = 3,087,214."},
    {q:"Find the sum: 583,749 + 267,458.", ans:"851207", hint:"Add place under place, don't forget the carries.", sol:"Ones 9 + 8 = 17, write 7, carry 1. Tens 4 + 5 + 1 = 10, write 0, carry 1. Hundreds 7 + 4 + 1 = 12, write 2, carry 1. Thousands 3 + 7 + 1 = 11, write 1, carry 1. Ten-thousands 8 + 6 + 1 = 15, write 5, carry 1. Hundred-thousands 5 + 2 + 1 = 8. Answer: 851,207."},
    {q:"Round the number 2,364,500 to the nearest hundred thousand.", ans:"2400000", hint:"Look at the ten-thousands digit — it's right after the hundred-thousands place.", sol:"The hundred-thousands place has the digit 3. The ten-thousands digit is 6 (greater than 5), so we increase the 3 by 1: we get 2,400,000."},
    {q:"Misha wrote the number &ldquo;two million forty thousand three hundred&rdquo; in digits like this: 2,400,300. He made a mistake. Write this number correctly.", ans:"2040300", hint:"Split the number into classes: millions, thousands, ones. Write each class except the leftmost with three digits.", sol:"Millions class: 2. Thousands class: forty is 040. Ones class: three hundred is 300. Correct: 2,040,300. Misha lost a zero in the thousands class. Answer: 2,040,300."},
    {q:"A city's population was rounded to the nearest ten thousand and gave 350,000. What is the smallest the population could have been?", ans:"345000", hint:"Rounding to the nearest ten thousand rounds up if the thousands digit is 5 or more.", sol:"Numbers from 345,000 round up to 350,000 (thousands digit 5). The number 344,999 would round down to 340,000. Answer: 345,000."},
    {q:"A family is saving up for an apartment that costs 7,850,000 rubles. They've already saved 4,965,000 rubles. How many more rubles are needed?", ans:"2885000", hint:"Subtract what's already saved from the apartment's cost. Subtract in column form and check by adding.", sol:"7,850,000 − 4,965,000 = 2,885,000. Check: 2,885,000 + 4,965,000 = 7,850,000. Answer: 2,885,000."},
    {q:"From the digits 0, 3, 5, 7, 8, 9 (each used exactly once), the largest and smallest six-digit numbers were made. Find their difference.", ans:"681741", hint:"For the largest, arrange the digits in decreasing order. For the smallest, in increasing order, but 0 can't go first.", sol:"Largest: 987,530. Smallest: put 3 first, then 0, 5, 7, 8, 9 — that's 305,789. Difference: 987,530 − 305,789 = 681,741. Answer: 681,741."},
    {q:"A chosen number was increased by 30,000 and gave 1,004,500. What number was chosen?", ans:"974500", hint:"To find the chosen number, do the inverse operation.", sol:"1,004,500 − 30,000 = 974,500. Check: 974,500 + 30,000 = 1,004,500. Answer: 974,500."},
    {q:"In 5□8,214, one digit needs to go in place of □ so that the number is bigger than 578,000. How many digits work for this?", ans:"3", hint:"Compare the numbers place by place from left to right: the first digits match, so everything depends on the ten-thousands digit.", sol:"The number 5□8,214 has six digits, same as 578,000. The hundred-thousands digits match (5). If □ = 7, then 578,214 is bigger than 578,000 — that works. The digits 8 and 9 also work, but 6 and below don't. 7, 8, 9 work. Answer: 3."},
    {q:"A factory made 125,400 bicycles in January, 18,650 more than January in February, and 42,300 fewer than February in March. How many bicycles did the factory make over the three months?", ans:"371200", hint:"First find February's output, then March's, then add all three numbers.", sol:"February: 125,400 + 18,650 = 144,050. March: 144,050 − 42,300 = 101,750. Total: 125,400 + 144,050 + 101,750 = 371,200. Answer: 371,200."},
    {q:"Write the number equal to 60,000,000 + 400,000 + 3,000 + 20 in digits. How many zeros does it have? Write only the number of zeros as your answer.", ans:"4", hint:"Put each addend in its own place, and fill the empty places with zeros.", sol:"6 ten-millions, 4 hundred-thousands, 3 thousands, 2 tens: 60,403,020. The zeros are in the millions, ten-thousands, hundreds, and ones places. Answer: 4."}
  ],
  bonus: {q:"How many digits in total are needed to write out all the numbers from 1 to 100 in a row (1, 2, 3, …, 100)?", ans:"192", hint:"Count the one-digit, two-digit, and three-digit numbers separately.", sol:"There are 9 one-digit numbers — 9 digits. There are 90 two-digit numbers (from 10 to 99) — 90 · 2 = 180 digits. The number 100 — 3 digits. Total: 9 + 180 + 3 = 192."},
  test: [
    {q:"Write the number in digits: forty thousand three hundred five.", ans:"40305", sol:"Thousands class — 40, ones class — 305 (three hundreds, no tens, five ones). The number 40,305."},
    {q:"Which digit is in the ten-thousands place in the number 720,486?", ans:"2", sol:"Thousands class — 720: hundred-thousands 7, ten-thousands 2, thousands 0. Answer: 2."},
    {q:"Find the sum: 36,482 + 27,959.", ans:"64441", sol:"Ones 2 + 9 = 11 (1, carry 1). Tens 8 + 5 + 1 = 14 (4, carry 1). Hundreds 4 + 9 + 1 = 14 (4, carry 1). Thousands 6 + 7 + 1 = 14 (4, carry 1). Ten-thousands 3 + 2 + 1 = 6. Answer: 64,441."},
    {q:"Find the difference: 100,000 − 46,275.", ans:"53725", sol:"100,000 − 46,275 = 53,725. Check: 53,725 + 46,275 = 100,000."},
    {q:"Round the number 385,640 to the nearest ten thousand.", ans:"390000", sol:"Ten-thousands digit is 8, the digit to its right is the thousands digit 5. Since 5 isn't less than 5, we increase the 8: 9. We get 390,000."},
    {q:"Which number is the largest?", opts:["4,950,000","4,905,000","4,590,000","4,950"], ans:0, sol:"4,950 has four digits, so it's the smallest. The rest have 7 digits, with 4 in the highest place; compare hundred-thousands: 9, 9, 5. Comparing 4,950,000 and 4,905,000, we compare ten-thousands: 5 is greater than 0. Answer: 4,950,000."},
    {q:"How many hundreds in total are in the number 26,400?", ans:"264", sol:"26,400 : 100 = 264."},
    {q:"Find the number that is 1 less than 7,000,000.", ans:"6999999", sol:"7,000,000 − 1 = 6,999,999."}
  ],
  lab: [
    {t:"Numbers in life", b:"Find online or in an encyclopedia the population of your city, your country, and the world. Write each number in digits by classes (with spaces or commas), then read it aloud. Figure out which class it ends in, and round your city's population to the nearest thousand, and your country's to the nearest million."},
    {t:"The &ldquo;Digit Cards&rdquo; game", b:"Cut out ten cards with the digits 0 through 9. Draw 6 cards at random and arrange them into the largest and the smallest six-digit number you can (remember 0 can't go first). Read both numbers aloud and find their difference in column form. Check the answer by adding. Repeat 3 times."},
    {t:"Estimating from a receipt", b:"Take a store receipt and round each price to the nearest ten. Add the rounded prices in your head to get an estimate. Then add the exact prices in column form. How far off is your estimate from the exact total? You can also estimate ahead of time whether you have enough money for a purchase."},
    {t:"Speedometer and odometer", b:"In your parents' car, look at the odometer reading (the mileage) — it's usually a five- or six-digit number. Write it by classes and read it aloud. A week later, look again and find the difference in column form: how many kilometers did the car travel in that time?"}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.n4.examples[0].s += "<div class='figure'>__SVG_N4_EX0_CLASSES5302007__</div>";
CONTENT_EN.n4.examples[1].s += "<div class='figure'>__SVG_N4_EX1_SUM40305007__</div>";
CONTENT_EN.n4.examples[2].s += "<div class='figure'>__SVG_N4_EX2_COMPARE7__</div>";
CONTENT_EN.n4.examples[3].s += "<div class='figure'>__SVG_N4_EX3_COLSUM__</div>";
CONTENT_EN.n4.examples[4].s += "<div class='figure'>__SVG_N4_EX4_COLSUB__</div>";
CONTENT_EN.n4.examples[5].s += "<div class='figure'>__SVG_N4_EX5_ROUND47385__</div>";
CONTENT_EN.n4.examples[6].s += "<div class='figure'>__SVG_N4_EX6_NEIGHBORSTENS__</div>";

CONTENT_EN.n4.steps = [
  {title:"Places and classes", body:
    "<p>Multi-digit numbers are everywhere: a city has 1,250,000 people living in it, the Moon is about 384,000 km away, and a school library has 12,480 books. So numbers like these don't get mixed up, they're written following strict rules. Let's figure out how they work.</p>"
    +"<h3>Places and classes</h3><p>Each digit in a number's written form sits in its own <b>place</b>: ones, tens, hundreds. Each next place is 10 times the previous one: 10 ones make a ten, 10 tens make a hundred, 10 hundreds make a thousand. To make numbers easy to read, places are grouped into threes — <b>classes</b>. We count from right to left: the first class is the <b>ones class</b> (ones, tens, hundreds), the second is the <b>thousands class</b>, the third is the <b>millions class</b>, the fourth is the <b>billions class</b>.</p>"
    +"<div class='figure'>__SVG_N4_CLASSES__</div>"
    +"<p>A thousand thousands make a million: 1,000,000. A thousand millions make a billion: 1,000,000,000. A comma is placed between classes when writing a number: 208,054,730.</p>"},
  {title:"How to read numbers by classes", body:
    "<h3>How to read and write numbers</h3><p>We read left to right: each class is read as an ordinary three-digit number, with the class name added. We don't say the name &ldquo;ones.&rdquo; The number 40,305,007: millions class — 40, thousands class — 305, ones class — 007. We read it: &ldquo;forty million three hundred five thousand seven.&rdquo; If a class is all zeros, we simply skip it: 5,000,302 is read &ldquo;five million three hundred two.&rdquo;</p>",
    exIdx:1},
  {title:"How to write numbers by classes", body:
    "<p>We write it the other way round: listen to the number by classes and write each class with three digits (except the leftmost one). &ldquo;One hundred five thousand twelve&rdquo; is 105 thousand and 012 ones: 105,012.</p><div class='warn'><span class='hand'>Common mistake</span>Skipping zeros. &ldquo;One hundred five thousand&rdquo; can't be written as 15,000 — the digit 0 holds the ten-thousands place. Correct: 105,000. If a place isn't named, write 0 in its place.</div>",
    exIdx:0},
  {title:"Place-value addends and &ldquo;how many in total&rdquo;", body:
    "<h3>Place-value addends and &ldquo;how many in total&rdquo;</h3><p>A number can be broken down into a sum of place-value addends — one addend for each digit that isn't zero: 5,302,407 = 5,000,000 + 300,000 + 2,000 + 400 + 7. A place holding 0 isn't written into the sum.</p>"
    +"<p>A common question: how many hundreds (or thousands) in total are in a number? To find out, cover up the digits to the right of the place you need. In the number 74,300 there are 74 thousand in total and 743 hundred in total, because 74,300 = 743 · 100. But the &ldquo;hundreds digit&rdquo; in it is only one digit, 3.</p>",
    exIdx:6},
  {title:"Comparing numbers and neighbors", body:
    "<h3>Comparing numbers and neighbors</h3><p>We compare numbers by place: first by whoever has more digits, and if equal, we compare digits left to right until we find the first difference. Watch how this works:<div class='figure'>__SVG_N4_COMPARE_ANIM__</div></p>"
    +"<p>Neighbor numbers differ by 1. The next number is 1 more, the previous is 1 less. The neighbors of 300,000 are 299,999 and 300,001. The largest five-digit number is 99,999, the smallest six-digit number is 100,000.</p>",
    exIdx:2},
  {title:"Column addition", body:
    "<h3>Column addition and subtraction</h3><p>We write numbers so that each place lines up under the matching place. If a place's sum comes to 10 or more, we &ldquo;carry&rdquo; the ten into the next place. Watch how this works:</p><div class='figure'>__SVG_N4_ADD_ANIM__</div>",
    exIdx:3},
  {title:"Column subtraction with borrowing through zeros", body:
    "<p>We subtract right to left too. If the top digit is smaller, we &ldquo;borrow&rdquo; a unit from the neighboring higher place. Be especially careful when that place holds zeros. Let's find 7,003 − 2,458. Ones: 3 is less than 8, and there are no tens or hundreds — borrow from the thousands: 7 thousand → 6 thousand, the hundreds become 9, the tens become 9, and the ones become 13. Now 13 − 8 = 5, 9 − 5 = 4, 9 − 4 = 5, 6 − 2 = 4. Answer: 4,545. Check by adding: 4,545 + 2,458 = 7,003.</p><div class='note'><span class='hand'>Remember</span>The check for addition is subtraction, and the check for subtraction is addition: if 7,003 − 2,458 = 4,545, then 4,545 + 2,458 should give 7,003 again.</div>",
    exIdx:4},
  {title:"Rounding", body:
    "<h3>Rounding</h3><p>Sometimes the exact number isn't needed: &ldquo;about 48 thousand spectators in the arena.&rdquo; Then the number is rounded — replaced with a nearby &ldquo;round&rdquo; number. To round to a given place, we look at the digit just to the <b>right</b> of it. If it's 0, 1, 2, 3, or 4, the digit in the place being rounded stays the same; if it's 5, 6, 7, 8, or 9, it increases by 1. All digits to the right are replaced with zeros. We write the sign ≈ (&ldquo;approximately equal to&rdquo;).</p>"
    +"<div class='figure'>__SVG_N4_ROUND__</div>"
    +"<p>47,385 ≈ 47,000 (the hundreds digit 3 is less than 5), while 47,685 ≈ 48,000 (the hundreds digit 6 isn't less than 5). The same number to the nearest hundred: 47,385 ≈ 47,400, because the tens digit is 8.</p><div class='note'><span class='hand'>Remember</span>A number exactly halfway between two round numbers rounds up: 47,500 ≈ 48,000. And 49,800 to the nearest thousand becomes 50,000: 1 was added to 49, giving 50.</div>",
    exIdx:5}
];

CONTENT_EN.mul4 = {
  goal: "After this topic you'll be able to multiply multi-digit numbers by one-digit and two-digit numbers in column form, divide them using long division (including with a remainder and with zeros in the quotient), and check yourself with the inverse operation.",
  explain: "<p>You already know how to add and subtract big numbers. Now let's learn to multiply and divide them in writing — the way it's done at school, working in column form and long division. The main thing is to work step by step and not rush.</p>"
  + "<h3>Multiplying by a one-digit number</h3>"
  + "<p>3,128 · 4 = 12,512 — watch how this is worked out in the animation below:<div class='figure'>__SVG_MUL4_SINGLE_ANIM__</div></p>"
  + "<h3>Multiplying by a two-digit number</h3>"
  + "<p>A two-digit factor is ones plus tens: 36 = 6 + 30. So we multiply the number by each part separately and add the results. First by the ones (by 6), getting the first partial product. Then by the tens (by 3 tens) — and we write the second partial product <b>shifted one place to the left</b>: we put a zero under the ones (or you can just leave that spot blank). Then we add them.</p>"
  + "<div class='figure'>__SVG_MUL4_COLUMN__</div>"
  + "<p>Look at the picture: 274 · 6 = 1,644, 274 · 30 = 8,220, sum 1,644 + 8,220 = 9,864.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Forgetting the shift: the second partial product is written directly under the first, instead of one place to the left. Then the answer comes out several times smaller than it should be. Check yourself with an estimate: 274 · 36 is about 300 · 40 = 12,000, not 3,000.</div>"
  + "<h3>Zeros and the properties of multiplication</h3>"
  + "<p>When the factors end in zeros, multiply the numbers without the zeros, then tack all the dropped zeros back on. Take 350 · 40: 350 has one zero, 40 also has one — two in total. We work out 35 · 4 = 140 and tack on two zeros: 14,000.</p>"
  + "<p>Properties help you calculate conveniently. Commutative: a · b = b · a. Associative: (a · b) · c = a · (b · c). For example, 25 · 48 = 25 · 4 · 12 = 100 · 12 = 1,200. Distributive: 7 · 104 = 7 · 100 + 7 · 4 = 728.</p>"
  + "<h3>Long division by a one-digit number</h3>"
  + "<p>We write the dividend, with the &ldquo;corner&rdquo; and the divisor to the right. We take the first digit of the dividend; if it's smaller than the divisor, we take the first two digits. This is the first partial dividend: we divide it, write the digit in the quotient, multiply it by the divisor, subtract, &ldquo;bring down&rdquo; the next digit — and divide again. We repeat this until we've brought down all the digits. The number of digits in the quotient is determined by how many times we divided.</p>"
  + "<div class='figure'>__SVG_MUL4_LONGDIV_ANIM__</div>"
  + "<p>3,618 : 6 = 603 — watch how this is worked out in the animation above.</p>"
  + "<div class='note'><span class='hand'>Remember</span>Whenever the digit brought down forms a number smaller than the divisor, we write 0 in the quotient and bring down the next digit. Zeros in the quotient can't be skipped: 603 and 63 are different numbers!</div>"
  + "<h3>Division with a remainder and checking</h3>"
  + "<p>Division doesn't always come out even. At the end there may be a <b>remainder</b> left — a number that can no longer be divided by the divisor. The remainder is always <b>less than the divisor</b>. For example, 1,000 : 7: 7 · 142 = 994, remainder 1,000 − 994 = 6. We write 1,000 : 7 = 142 (rem. 6). Check: <b>divisor · quotient + remainder = dividend</b>: 7 · 142 + 6 = 1,000.</p>"
  + "<p>Checking by multiplication also works for division with no remainder: if 3,618 : 6 = 603, then 603 · 6 should give 3,618.</p>"
  + "<h3>Dividing by a two-digit number</h3>"
  + "<p>The hard part here is finding the quotient's digit. Trial and error helps: multiply the divisor by 1, 2, 3, … and look for the largest product that doesn't exceed the partial dividend. You can round the divisor: 24 ≈ 20, and 93 : 20 is about 4, but let's try more precisely.</p>"
  + "<div class='figure'>__SVG_MUL4_LONGDIV2__</div>"
  + "<p>936 : 24. The first partial dividend is 93. 24 · 3 = 72, while 24 · 4 = 96 — already more than 93, so the digit is 3. Subtract: 93 − 72 = 21. Bring down 6: 216. 24 · 9 = 216, so the next digit is 9. Quotient 39, remainder 0.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>If after subtracting the remainder comes out equal to or greater than the divisor, the quotient digit was taken too small — take it 1 bigger. And if the product is bigger than the partial dividend, the digit is too big — take it 1 smaller.</div>",
  examples: [
    {t:"Find 3,128 · 4 in column form.", s:"8 · 4 = 32, write 2, carry 3. 2 · 4 = 8, 8 + 3 = 11, write 1, carry 1. 1 · 4 = 4, 4 + 1 = 5. 3 · 4 = 12. We get 12,512. Estimate: 3,000 · 4 = 12,000 — close."},
    {t:"Find 274 · 36 in column form.", s:"By the ones: 274 · 6 = 1,644. By the tens: 274 · 3 = 822, written shifted one place to the left — that's 8,220. Add them: 1,644 + 8,220 = 9,864. Checking by estimate: 300 · 40 = 12,000, the answer is in the ten-thousands range — plausible."},
    {t:"Find 350 · 40 and 25 · 48 the convenient way.", s:"350 · 40: multiply without the zeros 35 · 4 = 140 and tack on two zeros (one from each factor): 14,000. 25 · 48: break down 48 = 4 · 12. Then 25 · 4 · 12 = 100 · 12 = 1,200."},
    {t:"Divide 8,124 : 4 using long division.", s:"First partial dividend 8: 8 : 4 = 2. Bring down 1: 1 is less than 4, write 0 in the quotient. Bring down 2: 12 : 4 = 3. Bring down 4: 4 : 4 = 1. Quotient 2,031. Check: 2,031 · 4 = 8,124."},
    {t:"Divide 7,452 : 6.", s:"First partial dividend 7: 7 : 6 = 1, remainder 1. Bring down 4: 14 : 6 = 2, remainder 2. Bring down 5: 25 : 6 = 4, remainder 1. Bring down 2: 12 : 6 = 2. Quotient 1,242. Check: 1,242 · 6 = 7,452."},
    {t:"Divide with a remainder: 1,000 : 7.", s:"10 : 7 = 1, remainder 3. Bring down 0: 30 : 7 = 4, remainder 2. Bring down 0: 20 : 7 = 2, remainder 6. Quotient 142, remainder 6. Check: 7 · 142 + 6 = 994 + 6 = 1,000."},
    {t:"Divide 5,796 : 12.", s:"First partial dividend 57. 12 · 4 = 48 (12 · 5 = 60, that's more than 57), write 4, remainder 57 − 48 = 9. Bring down 9: 99. 12 · 8 = 96, remainder 3. Bring down 6: 36. 12 · 3 = 36, remainder 0. Quotient 483. Check: 483 · 12 = 5,796."}
  ],
  tasks: [
    {q:"Find the value of the expression: 2,314 · 3.", ans:"6942", hint:"Multiply each digit by 3, starting with the ones, and keep track of carries.", sol:"4 · 3 = 12, write 2, carry 1. 1 · 3 = 3, plus 1 — 4. 3 · 3 = 9. 2 · 3 = 6. Answer: 6,942."},
    {q:"Find the value of the expression: 1,507 · 6.", ans:"9042", hint:"Zero in the hundreds place: 0 · 6 = 0, but the carry is added to it.", sol:"7 · 6 = 42, write 2, carry 4. 0 · 6 = 0, plus 4 — 4. 5 · 6 = 30, write 0, carry 3. 1 · 6 = 6, plus 3 — 9. Answer: 9,042."},
    {q:"Find the value of the expression: 5,400 : 9.", ans:"600", hint:"Divide 54 by 9 and think about how many zeros are left.", sol:"54 : 9 = 6, and there are two more zeros in the dividend, so 5,400 : 9 = 600. Check: 600 · 9 = 5,400."},
    {q:"How many digits are in the quotient 4,536 : 6?", opts:["2","3","4","5"], ans:1, hint:"The first partial dividend is 45, and after it we bring down two more digits.", sol:"4,536 : 6 = 756. The number 756 has three digits. (First partial dividend 45, then we bring down 3 and 6: three divisions in total.)"},
    {q:"Divide: 3,486 : 6.", ans:"581", hint:"The first partial dividend is 34 (34 : 6 = 5, remainder 4).", sol:"34 : 6 = 5, remainder 4. Bring down 8: 48 : 6 = 8, remainder 0. Bring down 6: 6 : 6 = 1. Quotient 581. Check: 581 · 6 = 3,486."},
    {q:"Find the value of the expression: 428 · 35.", ans:"14980", hint:"Multiply by 5, then by 3 tens, and write it shifted.", sol:"428 · 5 = 2,140. 428 · 30 = 12,840. Sum: 2,140 + 12,840 = 14,980."},
    {q:"Divide: 6,305 : 5.", ans:"1261", hint:"The first partial dividend is 6, then bring down one digit at a time.", sol:"6 : 5 = 1, remainder 1. Bring down 3: 13 : 5 = 2, remainder 3. Bring down 0: 30 : 5 = 6. Bring down 5: 5 : 5 = 1. Quotient 1,261. Check: 1,261 · 5 = 6,305."},
    {q:"Divide: 8,016 : 8.", ans:"1002", hint:"Don't skip zeros in the quotient: when the digit brought down is smaller than the divisor, write 0.", sol:"8 : 8 = 1. Bring down 0: 0 : 8 = 0. Bring down 1: 1 is less than 8, write 0. Bring down 6: 16 : 8 = 2. Quotient 1,002. Check: 1,002 · 8 = 8,016."},
    {q:"Divide: 7,296 : 24.", ans:"304", hint:"The first partial dividend is 72.", sol:"72 : 24 = 3, remainder 0. Bring down 9: 9 is less than 24, write 0. Bring down 6: 96 : 24 = 4. Quotient 304. Check: 304 · 24 = 7,296."},
    {q:"Find the remainder when dividing 2,000 by 7.", ans:"5", hint:"Find the largest number that's divisible by 7 and no more than 2,000.", sol:"2,000 : 7 = 285 (rem. 5), since 7 · 285 = 1,995 and 2,000 − 1,995 = 5. Check: 7 · 285 + 5 = 2,000."},
    {q:"Find the value of the expression: 250 · 400.", ans:"100000", hint:"Multiply 25 · 4, then tack on the zeros from both factors.", sol:"25 · 4 = 100, and the factors together have 1 + 2 = 3 zeros: 100 · 1,000 = 100,000."},
    {q:"A store received 36 boxes of 125 notebooks each. How many notebooks were delivered?", ans:"4500", hint:"Multiply the number in each box by the number of boxes.", sol:"125 · 36 = 125 · 4 · 9 = 500 · 9 = 4,500 notebooks."},
    {q:"24 identical pens cost 1,080 rubles. How many rubles does one pen cost?", ans:"45", hint:"Divide the total cost by the quantity.", sol:"1,080 : 24 = 45 rubles. Check: 45 · 24 = 1,080."},
    {q:"Find the missing number: 26 · □ = 3,042.", ans:"117", hint:"Missing factor = product : known factor.", sol:"□ = 3,042 : 26 = 117. Check: 26 · 117 = 3,042."},
    {q:"How many zeros are at the end of the number equal to the product 25 · 4 · 8 · 125?", ans:"5", hint:"First multiply 25 · 4, then 8 · 125.", sol:"25 · 4 = 100, 8 · 125 = 1,000, 100 · 1,000 = 100,000. There are five zeros at the end."},
    {q:"When a certain number was divided by 47, the quotient was 23 and the remainder was 15. Find the dividend.", ans:"1096", hint:"Dividend = divisor · quotient + remainder.", sol:"47 · 23 = 1,081, 1,081 + 15 = 1,096. Check: 1,096 : 47 = 23 (rem. 15)."},
    {q:"Find the value of the expression: 12,090 : 15.", ans:"806", hint:"The first partial dividend is 120: find the quotient digit. Watch out for the zeros!", sol:"120 : 15 = 8, remainder 0. Bring down 9: 9 is less than 15, write 0. Bring down 0: 90 : 15 = 6. Quotient 806. Check: 806 · 15 = 12,090."},
    {q:"A school bought 12 packs of 36 pencils each and split all the pencils evenly among 8 classes. How many pencils did each class get?", ans:"54", hint:"Find the total number of pencils, then divide by 8.", sol:"Total: 12 · 36 = 432 pencils. Each class: 432 : 8 = 54."},
    {q:"Find the value of the expression the convenient way: 125 · 7 · 8.", ans:"7000", hint:"Which two factors give a round number?", sol:"125 · 8 = 1,000, then 1,000 · 7 = 7,000."},
    {q:"Find the largest three-digit number that's divisible by 24 with no remainder.", ans:"984", hint:"Divide 999 by 24 with a remainder.", sol:"999 : 24 = 41 (rem. 15), since 24 · 41 = 984. So 984 is divisible by 24, and 984 + 24 = 1,008 already has four digits. Answer: 984."},
    {q:"Find the value of the expression: 3,208 · 7.", ans:"22456", hint:"Multiply each digit by 7 from right to left and keep track of the carries.", sol:"8 · 7 = 56, write 6, carry 5. 0 · 7 = 0, plus 5 — 5. 2 · 7 = 14, write 4, carry 1. 3 · 7 = 21, plus 1 — 22. Answer: 22,456."},
    {q:"Divide: 4,214 : 7.", ans:"602", hint:"The first partial dividend is 42. Don't forget the 0 in the quotient if the digit brought down is smaller than the divisor.", sol:"42 : 7 = 6, remainder 0. Bring down 1: 1 is less than 7, write 0. Bring down 4: 14 : 7 = 2. Quotient 602. Check: 602 · 7 = 4,214."},
    {q:"Find the value of the expression: 356 · 24.", ans:"8544", hint:"Multiply 356 by 4, then by 2 tens, and add the results.", sol:"356 · 4 = 1,424. 356 · 20 = 7,120. Sum: 1,424 + 7,120 = 8,544."},
    {q:"18 boxes of 145 books each were brought to a school. All the books were split evenly onto 9 shelves. How many books are on one shelf?", ans:"290", hint:"First find the total number of books, then divide by the number of shelves.", sol:"Total books: 18 · 145 = 2,610. On one shelf: 2,610 : 9 = 290."},
    {q:"Vitya multiplied 346 · 27 in column form and got 3,114: he wrote the second partial product with no shift. Find the correct value of 346 · 27.", ans:"9342", hint:"The second partial product is 346 · 20, not 346 · 2. It's written shifted one place to the left.", sol:"346 · 7 = 2,422. 346 · 20 = 6,920. 2,422 + 6,920 = 9,342. Estimate: 350 · 30 = 10,500 — close, while 3,114 is far too small. Answer: 9,342."},
    {q:"One bus holds 45 passengers. 400 schoolchildren are going on a field trip. How many buses need to be ordered so everyone can go?", ans:"9", hint:"Divide with a remainder. Think about what to do with those who don't fit in the full buses.", sol:"400 : 45 = 8 (rem. 40), since 45 · 8 = 360. 8 buses hold 360 people, and one more bus is needed for the remaining 40. 8 + 1 = 9. Answer: 9."},
    {q:"What is the smallest natural number that needs to be added to 5,000 so that the sum is divisible by 24 with no remainder?", ans:"16", hint:"Divide 5,000 by 24 with a remainder. How much is missing to reach the next number divisible by 24?", sol:"5,000 : 24 = 208 (rem. 8), since 24 · 208 = 4,992. The next number divisible by 24: 4,992 + 24 = 5,016. 5,016 − 5,000 = 16. Answer: 16."},
    {q:"Liza thought of a number, multiplied it by 16, added 38, and got 1,318. What number did Liza think of?", ans:"80", hint:"Work backward: undo the operations in reverse order.", sol:"Before adding 38, it was 1,318 − 38 = 1,280. Before multiplying by 16, it was 1,280 : 16 = 80. Check: 80 · 16 + 38 = 1,318. Answer: 80."},
    {q:"A movie theater hall has 18 rows of 26 seats. All tickets for the showing were sold except for 48. A ticket costs 350 rubles. How many rubles did the theater earn for this showing?", ans:"147000", hint:"Find the total number of seats, then how many tickets were sold, and only then calculate the money.", sol:"Seats: 18 · 26 = 468. Sold: 468 − 48 = 420 tickets. Revenue: 420 · 350 = 147,000 rubles. Answer: 147,000."},
    {q:"Find the value of the expression: 7,205 · 8 − 36,540 : 9.", ans:"53580", hint:"First the multiplication and division, then the subtraction. Don't lose the zero in the quotient.", sol:"7,205 · 8 = 57,640. 36,540 : 9 = 4,060. 57,640 − 4,060 = 53,580. Answer: 53,580."},
    {q:"Find the value of the expression the convenient way: 48 · 99.", ans:"4752", hint:"99 is 100 − 1. Use the distributive property.", sol:"48 · 99 = 48 · 100 − 48 · 1 = 4,800 − 48 = 4,752. Answer: 4,752."},
    {q:"Olya divided 6,342 by 6 using long division and got 157. Check her answer by multiplying and find the correct quotient.", ans:"1057", hint:"Check: is 157 · 6 really 6,342? See if a zero was skipped in the quotient.", sol:"157 · 6 = 942 — nowhere near 6,342. Let's divide again: 6 : 6 = 1. Bring down 3: 3 is less than 6, write 0. Bring down 4: 34 : 6 = 5 (rem. 4). Bring down 2: 42 : 6 = 7. Quotient 1,057. Check: 1,057 · 6 = 6,342. Answer: 1,057."}
  ],
  bonus: {q:"Someone picked a number, multiplied it by 12, added 36 to the result, and divided the resulting number by 6. They got 100. What number did they pick?", ans:"47", hint:"Work backward from the end, undoing each step.", sol:"The last step was dividing by 6, so before that it was 100 · 6 = 600. Before that, 36 was added: 600 − 36 = 564. Before that, it was multiplied by 12: 564 : 12 = 47. Check: 47 · 12 = 564; 564 + 36 = 600; 600 : 6 = 100."},
  test: [
    {q:"Find the value of the expression: 3,405 · 7.", ans:"23835", sol:"5 · 7 = 35, write 5, carry 3. 0 · 7 = 0, plus 3 — 3. 4 · 7 = 28, write 8, carry 2. 3 · 7 = 21, plus 2 — 23. Answer: 23,835."},
    {q:"Find the value of the expression: 216 · 45.", ans:"9720", sol:"216 · 5 = 1,080. 216 · 40 = 8,640. Sum: 1,080 + 8,640 = 9,720."},
    {q:"Divide: 9,152 : 8.", ans:"1144", sol:"9 : 8 = 1, rem. 1. 11 : 8 = 1, rem. 3. 35 : 8 = 4, rem. 3. 32 : 8 = 4. Quotient 1,144. Check: 1,144 · 8 = 9,152."},
    {q:"Divide: 4,032 : 56.", ans:"72", sol:"403 : 56 = 7 (56 · 7 = 392), remainder 11. Bring down 2: 112 : 56 = 2. Quotient 72. Check: 72 · 56 = 4,032."},
    {q:"Find the remainder when dividing 500 by 12.", ans:"8", sol:"12 · 41 = 492, 500 − 492 = 8. Remainder 8 (it's less than the divisor 12)."},
    {q:"Which of these remainders CANNOT occur when dividing a number by 9?", opts:["0","8","9","5"], ans:2, sol:"The remainder is always less than the divisor. When dividing by 9, the remainders range from 0 to 8. A remainder of 9 is impossible."},
    {q:"Over 24 days, a worker made 1,512 parts, making the same number each day. How many parts did he make in one day?", ans:"63", sol:"1,512 : 24 = 63. Check: 63 · 24 = 1,512."},
    {q:"Divide: 30,090 : 15.", ans:"2006", sol:"30 : 15 = 2. Bring down 0: 0, write 0. Bring down 9: 9 is less than 15, write 0. Bring down 0: 90 : 15 = 6. Quotient 2,006. Check: 2,006 · 15 = 30,090."}
  ],
  lab: [
    {t:"Shopping for the class", b:"Imagine you need to buy notebooks for the whole class. Find out the price of one notebook and the number of students (say, 26). Work out in column form how much all the notebooks cost: multiply the price by 26. Then divide the total by the number of students — you should get the original price back. That's how you check multiplication with division."},
    {t:"Checking with a calculator", b:"Make up three problems: a 3-digit number times a 2-digit number, a 4-digit number times a 1-digit number, and a 4-digit number divided by a 2-digit number. Solve them on paper using column form and long division, then check with a calculator. If the answers don't match, find which step went wrong: a carry, a shift, or a zero in the quotient."},
    {t:"Split it evenly", b:"Take 100 coins, buttons, or pieces of pasta and split them evenly among 7 friends. How many does each one get, and how many are left over? Write it as: 100 : 7 = 14 (rem. 2), check by multiplying 7 · 14 + 2. Then try splitting among 6, 8, and 9 friends: in which case is the remainder the biggest?"},
    {t:"Convenient multiplication", b:"Find pairs of &ldquo;convenient&rdquo; numbers in the numbers around you: 25 and 4, 125 and 8, 50 and 2. Make up 5 problems like 25 · 36 or 125 · 24 and work them out two ways: in column form and using properties (for example, 25 · 36 = 25 · 4 · 9 = 100 · 9). Which way is faster?"}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.mul4.examples[0].s += "<div class='figure'>__SVG_MUL4_EX0_MULT1__</div>";
CONTENT_EN.mul4.examples[1].s += "<div class='figure'>__SVG_MUL4_EX1_MULT2__</div>";
CONTENT_EN.mul4.examples[2].s += "<div class='figure'>__SVG_MUL4_EX2_TRICKS__</div>";
CONTENT_EN.mul4.examples[3].s += "<div class='figure'>__SVG_MUL4_EX3_DIV1__</div>";
CONTENT_EN.mul4.examples[4].s += "<div class='figure'>__SVG_MUL4_EX4_DIV2__</div>";
CONTENT_EN.mul4.examples[5].s += "<div class='figure'>__SVG_MUL4_EX5_REMAINDER__</div>";
CONTENT_EN.mul4.examples[6].s += "<div class='figure'>__SVG_MUL4_EX6_DIV3__</div>";

CONTENT_EN.mul4.steps = [
  {title:"Multiplying by a one-digit number", body:
    "<p>You already know how to add and subtract big numbers. Now let's learn to multiply and divide them in writing — the way it's done at school, working in column form and long division. The main thing is to work step by step and not rush.</p>"
    +"<h3>Multiplying by a one-digit number</h3><p>3,128 · 4 = 12,512 — watch how this is worked out in the animation below:<div class='figure'>__SVG_MUL4_SINGLE_ANIM__</div></p>",
    exIdx:[0]},
  {title:"Multiplying by a two-digit number", body:
    "<h3>Multiplying by a two-digit number</h3><p>A two-digit factor is ones plus tens: 36 = 6 + 30. So we multiply the number by each part separately and add the results. First by the ones (by 6), getting the first partial product. Then by the tens (by 3 tens) — and we write the second partial product <b>shifted one place to the left</b>: we put a zero under the ones (or you can just leave that spot blank). Then we add them.</p>"
    +"<div class='figure'>__SVG_MUL4_COLUMN__</div>"},
  {title:"Breaking down the example and a common mistake", body:
    "<p>Look at the picture: 274 · 6 = 1,644, 274 · 30 = 8,220, sum 1,644 + 8,220 = 9,864.</p><div class='warn'><span class='hand'>Common mistake</span>Forgetting the shift: the second partial product is written directly under the first, instead of one place to the left. Then the answer comes out several times smaller than it should be. Check yourself with an estimate: 274 · 36 is about 300 · 40 = 12,000, not 3,000.</div>",
    exIdx:[1]},
  {title:"Zeros and the properties of multiplication", body:
    "<h3>Zeros and the properties of multiplication</h3><p>When the factors end in zeros, multiply the numbers without the zeros, then tack all the dropped zeros back on. Take 350 · 40: 350 has one zero, 40 also has one — two in total. We work out 35 · 4 = 140 and tack on two zeros: 14,000.</p>"
    +"<p>Properties help you calculate conveniently. Commutative: a · b = b · a. Associative: (a · b) · c = a · (b · c). For example, 25 · 48 = 25 · 4 · 12 = 100 · 12 = 1,200. Distributive: 7 · 104 = 7 · 100 + 7 · 4 = 728.</p>",
    exIdx:[2]},
  {title:"Long division by a one-digit number", body:
    "<h3>Long division by a one-digit number</h3><p>We write the dividend, with the &ldquo;corner&rdquo; and the divisor to the right. We take the first digit of the dividend; if it's smaller than the divisor, we take the first two digits. This is the first partial dividend: we divide it, write the digit in the quotient, multiply it by the divisor, subtract, &ldquo;bring down&rdquo; the next digit — and divide again. We repeat this until we've brought down all the digits. The number of digits in the quotient is determined by how many times we divided.</p>"
    +"<div class='figure'>__SVG_MUL4_LONGDIV_ANIM__</div>"},
  {title:"Zeros in the quotient", body:
    "<p>3,618 : 6 = 603 — watch how this is worked out in the animation above.</p><div class='note'><span class='hand'>Remember</span>Whenever the digit brought down forms a number smaller than the divisor, we write 0 in the quotient and bring down the next digit. Zeros in the quotient can't be skipped: 603 and 63 are different numbers!</div>",
    exIdx:[3,4]},
  {title:"Division with a remainder and checking", body:
    "<h3>Division with a remainder and checking</h3><p>Division doesn't always come out even. At the end there may be a <b>remainder</b> left — a number that can no longer be divided by the divisor. The remainder is always <b>less than the divisor</b>. For example, 1,000 : 7: 7 · 142 = 994, remainder 1,000 − 994 = 6. We write 1,000 : 7 = 142 (rem. 6). Check: <b>divisor · quotient + remainder = dividend</b>: 7 · 142 + 6 = 1,000.</p>"
    +"<p>Checking by multiplication also works for division with no remainder: if 3,618 : 6 = 603, then 603 · 6 should give 3,618.</p>",
    exIdx:[5]},
  {title:"Dividing by a two-digit number", body:
    "<h3>Dividing by a two-digit number</h3><p>The hard part here is finding the quotient's digit. Trial and error helps: multiply the divisor by 1, 2, 3, … and look for the largest product that doesn't exceed the partial dividend. You can round the divisor: 24 ≈ 20, and 93 : 20 is about 4, but let's try more precisely.</p>"
    +"<div class='figure'>__SVG_MUL4_LONGDIV2__</div>"},
  {title:"Breaking down the example and a common mistake", body:
    "<p>936 : 24. The first partial dividend is 93. 24 · 3 = 72, while 24 · 4 = 96 — already more than 93, so the digit is 3. Subtract: 93 − 72 = 21. Bring down 6: 216. 24 · 9 = 216, so the next digit is 9. Quotient 39, remainder 0.</p><div class='warn'><span class='hand'>Common mistake</span>If after subtracting the remainder comes out equal to or greater than the divisor, the quotient digit was taken too small — take it 1 bigger. And if the product is bigger than the partial dividend, the digit is too big — take it 1 smaller.</div>",
    exIdx:[6]}
];

CONTENT_EN.val4 = {
  goal: "After this topic you'll be able to convert between units of length, mass, area, and time, add and subtract compound (named) measurements, and solve problems involving time.",
  explain: "<p>We measure everything around us: the length of a road, the weight of a watermelon, the area of a room, the length of a lesson. Something that can be measured is called a <b>quantity</b>, and what you measure it with is a <b>unit of measurement</b>. Difficulties start when the units are different: for example, the length of a board in meters and centimeters. Then you need to be able to &ldquo;convert&rdquo; one unit into another. That's not hard at all if you know the ladder.</p>"
  + "<h3>Length and mass: the unit ladder</h3>"
  + "<p>Units of length: kilometer (km), meter (m), decimeter (dm), centimeter (cm), millimeter (mm). Units of mass: tonne (t), quintal (q), kilogram (kg), gram (g). Look at the diagram: between neighboring rungs there's a number showing how many times bigger one unit is than the other.</p>"
  + "<div class='figure'>__SVG_VAL4_LADDERS__</div>"
  + "<p>The rule is simple. When we go <b>right</b> (to a smaller unit), there's more of the same thing, so we <b>multiply</b> the number. When we go <b>left</b> (to a bigger unit), we <b>divide</b> the number. For example, 3 m = 3 · 100 = 300 cm, and 5000 g = 5000 : 1000 = 5 kg.</p>"
  + "<div class='note'><span class='hand'>Remember</span>1 km = 1,000 m; 1 m = 10 dm = 100 cm = 1,000 mm; 1 dm = 10 cm; 1 cm = 10 mm. 1 t = 10 q = 1,000 kg; 1 q = 100 kg; 1 kg = 1,000 g.</div>"
  + "<p>To <b>convert a compound value</b> into smaller units, we convert the bigger part and add the remainder: 4 km 30 m = 4,000 m + 30 m = 4,030 m; 5 t 3 q = 5,000 kg + 300 kg = 5,300 kg. And to switch <b>to bigger units</b>, we divide with a remainder: 5,210 cm : 100 = 52 (remainder 10), so 5,210 cm = 52 m 10 cm.</p>"
  + "<h3>Adding and subtracting named numbers</h3>"
  + "<p>You can only add <b>the same units</b>: meters with meters, centimeters with centimeters. Watch how this works:</p><div class='figure'>__SVG_VAL4_CARRY_ANIM__</div>"
  + "<p>When subtracting, sometimes the smaller units aren't enough, and you have to &ldquo;borrow&rdquo; one of the bigger ones. Let's find 5 m 20 cm − 2 m 65 cm. Twenty centimeters is less than sixty-five, so we turn 1 m of the five meters into 100 cm: 5 m 20 cm = 4 m 120 cm. Now 120 − 65 = 55 cm and 4 − 2 = 2 m. Answer: 2 m 55 cm.</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Carrying a &ldquo;ten,&rdquo; as with ordinary numbers, even though 1 m isn't 10 cm but 100 cm, and 1 hour isn't 100 minutes but 60. Adding 45 cm and 78 cm, people get 123 &ldquo;centimeters&rdquo; and write 3 m 45 cm + 2 m 78 cm = 5 m 123 cm. That's not allowed: the extra 100 cm must be turned into a meter.</div>"
  + "<h3>Area</h3>"
  + "<p>Area shows how much space a shape takes up. It's measured in little squares: a square with a side of 1 cm is 1 <b>square centimeter</b> (1 cm²). Take a square with a side of 1 dm. Its side is 10 cm, so 10 little squares fit along and across, and in total 10 · 10 = 100 cm². That's how 1 dm² = 100 cm². In the same way, 1 m² = 100 dm² = 10,000 cm², and 1 km² = 1,000,000 m².</p>"
  + "<div class='figure'>__SVG_VAL4_AREA__</div>"
  + "<p>Notice that for area units each rung is <b>×100</b>, not ×10. So 3 m² 40 dm² = 300 dm² + 40 dm² = 340 dm².</p>"
  + "<h3>Time</h3>"
  + "<p>Time works differently from meters: 1 h = 60 min, 1 min = 60 s, 1 day = 24 h, 1 week = 7 days. There are 12 months in a year, and 365 days in a year (366 in a leap year). A month has 28, 29, 30, or 31 days. There's also a bigger unit — the <b>century</b>: 1 century = 100 years. For example, the year 1961 is in the 20th century (the years from 1901 to 2000).</p>"
  + "<p><b>How much time has passed?</b> It's handy to move in &ldquo;jumps&rdquo; between round marks. Watch how this works:</p>"
  + "<div class='figure'>__SVG_VAL4_CLOCK_ANIM__</div>"
  + "<p><b>What time will it be?</b> We add time in parts. A film started at 18:25 and runs for 1 h 50 min. Add an hour to 18:25: 19:25. Then 50 more minutes: 35 minutes are needed to reach 20:00, leaving 15 minutes, so the film will end at 20:15. If you need to cross over midnight, remember: a day has 24 hours, and 0:00 comes right after 23:59.</p>"
  + "<p>Finally, you can only <b>compare</b> values given in the same units. Which is bigger: 3 km 50 m or 3500 m? Let's convert: 3 km 50 m = 3,050 m. And 3,050 m is less than 3,500 m, so 3 km 50 m &lt; 3,500 m.</p>",
  examples: [
    {t:"Convert 4 km 30 m to meters, and 5 t 3 q to kilograms.", s:"4 km = 4,000 m, so 4 km 30 m = 4,000 + 30 = 4,030 m. 5 t = 5,000 kg, 3 q = 300 kg, so 5 t 3 q = 5,000 + 300 = 5,300 kg."},
    {t:"Express 5,210 cm in meters and centimeters.", s:"There are 100 cm in 1 m. Divide with a remainder: 5,210 : 100 = 52 (remainder 10). So 5,210 cm = 52 m 10 cm."},
    {t:"Add: 3 m 45 cm + 2 m 78 cm.", s:"Centimeters: 45 + 78 = 123 cm = 1 m 23 cm. Meters: 3 + 2 + 1 = 6 m. Answer: 6 m 23 cm. Check: 345 + 278 = 623 cm = 6 m 23 cm."},
    {t:"Subtract: 5 m 20 cm − 2 m 65 cm.", s:"20 cm is less than 65 cm, so we borrow 1 m: 5 m 20 cm = 4 m 120 cm. Then 120 − 65 = 55 cm, 4 − 2 = 2 m. Answer: 2 m 55 cm. Check: 520 − 265 = 255 cm."},
    {t:"How many square decimeters are in 3 m² 40 dm²? Which is bigger: 3 km 50 m or 3500 m?", s:"1 m² = 100 dm², so 3 m² = 300 dm², and 3 m² 40 dm² = 300 + 40 = 340 dm². Comparison: 3 km 50 m = 3,000 + 50 = 3,050 m. Since 3,050 < 3,500, 3,500 m is bigger."},
    {t:"How much time passed from 14:35 to 17:10?", s:"To 15:00 — 25 min (35 + 25 = 60). From 15:00 to 17:00 — 2 h. From 17:00 to 17:10 — 10 min. Total: 25 min + 2 h + 10 min = 2 h 35 min. Check: 14:35 + 2 h = 16:35, plus 35 min — 17:10."},
    {t:"A film started at 18:25 and runs for 1 h 50 min. When will it end?", s:"18:25 + 1 h = 19:25. Then 50 more min: 19:25 + 35 min = 20:00 and another 15 min = 20:15. Answer: at 20:15."},
    {t:"How many hours are in 2 days 5 hours? How many seconds are in 4 min 20 s?", s:"2 days = 2 · 24 = 48 h, so 2 days 5 h = 48 + 5 = 53 h. 4 min = 4 · 60 = 240 s, so 4 min 20 s = 240 + 20 = 260 s."}
  ],
  tasks: [
    {q:"How many centimeters in total are in 4 m 5 cm?", ans:"405", hint:"First convert 4 m to centimeters: there are 100 cm in 1 m.", sol:"4 m = 4 · 100 = 400 cm. 400 + 5 = 405 cm."},
    {q:"How many meters in total are in 3 km 250 m?", ans:"3250", hint:"There are 1,000 m in 1 km.", sol:"3 km = 3,000 m. 3,000 + 250 = 3,250 m."},
    {q:"How many grams in total are in 7 kg 40 g?", ans:"7040", hint:"There are 1,000 g in 1 kg. Don't forget: 40 g is 040, not 400.", sol:"7 kg = 7,000 g. 7,000 + 40 = 7,040 g."},
    {q:"How many minutes in total are in 5 h 20 min?", ans:"320", hint:"There are 60 minutes in an hour.", sol:"5 h = 5 · 60 = 300 min. 300 + 20 = 320 min."},
    {q:"How many square centimeters are in 1 square decimeter?", opts:["10","100","1000","60"], ans:1, hint:"Picture a square with a side of 1 dm: how many centimeters are in its side, and how many little squares fit in it?", sol:"There are exactly 10 cm in a 1-dm side, so the square has 10 rows of 10 little squares: 10 · 10 = 100 cm²."},
    {q:"How many meters are in 4,800 cm?", ans:"48", hint:"We're switching to a bigger unit — so we divide by 100.", sol:"4,800 : 100 = 48 m."},
    {q:"Add 3 m 45 cm and 2 m 78 cm. How many centimeters in total did you get?", ans:"623", hint:"Convert both values to centimeters and add.", sol:"3 m 45 cm = 345 cm, 2 m 78 cm = 278 cm. 345 + 278 = 623 cm (that's 6 m 23 cm)."},
    {q:"A piece 2 m 65 cm long was cut off a board 5 m 20 cm long. How many centimeters are left?", ans:"255", hint:"Convert both lengths to centimeters.", sol:"5 m 20 cm = 520 cm, 2 m 65 cm = 265 cm. 520 − 265 = 255 cm (that is, 2 m 55 cm)."},
    {q:"One watermelon weighs 3 kg 400 g, another weighs 2 kg 750 g. How many grams do both watermelons weigh together?", ans:"6150", hint:"Convert to grams: 1 kg = 1,000 g.", sol:"3 kg 400 g = 3,400 g, 2 kg 750 g = 2,750 g. 3,400 + 2,750 = 6,150 g (that's 6 kg 150 g)."},
    {q:"How many square decimeters are in 3 m² 40 dm²?", ans:"340", hint:"There are a hundred square decimeters in 1 m², not ten.", sol:"3 m² = 3 · 100 = 300 dm². 300 + 40 = 340 dm²."},
    {q:"How many minutes passed from 14:35 to 17:10?", ans:"155", hint:"Move in jumps: to 15:00, then to 17:00, then to 17:10. Convert the answer to minutes.", sol:"To 15:00 — 25 min, to 17:00 — another 2 h = 120 min, to 17:10 — another 10 min. 25 + 120 + 10 = 155 min (that's 2 h 35 min)."},
    {q:"How many kilograms in total are in 3 t 5 q?", ans:"3500", hint:"There are 1,000 kg in 1 t, and 100 kg in 1 q.", sol:"3 t = 3,000 kg, 5 q = 500 kg. 3,000 + 500 = 3,500 kg."},
    {q:"One road is 3 km 50 m long, another is 2 km 980 m long. By how many meters is the first road longer than the second?", ans:"70", hint:"Express both lengths in meters and subtract.", sol:"3 km 50 m = 3,050 m, 2 km 980 m = 2,980 m. 3,050 − 2,980 = 70 m."},
    {q:"A film started at 18:25 and runs for 1 h 50 min. It will end at 20 h … min. What number goes in place of the dots?", ans:"15", hint:"First add an hour, then 50 minutes: reach 20:00 and see what's left.", sol:"18:25 + 1 h = 19:25. 35 min are needed to reach 20:00, leaving 50 − 35 = 15 min out of the 50. The film will end at 20:15."},
    {q:"Which length is the largest?", opts:["3 km 50 m","3 km 5 m","3005 m","3 km 500 m"], ans:3, hint:"Convert all the values to meters.", sol:"3 km 50 m = 3,050 m; 3 km 5 m = 3,005 m; 3,005 m; 3 km 500 m = 3,500 m. The largest is 3 km 500 m."},
    {q:"A room is shaped like a rectangle 4 m by 5 m. How many square decimeters is its area?", ans:"2000", hint:"First find the area in m², then convert to dm² (×100).", sol:"Area: 4 · 5 = 20 m². 20 m² = 20 · 100 = 2,000 dm²."},
    {q:"A cartoon runs for 1 h 15 min. How many seconds does it run?", ans:"4500", hint:"Convert to minutes, then to seconds: there are 60 s in 1 min.", sol:"1 h 15 min = 60 + 15 = 75 min. 75 · 60 = 4,500 s."},
    {q:"A student went to bed at 21:30 and woke up at 7:15 the next morning. How many minutes did he sleep?", ans:"585", hint:"How long until midnight (24:00)? And from midnight to 7:15? Add them and convert to minutes.", sol:"From 21:30 to 24:00 — 2 h 30 min. From 0:00 to 7:15 — 7 h 15 min. Total 9 h 45 min = 9 · 60 + 45 = 585 min."},
    {q:"A rope 3 m 60 cm long was cut into 9 equal pieces. How many centimeters are in one piece?", ans:"40", hint:"First express the whole length in centimeters.", sol:"3 m 60 cm = 360 cm. 360 : 9 = 40 cm."},
    {q:"A skier moves at a constant speed of 12 km per hour. How many meters does he cover in 5 minutes?", ans:"1000", hint:"How many 5-minute chunks are in an hour? How many kilometers in one 5-minute chunk?", sol:"There are 60 : 5 = 12 five-minute chunks in an hour. In an hour, 12 km, so in 5 min the skier covers 12 : 12 = 1 km = 1,000 m."},
    {q:"Express 6 t 80 kg in kilograms (answer in kg).", ans:"6080", hint:"1 t = 1000 kg. Don't forget: 80 kg is 080, not 800.", sol:"6 t = 6000 kg. 6000 + 80 = 6080 kg."},
    {q:"Add 4 h 45 min and 2 h 35 min. How many minutes in total?", ans:"440", hint:"Convert both time intervals to minutes and add.", sol:"4 h 45 min = 4 · 60 + 45 = 285 min. 2 h 35 min = 2 · 60 + 35 = 155 min. 285 + 155 = 440 min (that's 7 h 20 min)."},
    {q:"A square plot has an area of 400 m². Find its perimeter (in meters).", ans:"80", hint:"First find the side of the square: what number, multiplied by itself, gives 400?", sol:"Side: 20 · 20 = 400, so the side is 20 m. Perimeter: 20 · 4 = 80 m."},
    {q:"A bus left the depot at 9:40 and was on the road for 3 h 55 min. It arrived at 13:… Find the missing number of minutes.", ans:"35", hint:"First add the whole hours, then add the minutes in parts up to the next hour.", sol:"9:40 + 3 h = 12:40. 20 more minutes are needed to reach 13:00, leaving 55 − 20 = 35 min of the 55. The bus arrived at 13:35, that is, at 13 h 35 min."},
    {q:"Classes start at 8:30. Each lesson lasts 40 minutes, with 10-minute breaks between lessons. How many minutes pass from the start of the first lesson to the end of the fifth lesson?", ans:"240", hint:"There are five lessons, and one fewer break than lessons. Add up the time for all the lessons and all the breaks.", sol:"Lessons: 5 · 40 = 200 min. There's one fewer break than lessons: 4 · 10 = 40 min. Total: 200 + 40 = 240 min (that's 4 h; the fifth lesson will end at 12:30). Answer: 240."},
    {q:"A bag contains 2 kg of flour. One batch of pancake batter needs 350 g of flour. How many full batches of batter can be made from this bag?", ans:"5", hint:"Convert kilograms to grams and divide with a remainder.", sol:"2 kg = 2,000 g. 2,000 : 350 = 5 (rem. 250), since 350 · 5 = 1,750. There's enough flour for 5 full batches, with 250 g left over. Answer: 5."},
    {q:"Kolya converted 5 t 6 centners to kilograms and got 5,060 kg. He made a mistake. How many kilograms are actually in 5 t 6 centners?", ans:"5600", hint:"How many kilograms are in one centner?", sol:"5 t = 5,000 kg. 1 centner = 100 kg, so 6 centners = 600 kg. 5,000 + 600 = 5,600 kg. Kolya treated a centner as 10 kg. Answer: 5,600."},
    {q:"How many square centimeters are in 2 dm² 5 cm²?", ans:"205", hint:"There are 100 square centimeters in 1 dm², not 10.", sol:"2 dm² = 2 · 100 = 200 cm². 200 + 5 = 205 cm². Answer: 205."},
    {q:"A cyclist covers 1 km in 4 minutes. How many kilometers will he cover in 1 h 20 min riding at the same pace?", ans:"20", hint:"Convert the time to minutes and find how many times 4 minutes fits into it.", sol:"1 h 20 min = 60 + 20 = 80 min. 80 : 4 = 20, so he will cover 20 km. Answer: 20."},
    {q:"Petya's stride length is 50 cm. How many steps does he need to take to walk 1 km 200 m?", ans:"2400", hint:"Convert the distance to centimeters: 1 km = 1,000 m, 1 m = 100 cm.", sol:"1 km 200 m = 1,200 m = 120,000 cm. 120,000 : 50 = 2,400 steps. Answer: 2,400."},
    {q:"The holidays lasted 2 weeks and 3 days. How many hours is that?", ans:"408", hint:"First find the total number of days — there are 24 hours in a day.", sol:"2 weeks = 14 days, for a total of 14 + 3 = 17 days. 17 · 24 = 408 h. Answer: 408."},
    {q:"A truck can carry 3 t of cargo. It has already been loaded with 12 sacks of 50 kg each and 8 crates of 125 kg each. How many more kilograms of cargo can be loaded?", ans:"1400", hint:"Express the capacity in kilograms and find the mass of what's already loaded.", sol:"Sacks: 12 · 50 = 600 kg. Crates: 8 · 125 = 1,000 kg. Loaded: 1,600 kg. 3 t = 3,000 kg. 3,000 − 1,600 = 1,400 kg. Answer: 1,400."}
  ],
  bonus: {q:"Today is Monday (the 1st day of the week, Tuesday the 2nd, … Sunday the 7th). What number day of the week will it be in 100 days?", ans:"3", hint:"A week has 7 days. How many full weeks are in 100 days, and what's left over?", sol:"100 : 7 = 14 (remainder 2). So 14 full weeks will pass (Monday again) plus 2 more days: Monday → Tuesday → Wednesday. Wednesday is the 3rd day of the week."},
  test: [
    {q:"How many centimeters in total are in 6 m 7 cm?", ans:"607", sol:"6 m = 600 cm. 600 + 7 = 607 cm."},
    {q:"How many meters in total are in 8 km 90 m?", ans:"8090", sol:"8 km = 8,000 m. 8,000 + 90 = 8,090 m."},
    {q:"Add 2 kg 600 g and 1 kg 700 g. How many grams did you get?", ans:"4300", sol:"2,600 g + 1,700 g = 4,300 g (that's 4 kg 300 g)."},
    {q:"A piece 2 m 45 cm long was cut off a ribbon 6 m 10 cm long. How many centimeters of ribbon are left?", ans:"365", sol:"6 m 10 cm = 610 cm, 2 m 45 cm = 245 cm. 610 − 245 = 365 cm."},
    {q:"How many square centimeters in total are in 4 dm² 20 cm²?", ans:"420", sol:"4 dm² = 4 · 100 = 400 cm². 400 + 20 = 420 cm²."},
    {q:"How many minutes passed from 8:50 to 11:15?", ans:"145", sol:"To 9:00 — 10 min, to 11:00 — 2 h = 120 min, to 11:15 — 15 min. 10 + 120 + 15 = 145 min."},
    {q:"How many seconds are in 3 min 15 s?", ans:"195", sol:"3 min = 180 s. 180 + 15 = 195 s."},
    {q:"How many years are in 5 centuries?", opts:["50","500","5000","100"], ans:1, sol:"There are 100 years in 1 century, so in 5 centuries there are 5 · 100 = 500 years."}
  ],
  lab: [
    {t:"Measure yourself and your room", b:"Take a tape measure or a ruler and measure your height, the length of your desk, and the width of a door. Write each value two ways: in centimeters (for example, 137 cm) and in meters and centimeters (1 m 37 cm). Then find the difference between your height and the height of the doorway: how many centimeters short of the frame are you?"},
    {t:"Weigh food in the kitchen", b:"Ask an adult to let you weigh a package of pasta, a bag of sugar, and an apple on the kitchen scale. Write down the mass in grams and in kilograms and grams (for example, 850 g and 1 kg 200 g). Add the masses of two items and check with the scale: did it match?"},
    {t:"How long do everyday tasks take", b:"Turn on the stopwatch on a phone and time how long it takes you to brush your teeth, tie your shoelaces, and pack your school bag. Write it down in seconds, then in minutes and seconds. Find how many seconds everything takes together, and figure out what time you need to start getting ready to leave the house by 8:00."},
    {t:"The area of a sheet of paper", b:"Measure the sides of an A4 sheet (about 21 cm and 30 cm) and multiply them: you'll get the area in square centimeters, about 630 cm². Convert to dm²: how many whole square decimeters and how many cm² are left over? Then draw a 10 cm by 10 cm square on grid paper and count how many square centimeters it contains."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.val4.examples[0].s += "<div class='figure'>__SVG_VAL4_EX0_KMTOM__</div>";
CONTENT_EN.val4.examples[1].s += "<div class='figure'>__SVG_VAL4_EX1_CMTOM__</div>";
CONTENT_EN.val4.examples[2].s += "<div class='figure'>__SVG_VAL4_EX2_ADDCARRY__</div>";
CONTENT_EN.val4.examples[3].s += "<div class='figure'>__SVG_VAL4_EX3_SUBBORROW__</div>";
CONTENT_EN.val4.examples[4].s += "<div class='figure'>__SVG_VAL4_EX4_AREACOMPARE__</div>";
CONTENT_EN.val4.examples[5].s += "<div class='figure'>__SVG_VAL4_EX5_ELAPSED__</div>";
CONTENT_EN.val4.examples[6].s += "<div class='figure'>__SVG_VAL4_EX6_FILMEND__</div>";
CONTENT_EN.val4.examples[7].s += "<div class='figure'>__SVG_VAL4_EX7_DAYSEC__</div>";

CONTENT_EN.val4.steps = [
  {title:"Quantities and units of measurement", body:
    "<p>We measure everything around us: the length of a road, the weight of a watermelon, the area of a room, the length of a lesson. Something that can be measured is called a <b>quantity</b>, and what you measure it with is a <b>unit of measurement</b>. Difficulties start when the units are different: for example, the length of a board in meters and centimeters. Then you need to be able to &ldquo;convert&rdquo; one unit into another. That's not hard at all if you know the ladder.</p>"
    +"<h3>Length and mass: the unit ladder</h3><p>Units of length: kilometer (km), meter (m), decimeter (dm), centimeter (cm), millimeter (mm). Units of mass: tonne (t), quintal (q), kilogram (kg), gram (g). Look at the diagram: between neighboring rungs there's a number showing how many times bigger one unit is than the other.</p><div class='figure'>__SVG_VAL4_LADDERS__</div>"},
  {title:"Multiply or divide?", body:
    "<p>The rule is simple. When we go <b>right</b> (to a smaller unit), there's more of the same thing, so we <b>multiply</b> the number. When we go <b>left</b> (to a bigger unit), we <b>divide</b> the number. For example, 3 m = 3 · 100 = 300 cm, and 5000 g = 5000 : 1000 = 5 kg.</p><div class='note'><span class='hand'>Remember</span>1 km = 1,000 m; 1 m = 10 dm = 100 cm = 1,000 mm; 1 dm = 10 cm; 1 cm = 10 mm. 1 t = 10 q = 1,000 kg; 1 q = 100 kg; 1 kg = 1,000 g.</div>",
    exIdx:0},
  {title:"Converting compound values", body:
    "<p>To <b>convert a compound value</b> into smaller units, we convert the bigger part and add the remainder: 4 km 30 m = 4,000 m + 30 m = 4,030 m; 5 t 3 q = 5,000 kg + 300 kg = 5,300 kg. And to switch <b>to bigger units</b>, we divide with a remainder: 5,210 cm : 100 = 52 (remainder 10), so 5,210 cm = 52 m 10 cm.</p>",
    exIdx:[0,1]},
  {title:"Adding named numbers", body:
    "<h3>Adding and subtracting named numbers</h3><p>You can only add <b>the same units</b>: meters with meters, centimeters with centimeters. Watch how this works:</p><div class='figure'>__SVG_VAL4_CARRY_ANIM__</div>",
    exIdx:2},
  {title:"Subtracting with carrying across place", body:
    "<p>When subtracting, sometimes the smaller units aren't enough, and you have to &ldquo;borrow&rdquo; one of the bigger ones. Let's find 5 m 20 cm − 2 m 65 cm. Twenty centimeters is less than sixty-five, so we turn 1 m of the five meters into 100 cm: 5 m 20 cm = 4 m 120 cm. Now 120 − 65 = 55 cm and 4 − 2 = 2 m. Answer: 2 m 55 cm.</p><div class='warn'><span class='hand'>Common mistake</span>Carrying a &ldquo;ten,&rdquo; as with ordinary numbers, even though 1 m isn't 10 cm but 100 cm, and 1 hour isn't 100 minutes but 60. Adding 45 cm and 78 cm, people get 123 &ldquo;centimeters&rdquo; and write 3 m 45 cm + 2 m 78 cm = 5 m 123 cm. That's not allowed: the extra 100 cm must be turned into a meter.</div>",
    exIdx:3},
  {title:"Area and square units", body:
    "<h3>Area</h3><p>Area shows how much space a shape takes up. It's measured in little squares: a square with a side of 1 cm is 1 <b>square centimeter</b> (1 cm²). Take a square with a side of 1 dm. Its side is 10 cm, so 10 little squares fit along and across, and in total 10 · 10 = 100 cm². That's how 1 dm² = 100 cm². In the same way, 1 m² = 100 dm² = 10,000 cm², and 1 km² = 1,000,000 m².</p><div class='figure'>__SVG_VAL4_AREA__</div>"},
  {title:"Area's rungs are ×100", body:
    "<p>Notice that for area units each rung is <b>×100</b>, not ×10. So 3 m² 40 dm² = 300 dm² + 40 dm² = 340 dm².</p>",
    exIdx:4},
  {title:"Units of time", body:
    "<h3>Time</h3><p>Time works differently from meters: 1 h = 60 min, 1 min = 60 s, 1 day = 24 h, 1 week = 7 days. There are 12 months in a year, and 365 days in a year (366 in a leap year). A month has 28, 29, 30, or 31 days. There's also a bigger unit — the <b>century</b>: 1 century = 100 years. For example, the year 1961 is in the 20th century (the years from 1901 to 2000).</p>",
    exIdx:7},
  {title:"How much time has passed?", body:
    "<p><b>How much time has passed?</b> It's handy to move in &ldquo;jumps&rdquo; between round marks. Watch how this works:</p><div class='figure'>__SVG_VAL4_CLOCK_ANIM__</div>",
    exIdx:5},
  {title:"What time will it be?", body:
    "<p><b>What time will it be?</b> We add time in parts. A film started at 18:25 and runs for 1 h 50 min. Add an hour to 18:25: 19:25. Then 50 more minutes: 35 minutes are needed to reach 20:00, leaving 15 minutes, so the film will end at 20:15. If you need to cross over midnight, remember: a day has 24 hours, and 0:00 comes right after 23:59.</p>",
    exIdx:6},
  {title:"Comparing named numbers", body:
    "<p>Finally, you can only <b>compare</b> values given in the same units. Which is bigger: 3 km 50 m or 3500 m? Let's convert: 3 km 50 m = 3,050 m. And 3,050 m is less than 3,500 m, so 3 km 50 m &lt; 3,500 m.</p>",
    exIdx:4}
];

CONTENT_EN.word4 = {
  goal: "After this topic you'll be able to make sense of a word problem: write a short summary or diagram, draw up a plan, and solve problems about price and cost, motion, work, comparison, and parts.",
  explain: "<p>A word problem is a little story with numbers and a question. Many people are afraid of word problems because they start calculating right away, without figuring out what the story is about. A good problem-solver <b>understands</b> first, then calculates. Here's an order that always works.</p>"
  + "<ul><li><b>1. Read</b> the problem and picture what's happening.</li>"
  + "<li><b>2. Find the question</b> — what you need to find out in the end.</li>"
  + "<li><b>3. Write it down briefly</b> or draw a bar diagram: which numbers are known, which is unknown.</li>"
  + "<li><b>4. Draw up a plan</b>: which operation can be done first, and what it gives you.</li>"
  + "<li><b>5. Solve, check, and write down the answer.</b></li></ul>"
  + "<h3>Price, quantity, cost</h3>"
  + "<p><b>Price</b> is how much one item costs (or 1 kg, 1 meter). <b>Quantity</b> is how many items were bought. <b>Cost</b> is how much was paid for everything. All three quantities are connected by one &ldquo;triangle&rdquo;: cost = price · quantity. From this, price = cost : quantity, and quantity = cost : price. Watch how this works:</p>"
  + "<div class='figure'>__SVG_WORD4_TRIANGLE_ANIM__</div>"
  + "<p>The other two relationships in the diagram work exactly the same way. <b>Motion:</b> distance = speed · time. A cyclist rides for 3 hours at 14 km/h, so he'll cover 14 · 3 = 42 km. <b>Work:</b> total = (how much is done in 1 hour) · (number of hours). If a craftsman makes 9 parts in an hour, then in 8 hours he'll make 9 · 8 = 72 parts. The number &ldquo;how much is done in 1 hour&rdquo; is called the <b>rate</b>.</p>"
  + "<div class='note'><span class='hand'>Remember</span>The same idea works in all three problems: <b>&ldquo;per one unit&rdquo; · &ldquo;number of units&rdquo; = &ldquo;altogether&rdquo;</b>. If &ldquo;altogether&rdquo; is known and we're looking for one of the parts, we divide.</div>"
  + "<h3>Moving toward each other and catching up</h3>"
  + "<p>If two people walk <b>toward each other</b>, we <b>add</b> their speeds: the distance decreases by both speeds at once. If one is <b>catching up</b> with the other (moving the same direction), the distance decreases only by the <b>difference</b> of the speeds. Watch how this works:<div class='figure'>__SVG_WORD4_MEET_ANIM__</div></p>"
  + "<h3>Comparing numbers: &ldquo;more/less by&rdquo; and &ldquo;times&rdquo;</h3>"
  + "<p>The words in the problem hint at the operation. &ldquo;<b>More by</b> 9&rdquo; — we add 9, &ldquo;less by 9&rdquo; — we subtract 9. &ldquo;<b>3 times</b> as many&rdquo; — we multiply by 3, &ldquo;3 times fewer&rdquo; — we divide by 3. A bar diagram makes this visible: a bar for &ldquo;more by 9&rdquo; is the same bar plus an extra piece of 9, while &ldquo;3 times as many&rdquo; is three identical bars.</p>"
  + "<div class='figure'>__SVG_WORD4_BARS__</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Mixing up &ldquo;by&rdquo; and &ldquo;times.&rdquo; The problem &ldquo;3 times fewer&rdquo; means division, not subtraction: if there are 12 red balloons, and blue ones are 3 times fewer, then there are 12 : 3 = 4 blue ones, not 12 − 3. Another trap: &ldquo;the first is more than the second by 5&rdquo; means the second has 5 <b>fewer</b>, and to find it you need to subtract 5 from the first number.</div>"
  + "<h3>Problems in 2-3 steps</h3>"
  + "<p>In a problem like this, you can't find the answer right away: first you find an &ldquo;in-between&rdquo; number. For example: &ldquo;Class 1 has 28 pupils, class 2 has 4 fewer, and class 3 has 3 more than class 2. How many in total?&rdquo; First step: 28 − 4 = 24 (in class 2). Second: 24 + 3 = 27 (in class 3). Third: 28 + 24 + 27 = 79. Before each step, ask yourself: &ldquo;What am I finding out with this step?&rdquo; That question is exactly the <b>solution plan</b>.</p>"
  + "<h3>Problems about parts</h3>"
  + "<p>Sometimes a problem says that a whole is split into &ldquo;parts&rdquo;: &ldquo;one sack has 2 parts, another has 3 of the same parts.&rdquo; First find out how many parts there are in total (2 + 3 = 5). Then divide the whole by the number of parts — you'll get one part (45 : 5 = 9). Then multiply by however many parts you need: 9 · 2 = 18 and 9 · 3 = 27.</p>"
  + "<div class='figure'>__SVG_WORD4_PARTS__</div>"
  + "<p>Always finish with a <b>check</b>: 18 + 27 = 45 — matches the problem. Checking is the best way to avoid mistakes.</p>",
  examples: [
    {t:"3 kg of apples were bought at 65 rubles per kilogram, and 2 kg of pears at 80 rubles per kilogram. How many rubles were paid in total?", s:"1) 65 · 3 = 195 (rub.) — cost of the apples. 2) 80 · 2 = 160 (rub.) — cost of the pears. 3) 195 + 160 = 355 (rub.). Answer: 355 rubles."},
    {t:"A cyclist rode for 3 hours at 14 km/h, then for 2 hours at 11 km/h. What distance did he cover?", s:"1) 14 · 3 = 42 (km) — for the first 3 hours. 2) 11 · 2 = 22 (km) — for the next 2 hours. 3) 42 + 22 = 64 (km). Answer: 64 km."},
    {t:"The distance between two villages is 36 km. Two pedestrians set out toward each other at the same time, at speeds of 4 km/h and 5 km/h. After how many hours will they meet?", s:"They're walking toward each other — add the speeds: 4 + 5 = 9 (km/h) — the closing speed. Time to meeting: 36 : 9 = 4 (h). Check: 4 · 4 = 16 km and 5 · 4 = 20 km, 16 + 20 = 36 km."},
    {t:"There are 18 km between a cyclist and a pedestrian. The cyclist is catching up with the pedestrian. The cyclist's speed is 15 km/h, the pedestrian's is 12 km/h. After how many hours will the cyclist catch up with the pedestrian?", s:"They're moving the same direction — subtract the speeds: 15 − 12 = 3 (km/h) — the closing speed. Time: 18 : 3 = 6 (h). Check: the cyclist will cover 15 · 6 = 90 km, the pedestrian will cover 12 · 6 = 72 km, 90 − 72 = 18 km."},
    {t:"A pump moves 30 liters of water per minute. How many minutes will it take to fill a 450-liter pool? How many liters will it pump in 8 minutes?", s:"Time: 450 : 30 = 15 (min). In 8 minutes: 30 · 8 = 240 (L). Here the rate is 30 L per minute, the &ldquo;total&rdquo; is 450 L."},
    {t:"Class 1 has 28 pupils, class 2 has 4 fewer, and class 3 has 3 more than class 2. How many pupils are in the three classes together?", s:"1) 28 − 4 = 24 (pupils) — in class 2. 2) 24 + 3 = 27 (pupils) — in class 3. 3) 28 + 24 + 27 = 79 (pupils). Answer: 79 pupils."},
    {t:"240 kg of apples were delivered, and 4 times fewer pears. How many kilograms of fruit were delivered in total?", s:"4 times fewer means we divide. 1) 240 : 4 = 60 (kg) — pears. 2) 240 + 60 = 300 (kg). Answer: 300 kg."},
    {t:"56 candies were split between Anya and Borya. Anya got 3 parts, Borya got 4 of the same parts. How many candies did Borya get?", s:"1) 3 + 4 = 7 (parts) — total. 2) 56 : 7 = 8 (candies) — one part. 3) 8 · 4 = 32 (candies) — Borya's share. Check: Anya got 8 · 3 = 24, 24 + 32 = 56."}
  ],
  tasks: [
    {q:"One pen costs 35 rubles. How many rubles do 8 such pens cost?", ans:"280", hint:"Cost = price · quantity.", sol:"35 · 8 = 280 (rub.)."},
    {q:"6 identical buns cost 210 rubles in total. How many rubles does one bun cost?", ans:"35", hint:"The cost and the quantity are known. We're looking for the price.", sol:"Price = cost : quantity: 210 : 6 = 35 (rub.)."},
    {q:"A bus drove for 6 hours at 55 km/h. How many kilometers did it cover?", ans:"330", hint:"Distance = speed · time.", sol:"55 · 6 = 330 (km)."},
    {q:"A vase has 12 roses, and there are 7 more tulips than roses. How many tulips are in the vase?", opts:["5","19","84","7"], ans:1, hint:"The words &ldquo;more by …&rdquo; hint at which operation to choose.", sol:"&ldquo;7 more&rdquo; means we add: 12 + 7 = 19 (tulips)."},
    {q:"A craftsman makes 9 parts in 1 hour. How many parts will he make in 8 hours?", ans:"72", hint:"&ldquo;How many in 1 hour&rdquo; · the number of hours.", sol:"9 · 8 = 72 (parts)."},
    {q:"One bag has 3 kg of sugar, and another has 4 times as much. How many kilograms of sugar are in the two bags together?", ans:"15", hint:"First find out how much sugar is in the second bag.", sol:"1) 3 · 4 = 12 (kg) — in the second bag. 2) 3 + 12 = 15 (kg) — total."},
    {q:"3 notebooks at 24 rubles each and a pen for 15 rubles were bought. How many rubles were paid for the whole purchase?", ans:"87", hint:"First find the cost of the notebooks.", sol:"1) 24 · 3 = 72 (rub.) — notebooks. 2) 72 + 15 = 87 (rub.) — total."},
    {q:"Mom bought 5 kg of apples at 68 rubles per kilogram and gave the cashier 400 rubles. How many rubles of change did she get?", ans:"60", hint:"Change = money handed over − cost of the purchase.", sol:"1) 68 · 5 = 340 (rub.) — cost of the apples. 2) 400 − 340 = 60 (rub.) — change."},
    {q:"There are 168 km between two docks. Two boats set out toward each other at the same time, at speeds of 32 km/h and 24 km/h. After how many hours will they meet?", ans:"3", hint:"For motion toward each other, find the closing speed.", sol:"1) 32 + 24 = 56 (km/h) — closing speed. 2) 168 : 56 = 3 (h)."},
    {q:"A pedestrian walks ahead at 4 km/h, and 18 km behind him a cyclist rides at 10 km/h. After how many hours will the cyclist catch up with the pedestrian?", ans:"3", hint:"They're moving the same direction, so the distance shrinks by the difference of the speeds.", sol:"1) 10 − 4 = 6 (km/h) — closing speed. 2) 18 : 6 = 3 (h)."},
    {q:"Three pumps work at the same time, each moving 25 liters of water per minute. How many liters of water will they pump in 8 minutes?", ans:"600", hint:"How many liters do the three pumps move together in 1 minute?", sol:"1) 25 · 3 = 75 (L) — in 1 minute. 2) 75 · 8 = 600 (L) — in 8 minutes."},
    {q:"Dad is 45 years old, and his son is 5 times younger. How old are dad and his son together?", ans:"54", hint:"&ldquo;5 times fewer&rdquo; — which operation?", sol:"1) 45 : 5 = 9 (years) — the son's age. 2) 45 + 9 = 54 (years) — together."},
    {q:"Class 1 has 30 pupils, class 2 has 5 fewer, and class 3 has 2 more than class 2. How many pupils are in the three classes together?", ans:"82", hint:"First find the number of pupils in class 2, then in class 3.", sol:"1) 30 − 5 = 25 (pupils) — class 2. 2) 25 + 2 = 27 (pupils) — class 3. 3) 30 + 25 + 27 = 82 (pupils)."},
    {q:"A can holds 40 liters of milk. The milk was poured into two jars: 3 parts into the first, and 5 of the same parts into the second. How many liters of milk are in the second jar?", ans:"25", hint:"How many parts are there in total, and how much is one part?", sol:"1) 3 + 5 = 8 (parts) — total. 2) 40 : 8 = 5 (L) — one part. 3) 5 · 5 = 25 (L) — in the second jar."},
    {q:"A notebook costs 12 rubles, and a pen costs 5 rubles more than the notebook. Which expression solves the problem &ldquo;How much do 2 notebooks and a pen cost?&rdquo;", opts:["12 · 2 + 12 + 5","12 · 2 + 5","(12 + 5) · 2","12 · 2 + 12 − 5"], ans:0, hint:"First work out how much the pen costs.", sol:"The pen costs 12 + 5 = 17 rubles. Two notebooks cost 12 · 2, so the whole purchase is: 12 · 2 + (12 + 5) = 12 · 2 + 12 + 5. The first option is correct."},
    {q:"Two girls were picking mushrooms. The first found 24 mushrooms, which is 3 times as many as the second found. How many mushrooms did the girls find together?", ans:"32", hint:"The first found 3 times as many — so how many times fewer did the second find?", sol:"1) 24 : 3 = 8 (mushrooms) — found by the second. 2) 24 + 8 = 32 (mushrooms) — together."},
    {q:"Petya has 45 stamps, which is 12 stamps more than Kolya has. How many stamps do the boys have together?", ans:"78", hint:"Kolya has fewer stamps than Petya. By how many?", sol:"1) 45 − 12 = 33 (stamps) — Kolya's. 2) 45 + 33 = 78 (stamps) — together."},
    {q:"Two cars set out toward each other at the same time from two cities 480 km apart. The first car's speed is 70 km/h, and the second's is 20 km/h faster. After how many hours will they meet?", ans:"3", hint:"Find the second car's speed, then the closing speed.", sol:"1) 70 + 20 = 90 (km/h) — the second car's speed. 2) 70 + 90 = 160 (km/h) — closing speed. 3) 480 : 160 = 3 (h)."},
    {q:"One seamstress sews 8 dresses a day. How many days will it take 6 seamstresses to sew 144 dresses?", ans:"3", hint:"How many dresses do 6 seamstresses sew in one day?", sol:"1) 8 · 6 = 48 (dresses) — sewn by all six seamstresses in 1 day. 2) 144 : 48 = 3 (days)."},
    {q:"3 notebooks and 2 pens cost 96 rubles. One pen costs 9 rubles. How many rubles does one notebook cost?", ans:"26", hint:"How much do the pens cost? How much money is left for the notebooks?", sol:"1) 9 · 2 = 18 (rub.) — two pens. 2) 96 − 18 = 78 (rub.) — three notebooks. 3) 78 : 3 = 26 (rub.) — one notebook."},
    {q:"A store had 5 crates of apples at 18 kg each and 3 crates of pears at 12 kg each. How many kilograms of fruit were in the store?", ans:"126", hint:"First find the mass of the apples and the mass of the pears separately.", sol:"Apples: 5 · 18 = 90 kg. Pears: 3 · 12 = 36 kg. Total: 90 + 36 = 126 kg."},
    {q:"A machinist makes 14 parts per hour. How many hours does he need to make 168 parts?", ans:"12", hint:"Divide the total number of parts by the number of parts per hour.", sol:"168 : 14 = 12 (hours)."},
    {q:"The first crate holds 24 kg of potatoes, the second holds twice as much as the first, and the third holds 15 kg less than the second. How many kilograms of potatoes are in the three crates together?", ans:"105", hint:"First find the mass of potatoes in the second crate, then in the third.", sol:"Second crate: 24 · 2 = 48 kg. Third crate: 48 − 15 = 33 kg. Total: 24 + 48 + 33 = 105 kg."},
    {q:"A cyclist and a motorcyclist set out at the same time from two villages 96 km apart, heading toward each other. The cyclist's speed is 14 km/h, the motorcyclist's speed is 34 km/h. In how many hours will they meet?", ans:"2", hint:"When moving toward each other, speeds add together.", sol:"Closing speed: 14 + 34 = 48 (km/h). Meeting time: 96 : 48 = 2 (h)."},
    {q:"600 rubles can buy 12 identical notebooks. An album costs twice as much as a notebook. How many albums can be bought for the same 600 rubles?", ans:"6", hint:"First find the price of a notebook, then the price of an album.", sol:"1) 600 : 12 = 50 (rub.) — a notebook. 2) 50 · 2 = 100 (rub.) — an album. 3) 600 : 100 = 6 (albums). Answer: 6."},
    {q:"Two cyclists set out from the same village at the same time in opposite directions. The first one's speed is 12 km/h, the second one's is 15 km/h. What distance (in km) will be between them after 3 hours?", ans:"81", hint:"When moving in opposite directions, the distance between them grows each hour by the sum of both speeds.", sol:"1) 12 + 15 = 27 (km/h) — separation speed. 2) 27 · 3 = 81 (km). Answer: 81."},
    {q:"One crew plants 45 trees a day, another plants 35 trees a day. In how many days will the two crews together plant 480 trees?", ans:"6", hint:"How many trees do both crews plant together in one day?", sol:"1) 45 + 35 = 80 (trees) — together per day. 2) 480 : 80 = 6 (days). Answer: 6."},
    {q:"Dima and Sonya have 86 stickers together, and Sonya has 14 more stickers than Dima. How many stickers does Dima have?", ans:"36", hint:"Remove Sonya's extra 14 stickers — then the children would have equal amounts.", sol:"1) 86 − 14 = 72 — this is what it would be if Sonya had as many as Dima. 2) 72 : 2 = 36 (stickers) — Dima's. Check: Sonya has 50, 36 + 50 = 86. Answer: 36."},
    {q:"A compote recipe uses 2 parts cherries and 5 parts apples (by mass). The apples weighed 900 g more than the cherries. How many grams of cherries were used?", ans:"600", hint:"How many more parts are apples than cherries? Those parts correspond to 900 g.", sol:"1) 5 − 2 = 3 (parts) — this is 900 g. 2) 900 : 3 = 300 (g) — one part. 3) 300 · 2 = 600 (g) — cherries. Answer: 600."},
    {q:"A boat traveled for 3 hours at 24 km/h, then for another 2 hours at 30 km/h. Which expression shows the boat's total distance?", opts:["24 · 3 + 30 · 2","(24 + 30) · (3 + 2)","24 · 2 + 30 · 3","(24 + 30) · 5 : 2"], ans:0, hint:"The distance for each leg is its own speed times its own time.", sol:"First leg: 24 · 3 = 72 km, second leg: 30 · 2 = 60 km. Total distance: 24 · 3 + 30 · 2 = 132 km. The other expressions give 270, 138, and 135 — those are wrong."},
    {q:"A cyclist left a village at 12 km/h. Two hours later, a motorcyclist set out after him on the same road at 36 km/h. How many hours after setting out will the motorcyclist catch up with the cyclist?", ans:"1", hint:"First find how many kilometers the cyclist managed to cover while the motorcyclist was still waiting.", sol:"1) 12 · 2 = 24 (km) — the cyclist's head start. 2) 36 − 12 = 24 (km/h) — closing speed. 3) 24 : 24 = 1 (h). Answer: 1."},
    {q:"Lena had 500 rubles. She bought 3 ice creams at 65 rubles each, and with the remaining money bought as many chocolate bars at 45 rubles each as she could. How many chocolate bars did Lena buy?", ans:"6", hint:"Find how much money is left after the ice cream, then divide with a remainder.", sol:"1) 65 · 3 = 195 (rub.). 2) 500 − 195 = 305 (rub.). 3) 305 : 45 = 6 (rem. 35), since 45 · 6 = 270. There's not enough for a seventh bar. Answer: 6."}
  ],
  bonus: {q:"Two shelves hold 60 books. If 6 books are moved from the first shelf to the second, both shelves will have the same number. How many books were on the first shelf to start with?", ans:"36", hint:"How many books will be on each shelf after the move?", sol:"After the move, each shelf has 60 : 2 = 30 books. 6 books were removed from the first shelf, so it started with 30 + 6 = 36 books. Check: the second shelf started with 60 − 36 = 24, 24 + 6 = 30 = 36 − 6."},
  test: [
    {q:"A notebook costs 18 rubles. How many rubles do 7 such notebooks cost?", ans:"126", sol:"18 · 7 = 126 (rub.)."},
    {q:"A train covered 420 km in 6 hours. What speed (in km/h) was it traveling at?", ans:"70", sol:"Speed = distance : time: 420 : 6 = 70 (km/h)."},
    {q:"The distance between two cities is 270 km. Two cars set out toward each other at the same time, at speeds of 55 km/h and 35 km/h. After how many hours will they meet?", ans:"3", sol:"1) 55 + 35 = 90 (km/h) — closing speed. 2) 270 : 90 = 3 (h)."},
    {q:"One box has 15 pencils, and another has 8 more. How many pencils are in the two boxes together?", ans:"38", sol:"1) 15 + 8 = 23 (pencils) — in the second box. 2) 15 + 23 = 38 (pencils)."},
    {q:"A hall has 72 chairs, and a classroom has 3 times fewer. How many chairs are in the hall and the classroom together?", ans:"96", sol:"1) 72 : 3 = 24 (chairs) — in the classroom. 2) 72 + 24 = 96 (chairs)."},
    {q:"A craftsman makes 12 parts in 1 hour. How many hours will it take him to make 108 parts?", ans:"9", sol:"Time = total : &ldquo;per 1 hour&rdquo;: 108 : 12 = 9 (h)."},
    {q:"A ribbon 63 cm long was cut into two pieces. The short piece has 2 parts, the long piece has 7 of the same parts. How many centimeters are in the long piece?", ans:"49", sol:"1) 2 + 7 = 9 (parts) — total. 2) 63 : 9 = 7 (cm) — one part. 3) 7 · 7 = 49 (cm) — the long piece."},
    {q:"A cyclist rides at 18 km/h and is catching up with a pedestrian walking the same direction at 14 km/h. Right now there are 20 km between them. After how many hours will the cyclist catch up with the pedestrian?", ans:"5", sol:"1) 18 − 14 = 4 (km/h) — closing speed. 2) 20 : 4 = 5 (h)."}
  ],
  lab: [
    {t:"A problem from a receipt", b:"Take a store receipt or ask an adult if you can look at price tags. Pick three items bought in several units each and find the cost of each one: price · quantity. Add them up and compare with the total on the receipt. Make up your own &ldquo;two-step&rdquo; problem based on it and solve it."},
    {t:"Measuring your own speed", b:"Mark off 20 steps in a hallway or yard, and time on a phone how many seconds it takes you to walk them at a normal pace. Then run the same distance. Write down both times and find how many times faster running is than walking (divide the bigger time by the smaller). Make up a &ldquo;toward each other&rdquo; problem: you and a friend walk toward each other — how many seconds until you meet?"},
    {t:"Work per minute", b:"Time one minute and in that time fold as many paper airplanes as you can (or sort building blocks into stacks). Write down the number for 1 minute — that's your rate. Work out: how many of these items will you make in 5 minutes? how many minutes will it take to make 30? Check it, then compare with a friend: who has the higher rate, and by how much?"},
    {t:"Splitting into parts", b:"Take 24 candies, dried beans, or buttons. Split them between two people so that one gets 2 parts and the other gets 1 part, by drawing a bar and dividing it into 3 equal parts. Check: how many items are in one part, and how many does each person get? Then make up a similar problem with 30 items, so that one person gets 2 parts and the other gets 3 parts, and solve it first with a diagram, then with operations."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.word4.examples[0].s += "<div class='figure'>__SVG_WORD4_EX0_PRICE__</div>";
CONTENT_EN.word4.examples[1].s += "<div class='figure'>__SVG_WORD4_EX1_PATH__</div>";
CONTENT_EN.word4.examples[2].s += "<div class='figure'>__SVG_WORD4_EX2_MEET__</div>";
CONTENT_EN.word4.examples[3].s += "<div class='figure'>__SVG_WORD4_EX3_CHASE__</div>";
CONTENT_EN.word4.examples[4].s += "<div class='figure'>__SVG_WORD4_EX4_PUMP__</div>";
CONTENT_EN.word4.examples[5].s += "<div class='figure'>__SVG_WORD4_EX5_CLASSES__</div>";
CONTENT_EN.word4.examples[6].s += "<div class='figure'>__SVG_WORD4_EX6_FOURTIMES__</div>";
CONTENT_EN.word4.examples[7].s += "<div class='figure'>__SVG_WORD4_EX7_CANDY__</div>";

CONTENT_EN.word4.steps = [
  {title:"What a word problem is", body:
    "<p>A word problem is a little story with numbers and a question. Many people are afraid of word problems because they start calculating right away, without figuring out what the story is about. A good problem-solver <b>understands</b> first, then calculates. Here's an order that always works.</p>",
    exIdx:0},
  {title:"The step-by-step solution plan", body:
    "<ul><li><b>1. Read</b> the problem and picture what's happening.</li><li><b>2. Find the question</b> — what you need to find out in the end.</li><li><b>3. Write it down briefly</b> or draw a bar diagram: which numbers are known, which is unknown.</li><li><b>4. Draw up a plan</b>: which operation can be done first, and what it gives you.</li><li><b>5. Solve, check, and write down the answer.</b></li></ul>",
    exIdx:0},
  {title:"Price, quantity, cost", body:
    "<h3>Price, quantity, cost</h3><p><b>Price</b> is how much one item costs (or 1 kg, 1 meter). <b>Quantity</b> is how many items were bought. <b>Cost</b> is how much was paid for everything. All three quantities are connected by one &ldquo;triangle&rdquo;: cost = price · quantity. From this, price = cost : quantity, and quantity = cost : price. Watch how this works:</p><div class='figure'>__SVG_WORD4_TRIANGLE_ANIM__</div>"
  },
  {title:"Distance and work: the same idea", body:
    "<p>The other two relationships in the diagram work exactly the same way. <b>Motion:</b> distance = speed · time. A cyclist rides for 3 hours at 14 km/h, so he'll cover 14 · 3 = 42 km. <b>Work:</b> total = (how much is done in 1 hour) · (number of hours). If a craftsman makes 9 parts in an hour, then in 8 hours he'll make 9 · 8 = 72 parts. The number &ldquo;how much is done in 1 hour&rdquo; is called the <b>rate</b>.</p><div class='note'><span class='hand'>Remember</span>The same idea works in all three problems: <b>&ldquo;per one unit&rdquo; · &ldquo;number of units&rdquo; = &ldquo;altogether&rdquo;</b>. If &ldquo;altogether&rdquo; is known and we're looking for one of the parts, we divide.</div>",
    exIdx:[1,4]},
  {title:"Moving toward each other and catching up", body:
    "<h3>Moving toward each other and catching up</h3><p>If two people walk <b>toward each other</b>, we <b>add</b> their speeds: the distance decreases by both speeds at once. If one is <b>catching up</b> with the other (moving the same direction), the distance decreases only by the <b>difference</b> of the speeds. Watch how this works:<div class='figure'>__SVG_WORD4_MEET_ANIM__</div></p>",
    exIdx:[2,3]},
  {title:"Comparing numbers: &ldquo;more/less by&rdquo; and &ldquo;times&rdquo;", body:
    "<h3>Comparing numbers: &ldquo;more/less by&rdquo; and &ldquo;times&rdquo;</h3><p>The words in the problem hint at the operation. &ldquo;<b>More by</b> 9&rdquo; — we add 9, &ldquo;less by 9&rdquo; — we subtract 9. &ldquo;<b>3 times</b> as many&rdquo; — we multiply by 3, &ldquo;3 times fewer&rdquo; — we divide by 3. A bar diagram makes this visible: a bar for &ldquo;more by 9&rdquo; is the same bar plus an extra piece of 9, while &ldquo;3 times as many&rdquo; is three identical bars.</p><div class='figure'>__SVG_WORD4_BARS__</div>",
    exIdx:6},
  {title:"Common mistake: &ldquo;by&rdquo; and &ldquo;times&rdquo;", body:
    "<div class='warn'><span class='hand'>Common mistake</span>Mixing up &ldquo;by&rdquo; and &ldquo;times.&rdquo; The problem &ldquo;3 times fewer&rdquo; means division, not subtraction: if there are 12 red balloons, and blue ones are 3 times fewer, then there are 12 : 3 = 4 blue ones, not 12 − 3. Another trap: &ldquo;the first is more than the second by 5&rdquo; means the second has 5 <b>fewer</b>, and to find it you need to subtract 5 from the first number.</div>",
    exIdx:5},
  {title:"Problems in 2-3 steps", body:
    "<h3>Problems in 2-3 steps</h3><p>In a problem like this, you can't find the answer right away: first you find an &ldquo;in-between&rdquo; number. For example: &ldquo;Class 1 has 28 pupils, class 2 has 4 fewer, and class 3 has 3 more than class 2. How many in total?&rdquo; First step: 28 − 4 = 24 (in class 2). Second: 24 + 3 = 27 (in class 3). Third: 28 + 24 + 27 = 79. Before each step, ask yourself: &ldquo;What am I finding out with this step?&rdquo; That question is exactly the <b>solution plan</b>.</p>",
    exIdx:5},
  {title:"Problems about parts: finding the part", body:
    "<h3>Problems about parts</h3><p>Sometimes a problem says that a whole is split into &ldquo;parts&rdquo;: &ldquo;one sack has 2 parts, another has 3 of the same parts.&rdquo; First find out how many parts there are in total (2 + 3 = 5). Then divide the whole by the number of parts — you'll get one part (45 : 5 = 9). Then multiply by however many parts you need: 9 · 2 = 18 and 9 · 3 = 27.</p><div class='figure'>__SVG_WORD4_PARTS__</div>",
    exIdx:7},
  {title:"Checking the result", body:
    "<p>Always finish with a <b>check</b>: 18 + 27 = 45 — matches the problem. Checking is the best way to avoid mistakes.</p>",
    exIdx:7}
];

CONTENT_EN.geo4 = {
  goal: "After this topic you'll be able to find the perimeter and area of a rectangle, a square, and composite shapes, identify types of angles and triangles, know the radius and diameter of a circle, and name the parts of a cube and a rectangular box.",
  explain: "<p>Geometry is the science of shapes. A sheet of notebook paper, a window, a soccer field, a coin, a box — we're surrounded by shapes. Let's figure out how to measure them and what to call them.</p>"
  + "<h3>Perimeter and area</h3>"
  + "<p><b>Perimeter</b> is the sum of the lengths of all the sides of a shape: how many steps you'd take walking around its edge. For a rectangle, <b>P = (a + b) · 2</b>, for a square, <b>P = a · 4</b>.</p>"
  + "<p><b>Area</b> is how much space a shape takes up; it's measured in little squares with a side of 1 cm: <b>S = a · b</b>, and for a square, <b>S = a · a</b>. Watch how this works:<div class='figure'>__SVG_GEO4_PERIM_AREA_ANIM__</div></p>"
  + "<div class='note'><span class='hand'>Remember</span>Perimeter is the <i>length</i> of a boundary, measured in cm, m, km. Area is the <i>size of a surface</i>, measured in cm², dm², m². We add for perimeter, multiply for area.</div>"
  + "<h3>Units of area</h3>"
  + "<p>1 cm² is a square with a side of 1 cm. And 1 dm² is a square with a side of 1 dm = 10 cm. It has 10 rows of 10 little squares, that is, <b>1 dm² = 100 cm²</b>. In the same way, 1 m² is a square with a side of 10 dm, with 10 · 10 = 100 dm² in it. So <b>1 m² = 100 dm²</b>. (And there are 100 · 100 = 10,000 one-centimeter squares in 1 m².) That's why 3 dm² = 300 cm², and 500 dm² = 5 m².</p>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Thinking there are ten cm² in 1 dm² because there are ten cm in 1 dm. That's true for length, but for area the units are &ldquo;squared&rdquo;: 10 · 10 = 100. Another mistake is multiplying quantities in different units: first convert everything to the same unit (3 dm · 20 cm = 30 cm · 20 cm = 600 cm²).</div>"
  + "<h3>Composite shapes made of rectangles</h3>"
  + "<p>If a shape looks like the letter L, you can cut it into two rectangles and add their areas. Watch how this works:</p>"
  + "<div class='figure'>__SVG_GEO4_COMPOSITE_ANIM__</div>"
  + "<h3>When the area or perimeter is known</h3>"
  + "<p>Area is a · b, so we find the unknown side by dividing: <b>b = S : a</b>. For example, the area is 84 cm², one side is 12 cm, so the other is 84 : 12 = 7 cm. With perimeter it works like this: first find the sum of two neighboring sides, P : 2, then subtract the known one. Perimeter 40 cm, one side 14 cm: 40 : 2 = 20, 20 − 14 = 6 cm.</p>"
  + "<h3>Types of angles</h3>"
  + "<p>An angle is two lines (rays) coming out of a single point. The most important angle is a <b>right angle</b>: a sheet of notebook paper and a carpenter's square both have this angle, and it equals 90°. Anything smaller than a right angle is an <b>acute</b> angle. Bigger than a right angle but smaller than a straight angle is an <b>obtuse</b> angle. And if the sides of the angle lie on the same line, you get a <b>straight</b> angle, equal to 180° — two right angles together.</p>"
  + "<div class='figure'>__SVG_GEO4_ANGLES__</div>"
  + "<h3>Types of triangles</h3>"
  + "<p>Triangles are divided into types by their sides: <b>equilateral</b> (all sides equal), <b>isosceles</b> (two sides equal, called the legs, and the third is the base), <b>scalene</b> (all sides different). And by angles, a triangle can be <b>right</b> — meaning it has a right angle. The same triangle can be described in more than one way: for example, a triangle with sides 3, 4, and 5 cm that has a right angle is both scalene and right at the same time.</p>"
  + "<div class='figure'>__SVG_GEO4_TRIANGLES__</div>"
  + "<div class='note'><span class='hand'>Remember</span>An equilateral triangle is a &ldquo;special&rdquo; isosceles triangle: not just two, but all three of its sides are equal. Its perimeter is found by multiplying: P = a · 3.</div>"
  + "<h3>Circle and disk</h3>"
  + "<p>A circle is drawn with a compass: it's a line, every point of which is the same distance from the center. A <b>disk</b> is the shape inside the circle. A segment from the center to any point on the circle is a <b>radius</b>. A segment through the center connecting two points on the circle is a <b>diameter</b>. A diameter is made of two radii: <b>d = r · 2</b>. If the radius is 6 cm, the diameter is 12 cm; if the diameter is 18 cm, the radius is 9 cm.</p>"
  + "<h3>Cube and rectangular box</h3>"
  + "<p>A shoebox is a rectangular box, and a die (gaming cube) is a cube. Both have <b>6 faces</b> (flat sides), <b>12 edges</b> (lines where two faces meet), and <b>8 vertices</b> (corners). A box's faces are rectangles, and opposite faces are identical. A cube's faces are all equal squares, and all 12 edges are equal.</p>",
  examples: [
    {t:"Find the perimeter and area of a rectangle with sides 12 cm and 5 cm.", s:"Perimeter: P = (12 + 5) · 2 = 17 · 2 = 34 cm. Area: S = 12 · 5 = 60 cm². Don't confuse them: 34 cm is the length of the &ldquo;fence&rdquo; around it, 60 cm² is how many little squares fit inside."},
    {t:"Express 3 dm² in square centimeters, and 500 dm² in square meters.", s:"There are 100 cm² in 1 dm², so 3 dm² = 3 · 100 = 300 cm². There are 100 dm² in 1 m², so 500 dm² = 500 : 100 = 5 m²."},
    {t:"An L-shaped figure is made from a 9 cm by 6 cm rectangle with a 5 cm by 2 cm corner cut out. Find its area.", s:"The big rectangle: 9 · 6 = 54 cm². The cut-out piece: 5 · 2 = 10 cm². The shape's area: 54 − 10 = 44 cm². Check a second way: cut the shape into two parts — a 9 cm by 4 cm strip (36 cm²) and a 4 cm by 2 cm rectangle (8 cm²) — total 36 + 8 = 44 cm². It matches."},
    {t:"A rectangle's area is 84 cm², one side is 12 cm. Find the perimeter of this rectangle.", s:"The other side: 84 : 12 = 7 cm. Perimeter: (12 + 7) · 2 = 19 · 2 = 38 cm."},
    {t:"A rectangle's perimeter is 40 cm, the length is 14 cm. Find the width and the area.", s:"Sum of length and width: 40 : 2 = 20 cm. Width: 20 − 14 = 6 cm. Area: 14 · 6 = 84 cm²."},
    {t:"Identify the type of each angle: 30°, 90°, 100°, 180°.", s:"30° is less than 90° — acute. 90° — right. 100° is more than 90° but less than 180° — obtuse. 180° — straight."},
    {t:"A triangle has sides 5 cm, 5 cm, and 7 cm. What is it called, and what's its perimeter?", s:"Two sides are equal, the third is different — the triangle is isosceles, 7 cm is the base. Perimeter: 5 + 5 + 7 = 17 cm. If all the sides were 5 cm, the triangle would be equilateral and its perimeter would be 5 · 3 = 15 cm."},
    {t:"A circle's diameter is 14 cm. Find the radius. How many edges does a cube have?", s:"A diameter is made of two radii, so the radius is 14 : 2 = 7 cm. A cube has 12 edges: 4 on top, 4 on the bottom, and 4 on the sides."}
  ],
  tasks: [
    {q:"A rectangle's sides are 9 cm and 4 cm. Find its perimeter (in cm).", ans:"26", hint:"Perimeter is the sum of all the sides. A rectangle has two lengths and two widths.", sol:"P = (9 + 4) · 2 = 13 · 2 = 26 cm."},
    {q:"A square's side is 7 cm. Find its area (in cm²).", ans:"49", hint:"A square's area is its side multiplied by itself.", sol:"S = 7 · 7 = 49 cm²."},
    {q:"Which of these angles is acute?", opts:["90°","120°","45°","180°"], ans:2, hint:"An acute angle is smaller than a right angle, and a right angle equals 90°.", sol:"Only 45° is less than 90°. 90° is right, 120° is obtuse, 180° is straight."},
    {q:"How many square centimeters are in 1 square decimeter?", ans:"100", hint:"A square with a side of 1 dm is a square with a side of 10 cm. How many rows of how many little squares does it have?", sol:"1 dm = 10 cm. A square with a side of 10 cm fits 10 · 10 = 100 little squares with a side of 1 cm. So 1 dm² = 100 cm²."},
    {q:"A circle's radius is 6 cm. What is this circle's diameter (in cm)?", ans:"12", hint:"A diameter goes through the center and is made of two radii.", sol:"d = 6 · 2 = 12 cm."},
    {q:"A rectangle's area is 72 cm², one of its sides is 8 cm. Find the other side (in cm).", ans:"9", hint:"Area = length · width. How do you find a missing factor?", sol:"The other side: 72 : 8 = 9 cm. Check: 8 · 9 = 72."},
    {q:"A rectangle's perimeter is 30 cm, one side is 11 cm. Find the neighboring side (in cm).", ans:"4", hint:"First find what the sum of two neighboring sides equals.", sol:"Sum of length and width: 30 : 2 = 15 cm. The other side: 15 − 11 = 4 cm."},
    {q:"How many square decimeters are in 3 square meters?", ans:"300", hint:"1 m² fits 10 · 10 squares with a side of 1 dm.", sol:"1 m² = 100 dm², so 3 m² = 3 · 100 = 300 dm²."},
    {q:"A triangle has sides 6 cm, 6 cm, and 9 cm. What is it called?", opts:["equilateral","isosceles","scalene","obtuse"], ans:1, hint:"Look at how many sides are the same length.", sol:"Two sides of 6 cm are equal, and the third is different. A triangle like this is called isosceles."},
    {q:"How many vertices does a cube have?", ans:"8", hint:"Four vertices on the top face and the same number on the bottom.", sol:"The top face has 4 vertices and the bottom has 4. Total 4 + 4 = 8 vertices."},
    {q:"An isosceles triangle has legs of 7 cm each, and a base of 4 cm. Find the perimeter (in cm).", ans:"18", hint:"There are two legs and one base.", sol:"P = 7 + 7 + 4 = 18 cm."},
    {q:"A square's perimeter is 36 cm. Find its area (in cm²).", ans:"81", hint:"First find the square's side: it has four equal sides.", sol:"Side: 36 : 4 = 9 cm. Area: 9 · 9 = 81 cm²."},
    {q:"A rectangular plot 12 m by 5 m was fenced on all sides, except for a 2 m wide gate opening left without a fence. How many meters of fence were needed?", ans:"32", hint:"Find the whole perimeter, then subtract the gate's width.", sol:"Perimeter: (12 + 5) · 2 = 34 m. A fence isn't needed everywhere: 34 − 2 = 32 m."},
    {q:"A 4 cm by 3 cm rectangle was cut out of the corner of a 10 cm by 6 cm rectangle. Find the area of the remaining shape (in cm²).", ans:"48", hint:"Subtract the area of the cut-out piece from the area of the big rectangle.", sol:"10 · 6 = 60 cm²; 4 · 3 = 12 cm²; 60 − 12 = 48 cm²."},
    {q:"A rectangle's sides are 3 dm and 20 cm. Find its area (in cm²).", ans:"600", hint:"First convert the lengths to the same unit.", sol:"3 dm = 30 cm. S = 30 · 20 = 600 cm²."},
    {q:"A rectangle is made of three identical squares standing in a row. Its area is 75 cm². Find the perimeter of this rectangle (in cm).", ans:"40", hint:"One square's area is 3 times smaller. What number, multiplied by itself, gives this area?", sol:"One square: 75 : 3 = 25 cm², its side is 5 cm. The rectangle is 15 cm by 5 cm. Perimeter: (15 + 5) · 2 = 40 cm."},
    {q:"A rectangle's perimeter is 28 cm, and its length is 4 cm more than its width. Find the width (in cm).", ans:"5", hint:"Half the perimeter is the length plus the width. If you remove the extra 4 cm from the length, both sides become equal.", sol:"Length + width = 28 : 2 = 14 cm. Remove the 4 cm difference: 14 − 4 = 10 cm — that's two widths. Width: 10 : 2 = 5 cm. Length 9 cm, check: (9 + 5) · 2 = 28."},
    {q:"A rectangle's length is 12 cm, width is 6 cm. Find the side of a square with the same perimeter (in cm).", ans:"9", hint:"Find the rectangle's perimeter, then divide it into 4 equal sides of the square.", sol:"P = (12 + 6) · 2 = 36 cm. The square's side: 36 : 4 = 9 cm."},
    {q:"How many 2 cm by 2 cm little squares can be cut from a 10 cm by 6 cm rectangle with no leftovers?", ans:"15", hint:"How many such squares fit along the length, and how many along the width? Or compare the areas.", sol:"Along the length: 10 : 2 = 5 squares, along the width: 6 : 2 = 3. Total 5 · 3 = 15. Check by area: 60 : 4 = 15."},
    {q:"Three identical circles stand in a row, touching each other. Together they take up 36 cm in length. Find the radius of one circle (in cm).", ans:"6", hint:"Each circle takes up its own diameter in length.", sol:"Three diameters take up 36 cm, one diameter: 36 : 3 = 12 cm. The radius is half that: 12 : 2 = 6 cm."},
    {q:"The perimeter of a square is 52 cm. Find the side of this square (in cm).", ans:"13", hint:"A square has four equal sides — divide the perimeter by 4.", sol:"52 : 4 = 13 cm."},
    {q:"A rectangle has sides 14 cm and 9 cm. Find its area (in cm²).", ans:"126", hint:"The area of a rectangle equals the product of its sides.", sol:"14 · 9 = 126 cm²."},
    {q:"Which shape necessarily has all sides equal and all angles right angles?", opts:["Rectangle","Rhombus","Square","Triangle"], ans:2, hint:"A rectangle has right angles but its sides can be different; a rhombus has equal sides but its angles aren't necessarily right angles.", sol:"A rectangle doesn't necessarily have all sides equal, a rhombus doesn't necessarily have right angles, and a triangle only has three sides. All sides equal and all angles right angles happens only for a square."},
    {q:"A figure consists of an 8 cm by 5 cm rectangle with a square of side 5 cm attached to its side. Find the area of the whole figure (in cm²).", ans:"65", hint:"Find the area of the rectangle and the area of the square separately, then add them.", sol:"Rectangle area: 8 · 5 = 40 cm². Square area: 5 · 5 = 25 cm². Total: 40 + 25 = 65 cm²."},
    {q:"A 4 cm square was cut out of the corner of a 10 cm square. Find the perimeter of the remaining figure (in cm).", ans:"40", hint:"Draw the figure. Compare: which boundary segments disappeared, and which new ones appeared instead?", sol:"Cutting out the corner removes two 4 cm segments, but two new 4 cm segments appear in their place. The boundary ends up the same length as the big square's: 10 · 4 = 40 cm. Answer: 40."},
    {q:"A kitchen floor is shaped like a 3 m by 4 m rectangle. It is covered with square tiles with a side of 20 cm. How many tiles are needed?", ans:"300", hint:"Convert the floor dimensions to centimeters and find how many tiles fit along each side.", sol:"3 m = 300 cm, 4 m = 400 cm. Along one side: 300 : 20 = 15 tiles, along the other: 400 : 20 = 20 tiles. Total: 15 · 20 = 300 tiles. Answer: 300."},
    {q:"A wall is shaped like a 5 m by 3 m rectangle, with a 2 m by 1 m window in it. One can of paint covers 4 m². How many cans of paint need to be bought to paint the wall (the window isn't painted)?", ans:"4", hint:"Find the area of the wall without the window. You can't buy part of a can.", sol:"Wall: 5 · 3 = 15 m². Window: 2 · 1 = 2 m². To paint: 15 − 2 = 13 m². 3 cans cover 12 m² — not enough, so a 4th can is needed. Answer: 4."},
    {q:"A right angle was split by a ray into two angles. One of them equals 35°. Find the other angle (in degrees).", ans:"55", hint:"How many degrees are in a right angle?", sol:"A right angle equals 90°. 90 − 35 = 55°. Answer: 55."},
    {q:"The sum of the lengths of all the edges of a cube is 60 cm. Find the length of one edge (in cm).", ans:"5", hint:"How many edges does a cube have? They're all the same length.", sol:"A cube has 12 edges: 4 on top, 4 on the bottom, and 4 vertical. 60 : 12 = 5 cm. Answer: 5."},
    {q:"The diameter of a large circle is 20 cm. Inside it, two identical small circles are drawn: they touch each other, touch the large circle, and their centers lie on one diameter of the large circle. Find the radius of the small circle (in cm).", ans:"5", hint:"Two small diameters together fit exactly into the large diameter.", sol:"Two small diameters = 20 cm, one diameter: 20 : 2 = 10 cm. Radius: 10 : 2 = 5 cm. Answer: 5."},
    {q:"Which statement is true?", opts:["Every square is a rectangle","Every rectangle is a square","An obtuse triangle has two obtuse angles","A diameter is twice as small as a radius"], ans:0, hint:"Recall what properties a rectangle needs, and what properties a square needs.", sol:"A square has all right angles — so it's a rectangle. But a rectangle's sides can be different, so not every rectangle is a square. A triangle can have only one obtuse angle. A diameter is twice as big as a radius, not smaller. The first statement is true."},
    {q:"A rectangle has sides 16 cm and 4 cm. Find the perimeter of a square with the same area (in cm).", ans:"32", hint:"Find the area of the rectangle. What number, multiplied by itself, gives it?", sol:"Area: 16 · 4 = 64 cm². 8 · 8 = 64, so the square's side is 8 cm. Perimeter: 8 · 4 = 32 cm. Answer: 32."}
  ],
  bonus: {q:"A square was cut into two identical rectangles. Each rectangle's perimeter is 24 cm. Find the area of the original square (in cm²).", ans:"64", hint:"If the square's side is a, then each rectangle's sides are a and a : 2. How many times does side a fit into the rectangle's perimeter?", sol:"The rectangle's sides are a and half of a. Its perimeter: a + a + half of a + half of a = three a's. So 3 · a = 24, the square's side a = 8 cm. The rectangles are 8 cm by 4 cm: (8 + 4) · 2 = 24, correct. The square's area: 8 · 8 = 64 cm²."},
  test: [
    {q:"Find the perimeter of a rectangle with sides 15 cm and 8 cm (in cm).", ans:"46", sol:"P = (15 + 8) · 2 = 23 · 2 = 46 cm."},
    {q:"Find the area of a rectangle with sides 12 cm and 7 cm (in cm²).", ans:"84", sol:"S = 12 · 7 = 84 cm²."},
    {q:"How many square centimeters are in 6 dm²?", ans:"600", sol:"1 dm² = 100 cm², so 6 dm² = 6 · 100 = 600 cm²."},
    {q:"A rectangle's perimeter is 44 cm, length is 13 cm. Find the width (in cm).", ans:"9", sol:"Sum of length and width: 44 : 2 = 22 cm. Width: 22 − 13 = 9 cm."},
    {q:"A rectangle's area is 96 cm², length is 12 cm. Find the width (in cm).", ans:"8", sol:"Width: 96 : 12 = 8 cm. Check: 12 · 8 = 96."},
    {q:"How many edges does a cube have?", ans:"12", sol:"4 edges on the top face, 4 on the bottom, and 4 on the sides: 4 + 4 + 4 = 12."},
    {q:"What type is a 135° angle?", opts:["acute","right","obtuse","straight"], ans:2, sol:"135° is more than 90° but less than 180°, so the angle is obtuse."},
    {q:"A shape is made of two rectangles: 7 cm by 3 cm and 4 cm by 5 cm. Find the area of the shape (in cm²).", ans:"41", sol:"7 · 3 = 21 cm²; 4 · 5 = 20 cm²; 21 + 20 = 41 cm²."}
  ],
  lab: [
    {t:"Measure your desk or notebook", b:"Take a ruler and measure the length and width of a notebook in centimeters. Add up all the sides to find the perimeter, then multiply the length by the width to find the area. Check: how many 1 cm by 1 cm squares would fit on the cover? Hint: a grid square in a notebook has a side of 5 mm, so there are 4 grid squares per cm²."},
    {t:"Hunting for angles", b:"Take a carpenter's square or fold a sheet of paper into a &ldquo;corner&rdquo;: you'll get a right angle. Walk around a room and find three angles of each type: acute (the tip of scissors, clock hands at 1 o'clock), right (the corner of a window, a book) and obtuse (an open laptop lid). Hold the square up to them and check yourself. Write down which type of angle turned out to be the most common."},
    {t:"Compass and circle", b:"Draw a circle with a compass, with a radius of 4 cm. Draw a diameter in it and measure it with a ruler. What did you get? Draw another diameter in a different direction and check that it's also 8 cm. Then cut out the disk, fold it in half, and fold it in half again: where did the fold lines meet? That's the center of the disk."},
    {t:"A box is a rectangular prism", b:"Find an empty box (from tea or shoes). Count with your finger and write down: how many faces, edges, and vertices it has. Check that opposite faces are identical: measure them with a ruler. Then measure the length, width, and height, and work out how many centimeters of ribbon you'd need to wrap around all 12 edges: 4 · length + 4 · width + 4 · height."},
    {t:"Drawing a floor plan of your room", b:"Measure the length and width of your room with a tape measure and find its perimeter and area in m². Draw a plan in your notebook: 1 grid square = 50 cm. Add a door and a window to it. Work out how many meters of baseboard you'd need (perimeter without the door) and how many square meters of carpet would fit on the floor."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.geo4.examples[0].s += "<div class='figure'>__SVG_GEO4_EX0_RECTPERIMAREA__</div>";
CONTENT_EN.geo4.examples[1].s += "<div class='figure'>__SVG_GEO4_EX1_UNITS__</div>";
CONTENT_EN.geo4.examples[2].s += "<div class='figure'>__SVG_GEO4_EX2_GSHAPE__</div>";
CONTENT_EN.geo4.examples[3].s += "<div class='figure'>__SVG_GEO4_EX3_FINDPERIM__</div>";
CONTENT_EN.geo4.examples[4].s += "<div class='figure'>__SVG_GEO4_EX4_FINDWIDTH__</div>";
CONTENT_EN.geo4.examples[5].s += "<div class='figure'>__SVG_GEO4_EX5_ANGLETYPES__</div>";
CONTENT_EN.geo4.examples[6].s += "<div class='figure'>__SVG_GEO4_EX6_ISOTRI__</div>";
CONTENT_EN.geo4.examples[7].s += "<div class='figure'>__SVG_GEO4_EX7_CIRCLECUBE__</div>";

CONTENT_EN.geo4.steps = [
  {title:"What geometry is", body:
    "<p>Geometry is the science of shapes. A sheet of notebook paper, a window, a soccer field, a coin, a box — we're surrounded by shapes. Let's figure out how to measure them and what to call them.</p>",
    exIdx:[0]},
  {title:"Perimeter and area", body:
    "<h3>Perimeter and area</h3><p><b>Perimeter</b> is the sum of the lengths of all the sides of a shape: how many steps you'd take walking around its edge. For a rectangle, <b>P = (a + b) · 2</b>, for a square, <b>P = a · 4</b>.</p><p><b>Area</b> is how much space a shape takes up; it's measured in little squares with a side of 1 cm: <b>S = a · b</b>, and for a square, <b>S = a · a</b>. Watch how this works:<div class='figure'>__SVG_GEO4_PERIM_AREA_ANIM__</div></p><div class='note'><span class='hand'>Remember</span>Perimeter is the <i>length</i> of a boundary, measured in cm, m, km. Area is the <i>size of a surface</i>, measured in cm², dm², m². We add for perimeter, multiply for area.</div>"},
  {title:"Units of area", body:
    "<h3>Units of area</h3><p>1 cm² is a square with a side of 1 cm. And 1 dm² is a square with a side of 1 dm = 10 cm. It has 10 rows of 10 little squares, that is, <b>1 dm² = 100 cm²</b>. In the same way, 1 m² is a square with a side of 10 dm, with 10 · 10 = 100 dm² in it. So <b>1 m² = 100 dm²</b>. (And there are 100 · 100 = 10,000 one-centimeter squares in 1 m².) That's why 3 dm² = 300 cm², and 500 dm² = 5 m².</p><div class='warn'><span class='hand'>Common mistake</span>Thinking there are ten cm² in 1 dm² because there are ten cm in 1 dm. That's true for length, but for area the units are &ldquo;squared&rdquo;: 10 · 10 = 100. Another mistake is multiplying quantities in different units: first convert everything to the same unit (3 dm · 20 cm = 30 cm · 20 cm = 600 cm²).</div>",
    exIdx:[1]},
  {title:"Composite shapes made of rectangles", body:
    "<h3>Composite shapes made of rectangles</h3><p>If a shape looks like the letter L, you can cut it into two rectangles and add their areas. Watch how this works:</p><div class='figure'>__SVG_GEO4_COMPOSITE_ANIM__</div>",
    exIdx:[2]},
  {title:"When the area or perimeter is known", body:
    "<h3>When the area or perimeter is known</h3><p>Area is a · b, so we find the unknown side by dividing: <b>b = S : a</b>. For example, the area is 84 cm², one side is 12 cm, so the other is 84 : 12 = 7 cm. With perimeter it works like this: first find the sum of two neighboring sides, P : 2, then subtract the known one. Perimeter 40 cm, one side 14 cm: 40 : 2 = 20, 20 − 14 = 6 cm.</p>",
    exIdx:[3,4]},
  {title:"Types of angles", body:
    "<h3>Types of angles</h3><p>An angle is two lines (rays) coming out of a single point. The most important angle is a <b>right angle</b>: a sheet of notebook paper and a carpenter's square both have this angle, and it equals 90°. Anything smaller than a right angle is an <b>acute</b> angle. Bigger than a right angle but smaller than a straight angle is an <b>obtuse</b> angle. And if the sides of the angle lie on the same line, you get a <b>straight</b> angle, equal to 180° — two right angles together.</p><div class='figure'>__SVG_GEO4_ANGLES__</div>",
    exIdx:[5]},
  {title:"Types of triangles", body:
    "<h3>Types of triangles</h3><p>Triangles are divided into types by their sides: <b>equilateral</b> (all sides equal), <b>isosceles</b> (two sides equal, called the legs, and the third is the base), <b>scalene</b> (all sides different). And by angles, a triangle can be <b>right</b> — meaning it has a right angle. The same triangle can be described in more than one way: for example, a triangle with sides 3, 4, and 5 cm that has a right angle is both scalene and right at the same time.</p><div class='figure'>__SVG_GEO4_TRIANGLES__</div><div class='note'><span class='hand'>Remember</span>An equilateral triangle is a &ldquo;special&rdquo; isosceles triangle: not just two, but all three of its sides are equal. Its perimeter is found by multiplying: P = a · 3.</div>",
    exIdx:[6]},
  {title:"Circle and disk", body:
    "<h3>Circle and disk</h3><p>A circle is drawn with a compass: it's a line, every point of which is the same distance from the center. A <b>disk</b> is the shape inside the circle. A segment from the center to any point on the circle is a <b>radius</b>. A segment through the center connecting two points on the circle is a <b>diameter</b>. A diameter is made of two radii: <b>d = r · 2</b>. If the radius is 6 cm, the diameter is 12 cm; if the diameter is 18 cm, the radius is 9 cm.</p>",
    exIdx:[7]},
  {title:"Cube and rectangular box", body:
    "<h3>Cube and rectangular box</h3><p>A shoebox is a rectangular box, and a die (gaming cube) is a cube. Both have <b>6 faces</b> (flat sides), <b>12 edges</b> (lines where two faces meet), and <b>8 vertices</b> (corners). A box's faces are rectangles, and opposite faces are identical. A cube's faces are all equal squares, and all 12 edges are equal.</p>",
    exIdx:[7]}
];

CONTENT_EN.frac4 = {
  goal: "After this topic you'll be able to read and write fractions, compare them, add and subtract fractions with the same denominator, and find a fraction of a number and a number from its fraction.",
  explain: "<p>What do you do if a pie needs to be split between four friends? Each person gets a <i>part</i> of the pie. Shares and fractions were invented exactly for parts like this.</p>"
  + "<h3>What a share is</h3>"
  + "<p>Take a whole: an apple, a chocolate bar, a segment, the number 20. Split it into several <b>equal</b> parts. Each such part is a <b>share</b>. If the whole is split into 2 equal parts, each one is a half, that is, {1|2}. Into 4 equal parts — a quarter, {1|4}. Into 5 parts — one fifth, {1|5}, and so on. The key word here is &ldquo;equal&rdquo;: if the pieces are different sizes, you can't call them shares.</p>"
  + "<h3>What a fraction is</h3>"
  + "<p>Often we take not just one share, but several. Then we get a <b>fraction</b>. Look at the diagram: a strip was split into 8 equal parts and 3 of them were colored in. {3|8} of the strip is colored (read as &ldquo;three eighths&rdquo;).</p>"
  + "<div class='figure'>__SVG_FRAC4_PARTS__</div>"
  + "<p>A fraction is written as two numbers with a line between them. The number below the line is the <b>denominator</b>: it shows how many equal parts the whole was split into. The number above the line is the <b>numerator</b>: it shows how many of those parts were taken. The fraction's line stands in for a division sign: {3|8} = 3 : 8.</p>"
  + "<div class='note'><span class='hand'>Remember</span>The denominator is the <i>name</i> of the shares (fifths, sevenths, tenths), and the numerator is <i>how many</i> of them there are. A whole equals a fraction whose numerator and denominator are the same: {5|5} = 1, {12|12} = 1.</div>"
  + "<h3>Comparing fractions</h3>"
  + "<p><b>1) Same denominators.</b> The parts are the same size, so the fraction with more parts — that is, the bigger numerator — is bigger. {5|9} is bigger than {2|9}, because 5 parts is more than 2 parts of the same size.</p>"
  + "<p><b>2) Same numerators.</b> There are the same number of parts, but different sizes. The more parts a whole is cut into, the smaller each part is. So the fraction with the <b>bigger denominator is smaller</b>: {1|8} is less than {1|3}, {3|10} is less than {3|5}. Think of pizza: one eighth is smaller than one third. In the diagram above you can see that the shares {1|2}, {1|3}, {1|4}, {1|5} get shorter and shorter.</p>"
  + "<h3>Adding and subtracting with the same denominator</h3>"
  + "<p>Adding and subtracting fractions with the same denominator is easy: the denominator doesn't change, only the numerator changes. Subtraction: {7|8} − {3|8} = {4|8}. If the sum comes to as many parts as the whole has, it's a whole number: {3|7} + {4|7} = {7|7} = 1. Watch how this works:</p><div class='figure'>__SVG_FRAC4_ADDSUB_ANIM__</div>"
  + "<div class='warn'><span class='hand'>Common mistake</span>Adding the denominators too: {2|9} + {5|9} = {7|18}. That's not allowed! You're not recounting how many parts the pie was cut into — you're only counting how many pieces you now have. The denominator stays 9.</div>"
  + "<h3>A fraction of a number, and a number from its fraction</h3>"
  + "<p>How do you find {1|5} of 45? Split 45 into 5 equal parts: 45 : 5 = 9. So one fifth of 45 is 9. And to find {3|5} of 20 — look at the diagram:</p>"
  + "<p>It can also work the other way: a part is known, and you need to find the whole number. If {1|4} of a number equals 12, then there are 4 such parts in total, so the number equals 12 · 4 = 48.</p>"
  + "<div class='figure'>__SVG_FRAC4_OF_NUMBER_ANIM__</div>"
  + "<p>Rule: <b>to find a fraction of a number, divide the number by the denominator</b> (that gives one share), <b>then multiply by the numerator</b>. To find the number from its fraction, you do the opposite: divide the known part by the numerator, then multiply by the denominator.</p>"
  + "<h3>Proper and improper fractions, the number line</h3>"
  + "<p>A fraction that's less than a whole is called <b>proper</b>: its numerator is less than its denominator, for example {2|5} or {7|9}. A fraction whose numerator equals or exceeds its denominator is called <b>improper</b>: {5|5}, {7|5}, {9|4}. It equals 1 or more than 1. For now, you just need to remember these names — we won't be doing operations with them yet.</p>"
  + "<p>Fractions can be marked on a number line. Take the unit segment from 0 to 1 and split it into 5 equal parts. The first mark is {1|5}, the second is {2|5}, the fifth lands on the point 1, and after that we go past the unit: {7|5} sits two fifths to the right of 1.</p>"
  + "<div class='figure'>__SVG_FRAC4_LINE__</div>",
  examples: [
    {t:"A circle was split into 10 equal parts and 7 were colored in. Write the fraction, name the numerator and the denominator.", s:"{7|10} of the circle is colored (seven tenths). The denominator 10 is how many parts the circle was split into, the numerator 7 is how many parts were colored."},
    {t:"Compare the fractions: {4|9} and {7|9}; {2|5} and {2|3}.", s:"The first pair has the same denominators, so the one with the bigger numerator is bigger: {4|9} is less than {7|9}. The second pair has the same numerators. Fifths are smaller than thirds, so {2|5} is less than {2|3}."},
    {t:"Find the values: {5|12} + {7|12}; {8|11} − {3|11}.", s:"We keep the denominator the same. {5|12} + {7|12} = {12|12} = 1, because all 12 parts were taken. {8|11} − {3|11} = {5|11}."},
    {t:"Find {1|5} of 45 and {3|5} of 20.", s:"One fifth of 45: 45 : 5 = 9. For {3|5} of 20, first find one fifth: 20 : 5 = 4, then take 3 of those parts: 4 · 3 = 12."},
    {t:"{3|7} of a number equals 18. Find this number.", s:"Three sevenths equal 18, so one seventh equals 18 : 3 = 6. The whole number is 7 such shares: 6 · 7 = 42. Check: {3|7} of 42: 42 : 7 = 6, 6 · 3 = 18."},
    {t:"Which of the fractions {3|5}, {5|5}, {7|4}, {2|9}, {9|8} are proper, and which aren't?", s:"The proper ones are those whose numerator is less than the denominator: {3|5} and {2|9}. Improper: {5|5} (equals 1), {7|4} and {9|8} (more than 1)."},
    {t:"A box has 24 candies. One eighth of the candies was given away, and three eighths were eaten. How many candies are left?", s:"One eighth of 24: 24 : 8 = 3 candies. 3 were given away, 3 · 3 = 9 were eaten. 24 − 3 − 9 = 12 candies are left. Another way: {1|8} + {3|8} = {4|8} of all the candies were given away or eaten, so {4|8} are left too, that is, 4 · 3 = 12."}
  ],
  tasks: [
    {q:"A pizza was cut into 8 equal slices, and Masha ate 3 slices. What fraction of the pizza did Masha eat? Write it as a fraction.", ans:"3/8", reduced:true, hint:"The denominator is how many parts the pizza was cut into, the numerator is how many parts were taken.", sol:"There are 8 equal parts in total, 3 were taken. That's {3|8} of the pizza."},
    {q:"A whole was split into 12 equal parts and 7 of them were taken. Find the denominator of the resulting fraction.", ans:"12", hint:"The denominator shows how many equal parts the whole was split into.", sol:"The fraction is {7|12}. The denominator is 12, the numerator is 7."},
    {q:"Which of these fractions is the biggest?", opts:["{2|9}","{7|9}","{5|9}","{4|9}"], ans:1, hint:"The denominators are the same. Compare the numerators.", sol:"The denominators are the same, so the fraction with the bigger numerator is bigger. The biggest numerator is 7, so {7|9} is the biggest."},
    {q:"Given the fractions {3|10}, {3|5}, {3|8}, {3|7}, find the denominator of the biggest one.", ans:"5", hint:"The numerators are the same. The more parts a whole is cut into, the smaller the parts.", sol:"The numerators are the same, so the fraction with the smaller denominator is bigger. The smallest denominator is 5, the biggest fraction is {3|5}."},
    {q:"Add: {2|9} + {5|9}. Write the answer as a fraction.", ans:"7/9", reduced:true, hint:"The denominator doesn't change, only the numerators are added.", sol:"{2|9} + {5|9} = {7|9}."},
    {q:"Subtract: {7|8} − {4|8}. Write the answer as a fraction.", ans:"3/8", reduced:true, hint:"We subtract the numerators, the denominator stays the same.", sol:"{7|8} − {4|8} = {3|8}, since 7 − 4 = 3."},
    {q:"Find the value of the sum {3|11} + {8|11}.", ans:"1", hint:"How many elevenths did you get in total? How many elevenths are in a whole?", sol:"{3|11} + {8|11} = {11|11}. That's all 11 parts of the whole, that is, 1."},
    {q:"Find {1|5} of the number 45.", ans:"9", hint:"To find one fifth, divide the number by 5.", sol:"45 : 5 = 9."},
    {q:"Find {3|4} of the number 20.", ans:"15", hint:"First find one fourth, then take 3 of those parts.", sol:"20 : 4 = 5 — one fourth. 5 · 3 = 15."},
    {q:"One sixth of a number equals 7. Find this number.", ans:"42", hint:"The number is made up of 6 such parts.", sol:"The whole number is 6 shares of 7: 7 · 6 = 42."},
    {q:"There are 24 pupils in a class. Two thirds of them go skiing. How many pupils go skiing?", ans:"16", hint:"Find one third of 24, then take two of those parts.", sol:"One third: 24 : 3 = 8. Two thirds: 8 · 2 = 16 pupils."},
    {q:"Tourists covered {3|7} of a route. What fraction of the route is left? Write it as a fraction.", ans:"4/7", reduced:true, hint:"The whole route is {7|7}.", sol:"The whole route is {7|7}. What's left is {7|7} − {3|7} = {4|7}."},
    {q:"How many improper fractions are there among {3|5}, {5|5}, {7|4}, {2|9}, {9|8}?", ans:"3", hint:"An improper fraction is one whose numerator is no less than the denominator.", sol:"Improper: {5|5}, {7|4} and {9|8}. That's three. The fractions {3|5} and {2|9} are proper."},
    {q:"A unit segment on the number line from 0 to 1 is split into 4 equal parts. Point A is 3 more such parts to the right of 1. What fraction with denominator 4 does point A represent? Write it as a fraction.", ans:"7/4", reduced:true, hint:"How many fourths have accumulated from zero to point A? There are 4 in a whole.", sol:"There are 4 fourths up to the whole, plus 3 more fourths after it: 4 + 3 = 7. Point A represents {7|4}."},
    {q:"A book has 96 pages. Anya has read {5|8} of the book. How many pages does she have left to read?", ans:"36", hint:"Find one eighth of the book, then the number of pages read.", sol:"One eighth: 96 : 8 = 12 pages. Pages read: 12 · 5 = 60 pages. Left: 96 − 60 = 36 pages. Or directly: {3|8} is left, and 12 · 3 = 36."},
    {q:"Three fifths of a number equals 27. Find this number.", ans:"45", hint:"First find what one fifth equals.", sol:"One fifth: 27 : 3 = 9. The whole number: 9 · 5 = 45. Check: 45 : 5 = 9, 9 · 3 = 27."},
    {q:"A rope is 60 m long. First {1|4} of the rope was cut off, then another {1|3} of the rope (of the original length). How many meters of rope are left?", ans:"25", hint:"Find separately how many meters were cut off the first and second time.", sol:"{1|4} of 60: 60 : 4 = 15 m. {1|3} of 60: 60 : 3 = 20 m. Cut off in total: 15 + 20 = 35 m. Left: 60 − 35 = 25 m."},
    {q:"Find the value of the sum {2|13} + {7|13} + {4|13}.", ans:"1", hint:"Add up all the numerators, leave the denominator the same.", sol:"2 + 7 + 4 = 13, so the sum equals {13|13} = 1."},
    {q:"Mom gave her daughter {1|5} of her money, and she had 160 rubles left. How many rubles did mom have at first?", ans:"200", hint:"What fraction of the money does mom have left? What's one fifth equal to?", sol:"{4|5} of the money is left, and that's 160 rubles. One fifth: 160 : 4 = 40 rubles. The total was 40 · 5 = 200 rubles. Check: {1|5} of 200 is 40, 200 − 40 = 160."},
    {q:"How many proper fractions are there with denominator 9, if the numerator is a natural number?", ans:"8", hint:"The numerator must be less than the denominator. Start with numerator 1.", sol:"The numerator can be 1, 2, 3, 4, 5, 6, 7, or 8. That's 8 fractions: from {1|9} to {8|9}. The fraction {9|9} equals 1 and is improper."},
    {q:"A cake was cut into 9 equal pieces, and the guests ate 4 pieces. What fraction of the cake did the guests eat? Write it as a fraction.", ans:"4/9", reduced:true, hint:"The denominator is how many pieces the cake was cut into, the numerator is how many pieces were eaten.", sol:"The cake is divided into 9 pieces, 4 of them were eaten: that's {4|9} of the cake."},
    {q:"One seventh of a number equals 8. Find this number.", ans:"56", hint:"The whole number consists of 7 such parts.", sol:"The number: 8 · 7 = 56."},
    {q:"There are 28 students in the class. Three quarters of all the students are top students or good students. How many students in the class are top students or good students?", ans:"21", hint:"First find one quarter of 28, then take three such parts.", sol:"One quarter: 28 : 4 = 7. Three quarters: 7 · 3 = 21 students."},
    {q:"Mom baked 20 pancakes. The children ate {2|5} of all the pancakes. How many pancakes are left?", ans:"12", hint:"First find how many pancakes were eaten, then subtract from the total.", sol:"Eaten: 20 : 5 · 2 = 8 pancakes. Left: 20 − 8 = 12 pancakes."},
    {q:"Petya added {3|10} + {4|10} and got {7|20}. He made a mistake. Find the correct sum and write it as a fraction.", ans:"7/10", hint:"Does the size of the parts change when you add fractions?", sol:"We only add the numerators, the denominator stays the same: {3|10} + {4|10} = {7|10}. Petya shouldn't have added the denominators. Answer: {7|10}.", reduced:true},
    {q:"Hikers need to cover 18 km. On the first day they covered {2|9} of the route, on the second — {4|9} of the route. How many kilometers do they have left to cover?", ans:"6", hint:"Find what fraction of the route is left, or how many kilometers are in one ninth.", sol:"Covered: {2|9} + {4|9} = {6|9}, left: {3|9} of the route. One ninth: 18 : 9 = 2 km. Left: 2 · 3 = 6 km. Answer: 6."},
    {q:"A pool was filled with water to {5|6} — it holds 750 liters. How many more liters need to be added to fill the pool completely?", ans:"150", hint:"750 liters is five sixths. How many liters are in one sixth, and how many sixths are missing?", sol:"One sixth: 750 : 5 = 150 l. {1|6} is missing to make it full, that is, 150 l. Answer: 150."},
    {q:"How many natural numbers can be put in place of □ so that the fraction {□|8} is greater than {3|8} but less than 1?", ans:"4", hint:"With equal denominators, compare the numerators. One whole is {8|8}.", sol:"The numerator must be greater than 3 and less than 8: 4, 5, 6, 7 work. Answer: 4."},
    {q:"Dima did homework for {2|3} of an hour, then went for a walk for {3|4} of an hour. How many minutes in total did the homework and the walk take?", ans:"85", hint:"There are 60 minutes in an hour. Find {2|3} and {3|4} of 60 separately.", sol:"{2|3} of an hour: 60 : 3 · 2 = 40 min. {3|4} of an hour: 60 : 4 · 3 = 45 min. Together: 40 + 45 = 85 min. Answer: 85."},
    {q:"A watermelon weighs 6 kg. How many grams does {3|8} of the watermelon weigh?", ans:"2250", hint:"Convert the mass to grams, find one eighth, then three eighths.", sol:"6 kg = 6,000 g. 6,000 : 8 = 750 g. 750 · 3 = 2,250 g. Answer: 2,250."},
    {q:"In the garden, {3|11} of the area was planted with potatoes, {5|11} with carrots, and the rest with cucumbers. What fraction of the garden is taken up by cucumbers? Write it as a fraction.", ans:"3/11", hint:"The whole garden is {11|11}. First find how much the potatoes and carrots take up together.", sol:"Potatoes and carrots: {3|11} + {5|11} = {8|11}. Cucumbers: {11|11} − {8|11} = {3|11}. Answer: {3|11}.", reduced:true},
    {q:"There are 30 students in the class, {2|5} of them are girls. How many more boys are there in the class than girls?", ans:"6", hint:"Find the number of girls, then the number of boys.", sol:"Girls: 30 : 5 · 2 = 12. Boys: 30 − 12 = 18. 18 − 12 = 6. Answer: 6."}
  ],
  bonus: {q:"A boy read {1|4} of a book, then another 30 pages, and he still had half the book left to read. How many pages are in the book?", ans:"120", hint:"Write a half as {2|4}. What fraction of the book do the 30 pages represent?", sol:"The whole book is {4|4}. {1|4} was read, {2|4} is left, so the 30 pages are {4|4} − {1|4} − {2|4} = {1|4} of the book. One fourth equals 30, so the whole book is 30 · 4 = 120 pages. Check: 120 : 4 = 30, 30 + 30 + 60 = 120."},
  test: [
    {q:"A rectangle is split into 10 equal parts, and 7 parts are colored in. What fraction of the rectangle is colored? Write it as a fraction.", ans:"7/10", reduced:true, sol:"There are 10 parts in total, 7 are colored: that's {7|10}."},
    {q:"Find the sum: {5|13} + {6|13}. Write the answer as a fraction.", ans:"11/13", reduced:true, sol:"{5|13} + {6|13} = {11|13}."},
    {q:"Find the difference: {14|15} − {6|15}. Write the answer as a fraction.", ans:"8/15", reduced:true, sol:"{14|15} − {6|15} = {8|15}, since 14 − 6 = 8."},
    {q:"Find the value of the sum {2|7} + {5|7}.", ans:"1", sol:"{2|7} + {5|7} = {7|7} = 1."},
    {q:"Find {1|9} of 54.", ans:"6", sol:"54 : 9 = 6."},
    {q:"Find {3|8} of 40.", ans:"15", sol:"One eighth: 40 : 8 = 5. Three eighths: 5 · 3 = 15."},
    {q:"One eighth of a number equals 9. Find the number.", ans:"72", sol:"The number is made of 8 shares of 9: 9 · 8 = 72."},
    {q:"Which fraction is the smallest of all?", opts:["{5|12}","{5|7}","{5|9}","{5|11}"], ans:0, sol:"The numerators are the same, so the fraction with the bigger denominator is smaller. The biggest denominator is 12: {5|12} is the smallest."}
  ],
  lab: [
    {t:"Paper fraction", b:"Take a strip of paper 24 grid squares long. Fold it in half and in half again — you'll get four equal parts. Color one part red and write the fraction {1|4}. Then fold an identical strip into 8 parts, color 3, and label it {3|8}. Lay the strips one under the other: which colored part is longer, {1|4} or {3|8}? Check the comparison using the rules."},
    {t:"Splitting evenly", b:"Take 20 identical coins, buttons, or candies. Find {1|5} of 20 by hand: lay them out into 5 equal piles and see how many are in one. Then take 3 piles — what does that give you: {3|5} of 20? Repeat with {1|4} and {3|4}. Write down how you reasoned it out, and check by dividing: 20 : 5 = 4."},
    {t:"A number line from a ruler", b:"Draw a line in your notebook 10 cm long: mark 0 and 1 (10 cm apart). Split the segment into 5 equal parts of 2 cm each and label {1|5}, {2|5}, {3|5}, {4|5}. Then extend the line 6 cm past the unit and mark {6|5}, {7|5}. Which fraction ended up furthest to the right of all the ones marked?"},
    {t:"Fractions in the kitchen", b:"Find the words &ldquo;half,&rdquo; &ldquo;quarter,&rdquo; or &ldquo;third&rdquo; in a recipe or on a package. Take a measuring cup or an ordinary glass and pour water up to the halfway mark, then up to the quarter mark. How many times do you need to add a quarter of a glass to fill it up? Write this as {1|4} + {1|4} + {1|4} + {1|4} = 1."},
    {t:"The family game &ldquo;Find the Share&rdquo;", b:"Write fractions on cards: {1|2}, {1|3}, {1|4}, {1|5}, {3|4}, {2|3}. On other cards write numbers: 12, 20, 24, 30, 60. Draw one card of each kind and find the fraction of the number. Whoever answers correctly first scores a point. For example, {2|3} of 30: 30 : 3 = 10, 10 · 2 = 20."}
  ]
};

/* figures for examples, mirroring the Russian source exactly */
CONTENT_EN.frac4.examples[0].s += "<div class='figure'>__SVG_FRAC4_EX0_CIRCLE710__</div>";
CONTENT_EN.frac4.examples[1].s += "<div class='figure'>__SVG_FRAC4_EX1_COMPARE__</div>";
CONTENT_EN.frac4.examples[2].s += "<div class='figure'>__SVG_FRAC4_EX2_ADDSUB12_11__</div>";
CONTENT_EN.frac4.examples[3].s += "<div class='figure'>__SVG_FRAC4_EX3_OFNUM45_20__</div>";
CONTENT_EN.frac4.examples[4].s += "<div class='figure'>__SVG_FRAC4_EX4_NUMBYSHARE__</div>";
CONTENT_EN.frac4.examples[5].s += "<div class='figure'>__SVG_FRAC4_EX5_PROPERIMPROPER__</div>";
CONTENT_EN.frac4.examples[6].s += "<div class='figure'>__SVG_FRAC4_EX6_CANDYBOX__</div>";

CONTENT_EN.frac4.steps = [
  {title:"Why shares are needed", body:
    "<p>What do you do if a pie needs to be split between four friends? Each person gets a <i>part</i> of the pie. Shares and fractions were invented exactly for parts like this.</p>"
    +"<h3>What a share is</h3><p>Take a whole: an apple, a chocolate bar, a segment, the number 20. Split it into several <b>equal</b> parts. Each such part is a <b>share</b>. If the whole is split into 2 equal parts, each one is a half, that is, {1|2}. Into 4 equal parts — a quarter, {1|4}. Into 5 parts — one fifth, {1|5}, and so on. The key word here is &ldquo;equal&rdquo;: if the pieces are different sizes, you can't call them shares.</p>"
    +"<div class='figure'>__SVG_FRAC4_X1_INTRO__</div>"},
  {title:"What a fraction is", body:
    "<h3>What a fraction is</h3><p>Often we take not just one share, but several. Then we get a <b>fraction</b>. Look at the diagram: a strip was split into 8 equal parts and 3 of them were colored in. {3|8} of the strip is colored (read as &ldquo;three eighths&rdquo;).</p><div class='figure'>__SVG_FRAC4_PARTS__</div><p>A fraction is written as two numbers with a line between them. The number below the line is the <b>denominator</b>: it shows how many equal parts the whole was split into. The number above the line is the <b>numerator</b>: it shows how many of those parts were taken. The fraction's line stands in for a division sign: {3|8} = 3 : 8.</p><div class='note'><span class='hand'>Remember</span>The denominator is the <i>name</i> of the shares (fifths, sevenths, tenths), and the numerator is <i>how many</i> of them there are. A whole equals a fraction whose numerator and denominator are the same: {5|5} = 1, {12|12} = 1.</div>",
    exIdx:0},
  {title:"Comparing fractions with the same denominator", body:
    "<h3>Comparing fractions</h3><p><b>1) Same denominators.</b> The parts are the same size, so the fraction with more parts — that is, the bigger numerator — is bigger. {5|9} is bigger than {2|9}, because 5 parts is more than 2 parts of the same size.</p>"
    +"<div class='figure'>__SVG_FRAC4_X2_SAMEDENOM__</div>"},
  {title:"Comparing fractions with the same numerator", body:
    "<p><b>2) Same numerators.</b> There are the same number of parts, but different sizes. The more parts a whole is cut into, the smaller each part is. So the fraction with the <b>bigger denominator is smaller</b>: {1|8} is less than {1|3}, {3|10} is less than {3|5}. Think of pizza: one eighth is smaller than one third. In the diagram above you can see that the shares {1|2}, {1|3}, {1|4}, {1|5} get shorter and shorter.</p>",
    exIdx:1},
  {title:"Adding and subtracting with the same denominator", body:
    "<h3>Adding and subtracting with the same denominator</h3><p>Adding and subtracting fractions with the same denominator is easy: the denominator doesn't change, only the numerator changes. Subtraction: {7|8} − {3|8} = {4|8}. If the sum comes to as many parts as the whole has, it's a whole number: {3|7} + {4|7} = {7|7} = 1. Watch how this works:</p><div class='figure'>__SVG_FRAC4_ADDSUB_ANIM__</div><div class='warn'><span class='hand'>Common mistake</span>Adding the denominators too: {2|9} + {5|9} = {7|18}. That's not allowed! You're not recounting how many parts the pie was cut into — you're only counting how many pieces you now have. The denominator stays 9.</div>",
    exIdx:2},
  {title:"A fraction of a number", body:
    "<h3>A fraction of a number, and a number from its fraction</h3><p>How do you find {1|5} of 45? Split 45 into 5 equal parts: 45 : 5 = 9. So one fifth of 45 is 9. And to find {3|5} of 20 — look at the diagram:</p>",
    exIdx:3},
  {title:"A number from its fraction", body:
    "<p>It can also work the other way: a part is known, and you need to find the whole number. If {1|4} of a number equals 12, then there are 4 such parts in total, so the number equals 12 · 4 = 48.</p><div class='figure'>__SVG_FRAC4_OF_NUMBER_ANIM__</div>"
    +"<p>Rule: <b>to find a fraction of a number, divide the number by the denominator</b> (that gives one share), <b>then multiply by the numerator</b>. To find the number from its fraction, you do the opposite: divide the known part by the numerator, then multiply by the denominator.</p>",
    exIdx:4},
  {title:"Proper and improper fractions", body:
    "<h3>Proper and improper fractions, the number line</h3><p>A fraction that's less than a whole is called <b>proper</b>: its numerator is less than its denominator, for example {2|5} or {7|9}. A fraction whose numerator equals or exceeds its denominator is called <b>improper</b>: {5|5}, {7|5}, {9|4}. It equals 1 or more than 1. For now, you just need to remember these names — we won't be doing operations with them yet.</p>",
    exIdx:5},
  {title:"Fractions on the number line", body:
    "<p>Fractions can be marked on a number line. Take the unit segment from 0 to 1 and split it into 5 equal parts. The first mark is {1|5}, the second is {2|5}, the fifth lands on the point 1, and after that we go past the unit: {7|5} sits two fifths to the right of 1.</p><div class='figure'>__SVG_FRAC4_LINE__</div>",
    exIdx:6}
];

})();
