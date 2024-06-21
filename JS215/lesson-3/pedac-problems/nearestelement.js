/*
The Nearest Element
Given an array of integers arr, implement a function that returns the index of the number nearest to the given value n. If two numbers equally distant from n are found, the function will return the greatest of them.

Notes
Integers in arr will always be unique.

PROBLEM
  - Given a list of numbers and an integer n, return the index of the number in the list which is closest in value to n. If two numbers are equal in terms of difference in value to n, return tne index position of the number that has a higher value

INPUT
  - An integer, n
  - An array of integers

OUTPUT
  - An integer, index position of integer in array

RULES
  - The arguments will always be an integer and an array of integers
  - The values may be negative or positive
  - All integers in the array will be unique
  - If two values are equal in terms of difference in value to n, return the index of the larger number

IDEAS
  - Iteration over the array
  - Find the absolute difference of n and the current number

  Hold each value individually

  let nearest;

  50, [100, 49, 51]

  if first iteration, nearest = [50, 100]

  49 - 50 = 1 (1) (49)
  if (nearest[0] === the current difference) {
    if (currentnumber is bigger than nearest[1])
    nearest = difference, currnumber
  } else if (nearest[0] < difference) {
    nearest = difference, currnumber
  }




ALGORITHM
  - Initialize an empty variable to hold the most recent nearestElements

  - Iterate over the array
    - If index is 0, then automatically set nearest equal to the absolute difference of n - current value AND the current value

    - if the current absolute difference is equal to the difference held in nearest,
      - check if the current number is bigger than nearest[1]
        - if so, then set nearest equal to the curr absolute difference and the curr number

    - else if the current difference is less than the held difference is nearest,
    set nearest equal to the current difference and number

  - Return the index of the value held in nearest
  - arr.indexOf(nearest[1])
*/

function nearestElement(n, arr) {
  let nearest;

  arr.forEach((v, i) => {
    let absoluteDiff = Math.abs(n - v);
    if (i === 0) {
      nearest = [absoluteDiff, v];
      return;
    }

    if (absoluteDiff === nearest[0]) {
      if (v > nearest[1]) {
        nearest = [absoluteDiff, v];
      }
    } else if (absoluteDiff < nearest[0]) {
      nearest = [absoluteDiff, v];
    }
  });

  return arr.indexOf(nearest[1]);
}

// Examples
console.log(nearestElement(10, [1, 100, 1000])); // ➞ 0

console.log(nearestElement(50, [100, 49, 51])); // ➞ 2

console.log(nearestElement(-20, [-50, -10, -30])); // ➞ 1
