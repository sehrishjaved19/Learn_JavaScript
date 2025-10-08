

const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);

console.log(fruits.map(x => x+" G"));// Create a new array after applying a function

console.log(fruits.filter(x => x=="Banana"));// Runs array of elements thst match a condition

console.log(fruits.indexOf("Pear"));//returns 1(the first occurance of "Pear")


const stringNew = fruits.reduce((acc, fruit) => acc + " " + fruit);
console.log(stringNew); //output: Apple Banana Cherry

const num = [1, 2, 3, 4];
console.log(num);// output: [ 1, 2, 3, 4 ]

const newArray = (fruits.concat(num));
console.log(newArray);//output: [ 'Apple', 'Banana', 'Cherry', 1, 2, 3, 4 ]

console.log(fruits.slice(1,2));// it will reture the copy of array containg elements from index1 to 2-1.

console.log(fruits.find(x => x=="Apple"));//output: Apple