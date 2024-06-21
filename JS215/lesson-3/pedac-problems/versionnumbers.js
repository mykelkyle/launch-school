/*
--- PROBLEM ---
Requirements:
- if any inputs contain invalid characters, return null
  - any characters other than digits and . are considered invalid
- Compare the two input versions
  - if version1 > version2, return 1
  - if version1 < version2, return -1
  - if version1 === version2, return 0
- The rules to compare two version numbers
  - start from the left most parts of the two version numbers
  - if the number part of the first version number is larger, then the first version number is larger
  - if the number part of the second version number is larger, then the first version number is smaller
  - if the number parts of both version numbers are the same, move to the next number part of the two version numbers
    - do the same comparison and decide which version number is larger
    - keep moving to the right until the result of the comparison is determined
      - if we reach the end of only one number, pad that number with a 0
    - if we get to the last number part of the two version numbers and they're equal,
      then the two version numbers are equal
*/

console.log(compareVersions("1", "1")); // 0
console.log(compareVersions("1.1", "1.0")); // 1
console.log(compareVersions("2.3.4", "2.3.5")); // -1
console.log(compareVersions("1.a", "1")); // null
console.log(compareVersions(".1", "1")); // null
console.log(compareVersions("1.", "2")); // null
console.log(compareVersions("1..0", "2.0")); // null
console.log(compareVersions("1.0", "1.0.0")); // 0
console.log(compareVersions("1.0.0", "1.1")); // -1
console.log(compareVersions("1.0", "1.0.5")); // -1
