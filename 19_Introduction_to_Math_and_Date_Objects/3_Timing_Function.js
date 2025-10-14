// Timing Functions

// SetTimeout--> Schedule function execution after a specified delay(in miliseconds)
setTimeout(function() {
    console.log("This message appears after a delay of 2 seconds.");
}, 2000); // displayed after a 2-second delay

//serInterval--> Schedule repeats for specified times
let count = 0;
const interval_Id = setInterval(function() {
    console.log("Count: " + count);
    count++;
    if (count>5) {
        clearInterval(interval_Id); // stop after 6 iterations
    }
}, 1000); // displayed every second