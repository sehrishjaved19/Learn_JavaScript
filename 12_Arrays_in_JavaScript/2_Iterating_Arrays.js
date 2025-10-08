// Array Iterating (for loop)
const fruits = ["Apple", "Banana", "Cherry","Strawberry"];
for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

// Array Iterating (for... of loop)
for (let fruit of fruits) {
  console.log(fruit);
}

// Array Iterating (for...in loop)

for (let index in fruits) {
  console.log(index, fruits[index]);
}

// Array Iterating (forEach loop)
fruits.forEach(function(fruit) {
  console.log(fruit);
});

//Using Arrow Function(forEach loop)
fruits.forEach(fruit => console.log(fruit));