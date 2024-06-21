function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function isPalindromicNumber(int) {
  console.log(isPalindrome(String(int)));
}

isPalindromicNumber(34543); // true
isPalindromicNumber(123210); // false
isPalindromicNumber(22); // true
isPalindromicNumber(5); // true
