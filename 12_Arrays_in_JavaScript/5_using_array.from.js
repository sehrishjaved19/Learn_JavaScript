// `Array.from()` always returns a new array

// Convert a string to an array
const str = "Hello";
const arr = Array.from(str);
console.log(arr); // ["H", "e", "l", "l", "o"]

//=======================

//Convert a Set to an array
const mySet = new Set([1, 2, 3]);
const arr_another = Array.from(mySet);
console.log(arr_another); // [1, 2, 3]

//=======================

//Use a map function while creating the array
const numbers = Array.from([1, 2, 3], x => x * 2);
console.log(numbers); // [2, 4, 6]

//=======================

//Create an array of numbers from 0 to 4
const arr_create = Array.from({ length: 5 }, (_, i) => i);
console.log(arr_create); // [0, 1, 2, 3, 4]
