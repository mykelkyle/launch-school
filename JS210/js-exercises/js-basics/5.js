const rlSync = require("readline-sync");

let firstNum = rlSync.question("==> Enter the first number:\n");
let secondNum = rlSync.question("==> Enter the second number:\n");

console.log(
  `==> ${firstNum} + ${secondNum} = ${Number(firstNum) + Number(secondNum)}`
);
// ==> Enter the first number:
// 23
// ==> Enter the second number:
// 17
// ==> 23 + 17 = 40
// ==> 23 - 17 = 6
// ==> 23 * 17 = 391
// ==> 23 / 17 = 1
// ==> 23 % 17 = 6
// ==> 23 ** 17 = 1.4105003956066297e+23
