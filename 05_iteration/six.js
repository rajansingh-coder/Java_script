const language = ["js", "py",  "ruby", "c++", "cotlin"]

// Here if we want to return only  js, py, c++ we cannot return using forEach loop
const values =  language.forEach((item) =>  {
    console.log(item);
    return item
    
} )

console.log(values);

// Thats why we use filter 

const myNums =[1,2,3,4,5,6,7,8]

let  newNums = myNums.filter( (num)=> num < 6)
// ================= OR  =====================
let  newNums = myNums.filter( (num)=> {
    return num < 5
})
console.log(newNums);

// doing the same thing using 

const myNums =[1,2,3,4,5,6,7,8]
newNums =[]
myNums.forEach( (num) =>{
    if(num < 5){
        newNums.push(num)
        
    }
} )
// console.log(newNums);



const movies = [
    {
        name: "Inception",
        genre: "Sci-Fi",
        year: 2010
    },
    {
        name: "Interstellar",
        genre: "Sci-Fi",
        year: 2014
    },
    {
        name: "The Dark Knight",
        genre: "Action",
        year: 2008
    },
    {
        name: "Titanic",
        genre: "Romance",
        year: 1997
    },
    {
        name: "3 Idiots",
        genre: "Comedy/Drama",
        year: 2009
    }
];

let userMovie = movies.filter( (movies) => movies.genre === "Sci-Fi")
 userMovie  = movies.filter( (movies) => {return movies.year >= 2000})
console.log(userMovie);
