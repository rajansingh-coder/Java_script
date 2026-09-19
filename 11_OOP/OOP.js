// Object Literals

const user = {
    username: "Madhav",
    password: 1232,
    signIn: true,

    getAllDetails:function(){
        console.log("Got the user all details from the database");
        console.log(`Username:${this.username}`);
        console.log(this);
        
        
    }
}
console.log(user.signIn);
console.log(user.getAllDetails());
console.log(this);


function User(username,password,isLoggedIn){
    this.username = username
    this.password = password
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne =User("Rajan", 12345, false)
// const usertwo =User("Raj", 123, true)

// if we don't use the new key value is overwritten while we console the usertwo 
// so it not happen  we use "new" keyword and it  is a  constructor which give new instances every time  

const userOne =new  User("Rajan", 12345, false)
const usertwo =new User("Raj", 123, true)

console.log(userOne);
console.log(usertwo);


