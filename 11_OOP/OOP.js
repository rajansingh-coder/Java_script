// Oject Literals

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

