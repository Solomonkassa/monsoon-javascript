// # Level 1 Exercises

const { Console } = require("console");

// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'xoraus'
let lastName = 'sal'
let country = 'India'
let city = 'Delhi'
let age = 25;
let isMarried = false
let presentYear = 2022

console.log(typeof (firstName));
console.log(typeof (lastName));
console.log(typeof (country));
console.log(typeof (city));
console.log(typeof (age));
console.log(typeof (isMarried));
console.log(typeof (presentYear));


//  Check if type of '10' is equal to 10

let num1 = 10;
let num2 = '10';

console.log(typeof (num1));
console.log(typeof (num2));

console.log(num1 == num2); // true

let num3 = parseInt('9.8');

console.log(num1 == num3); // false

// 4. Boolean value is either true or false.

//  5.

console.log(4 > 3) // true
console.log(4 >= 3) // true
console.log(4 < 3) // false
console.log(4 <= 3) // false
console.log(4 == 4) // true
console.log(4 === 4) // true
console.log(4 != 4) // false
console.log(4 !== 4) // false
console.log(4 != '4') // false
console.log(4 == '4') // true
console.log(4 === '4') // false

let sen1 = 'python'
let sen2 = 'jargon'

console.log(!(sen1.length == sen2.length)) // had to make it false

// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()


// Use the Date object to do the following activities

/*
What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

const now = new Date()
console.log(now.getFullYear()) // 2020

console.log(now.getMonth());

console.log(now.getDate());

console.log(now.getHours());

console.log(now.getMinutes());

console.log(now.getTime());


// # Exercises: Level 2

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

/*

let lenght = prompt('Enter the length rectangle: ', ' ')
let breadth = prompt('Enter the breadth rectangle:', ' ')

let area = 0.5 * lenght * breadth;

console('The area of rectange is ${area}. It\'s lenght is ${lenght} and breadth is ${breadth} ');

*/

