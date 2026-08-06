const user = {
    username: "Rajan",
    Level: "Human",

    welcomemessage: function () {
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);

    }
}



// user.welcomemessage()
user.username = "Ram"
// user.welcomemessage()
// console.log(this);         // here we in node environment so this line give empty object if we  are run this in browser its global object is window instead of empty object


// when we are running "this" inside the function 

// function chai(){
//     let username ="Rajan"
//     // below line gives the output is undefined because it works only with object. It doesn't work with function  
//     console.log(this.username);      

// }
// chai()

// +++++++++++++++++++++++++++++++ Arrow function +++++++++++++++++++++++++

// chai = function(){
//     let username ="Rajan"
//     console.log(this.username);      
// }

 
//  Here we remove the "function" and after the parenthesis we just use arrow key

const chai = () =>{
    let username ="Rajan"
    console.log(this);      
}

// chai()

//  Add two number using arrow function with "return" and without "return" keyword

// const addtwo = (num1,num2)=>{
//     return num1+num2;                      // if we use curly braces then we should be use return keyword
// }
// console.log(addtwo(23,34))

// now without using "return". It also known as Implicit.

// const addtwo = (num1,num2) => num1+num2

const addtwo = (num1,num2) => (num1+num2)       // if we use parenthesis then we should not be use return keyword
console.log(addtwo(25,45));





