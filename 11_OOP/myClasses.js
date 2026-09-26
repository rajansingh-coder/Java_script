// ES6

class Hero{
    constructor(username,email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password} abc`
    }
    changeHeroname(){
        return `${this.username.toUpperCase()}`
    }
}

const myHero = new Hero("IronMan", 'tony@gamil.com', "123654") 
console.log(myHero.encryptPassword());
console.log(myHero.changeHeroname());
