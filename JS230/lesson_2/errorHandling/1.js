function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

flakyService()
  .then((msg) => {
    console.log(msg);
  })
  .catch(() => {
    console.log(`An error occurred`);
  });
