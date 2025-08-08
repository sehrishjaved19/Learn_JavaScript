# 📘 JavaScript Variables and Data Types

Welcome! This guide covers the key concepts of variables and data types in JavaScript.

---

## 🔹 Variables in JavaScript

### ✅ What are Variables?
Variables are **containers for storing data** in JavaScript. You use them to manage and manipulate information in your code.

---

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

| Type       | Description                                      | Example                |
|------------|--------------------------------------------------|------------------------|
| `String`   | Represents textual data                          | `"Hello"`, `'World'`   |
| `Number`   | Integers and floating-point numbers              | `42`, `3.14`           |
| `Boolean`  | Logical value                                    | `true`, `false`        |
| `Undefined`| Variable declared but not assigned a value       | `let x;`               |
| `Null`     | Represents intentional absence of any value      | `let y = null;`        |

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

### 🧠 Tip
Practicing how and when to use each variable type and understanding the difference between data types will make your JavaScript code more dynamic, readable, and maintainable.

---
