const promiseOne = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls,  cryptography,netork

    setTimeout(function () {
        console.log("Async  Task Done");
        resolve()
    }, 1000)
})

promiseOne.then(function () {
    console.log("promises  Comnsumes");

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2 is done bro");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Promises 2 is consume");

})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "rajan", email: "example@123.com" })
    });
})
promiseThree.then(function (user) {
    console.log(user);

})

const promisefour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let err = false;
        if (!err) {
            resolve({ username: "rajan", password: "12345" })
        } else {
            reject('Something Went Wrong')
        }
    }, 1000)
})

promisefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);

}).catch(function (err) {
    console.log(err);

}).finally(() => console.log("The promise either be resolve or either be rejected"));

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let err = false;
        if (!err) {
            resolve({ username: "JavaScript", password: "12345" })
        } else {
            reject('JS Went Wrong')
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (err) {
        console.log(err);
    }
}
