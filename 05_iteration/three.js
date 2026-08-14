// for of 

// ["", "", ""]
// [{}, {}, {}]

const  arr =  [1,3,4,5,23]

for (const element of arr) {
    // console.log(element);  
}


const greetings = "hello world!"
for (const greet of greetings) {
    // console.log(`char :- ${greet}`);
    
}

// Maps

// A Map stores data in key-value pairs: give the output in same order

const  map = new Map()
map.set('IN', "India")
map.set('JP', "Japan")
map.set('UK', "United Kingdom")
map.set('IN', "India")           // A Map cannot have duplicate keys
map.set('IN', "Bharat")          // Here is Key are duplicate but the value are difference so the so it replace the "India" to "Bharat"

// console.log(map);

// calling map function using for of loop 

for (const [key , value] of map) {
    console.log(key, ":-" , value);
    
}

const myObject  = {
    'game1': "MCOC",
    'game2': "COC",
    'game3': "COD"
}

// for (const [key,value] of myObject) {
//     console.log(myObject);             // output: object not iterable we can iterate map using for of but cann't iterate object. there is another method 
    
// }

