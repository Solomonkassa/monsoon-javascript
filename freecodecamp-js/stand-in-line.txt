function nextInLine(arr, item) {
  // Only change code below this line
  // Your code here

  let queue = arr.push(item);

  let removeItem = arr.shift();

  return removeItem;  // Change this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));