# Looping and Iteration
**Looping and iterations in JavaScripty are techniques that allow you to execute a block of code repeatedly.**
* They are used to perform repetitive tasks, traverse data structures like array and onjects, and handle various scenarious in your code.

---

## Loops in JavaScript
**Loops in JavaScript are essential for automating repetitive tasks and processing large sets of data efficiently. They allow you to iterate through arrays, perform actions on each element, and control the flow of your code dynamically.**

## Types of Looping Structures:
* For loop
* While loop
* Do While loop

## For loop
**A for loop is a control structure in JavaScript that allows you to execute a block of code repeatedly for a specified number of times, or until a particular condition is met.**

### It consists of three parts:

* initialization
* condition
* update.

### Initialization
Initialization, this part is where you initialize a loop control variable, typically with an initial value.
### Condition
Condition, this is a Boolean expression that is evaluated before each iteration. If the condition is true, the loop continues, otherwise it terminates. 
### Update
Update, this part is responsible for changing the loop control variable in each iteration, often incrementing or decrementing its value.

```js
for(initialization; condition; update){
    //code to be executed
}
```
---
## while loop
**A while loop is a control structure in JavaScript that allows you to execute a block of code repeatedly. As long as the specified condition is true, it continually evaluates the condition before each iteration.**

```js
while(condition){
    //code to be executed
}
```
---
## Do While loop
**A do while loop in JavaScript is a control structure that allows you to execute a block of code repeatedly as long as a specified condition is true. Unlike the for or while loops, a do while loop guarantees that the code block will execute at least once, even if the condition is initially false**

```js
do{
    //code to be executed
} while(condition);
```

---