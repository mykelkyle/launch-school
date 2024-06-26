function findAverages(arr, k) {
  let start = 0;
  let end = k;
  let averages = [];

  while (end <= arr.length) {
    let subarr = arr.slice(start, end);
    averages.push(subarr.reduce((acc, v) => (acc += v)) / subarr.length);
    start++;
    end++;
  }
  return averages;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2)); // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1)); // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
