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