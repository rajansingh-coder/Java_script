// Interview Question :- Is  PI value can be written as 4 instead of 3.14.... if yes then how if not then why

// No we cannot change the value because it is :-


// {
//   value: 3.141592653589793,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

const PiValue =Object.getOwnPropertyDescriptor(Math, "PI")
console.log(PiValue);

console.log(Math.PI);
Math.PI = 6
console.log(Math.PI);


const RasMalai = {
    price: 30,
    Type: "sweet",
    isAvailable:  true,
    buyRasMalai: function(){
        console.log('thoda mahanga hai!');
        
    }
}

console.log(RasMalai);

console.log(Object.getOwnPropertyDescriptor(RasMalai,"price"));

Object.defineProperty(RasMalai,'price', {
    // writable: false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(RasMalai,"price"));

for (let [key,value] of Object.entries(RasMalai)) {
    if(typeof value !=='function'){
        console.log(`${key}:${value}`);
        
    }
}

