var counter = 5;
var rate = 3;
console.log("The total value is " + String(counter * rate));
console.log(counter());

function counter(count) {
  // ...
}

// => "The total value is 15"

// function counter(count) {
//   // ...
// }

// console.log("The total value is " + String(counter * rate));

// var counter = 5;
// var rate = 3;

// => "The total value is NaN"

// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log("The total value is " + String(counter * rate));

// let counter = 5;
// let rate = 3;

// function counter(count) {
//   // ...
// }

// console.log("The total value is " + String(counter * rate));

// => SyntaxError: Identifier 'counter' has already been delcared.
