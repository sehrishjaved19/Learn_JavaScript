# 📘 JavaScript Variables and Data Types  

---

## 🔹 Variables in JavaScript

### ✅ What are Variables?
Variables are **containers for storing data** in JavaScript. You use them to manage and manipulate information in your code.

---
## VAR
In JavaScript, variables declared with 'var' are hoisted —meaning their declaration is moved to the top of the scope,so you can use the variable even before the 'var' statement.

### ✅ Variable Declaration Keywords

| Keyword | Scope             | Reassignment | Redeclaration | Description                                      |
|---------|------------------|--------------|---------------|--------------------------------------------------|
| `var`   | Function-level    | ✅ Yes        | ✅ Yes         | Original way to declare variables               |
| `let`   | Block-level       | ✅ Yes        | ❌ No          | Modern and safer for mutable values             |
| `const` | Block-level       | ❌ No         | ❌ No          | Used for constants (values that don’t change)   |

---

### ✅ Naming Rules
- Must **start** with: a letter, underscore (`_`), or dollar sign (`$`)
- Can contain: letters, numbers, underscores, and dollar signs
- **Case-sensitive** (`myVar` ≠ `MyVar`)

---

## 🔹 Data Types in JavaScript

JavaScript is a **dynamically typed language** – the data type is determined automatically at runtime.

---

### ✅ Primitive Data Types

| Type       | Description                                                     | Example                |
|------------|-----------------------------------------------------------------|------------------------|
| `String`   | Represents textual data                                         | `"Hello"`, `'World'`   |
| `Number`   | Integers and floating-point numbers                             | `42`, `3.14`           |
| `Boolean`  | Logical value                                                   | `true`, `false`        |
| `Undefined`| Variable declared but not assigned a value                      | `let x;`               |
| `Null`     | Represents intentional absence(empty value) of any object value | `let y = null;`        |

---

### ✅ Composite (Non-Primitive) Data Types

| Type    | Description                                            | Example |
|---------|--------------------------------------------------------|---------|
| Array   | List-like structure storing multiple values            | `["a", "b", "c"]` |
| Object  | Collection of key-value pairs for structured data      | `{ name: "John", age: 25 }` |

---

## 🔹 Key Takeaways

- Use `let` and `const` for modern, clean JavaScript.
- `let` is for values that can change, `const` for fixed values.
- Understand **function vs block scope** to avoid bugs.
- Recognize and use **primitive vs composite types** properly.

---

## ✅ Variable Scope Overview

### 🔹 Global Scope:
Variable declared **outside any block or function** have a global scope and are accessible throughout the entire script.

### 🔹 Block Scope:
Variable declared **within curly braces{}** have block scope, accessible only within that block.

### 🔹 Function Scope:
Variable declared **within a function** have function scope, limited to that function's block.

---

## ✅ Variable Declaration and Initialization

* Use var, let and const to declare and initialize variables in different scope: Global, Block and Function.

---

## ✅ Output and Scope Analysis:

* Global variable were accessible everywhere in the script.
* Block scoped variables (inside {}) had limited accessibility, resulting in ReferenceError when accessed outside their blocks.
* Function Scope variable (inside a function) also led to ReferenceError when accessed outside the function.

---

## 🔹 ReferenceError:
**A Reference Error occurs when code attempts to use a variable that has not been declared or is outside of its scope, preventing proper access or execution.**

