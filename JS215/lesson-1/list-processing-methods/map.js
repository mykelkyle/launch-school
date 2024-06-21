function myMap(arr, func) {
  let result = [];

  arr.forEach((val) => {
    result.push(func(val));
  });

  return result;
}

let plusOne = (n) => n + 1;
let result = myMap([1, 2, 3, 4], plusOne); // [ 2, 3, 4, 5 ]
console.log(result);
