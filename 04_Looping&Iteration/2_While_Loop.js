//While loop
//Fibonacci sequence (It’s a series of numbers where each number is the sum of the two before it.)

let limit = 50;  // The maximum number to go up to
let a = 0;       // First Fibonacci number
let b = 1;       // Second Fibonacci number

while (a <= limit) {
    console.log(a);  // Print the current Fibonacci number

    let temp = a + b;  // Calculate the next number (sum of previous two)
    a = b;             // Move 'a' forward (old 'b' becomes new 'a')
    b = temp;          // Move 'b' forward (new 'temp' becomes new 'b')
}
