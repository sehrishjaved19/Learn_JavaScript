// Arrays of Objects
const students = [
    { name : "Sehrish", age : 19},
    { name : "Aiman", age : 20},
    { name : "Fatima", age : 19}
];

// Accessing elements
console.log(students[0].name); // output : "Sehrish"
console.log(students[2].age); // output : 19

// Modifying elements--> assign values to properties
students[1].age = 21;
console.log(students[1].age); // output : "21"


// Loop through an Array of Objects--> Perform operations on each objects

// Using For Loop
for ( let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}// Output: Sehrish Aiman Fatima

// ForEach Loop
students.forEach(function(student) {
    console.log(student.name, student.age);
});