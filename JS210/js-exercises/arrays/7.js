function shift(arr) {
  let shiftedEl = arr.splice(0, 1);
  if (arr.length === 0) {
    return undefined;
  } else {
    return shiftedEl;
  }
}

function unshift(arr, ...args) {
  for (let i = 0; i < args.length; i++) {
    arr.splice(i, 0, args[i]);
  }

  return arr.length;
}

// console.log(shift([1, 2, 3])); // 1
// console.log(shift([])); // undefined
// console.log(shift([[1, 2, 3], 4, 5])); // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6)); // 5
console.log(unshift([1, 2, 3])); // 3
console.log(unshift([4, 5], [1, 2, 3])); // 3

const testArray = [1, 2, 3];
shift(testArray); // 1
testArray; // [2, 3]
unshift(testArray, 5); // 3
testArray; // [5, 2, 3]
