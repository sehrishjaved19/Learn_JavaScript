# 🔧 JavaScript Functions & Types of Functions

---

## ✅ What is a Function?

A **function** in JavaScript is a **reusable block of code** that performs a specific task.  
Functions help in:
- Organizing code into logical units  
- Enhancing readability and maintainability  
- Reusing code across your application  

---

## 🔹 Defining a Function

### 🔸 Function Declaration (Syntax)
```javascript
function functionName(parameters) {
  // code block
}
```

### 🔸 Calling a Function
```javascript
functionName(arguments);
```

---

## 🔹 Function Categories (Based on Parameters)

| Type                  | Description                                                                  |
| --------------------- | ---------------------------------------------------------------------------- |
| **Non-Parameterized** | Functions that do not take input values. They rely on internal logic.        |
| **Parameterized**     | Functions that accept one or more input values (called parameters/arguments) |

### 🔸 Example:
```javascript
// Parameterized
function add(a, b) {
  return a + b;
}
add(3, 4); // 7

// Non-Parameterized
function greet() {
  console.log("Hello!");
}
greet();
```

---

## 🔹 Parameters vs Arguments

- **Parameters**: Variables listed in the function declaration  
- **Arguments**: Actual values passed when calling the function  

Example:
```javascript
function multiply(x, y) { // x and y are parameters
  return x * y;
}
multiply(2, 3); // 2 and 3 are arguments
```

---

## 🔹 Ways to Define a Function

| Method                   | Description                                 |
| ------------------------ | ------------------------------------------- |
| **Function Declaration** | Traditional method using `function` keyword |
| **Function Expression**  | Function assigned to a variable             |

### 🔸 Function Declaration
```javascript
function greet(name) {
  return "Hello, " + name;
}
```

### 🔸 Function Expression
```javascript
const greet = function(name) {
  return "Hello, " + name;
};
```

---

## 🔹 Types of Functions in JavaScript

### 1. **Named Function**
A function with a name. Useful for debugging and reusability.
```javascript
function sayHello() {
  console.log("Hello");
}
```

---

### 2. **Anonymous Function**
A function **without a name**, usually used as an argument or assigned to a variable.
```javascript
const show = function() {
  console.log("This is anonymous!");
};
```

---

### 3. **Arrow Function**
Introduced in **ES6**, concise syntax for writing functions.
```javascript
const add = (a, b) => a + b;
```

---

### 4. **Immediately Invoked Function Expression (IIFE)**
Executed **immediately** after its definition. Useful for private scope.
```javascript
(function() {
  console.log("IIFE runs automatically");
})();
```

---

## 🧠 Key Takeaways

- Functions make code **reusable**, **organized**, and **readable**.
- You can define functions with or without parameters.
- There are multiple ways to write and use functions in JavaScript.
- Understand the **difference between declaration and expression**.
- Learn and use **function types** based on your need: arrow, named, anonymous, or IIFE.
![JS Function Declaration Diagram](Basics_JS\Functions&Types\Function.png "Function Declaration Breakdown")

---

## Prototypes 
_**Prototypes allow you to easily define properties and methods for all instances of a particular object. All JavaScript objects which can be created with the new keyword inherit properties and methods from a prototype.**_