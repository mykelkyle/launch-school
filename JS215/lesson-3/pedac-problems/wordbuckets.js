/*
Word Buckets
Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

Spaces count as one character.
Trim beginning and end spaces for each word bucket (see final example).
If buckets are too small to hold a single word, return an empty array: []
The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.

PROBLEM
  - Take a string and a number and return an array of "word buckets", eg strings with length equal or less than the given number
  - The resulting array MUST divide up the entire phrase or else you must return an empty array
INPUT
  - A string
  - A number
OUTPUT
  - An array of strings (each string less than or equal to the given number)
RULES
  - Spaces count as 1 character
  - If buckets are too small to hold a single word, return empty array
  - Trim spaces at beginning and end of each bucket

DATA STRUCTURES
  - Array to hold all the characters of the string
  - Splice out each bucket according to given length
  - Join string and push to results array

ALGORITHM
  - Initialize a results array
  - Split the string into characters and assign it to a new variable arr

  While arr length is greater than 0
  If str[0] is a space, splice it out
  - IF str at index N or index N + 1 is not a space, initialize a var to n - 1 and keep decrementing by 1 until we have a sliceable bucket

  - If counter reaches 0, return an empty array, no possible buckets

  - When N reaches a proper value to slice a phrase from, splice from 0 to N
  - Join the string and push it to results array
  - Reset N to original value

  Break the loop when the arr characters reaches 0

*/

function bucketize(str, n) {
  let results = [];
  let arr = str.split(" ");
  let bucket = "";

  arr.forEach((word) => {
    if ((bucket + " " + word).length <= n) {
      bucket += ` ${word}`;
    } else {
      results.push(bucket);
      bucket = word;
    }
  });

  return results;
}

// Examples
console.log(bucketize("she sells sea shells by the sea", 10));
// ➞ ["she sells", "sea shells", "by the sea"]

// console.log(bucketize("the mouse jumped over the cheese", 7));
// // ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// console.log(bucketize("fairy dust coated the air", 20));
// // ➞ ["fairy dust coated", "the air"]

// console.log(bucketize("a b c d e", 2));
// // ➞ ["a", "b", "c", "d", "e"]

// console.log(bucketize("ab bc cd", 1));
// // => []

// console.log(bucketize("a b c d e", 1));
// // => ["a", "b", "c", "d", "e"]
