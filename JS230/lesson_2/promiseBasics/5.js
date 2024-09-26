let promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
});

promise
  .then((result) => {
    console.log(result);
    return result * 2;
  })
  .then((result) => {
    console.log(result);
    return result + 5;
  })
  .then((result) => {
    console.log(result);
  });
