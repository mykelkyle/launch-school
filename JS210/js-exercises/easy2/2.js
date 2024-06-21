function logInBox(str) {
  console.log(`+${"-".repeat(str.length + 1)} +`);
  console.log(`|${" ".repeat(str.length + 1)} |`);
  console.log(`| ${str} |`);
  console.log(`|${" ".repeat(str.length + 1)} |`);
  console.log(`+${"-".repeat(str.length + 1)} +`);
}

logInBox("To boldly go where no one has gone before.");
