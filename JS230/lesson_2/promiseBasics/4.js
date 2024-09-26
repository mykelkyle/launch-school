let processData = new Promise((resolve, reject) => {
  console.log("Processing...");
  setTimeout(() => {
    resolve("Operation complete.");
  }, 2000);
});

processData.then(console.log).finally(() => {
  console.log("Cleaning up resources...");
});
