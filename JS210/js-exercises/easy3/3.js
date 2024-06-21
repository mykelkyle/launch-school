const rlSync = require("readline-sync");

let currAge = rlSync.question("What is your age?\n");
let retireAge = rlSync.question("At what age would you like to retire?\n");
const now = new Date();
let yearsLeft = retireAge - currAge;

console.log(
  `It's ${now.getFullYear()}. You will retire in ${
    now.getFullYear() + yearsLeft
  }.\nYou only have ${yearsLeft} years of work to go!`
);
