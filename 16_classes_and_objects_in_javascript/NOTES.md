# Classes and Objects in JavaScript

## Class
_**A class is a blueprint or template for creating objects in JavaScript. It defines the structure and behavior by encapsulating data, or properties, and methods, or functions that are common to a group of objects.**_

* Classes provide a way to model real-world entities, bringing a level of abstraction to your code. 

---

## Object
_**Objects are specific instances of a class created based on the class blueprint. They represent specific entities on unique values for the properties defined in the class.**_

* Objects encapsulate state or property values and behavior or methods in a single unit.

---

## Object Literals
_**Object literals are a way to create ad hoc objects without defining a class.**_

* Ad hoc objects are objects created for a specific, temporary purpose — usually to hold or manipulate data on the fly — rather than being part of a predefined class or structure.

---

## Function Constuctors
_**Function constructors are regular JavaScript functions used to create and initialize objects. It's a convention to name functional constructors with an initial capital letter.**_

---

## Object Literals versus Function Constructors
| **Aspect** | **Object Literals** | **Function Constructors** |
|------------|---------------------|---------------------------|
| **Purpose** | Suitable for ad hoc objects | Ideal for creating multiple instances with shared properties and methods |
| **Use Case** | Storing individual customer orders | Creating instances of objects like "Car" |
| **Scenario** | Unique details for specific instances | Managing and modeling multiple similar objects (users, products, vehicles) |
| **Advantages** | Quick creation of one-off objects | Provides a structured and organized approach |
| **Applicability** | Adaptable for various scnerious | Especially useful for object-oriented programming in JavaScript |

---
## Notations for Accessing Object Properties
* In JavaScript, you can access objects and their properties using dot or bracket notations.

### Dot Notation
**Dot notation is the most common way to access object properties. You use a dot followed by the property name.**

### Bracket Notation
**Bracket notation is an alternative way to access object properties, especially useful when property names contain special characters or spaces. Bracket notation is also handy when you need to access properties dynamically, such as with variables.**

#### Note:
* Both dot and bracket notation serve the same purpose, accessing object properties. You can choose the one that best suits your needs and coding style.

---

## Array of Object
**An array of objects is a common and powerful way to store and manage structured data in JavaScript. They allow you to organize and manipulate data in a structured manner by combining the features of both arrays and objects.**

### Creating an Array of Objects
* place objects using square brackets

#### **Synatx**
```js
const obj_name = [
    {name : "Sehrish", age: 19},
    {name : "Aiman", age: 20}
];
```
### Accessing Elements
* we can access elements within an array of objects using the array index, and then you can access object properties using dot notation.

### Modifying Array of Objects
* we can modify obects in the array by accesing new values to their properties.

### Iterating throught Array of Objects
* Looping throught an array performs operations on each object.

### Methods of iterating through objects
* For Loop
* forEach

### Modifying array of Objects
* Push method
* Pop method
* Filter
* Map
* Filter

---

## Nested Array of Objects
### First Object

