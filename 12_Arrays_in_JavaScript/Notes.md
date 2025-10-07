# Array
_**Array is a data structure used to store and organize a collection of values. These values can be of various data types, such as numbers, strings, objects or even other array.**_

* Array in JavaScript are **ordered**, which means that te elements are **stored in a specific sequence**, and each element is **accessible by its index or position** in the array.

* It's important to note that arrays in JavaScript are **zero-indexed**, meaning the **first element is at index 0**, the second element is at index 1, and so on. 

## Creating Array
Creating an array in JavaScript is straightforward. You can use square brackets to declare an array and store elements within it, separated by commas.

```js
const myArray = ['element1','element2', 'so on...'];
```
### Key Features

* Arrays in JavaScript are mutable. This means that you can change, add, or remove elements after creating the array.

* Array can also contain other arrays, allowing yoy to create mulitidimensional arrays or complex data structures. This is a valuable feature for handling structured data.

* Arrays are frequently used for various tasks, such as storing lists of items, iterating through data, implementing stacks and queues, managing data in tables and grids, and much more.

* They are versatile and adaptable, making them a fundamental tool for developers.

* we can iterate throught elements of an array using loops, like for loops, or more modern methods like foreach, map, filter, and reduce. 

* Array Iteration is a powerful way to process and manipulate array elements.

---

## Manipulation and Iterating Arrays

JavaScript offers several built-in array methods to manipulate arrays efficiently, such as push, pop, shift, unshift, splice, concact, slice, indexOf, reverse, sort, and length property. Let's explore them in detail. 

### Push Method
The push method adds one or more elements to an array's ends and returns the array's new length. 

### Pop Method
The pop method removes the last element from an array and returns that element.

### Shift Method
The shift method removes the first element from an array and returns that element. 

### Unshift Method
The unshift method adds one or more elements to an array's beginning, and returns the array's new link. 

### Splice Method
The splice changes the contents of an array by removing, replacing or adding elements at a specific position. 
```js
array.splice(start, deleteCount, item1, item2, ...)
```
#### Explanation

| Parameter           | Description                                    |
| ------------------- | ---------------------------------------------- |
| `start`             | The index where changes begin                  |
| `deleteCount`       | Number of elements to remove                   |
| `item1, item2, ...` | (Optional) Elements to add starting at `start` |


### Concat Method
The concat method combines two or more arrays to create a new array without modifying the original ones.

### Slice Method
The slice method returns a shallow copy of a portion of an array into a new array without modifying the original content.

### indexOf Method
The indexOf method finds the index of a specified element within an array. It returns the index of the first occurrence of the element, or minus one, if it is not able to find the element. 

### Reverse Method
The reverse method reverses the order of elements, effectively reversing the array in place. 

### Sort Method
The sort method is used to sort the elements of an array. By default, it sorts elements as strings and in lexicographic order, to sort numbers correctly, you can provide a comparison function.

### Length Property
The length property returns the number of elements in the array. You can use it to determine the size, or to resize an array by changing its length. 

