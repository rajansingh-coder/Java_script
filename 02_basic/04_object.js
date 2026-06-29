// const instauser = new Object()  // singleton object
 const instauser ={}            // Non singleton object
//  console.log(instauser);
 
instauser.id ="123abc"
instauser.name ="sunny"
instauser.isLoggedIn = "Fasle"

// console.log(instauser);

const regularUser = {
    email: "some@gmail.com",
    Fullname:{
        Userfullname: {
            firstname:"Rajan",
            Lastname:"Singh"
        }
    }

}

// console.log(regularUser);
// console.log(regularUser.Fullname.Userfullname.firstname);


// Merging two or more Object

const obj1 = {1:"A", 2: "B"}
const obj2 = {3:"A", 4: "B"}

// const obj3 = {obj1,obj2}    //its gives object inside object

// {} is the target object. It creates a new object, so obj1 and obj2 remain unchanged.
// const obj3 = Object.assign({}, obj1, obj2)  // Object.assign() is used to copy or merge objects.

// Using Spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {

    },
    {

    },
    {
        id: 1,
        email:"Me@gmail.com"
    },
    {
        id: 1,
        email:"Me@gmail.com"
    },
    {

    },
    {

    }
]

console.log(user[3].email);

console.log(instauser);
console.log(Object.keys(instauser));
console.log(Object.values(instauser));
console.log(Object.entries(instauser));   // every keys, value pair becomes single Array

console.log(instauser.hasOwnProperty("name"));    //  checks whether the property present in objects or not 
