// spread operator = ... allows an iterable such as an 
//                   array or string to be expanded into
//                   separate elements (unpack the elements)

let numbers = [1,2,3,4,5];
let maximum = Math.max(numbers) //this will print NaN as max function doesnt take array as an input
// console.log(maximum)

let maximum2 = Math.max(...numbers)
console.log(maximum2) //spreading the array inside the max function

let minimum = Math.min(...numbers)
console.log(minimum)

let username="Shivraj";
let letters=[...username].join("="); //creating a list of elements using a string and then joining them with "=" in between every character
console.log(letters)

let fruits = ["apple","orange","banana"];
let food = [...fruits,"mango"]; // copying fruits and adding mango in it
console.log(food);

let vegetables =["onion","carrot","spinach","brinjal"];
let supply = [...food,...vegetables , "milk", "egg"];
console.log(supply)//adding food and vegetables + adding egg and milk



// ============= rest operator =============
const add = (...numbers)=>{console.log(numbers)} 
// here ...numbers creates an array out of numbers given
add(10,20,30,40,50,60)


const nums = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = nums;

console.log(first);     // 10
console.log(second);    // 20
console.log(remaining);  // [30, 40, 50]


const user = {
    name: "Shivraj",
    age: 20,
    city: "Pune"
};

const { name, ...details } = user;

console.log(name);     // "Shivraj"
console.log(details);  // { age: 20, city: "Pune" }