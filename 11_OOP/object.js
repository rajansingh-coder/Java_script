function  multipleBy2(num){
    return num*5
}
multipleBy2.power = 4

console.log(multipleBy2(2));
console.log(multipleBy2.power);
console.log(multipleBy2.prototype);

function createUser(username,score){
    this.username = username
    this.score = score  
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
    
}

const milk = createUser("milk", 60)
const cheese = createUser("cheese", 320)

milk.printMe()