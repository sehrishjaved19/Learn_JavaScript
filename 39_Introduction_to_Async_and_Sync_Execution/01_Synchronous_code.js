// Synchronous Code: Example 1

console.log('Task 1');
console.log('Task 2');// only be executed once the task 1 is completed
console.log('Task 3');// only be executed once the task 2 is completed


// ===========================
console.log("------------------");
// Synchronous Code: Example 2
function greet(name) {
    console.log("Hello, " + name + "!");
}

function askQuestion() {
    console.log("How are you today?");
}

function farewell(name) {
    console.log("Goodbye, " + name + "!");
}

console.log("Start of the program");
greet("Alice");
askQuestion();
farewell('Aiman');
console.log("End of the program");

console.log("------------------");