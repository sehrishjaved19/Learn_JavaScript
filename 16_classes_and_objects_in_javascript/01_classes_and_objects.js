
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//creating an instance of the Person class

const person1 = new Person('Sehrish', 'Javed');
console.log(person1.getFullName()); // output: "Sehrish Javed"

// Another Class and object
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    startEngine() {
        console.log (`The ${this.make} ${this.model}'s engine is running.`);
    }
}

const myCar = new Car("Toyota", "Camry", 2024);
myCar.startEngine();