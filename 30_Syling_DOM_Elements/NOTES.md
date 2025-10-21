# 🌈 Styling DOM Elements — Summary


## 🧩 What is Styling in the DOM?

Styling DOM elements means **changing the visual appearance** of HTML elements **through JavaScript** using **CSS properties**.

It allows you to dynamically modify:

* Colors 🎨
* Sizes 📏
* Positions 📍
* Visibility 👁️
* Layout or animations ⚡

This is useful for **interactive, responsive web design**.

---

## 🛠️ Methods to Style DOM Elements

### 1. **`element.style.property`**

Directly modifies the inline style of an element.

📘 Example:

```html
<button id="myButton">Click Me</button>
```

```js
const button = document.getElementById("myButton");
button.style.backgroundColor = "blue";
button.style.color = "white";
button.style.fontSize = "16px";
```

✅ Best for **individual property updates** (like color or size).

---

### 2. **`element.classList`**

Used to **add**, **remove**, or **toggle** CSS classes.

📘 Example:

```html
<div id="myDiv" class="active">This is a div.</div>
<button id="myButton">Toggle Class</button>
```

```js
const div = document.getElementById("myDiv");
const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  div.classList.toggle("active");

  if (div.classList.contains("active")) {
    div.style.backgroundColor = "green";
  } else {
    div.style.backgroundColor = "yellow";
  }
});
```

✅ Best for **switching predefined CSS styles** dynamically.

---

### 3. **`element.setAttribute("style", "CSS rules")`**

Sets or replaces the **entire `style` attribute**.

📘 Example:

```html
<p id="myParagraph" style="color: red;">This is a paragraph.</p>
```

```js
const para = document.getElementById("myParagraph");
para.setAttribute("style", "color: blue; font-size: 18px;");
```

⚠️ Replaces all existing inline styles — not good for partial updates.

---

### 4. **`element.style.cssText`**

Sets the **entire inline style** at once using a CSS string.

📘 Example:

```html
<p id="myText">Sample text</p>
```

```js
const text = document.getElementById("myText");
text.style.cssText = "color: green; font-weight: bold;";
```

✅ Convenient for multiple updates in one line
⚠️ Replaces all existing inline styles.

---

### 5. **`element.style.setProperty(propertyName, value, priority?)`**

Sets a specific CSS property (optionally marked `!important`).

📘 Example:

```js
const paragraph = document.getElementById("myParagraph");
paragraph.style.setProperty("color", "purple", "important");
```

✅ Best for **precise control** with `!important` priority.

---

### 6. **`element.style.removeProperty(propertyName)`**

Removes a specific CSS property from an element.

📘 Example:

```js
const paragraph = document.getElementById("myParagraph");
paragraph.style.removeProperty("font-size");
```

✅ Useful for **resetting styles** without affecting other properties.

---

## 🧠 Summary Table

| Method                                 | Description                                 | Replaces All Styles? |
| -------------------------------------- | ------------------------------------------- | -------------------- |
| `element.style.property`               | Directly sets a CSS property                | ❌ No                 |
| `element.classList`                    | Adds/removes/toggles CSS classes            | ❌ No                 |
| `element.setAttribute("style", "...")` | Replaces entire inline style                | ✅ Yes                |
| `element.style.cssText`                | Sets all inline styles as one string        | ✅ Yes                |
| `element.style.setProperty()`          | Sets one property (optionally `!important`) | ❌ No                 |
| `element.style.removeProperty()`       | Removes one specific property               | ❌ No                 |


