# Function Closure and Function Hoisting

---

## 🧠 1. Function Closure

### 🔹 Meaning

A **closure** happens when an **inner function** “remembers” the variables from its **outer function**, even after the outer function has finished running.

Closures allow **Data Encapsulation** and **Information Hiding** in JavaScript.

---

### ✅ Example 1 — Basic Closure

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer runs once, returns inner

counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3
```

🧩 **Explanation:**

* `outer()` creates a variable `count`.
* `inner()` uses that variable — and when `outer()` finishes, JavaScript still remembers `count` because of **closure**.
* That’s why `counter()` keeps increasing the same `count` each time.

---

### ✅ Example 2 — Using Closure for Data Privacy

```js
function createBankAccount() {
  let balance = 0;

  return {
    deposit: function(amount) {
      balance += amount;
    },
    checkBalance: function() {
      return balance;
    }
  };
}

const myAccount = createBankAccount();
myAccount.deposit(100);
console.log(myAccount.checkBalance()); // 100
```

🧩 **Explanation:**

* `balance` is **private** — it can’t be accessed directly.
* Only `deposit()` and `checkBalance()` (inner functions) can access it via closure.

---
## 🧠 2. Function Hoisting

### 🔹 Meaning

**function Hoisting** is a behaviour in JavaScript where function declarations are moved to the  **top of their conataining scope** during the compilation phase, **allowing you to use a function before it's actually declared** in the code.

* This behavious is only applied to **Function declarations** , **Not Function Expression**.

---

### ✅ Example 1 — Function Declaration (Hoisted)

```js
sayHello(); // Works, because it's hoisted

function sayHello() {
  console.log("Hello, world!");
}
```

🧩 **Explanation:**

* JavaScript “hoists” the function declaration to the top.
* So even though you wrote `sayHello()` first, JS knows what it is.

---

### 🚫 Example 2 — Function Expression (Not Hoisted)

```js
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function() {
  console.log("Hello, world!");
};
```

🧩 **Explanation:**

* When you store a function in a variable (`const`, `let`, or `var`), only the **variable** name is hoisted — not its value.
* The function itself is created only when that line runs.

---

### ⚡ Summary

| Function Type        | Hoisted? | Can Call Before Defined? |
| -------------------- | -------- | ------------------------ |
| Function Declaration | ✅ Yes    | ✅ Yes                    |
| Function Expression  | 🚫 No    | ❌ No                     |
| Arrow Function       | 🚫 No    | ❌ No                     |

---

### ⚡ Summary


| **Aspect**        | **Function Closure**                                                                    | **Function Hoisting**                                                                               |
| ----------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Definition**    | Retains access to outer variables even after the outer function has finished executing. | Moves function declarations to the top of their scope (so they can be used before they’re defined). |
| **Careful Usage** | Requires understanding of how closures capture and retain variables.                    | Should be used carefully to avoid confusion or logical errors.                                      |
| **Applications**  | Useful for modular code, event handling, and maintaining state.                         | Helps with structuring code and allows functions to be called before their declaration.             |
| **Usage**         | Used for private variables, data hiding, and maintaining state between function calls.  | Used for better code organization, readability, and recursion.                                      |
| **Importance**    | Enables data encapsulation and maintainable code.                                       | Provides order independence and more structured code.                                               |

---

