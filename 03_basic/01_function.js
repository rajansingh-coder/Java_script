
// // Function

// // In JavaScript, a function is a block of reusable code that performs a specific task. You can call (invoke) a function whenever you need it, instead of writing the same code multiple times.

// function saymyname() {
//     console.log("Rajan");
//     console.log("Rajan");
//     console.log("Rajan");
//     console.log("Rajan");
//     console.log("Rajan");
//     console.log("Rajan");
// }

// saymyname()

// function addTwoNumber(num1, num2)   // when we make function definition at that time the input we are take is called parameter
// {
//     console.log(num1 + num2);

// }

// addTwoNumber(5, 8)       // while we call the function value is pass is called arguement

// // we can declare the function too 

// const result = addTwoNumber(5,8);
// console.log("result:", result);


// function addTwoNumber(num1, num2)   // when we make function definition at that time the input we are take is called parameter
// {
//     let result =  num1+num2
//     return result

//     return num1 + num2
// }

// addTwoNumber(5, 8)   

// const result = addTwoNumber(5,8);
// console.log("result:", result);

// function LoginUserMessage(username){
//     if(username ===  undefined){
//       console.log("Please Enter Username");
//     return
        
//     }
//     return `${username} just log in `
// }

// console.log(LoginUserMessage("Rajan"))
// console.log(LoginUserMessage())


function calculateCartPrice(...num1){     // ...num1 is rest operator
    return num1
}

console.log(calculateCartPrice(200,120,320));

const user ={
    username: "Rajan",
    level: "Human"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and current level  is ${anyobject.level}`);  
}

// handleObject(user)                 //  Passing an  object 
handleObject({
    username:"Ram",
    level:"God"
})

// Passing an array and returnig the second value of the array 

let myNewArray = [10,34,56,78,23]

function SecondValueOfArray(getarray){
    return getarray[1]
}

 console.log(SecondValueOfArray(myNewArray));
 console.log(SecondValueOfArray([23,36564,54,34,544,56,6534]));
 

  
// Function

// In JavaScript, a function is a block of reusable code that performs a specific task. You can call (invoke) a function whenever you need it, instead of writing the same code multiple times.

function saymyname() {
    console.log("Rajan");
    console.log("Rajan");
    console.log("Rajan");
    console.log("Rajan");
    console.log("Rajan");
    console.log("Rajan");
}

saymyname()

function addTwoNumber(num1, num2)   // when we make function definition at that time the input we are take is called parameter
{
    console.log(num1 + num2);

}

addTwoNumber(5, 8)       // while we call the function value is pass is called arguement

// we can declare the function too 

const result = addTwoNumber(5,8);
console.log("result:", result);


function addTwoNumber(num1, num2)   // when we make function definition at that time the input we are take is called parameter
{
    let result =  num1+num2
    return result

    return num1 + num2
}

addTwoNumber(5, 8)   

const result = addTwoNumber(5,8);
console.log("result:", result);

function LoginUserMessage(username){
    if(username ===  undefined){
      console.log("Please Enter Username");
    return
        
    }
    return `${username} just log in `
}

console.log(LoginUserMessage("Rajan"))
console.log(LoginUserMessage())
