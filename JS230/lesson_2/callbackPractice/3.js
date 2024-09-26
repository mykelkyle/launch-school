function processData(numArr, cb) {
  let newArr = [];

  setTimeout(() => {
    for (let i = 0; i < numArr.length; i++) {
      newArr.push(cb(numArr[i]));
    }

    console.log(newArr);
  }, 1000);
}

processData([1, 2, 3], (num) => {
  return num * 2;
});
