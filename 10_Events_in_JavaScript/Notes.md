

# **Events in JavaScript**

## 🔹 **What are Events?**

* Events are **actions or occurrences** that happen in the browser (like clicking, typing, or moving the mouse).
* JavaScript uses **event handling** to respond to these actions, making web pages **interactive and dynamic**.

---

### ⚙️ **Common JavaScript Events**

| **Event Type** | **When It Happens**                               | **Example Use / Description**                               |
| -------------- | ------------------------------------------------- | ----------------------------------------------------------- |
| **click**      | When a user clicks on an element (like a button). | Change text or trigger an action when a button is clicked.  |
| **mouseover**  | When the mouse cursor moves over an element.      | Display a message or highlight a section when hovered.      |
| **keydown**    | When a user presses a key on the keyboard.        | Show the key pressed or trigger actions based on key input. |
| **change**     | When the value of an input element changes.       | Display or process the new input value after editing.       |

---

### 🧩 **How to Handle Events**

There are three main ways to handle events in JavaScript:

1. **Inline in HTML**

   ```html
   <button onclick="myFunction()">Click me</button>
   ```

2. **Using Event Properties (like `onclick`)**

   ```js
   const button = document.getElementById("btn");
   button.onclick = function() {
     console.log("Button clicked!");
   };
   ```

3. **Using `addEventListener()` (modern way)**

   ```js
   const button = document.getElementById("btn");
   button.addEventListener("click", function() {
     console.log("Button clicked!");
   });
   ```

---

### 🧠 **Event Examples**

#### 🟢 Click Event

```html
<button id="btn">Click Me</button>
<p id="output"></p>

<script>
const button = document.getElementById("btn");
const output = document.getElementById("output");

button.onclick = function() {
  output.textContent = "Button clicked!";
};
</script>
```

---

#### 🟣 Mouseover Event

```html
<div id="box" style="width:100px;height:100px;background:lightblue;"></div>
<p id="message"></p>

<script>
const box = document.getElementById("box");
const message = document.getElementById("message");

box.onmouseover = function() {
  message.textContent = "Mouse over the div!";
};
</script>
```

---

#### 🔵 Keydown Event

```html
<input type="text" id="inputField" placeholder="Type something">
<p id="display"></p>

<script>
const input = document.getElementById("inputField");
const display = document.getElementById("display");

input.onkeydown = function(event) {
  display.textContent = `You pressed: ${event.key}`;
};
</script>
```

---

#### 🟠 Change Event

```html
<input type="text" id="textBox" placeholder="Type something and leave the field">
<p id="result"></p>

<script>
const textBox = document.getElementById("textBox");
const result = document.getElementById("result");

textBox.onchange = function() {
  result.textContent = `Value changed to: ${textBox.value}`;
};
</script>
```

---

### 💡 **Key Takeaways**

* Events = browser actions (like click, key press, input change).
* Event handlers = JavaScript functions that **respond** to those actions.
* Using events properly makes web pages **interactive, dynamic, and user-friendly**.

---


# **JavaScript `addEventListener()`**

### 🔹 **Definition**

`addEventListener()` is a **method** in JavaScript that allows developers to **attach event handlers** (functions) to HTML elements.
It’s the **modern, flexible, and recommended** way to handle events in web development.

---

### ⚙️ **Syntax**

```js
element.addEventListener(eventType, handlerFunction);
```

| **Parameter**     | **Meaning**                                                |
| ----------------- | ---------------------------------------------------------- |
| `element`         | The HTML element you want to attach the listener to        |
| `eventType`       | Type of event (e.g., `'click'`, `'change'`, `'mouseover'`) |
| `handlerFunction` | Function that runs when the event occurs                   |

---

### 🆚 **Comparison: Without vs With `addEventListener()`**

