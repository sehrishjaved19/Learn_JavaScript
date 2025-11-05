// Function Constructor
// used to create and initialize objects
// Named with a capital letter

function Car (make, model) {
    this.make = make;
    this.model = model;
}

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log('Car1 details are', car1);
console.log('Car2 details are', car2);