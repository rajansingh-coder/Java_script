const Name="Rajan"
const repoCount=5
// console.log(Name+repoCount+" value"); //this synstax is outdated so no One use this type of syntax in modern time   

// console.log(`hello my name is ${Name} and my repo count is ${repoCount}`);


const gameName = new String ('Rajan-@-Bit')

// console.log(gameName[5]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const NewString=gameName.substring(0,6)   //in subsstring we don't use negative value since substring ignore the  value and start with 0th position 
console.log(NewString);

const anotherString=gameName.slice(-9,8)   //in slice we can use the negative value 
console.log(anotherString);

const newStringOne = "      rajan     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://rajan.com/rajan%123fromsomewhere"
console.log(url.replace('%123', '%virat18'));
console.log(url.includes('virat'));

console.log(gameName.split('-'));
