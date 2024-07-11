// class Cat {
//   static genericGreeting() {
//     console.log("Hello! I'm a cat!");
//   }

//   constructor(name = "Kitty") {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hi, my name is ${this.name}`);
//   }

//   rename(name) {
//     this.name = name;
//   }
// }

// let kitty = new Cat();
// kitty.greet();
// kitty.rename("Sophie");
// kitty.greet();

// Cat.genericGreeting();

// class Rectangle {
//   constructor(width, length) {
//     this.width = width;
//     this.length = length;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getLength() {
//     return this.length;
//   }

//   getArea() {
//     return this.width * this.length;
//   }
// }

// class Square extends Rectangle {
//   constructor(side) {
//     super(side, side);
//   }
// }

// let rect = new Rectangle(4, 5);

// console.log(rect.getWidth()); // 4
// console.log(rect.getLength()); // 5
// console.log(rect.getArea()); // 20

// let square = new Square(5);
// console.log(`area of square = ${square.getArea()}`); // area of square = 25

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = new Cat();

// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name); // logs undefined
// // console.log(fakeCat.speaks()); // logs undefined says meowwww.

// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }

//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//   }
// }

// let pudding = new Cat("Pudding", 7, "black and white");
// let butterscotch = new Cat("Butterscotch", 10, "tan and white");

// console.log(pudding.info());
// console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 4, "cat", status);
//   }

//   introduce() {
//     return `${super.introduce()} Meow meow!`;
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, status, master) {
//     super(name, age, 4, "dog", status);
//     this.master = master;
//   }

//   greetMaster() {
//     return `Hello ${this.master}! Woof, woof!`;
//   }
// }

// let cat = new Cat("Pepe", 2, "happy");
// console.log(
//   cat.introduce() ===
//     "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!"
// );
// // logs true

// class Vehicle {
//   constructor(make, model, wheels) {
//     this.make = make;
//     this.model = model;
//     this.wheels = wheels;
//   }

//   info() {
//     return `${this.make} ${this.model}`;
//   }

//   getWheels() {
//     return this.wheels;
//   }
// }

// class Car extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 4);
//   }
// }

// class Motorcycle extends Vehicle {
//   constructor(make, model) {
//     super(make, model, 2);
//   }
// }

// class Truck extends Vehicle {
//   constructor(make, model, payload) {
//     super(make, model, 6);
//     this.payload = payload;
//   }
// }

// class Something {
//   constructor() {
//     this.data = "Hello";
//   }

//   dupData() {
//     return this.data + this.data;
//   }

//   static dupData() {
//     return "ByeBye";
//   }
// }

// let thing = new Something();
// console.log(Something.dupData()); // "ByeBye"
// console.log(thing.dupData()); // "HelloHello"

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greeting() {
//     return `Hello, I'm ${this.name}. It's very nice to meet you.`;
//   }
// }

// class Shouter extends Person {
//   greeting() {
//     return super.greeting().toUpperCase();
//   }
// }

// let person = new Person("Jane");
// let shouter = new Shouter("Bob");

// console.log(person.greeting()); // Hello, I'm Jane. It's very nice to meet you.
// console.log(shouter.greeting()); // HELLO, I'M BOB. IT'S VERY NICE TO MEET YOU.

// class Shelter {
//   constructor() {
//     this.adoptions = {};
//   }

//   adopt(owner, pet) {
//     if (this.adoptions[owner.name]) {
//       this.adoptions[owner.name].push(pet);
//     } else {
//       this.adoptions[owner.name] = [pet];
//     }

//     owner.pets += 1;
//   }

//   printAdoptions() {
//     for (let prop in this.adoptions) {
//       console.log(`${prop} has adopted the following pets:`);
//       this.adoptions[prop].forEach((pet) => {
//         console.log(`A ${pet.animal} named ${pet.name}`);
//       });
//     }
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = 0;
//   }

//   numberOfPets() {
//     return this.pets;
//   }
// }

// class Pet {
//   constructor(animal, name) {
//     this.animal = animal;
//     this.name = name;
//   }
// }

// let butterscotch = new Pet("cat", "Butterscotch");
// let pudding = new Pet("cat", "Pudding");
// let darwin = new Pet("bearded dragon", "Darwin");
// let kennedy = new Pet("dog", "Kennedy");
// let sweetie = new Pet("parakeet", "Sweetie Pie");
// let molly = new Pet("dog", "Molly");
// let chester = new Pet("fish", "Chester");

// let phanson = new Owner("P Hanson");
// let bholmes = new Owner("B Holmes");

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

class Banner {
  constructor(message) {
    this.message = message;
    this.spaces = message.length;
  }

  displayBanner() {
    console.log(
      [
        this.horizontalRule(),
        this.emptyLine(),
        this.messageLine(),
        this.emptyLine(),
        this.horizontalRule(),
      ].join("\n")
    );
  }

  horizontalRule() {
    return `+${"-".repeat(this.spaces + 2)}+`;
  }

  emptyLine() {
    return `|${" ".repeat(this.spaces + 2)}|`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner("To boldly go where no one has gone before.");
banner1.displayBanner();
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

let banner2 = new Banner("");
banner2.displayBanner();
// +--+
// |  |
// |  |
// |  |
// +--+
