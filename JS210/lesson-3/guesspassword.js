const rlSync = require("readline-sync");

password = "password";
tries = 0;

do {
  answer = rlSync.question("What is the password:\n");

  if (answer === password) {
    console.log("You have successfully logged in.");
    break;
  } else {
    console.log("You have been denied access.");
    tries += 1;
  }
} while (tries < 3);
