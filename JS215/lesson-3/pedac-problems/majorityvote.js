/*
Majority Vote
Create a function that returns the majority vote in an array. A majority vote is an element that occurs > N/2 times in an array (where N is the length of the array).

Notes

The frequency of the majority element must be strictly greater than 1/2.
If there is no majority element, return null.
If the array is empty, return null.

PROBLEM
  - Take an array of strings and return a value that represents the majority element of that array

INPUT
  - An array of string characters

OUTPUT
  - A string character or null

RULES
  - Argument will always be an array
  - Array may be empty => return null
  - Array will otherwise hold single string characters
  - 'Majority' means the count of the element must be strictly greater than n/2, where n is the length of the array
  - If there is no majority, then return null

DATA STRUCTURES
  - Reduce array values into an object to hold count
  {
  A: 2
  B: 1
  }
  n = 3
  target = 1.5

  Go through object keys (for loop)
  [A, B]
  obj[i] is greater than the target?
    - return arr[i]

  return null

ALGORITHM
  - If array is length 0, return null
  - Iterate over the array, (reduce)
    - If the acc[el] exists,
      - acc[el] += 1
    - Otherwise
      - acc[el] = 1

  Initialize a variable to object keys
  - Initialize a for loop
    - Go through each key and compare it's value to our target (n / 2)
    - If value is greater, then return that character


  - If we make it all the way to the end, return null
*/

function majorityVote(arr) {
  let charCounts = {};

  arr.forEach((char) => {
    if (charCounts[char]) {
      charCounts[char] += 1;
    } else {
      charCounts[char] = 1;
    }
  });

  for (let key in charCounts) {
    if (charCounts[key] > arr.length / 2) {
      return key;
    }
  }

  return null;
}

// Examples
console.log(majorityVote(["A", "A", "B"])); // ➞ "A"

console.log(majorityVote(["A", "A", "A", "B", "C", "A"])); // ➞ "A"

console.log(majorityVote(["A", "B", "B", "A", "C", "C"])); // ➞ null

console.log(majorityVote(["A", "B", "B", "B", "A", "A"]));

console.log(majorityVote(["B", "A", "B", "B", "C", "A", "B", "B"]));
