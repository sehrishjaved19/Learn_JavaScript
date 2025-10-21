
# 🌐 Introduction to Browser Object Model (BOM)

## 🧠 What is the Browser Object Model (BOM)?
The **Browser Object Model (BOM)** in JavaScript provides a structured way to **interact with the web browser** itself.  
It allows you to control browser behavior, manipulate windows or tabs, and access client-specific information.

> 🔹 **DOM** handles the content of a webpage.  
> 🔹 **BOM** handles the environment where the webpage runs (the browser).

---

## 🧩 Key Components of BOM
| **Component** | **Description** |
|----------------|----------------|
| **window** | Represents the browser window or tab; the root of the BOM. All global JS objects and functions belong to it. |
| **document** | Represents the webpage inside the window. Although part of the DOM, it’s closely related to BOM. |
| **navigator** | Provides information about the client’s browser (name, version, supported features). |
| **screen** | Contains details about the user’s screen (dimensions, color depth, etc.). |
| **history** | Gives access to the browser session’s history, allowing forward and backward navigation. |
| **location** | Provides info about the current URL and allows redirection or manipulation of it. |

---

## 🪟 The Global Window Object

The **`window`** object serves as the **root** of the BOM and provides access to browser-level functionality.

### ✨ Common Window Methods
| **Method** | **Purpose** |
|-------------|-------------|
| `window.alert(message)` | Displays an alert dialog. |
| `window.confirm(message)` | Displays a confirmation dialog. |
| `window.open(url, name, specs, replace)` | Opens a new window or tab. |
| `window.close()` | Closes the current browser window. |
| `window.location` | Accesses or manipulates the current URL. |
| `setTimeout(function, milliseconds)` | Delays function execution. |
| `localStorage` / `sessionStorage` | Stores client-side data persistently or temporarily. |
| `window.history` | Provides access to the user’s browsing history. |

---

## 🧭 Other BOM Objects Overview

| **Object** | **Purpose** |
|-------------|-------------|
| **navigator** | Info about browser type, version, and platform. |
| **screen** | Info about screen resolution and color depth. |
| **history** | Accesses browser history and navigation controls. |
| **location** | Handles URL management and redirection. |

---

## ⚙️ Integrating BOM with HTML

### 🔹 Steps:
1. Create an **HTML document** with proper structure.  
2. Add a **`<script>`** element to embed or link your JavaScript.  
3. Include **HTML buttons** to trigger BOM actions.  
4. Write your JavaScript file (e.g., `yourscript.js`) with BOM methods.  
5. Link it to your HTML using `<script src="yourscript.js"></script>`.  
6. Open the file in a browser and interact with buttons to test BOM functions.

---

## 🧾 Example: Using BOM in HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>BOM Example</title>
</head>
<body>
  <button onclick="window.alert('Hello! This is an alert box.')">Show Alert</button>
  <button onclick="window.open('https://www.example.com')">Open New Tab</button>
  <button onclick="window.location.href='https://www.google.com'">Go to Google</button>
</body>
</html>
```

---

## ⚖️ DOM vs. BOM

| **Aspect**         | **DOM (Document Object Model)**                           | **BOM (Browser Object Model)**                                |
| ------------------ | --------------------------------------------------------- | ------------------------------------------------------------- |
| **Purpose**        | Manages webpage content and structure.                    | Manages browser environment and behavior.                     |
| **Structure**      | Hierarchical (tree-like) representation of HTML elements. | Loosely organized objects (no hierarchy).                     |
| **Main Object**    | `document`                                                | `window`                                                      |
| **Focus**          | HTML elements, attributes, and text.                      | Browser window, navigation, storage, and history.             |
| **Common Uses**    | Modify content, styles, or events within the page.        | Show alerts, open/close windows, access URL, or browser data. |
| **Access Example** | `document.getElementById("demo")`                         | `window.alert("Hi!")`                                         |

---

## 🧩 Summary

* The **BOM** consists of the `window`, `document`, `navigator`, `screen`, `history`, and `location` objects.
* It allows browser-level control like navigation, user interaction, and client info access.
* Integrating BOM methods involves connecting **HTML** and **JavaScript** through event-driven interactions.
* The **DOM** manages **content**, while the **BOM** manages **browser features**.
* Both are essential for building **interactive and user-friendly web applications**.

