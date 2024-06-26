function checkTripleMatch(arr) {
  let anchor = 0;
  let runner = 1;

  while (runner < arr.length) {
    if (arr[anchor] * 3 === arr[runner]) {
      return true;
    } else if (arr[anchor] * 3 < arr[runner]) {
      anchor++;
    } else {
      runner++;
    }
  }

  return false;
}

console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([1, 2, 4, 8]) === false);

// All test cases should log true.
