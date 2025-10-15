# Introduction to Debugging in JavaScript
**Debugging in JavaScript is the process of of identifying and fixing errors, bugs and issues in your JavaScript code.**
* These errors can include syntax errors, logical errors, runtime errors, and other issues that prevent your JavaScript program from functioning as intended. 

### **Types of Errors**

| **Error Type**    | **When It Happens**                         | **Example**                            | **Description**                                                  |
| ----------------- | ------------------------------------------- | -------------------------------------- | ---------------------------------------------------------------- |
| **Syntax Error**  | Before program runs (compile/parsing stage) | `if (x > 5 console.log(x);`            | Code structure is invalid, so JS cannot even start execution.    |
| **Runtime Error** | While the program is running                | `console.log(x); // x not defined`     | The syntax is fine, but something goes wrong during execution.   |
| **Logical Error** | During or after running successfully        | `if (marks > 33) console.log("Fail");` | Logic is wrong — produces incorrect output, not an actual crash. |

---

## **Common Debugging Techniques & Tools**

| **#**                             | **Technique / Tool**                                                           | **Description**                                | **Example / Notes** |
| --------------------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------- | ------------------- |
| **1. `console.log()` Statements** | Print values or messages to the console to trace the flow of your code.        | `console.log("x =", x);`                       |                     |
| **2. Breakpoints**                | Pause the execution at a specific line to inspect variables, memory, and flow. | Set in browser **DevTools → Sources tab**      |                     |
| **3. `debugger` Statement**       | Stops code execution programmatically (like a breakpoint).                     | `debugger; // triggers the browser debugger`   |                     |
| **4. Browser Developer Tools**    | Built-in tools for inspecting elements, console logs, and debugging JS.        | Open with **F12** or **Right-click → Inspect** |                     |
| **5. `try...catch` Blocks**       | Handle runtime errors gracefully without crashing the program.                 | Prevents the entire script from stopping.      |                     |

---

## ⚙️ **Browser Developer Tools Overview**

| **Tab**                | **Purpose**                                            |
| ---------------------- | ------------------------------------------------------ |
| **Console**            | View logs, warnings, and errors.                       |
| **Sources / Debugger** | Set breakpoints, step through code, inspect variables. |
| **Network**            | Monitor API requests, responses, and performance.      |

---

##  **Try–Catch Block in JavaScript**

### 🏗️ **Structure:**

```js
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}
```

### **How It Works:**

* **`try` block:** Contains code that might cause an error.
* **`catch` block:** Executes if an error occurs; receives an **error object**.
* **Error object** contains:

  * `name` → Type of error
  * `message` → Description
  * `stack` → Where it occurred

---

### **Example 1: Without Try-Catch**

```js
let obj;
console.log(obj.property);  // ❌ Error: Cannot read properties of undefined
console.log("Message after error"); // ❌ Never runs
```

### **With Try-Catch**

```js
try {
  let obj;
  console.log(obj.property);  // Causes error
} catch (error) {
  console.log("Error occurred:", error.message);
}
console.log("Program continues after error handling");
```

**Output:**

```
Error occurred: Cannot read properties of undefined
Program continues after error handling
```

---

## 💡 **Why Try–Catch is Important for Debugging**

| **Benefit**                      | **Explanation**                                          |
| -------------------------------- | -------------------------------------------------------- |
| **1. Isolates Problematic Code** | Helps identify specific code blocks causing errors.      |
| **2. Prevents Crashes**          | Keeps the program running even after errors occur.       |
| **3. Logs Error Details**        | Provides detailed error info for debugging or reporting. |
| **4. Allows Fallback Behavior**  | Lets the app continue working with alternative actions.  |
| **5. Improves User Experience**  | Shows friendly error messages instead of crashes.        |
| **6. Supports Custom Errors**    | You can use `throw` to create custom error messages.     |

---

### ⚙️ **Throw Example**

```js
try {
  let age = -5;
  if (age < 0) throw new Error("Age cannot be negative!");
} catch (error) {
  console.log("Custom Error:", error.message);
}
```

---

### 🧭 **Summary Points**

* Debugging = finding + fixing code issues.
* Use **console**, **breakpoints**, **debugger**, and **try-catch**.
* **Try-catch** improves reliability and user experience.
* Always log or report errors for later analysis (especially in production).
---

