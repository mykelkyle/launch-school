function getName(prompt) {
  let rlSync = require("readline-sync");
  return rlSync.question(prompt);
}

let firstName = getName("What is your first name?");
let lastName = getName("What is your last name?");
console.log(`Hello, ${firstName} ${lastName}!`);
