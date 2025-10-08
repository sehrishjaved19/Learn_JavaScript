//Creating an Array
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
console.log(typeof fruits); //object

//Accessing Elements of Array
const firstfruit = fruits[0];
console.log(firstfruit); //output: Apple
console.log(fruits[1]); // output: Banana
console.log(`Fruit at the index 2 is: ${fruits[2]}`);

//Determining Array Lenght
console.log(`The lenght of the array is: ${fruits.length}`);
fruits.length = 6; // this will add values as undefined for empty space
console.log(fruits);

fruits.length = 3;//will remove extra elements from th end of array (truncating the array)
//ARRAY MUTABILITY
// Modify an Element
fruits[2] = "strawberry";
console.log(fruits);

//Array Methods
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

console.log(fruits.indexOf("Pear"));//returns 1(the first occurance of "Pear")

console.log(fruits.reverse());// reverses the order of element.

console.log(fruits.splice(1,1,"grapes"));//replace  the second element with grape

console.log(fruits.slice(1,2));// it will reture the copy of array containg elements from index1 to 2-1.

console.log(fruits.map(x => x+" G"));// Create a new array after applying a function

console.log(fruits.filter(x => x=="Banana"));// Runs array of elements thst match a condition

//NESTING Arrays
const matrix = [[1,2,3],["Aiman", "Zaid", "Usman"],['A', 'A','A']];
console.log(matrix);


