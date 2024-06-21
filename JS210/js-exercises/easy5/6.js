function sequence(int) {
  let arr = [];

  for (let i = 1; i <= int; i++) {
    arr.push(i);
  }

  console.log(arr);
}

sequence(5); // [1, 2, 3, 4, 5]
sequence(3); // [1, 2, 3]
sequence(1); // [1]
