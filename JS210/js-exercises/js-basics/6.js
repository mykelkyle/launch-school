const rlSync = require("readline-sync");

let phrase = rlSync.question("Please enter a phrase:\n");

console.log(`There are ${phrase.length} characters in ${phrase}.`);
