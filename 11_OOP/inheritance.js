class User {
    constructor (username){
        this.username =  username
    }
    logMe(){
        console.log(`Username is  ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username,email,  password){
        super(username)
        this.email = email
        this.password= password
    }
    addCourse(){
     console.log(`New course is here ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher","123654")
chai.logMe()

const coldCoffee = new User("Cold-Coffee")
coldCoffee.logMe();

console.log(chai === coldCoffee);


