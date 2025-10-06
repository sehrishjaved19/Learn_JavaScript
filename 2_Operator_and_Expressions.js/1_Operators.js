// ARITHMETIC OPERATORS
let x = 35;
let y = 5;

let sum = x+y; //Addition
console.log(sum); // output: 40

let difference = x-y; //Difference
console.log(difference); //output: 30

let product = x*y; //multiplication
console.log(product);//output: 175

let quotient = x/y; //Division
console.log(quotient); //output: 7

let remainder = x % y; //Modulus
console.log(remainder); //output: 0

//COMPARISON OPERATORS
let a = 5;
let b = 8;

let isEqual = a==b; //equality
console.log(isEqual);

let isNotEqual = a!=b; //Inequality
console.log(isNotEqual);

let isStrictEqual = a===b; //Strict equality
console.log(isStrictEqual);

let isStrictNotEqual = a!==b; //strict inequality
console.log(isStrictNotEqual);

let isGreaterThan = a>b; //Greater Than
console.log(isGreaterThan);

let islessThan = a<b; //less Than
console.log(islessThan);

let isGreaterOrThan = a>b; //Greater Than or Equal to
console.log(isGreaterOrThan);

let islessOrThan = a<=b; //less Than or Equal to
console.log(islessOrThan);

// LOGICAL OPERATOR
let hasPermission = true;
let isMember = false;

let canAccessResource = hasPermission && isMember; // Logical AND
console.log(canAccessResource);
let canViewPage = hasPermission || isMember; // Logical OR
console.log(canViewPage);
let isDenied = !hasPermission; // Logical NOT
console.log(isDenied);

//ASSIGNMENT OPERATOR
let m = 10; // Assigns the value 10 to the variable m
m += 5; // Equivalent to m = m + 5 (adds 5 to the current value of x)
console.log(m);

//UNARY OPERATORS
let count = 5;
console.log(count);
count++ ; //Incremnet count by 1 (count is now 6)
console.log(count);
count-- ; // Decrement count by 1 (count is now 5 again)
console.log(count);