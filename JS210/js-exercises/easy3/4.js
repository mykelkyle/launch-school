function isPalindrome(str) {
  console.log(str === str.split("").reverse().join(""));
}

isPalindrome("madam"); // true
isPalindrome("Madam"); // false (case matters)
isPalindrome("madam i'm adam"); // false (all characters matter)
isPalindrome("356653"); // true
