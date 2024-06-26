function isTargetFrequent(arr, target) {
  let firstOccurence = findFirstOccurence(arr, target);
  let lastOccurence = findLastOccurence(arr, target);

  return lastOccurence - firstOccurence + 1 >= 4 ? true : false;
}

function findFirstOccurence(arr, target) {
  let left = 0; // 2
  let right = arr.length - 1; // 1

  while (left <= right) {
    let mid = Math.floor(left + right) / 2; // 2

    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

function findLastOccurence(arr, target) {
  let left = 0; // 6
  let right = arr.length - 1; // 5

  while (left <= right) {
    let mid = Math.floor(left + right) / 2; // 6

    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false);
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
