const promiseOne = new  Promise(function(resolve,reject) {
    // Do an async task
    // DB calls,  cryptography,netork

    setTimeout(function(){
        console.log("Async  Task Done");
        resolve()     
    }, 1000)
})

promiseOne.then(function(){
    console.log("promises  Comnsumes");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 is done bro");
        resolve()
    },1000)
    
}).then(function(){
    console.log("Promises 2 is consume");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "rajan", email:"example@123.com"})
    });
})
promiseThree.then(function(user){
    console.log(user);
    
})

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err =false;
        if(!err){
            resolve({username:"rajan", password: "12345"})
        }else{
            reject('Something Went Wrong')
        }
    },1000)
})

promisefour.then((user)=> {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(err){
    console.log(err);
    
})