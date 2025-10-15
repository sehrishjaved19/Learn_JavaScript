# Accessing and Manipulating DOM Elements

## Accessing DOM
**Accessing the document object model or DOM means obtaining references to specific HTML elements on a web page.**
* Once you access a part, you can perform actions like reading content, modifying attributes, or adding event listeners.

## Methods to access DOM Elements
* getElementById
* getElementByClassName
* getElementByTagName
* querySelector

### 1. getElementById
getElementById is a method in JavaScript used to access a specific HTML element within the DOM based on its unique ID attribute.

### 2. getElementByClassName
getElementsByClassName method in JavaScript to access multiple HTML elements within the DOM that share the same class name.

### 3. getElementByTagName
getElementsbyTagName method in JavaScript to access multiple HTML elements within the DOM based on their tag name.

### 4. querySelector
querySelector is a versatile method in JavaScript used to access HTML elements within the DOM based on CSS-like selectors.

---

## Manipulating DOM Elements
**Manipulating elements using the DOM refers to changing the structure, content, attributes, or styles of HTML elements within a web page.**

---
# What is .classList?

* `.classList` is a property of DOM elements that gives you access to the list of CSS classes applied to that element.

* It does not include other attributes, only the classes.

* It provides methods to add, remove, toggle, or check classes — making it easier than using .className directly.

## **Accessing `classList`**

```js
const element = document.getElementById('myElement');
const classes = element.classList;
````

* `element.classList` gives you a **live collection** of the element’s CSS classes.

---

## **Common Methods of `classList`**

### 1. **`add(class1, class2, ...)`**

Adds one or more classes to the element.

```js
element.classList.add('newClass');
```

---

### 2. **`remove(class1, class2, ...)`**

Removes one or more classes from the element.

```js
element.classList.remove('oldClass');
```

---

### 3. **`toggle(class, force)`**

Toggles a class:

* If the class exists, it is removed.
* If it doesn’t exist, it is added.
* Optional second parameter: `true` forces adding, `false` forces removing.

```js
element.classList.toggle('active');
```

---

### 4. **`contains(class)`**

Checks if a class is present. Returns `true` if it exists, otherwise `false`.

```js
if (element.classList.contains('special')) {
  // Do something special
}
```

---

### 5. **`replace(oldClass, newClass)`**

Replaces one class with another.

```js
element.classList.replace('oldClass', 'newClass');
```

---

### 6. **`item(index)`**

Returns the class name at the specified index.

```js
const firstClass = element.classList.item(0);
```

---

### 7. **`toString()`**

Returns a string representing all the element’s classes.

```js
const classString = element.classList.toString();
```

---