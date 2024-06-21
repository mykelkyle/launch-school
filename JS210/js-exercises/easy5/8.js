function sequence(count, multiple) {
  let arr = [];

  for (let i = multiple; arr.length < count; i += multiple) {
    arr.push(i);
  }

  console.log(arr);
}

sequence(5, 1); // [1, 2, 3, 4, 5]
sequence(4, -7); // [-7, -14, -21, -28]
sequence(3, 0); // [0, 0, 0]
sequence(0, 1000000); // []
