/*
First Recurrence Index
Create a function that identifies the very first item that has recurred in the string argument passed. It returns the identified item with the index where it first appeared and the very next index where it resurfaced -- entirely as an object; or as an empty object if the passed argument is either null, undefined, empty string, or no recurring item exists.

PROBLEM
  - Given a string, return an object with a String key and array value which represents the first recurring character, and a set of its first and second indices, respectively

INPUT
  - String

OUTPUT
  - Object: Single letter as a key, array with 2 indices as the value

RULES
  - Argument will usually be a string of letters
  - Letters will be uppercase
  - Argument may be empty string (return empty object)
  - Argument may be null (return empty object)
  - In the case that two characters have an equal distance of recurrence, return the one that appears first in the string


DATA STRUCTURE
  - Use an object to hold instances of characters
  - If we lookup a character in the object and it already exists, we can assume it is the first recurring character

ALGORITHM
  - If the argument is an empty string or null, return an empty object
  - Initialize a count object
  - Iterate through the string's characters
    - If the object has a key with this character,
    Return an object with the character as the key, and an array of first and second index
    - Otherwise, initialize a key in the object with the current character and set its value equal to an array with the current index as the only element
*/

function recurIndex(str) {
  if (str === null || str.length === 0) return {};

  let charCount = {};

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] !== undefined) {
      return { [str[i]]: [charCount[str[i]], i] };
    } else {
      charCount[str[i]] = i;
    }
  }
}

// Examples
console.log(recurIndex("DXTDXTXDTXD"));
// ➞ {"D": [0, 3]}

console.log(recurIndex("YXZXYTUVXWV"));
// ➞ {"X": [1, 3]}

console.log(recurIndex("YZTTZMNERXE"));
// ➞ {"T": [2, 3]}

console.log(recurIndex("AREDCBSDERD"));
// ➞ {"D": [3, 7]}

console.log(recurIndex(""));
// ➞ {}

console.log(recurIndex(null));
// ➞ {}
