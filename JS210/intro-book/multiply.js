// function multiply() {
//   let rlSync = require("readline-sync");
//   firstNum = Number(rlSync.question("Enter first number\n"));
//   secondNum = Number(rlSync.question("Enter second number\n"));

//   console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
// }

// multiply();

// function multiply(left, right) {
//   let product = left * right;
//   return product;
// }

// function getNumber(prompt) {
//   return parseFloat(question(prompt));
// }

// let left = getNumber("Enter the first number: ");
// let right = getNumber("Enter the second number: ");
// console.log(`${left} * ${right} = ${multiply(left, right)}`);

// parseFloat, question, multiply, getNumber - global;
// left, right, prompt - local;

// function evenOrOdd(number) {
//   if (number !== Number(number))
//     console.log("Not a valid integer")
//     break
//   else {
//     if (number % 2 === 0) {
//       console.log("even");
//     } else {
//       console.log("odd");
//     }
//   }
// }

// function evenOrOdd(num) {
//   if (num !== Number(num)) {
//     console.log("Not a valid integer.");
//     return;
//   }

//   if (num % 2 === 0) {
//     console.log("even");
//   } else {
//     console.log("odd");
//   }
// }

// evenOrOdd(3);
// evenOrOdd(2);
// evenOrOdd("one");

// if (foo() === true) {
//   return "bar";
// } else {
//   return qux();
// }

// function upcase(str) {
//   if (str.length > 10) {
//     return str.toUpperCase();
//   } else {
//     return str;
//   }
// }

// console.log(upcase("hello world"));
// console.log(upcase("goodbye"));

function numberRange(int) {
  switch (true) {
    case int >= 0 && int < 51:
      console.log(`${int} is between 0 and 50.`);
      break;
    case int > 50 && int < 101:
      console.log(`${int} is between 51 and 100.`);
      break;
    case int < 0:
      console.log(`${int} is less than 0.`);
      break;
    default:
      console.log(`${int} is greater than 100.`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
