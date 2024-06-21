function multiplyAllPairs(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    arr2.forEach((v) => {
      result.push(v * arr1[i]);
    });
  }

  console.log(result.sort((a, b) => a - b));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]); // [2, 4, 4, 6, 8, 8, 12, 16]
