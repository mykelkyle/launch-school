const letterBlocks = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
};

/*
PROBLEM
  - Given a string, determine whether or not the value can be 'spelled' using the provided letter blocks
INPUT
  - A string
OUTPUT
  - A boolean

RULES
  - A word can only be spelled with letters that appear in a given block once, in addition, only one letter from each block may be used
  - Letter comparison checks should be case insensitive

DATA STRUCTURES
  - Object to hold block letters

ALGORITHM
  - Use an object to hold all block values

  - Initialize an count object for the string characters

  - Iterate over the string characters
    - Convert the character to uppercase and check it's value in the dictionary
    - Check to see if this value exists in the string
      - If it does, return false

    - If the current character exists in the count object, return false
    - Otherwise, initialize a key in the count object to the current character at value 1

    If we make it through all iterations, we can return true
*/

function isBlockWord(str) {
  let count = {};

  for (let i = 0; i < str.length; i++) {
    let currChar = str[i].toUpperCase();

    if (str.includes(letterBlocks[currChar])) return false;

    if (count[currChar]) {
      return false;
    } else {
      count[currChar] = 1;
    }
  }

  return true;
}

console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
console.log(isBlockWord("floW")); // true
console.log(isBlockWord("APPLE")); // false
console.log(isBlockWord("apple")); // false
console.log(isBlockWord("apPLE")); // false
console.log(isBlockWord("Box")); // false
