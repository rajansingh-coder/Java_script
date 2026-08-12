const userEmail = []

if(userEmail){
    console.log("Got user email");
    
}else{
    console.log("don't get user email");
    
}

// Flasy value

// false, 0, -0, BigInt0n, "", null, undefined, NaN

// Truthy value

// "0", 'false', " ", [], {}, function(){}


if(userEmail.length === 0){
    console.log("Array is empty"); 
}

// checking if object is empty or not

const  emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish coalescing operator (??): null undefined

let val1;
// val1 = 3 ?? 73
// val1 = null ?? 8
// val1 = undefined ?? 43
val1 = null ?? 3 ?? 5
console.log(val1);

// Ternary Operator

const bookPrice = 520

bookPrice >= 500 ? console.log("more than 500") : console.log("less than 500");


