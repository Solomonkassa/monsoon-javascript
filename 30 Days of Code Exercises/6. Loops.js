// const numbers = [1, 2, 3, 4, 5]
// let sum = 0
// let newArr2 = []
// for(let i = 0; i < numbers.length; i++){
//   newArr2.push(numbers[i] ** 2)
// }

// console.log(newArr2)


// // for of loop

// for (const element of arr) {
//   // code goes here.
// }

// for (const co of countries) {
//   console.log(co.toUpperCase())
// }

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

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/*
let i = 0
while (i < 10) {
  console.log(i)
}

do {
  console.log(i)
} while (i < 10)

*/
let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    console.log(string += "*")
  }
  // newline after each row
  console.log(string += "\n")
}
// printing the string
console.log(string);
