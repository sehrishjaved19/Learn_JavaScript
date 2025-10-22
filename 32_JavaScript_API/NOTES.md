# 📘 **JavaScript APIs — Summary Notes**

## 🧩 What is an API?

| Term                                        | Description                                                                                     | Analogy                                                                          |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **API (Application Programming Interface)** | A set of rules and methods that allow two software applications to communicate with each other. | Like a **waiter** who takes your order to the kitchen and brings your food back. |
| **API Documentation**                       | A “menu” that tells you what requests you can make and what responses you’ll get.               | If you order something not on the menu, you get an **error**.                    |

---

### 💡 **What is a JavaScript API?**

| Concept            | Description                                                                                  | Example                                                                             |
| ------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **JavaScript API** | An API that uses **JavaScript** to dynamically access, modify, or interact with web content. | DOM API, Fetch API, XMLHttpRequest, Storage API                                     |
| **Purpose**        | Helps JavaScript connect with the browser, the webpage, or other web services.               | Modify HTML elements, get data from servers, open windows, store data locally, etc. |

---

## 🌐 **REST Architecture**

| Term            | Description                                                                                    | Example                                                     |
| --------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **REST**        | Stands for **Representational State Transfer** — a set of design principles for building APIs. | A RESTful API uses HTTP methods to perform CRUD operations. |
| **CRUD**        | The 4 basic operations in data communication.                                                  | Create, Read, Update, Delete                                |
| **RESTful API** | API that follows REST rules and uses CRUD operations with HTTP methods.                        | For example, a banking API managing customers.              |

---

### ⚙️ **CRUD Operations in REST**

| CRUD Operation | HTTP Method | Example URL          | Description                    |
| -------------- | ----------- | -------------------- | ------------------------------ |
| **Create**     | POST        | `api/customers`      | Create a new customer          |
| **Read**       | GET         | `api/customers/{id}` | Retrieve details of a customer |
| **Update**     | PUT         | `api/customers/{id}` | Update customer data           |
| **Delete**     | DELETE      | `api/customers/{id}` | Delete a customer              |

🧾 Example **PUT** request body:

```json
{
  "first_name": "Thomas",
  "last_name": "Watson"
}
```

---

## 🧱 **Common JavaScript APIs**

| API Name                          | Purpose                                                                                | Example                                                 |
| --------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **DOM API**                       | Lets JavaScript interact with HTML structure (the document).                           | `document.getElementById("demo").innerHTML = "Hello!";` |
| **BOM API**                       | Interacts with the browser window or environment.                                      | `window.open("https://example.com");`                   |
| **XMLHttpRequest (XHR)**          | Used to send/receive data from a server **without reloading the page** (core of AJAX). | `xhr.open("GET", "data.json");`                         |
| **Fetch API**                     | Modern replacement for XHR — used for HTTP requests.                                   | `fetch("api/data").then(res => res.json())`             |
| **LocalStorage / SessionStorage** | Store data in the browser.                                                             | `localStorage.setItem("name", "Sehrish")`               |
| **Navigator API**                 | Access browser or device information.                                                  | `navigator.geolocation.getCurrentPosition(...)`         |

---

### 🧠 Key Idea:

> A **JavaScript API** gives your script the ability to **connect and communicate** — either with the **browser (DOM/BOM)** or with **external web servers (REST APIs)**.

---

Perfect — that’s a **detailed lesson on JavaScript DOM and Window APIs**, showing how JavaScript interacts with HTML elements and the browser window.

Here’s a **structured, summarized, and easy-to-review version** of your text 👇

---

# 📘 **JavaScript APIs – Working with DOM & Window Objects**


## 🧩 **1. Accessing HTML Elements (Nodes)**

| Method                                       | Description                                                                       | Example                                         |
| -------------------------------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------- |
| **`document.getElementById(id)`**            | Returns **one specific element** matching the given id.                           | `document.getElementById("mainTitle")`          |
| **`document.getElementsByTagName(tagName)`** | Returns a **NodeList** (array-like list) of elements with the specified tag name. | `document.getElementsByTagName("p")`            |
| **NodeList**                                 | A collection of nodes that can be looped through.                                 | `for (let i of imgSet) { console.log(i.src); }` |

