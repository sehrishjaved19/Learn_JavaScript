// MATH OBJECTS

// Rounding Numbers
const number = 3.6;
const rounded = Math.round(number);// Rounded to nearest integer
console.log(number);//output: 3.6
console.log(rounded);//output: 4

const ceiling = Math.ceil(number); // Rounds up
console.log(ceiling);//output : 4

const floor = Math.floor(number); // Rounds down
console.log(floor);// output : 3

// Exponential and Logarithms
const base = 4;
const exponent = 2;

const power = Math.pow(base, exponent);
console.log(power); //output: 16

const squareRoot = Math.sqrt(base);
console.log(squareRoot); // output: 2

const natural_Log = Math.log(base);
console.log(natural_Log);//output: 1.3862943611198906(which is natural lof of base(variable))

// Random Number Generation
const random = Math.random(); // Generates a random number between 0 and 1 includeing ecimal values