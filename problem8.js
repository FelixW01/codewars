// Loop through array to see which one is odd
// hash map? lets try hash map

function findOdd(A) {
  const hashBrown = new Map();
  let solution = 0;
  for (const num of A) {
    // if hashbrown key exist then increment
    if (hashBrown.has(num)) {
      hashBrown.set(num, (hashBrown.get(num) || 0) + 1);
    } 
    // else, add the key value into hashbrown
    else {
      hashBrown.set(num, 1)
    }
  }
  // check if the there are any odd values
  for (const [key, value] of hashBrown) {
    if (value % 2 !== 0) {
        solution = key
    }
    console.log(value, '<<< key')
  }
  return solution;
}

console.log(findOdd([0,1,0,1,0]))