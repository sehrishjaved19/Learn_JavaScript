// for...in loop

//Looping through an Object
const student = {
  name: "Sehrish",
  age: 20,
  course: "Computer Science"
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

//Looping thorugh an array
const fruits = ["Apple", "Banana", "Cherry"];

for (let index in fruits) {
  console.log(index, fruits[index]);
}

// Adding or Counting Object Properties
const person = { name: "Ali", city: "Lahore", age: 22 };
let count = 0;

for (let key in person) {
  count++;
}
console.log(`Total properties: ${count}`);
