// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

// input is a string
// reverse the string if the word has 5 or more letters
// Only letters and spaces

// reverse the string if the word has 5 or more letters
function spinWords(string) {
  let solution = [];
  
  // for of loop 
  for (const word of string.split(' ')) {
    // if string is equal to or more than 5 letters, and it's more than 1 word
    if (string.length >= 5 && word.split(' ').length > 1) {
      //  push reversed word to solution
      solution.push(word.split('').reverse().join(' '))
      // if word is more than 5 length
  } else if (word.length >= 5) {
    // push reversed word to solution
      solution.push(word.split('').reverse().join(''))
    } else {
      solution.push(word)
   }
  }
  return solution.join(' ')
}