/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/

// Numbers are stored in an array
// Get the numbers out of an array
// add them together

function createPhoneNumber(numbers) {
  let first3 = ''
  let second3 = ''
  let last4 = ''
  
  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      first3 += numbers[i].toString()
    } else if ( i >= 3 && i < 6) {
      second3 += numbers[i].toString()
    } else {
      last4 += numbers[i].toString()
    }
  }
  let solution = `(${first3}) ${second3}-${last4}`
  return solution;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// I Like this problem, it's simple and yet has a level of complexity to it.
// I think the template literal approach I did was a nice touch.