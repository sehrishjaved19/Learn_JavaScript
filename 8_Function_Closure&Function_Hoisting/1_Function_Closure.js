// Function Closure
function outerFunction() {
    const outerVar = "I am from outer function";
    function innerFunction() {
        console.log(outerVar); //innerFunction can access outerVar
    }
    return innerFunction;
}

const closure = outerFunction();
closure(); //This will log(print) "I am from the outer function"

function greet(name) {
    const greeting = "Hello, ";
    function sayHello() {
        console.log(greeting + name);
    }
    return sayHello;
}
const greetJohn = greet("John");
const greetAiman = greet("Aiman");

greetJohn();
greetAiman();