// .reduce() = reduce all elements of an array 
//              to a single value

const price = [12, 24, 122, 30, 45];
const total = price.reduce(sum);
console.log(`$${total}`)

function sum(previuousElement, nextElement) {
    return previuousElement + nextElement;
}
