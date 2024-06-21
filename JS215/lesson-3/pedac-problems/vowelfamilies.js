/*
Vowel Families
Write a function that selects all words that have all the same vowels (in any order and/or number) as the first word, including the first word.

Notes
Words will contain only lowercase letters, and may contain whitespaces.
Frequency does not matter (e.g. if the first word is "loopy", then you can include words with any number of o's, so long as they only contain o's, and not any other vowels).

PROBLEM
  - Take an array of strings and return an array of strings filtered so that each word contains all the same vowels as the first word FIRST WORD ALWAYS INCLUDED

INPUT
  - Array of strings

OUTPUT
  - Array of strings

RULES
  - Argument will always be an array
  - Array will always contain strings
  - Strings will always be lowercase
  - First word will always be included
  - Frequency of vowels does not matter, just needs to include the vowel once
  - If the compared word has all the first words vowels PLUS another vowel, it does not count
  - Vowels can appear in any order

DATA STRUCTURES
  - Could use an object to hold all the vowels in the first word, and then could compare every concurrent word's vowel count to the original
  e.g.
  'marble' =>
  {a: 1, e: 1}
  'pause' =>
  {a: 1, u: 1, e: 1}

  Could also just use an array here

  Take the keys from the object and compare them to each other
  If all letters are present in each word, then we can add it to the array

ALGORITHM
- Initialize a VOWELS constant

  - Initialize a results array, automatically include the first word of the array
  - Initialize an array to hold first word vowel using the getVowels function

  - Iterate over the array argument
  - Skip over the first word (eg index 0)
    - pass each word to the getVowels functions and set the return value to a variable
    - If the firstwordvowels array includes every letter that the currwordvowels array holds, and vice-versa, we can push the current word to the results array

  - Return the results array

  HELPER
  getVowels(str)
  Initialize an array
  Split the word into characters and iterate through
  If the character is a vowel AND the array doesn't already include this character, push it to the array
  Return the array
*/

const VOWELS = ["a", "e", "i", "o", "u"];

function getVowels(str) {
  let result = [];

  str.split("").forEach((char) => {
    if (VOWELS.includes(char) && !result.includes(char)) {
      result.push(char);
    }
  });

  return result;
}

function sameVowelGroup(arr) {
  let result = [arr[0]];
  let firstWordVowels = getVowels(arr[0]);

  arr.forEach((word, index) => {
    if (index === 0) return;
    let currWordVowels = getVowels(word);

    if (
      firstWordVowels.every((letter) => word.includes(letter)) &&
      currWordVowels.every((letter) => arr[0].includes(letter))
    ) {
      result.push(word);
    }
  });

  return result;
}

// Examples

console.log(sameVowelGroup(["marble", "pause", "base"]));
// => ['marble', 'base']

console.log(sameVowelGroup(["toe", "ocelot", "maniac"]));
// ➞ ["toe", "ocelot"]

console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]));
// ➞ ["many"]

console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]));
// ➞ ["hoops", "bot", "bottom"]
