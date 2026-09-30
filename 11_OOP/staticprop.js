class User {
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`username:${this.username}`);
        
    }

    static createId(){
        return '123654'
    }
}

const hitesh = new User ("Rajan")
console.log(Rajan.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const  android = new Teacher("android", "android@gmail.com")
console.log(android.createId());
