// understanding map function 

// map runs your function on every item and collects the result into a new array of the same length

//  Q. double every number in array numbers

const numbers=[1,2,3,4,45,5,6]

let double = numbers.map(num => { return num * 2 })
console.log(double)

let sq = numbers.map(num => {
    return num ** 2;
})
console.log(sq)

