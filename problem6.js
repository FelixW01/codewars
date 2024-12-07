/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

// function that takes in a number and outputs an array of strings
// input = 1 '*'
// input = 2 '***'
// input = 3 '*****'
// previous input + 2 stars

function towerBuilder(nFloors) {
  let solution = [];
  // Formula to get the base
  const totalWidth = 2 * nFloors - 1;

  // Loop through nFloors
  for (let i = 1; i <= nFloors; i++) {
    /*
    i is current floor number per iteration
    i = 1: 2 * 1 - 1 = 1
    i = 2 : 2 * 2 - 1 = 3 
    i = 3 3: 2 * 3 - 1 = 5 
    This gets the number of * we have to repeat per iteration
    */
    let stars = '*'.repeat(2 * i - 1);
    let spaces = '';

    // for loop to determine how much space we need to create the pyramid look
    // totalWidth = bottom of pyramid
    // stars.length = length of stars per iteration
    // divided by 2 because we need to append half on the left and half on the right side
    const sideSpace = (totalWidth - stars.length) / 2;
    for (let k = 0; k < sideSpace; k++) {
      spaces += ' ';
    }
    
    solution.push(spaces + stars + spaces);
  }

  return solution;
}

console.log(towerBuilder(3))

// This problem was pretty complicated. I got the stars dynamically generated in under 2 minutes but-
// implementing the logic with the to dynamically add the spaces on both sides took me quite a bit.