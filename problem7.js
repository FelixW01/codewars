Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// function that takes in an array of integers
// add it all together and figure out if it's odd or even
// Reduce to add everything up
// figure out if it's odd or even

function oddOrEven(array) {
  let solution = ''
  // reduce to get sum
  let sum = array.reduce((currentVal, nextVal) => 
    currentVal + nextVal, 0,)
  // ternary to figure out even or odd
    sum % 2 === 0 ? solution = 'even' : solution = 'odd'
  
  return solution
}

console.log(oddOrEven([0, 1, 5]))