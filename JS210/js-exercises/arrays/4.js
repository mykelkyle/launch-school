function concat(array1, ...args) {
  let newArr = [];

  array1.forEach((el) => newArr.push(el));

  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      arg.forEach((el) => newArr.push(el));
    } else {
      newArr.push(arg);
    }
  });

  console.log(newArr);
}

concat([1, 2, 3], [4, 5, 6], [7, 8, 9]); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], "a", ["one", "two"]); // [1, 2, "a", "one", "two"]
concat([1, 2], ["three"], 4); // [1, 2, "three", 4]
