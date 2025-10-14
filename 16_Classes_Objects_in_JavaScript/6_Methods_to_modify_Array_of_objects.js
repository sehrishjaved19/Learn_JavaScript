// Adding objects --> Push method
const students = [
    { name : "Sehrish", age : 19},
    { name : "Aiman", age : 20},
    { name : "Fatima", age : 19}
];
students.push({name : "Khadijah", age : 23});
console.log(students);
/* output:
 [
  { name: 'Sehrish', age: 19 },
  { name: 'Aiman', age: 20 },
  { name: 'Fatima', age: 19 },
  { name: 'Khadijah', age: 23 }
] 
*/

// Removing objects--> Pop method

const removedStudent = students.pop(); //output: Remove the last student
console.log(students);
/* output:
[
  { name: 'Sehrish', age: 19 },
  { name: 'Aiman', age: 20 },
  { name: 'Fatima', age: 19 }
]
*/

// Filtering and mapping
const adults = students.filter(student => student.age == 20);
console.log(adults);
/* output:
[ { name: 'Aiman', age: 20 } ]
*/

const studentNames = students.map(student => student.name);//creates an array of student names
console.log(studentNames);
/* output: 
[ 'Sehrish', 'Aiman', 'Fatima' ]
*/

// Searching for objects

const student = students.find(student => student.name === "Sehrish");
console.log(student.age);// output = 19