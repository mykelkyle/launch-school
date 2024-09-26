function retryOperation(cb) {
  let attempts = 0;

  function attempt() {
    return cb()
      .then(console.log)
      .catch((error) => {
        if (attempts < 2) {
          attempts++;
          console.log(`Retry attempt #${attempts}`);
          return attempt();
        } else {
          throw error;
        }
      });
  }

  return attempt().catch(() => console.error("Operation failed"));
}

retryOperation(() => {
  return new Promise((resolve, reject) => {
    Math.random() > 0.33 ? resolve("Success!") : reject(new Error("Fail!"));
  });
});
