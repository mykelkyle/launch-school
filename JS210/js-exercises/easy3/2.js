const rlSync = require("readline-sync");

let nums = [];
let last;

nums.push(rlSync.question("Enter the 1st number:\n"));
nums.push(rlSync.question("Enter the 2nd number:\n"));
nums.push(rlSync.question("Enter the 3rd number:\n"));
nums.push(rlSync.question("Enter the 4th number:\n"));
nums.push(rlSync.question("Enter the 5th number:\n"));

last = rlSync.question("Enter the last number:\n");

if (nums.includes(last)) {
  console.log(`The number ${last} appears in ${nums}.`);
} else {
  console.log(`The number ${last} does not appear in ${nums}.`);
}
