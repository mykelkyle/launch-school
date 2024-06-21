function diamond(n) {}

/*
PROBLEM
  - Take an integer `n` and return a string representation of a diamond in an n x n grid
INPUT
  - An odd integer
OUTPUT
  - A string diamond

RULES
  - Integer will always be odd
  - Output must be a 'four-pointed diamond'
  - There must be a single asterisk at the top and bottom of the diamond
  - At the mid-length of the diamond, its width must be at its greatest point
  - The lengths between midpoint and beginning/endpoints must be incremented/decremented by 1

TESTS
diamond(3)
=>
 *
***
 *

diamond(7)
=>
      *
     ***
    *****
   *******
    *****
     ***
      *

The given N will always be the length of the middle row
N will always be the number of total rows in the diamond

DATA STRUCTURE
Iterate up to n with a looping mechanism
Endpoint to middle will always be n+1 / 2

ALGORITHM
Determine middle with (n + 1) / 2
 Start a for loop from 1 to middle

(Middle - 1) - row# + spaces, then row# * asterisk



*/

function printRow(spaces, stars) {
  console.log(" ".repeat(spaces) + "*".repeat(stars));
}

function diamond(n) {
  let middleRow = (n + 1) / 2;
  let stars = 1;
  let spaces = middleRow - 1;

  for (let row = 1; row < n + 1; row++) {
    if (row > middleRow) {
      spaces += 1;
      stars -= 2;
      printRow(spaces, stars);
    } else {
      printRow(spaces, stars);
      if (row === middleRow) continue;
      spaces -= 1;
      stars += 2;
    }
  }
}

diamond(100);
