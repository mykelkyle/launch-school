function myFilter(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result.push(arr[i]);
    } else {
      continue;
    }
  }

  return result;
}

let isPythagoreanTriple = function (triple) {
  return (
    Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2)
  );
};

let result = myFilter(
  [
    { a: 3, b: 4, c: 5 },
    { a: 5, b: 12, c: 13 },
    { a: 1, b: 2, c: 3 },
  ],
  isPythagoreanTriple
);

console.log(result);
// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
