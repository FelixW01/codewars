// Given 5 different teams, which team has the highest overall stats and is most likely to win the battle

// const team1 = {
//   name: "Team Rocket",
//   pokemon: [
//       { name: "Mimiku", atk: 39, def: 20, spdef: 30, spark: 11 },
//       { name: "Charizard", atk: 84, def: 78, spdef: 85, spark: 100 },
//       { name: "Pikachu", atk: 55, def: 40, spdef: 50, spark: 70 },
//       { name: "Gyarados", atk: 125, def: 79, spdef: 100, spark: 81 },
//       { name: "Snorlax", atk: 110, def: 65, spdef: 65, spark: 30 },
//       { name: "Lucario", atk: 110, def: 70, spdef: 70, spark: 90 }
//   ]
// };

// // Team 2
// const team2 = {
//   name: "Team Aqua",
//   pokemon: [
//       { name: "Bulbasaur", atk: 49, def: 49, spdef: 65, spark: 45 },
//       { name: "Squirtle", atk: 48, def: 65, spdef: 64, spark: 43 },
//       { name: "Jigglypuff", atk: 45, def: 20, spdef: 25, spark: 20 },
//       { name: "Eevee", atk: 55, def: 50, spdef: 50, spark: 55 },
//       { name: "Dragonite", atk: 134, def: 95, spdef: 100, spark: 80 },
//       { name: "Mewtwo", atk: 110, def: 90, spdef: 90, spark: 130 }
//   ]
// };

// // Team 3
// const team3 = {
//   name: "Team Magma",
//   pokemon: [
//       { name: "Venusaur", atk: 82, def: 83, spdef: 100, spark: 80 },
//       { name: "Alakazam", atk: 50, def: 45, spdef: 65, spark: 120 },
//       { name: "Gengar", atk: 65, def: 60, spdef: 75, spark: 110 },
//       { name: "Machamp", atk: 130, def: 80, spdef: 85, spark: 55 },
//       { name: "Golem", atk: 120, def: 130, spdef: 85, spark: 45 },
//       { name: "Arcanine", atk: 110, def: 80, spdef: 80, spark: 95 }
//   ]
// };

// // Team 4
// const team4 = {
//   name: "Team Instinct",
//   pokemon: [
//       { name: "Blastoise", atk: 83, def: 100, spdef: 105, spark: 78 },
//       { name: "Alakazam", atk: 50, def: 45, spdef: 65, spark: 120 },
//       { name: "Dragonite", atk: 134, def: 95, spdef: 100, spark: 80 },
//       { name: "Snorlax", atk: 110, def: 65, spdef: 65, spark: 30 },
//       { name: "Mewtwo", atk: 110, def: 90, spdef: 90, spark: 130 },
//       { name: "Gyarados", atk: 125, def: 79, spdef: 100, spark: 81 }
//   ]
// };

// // Team 5
// const team5 = {
//   name: "Team Valor",
//   pokemon: [
//       { name: "Zapdos", atk: 90, def: 85, spdef: 90, spark: 100 },
//       { name: "Moltres", atk: 100, def: 90, spdef: 85, spark: 90 },
//       { name: "Articuno", atk: 85, def: 100, spdef: 95, spark: 90 },
//       { name: "Raikou", atk: 85, def: 75, spdef: 19, spark:1}
// ]
// }

// function compareStats(t1, t2, t3, t4, t5) {
//   let teamArray = [t1, t2, t3, t4, t5]
//   let teamStats = []
//   for (const index in teamArray) {
//     teamStats.push(totalStats(teamArray[index]))
//   }

//   let sortedStats = teamStats.sort((a,b) => b.teamPower-a.teamPower)
//   // console.log(sortedStats)
//   return sortedStats[0]

// }
// function totalStats(pokemonTeam) {
//   let power = {
//     name: '',
//     teamPower: 0,
//   }
//   // console.log(pokemonTeam)
//   for (const pokemon of pokemonTeam.pokemon) {
//     power.teamPower += pokemon.atk + pokemon.def + pokemon.spdef + pokemon.spark
//     power.name = pokemonTeam.name
//   }
//   // console.log(power, '<< power')
//   return power
// }

// console.log(compareStats(team1, team2, team3, team4, team5))


// Find the difference between the least 2 listitems all the way to the greatest and return the total difference
/*
3   4
4   3
2   5
1   3
3   9
3   3
*/

// Instantiate the 2 arrays that will be used as inputs
// create function that takes in 2 arrays as inputs,
// sort the arrays by ascending order
// compare each position in the array, and get the difference
// add up all the differences and return as solution

// let list1 = [3, 4, 2, 1, 3, 3];
// let list2 = [4, 3, 5, 3, 9, 3];
// let distance = 0

// function compareList(l1, l2) {
//   sortedL1 = l1.sort((a,b) => a-b)
//   sortedL2 = l2.sort((a,b) => a-b)

//   for (const index in sortedL1) {
//     distance += Math.abs(sortedL1[index] - sortedL2[index])
//   }
//   console.log(distance, '<<<< distance')
// }

// compareList(list1, list2)


// Find which direction it's going and make sure the values can't be more than 2 numbers away

// function findDir(arr) {
//     let solution = true 
//     for (const index in arr) {
//         console.log(arr[index])
//         // if (arr[index + 1] === undefined) {
//         //     break
//         // }
//         if (Math.abs(arr[index] - arr[index + 1]) > 2) {
//             solution = false
//         }
//     }
//     return solution
// }

// console.log(findDir([1, 3, 5, 17]))


// array of objects, return object of highest price

// let arr = [{
//     price: 300,
//     category: 'home'
// }, {
//     price: 200,
//     category: 'sport'
// }, {
//     price: 500,
//     category: 'home'
// }]

// function findPrice(arr) {
//     let solution = []
//     for (const obj of arr) {
//         if (obj.category === 'home') {
//             // fix it, make it more efficient
//             solution = arr.sort((a,b) => b.price - a.price)
//         }
//     }
//     return solution[0]
// }

// console.log(findPrice(arr))


//Find the first non consecutive number in a given array

// function firstNonConsecutive (arr) {
//     let solution = null
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i]+1 !== arr[i + 1]) {
//               if(arr[i + 1] === undefined) return null
//                 return arr[i + 1]
//             } else {
//                 continue
//             }
//         }
//         return solution
//     }


// Create a function that identifies if the string is a palindrome or not
// function isPalindrome(string) {
//     return string.split('').reverse().join('').toLowerCase() === string.toLowerCase() ? true : false
// }

// console.log(isPalindrome('Civic'))


// Write a function that takes in an object and returns the biggest number along with the name property

// const obj = {
//   name: 'The biggest # is',
//   arr: [1, 6, 5, 10]
// }

// function bigFirst(obj) {
//   const {name, arr} = obj;
//   let sortedArray = arr.sort((a,b) => b-a);
//   let max = sortedArray[0]
//   return `${name} ${max}`
// }