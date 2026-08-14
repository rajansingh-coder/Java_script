// for iterate object  we using "for in " instead of " for of//"
const myObject = {
    js: 'javascript',
    py:'python',
    cpp:'c++',
    rb: 'ruby'
}

for (const key in myObject) {
//   console.log(`${key} is shortcut of ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java","cpp" ]

for (const key in programming) {
       console.log(programming[key]);
       
}

const  map = new Map()
map.set('IN', "India")
map.set('JP', "Japan")
map.set('UK', "United Kingdom")
map.set('IN', "India")           // A Map cannot have duplicate keys
map.set('IN', "Bharat")  

for (const key in map) {
   console.log(key);         // map is not iteratable 
}


// =============== IN Simple Words ================

// for of loop =>  Array
// for in Loop => Object