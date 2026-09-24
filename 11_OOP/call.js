function SetuserName(username){
    // complex db calls 
    this.username = username
    console.log("function is called");
    
}

function createUser(username,email,passwords){
    SetuserName.call(this,username)

    this.email  =  email
    this.passwords =passwords
}

const hero = new createUser("hero",  "hero@.com", "123456")
console.log(hero);
