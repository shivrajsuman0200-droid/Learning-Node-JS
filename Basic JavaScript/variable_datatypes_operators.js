// there are 3 ways :
//     let <variable name>   => allows value change 
//     const <variable name> => doesnt allow value change
//     var <variable name> => confusing scope and can be redeclared therefore avoid


let datatypes =

    `
there are the following datatypes in javascript:
    string
    number
    boolean
    null
    undefined
    bigint
    symbol
    object
`

// you can use typeof() function to check the type of function
console.log(typeof (null)) //this is an old bug since 1995 in javascript type of null is returned as object.


//----------------Ternary operators-------------

// writing if else statements in short 
const age = 22;
const status = age >= 18 ? "Adult" : "minor"
console.log(status)


// const <variable> = <condition> ? "if true" : "if false"
// if the codition is true variable will get the first value before colon else second value

