
/**arr is a object ? */

let arr = [0,22,2,3,4,5];
const int_arrr = new Array(2,3,4,5)
const string_arrr = new Array('kasu', 'kasu')
const char_arrr = new Array('k','a','s','u')

// console.log(arr);
// console.log(int_arrr);
// console.log(string_arrr);
// console.log(char_arrr);


// console.log(typeof arr); //object
// console.log(typeof int_arrr); //object
//  console.log(typeof string_arrr); //object
//  console.log(typeof char_arrr); //object


// console.log( typeof arr[1]) //number

// const neww = String(arr[1])
//  console.log(typeof neww) //string

//  arr.push(10)
 
//  arr.push('k','k','k')
//  arr.push(12)
//  console.log(arr);   ///    [ 0,  22, 2,   3,   4, 5,  10, 'k', 'k', 'k', 12]
   
    
   
  

// arr.unshift(9); //add from first and shift all element
// arr.shift();   ///remove from first and shift all element
// arr.shift();
// console.log( arr);

// console.log(arr.includes(2)); // available or not -- true
// // console.log(arr.indexOf(22));  //1
// // console.log(arr.at(1));  //22

// console.log(arr.slice(0,2)); /Used to copy a portion of an array without changing the original array.
// console.log(arr);
// console.log(arr.splice(0,3)); //Used to add, remove, or replace elements in an array. (It modifies the original array.)
// console.log(arr);

arr.splice(1, 1000);  // Inserts at index 1  [ 1000, 22, 2, 3, 4, 5 ]

console.log(arr)



// const array1 = [1, 30, 4, 21, 100000];
// array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]




