let  a =123
var c = 45

{ }    // this is ( {} ) called  scope

if (true) {
    let a = 10
    const b = 34
    var c = 30
    console.log("Inner Scope is :", a);
    
}

console.log(a);
// console.log(b);   
console.log(c);   // it gives the output from the local scope this is the disadvantage of var


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