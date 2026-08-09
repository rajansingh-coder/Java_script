// ===================== IF======================

const isUserloggedIn = true
const temprature = 30
if(temprature >=30){
    console.log("It very hot");
}
else{
    console.log("Temperature feels normal");
    
}

console.log("This is always execute");


// <, >, <=, >=, ==, !=(not equal to), ===(it return datatype)

if(2 === "2"){
    console.log("executed"); 
}

const score = 200 
if(score >= 100){
    const batsman = "shatak"
    console.log(`batsman make: ${batsman}`); 
}

console.log(`batsman make: ${batsman}`);   // batsman scope within if statement only

const  balance = 456
if(balance > 123){
    console.log("rich")
}

// ==================OR==================
const  balance = 456
if(balance > 123)  console.log("Rich"), console.log("veryy rich");    // we should avoid to write this type of code because its not readable


// ==========================  Nested Condition ==========================
balance =  456213
if(balance < 5000){
    console.log("less than 5000");   
} else if (balance < 12000){
    console.log("less than 12000"); 

} else if (balance < 23000){
    console.log("less than 23000");
    
}
 else{
    console.log("balance is more than u think");
    
 }

//  ============= checking multiple condition ==============

const UserloggedIn =  true
const debitCard = true
const loggedInFromGoogle = false
const  loggedInFromEmail = true

if(UserloggedIn && debitCard){
    console.log("Mans he is not an unemployee guy")  
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user  logged in")
}