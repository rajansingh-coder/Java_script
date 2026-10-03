class User{
    constructor(email,password){
        this.email=email;
        this.password=  password;
    }

    get  password(){
        return this.password.toUpperCase()
    }

    set password(value){
        this.password =  value
    }
}

const  Madhav = new User("madhav@gamil.com", "123654")
console.log(Madhav.password);
