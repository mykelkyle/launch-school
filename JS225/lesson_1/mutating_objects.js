// let message = "Hello from the global scope!";

// function func(message) {
//   message = "Hello from the function scope!";
//   console.log(message);
// }

// func(message); // "Hello from the function scope!"
// console.log(message); // "Hello from the global scope!"

// let myObj = { message: "Greetings from the global scope!" };

// function func(obj) {
//   obj.message = "Greetings from the function scope!";
//   console.log(obj.message);
// }

// func(myObj); // "Greetings from the function scope!"

// console.log(myObj.message); // "Greetings from the function scope!"

// let message = "Hello from the global scope!";

// function func() {
//   message = "Hello from the function scope!";
//   console.log(message);
// }

// func(); // "Hello from the function scope!"
// console.log(message); // "Hello from the function scope!"

// let a = 10;
// let obj = {
//   a,
// };

// let newObj = obj;
// newObj.a += 10;

// console.log(obj.a === a); // 20
// console.log(newObj.a === obj.a); // 20

// console.log(obj.a);
// console.group(newObj.a);

let animal = {
  name: "Pumbaa",
  species: "Phacochoerus africanus",
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: "Timon",
  species: "Suricata suricatta",
};

menagerie.meerkat = animal;

menagerie.warthog === animal; // false
menagerie.meerkat === animal; // true

console.log(menagerie.warthog);
console.log(menagerie.meerkat);
