

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
