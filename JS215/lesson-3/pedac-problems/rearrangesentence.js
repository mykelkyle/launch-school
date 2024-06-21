/*
Rearrange the Sentence
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

Notes
Only the integers 1-9 will be used.

PROBLEM
  - Take a string with letter and digit characters and return a string with only letter characters, each word should be sorted in order according to the digit embedded within each word

INPUT
  - A string

OUTPUT
  - A string

RULES
  - Argument will always be a string
  - String may be empty -> return empty string
  - Only numbers 1-9 will be used
  - Only one number will be used per word
  - Each number is unique
  - Each word will have a number

IDEAS
  - Initialize an array and set it to the length of words in the given string
  - Iterate over the string words
    - Read the embedded number, and use regex to push the word itself into the array at the number - 1 index of our result array

ALGORITHM
  - Initialize a result array
  - Set this array's length to the length of our string as an array split by spaces

  - Iterate over the string array split into words
    - For each word, grab the number embedded within and initialize it to a variable
    - Use regex (match(/[0-9]/))

    - Then we clean the word using regex and push it into our result array at the index of the captured digit - 1 (since the digits are not 0-indexed)
    - Can use regex again to clean the string (replace(/0-9/, ''))

  - After iterating, return the array joined with spaces
*/

function rearrange(str) {
  if (str.length === 0 || !str.match(/[a-z]/i)) return "";

  let result = [];
  result.length = str.split(" ").length;

  str.split(" ").forEach((word) => {
    let digit = word.match(/[0-9]/)[0];
    word = word.replace(/[0-9]/, "");

    result[digit - 1] = word;
  });

  return result.join(" ");
}

// Examples
console.log(rearrange("is2 Thi1s T4est 3a"));
// ➞ "This is a Test"

console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"));
// ➞ "For the good of the people"

console.log(rearrange("    "));
// ➞ ""
