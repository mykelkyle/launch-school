function buyFruit(arr) {
  let list = [];

  arr.forEach((item) => {
    for (let i = 0; i < item[1]; i++) {
      list.push(item[0]);
    }
  });

  console.log(list);
}

buyFruit([
  ["apple", 3],
  ["orange", 1],
  ["banana", 2],
]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
