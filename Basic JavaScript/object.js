// Javascript objects 

const products = [
    { name: "Wireless Mouse", price: 799 },
    { name: "Keyboard", price: 999 },
    { name: "Headphones", price: 1499 }
];


console.log(products[0]["name"])
console.log(products[0].price)
console.log(products[0].inStock)

// updating the object
products[0]["inStock"] = false
products[0].price = 899;

console.log(products[0].price)
console.log(products[0].inStock)
// जो मेरे लब पे है शायद वही सदाक़त है
// जो मेरे दिल में है उस हर्फ़ - ए - राएगाँ पे न जा

const p_name = products.map(p => p.name)
console.log(p_name)

const product = { name: "Wireless Mouse", price: 799 }
product.color="red"
// console.log(product)
delete product.color     // => delete function to delete a key:value pair
// console.log(product)

// ------------------------------------- Method & this ----------------------------------------------
// An object can handle more than just values in javaScript , it can store methods.
// A method is simply a function stored as a property. Because it lives on the object, 
// it can act on that object's own data - and the way it reaches that data is keyword this.

const user = {
    name:"Shivraj",
    greet(){
        return "Hi , I'm "+this.name // this is user therefore this.name = user.name
    }
}

console.log(user.greet())

