/*
Advanced Array Sort
Create a function that takes in an array of numbers or strings and returns an array with the items from the original array stored in subarrays. Items of the same value should be in the same subarray.

Notes
The subarrays should be returned in the order of each element's first appearance in the given array.

PROBLEM
  - Take an array of numbers or strings and return a 2D array in which each subarray is a grouping of all the instances of that particular element in the original array
  - The subarrays should be ordered by the order in which their nested elements first appear in the original array

INPUT
  - An array of strings or numbers

OUTPUT
  - A nested array

RULES
  - Argument will always be an array
  - Strings will always be lowercase
  - Subarrays need to be ordered chronologically (the order in which their elements first appear in the array)

DATA STRUCTURES
  - Array to hold subarrays
  - Iterate over the passed in argument
  - If the 2D array doesn't already have the current element, then we should push it to the 2D array (nested in an array)

  ** If the 2D array already has it, then we should just push to the array that contains the element
  - Can check this by iterating over our 2D array and comparing each subarray's [0] element. If the comparison ever returns true, then we should capture this index and use it to push the og element to this subarray

ALGORITHM
  - Initialize an array to hold subarrays (result)

  - Iterate over the passed in array

    - If any of the subarrays have a 0th element that is equal to the current element (forEach, with an index)
      - Push the current element to the subarray at the current nested index
      - return

    - Otherwise,
      - push the current element into the subarray nested in array literal syntax

  - Return the subarrays array
*/

function advancedSort(arr) {
  let subarrays = [];

  arr.forEach((el) => {
    let alreadyPushed = false;

    for (let i = 0; i < subarrays.length; i++) {
      if (el === subarrays[i][0]) {
        subarrays[i].push(el);
        alreadyPushed = true;
        return;
      }
    }

    if (!alreadyPushed) {
      subarrays.push([el]);
    }
  });

  return subarrays;
}

// Examples
console.log(advancedSort([2, 1, 2, 1])); // ➞ [[2, 2], [1, 1]]

console.log(advancedSort([5, 4, 5, 5, 4, 3])); // ➞ [[5, 5, 5], [4, 4], [3]]

console.log(advancedSort(["b", "a", "b", "a", "c"])); // ➞ [["b", "b"], ["a", "a"], ["c"]]
