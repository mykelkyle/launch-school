/*
Tree Photography
Heading off to the Tree Arboretum of Various Heights, I bring along my camera to snap up a few photos. Ideally, I'd want to take a picture of as many trees as possible, but the taller trees may cover up the shorter trees behind it.

A tree is hidden if it is shorter or the same height as the tree in front.

Given an array of tree heights, create a function which returns "left" or "right", depending on which side allows me to see as many trees as possible.

Notes
There will always be a best side.

PROBLEM
  - Given an array of numbers, return a string "left" or "right" depending on which direction (left to right => left) (right to left => right) would provide a larger number of elements
  - To determine the number of elements in a particular direction, the numbers must ascend numerically eg the next number in sequence cannot be less than or equal to the current number to be added in length

INPUT
  - An array of numbers

OUTPUT
  - A string "left" or "right"

RULES
  - There will always be a best side
  - A tree is "hidden" if it shorter or equal to the tree in front
    - A number doesn't count if it less than or equal to any of the numbers in front
    eg [1, 3, 6, 5] => left side has 3 trees because the last element 5 is not visible past the 6
    right side would have 2 trees because the first two elements 1 and 3 are not visible past the 6

  - Numbers will always be positive
  - If there are more trees visible from left to right (original array position, then return "left", otherwise return "right")

DATA STRUCTURES
Can iterate through the array front to back once
Iterate again over the array but in reverse

ALGORITHM
  - Iterate over the array
    - If index is 0, automatically increment the accumulator by 1

    - If the current element is greater than the highest element that has been encountered so far, increment the accumulator by 1

  Do the same, but with the array reversed to find the number of trees

  If left to right yields a higher number, return "left"
  otherwise return "right"
*/

function numOfVisibleTrees(arr) {
  let highestTree = arr[0];

  return arr.reduce((acc, v, i) => {
    if (i === 0) return acc;

    if (v > highestTree) {
      highestTree = v;
      return (acc += 1);
    } else {
      return acc;
    }
  }, 1);
}

function treePhotography(arr) {
  let treesVisibleFromLeft = numOfVisibleTrees(arr);
  let treesVisibleFromRight = numOfVisibleTrees(arr.slice().reverse());

  if (treesVisibleFromLeft > treesVisibleFromRight) {
    return "left";
  } else {
    return "right";
  }
}

//Worked Example
console.log(treePhotography([1, 3, 6, 5]));
// ➞ "left"
// If I stand on the left, I can see trees of heights 1, 3 and 6.
// If I stand on the right, I can see trees of heights 5 and 6.
// Return "left" because I would see more trees.

// Examples
console.log(treePhotography([5, 6, 5, 4]));
// ➞ "right"

console.log(treePhotography([1, 2, 3, 3, 3, 3, 3]));
// ➞ "left"

console.log(treePhotography([3, 1, 4, 1, 5, 9, 2, 6]));
// ➞ "left"
