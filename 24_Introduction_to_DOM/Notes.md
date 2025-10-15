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

# DOM Structure
```mermaid
graph TD;
    A[document] --> B[html];
    B --> C[head];
    B --> D[body];
    C --> E[title];
    D --> F[input#input1];
    D --> G[input#input2];
    D --> H[button onclick="performOperation()"];
    D --> I[p#result];
```


## $0 Variable
**$0 is a special variable that you can use in the browser's development console as a quick reference to the currently selected DOM element in the elements panel in web development.**

* It is often used for debugging and inspecting elements in a web page. 

