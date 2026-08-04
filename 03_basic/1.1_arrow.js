const user = {
    username: "Rajan",
    Level: "Human",

    welcomemessage: function () {
        console.log(`${this.username} , Welcome to website`);
        console.log(this);

    }
}



user.welcomemessage()
user.username = "Ram"
user.welcomemessage()
console.log(this);         // here we in node environment so this line give empty object if we  are run this in browser its global object is window instead of empty object
