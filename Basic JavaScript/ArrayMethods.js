// Array Methods

const foods = ["chicken","goat","rabbit","deer","fish"]
console.log(foods[0])
// console.log(food[1])
// console.log(food[2])
// console.log(food[3])
// console.log(food[4])

console.log(foods.length) // length of array

// adding element 
foods.push("crab")
console.log(foods.pop()) //returns last element
foods.unshift(("crab"))
foods.shift() //retruns first element

//--------------------- iterating over an array---------------------
// this is for of loop :-
for(const food of foods){
    console.log(food)
}

// using forEach loop :-
foods.forEach((name,index)=>{ 
    console.log(index+": "+name)
});


//doubling the number from an array numbers:
const numbers = [1,2,3,4,5]

numbers.forEach((number,index,numbers) => {
    numbers[index]=number*2;
})
console.log((numbers));

// counting numbers greater than 10
const arr=[1,2,311,12,2,45,1,0,88,9,66]
const arr2=[]
arr.forEach((value)=>{
    if(value>10){
        console.log(value)
    }
    else{
        arr2.push(value)
    }

})
console.log(arr2)


// calculating sum of all elements
let sum=0
arr.forEach(num=>{
    sum=sum+num;
})
console.log(sum)

// how many times 5 appears
const numList=[1,5,3,2,4,5,1,5,7,8,5,6,9,0]
let count=0
numList.forEach(num=>{
    if(num===5){
        count++;
    }
})

console.log(`Number of times 5 appers = ${count}`)

// find the largest number in numList
let largest=numList[0]
numList.forEach(num=>{
    if(num>largest){
        largest=num;
    }
})
console.log(largest)

// remove duplicates by creating a new Array
const unique=[]
numList.forEach(num=>{
    if(!unique.includes(num)){ // .includes check membership
        unique.push(num)
    }
})
console.log(unique)

