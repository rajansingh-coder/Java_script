let  a =123
var c = 45

{ }    // this is ( {} ) called  scope

if (true) {
    let a = 10
    const b = 34
    var c = 30
    console.log("Inner Scope is :", a);
    
}

// console.log(a);
// console.log(b);   
// console.log(c);   // it gives the output from the local scope this is the disadvantage of var


// =================================
//    Nested Scope 
// =================================

function one (){
    const username = "Rajan"

    function two(){
        const website ="yt"
        console.log(username); 
    }
    // console.log(website);
    two()
}

one()



if(true){
    const username ="Rajan"
    if (username === "Rajan"){
        const website = " YT";
        console.log(username + website);
        
    }
    // console.log(website);  
}

// console.log(username);


// +++++++++++++++++++++++++++++++Interesting +++++++++++++++++++++++++++

addone(10)
function addone(num1){
    return num1+1;
}

addtwo(16)                 //  we Cannot access 'addtwo' before initialization

const addtwo = function(num){
    return num + 2
}

