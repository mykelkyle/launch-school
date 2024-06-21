function union(arr1, arr2) {
  let newArr = [];

  arr1.forEach((int) => newArr.push(int));
  arr2.forEach((int) => {
    if (!newArr.includes(int)) {
      newArr.push(int);
    }
  });

  console.log(newArr);
}

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
