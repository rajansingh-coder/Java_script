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

