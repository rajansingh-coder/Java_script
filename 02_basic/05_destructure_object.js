const course ={
    courename: "js",
    price:499,
    courseinstructor: "Hitesh Sir"

}

// console.log(course.courseinstructor);

const {courseinstructor = instructure} =  course
console.log(instructor);

// JSON API 

// API = A waiter that brings data between two programs.
// JSON = The language (format) used to send that data.
// JSON API = An API that communicates using JSON.

// In JSON  keys and value both are also in String 
// JASON is look LIke OBject , But JASON dont have object name
{
    "courename": "js",
    "price":499,
    "courseinstructor": "Hitesh Sir"
}