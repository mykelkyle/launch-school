/*
Single Letter Swaps
Given an array of strings and an original string, write a function to output an array of boolean values - true if the word can be formed from the original word by swapping two letters only once and false otherwise.

Notes
Original string will consist of unique characters.

PROBLEM
  - Take an array of strings and an original string
  - Return an array of boolean values mapped to each element, representing whether or not that string can be formed from the original string by swapping only two letters once

INPUT
  - Array of strings
  - String

OUTPUT
  - Array of booleans

RULES
  - Arguments will always consist of an array of strings and a second string
  - Strings will be alphanumeric
  - The original string will always consist of unique characters

DATA STRUCTURES
  - We can iterate over the array of strings
  - Can compare each strings characters and keep a counter for the differences
  - If the result returns exactly 2 changes, then we can consider this to be a single letter swap

ALGORITHM
  - Iterate over the array argument, map?
  - Initialize a counter variable to 0
    - Iterate through the characters in each word
    - Compare each character to the character at the same index position as the original word
    - If the characters are not equal, then increment the counter

  - If the counter is exactly 2, return true otherwise return false
*/

function validateSwaps(arr, ogString) {
  return arr.map((str) => {
    let counter = 0;

    str.split("").forEach((char, index) => {
      if (char !== ogString[index]) counter++;
    });

    if (counter === 2) {
      return true;
    } else {
      return false;
    }
  });
}

// Examples
console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"));
// ➞ [true, true, false, false]

console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345"));
// ➞ [true, true, true, true]

console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768"));
// ➞ [true, false, false, false]
