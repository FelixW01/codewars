// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

// 2 pairs of characters per string
// if there is an odd number of characters then replace with _
// string += 2

// 0. 1 | 1, 2
function solution(str){
  let solution = []
   for ( let i = 0; i < str.length; i+=2) {
     if (str[i+1] === undefined) {
        solution.push(str[i] + '_')
      } else {
        solution.push(str[i] + str[i+1])
      }
   }
  return solution
}