// "if / else if /else and switch"

// already comfortable with if , else if and else => skipping it

// --------------------- truthy and falsy values------------

if (0) {
    console.log("truthy")
}
else {
    console.log("falsy")
}

// anything except : false , 0 , "" , null , undefined , NaN.
//  is truthy


// ------------- learning switch -------------


// switch(expression){
//     case value1:
//         // code if expression == value1
//             break;
//     case value2:
//         // code if expression ==value2
//         break;
//     default:
//         // code if no case matches

// }

// ---------------- example -------------------
let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;

    default:
        console.log("Invalid day");
}



// --------------------- The for loop ------------------------
for(let i=0;i<6;i++){
    console.log(`number: ${i}`)
}

// ------------------ The while loop ------------------------
let lives=5
while(lives>0){
    console.log("Playing.....Lives left:"+lives)
    lives-=1
    if(lives==0){
        console.log("YOU ARE DEAD!!!")
    }
}


// printing even numbers till 20
console.log("Printing even numbers till 20: ")
i=0
while(i<=20){
    if(i%2!==0){
        i++;
        continue
    }
    else{
        console.log(i)
    }
    i++;
}

