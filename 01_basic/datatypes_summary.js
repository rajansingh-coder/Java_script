// Primitive

// 7 types: String, Number, Boolean, Null, Undefined, Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn= false 
const outsideTemp= null
let userEmail;


const id= Symbol('123');
const anotherid = Symbol('123');

// console.log(id === anotherid);

// const bigNumber= 465699412211n


// Reference (Non primitive)

// Array, Objects, Functions

const hero=["IronMan","Hulk", "SpiderMan"]  //Array


// object

let myobj={               
    name:"Rajan",
    age: 22
}


// function 
 const MyFunction= function(){
    console.log("hello world");
    
 }

 console.log(typeof hero);
 





//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack and Heap memory in  Javascript

// stack(Primitive), Heap (Non-Primitive)


let myYouTubename="Rajan"
let anotherName=myYouTubename
anotherName="Rajan Singh"

console.log(myYouTubename)
console.log(anotherName);


let userOne={
    email:"singh@gamil.com",
    upi:"singh@ybl"
}

let userTwo= userOne

userTwo.email="rajan@email.com"

console.log(userOne.email);
console.log(userTwo.email);




