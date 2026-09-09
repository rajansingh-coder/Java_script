// Generate the random Color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hex[(Math.floor(Math.random)*16)]
    }
    return color;

}

let IntervalID;
const colorChange =  function(){
    IntervalID = setInterval(changebgColor,1000);
function changebgColor(){
    document.body.style.backgroundColor = randomColor()
}
}
const stopbgColor = function(){
    clearInterval(IntervalID);

}

document.querySelector('#start').addEventListener('click',colorChange)
document.querySelector('#stop').addEventListener('click',stopbgColor)