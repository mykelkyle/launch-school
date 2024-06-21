/*
Dance for Cash
Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.

Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

Notes
Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
Valid input will always be a string of four digits. Output will be a string array.
If the input is not four valid numbers, return the string, "Invalid input."

PROBLEM
  - Take a string of digit characters and return an array of strings, each string mapped to a single digit character

INPUT
  - A string of digit characters

OUTPUT
  - An array of strings

RULES
  - If the input is not four valid numbers, return "Invalid Input"

  0  0  0  0
  ["Shimmy", "Shake", "Pirouette", "Slide"]
We take the index value of the element plus the value of the digit
If the resulting sum goes over the last index of the dance list, then cycle to the beginning of the list

0 - Shimmy
1 - Shake
2 - Pirouette
3 - Slide
4 - Box Step
5 - Headspin
6 - Dosado
7 - Pop
8 - Lock
9 - Arabesque

Algorithm
If the input string is not a string of 4 digit characters, return "Invalid input" - regex

Initialize an array of dance moves
Initialize result array

Iterate over the string
Convert the character to a number, add to the curr index
If the index is greater than 9, then subtract 10 from the index
Return the value at that index from array of dance moves
Push value to result array

Return array
*/

function danceConvert(str) {
  if (!/[0-9]{4}/.test(str)) return "Invalid Input";

  const danceMoves = [
    "Shimmy",
    "Shake",
    "Pirouette",
    "Slide",
    "Box Step",
    "Headspin",
    "Dosado",
    "Pop",
    "Lock",
    "Arabesque",
  ];
  let result = [];

  str.split("").forEach((digit, index) => {
    let danceIndex = Number(digit) + index;
    if (danceIndex > 9) {
      danceIndex = danceIndex - 10;
    }
    result.push(danceMoves[danceIndex]);
  });

  return result;
}

// Examples
console.log(danceConvert("0000")); // ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]

console.log(danceConvert("3856")); // ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]

console.log(danceConvert("9999")); // ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]

console.log(danceConvert("32a1")); // ➞ "Invalid input."
