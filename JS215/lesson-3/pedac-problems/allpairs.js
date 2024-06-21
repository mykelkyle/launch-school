/*
All Pairs that Sum to Target
Create a function that returns all pairs of numbers in an array that sum to a target. Sort the pairs in ascending order with respect to the smaller number, then order each pair in this order: [smaller, larger].

Notes
If no pairs are found, return an empty array [].
You are only allowed to use each number once in a pair.
See Comments for a hint.

PROBLEM
  - Given an array of numbers and a sum, return a nested array of pairs of numbers that sum to the given argument

INPUT
  - Array of numbers
  - An integer

OUTPUT
  - A nested array of paired numbers

RULES
  - Always given an array of numbers and a second integer array
  - Second integer will always be positive
  - First array may hold zeroes
  - If no pairs are found return an empty array
  - You can only use each number ONCE per pair ()

IDEAS
  - Nested iteration to grab all possible pairs
  - Add them to array only if they sum to the provided argument

ALGORITHM
  - Initialize a results array
  - Iterate through the numbers array
    - Perform a nested iteration from the outer index to the end of the array
    - If the elements at outer index + inner index = sum, add them to the results array SORTED

  - Sort the results array by each element at index 0
  Return array

*/

function allPairs(arr, sum) {
  let results = [];
  arr.forEach((outerV, outerIndex) => {
    arr.forEach((innerV, innerIndex) => {
      if (innerIndex <= outerIndex) return;

      let pair = [outerV, innerV].sort((a, b) => a - b);
      if (pair[0] + pair[1] === sum) {
        results.push(pair);
      }
    });
  });
  return results.sort((a, b) => a[0] - b[0]);
}

// Examples
console.log(allPairs([2, 4, 5, 3], 7)); // ➞ [[2, 5], [3, 4]]

console.log(allPairs([5, 3, 9, 2, 1], 3)); // ➞ [[1, 2]]

console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); // ➞ [[1, 8], [3, 6], [4, 5]]

console.log(allPairs([1, 3, 5, 4, 0], 4)); // => [[0, 4], [1, 3]]

console.log(allPairs([5, 5, 2], 14)); // => []

console.log(allPairs([2, 2, 2, 2], 4)); // => [[2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]] (6 pairs)
