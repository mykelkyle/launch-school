/*
A distinct string is a string that is present only once in an array.

Given an array of strings, arr, and an integer, k, return the kth distinct string present in arr. If there are fewer than k distinct strings, return an empty string "".

Note that the result string is the one encountered earliest in the array.

distinctString(["d","b","c","b","c","a"], 2); // "a"
*/

/*
--- PROBLEM ---
Input:
  - An array of strings and an integer
Output:
  - A string

Requirements:
  - Iterate through the given array and based on the provided integer argument, return the nth element that is considered to be a 'distinct string'
  - A 'distinct string', is a string that is present only once in an array
  - We will have to determine which strings are distinct through a first iteration
  - On the second iteration we can return the proper string
  - If there are fewer than `n` distinct strings, return an empty string ''

--- EXAMPLES & TEST CASES ---

distinctString(['a', 'a', 'b', 'b', 'c', 'd'], 1) // => 'c'
distinctString(['a', 'b', 'c', 'd'], 5)           // => ''

Potential Questions:
  - Can we always expect an array of strings?
  - Will the array ever be empty?
  - Will the provided integer always be positive? (n > 0)
  - Will we always receive precisely two arguments
  - Can the array be sparse?
  - Can strings be of any character length?
*/
