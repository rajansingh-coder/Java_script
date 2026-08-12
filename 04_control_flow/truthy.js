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