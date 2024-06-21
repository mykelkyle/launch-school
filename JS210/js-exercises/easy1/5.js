rlSync = require("readline-sync");

let int = Number(rlSync.question("Please enter an integer greater than 0:\n"));

let computation = rlSync.question(
  `Enter "s" to compute the sum, or "p" to compute the product.\n`
);

let answer;

if (computation === "s") {
  answer = sumConsecutive(int);
  console.log(`The sum of the integers between 1 and ${int} is ${answer}.`);
} else {
  answer = productConsecutive(int);
  console.log(`The product of the integers between 1 and ${int} is ${answer}.`);
}

function sumConsecutive(int) {
  let sum = 0;
  for (let i = 1; i <= int; i++) {
    sum += i;
  }

  return sum;
}

function productConsecutive(int) {
  let product = 1;
  for (let i = 1; i <= int; i++) {
    product *= i;
  }

  return product;
}
