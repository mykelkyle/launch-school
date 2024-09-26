function processDataPromise(numArr, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numArr.map(cb);
      resolve(processed);
    }, 1000);
  });
}

processDataPromise([1, 2, 3], (num) => num * 2).then((processedNums) => {
  console.log(processedNums);
});
