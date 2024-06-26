function findInNestedArray(arr, target) {
  let subarrIndex = findIndexOfNestedArray(arr, target);
  if (subarrIndex === -1) return false;

  let subarr = arr[subarrIndex];
  let left = 0; // 2
  let right = arr[subarrIndex].length - 1; // 2

  while (left <= right) {
    let mid = (left + right) / 2; // 2

    if (subarr[mid] === target) return true;

    if (subarr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function findIndexOfNestedArray(arr, target) {
  let left = 0; // 0
  let right = arr.length - 1; // 0

  while (left <= right) {
    let mid = (left + right) / 2; // -1

    if (arr[mid][0] === target) return mid;

    if (arr[mid][0] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right;
}

console.log(
  findInNestedArray(
    [
      [4, 8, 12],
      [16, 20, 24],
      [28, 32, 36],
    ],
    20
  ) === true
);
console.log(
  findInNestedArray(
    [
      [3, 6, 9],
      [12, 15, 18],
      [21, 24, 27],
    ],
    27
  ) === true
);
console.log(
  findInNestedArray(
    [
      [1, 3, 5],
      [7, 9, 11],
      [13, 15, 17],
    ],
    19
  ) === false
);
console.log(
  findInNestedArray(
    [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ],
    10
  ) === true
);
console.log(
  findInNestedArray(
    [
      [15, 25, 35],
      [45, 55, 65],
      [75, 85, 95],
    ],
    5
  ) === false
);

// All test cases should return true.
