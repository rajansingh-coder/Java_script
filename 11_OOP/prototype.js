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
MarvelHero.SuperHero()