const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);


/*merge arr*/ 


// // const allHeros = marvel_heros.concat(dc_heros)  // ["thor", "Ironman", "spiderman","superman", "flash", "batman"]
// // console.log(allHeros);

// //spred operator
// const all_new_heros = [...marvel_heros, ...dc_heros]  //  ["thor", "Ironman", "spiderman","superman", "flash", "batman"]  best

// // console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // add all eliment in one arr[]
console.log(real_another_array);



// console.log(Array.isArray("Hitesh")) // false not an array
// console.log(Array.from("Hitesh")) // convert in array ['H','i','t','e','s','h']
// console.log(Array.from({name: "hitesh"})) // interesting --- empty arr[]

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));