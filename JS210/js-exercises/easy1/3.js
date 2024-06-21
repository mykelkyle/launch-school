let rlSync = require("readline-sync");

const CONVERSION = 10.7639;

let length = Number(
  rlSync.question("Enter the length of the room in meters:\n")
);
let width = Number(rlSync.question("Enter the width of the room in meters:\n"));

let area = parseFloat(length) * width;

console.log(
  `The area of the room is ${area} (${area * CONVERSION} square feet).`
);
