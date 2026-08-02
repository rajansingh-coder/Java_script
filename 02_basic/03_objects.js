// Singleton 
// Object.create   //  Object.create ka use karke agar object create hota hai tb singleton object hota hai


// object Literals

const mysymbol = Symbol("add")

const JsUser ={
    name: "Rajan",
    "fullname":"Rajan Singh",
    [mysymbol]:"add",
    age:20,
    location:"Gorakhour",
    email:"rajan@gmail.com",
    isLoggedIn:"False",
    lastLoggeDays:["tuesday","thrusday"]
}

console.log(JsUser.email);    
console.log(JsUser["email"]);  // access the keys in both ways
console.log(JsUser["fullname"]);
console.log(JsUser[mysymbol]);

JsUser.name = "kartikeya"
Object.freeze(JsUser)
JsUser.name = "Singh"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user ");
    
}
JsUser.greetingTwo = function(){
    console.log(`hello JS user ${this.fullname}`);  //this refers to the current object.
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());







