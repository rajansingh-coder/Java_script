Dates

let Mydates =new Date()
console.log(Mydates);   // its gives date but not in understandable format

console.log(Mydates.toString());          //	Full date + time + timezone
console.log(Mydates.toDateString());      //    Only the date
console.log(Mydates.toLocaleDateString()); //   date in the local format of your computer or browser.


console.log(typeof Mydates);

let mycreatedate = new Date(2026, 5,8)     //new Date(year, monthIndex(start with 0), day)
console.log(mycreatedate.toDateString());

let newdate = new Date(2026,5,8,4,9)     // new Date(year, month, day, hour, minute)
let newdate = new Date("2026-06-27") ;    
 let newdate = new Date("06-27-2026") ;    
console.log(newdate.toLocaleString());


// timestamp is uses for designing quizes or declare winner according to time (who done the fastes quizes)


let Mytimestamp = Date.now()
console.log(Mytimestamp);           // give value in millisecond
console.log(newdate.getTime());    // changing the date into millisecond for comparison
console.log (Math.floor(Date.now()/1000));   //change the millisecod into second


let createdate = new Date()
console.log(createdate);
console.log(createdate.getMonth() + 5 );
console.log(createdate.getDay());

// string interpolation

`${createdate.getTime()} "and date is" ${createdate.getDate()}`
console.log(createdate);

console.log(createdate.toLocaleString("default",{
    weekday: "narrow"
 
} )
);

