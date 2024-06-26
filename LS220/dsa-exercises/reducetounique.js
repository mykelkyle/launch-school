// You should name the function `reduceToUnique` for the tests to work correctly.

function reduceToUnique(nums) {
  if (nums.length <= 1) return nums.length;

  let anchor = 0;

  for (let runner = 1; runner < nums.length; runner++) {
    if (nums[runner] !== nums[anchor]) {
      anchor++;
      nums[anchor] = nums[runner];
    }
  }

  return anchor + 1;
}

function testReduceToUnique(array, expectedLength) {
  const originalReference = array;
  const resultLength = reduceToUnique(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array
    .slice(0, expectedLength)
    .every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testReduceToUnique([3, 3, 5, 7, 7, 8], 4));
// console.log(testReduceToUnique([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
// console.log(testReduceToUnique([0], 1));
// console.log(testReduceToUnique([-5, -3, -3, -1, 0, 0, 0, 1], 5));
// console.log(testReduceToUnique([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.
