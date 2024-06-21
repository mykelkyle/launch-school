/*
Almost-Palindrome Sieve
Write a function that takes in an array of integers and returns the integers that are either palindromes or almost-palindromes. An almost-palindrome is any integer that can be rearranged to form a palindrome.

For example, the numbers 677 and 338 are both almost-palindromes, since they can be rearranged to form 767 and 383, respectively.

Notes
Return an empty array if none of the numbers are palindromes or almost-palindromes.

PROBLEM
  - Take an array of integers and return an array of the integers that are considered to be palindromes or 'almost-palindromes'
  - Palindrome means the number can be read the same way back and forth
    - eg 4334 => 4334 palindrome
  - almost-palindrome means the number can be rearranged to resemble a real palindrome
    - eg 4343 => 4334 or 3443

INPUT
  - Array of integers

OUTPUT
  - Array of integers that are palindromes or near-palindromes

RULES
  - Argument will always be an array
  - Array will always consist of positive integer values
  - A single digit will always be considered a palindrome
  - If no numbers are considered to be palindromes/near-palindromes, return an empty array

DATA STRUCTURES
  - We can determine if a number is a palindrome by converting it to a string and seeing if the string reversed is equal to itself
  - For near palindromes we can retrieve all permutations of the number that are equal to its original length and determine if any of them are a palindrome


ALGORITHM
  - Iterate over the array argument (filter?)
  - Pass the current number to isPalindrome and isNearPalindrome
  - If either functions return true, return this element
  - Otherwise, continue the loop
  - Return the resulting filtered array

HELPERS
isPalindrome
  - Convert the number to a string
  - Return the comparison between the string and the string reversed
    - String reversed could be str.split('').reverse().join('')

isNearPalindrome
  - Intialize an array to hold permutations

  - Convert the number to a string and iterate over its characters
  - Perform a nested iteration over the string's characters
    - If the inner index is less than or equal to the outer index, skip
    - Swap the character at the outer index with the inner index
    - Push this to the permutations array

  - Check if any of the array elements will return a truthy value when passed in to the isPalindrome function (can use .some() here)
*/

function isPalindrome(number) {
  return String(number) === String(number).split("").reverse().join("");
}

function isNearPalindrome(number) {
  let count = {};
  let str = String(number);

  for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
      count[str[i]] += 1;
    } else {
      count[str[i]] = 1;
    }
  }

  let numOfOddFrequencies = Object.values(count).reduce((acc, n) => {
    if (n === 1) {
      return (acc += 1);
    } else {
      return acc;
    }
  }, 0);

  if (numOfOddFrequencies > 1) {
    return false;
  } else {
    return true;
  }
}
// function isNearPalindrome(number) {
//   let permutations = [];
//   let chars = String(number).split("");

//   chars.forEach((outerChar, outerIndex) => {
//     chars.forEach((innerChar, innerIndex) => {
//       let swap = chars.slice();

//       if (outerIndex === 0 && innerIndex === 0) {
//         permutations.push(swap.slice(1, swap.length).concat(swap[0]));
//       }

//       if (outerIndex === swap.length - 1 && innerIndex === swap.length - 1) {
//         permutations.push(
//           [swap[swap.length - 1]].concat(swap.slice(0, swap.length - 1))
//         );
//       }

//       if (innerIndex <= outerIndex) return;

//       [swap[outerIndex], swap[innerIndex]] = [
//         swap[innerIndex],
//         swap[outerIndex],
//       ];

//       permutations.push(swap);
//     });
//   });

//   return permutations.some((permutation) => {
//     return isPalindrome(permutation);
//   });
// }

function palindromeSieve(arr) {
  return arr.filter((number) => {
    if (isPalindrome(number) || isNearPalindrome(number)) {
      return number;
    }
  });
}

// Examples

console.log(palindromeSieve([443, 12, 639, 121, 3232]));
// ➞ [443, 121, 3232]

console.log(palindromeSieve([5, 55, 6655, 8787]));
// ➞ [5, 55, 6655, 8787]

console.log(palindromeSieve([897, 89, 23, 54, 6197, 53342]));
// ➞ []
