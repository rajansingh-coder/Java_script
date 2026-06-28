let God = ["shiv", "Ganesh", "Krinshna","Ram"]
const Goddess =  ["Durga","Lakshmi","Parvti"]

God.push(Goddess)
console.log(God);
console.log(God[4][0]);  // array ke array ko access karna

const bhagawan = God.concat(Goddess)  // concat two more array and return new array
console.log(bhagawan);

// Spread Operator

const bhagwan  = [...God, ...Goddess]
console.log(bhagwan);

const Arr = [1,2,3,[5,4,2,7],8,38,[4,5,6,4,[93,94,95]]]

// depth => How many nested levels to flatten.
// Infinity => Flattens all nested levels.

const newArr = Arr.flat(Infinity)  //flat() converts a nested array into a single flat array.

console.log(newArr);


console.log(Array.isArray("Rajan"));
console.log(Array.from("Rajan"));
console.log(Array.from({name: "Rajan"})); // return empty array. If we want array then we should specified  key or  value  

 let score1 = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1,score2,score3));  // Array.of() creates a new array from the given values.
 

