/*
Coin Trouble
Given an array of coins, father needs to distribute them amongst his three children. Write a function to determine if the coins can be distributed equally or not. Return true if each son receives the same amount of money, otherwise return false.

[1, 2, 3, 2, 2, 2, 3] ➞ true
Amount to be distributed to each child = (1+2+3+2+4+3)/3 => 15/3 => 5
Possible set of coin to be distributed to children = [(1,2,2),(2,3),(2,3)]
[5, 3, 10, 1, 2] ➞ false
Amount to be distributed to each child = (5+3+10+1+2)/3 => 21/3 => 7
But there are no combination such that each child get equal value which is 7.

Notes
Inputs will be an array of positive integers only.
Coin can be any positive value.

PROBLEM
  - Take an array of integers and return a boolean value that represents whether or not the numbers can be evenly distributed in sets amongst three recipients

INPUT
  - An array of integers

OUTPUT
  - A boolean

RULES
  - Arguments will always be an array of positive integers
  - Each value in the array (coin) can be any positive value
  - The numbers in the array must be evenly distributed and there must be no remainder
    - eg [1, 2, 3, 2, 2, 2, 3] => true because:
    - we can group (1, 2, 2), (2, 3), (2, 3)

TESTS

DATA STRUCTURES
  - Need to find the sum of the array, divide it by 3 to find the target
  - initialize a sum
  Iterate over the array, and keep adding each element to the sum
  If the curr element added goes over the target, then skip it
  Sort the array by descending order

[1, 2, 3, 2, 2, 2, 3] => sum is 15, we need to divide the coins into groups of 5
[3, 3, 2, 2, 2, 2, 1]
[2, 2, 1]
[3, 2]
[3, 2]

ALGORITHM
  - Find the target of the array
    - Sum array and divide by 3

  - Initialize an array to hold group of subarrays holding indices

  - Sort the array by descending order and set this to a variable
  - Iterate over this array
    - Initialize a sum variable to 0
    - Intialize an array to hold indices

    - If any of the subarrays in the 2d array include the current index OR if the current element + sum > target, then we skip this element

    - If the element + sum === target,

    if the length of the 2d index array is already 2, then we can return true

    Otherwise we place the current index in the index array
    Push the index array to the outer 2d array
    set the sum back to 0 AND the index back to 0, clear the nested index array

    - Add the element to the sum and place the current index in the nested index array

  - Return false
*/

function coinsDiv(arr) {
  let target = arr.reduce((acc, v) => (acc += v)) / 3;
  let coinGroups = [];

  let sum = 0;
  let indices = [];

  arr = arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    if (coinGroups.some((coins) => coins.some((index) => index === i)))
      continue;

    if (arr[i] + sum > target) continue;

    if (arr[i] + sum === target) {
      if (coinGroups.length === 2) return true;

      indices.push(i);
      coinGroups.push(indices);
      sum = 0;
      i = 0;
      indices = [];
    } else {
      sum += arr[i];
      indices.push(i);
    }
  }
  return false;
}
// Examples

console.log(coinsDiv([1, 2, 3, 2, 2, 2, 3]) === true);
console.log(coinsDiv([5, 3, 10, 1, 2]) === false);
console.log(coinsDiv([2, 4, 3, 2, 4, 9, 7, 8, 6, 9])) === true;
console.log(coinsDiv([1, 1, 1]) === true);
console.log(coinsDiv([80, 78, 79, 65, 61]) === false);
console.log(coinsDiv([4, 7, 6, 8, 2, 1, 2]) === true);
console.log(coinsDiv([3, 6, 2, 2, 2, 2, 1, 3, 2, 1, 3]) === true);
console.log(coinsDiv([11, 9, 3, 22, 6, 2, 4, 10, 1]) === false);
console.log(coinsDiv([13, 6, 12, 23, 2, 8, 15, 31, 16]) === false);
console.log(coinsDiv([4, 14, 12, 21, 3, 1, 18, 5]) === true);
console.log(coinsDiv([10, 5, 20, 27, 17, 4, 3, 15, 0, 25]) === true);
console.log(
  coinsDiv([
    7, 3, 3, 4, 5, 4, 1, 1, 1, 1, 1, 8, 7, 3, 3, 4, 5, 4, 1, 1, 1, 1, 1, 8,
  ]) === true
);

console.log(coinsDiv([1, 13, 10, 6, 24, 16, 22, 4]) === false);
console.log(coinsDiv([9]) === false);
