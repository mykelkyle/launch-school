/*
Shortest Unsorted Continuous Subarray
Given an integer array, you need to find the shortest continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

Create a function that returns the length of that subarray.

Notes
The given array can contain duplicates, so ascending order here means <= (see example #3).
If the given array is already sorted or is empty, return 0.

PROBLEM
  - Given an array of integers, determine the length of sequence of numbers in the array that can be sorted in ascending order to make the entire array in ascending order as well

INPUT
  - An array of integers
OUTPUT
  - Number, length of shortest subarr

RULES
  - Will always receive an array argument
  - Array may contain negative values, 0, or positive values
  - Array can contain duplicate values. If present, they should contribute towards the length of the resulting subarr
    - eg [2, 4, 4, 4, 4, 3] => [4, 4, 4, 4, 3] needs to be sorted. The 3 needs to be placed before every 4 here, so the length of the subarr is 5

  - If the array is empty return 0
  - If the array is already sorted, return 0
  - Duplicate values don't need to be sorted themselves

EXAMPLES
Compare the original array with the sorted array
Index first changes at 1
Last index change is at 5
arr.splice(1, 5) => length of 5 elements


DATA STRUCTURES
Iteration,
Counter to hold index from position where element is not in order
Array to hold elements

sort the array and compare it with the original array and count the number of elements that have been shifted?
ALGORITHM
  - If the array is empty, return 0

  - Initialize a variable to hold an index number representing the first instance where an element is not equal between the sorted and unsorted array
    - Let this remain constant; first index encounter where two elements are not equal

  - Initialize a second variable to hold an index number representing the last instance where an element is not equal
    - Change this value everytime two elements are not equal

  - Copy the array and sort it
  - Iterate over original array
    - Check to see if current value is equal to the value at current index in the sorted array
    - If equal, then continue
    - If not,
      - Reassign firstIndex to current index ONLY IF firstIndex is undefined
      - Also reassign lastIndex to current index

    Splice the original array from firstIndex to lastIndex and return the length
*/

function findUnsortedSubarray(arr) {
  if (arr.length === 0) return 0;

  let firstIndex;
  let lastIndex;

  let sortedArr = arr.slice().sort((a, b) => a - b);

  arr.forEach((v, i) => {
    if (v !== sortedArr[i]) {
      if (firstIndex === undefined) firstIndex = i;
      lastIndex = i;
    }
  });

  return arr.slice(firstIndex, lastIndex + 1).length;
}

console.log(findUnsortedSubarray([10, 7, 5, 3]));
// ➞ 4

console.log(findUnsortedSubarray([1, -2, -3, 4, 5]));
// => 3

console.log(findUnsortedSubarray([1, 3, 2, 5, 8, 7, 13]));
// ➞ 5

console.log(findUnsortedSubarray([1, 2, 3, 4, 5, 5, 5, 5]));
// => 0

console.log(findUnsortedSubarray([1, 2, 3, 4, 5]));
// => 0

console.log(findUnsortedSubarray([]));
// => 0

console.log(findUnsortedSubarray([2, 4, 4, 4, 4, 3]));
// ➞ 5
