# Array
_**Array is a data structure used to store and organize a collection of values. These values can be of various data types, such as numbers, strings, objects or even other array.**_

* Array in JavaScript are **ordered**, which means that te elements are **stored in a specific sequence**, and each element is **accessible by its index or position** in the array.

* It's important to note that arrays in JavaScript are **zero-indexed**, meaning the **first element is at index 0**, the second element is at index 1, and so on. 

## Creating Array
Creating an array in JavaScript is straightforward. You can use square brackets to declare an array and store elements within it, separated by commas.

```js
const myArray = ['element1','element2', 'so on...'];
```
### Key Features

* Arrays in JavaScript are mutable. This means that you can change, add, or remove elements after creating the array.

* Array can also contain other arrays, allowing yoy to create mulitidimensional arrays or complex data structures. This is a valuable feature for handling structured data.

* Arrays are frequently used for various tasks, such as storing lists of items, iterating through data, implementing stacks and queues, managing data in tables and grids, and much more.

* They are versatile and adaptable, making them a fundamental tool for developers.

* we can iterate throught elements of an array using loops, like for loops, or more modern methods like foreach, map, filter, and reduce. 

* Array Iteration is a powerful way to process and manipulate array elements.

---

## 💡 What Actually Is an **Array Method**?

An **Array Method** in JavaScript is simply a **built-in function** that you can use **on arrays** to:

* **Access** elements,
* **Manipulate** (change, add, remove) elements,
* **Transform** or **search** data.

👉 Every array in JS (like `const arr = [1,2,3];`) has access to these methods because arrays are special **objects** with helpful **predefined functions**.

Example:

```js
const fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.length);      // Property (not a method)
fruits.push("Mango");            // Method (adds an element)
console.log(fruits);
```

**Output:**

```
["Apple", "Banana", "Cherry", "Mango"]
```

Here, `.push()` is an **array method** — a function designed specifically to work on arrays.

---

## 🔹 Two Main Categories of Array Methods

There are **two major types** of array methods in JavaScript:

| Type                                | Description                                                  | Examples                                                                     |
| ----------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| 🧩 **Non-Manipulating (Immutable)** | Don’t change the original array — they create a **new** one. | `map()`, `filter()`, `concat()`, `slice()`, `find()`, `reduce()`             |
| 🛠️ **Manipulating (Mutable)**      | Directly **change (mutate)** the original array.             | `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()` |

---

## 🔸 **Manipulating Array Methods (Mutable)**

These **modify the original array**.

| Method      | Description                                | Example                      |
| ----------- | ------------------------------------------ | ---------------------------- |
| `push()`    | Adds element **to the end**                | `arr.push("Mango")`          |
| `pop()`     | Removes **last element**                   | `arr.pop()`                  |
| `shift()`   | Removes **first element**                  | `arr.shift()`                |
| `unshift()` | Adds element **to the start**              | `arr.unshift("Apple")`       |
| `splice()`  | Adds/removes elements from any position    | `arr.splice(2, 1, "Orange")` |
| `sort()`    | Sorts elements (alphabetically by default) | `arr.sort()`                 |
| `reverse()` | Reverses the array order                   | `arr.reverse()`              |

**Example:**

```js
let numbers = [1, 2, 3];
numbers.push(4);
numbers.shift();
console.log(numbers); // [2, 3, 4]
```

✅ Original array is changed.

---

## 🔹 **Non-Manipulating (Immutable) Array Methods**

These do **not** change the original array — they return a **new array** or value.

| Method      | Description                                  | Returns                 |
| ----------- | -------------------------------------------- | ----------------------- |
| `map()`     | Runs a function on each element              | New array               |
| `filter()`  | Keeps elements that match a condition        | New array               |
| `reduce()`  | Reduces array to a single value              | Single value            |
| `concat()`  | Joins two or more arrays                     | New array               |
| `slice()`   | Extracts part of an array                    | New array               |
| `find()`    | Returns first element that matches condition | Single value            |
| `forEach()` | Executes a function on each element          | `undefined` (no return) |

---

## 🔸 **Examples**

### 🧩 `map()` → Transform each element

```js
const nums = [1, 2, 3];
const squares = nums.map(num => num * num);
console.log(squares); // [1, 4, 9]
```

### 🧩 `filter()` → Keep elements that pass a test

```js
const nums = [10, 25, 30, 40];
const result = nums.filter(n => n > 20);
console.log(result); // [25, 30, 40]
```

### 🧩 `reduce()` → Combine all into one value

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

---

## 🔸 **forEach()**

`forEach()` is a **looping method** — it **executes** a function for every array element but does **not return anything**.

```js
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log(fruit));
```

---
### Key Point(difference between filter and find)

| Method     | Purpose                                                                        |
| ---------- | ------------------------------------------------------------------------------ |
| `filter()` | Returns **all** elements that match a condition (in a **new array**)           |
| `find()`   | Returns **the first** element that matches a condition (as a **single value**) |


---

## 🔹 Summary Chart

| Category                         | Changes Original? | Example Methods                                  |
| -------------------------------- | ----------------- | ------------------------------------------------ |
| **Manipulating (Mutable)**       | ✅ Yes             | push, pop, shift, unshift, splice, sort, reverse |
| **Non-Manipulating (Immutable)** | ❌ No              | map, filter, reduce, slice, concat, find         |
| **Iteration (Looping)**          | ❌ No (usually)    | forEach, for...of, for...in                      |

---
## Two Dimensional Array
**A 2D array, also known as a two-dimensional array, is collection of elements organized in rows and columns.** 

* Each element in a 2D array is accessed using two indices, one for the row and another for the column. 

### Creating a 2D Array
In JavaScript, you can create a 2D array by initializing an array of arrays.
