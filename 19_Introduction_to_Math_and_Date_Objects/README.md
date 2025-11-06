# Introduction to Math and Date Objects in JavaScript

This module provides a comprehensive introduction to JavaScript's built-in Math and Date objects, along with timing functions. These fundamental tools are essential for performing mathematical operations, handling dates and times, and managing asynchronous code execution.

## 📚 Module Contents

1. `01_math_object.js` - Math object operations and methods
2. `02_date_object.js` - Date object creation and manipulation
3. `03_timing_function.js` - setTimeout and setInterval functions
4. `Notes.md` - Detailed documentation and examples

## 🧮 Math Object

Learn about JavaScript's powerful Math object, including:

- Number rounding methods (round, ceil, floor)
- Exponential and logarithmic operations
- Random number generation
- Mathematical constants and functions

### Key Features Covered:

```javascript
// Rounding Examples
Math.round(3.6)  // 4
Math.ceil(3.6)   // 4
Math.floor(3.6)  // 3

// Powers and Roots
Math.pow(4, 2)   // 16
Math.sqrt(4)     // 2

// Random Numbers
Math.random()    // Random number between 0 and 1
```

## 📅 Date Object

Explore date and time manipulation in JavaScript:

- Creating date objects
- Getting date components
- Formatting dates
- Time calculations

### Key Features Covered:

```javascript
// Date Creation
const currentDate = new Date()
const specificDate = new Date(2025, 0, 15)

// Date Components
date.getFullYear()  // Current year
date.getMonth()     // Current month (0-11)
date.getDate()      // Day of month (1-31)
```

## ⏲️ Timing Functions

Learn about JavaScript's timing mechanisms:

- setTimeout for delayed execution
- setInterval for repeated execution
- Clearing timeouts and intervals

### Key Features Covered:

```javascript
// Delayed Execution
setTimeout(() => {
    // Executed after 2 seconds
}, 2000)

// Repeated Execution
setInterval(() => {
    // Executed every second
}, 1000)
```

## 📝 Learning Objectives

After completing this module, you will understand:

1. How to perform mathematical operations using the Math object
2. Working with dates and times in JavaScript
3. Managing asynchronous code execution with timing functions
4. Converting between different date formats
5. Generating random numbers and performing calculations

## 🔧 Technical Requirements

- Basic understanding of JavaScript
- JavaScript runtime environment (browser or Node.js)
- Text editor or IDE

## 📖 Additional Resources

Detailed notes and examples can be found in the `Notes.md` file, which includes:

- Comprehensive method tables
- Code examples
- Best practices
- Common use cases