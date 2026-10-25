// Understanding functions and scope in JavaScript


// the very basic format of writing a function in javaScript :
function greet(){
    console.log("Hello , shivraj suman")
}

function sq(n){
    return n*n;
}


// --------------------------------------------------------------------------------------------

// Writing the same function in different format: 



const add = function(a,b){ // traditional way
    return a+b;
}

const add2 = (a,b)=>{ // arrow
    return a+b;
}

const add3=(a,b)=>a+b; // One liner

// few things about one liner:

const cube=(n=>n**3)
// console.log(cube(3))
const greet1=()=>"hi"; 



