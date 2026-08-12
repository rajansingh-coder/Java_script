// for Loop

// structure of for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// print 1 to  12
for (let i = 0; i < 13; i++) {
    const element = i;
    // console.log(i);    
}

// using of if in for loop 

for (let i = 0; i < 11; i++) {
    const element = i;
    if(i === 7){
        // console.log("Thala for a reason");     
    }
    // console.log(i);   
}

// loop  inside loop

for(let i = 1; i<=5; i++){
    for(let j = 1; j<=10;j++){
        console.log(`outer loop ${i},inner loop ${j}`);
        
    }
}