| **Method**                       | **Example**                                                                                              | **Description**                                                      |
| -------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Without `addEventListener()`** | `<button onclick="handleButtonClick()">Click me</button>`                                                | Inline event handler — mixes HTML and JS.                            |
| **With `addEventListener()`**    | `js const btn = document.getElementById('myButton'); btn.addEventListener('click', handleButtonClick); ` | Modern approach — separates JS from HTML for cleaner, reusable code. |

---

### 💡 **Benefits of Using `addEventListener()`**

| **Advantage**                        | **Description**                                     |
| ------------------------------------ | --------------------------------------------------- |
| 🧩 **Readability & Maintainability** | Keeps HTML and JS separate — easier to manage.      |
| 🚀 **Scalability**                   | Easier to manage events as code grows.              |
| 🔁 **Reusability**                   | Can reuse the same handler for multiple elements.   |
| 🧠 **Best Practices**                | Follows modern, unobtrusive JavaScript design.      |
| ⚡ **Multiple Listeners**             | Allows multiple event handlers on the same element. |

---

## 🎯 **Common Event Types with `addEventListener()`**

| **Category**           | **Event Type**           | **Triggered When…**                   | **Example Code Snippet**                                                                  |
| ---------------------- | ------------------------ | ------------------------------------- | ----------------------------------------------------------------------------------------- |
| 🖱️ **Mouse Events**   | `click`                  | User clicks an element                | `js document.getElementById('btn').addEventListener('click', ()=> alert('Clicked!'));`    |
|                        | `mousemove`              | Mouse moves over element              | `js div.addEventListener('mousemove', e => console.log(e.clientX, e.clientY));`           |
|                        | `mouseover` / `mouseout` | Mouse enters/leaves element           | `js div.addEventListener('mouseover', ()=>console.log('Mouse over'));`                    |
| ⌨️ **Keyboard Events** | `keydown`                | Key is pressed down                   | `js input.addEventListener('keydown', ()=>console.log('Key down'));`                      |
|                        | `keyup`                  | Key is released                       | `js input.addEventListener('keyup', ()=>console.log('Key released'));`                    |
|                        | `keypress`               | Key pressed that produces a character | `js input.addEventListener('keypress', ()=>console.log('Character typed'));`              |
| 🧾 **Form Events**     | `submit`                 | Form is submitted                     | `js form.addEventListener('submit', e=>{e.preventDefault(); console.log('Submitted');});` |
|                        | `change`                 | Input value changes                   | `js input.addEventListener('change', ()=>console.log('Value changed'));`                  |
|                        | `focus` / `blur`         | Input gains or loses focus            | `js input.addEventListener('focus', ()=>console.log('Focused'));`                         |
| 🌐 **Window Events**   | `load`                   | Page and resources fully loaded       | `js window.addEventListener('load', ()=>console.log('Loaded'));`                          |
|                        | `resize`                 | Browser window is resized             | `js window.addEventListener('resize', ()=>console.log('Resized'));`                       |
|                        | `scroll`                 | User scrolls the document             | `js window.addEventListener('scroll', ()=>console.log('Scrolled'));`                      |

---

### 🧩 **Example Summary**

#### ✅ Click Event

```js
document.getElementById('clickButton')
  .addEventListener('click', () => alert('Button clicked!'));
```

#### ✅ Mousemove Event

```js
document.getElementById('moveArea')
  .addEventListener('mousemove', e => console.log(e.clientX, e.clientY));
```

#### ✅ Keydown/Keyup

```js
const input = document.getElementById('keyInput');
input.addEventListener('keydown', () => console.log('Key down'));
input.addEventListener('keyup', () => console.log('Key up'));
```

#### ✅ Form Submit

```js
document.getElementById('myForm')
  .addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form submitted!');
  });
```

#### ✅ Window Load

```js
window.addEventListener('load', () => console.log('Page loaded'));
```

---

### 🏁 **Conclusion**

* `addEventListener()` is the **standard, modern way** to handle events.
* It improves **readability, reusability, and scalability**.
* Supports **multiple listeners**, making it essential for complex and dynamic web apps.

---

