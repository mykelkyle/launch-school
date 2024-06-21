function missing(arr) {
  if (arr.length < 2) {
    console.log([]);
    return;
  }

  let sortedArr = arr.sort((a, b) => a - b);
  let missing = [];

  for (let i = 0; i < sortedArr.length; i++) {
    if (i === sortedArr.length - 1 || sortedArr.includes(sortedArr[i] + 1)) {
      continue;
    } else {
      for (let j = sortedArr[i] + 1; j < sortedArr[i + 1]; j++) {
        missing.push(j);
      }
    }
  }

  console.log(missing);
}

missing([-3, -2, 1, 5]); // [-1, 0, 2, 3, 4]
missing([1, 2, 3, 4]); // []
missing([1, 5]); // [2, 3, 4]
missing([6]); // []
