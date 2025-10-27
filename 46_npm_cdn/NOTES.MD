# 🎯 About npm / CDN to Get Axios

---

### 🟢 **What is Node.js?**

Node.js utilizes Chrome's **V8 JavaScript engine**, enabling developers to run JavaScript on the **server side** and allowing them to create **scalable** and **high-performance** applications.
One of its key features is its **non-blocking, event-driven design**, making it efficient for building **real-time applications**.

---

### ⚙️ **How to Install Node.js**

1. **Download Node.js:**
   Visit the official Node.js website and download the installer for your operating system from
   👉 [https://nodejs.org/en](https://nodejs.org/en)

2. **Install Node.js:**
   Follow the installation instructions to run the installer.

3. **Verify Installation:**
   Open a terminal or command prompt and type:

   ```bash
   node -v
   ```

   You should see the installed version number.

---

### 📦 **What is npm?**

**npm** stands for **Node Package Manager**.
It serves as a **package manager** for Node.js modules and packages.
npm installs, manages, and shares packages of code from the **npm registry** (a collection of packages hosted on servers).

---

### 🧰 **How to Use npm**

#### ✅ Installing Packages:

Use the following command in the terminal of any code editor of your choice:

```bash
npm install <package-name>
```

**Example:**

```bash
npm install express
```

This installs the **Express framework**.

#### ✅ Using Packages:

After installation, include these packages in your Node.js application:

```js
const express = require('express');
```

#### ✅ Managing Packages:

* Remove a package:

  ```bash
  npm uninstall <package-name>
  ```
* Update a package:

  ```bash
  npm update <package-name>
  ```
* Search for a package:

  ```bash
  npm search <keyword>
  ```

#### ✅ Package.json:

This file contains **metadata** about the project and the **list of dependencies**.
You can create it manually or by using:

```bash
npm init
```

---

### 🌍 **Why Node.js and npm Matter**

Node.js and npm have become **integral parts of modern web development**, empowering developers to create **robust** and **scalable applications** using JavaScript.

---

## ⚡ **Axios**

Axios is a **JavaScript library** used primarily for making **HTTP requests** from both **Node.js environments** and **web browsers**.
It provides a simple and intuitive API for handling **asynchronous HTTP requests**.

### ✨ **Key Features**

* Request **interceptors**
* Ability to **cancel requests**
* Automatic **JSON data transformation**
* Support for all common **HTTP methods**

---

### 📥 **Installing Axios**

First, ensure you have **Node.js** and **npm** installed.
Then, install Axios using npm:

```bash
npm install axios
```

---

### 💻 **Using Axios in Node.js**

Here’s an example of how you can make a simple **GET request** using Axios in a Node.js script:

```js
// Import Axios
const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Handle successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle error
    console.error('Error:', error);
  });
```

---

### 🧠 **Explanation**

* We import Axios using `require('axios')`.
* Use `axios.get()` to make a GET request to a sample API endpoint (`https://jsonplaceholder.typicode.com/posts`).
* The `.then()` block handles the successful response and logs the data to the console.
* The `.catch()` block catches any errors and logs them to the console.

---

### 🔄 **Other HTTP Methods**

You can perform various HTTP methods using Axios:

```js
axios.post()
axios.put()
axios.delete()
```

Each can be handled with `.then()` and `.catch()` for responses and errors.

---

### ⏳ **Using async/await**

Remember, Axios returns **Promises**, allowing you to use **async/await** to handle asynchronous requests in a more synchronous style.

```js
async function fetchData() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();
```

This async/await example achieves the same result as the previous one but uses a more **synchronous-looking** code structure.


