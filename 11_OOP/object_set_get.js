const User = {
    _email: 'bit@ac.in',
    _password: '123654',

    get email() {
        return this._email.toUppercase()
    },

    set email(value) {
        this._email = value
    }

}

// we can directly use factory function by this method


const myHero =  Object.create(User)
console.log(myHero.email);
