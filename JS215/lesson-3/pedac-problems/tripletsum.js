/*
Triplet Sum
Create a function that takes an unsorted list of numbers and returns the number of unique triplets whose sum is equal to the variable n.

You should also expect lists with less than three elements.

PROBLEM
  - Take an array of numbers and return a number representing the amount of unique triplets whose sum is equal to the passed in variable `n`

INPUT
  - An array of numbers
  - An integer `n`

OUTPUT
  - Number representing amount of unique triplets in the given array

RULES
  X We will always be given two arguments, an array and a number
  X It is possible for the list to contain less than 3 elements
  X It is possible for the list to be empty
  X It is possible for n to be 0
  X There may be negative numbers
  X If list is empty or contains less than 3 elements, or no matches are found, then just return 0
  X Triplets must be unique, cannot use the same number twice in the same triplet

DATA STRUCTURE
  Use an array to hold all possible combinations of 3 elements
  Determine if our array already holds the combination we're trying to add
  eg our array has [[0, 2, 9], [2, 6, 3]] so we can't push in [2, 6, 3] again
  We need a helper function to determine if the array exists already, we should push in triplets already sorted to make this comparison more convenient

ALGORITHM
  GUARD CLAUSES
    - If the array is less than length 3, return 0
    - If n = 0 and the array doesn't include 0s, return 0

  STEPS
    - Initialize a results array

    - Start a for loop i = 0
    - Start a nested for loop j = 0
     - Skip iterations if j <= i
    - Start a nested for loop k = 0
      - Skip iterations if k <= j

      - Initialize an array [arr[i], arr[j], arr[k]], SORTED
      - If the sum of this triplet is equal to `n` and does not already exist in our results array, push this triplet

    - All loops should run until the length of the array

    - Return the length of results
*/
// index, index + 1, index + 2, increment the 3rd element until arr length
// then increment second element and start incrementing 3rd again
// Examples

function hasDuplicate(triplets, triplet) {
  return triplets.some((arr) => {
    return arr.every((value, index) => triplet[index] === value);
  });
}

function tripletSum(arr, n) {
  let triplets = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j <= i) continue;

      for (let k = 0; k < arr.length; k++) {
        if (k <= j) continue;

        let triplet = [arr[i], arr[j], arr[k]].sort();

        if (
          triplet.reduce((acc, v) => (acc += v)) === n &&
          !hasDuplicate(triplets, triplet)
        ) {
          triplets.push(triplet.sort());
        }
      }
    }
  }

  return triplets.length;
}

console.log(tripletSum([1, 0, 2, 6, 3, 9, 3], (n = 11)));
// ➞ 2
// Since we found two unique triplets that equate to 11: 0+2+9 and 2+6+3

console.log(tripletSum([1, 2, 6, 3, 4, 5, 9, 10, 11], (n = 20)));
// ➞ 5

console.log(tripletSum([5, 2, 8], (n = 2)));
// ➞ 0

console.log(tripletSum([5, 8], (n = 2)));
// => 0

console.log(tripletSum([], (n = 2)));
// => 0

console.log(tripletSum([1, 2, 6, 5, 9, 10, 11], (n = 0)));
// => 0

console.log(tripletSum([1, 0, 6, 5, 0, 10, 0], (n = 0)));
// => 1

console.log(tripletSum([5, -1, 5], (n = 9)));
// => 1
