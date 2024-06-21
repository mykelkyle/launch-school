/*
Nearest Chapter
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

Notes
All page numbers in the dictionary will be valid integers.
Return the higher page number if ever two pages are equidistant (see last test case).

PROBLEM
  - Take a hash table with keys corresponding to chapters of a book and their values corresponding to page numbers
  - In addition, take an integer representing a page number and return a hash key that represents the nearest chapter from the current page number
  - If two chapters are equidistant, return the chapter that has the larger page number

INPUT
  - Dictionary object
  - An integer (page number)
OUTPUT
  - An object key

RULES
  - We will always receive two arguments, an object and an integer
  - All page numbers will be valid integers
  - If two chapters are equidistant return the one with the higher page number
  - Page numbers will start from 1
  - Given page number arguments will always be positive
  - Page numbers will always be within bounds of the chapters

DATA STRUCTURES
  - We'll need to access the object's keys and values
  - Could use Object.keys/values or we could directly iterate over the object properties

ALGORITHM
  - Grab an array of the object's keys
  - Iterate until we find that the page number argument is higher value than the current object key's value
  - Determine the distance between the current page number and the key's value by subtraction
    - Use absolute value to avoid working with negatives
  - Do the same operation with the object key at index - 1
  - Return the key with the lower value
  - If the values are equal, return the key at current index
*/

function nearestChapter(obj, page) {
  let chapters = Object.keys(obj);
  let lastChapterDistance;
  let currentChapterDistance;

  for (let i = 0; i < chapters.length; i++) {
    if (obj[chapters[i]] < page) continue;

    currentChapterDistance = Math.abs(obj[chapters[i]] - page);
    lastChapterDistance = Math.abs(obj[chapters[i - 1]] - page);

    if (isNaN(lastChapterDistance)) {
      return chapters[i];
    }

    if (currentChapterDistance === lastChapterDistance) {
      return chapters[i];
    } else if (currentChapterDistance > lastChapterDistance) {
      return chapters[i - 1];
    } else {
      return chapters[i];
    }
  }
}

// Examples
console.log(
  nearestChapter(
    {
      "Chapter 1": 1,
      "Chapter 2": 15,
      "Chapter 3": 37,
    },
    1
  )
);
// "Chapter 1"

// console.log(
//   nearestChapter(
//     {
//       "Chapter 1": 1,
//       "Chapter 2": 15,
//       "Chapter 3": 37,
//     },
//     10
//   )
// );
// // ➞ "Chapter 2"

// console.log(
//   nearestChapter(
//     {
//       "New Beginnings": 1,
//       "Strange Developments": 62,
//       "The End?": 194,
//       "The True Ending": 460,
//     },
//     200
//   )
// );
// // ➞ "The End?"

// console.log(
//   nearestChapter(
//     {
//       "Chapter 1a": 1,
//       "Chapter 1b": 5,
//     },
//     3
//   )
// );
// // ➞ "Chapter 1b"
