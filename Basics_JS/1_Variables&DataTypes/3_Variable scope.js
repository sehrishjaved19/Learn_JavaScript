// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope 
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
console.log(blockVar);
console.log(blockLet);
console.log(blockConst);
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
// Invalid (uncommenting will cause errors)

// console.log(blockVar);❌
// console.log(blockLet);❌

// You will see output for blockVar, because it can be accessed outside the curly brackets {}. But you will see ReferenceError for blockLet because it cannot be accessed outside the curly brackets due to which it is known as block scoped variables. Such variables can only be accessed within curly brackets. You will see the same error for const as well.
// Note: A ReferenceError occurs when code attempts to use a variable that has not been declared or is outside of its scope, preventing proper access or execution.

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
}
show();

// console.log(functionVar); ❌// when accessing outside function Throws ReferenceError
// console.log(functionLet); ❌// when accessing outside function Throws ReferenceError
// console.log(functionConst);❌ // when accessing outside function Throws ReferenceError

// For the above code, when you view the output in the console, you will again see a ReferenceError for var, let, and const. To see the output, you need to add the // before the codes as shown below.
// You will see ReferenceError for functionVar because it cannot be accessed outside the function making it a function scoped variable. Similarly, you will not be able to access let and const because they are block scoped variables.
// Note: You will only see an error for functionVar because it acts as a blockage, preventing the execution of the subsequent lines of code. Ensure that your application is live throughout this process and that you have saved the file.

