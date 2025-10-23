// Asynchronous Programming--> Executes code withiout blocking the execution thread
// Example 1

console.log("Start");
setTimeout(function () {
    console.log("Delayed message from example 1!");
}, 2000); // This code will execute after a 2-second delay
console.log("End");

//===================
console.log("-----------------------")

// Asynchronous Programming Example 2
function simulateAsyncOpeartion(callback) {
    setTimeout(function () {
        callback("Data from a simulated asynchronous operation");
    }, 3000); // simulate a 3-second delay
}

console.log ("Start of the program"); 
simulateAsyncOpeartion(function (data) {
    console.log("Data received: ", data);
    console.log("End of the program");
});

console.log("Async operation in progress...");