/*
Is It an Ordered Subarray?
Given two arrays smarr and bigarr, we say smlst is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.

Examples:

[4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same - [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].
Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

Notes
Be careful of examples like the fourth example, where the elements of smarr appear multiple times in bigarr.

PROBLEM
  - Given two arrays, determine if the first array can be considered an "ordered subarray" of the second
  - "Ordered subarray" means that ALL the elements of the first array can be found in the second array AND they must appear in the same order

INPUT
  - Two arrays of numbers
OUTPUT
  - A boolean

RULES
  - Will always have two arrays of numbers, arrays are never empty
  - No special number values, numbers will always be positive
  - Arrays will usually appear 1 shorter and 1 larger, but there maybe instances where arrays are the same length
  - Length of arrays can be as low as 2 elements
  - Subarr numbers may appear more than once in the second array,
    - eg [1, 2, 3] => [3, 2, 1, 2, 3] is still true

  - Other values may appear between the specified subarr numbers without affecting the outcome
    - eg [5, 3, 1] => [5, 4, 3, 2, 1] returns true
    - This demonstrates the subarr numbers may not necessarily appear in sequence

  - The numbers must all be present and appear in order
  - There may be other values in between without affecting the pattern, but the presence of any sub arr values will restart the sequence

DATA STRUCTURES
Array => filter out non subarr values
Iterate over the resulting array and match each element in sequence

ALGORITHM
  - Filter only the values that exist in the first array
  - Set a variable counter to 0

  - Now iterate over this filtered array
    - If the current element matches the element in the first array at the counter index
      - Increment the counter by 1
      - If the counter is equal to the length of the subarr, return true

  If we don't return before the loop ends, we can just return false at the end of the function
*/

function isOrdSub(subArr, mainArr) {
  let filteredArr = mainArr.filter((el) => subArr.includes(el));
  let counter = 0;

  for (let i = 0; i < filteredArr.length; i++) {
    if (filteredArr[i] === subArr[counter]) {
      counter++;
      if (counter === subArr.length) return true;
    } else {
      counter = 0;
    }
  }

  return false;
}

// Examples

console.log(isOrdSub([3, 4, 5, 6], [3, 4, 5, 6])); // => true

console.log(isOrdSub([4, 3], [3, 4])); // => false

console.log(isOrdSub([4, 3, 2], [5, 4, 3, 2, 1])); // ➞ true

console.log(isOrdSub([5, 3, 1], [5, 4, 3, 2, 1])); // ➞ true

console.log(isOrdSub([5, 3, 1], [1, 2, 3, 4, 5])); // ➞ false

console.log(isOrdSub([1, 2, 3], [3, 2, 1, 2, 1, 3])); // ➞ false
