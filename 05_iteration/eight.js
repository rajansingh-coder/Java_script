const myNum = [1,2,3,4,5]

// const myTotal = myNum.reduce( function(acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
//     return acc + currval  
// }, 0 )

// const myTotal = myNum.reduce((acc, currval) => {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0)

// console.log(myTotal)

// console.log(myTotal);

// Example of shopping cart

const shoppingCart = [
    {

        itemName: "lava 5g",
        price: 18999
    },
    {

        itemName: "Rasmalai",
        price: 30
    },
    {

        itemName: "chole bhature",
        price: 40
    },
    {

        itemName: "kajukatli",
        price: 150
    },
    {

        itemName: "chai",
        price: 10
    },

]

const myTotal = shoppingCart.reduce( (acc, item) => acc + item.price , 0 )
console.log(myTotal);
