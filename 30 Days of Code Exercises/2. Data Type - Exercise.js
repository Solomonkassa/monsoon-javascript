// Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.

const { Console } = require("console");

let challenege = '30 Days Of JavaScript';

// Print the string on the browser console using **console.log()

console.log(challenege);

// Print the **length** of the string on the browser console using _console.log()_

console.log(challenege.length);

// Change all the string characters to capital letters using **toUpperCase()** method

console.log(challenege.toUpperCase());

//  Change all the string characters to lowercase letters using **toLowerCase()** method

console.log(challenege.toLowerCase());

//  Cut (slice) out the first word of the string using **substr()** or **substring()** method

console.log(challenege.substring(0, 2));

//  Slice out the phrase _Days Of JavaScript_ from _30 Days Of JavaScript_.

console.log(challenege.substring(3, 21));

// Check if the string contains a word **Script** using **includes()** method

console.log(challenege.includes('Script'));

//  Split the **string** into an **array** using **split()** method

console.log(challenege.split());

// Split the string 30 Days Of JavaScript at the space using **split()** method

console.log(challenege.split(' '));

//  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' **split** the string at the comma and change it to an array.

let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

console.log(companies.split(','));

// Change 30 Days Of JavaScript to 30 Days Of Python using **replace()** method.

console.log(challenege.replace('JavaScript', 'Python'));

//  What is character at index 15 in '30 Days Of JavaScript' string? Use **charAt()** method.

console.log(challenege.charAt(15));

//  What is the character code of J in '30 Days Of JavaScript' string using **charCodeAt()**

console.log(challenege.charCodeAt('J'));

//  Use **indexOf** to determine the position of the first occurrence of **a** in 30 Days Of JavaScript

console.log(challenege.indexOf('a'));

//  Use **lastIndexOf** to determine the position of the last occurrence of **a** in 30 Days Of JavaScript.

console.log(challenege.lastIndexOf('a'));

// Use **indexOf** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**

let sentence = 'You cannot end a sentence with because because because is a conjunction'

console.log(sentence.indexOf('because'));

// Use **lastIndexOf** to find the position of the last occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**

console.log(sentence.lastIndexOf('because'));

// Use **search** to find the position of the first occurrence of the word **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**

console.log(sentence.search('because'));

// Use **trim()** to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

let spaces = '  wow lots of spaces  ';

console.log(spaces.trim());


//  Use **startsWith()** method with the string _30 Days Of JavaScript_ and make the result true

console.log(challenege.startsWith('30'));

// Use **endsWith()** method with the string _30 Days Of JavaScript_ and make the result true

console.log(challenege.endsWith('JavaScript'));

// Use **match()** method to find all the **a**’s in 30 Days Of JavaScript

let string = 'a';
let pattern = /a/gi

console.log(challenege.match(pattern));

// Use **concat()** and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

let stringOne = '30 Days of';
let stringTwo = ' JavaScript';

let fullString = stringOne + stringTwo;

console.log(fullString);

// Use **repeat()** method to print 30 Days Of JavaScript 2 times

console.log(challenege.repeat(2));

// Level 2

// 1.

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// 2.

console.log(' \"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\" ')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let number = 10;

console.log(number);

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let numberTwo = parseFloat('9.8');

console.log(numberTwo);

console.log(Math.ceil(numberTwo));

// Check if 'on' is found in both python and jargon

let s1 = 'Python'
let s2 = 'jargon'

console.log(s1.includes('on'));
console.log(s2.includes('on'));

console.log(s1.match(/on/gi));
console.log(s2.match(/on/gi));

// I hope this course is not full of jargon. Check if jargon is in the sentence.

let stringThree = 'I hope this course is not full of jargon. Check if jargon is in the sentence.'

console.log(stringThree.includes('jargon'));
console.log(stringThree.match(/jargon/gi));

// Generate a random number between 0 and 100 inclusively.

randomNumber = Math.floor(Math.random() * 101);

console.log(randomNumber);


// Generate a random number between 50 and 100 inclusively.



// Generate a random number between 0 and 255 inclusively.

randomNumber = Math.floor(Math.random() * 256);

console.log(randomNumber);

// Access the 'JavaScript' string characters using a random number.


// Use console.log() and escape characters to print the following pattern.

console.log(' 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125 ')

// Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'


let stringFour = 'You cannot end a sentence with because because because is a conjunction'

console.log(stringFour.lastIndexOf('e'));


console.log(stringFour.substring(31, 54));

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';

lovePattern = /Love/gi

console.log(love.match(lovePattern));

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

console.log(stringFour.match(/because/gi));

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentenceTwo = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'



// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

let incomeRegex = /\d+/g;

incomeArray = income.match(incomeRegex);

console.log(incomeArray)

let totalIncome = parseInt(incomeArray[0]) + parseInt(incomeArray[1]) + parseInt(incomeArray[2]);

console.log(totalIncome);