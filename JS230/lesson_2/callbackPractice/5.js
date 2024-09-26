function startCounter(cb) {
  let counter = 0;

  let intId = setInterval(() => {
    counter++;

    if (cb(counter)) {
      clearInterval(intId);
    }
  }, 1000);
}

startCounter((count) => {
  console.log(count);
  return count === 5;
});
