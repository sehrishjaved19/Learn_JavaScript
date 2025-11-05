# 1️⃣ What is a Callback?

A **callback** is a **function passed as an argument to another function**, which is then **called later**, usually after some task completes.

Think of it like this:

* You call a friend and say:

> “Call me back when you reach home.”

* You don’t wait around; you continue doing other things.
* Once your friend reaches home, they **call your callback**.

In programming:

```js
function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // call the function passed in
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Sehrish", sayGoodbye);
```

**Output:**

```
Hello Sehrish
Goodbye!
```

* `sayGoodbye` is the **callback function**.
* It’s executed **after `greet` finishes its main task**.

---

## 2️⃣ Callbacks with Parameters

Callbacks can **accept parameters**, which makes them more flexible.

```js
function fetchData(callback) {
    const data = { name: "Sehrish", age: 21 };
    callback(data); // pass data to the callback
}

function displayData(user) {
    console.log("User Name:", user.name);
    console.log("User Age:", user.age);
}

fetchData(displayData);
```

**Output:**

```
User Name: Sehrish
User Age: 21
```

✅ Explanation:

* `fetchData` simulates an **async task** (like fetching from an API).
* Once data is ready, it calls `callback(data)`.
* `displayData` receives `data` as a **parameter**.

---

## 3️⃣ Callbacks in Asynchronous Tasks

This is where callbacks shine — for things that **take time**, like reading a file, fetching from an API, or a timer.

```js
console.log("Start");

setTimeout(function() {
    console.log("Task done!");
}, 2000);

console.log("End");
```

**Output:**

```
Start
End
Task done!
```

* `setTimeout` takes a **callback function**.
* JS doesn’t wait 2 seconds; it continues executing the next line (`End`).
* After 2 seconds, the callback runs.

---

### 4️⃣ Example: Callback with “fetching data”

```js
function getUsers(callback) {
    setTimeout(function() {
        const users = ["Alice", "Bob", "Charlie"];
        callback(users); // call callback after data is “ready”
    }, 2000);
}

getUsers(function(users) {
    console.log("Users:", users);
});
```

**Output (after 2 seconds):**

```
Users: ["Alice", "Bob", "Charlie"]
```

---

### ⚠️ Drawback of Callbacks

* If you have **multiple async tasks in a sequence**, callbacks get **nested** → known as **“callback hell”**:

```js
task1(function(result1) {
    task2(result1, function(result2) {
        task3(result2, function(result3) {
            console.log("All done!");
        });
    });
});
```

* Hard to read, hard to debug.

This is exactly **why Promises were introduced**.

---

# 2️⃣ Promises

A **Promise** is an object representing a **value that may be available now, in the future, or never.**

### Three states of a Promise

| State         | Description                                          |
| ------------- | ---------------------------------------------------- |
| **Pending**   | The async task is in progress.                       |
| **Fulfilled** | The task completed successfully and returns a value. |
| **Rejected**  | The task failed and returns an error.                |

### Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
    const success = true;// Asynchronous operaton goes here
    if(success) {
        resolve("Task completed");   // if successfull, call resolve with a result
    } else {
        reject("Task failed");       //if an error occurs, cal reject with an error
    }
});
```

* `resolve()` → called when async task succeeds.
* `reject()` → called when async task fails.

---

## 3️⃣ Promises with API simulation

We can rewrite the earlier callback example **using promises**:

```js
function getUserInfo(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: "Sehrish" };
            resolve(user); // task succeeded
        }, 1000);
    });
}

function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ["Post 1", "Post 2"];
            resolve(posts);
        }, 1500);
    });
}

// Promise chaining
getUserInfo(1)
    .then(user => {
        console.log("User Info:", user);
        return getUserPosts(1); // returns another promise
    })
    .then(posts => {
        console.log("User Posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

✅ Advantages of Promises:

1. Avoid **deeply nested callbacks** → code is cleaner.
2. Easier **error handling** using `.catch()`.
3. Can chain multiple asynchronous tasks **linearly**.

---

## 4️⃣ Key Takeaways

* **Callback:** Function passed as an argument, executed later. Can lead to nested “callback hell.”
* **Promise:** Represents future value of an async task. Cleaner, more structured approach.
* **States of a Promise:** Pending → Fulfilled → Rejected.
* **Use `.then()`** for handling success, **`.catch()`** for errors.

