// String
const first_Name = "Sehrish"; // double quotes
const last_Name = 'Javed'; // single quotes
const full_Name = `Full Name is ${first_Name} ${last_Name}`; // backticks (template literal)
console.log(first_Name);// output: Sehrish
console.log(last_Name);// output: Javed
console.log(full_Name);// output: Full Name is Sehrish Javed


// String Concatenation
let fullName = first_Name + " " + last_Name;
console.log(fullName); //output: Sehrish Javed
let greeting = `Hello! `;    // backticks (template literal)
console.log(greeting + fullName);// output: Hello! Sehrish Javed


//String length
console.log(fullName.length); // counts total characters(SPACE INCLUDED)


//Accessing Characters
console.log(fullName[0]); // S  (first letter) accessing letter at index 0


// Changing Case
console.log(first_Name.toUpperCase()); // "SEHRISH"
console.log(first_Name.toLowerCase()); // "sehrish"

// String Searching
console.log(first_Name.indexOf("r")); // 3
console.log(first_Name.charAt(0)); // "S"
console.log(first_Name.includes("ish")); // true
console.log(first_Name.includes("abc")); // false

// SubString extraction
const msg = "Hello, World!";
const subMsg1 = msg.substring(0,5);// reterives portion from index 0 to bofore 5(mean index 5 is not included)
const subMsg2 = msg.slice(7);//reterives porton starting from index7 till end.
const subMsg3 = msg.substr(7,4);//substr is no longer recommended(start from index 7, and spanning 5 characters)

console.log(subMsg1);// output : 'Hello'
console.log(subMsg2);//output: 'World!'
console.log(subMsg3);//output: 'Worl'


// Replacing sunstrings
let text = "I like Java";
console.log(text.replace("Java", "JavaScript")); //output: "I like JavaScript"


//String trimming--> Removes leading and tailing white spaces
const textToTrim = '   Trim me! ';//constains unnecessary spaces
console.log(textToTrim.trim()); //output: Trim me!


// Splitting strings--> Splits into an array of substrings
const csvData = "Alice,25,New York;Bob,30,Los Angeles;Charlie,28,Cicago";
const peopleArray = csvData.split(';');
console.log(peopleArray);
/* output:
[ 'Alice,25,New York', 'Bob,30,Los Angeles', 'Charlie,28,Cicago' ]
*/
