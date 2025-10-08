// This is a single-line comment
let Name = "Sehrish"; // You can also add it at the end of a line

/* 
This is a multi-line comment.
You can write explanations or notes here.
*/
let age = 19;

let firstName = 'Sehrish';  // single quotes
let lastName = "Javed";     // double quotes
let greeting = `Hello!`;    // backticks (template literal)

let fullName = firstName + " " + lastName;
console.log(fullName); // Sehrish Javed

let full_Name = `${firstName} ${lastName}`;
console.log(full_Name); // Sehrish Javed

console.log(fullName.length); // counts total characters

console.log(fullName[0]); // S  (first letter) accessing letter at index 0

let name = "Sehrish";
console.log(name.length); // 7

console.log(name.toUpperCase()); // "SEHRISH"

console.log(name.toLowerCase()); // "sehrish"

let msg = "   Hello World!   ";
console.log(msg.trim()); // "Hello World!"

let word = "JavaScript";
console.log(word.slice(0, 4)); // "Java"

let first = "Sehrish";
let last = "Javed";
console.log(first.concat(" ", last)); // "Sehrish Javed"

let text = "I like Java";
console.log(text.replace("Java", "JavaScript")); // "I like JavaScript"

console.log(name.charAt(0)); // "S"

console.log(name.indexOf("r")); // 3

console.log(name.includes("ish")); // true
console.log(name.includes("abc")); // false
