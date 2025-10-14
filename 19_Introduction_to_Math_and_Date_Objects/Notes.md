# Introduction to Math and Date Objects

## 🧮 Math Object
Math object is a powerful built in global object that equips developers with a wide range of mathematical methods and constants. It serves as a toolbox for performing essential mathematical operations in your code. 
 
**The Math object in JavaScript is a built-in object that provides mathematical constants and functions. It is not a constructor, so you don’t use new Math() — you just call its methods directly, like Math.sqrt().**

Here are some common operations you can achieve using math objects:
* Rounding numbers
* Exponentation and Logarithms
* Random number generation. 

### Common Math Methods

| **Method**              | **Description**                   | **Example**             | **Output**      |
| ------------------- | ----------------------------- | ------------------- | ----------- |
| `Math.round(x)`     | Rounds to nearest integer     | `Math.round(4.6)`   | `5`         |
| `Math.floor(x)`     | Rounds down                   | `Math.floor(4.9)`   | `4`         |
| `Math.ceil(x)`      | Rounds up                     | `Math.ceil(4.1)`    | `5`         |
| `Math.trunc(x)`     | Removes decimal part          | `Math.trunc(4.9)`   | `4`         |
| `Math.pow(x, y)`    | Raises x to power y           | `Math.pow(2, 3)`    | `8`         |
| `Math.sqrt(x)`      | Square root                   | `Math.sqrt(9)`      | `3`         |
| `Math.abs(x)`       | Absolute value                | `Math.abs(-5)`      | `5`         |
| `Math.min(...nums)` | Returns smallest              | `Math.min(4, 2, 8)` | `2`         |
| `Math.max(...nums)` | Returns largest               | `Math.max(4, 2, 8)` | `8`         |
| `Math.random()`     | Random number between 0 and 1 | `Math.random()`     | e.g. `0.57` |


#### Example:
```js
// Random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
```

---

## 📅 Date Object
**The Date object is used to work with dates and times.**
*  It offers methods for creating, formatting, and manipulating dates and times.

### Epoch:
**The epoch is a fixed point in time from which computers measure time.**
* In JavaScript (and most systems), the epoch starts at:

**January 1, 1970, 00:00:00 UTC**

## Date Object Methods 

### Creation & Conversion
| **Method**                        | **Description**                                            | **Example**                   | **Output Example**                      |
| ------------------------------ | ------------------------------------------------------ | -------------------------- | ----------------------------------- |
| `new Date()`                   | Creates a Date object with current date & time         | `new Date()`               | `Tue Oct 14 2025 22:20:00 GMT+0500` |
| `new Date("2025-10-14")`       | Creates Date from string                               | `new Date("2025-10-14")`   | `Tue Oct 14 2025 05:00:00 GMT+0500` |
| `new Date(year, month, day)`   | Creates Date from values (month starts at 0)           | `new Date(2025, 9, 14)`    | `Tue Oct 14 2025 00:00:00`          |
| `Date.now()`                   | Returns current time in milliseconds since Jan 1, 1970 | `Date.now()`               | `1739554800000`                     |

### Get Methods (Read Date Info)
| **Method**                | **Description**                         | **Example**                 | **Output Example**     |
| --------------------- | ----------------------------------- | ----------------------- | ------------------ |
| `getFullYear()`       | Gets full year                      | `d.getFullYear()`       | `2025`             |
| `getMonth()`          | Gets month (0–11)                   | `d.getMonth()`          | `9` (October)      |
| `getDate()`           | Gets day of month (1–31)            | `d.getDate()`           | `14`               |
| `getDay()`            | Gets day of week (0–6 → Sun–Sat)    | `d.getDay()`            | `2`                |
| `getHours()`          | Gets hour (0–23)                    | `d.getHours()`          | `22`               |
| `getMinutes()`        | Gets minutes (0–59)                 | `d.getMinutes()`        | `35`               |
| `getSeconds()`        | Gets seconds (0–59)                 | `d.getSeconds()`        | `45`               |
| `getMilliseconds()`   | Gets milliseconds (0–999)           | `d.getMilliseconds()`   | `321`              |
| `getTime()`           | Gets milliseconds since Jan 1, 1970 | `d.getTime()`           | `1760451500000`    |

---

## Timing Functions
**Timing functions are essential for controlling the flow of your Javascript code. They enable you to create delays, schedule repetitive tasks, and manage animations.**
There are two types of timing functions:
* set timeout function
* set interval function. 

### setTimeout
**The set timeout function schedules the execution of a function after a specified delay in milliseconds.**

### setInterval
**Set interval is a built in Javascript function that schedules the repeated execution of a specified function at a specified time interval.**