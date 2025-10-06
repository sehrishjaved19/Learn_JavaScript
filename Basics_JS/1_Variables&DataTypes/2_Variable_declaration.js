// ✅ JavaScript Variables and Data Types


// 🔹 Variable Declarations

// Using var (Function-scoped)
var name = "Sehrish";
console.log(name); // Output: Sehrish

// In JavaScript, variables declared with 'var' are hoisted —meaning their declaration is moved to the top of the scope,
// so you can use the variable even before the 'var' statement.
// For example:
a = 35;
console.log(a); // Output: 35
var a;


// Using let (Block-scoped)
let age = 22;
age = 23; // Reassignment is allowed
console.log(age); // Output: 23

// Using const (Block-scoped)
const country = "Pakistan";
// country = "India"; ❌ Error: Assignment to constant variable, contanct cannot be over write
console.log(country); // Output: Pakistan
