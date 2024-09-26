let flakyService = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (true) {
      resolve("Service worked!");
    } else {
      reject("Service failed...");
    }
  }, 1000);
});

flakyService.then(console.log).catch(console.error);
