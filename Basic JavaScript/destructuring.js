// =============== destructuring ==================
// it is a shorthand for pulling values out of an array or object and into their own variables
const colours = ["red", "green", "yellow"]
const [color1, color2] = colours // first value got assigned to color1 and the 2nd one to color2
console.log(color1)
console.log(color2)

const product = { name: "Mouse", price: 799 };
const { name, price } = product;
console.log(name)
console.log(price)

// ----------------------------------------------------------------------------------------------
// Can also use destructuring to swap elements

// SWAP1
let a=1;
let b=10;
[a,b]=[b,a]; 
console.log(a)
console.log(b)

// SWAP2 : we can swap two elements in an array
const rang = ["red","green","blue","black","white"];    
[rang[0], rang[rang.length - 1]] = [rang[rang.length - 1], rang[0]];
console.log(rang);

    