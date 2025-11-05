// 🔹 Primitive Data Types

// String
let city = "Lahore";
console.log(typeof city); // Output: string

// Number
let marks = 95.5;
console.log(typeof marks); // Output: number

// Boolean
let isPassed = true;
console.log(typeof isPassed); // Output: boolean

// Undefined
let x;
console.log(typeof x); // Output: undefined

let n = null;
console.log(typeof n); // Output: object 

// Const must me initialized while for let if we dont initialze only declare a variable i will give output as undefined while const throw an error.

// 🔹 Primitive Data Types
// Object: an object is a collection of key value pairs used for structured data storage.

const Student = {
    fullName: "Sehrish Javed", // 'fullName' is a key, and "Sehrish Javed" is its value
    age: 19,
    cgpa: 3.81,
    isPass: true
}; // 'Student' is an object

console.log(Student);              // prints the whole object
console.log(typeof Student);       // prints the type of 'Student' (which is "object")
console.log(Student["fullName"]);  // accessing value using bracket notation
console.log(Student.age);          // accessing value using dot notation

// Both dot notation (.) and bracket notation (["key"]) can be used 
// to access values inside an object.

Student.age = Student.age + 1;
console.log(Student.age);

// Note: Even though 'Student' is declared using 'const', 
// we can still change (update) its property values.
// This is because 'const' only prevents reassigning the variable itself 
// to a new object — it does NOT make the contents inside the object immutable.
// In other words, the memory reference (address) of 'Student' stays the same,
// but we can modify the values stored inside it.
