// Create ad hoc objects

const Person = {
    firstName : "Sehrish",
    lastName : "Javed",
    getFullName : function() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(Person.getFullName());
