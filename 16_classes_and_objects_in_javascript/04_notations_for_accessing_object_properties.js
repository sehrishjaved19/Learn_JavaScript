// JavaScript Notations (Accessing Objects)

// Dot Notation(.)--> use to access object properties
const person = {
    firstName : "Sehrish",
    lastName : "Javed",
    age : 19
};
// Use Dot followed by the property name
console.log(person.firstName);// outrput : "Sehrish"
console.log(person.lastName);// output : "Javed"
console.log(person.age); // output : "19"


//  Bracket Notation([])-->another way to access object properties
// Used when property name has special characters or spaces

const Person = {
    "first name" : "Sehrish",
    "last name" : "Javed",
    age : 19
};
console.log(Person["first name"]);// outrput : "Sehrish"
console.log(Person["last name"]);// output : "Javed"
console.log(Person["age"]); // output : "19"

const propertyName = "first name";
console.log(Person[propertyName]); //accessing propoerties dynamically(such as with variables)