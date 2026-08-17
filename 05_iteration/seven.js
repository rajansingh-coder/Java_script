myNum = [1,2,3,4,5,6]

// adding 10 in all the above array Element

// const newNums = myNum.map( (num) => num + 10 )

// chaining Rule 

const newNums = myNum
                .map( (num) => num*12)
                .map( (num) => num + 2)
                .filter( (num) => num >= 50 )
                

console.log(newNums);
