/*
Happy Number
A happy number is a number which yields a 1 by repeatedly summing up the square of its digits. If such a process results in an endless cycle of numbers containing 4, the number is said to be an unhappy number.

Create a function that accepts a number and determines whether the number is a happy number or not. Return true if so, false otherwise.

Notes
Hint: Your loop terminates if the value of n is either 1 or 4.

PROBLEM
  - Take a number and replace its digits with the sum of its digits squared.
  eg 13 => 1**2 + 3**2 = 10
     10 => 1**2 + 0**2 = 1
  - The return value should be a boolean based on whether the given argument can be considered a 'happy number' or not
  - A 'happy number' is one in which this process of reducting will eventually lead to a single value 1, OR conversely, the value 4

INPUT
  - A single number
OUTPUT
  - A boolean

RULES
  - A happy number yields 1 by repeatedly summing the square of its digits
  - An unhappy number will yield a 4
  - We can always expect a single integer argument
  - The value will always be 1 or higher

DATA STRUCTURES
  - We need to sum the value of each digit squared and replace the argument with that value
  - Repeat until the value is either 1 or 4
  - We can convert the number to a string and iterate over each character

ALGORITHM
- Initialize a sum variable to 0

  - Convert the argument to a string
  - Iterate over the string characters
  - Find the square of each number character and add it to the sum

  When the iteration finishes, determine whether or not the sum is 1 or 4
  If 1, return true
  If 4, return false
  Else, continue looping
*/

function isHappy(number) {
  while (number !== 1 && number !== 4) {
    let sum = 0;
    let strNumber = String(number);

    for (let i = 0; i < strNumber.length; i++) {
      sum += Number(strNumber[i]) ** 2;
    }

    number = sum;
  }

  return number === 1;
}

// Examples
console.log(isHappy(67)); // ➞ false

console.log(isHappy(89)); // ➞ false

console.log(isHappy(139)); // ➞ true

console.log(isHappy(1327)); // ➞ false

console.log(isHappy(2871)); // ➞ false

console.log(isHappy(1)); // ➞ true

console.log(isHappy(3970)); // ➞ true