🔹 Example:

```js
const imgSet = document.getElementsByTagName("img");
for (let i = 0; i < imgSet.length; i++) {
  document.write(imgSet[i].src + "<br>");
}
```

---

## 🧱 **2. Creating and Adding Elements**

| Method                                    | Description                                         | Example                                     |
| ----------------------------------------- | --------------------------------------------------- | ------------------------------------------- |
| **`document.createElement(tagName)`**     | Creates a new element node.                         | `const para = document.createElement("p");` |
| **`appendChild(node)`**                   | Adds a new node as the last child of a parent node. | `document.body.appendChild(para);`          |
| **`insertBefore(newNode, existingNode)`** | Inserts a node before another node.                 | `parent.insertBefore(newNode, oldNode);`    |
| **`replaceChild(newNode, oldNode)`**      | Replaces one node with another.                     | `parent.replaceChild(newNode, oldNode);`    |

🧾 Example:

```js
const para = document.createElement("p");
const text = document.createTextNode("Hello world!");
para.appendChild(text);
document.body.appendChild(para);
```

---

## ✍️ **3. Modifying Element Content**

| Property                | Description                                                                | Example                              |
| ----------------------- | -------------------------------------------------------------------------- | ------------------------------------ |
| **`element.innerHTML`** | Gets or sets the inner content of an HTML element (can include HTML tags). | `div.innerHTML = "<b>Updated!</b>";` |

⚠️ Setting `innerHTML` **removes all existing child elements** and replaces them with new content.

---

## 🎨 **4. Modifying Styles and Attributes**

| Method / Property                               | Description                                                         | Example                                    |
| ----------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------ |
| **`element.style.propertyName`**                | Sets inline CSS style for an element (overrides stylesheet styles). | `div.style.color = "red";`                 |
| **`element.setAttribute(attrName, attrValue)`** | Dynamically modifies or adds an attribute.                          | `img.setAttribute("src", "newImage.jpg");` |
| **`element.getAttribute(attrName)`**            | Retrieves an attribute’s value.                                     | `img.getAttribute("src");`                 |
| **`element.removeAttribute(attrName)`**         | Removes an attribute.                                               | `img.removeAttribute("alt");`              |

💡 Note: `setAttribute("style", …)` **replaces all existing inline styles**.

---

## 🪟 **5. Window Object Functions & Events (BOM API)**

| Function / Event                                | Description                                                         | Example                                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **`window.open(URL, name, features, replace)`** | Opens a new browser window/tab. Returns a reference to that window. | `let newWin = window.open("https://example.com", "newWin", "width=500,height=400");` |
| **`newWin.close()`**                            | Closes the new window using its reference.                          | `newWin.close();`                                                                    |
| **`window.onload`**                             | Runs a function after the page fully loads.                         | `window.onload = () => alert("Page Loaded!");`                                       |
| **`window.dump("message")`**                    | Writes a message to the browser console (used for debugging).       | `window.dump("Loading complete");`                                                   |
| **`window.scrollTo(x, y)`**                     | Scrolls the page to specific coordinates.                           | `window.scrollTo(0, 500);`                                                           |

🔹 Example:

```js
window.onload = function() {
  addPara();
};
```

---

## 🧠 **Summary Review**

| Task                 | Function/Property                                                       |
| -------------------- | ----------------------------------------------------------------------- |
| Retrieve by ID       | `document.getElementById(id)`                                           |
| Retrieve by Tag Name | `document.getElementsByTagName(tagName)`                                |
| Create Element       | `document.createElement(tagName)`                                       |
| Add to Document      | `appendChild()`, `insertBefore()`, `replaceChild()`                     |
| Modify Content       | `element.innerHTML`                                                     |
| Modify Style         | `element.style.propertyName`                                            |
| Modify Attribute     | `setAttribute()`, `getAttribute()`, `removeAttribute()`                 |
| Manage Window        | `window.open()`, `window.close()`, `window.dump()`, `window.scrollTo()` |
| Run After Load       | `window.onload`                                                         |

---

