// ✅ What is a Function?
// A function is a reusable block of code that performs a specific task.


// 🔹 Function Declaration (Syntax)
function functionName(parameters) {
  // code block
}

// 🔹 Calling a Function
functionName(arguments);


// 🔹 Function Categories

// Parameterized Function
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // Output: 7

// Non-Parameterized Function
function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!


// 🔹 Parameters vs Arguments
function multiply(x, y) { // x and y are parameters
  return x * y;
}
console.log(multiply(2, 3)); // 2 and 3 are arguments // Output: 6


// 🔹 Function Declaration
function greetPerson(name) {
  return "Hello, " + name;
}
console.log(greetPerson("Sehrish")); // Output: Hello, Sehrish


// 🔹 Function Expression
const greetUser = function(name) {
  return "Hello, " + name;
};
console.log(greetUser("Javed")); // Output: Hello, Javed


// 🔹 Types of Functions in JavaScript

// 1. Named Function
function sayHello() {
  console.log("Hello");
}
sayHello(); // Output: Hello

// 2. Anonymous Function
const show = function() {
  console.log("This is anonymous!");
};
show(); // Output: This is anonymous!

// 3. Arrow Function (ES6)
const sum = (a, b) => a + b;
console.log(sum(5, 6)); // Output: 11

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("IIFE runs automatically");
})(); // Output: IIFE runs automatically
