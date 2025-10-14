

## 🟢 **Comments in JavaScript**

Comments are notes you write **inside your code** that the computer **ignores**.
They help you (and others) understand what the code does.

There are **two types of comments** in JavaScript:

---

### 1. **Single-line comment**

Use `//` before the comment.

```js
// This is a single-line comment
let name = "Sehrish"; // You can also add it at the end of a line
```

---

### 2. **Multi-line comment**

Use `/* ... */` to write comments on **multiple lines**.

```js
/* 
This is a multi-line comment.
You can write explanations or notes here.
*/
let age = 19;
```

---

## 🟢 **Strings in JavaScript**

A **string** is a **sequence of characters** (text).
Strings are always written inside **quotes**.

---

### 1. You can use **single**, **double**, or **backtick** quotes:

```js
let firstName = 'Sehrish';  // single quotes
let lastName = "Javed";     // double quotes
let greeting = `Hello!`;    // backticks (template literal)
```

All three are valid strings.

---

### 2. **String concatenation (joining strings):**
* We can concatenate strings **using the + operator**. The concatenation operator, +, in JavaScript is used to combine or join two or more strings together to create a single longer string. It allows you to append(add to the end) one string to another.

```js
let fullName = firstName + " " + lastName;
console.log(fullName); // Sehrish Javed
```

---

### 3. **Using template literals (modern way):**
### Template Literals (backtick strings)

* They use backticks (`) instead of quotes (' or "),
and allow you to embed variables or expressions directly inside a string using ${...}.

```js
let name = "Sehrish";
let age = 19;

// Using template literal
console.log(`My name is ${name} and I am ${age} years old.`);

```

---

### 4. **String length:**
*  The spaces are also counted when calculating the string length.
```js
console.log(fullName.length); // counts total characters
```

---

### 5. **Accessing characters:**
* You can access individual characters within a string using bracket notation and a zero-based index. 
```js
console.log(fullName[0]); // S  (first letter)
```

---
### 6. **Splitting Strings:**
* We can split a string into an array of substrings using the split method. It is handy for parsing data separated by a specific character or sequence of characters for further processing or analysis. 

✅ **Summary:**

| Concept                   | Symbol      | Example               |
| ------------------------- | ----------- | --------------------- |
| Single-line comment       | `//`        | `// Hello`            |
| Multi-line comment        | `/* ... */` | `/* Hello */`         |
| String (single quotes)    | `' '`       | `'Sehrish'`           |
| String (double quotes)    | `" "`       | `"Javed"`             |
| String (template literal) | `` ` ` ``   | `` `Sehrish Javed` `` |

---
# String Methods in JavaScript

| Method           | Purpose          | Example                   | Result  |
| ---------------- | ---------------- | ------------------------- | ------- |
| `.length`        | Count characters | `"JS".length`             | `2`     |
| `.toUpperCase()` | Uppercase text   | `"js".toUpperCase()`      | `"JS"`  |
| `.toLowerCase()` | Lowercase text   | `"JS".toLowerCase()`      | `"js"`  |
| `.trim()`        | Remove spaces    | `" hi ".trim()`           | `"hi"`  |
| `.slice(0,3)`    | Extract part     | `"Hello".slice(0,3)`      | `"Hel"` |
| `.concat()`      | Join strings     | `"A".concat("B")`         | `"AB"`  |
| `.replace()`     | Replace text     | `"cat".replace("c","r")`  | `"rat"` |
| `.charAt()`      | Get character    | `"Hi".charAt(0)`          | `"H"`   |
| `.indexOf()`     | Find position    | `"apple".indexOf("p")`    | `1`     |
| `.includes()`    | Check contains   | `"apple".includes("app")` | `true`  |

