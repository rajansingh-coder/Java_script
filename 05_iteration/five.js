// forEach loop

const language = ["js", "py",  "ruby", "c++", "cotlin"]

language.forEach( function(val){
    console.log(val);
    
})

// using Arrow function in forEach loop

language.forEach((item) =>{
    console.log(item);
})

function Printme(item){
    console.log(item);   
}
language.forEach(Printme)


language.forEach( (item , index, arr)=>{
    console.log(item, index, arr);
    
} )

let myCoding  =  [
    {
        languageName: "javaScript",
        fileName: "js"
    },
    {
        languageName: "c++",
        fileName: "cpp"
    },
    {
        languageName: "Python",
        fileName: "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
} )