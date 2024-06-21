/*
Keeping Count
Given a number, create a function which returns a new number based on the following rules:

For each digit, replace it by the number of times it appears in the number.
The final instance of the number will be an integer, not a string.

Notes
Each test will have a positive whole number in its parameter.

PROBLEM
  - Take an integer and return an integer, each digit in the string should be replaced by a different digit representing it's frequency of appearance in the original integer

INPUT
  - An integer

OUTPUT
  - An integer

RULES
  - Argument will always be an integer, positive
  - Return an integer, not a string

DATA STRUCTURES
  - Use an object dictionary hash to hold counts
  {
  1: 3,
  3: 1,
  6: 2
  }

  Reiterate over the number

ALGORITHM
  - Initialize a hash to hold character counts
  - Initialize a reuslt string

  - Convert the number to a string and iterate over it's characters
  - If the character exists in the hash,
    - Increment its value by 1
  - Otherwise, initialize the character to a value of 1


  Iterate again over the character in the number
    - Concatenate to our result string, the value of count[str[i]]

  Return the string
*/

function digitCount(number) {
  let count = {};
  let digits = String(number).split("");

  digits.forEach((digit) => {
    if (count[digit]) {
      count[digit] += 1;
    } else {
      count[digit] = 1;
    }
  });

  return digits
    .map((digit) => {
      return String(count[digit]);
    })
    .join("");
}

// Examples
console.log(digitCount(221333)); // ➞ 221333

console.log(digitCount(136116)); // ➞ 312332

console.log(digitCount(2)); // ➞ 1
