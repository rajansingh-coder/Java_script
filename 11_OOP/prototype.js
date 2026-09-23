// let myName = "Shakti    "
// console.log(myName.trueLength)


let MarvelHero =["IronMan",  "JeanGrey"]

let heroPower ={
    IronMan: "Nanotech",
    JeanGrey: "telekinesis",
    getIronManPower: function(){
        console.log(`IronMan power is ${this.IronMan}`);
        
    }
}

Object.prototype.SuperHero = function(){
    console.log(`SuperHero is present everywhere`);
    
}
Array.prototype.HeySuperHero = function(){
    console.log(`Superhero are on the way`);
    
}
// heroPower.SuperHero()
// MarvelHero.SuperHero()


// Inheritence
const User = function(){
    name: "Vrinda"
    email: "vrinda@gmail.com"
}
const Teacher = function(){
    makevideo:true
}

const TeachingSupport = function(){
    isAvailable = false
}

const TASupport = function(){
    makeAssignment  : "Interview Question"
    fulltime: true
    __proto__:TeachingSupport
}

Teacher.__proto__ = User

// modern Syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)


let SecondUser = "Hi Bhai   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The true length is : ${this.trim().length}`);
    
}

SecondUser.trueLength()
"Rajan".trueLength()
"Kartikeya".trueLength()