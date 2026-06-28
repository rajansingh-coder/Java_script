// Array

let Arr = [1,2,3,4,5,6]
console.log("A", Arr);

const arr1  =  ["shiv","Krishna","vrindavan"]
console.log( "B", arr1[2]);                         // find out the index

let myArr = new Array(1,3,4,6)    //creating the array using new keyword (anathor method to declare array)
console.log( "C", myArr);

Arr.push(8,5);          // add Element at the last of array
Arr.pop()               // remove the element from the last array 
Arr.unshift(12,14)      // add Element at the start of array
Arr.shift()             // remove the element from the start of the array 
console.log(Arr);
console.log(Arr.includes(5)); // if value is present in array thenn return the boolean value
console.log(Arr.indexOf(0));  // If the value is found → it returns its index.Otherwise -1

const NewArr = Arr.join()    // join() converts an array into a string by joining its elements with a separator (comma by default).
console.log(NewArr);

// Slice And Splice 

let myarray = [2,9,3,4,5,6,7]
console.log(myarray.slice(1,5)); // slice() returns a copy of a selected portion of an array without changing the original array. Starting index (included) Ending index (excluded)
console.log(myarray);

// Another method 

let Array = myarray.slice(1,6)
console.log(Array);


console.log(myarray.splice(2,3));  // Removes 3 elements starting from index 2.
console.log(myarray.splice(2,0,45,18));  // Adds 18 and 45 at index 2.

console.log(myarray);




