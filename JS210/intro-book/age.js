let rlSync = require("readline-sync");
let age = Number(rlSync.question("How old are you?\n"));
let future = 10;

console.log(`You are ${age} years old.`);

for (i = 0; i < 5; i++) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
  future += 10;
}
