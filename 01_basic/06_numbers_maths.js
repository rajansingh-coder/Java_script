const score=122;

const balance = new Number(18)
console.log(balance);
console.log(score);

console.log(balance.toString().length);  //its tell the length 
console.log(balance.toFixed(2));         // toFixed(2) in JavaScript is used to format a number with 2 digits after the decimal point.


const value1 = 45.18
console.log(value1.toPrecision(5));   //toPrecision(5) formats a number to 5 significant digits (total meaningful digits).

const value2 = 100000525
console.log(value2.toLocaleString());   // usually adding commas as thousands separators.Default as it US region  

console.log(value2.toLocaleString('en-IN'));  //convert in its India Region 


// +++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-45));     // math.abs always give positive if its already positive then its remain same 
console.log(Math.round(4.8));  // round of the value
console.log(Math.ceil(4.2));   //  Always rounds up.
console.log(Math.floor(5.9));  //  Always rounds down.
console.log(Math.max(5,9,4,8,8,848,846));  
console.log(Math.min(5,9,7,6,6,9,3));  


console.log(Math.random());  // its give the value between 0 and 1 

console.log((Math.random()*6)+1);
console.log(Math.floor(Math.random()*6)+1);


// lets suppose if someone says i need value between 18 and 45 (numbers are includes)

const min =18
const max =36 

console.log ((Math.random()*(max-min)) + min)  


