# 📘 **Client-Side JavaScript with HTML**

## 🎯 Learning Objectives

After this lesson, you can:

* Define a **client-side script**
* Give examples of **client-side scripting uses**
* Explain how to use the **`<noscript>`** tag
* Describe **Event Binding**

---

## 💻 **1. What Is a Client-Side Script?**

| Term                   | Description                                                                       | Example                                                 |
| ---------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------- |
| **Client-Side Script** | A program that runs **on the user’s browser (client)** instead of the web server. | JavaScript code inside or linked to an HTML page.       |
| **Purpose**            | To make web pages **interactive, dynamic, and responsive**.                       | Form validation, animations, reacting to button clicks. |

🧠 **Key Idea:**

> When a web page loads in a browser, JavaScript runs **locally** on your computer — not on the web server.

---

### ⚙️ **2. When Client-Side Scripts Are Used**

| Use Case            | Description                                                                |
| ------------------- | -------------------------------------------------------------------------- |
| **Form Validation** | Checking if the user entered correct data before sending it to the server. |
| **Live Feedback**   | Processing input as the user types.                                        |
| **Dynamic Content** | Creating or changing elements on the page.                                 |
| **Event Handling**  | Responding to actions like button clicks, mouse movements, or page loads.  |

🧾 Example:

```html
<button onclick="alert('Button Clicked!')">Click Me</button>
```

---

## 🧩 **3. Adding JavaScript to HTML**

| Method                   | Description                                                                                                                | Example                                     |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Inline Script**        | Script is written directly in the HTML document (best for short scripts).                                                  | `html <script> alert("Hello!"); </script> ` |
| **External Script File** | Script is stored in a separate `.js` file and linked using the `src` attribute (preferred for larger or reusable scripts). | `html <script src="script.js"></script> `   |

🧠 **Best Practice:**
Use external JS files for better **organization, reusability, and performance**.

---

## 🚫 **4. The `<noscript>` Tag**

| Purpose          | Description                                                                                  | Example                                                                |
| ---------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **`<noscript>`** | Displays alternative content if scripting is **disabled** or **unsupported** in the browser. | `html <noscript>Your browser does not support JavaScript.</noscript> ` |

💡 Used for:

* Accessibility (users who turn off JS)
* Fallback messages or instructions

---

## 🖱️ **5. Event Binding**

| Term              | Description                                                                                             | Example                                     |
| ----------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| **Event**         | An action detected by the browser (e.g., click, load, hover).                                           | Button click, page load                     |
| **Event Binding** | Connecting (binding) an event to a JavaScript function that runs automatically when that event happens. | Run `showAnswers()` when button is clicked. |

### Common Events

| Event             | Trigger                              | Example                                          |
| ----------------- | ------------------------------------ | ------------------------------------------------ |
| **`onload`**      | When the page finishes loading       | `<body onload="init()">`                         |
| **`onclick`**     | When an element is clicked           | `<button onclick="showAnswers()">Click</button>` |
| **`onmouseover`** | When the mouse moves over an element | `<p onmouseover="highlight()">Hover over me</p>` |

---

### 🧠 Example: Inline Event Binding

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    function showAnswers() {
      alert("Button clicked!");
    }
  </script>
</head>
<body onload="alert('Page loaded!')">
  <button onclick="showAnswers()">Click Me</button>

  <noscript>
    JavaScript is disabled — please enable it for full functionality.
  </noscript>
</body>
</html>
```

---

## 🧾 **Summary Table**

| Concept                | Description                         | Example                                  |
| ---------------------- | ----------------------------------- | ---------------------------------------- |
| **Client-side script** | Runs on the browser, not the server | JavaScript inside `<script>`             |
| **Inline script**      | Code written directly inside HTML   | `<script>...</script>`                   |
| **External script**    | Linked `.js` file                   | `<script src="file.js"></script>`        |
| **`<noscript>`**       | Shown when JS is off                | `<noscript>Enable JavaScript</noscript>` |
| **Event Binding**      | Connecting events to functions      | `<button onclick="run()">Click</button>` |
| **Common Events**      | `onload`, `onclick`, `onmouseover`  |                                          |

---

