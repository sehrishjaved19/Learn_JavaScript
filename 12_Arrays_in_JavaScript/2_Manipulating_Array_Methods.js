// Manipulating (Mutable) Array Methods
// These modify the original Array

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(fruits.push("Orange")); //add element at the end
//push() does NOT return the updated array.
//Instead, it returns the new length of the array.
console.log(fruits);

console.log(fruits.pop());// remove the element of last index and returns removed element.
console.log(fruits);

console.log(fruits.shift());// Removes the first element and returns removed element
console.log(fruits);

console.log(fruits.unshift("Apple","Pear","Pine-Apple"));//Adds one or more element at the begining and return new length.
console.log(fruits);

console.log(fruits.reverse());// reverses the order of element.

console.log(fruits.splice(1,1,"Grapes"));//replace  the second element with grape

console.log(fruits.sort());// will order the array alphabetically

//NESTING Arrays
const matrix = [[1,2,3],["Aiman", "Zaid", "Usman"],['A', 'A','A']];
console.log(matrix);


