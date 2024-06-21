/*
Mutations Only: Zeroes to the End
Write a function that moves all the zeroes to the end of an array. Do this without returning a copy of the input array.

Notes
You must mutate the original array.
Keep the relative order of the non-zero elements the same.

PROBLEM
  - Take an array of numbers and return the SAME array but with all zeroes at the end, the other digits should be in their original order

INPUT
  - Array of numbers

OUTPUT
  - Array of numbers

RULES
  - Will always be an array argument
  - If array is empty, return an empty array
  - If array has no zeroes, return the array

IDEAS
  - Iterate over the array, when a zero is found, splice it and push it to the end of the array?
  - The spliced element will be in an array, so we need to take the 0th element from the array before pushing

ALGORITHM
  - The original array's index will be affected when we are splicing from it
  - Need to figure out a way to iterate and grab values at the proper index

  - Use a for loop?
  - If we splice out an element and add it to the end of the array, we can decrement the index manually in order to recheck the current index

*/

function zeroesToEnd(arr) {
  let zeroes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let zero = arr.splice(i, 1)[0];
      zeroes.push(zero);
      i -= 1;
    }
  }

  zeroes.forEach((zero) => arr.push(zero));
  return arr;
}

// Examples
console.log(zeroesToEnd([1, 2, 0, 0, 4, 0, 5]));
// ➞ [1, 2, 4, 5, 0, 0, 0]

console.log(zeroesToEnd([0, 0, 2, 0, 5]));
// ➞ [2, 5, 0, 0, 0]

console.log(zeroesToEnd([4, 4, 5]));
// ➞ [4, 4, 5]

console.log(zeroesToEnd([0, 0]));
// ➞ [0, 0]

console.log(zeroesToEnd([]));
// => []
