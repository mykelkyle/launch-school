function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype.accelerate = function () {
  console.log("Accelerate");
};
Vehicle.prototype.decelerate = function () {
  console.log("Decelerate");
};

function Car(color, weight, license) {
  Vehicle.call(this, color, weight);
  this.license = license;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.honk = function () {
  console.log("Honk");
};

let car = new Car("red", 3300, "BXY334");
car.accelerate(); // Accelerate
car.honk(); // Honk
car.decelerate(); // Decelerate
console.log(car.color, car.weight, car.license);
// red 3300 BXY334
