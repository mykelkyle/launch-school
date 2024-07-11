// class Phone {
//   constructor(brand, model, year) {
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//   }

//   checkBattery() {
//     console.log("Checking Battery...");
//   }

//   displayInfo() {
//     console.log(
//       `This is ${this.brand} ${this.model} was released in ${this.year}`
//     );
//   }
// }

// let iphone = new Phone("Apple", "iPhone 12", 2020);
// iphone.displayInfo();

class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log("Accelerating");
  }

  decelerate() {
    console.log("Decelerating");
  }
}

class Car extends Vehicle {
  constructor(color, weight, number) {
    super(color, weight);
    this.number = number;
  }

  honk() {
    console.log("Honking");
  }
}

class Boat extends Vehicle {
  constructor(color, weight, port) {
    super(color, weight);
    this.port = port;
  }

  dropAnchor() {
    console.log("Dropping anchor");
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {}

  land() {}
}

let car = new Car("Blue", "1 ton", 516362);
let boat = new Boat("Red", "3 tons", "Miami");
console.log(car instanceof Car);
console.log(boat instanceof Car);
