# Introduction to the Document Object Model (DOM)
The document object model, or DOM, is a programming interface for web documents. It represents the web page so that programs like JavaScript can change the document structure, content, and style. It provides a structured representation of the web page, making it easier for developers to interact with and manipulate web content.

## Document
**The term document refers to a web page or any XML document such as HTML, XHTML, or XML.**

## DOM
**The DOM represents this document as a structured tree-like hierarchy with each part represented as a node.**

## Object
**An object represents a JavaScript object that corresponds to an element, attribute, or content within the web document.**

### Note:
* Each DOM element is an element of the web page, accessible and manipulable using JavaScript. The model denotes the structured and abstract representation of a web document. 

### how DOM works?
When a web page is loaded in a browser, the browser creates a DOM representation of the page's structure. It forms a hierarchical tree structure with the document's root as the top node. Document node is the top level node representing the entire web page. Element nodes represent HTML elements such as div, p, a, and form the bulk of the DOM structure. Attribute nodes represent attributes of HTML elements including id, class, and src. Text nodes contain the text content within elements.
```
# DOM Structure
document
│
└── html
    ├── head
    │   └── title
    └── body
        ├── input#input1
        ├── input#input2
        ├── button (onclick="performOperation()")
        └── p#result
```

## $0 Variable
**$0 is a special variable that you can use in the browser's development console as a quick reference to the currently selected DOM element in the elements panel in web development.**

* It is often used for debugging and inspecting elements in a web page. 


## 🧩 What is a Node?

In the **DOM**, *everything* inside an HTML document is represented as a **node** —
elements, text, comments, and even the document itself.

Example HTML:

```html
<div>
  <p>Hello</p>
</div>
```

DOM Tree (simplified):

```
#document                ← Document node
 └── <html>              ← Element node
      └── <body>         ← Element node
           └── <div>     ← Element node
                └── <p>  ← Element node
                     └── "Hello"  ← Text node
```

---

## 🧠 What is `nodeType`?

Each node in the DOM has a property called `.nodeType`
which tells you **what kind of node** it is — using a **numeric code**.

---

### 🔢 Common Node Types

| Node Type | Constant Name        | Description                       | Example                |
| --------- | -------------------- | --------------------------------- | ---------------------- |
| `1`       | `ELEMENT_NODE`       | Any HTML element                  | `<div>`, `<p>`, `<h1>` |
| `3`       | `TEXT_NODE`          | Text inside elements              | `"Hello"`              |
| `8`       | `COMMENT_NODE`       | Comment in HTML                   | `<!-- comment -->`     |
| `9`       | `DOCUMENT_NODE`      | The whole document                | `document`             |
| `10`      | `DOCUMENT_TYPE_NODE` | The `<!DOCTYPE html>` declaration | `<!DOCTYPE html>`      |

---

### 🔍 Example in JavaScript

```js
const p = document.querySelector("p");
console.log(p.nodeType);           // 1 (ELEMENT_NODE)
console.log(p.firstChild.nodeType); // 3 (TEXT_NODE)
```

If your HTML is:

```html
<p>Hello</p>
```

Then:

* `p` → element node → `nodeType` = `1`
* `p.firstChild` → text node `"Hello"` → `nodeType` = `3`

---

### 💡 Why it matters

You can use `nodeType` to:

* Differentiate between **text** and **element** nodes
* Avoid accidentally handling whitespace or comments
* Write clean DOM traversal code

Example:

```js
if (node.nodeType === 1) {
  console.log("This is an element node");
}
```

---

### ✅ Summary

| Property       | Meaning                                            |
| -------------- | -------------------------------------------------- |
| `.nodeType`    | A numeric value indicating what kind of node it is |
| `.nodeName`    | The node’s name (`DIV`, `P`, `#text`, `#comment`)  |
| `.textContent` | The text inside that node (if any)                 |

## Types of Nodes

### 1. Document Node
Represents the **entire HTML document**.  
Access it using:
```js
var documentNode = document;
documentNode; // Shows the entire document object
```

### 2. Element Node

Represents an **HTML element**.
Example:
```js
$0; // Outputs the selected <p> or <div> element
```

### 3. Text Node

Represents the **text content** within an element.
Example:
```js
$0.textContent; // Returns the text content of the selected element
```

### 4. Attribute Node

Represents an element’s **attributes**.
Example:
```js
$0.getAttribute("href");
// Returns the value of the 'href' attribute
```

### 5. Comment Node

Represents an **HTML comment** within the document.
Example (accessing a comment inside an element with id="myDiv"):
```js
var commentNode = document.getElementById("myDiv").childNodes[0];
var commentContent = commentNode.nodeValue;
```

### 6. Document Type Node

Represents the **DOCTYPE declaration**(<!DOCTYPE html>).
Example:
```js
document.doctype; // Returns the document type node
```
---

## Need of DOM
* Structured access of web content
* Dynamic and interactive web applications
* Content Manipulation
* Cross- browser compatibility
* Real-Time updates
* Event handling
* Accessibility
* User experience enhancement

---
