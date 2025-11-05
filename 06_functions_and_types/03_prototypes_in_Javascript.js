function Car(make, model, Year) {
    this.make = make;
    this.model = model;
    this.year = this.year;
}

Car.prototype.getName = function() {
    return this.make + ' ' + this.model + ' ' +  this.year;
}
