function minimumCount(nums) {
  const firstPositiveIndex = findFirstPositiveIndex(nums);
  const lastNegativeIndex = findLastNegativeIndex(nums);

  const negativeCount = lastNegativeIndex + 1;
  const positiveCount = nums.length - firstPositiveIndex;
  return Math.min(negativeCount, positiveCount);
}

function findFirstPositiveIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let firstPositiveIndex = nums.length;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= 0) {
      left = mid + 1;
    } else {
      firstPositiveIndex = mid;
      right = mid - 1;
    }
  }
  return firstPositiveIndex;
}

function findLastNegativeIndex(nums) {
  let left = 0;
  let right = nums.length - 1;
  let lastNegativeIndex = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < 0) {
      lastNegativeIndex = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return lastNegativeIndex;
}

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.
/*
Given an array of numbers, return a number value that represents the minimum between the count of positive and negative integers
0 is neither positive nor negative
0 should be default is array is empty
*/
