// let prot = {};

// let foo = Object.create(prot); // ?

// console.log(Object.getPrototypeOf(foo) === prot);
// console.log(prot.isPrototypeOf(foo));

// let prot = {};

// let foo = Object.create(prot);

// prot.isPrototypeOf(foo); // true
// Object.prototype.isPrototypeOf(foo); // true

function User(name) {
  this.name = name;
}

let dean = new User("Dean");

let mykel = {
  name: "mykel",
};

console.log(mykel.__proto__);
