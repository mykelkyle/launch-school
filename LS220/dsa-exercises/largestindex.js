function findLargestIndex(arr) {
  let left = 0;
  let right = arr.length - 1;
  let largestIndexMatch = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === mid) {
      largestIndexMatch = mid;
      left = mid + 1;
    } else if (arr[mid] > mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return largestIndexMatch;
}

console.log(findLargestIndex([0, 2, 5, 7]) === 0);
console.log(findLargestIndex([-1, 0, 2, 3]) === 3);
console.log(findLargestIndex([0, 1, 2, 3, 4]) === 4);
console.log(findLargestIndex([-5, 0, 3, 4, 7, 9]) === -1);
console.log(findLargestIndex([-2, 0, 1, 3, 3, 5]) === 5);
console.log(findLargestIndex([0]) === 0);

// All test cases should log true.
