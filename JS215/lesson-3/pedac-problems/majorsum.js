/*
The Major Sum
Create a function that takes an integer array and return the biggest between positive sum, negative sum, or 0s count. The major is understood as the greatest absolute.

arr = [1,2,3,4,0,0,-3,-2], the function has to return 10, because:

Positive sum = 1+2+3+4 = 10
Negative sum = (-3)+(-2) = -5
0s count = 2 (there are two zeros in array)

Notes
All numbers are integers.
There aren't empty arrays.
All tests are made to return only one value.

PROBLEM
  - Take an array of numbers and return one of three values (whichever is the greatest absolute value):
    - Sum of all positive numbers
    - Sum of all negative numbers
    - Count of all zeroes
INPUT
  - An array of numbers
OUTPUT
  - A number

RULES
  - We will always have exactly one array argument
  - The array will always consist of integers, negative or positive
  - There are no empty arrays
  - All tests are made to return only one value
  - If the sum between positive/negative/zero counts is equal, the value that is returned is indistinguishable

DATA STRUCTURE
  - Need to iterate over the array and capture all positive, negative value and zeroes

ALGORITHM
  - We can iterate over the array argument three times to filter out positives, negatives, and zeroes


  - For positives we just need to reduce to a sum value
  - For negative we need to reduce to a sum value and return the absolute value
  - For zeroes we need to return the length property of the filtered array

  - Each of these values can be stored in an array (the negative value will need to be absolute)

  Then we need to find the maximum value using the spread operator
  If the returned value with a negative operator attached is equal to the original negative sum, then return the negative version of the number,
  otherwise return the maximum value
*/

function majorSum(arr) {
  let majors = [];
  let negativeMajor;

  majors.push(arr.filter((v) => v > 0).reduce((acc, v) => (acc += v)));
  negativeMajor = arr.filter((v) => v < 0).reduce((acc, v) => (acc += v));
  majors.push(Math.abs(negativeMajor));
  majors.push(arr.filter((v) => v === 0).length);

  let result = Math.max(...majors);
  if (-result === negativeMajor) {
    return negativeMajor;
  }
  return result;
}

// Examples
console.log(majorSum([1, 2, 3, 4, 0, 0, -3, -2]));
// ➞ 10

console.log(majorSum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]));
// ➞ -27

console.log(majorSum([0, 0, 0, 0, 0, 1, 2, -3]));
// ➞ 5
// Because -3 < 1+2 < 0sCount = 5

console.log(majorSum([10, -12, 4, 0, -3, -7, -91, 45]));
