const { count } = require("console");
const { copyFileSync } = require("fs");

let arr = Array();
let arr2 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr2.length);
let f = arr2[0];
let m = arr2[3];
let l = arr2[6];

console.log(f, m, l);

// First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let temp = text.replaceAll(',', ' ');

let newText = text.split(' ')

console.log(newText);

console.log(newText.length);

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

console.log(shoppingCart.unshift('Meat'))

// console.log(shoppingCart)

console.log(shoppingCart.push('Sugar'))
// console.log(shoppingCart)

console.log(shoppingCart.splice(4, 1))
// console.log(shoppingCart)

console.log(shoppingCart[3] = 'Green Tea')
console.log(shoppingCart)


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// if (countries.includes('Eithiopia')) {
//     console.log('Ethiopia is Present');
//     else {

//     }
// }

// let num = 3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }


indexOfEithiopia = countries.indexOf('Eithiopia')
check = countries.includes('Eithiopia')

if (indexOfEithiopia === -1) {
  console.log('Ethiopia is not Present')

} else {
  console.log('Eithiopia is present')
}

console.log(countries);

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

fullStack = frontEnd.concat(backEnd)

console.log(fullStack)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

console.log(ages.sort())



