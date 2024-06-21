/*
Crop Fields
You're given a 2D array / matrix of a crop field. Each crop needs to be hydrated. Each water source hydrates the 8 tiles around it. With "w" representing a water source, and "c" representing a crop, is every crop hydrated?

Notes
"w" on its own should return true, and "c" on its own should return false.

PROBLEM
  - Given a 2D array of a crop field, return a boolean value that represent whether or not all 'crops' are 'hydrated'
  - Crops are represented by the character 'c'
  - Water sources are represented by the character 'w'
  - A water sources waters every character around it

INPUT
  - A 2D array consisting of string values

OUTPUT
  - A boolean value

RULES
  -  Argument will always be a 2D array of strings
    - The 2D array may consist of varying column and row lengths
  - 'W' on its own should return true
  - 'C' on its own should return false
  - A 'crop' can be considered 'watered' if the its position lies among one of the characters that is adjacent to a 'w' character

TESTS

[
  ['w', 'c', 'c'],
  ['c', 'c', 'c']
]

=> False, the water sources reaches all the crops besides the two characters at the end of each array eg [0][2] and [1][2]

DATA STRUCTURES
[
  ["w", "c", "c"],
  ["w", "c", "c"],
  ["c", "c", "c"],
]

water sources => [0, 0], [1, 0]
Reachable indexes => [0, 1], [1, 1], [2, 0], [2, 1]
Unreachable indexes => [0, 2], [1, 2], [2, 2]

Logic => Indices that are reachable by the water source must be within 1 value of either the row and column position
If any index position is more than 1 value away, it can't be watered
  eg if [1, 1] is the water then the crops that could be watered are
  [0, 0], [0, 1], [1, 0], [1, 1], [2, 0], [2, 1], [2, 2] etc.

Basically, if row is x and column is y
Waterable spots are within x - 1 to x + 1 AND y - 1 to y + 1
if (x >= x - 1 && x <= x + 1) && (y >= y - 1 && y <= y + 1)
return true

Use an array to hold all water indices

ALGORITHM
  - Initialize a water source array

  - Iterate over the nested arrays
    - Nested iterate over each element
    - If an element is 'w', then record the position in the water source array
      - The x (row) index will be the outer index
      - The y (column) index will be the inner index
      push like this => (outerI, innerI)

  then we should have an array like [[0, 1], [1, 0]]
  Perform the same nested iteration, but we have to check if EVERY position is true for the ultimate return value to be true
  We can also just short-circuit return false if at least 1 position returns false. this might be more practical

  Skip the current iteration if the current character is not 'c'
  Use .some() to check if any of the water positions are adjacent to the current outerI, innerI combination
  - if for any of the water sources:
    - outerI is greater than or equal to x - 1 and less than or equal to x + 1
    - innerI is greater than or equal to y - 1 and less than or equal to x + 1
  - Then this crop is waterable
  - Otherwise, return false

  If we make it all the way to the end, return true
*/

function getWaterSources(arr) {
  let waterSources = [];

  arr.forEach((row, x) => {
    arr.forEach((column, y) => {
      if (arr[x][y] === "w") {
        waterSources.push([x, y]);
      }
    });
  });

  return waterSources;
}

function cropHydrated(arr) {
  let waterSources = getWaterSources(arr);

  for (let row = 0; row < arr.length; row++) {
    for (let column = 0; column < arr[row].length; column++) {
      if (arr[row][column] !== "c") continue;

      let waterable = waterSources.some((waterSource) => {
        return (
          Math.abs(row - waterSource[0]) <= 1 &&
          Math.abs(column - waterSource[1]) <= 1
        );
      });

      if (!waterable) return false;
    }
  }

  return true;
}

// Examples
console.log(
  cropHydrated([
    ["w", "c"],
    ["w", "c"],
    ["c", "c"],
  ])
);
//  ➞ true

console.log(cropHydrated([["c", "c", "c"]]));
//  ➞ false
// There isn"t even a water source.

console.log(
  cropHydrated([
    ["c", "c", "c", "c"],
    ["w", "c", "c", "c"],
    ["c", "c", "c", "c"],
    ["c", "w", "c", "c"],
  ])
);
//  ➞ false

console.log(
  cropHydrated([
    ["c", "w", "w", "w", "c"],
    ["w", "c", "c", "c", "c"],
    ["c", "c", "c", "c", "c"],
    ["w", "c", "c", "w", "c"],
  ])
);
// => true
