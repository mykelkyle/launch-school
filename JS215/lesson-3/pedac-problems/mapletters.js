/*
Map the Letters in a String
Given a word, create an object that stores the indexes of each letter in an array.

Make sure the letters are the keys.
Make sure the letters are symbols.
Make sure the indexes are stored in an array and those arrays are values.

Notes
All strings given will be lowercase.

PROBLEM
  - Take a string and return an object in whcih each key is a letter in the string, and each corresponding key value is an array of every index position that character appears within the string

INPUT
  - A string

OUTPUT
  - An object

RULES
  - Argument will always be a string
  - If string is empty, return an empty object
  - All strings given will be in lowercase

DATA STRUCTURES
  - An object to hold characters and indices

ALGORITHM
  - Initialize an empty object to hold values

  - Iterate over the string's characters
    - If the the object with the current character as a key exists already,
      - Push the current index into it's value array
    - Otherwise
      - Initialize a key in the object at the current char set to an array of the current index

  - Return the object
*/

function mapLetters(str) {
  let letters = {};

  str.split("").forEach((char, index) => {
    if (letters[char]) {
      letters[char].push(index);
    } else {
      letters[char] = [index];
    }
  });

  return letters;
}

// Examples

console.log(mapLetters(""));
// => {}

console.log(mapLetters("dodo"));
// ➞ { d: [0, 2], o: [1, 3] }

console.log(mapLetters("froggy"));
// ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }

console.log(mapLetters("grapes"));
// ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
