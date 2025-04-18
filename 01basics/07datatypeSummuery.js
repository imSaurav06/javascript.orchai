//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false ///bool
const outsideTemp = null
let userEmail;  //undifinde

const id = Symbol('123')  //typeof == symbol   . It represents a unique and immutable value, mainly used as object keys to avoid property name conflicts
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

// const bigNumber = 3456543576654356754n // typeof undefinde



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // typeof object
let myObj = {
    name: "hitesh",
    age: 22,
}

// const myFunction = function(){  //typeof function is function
//     console.log("Hello world");
// }

console.log(typeof anotherId)

// link for typeof
// https://262.ecma-international.org/5.1/#sec-11.4.3

/************************************
two type of memory type used the data type ...

stack (primitive)  changed in copy value or data

Heap(non-primitive) changed in original value