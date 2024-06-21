function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

function isRealPalindrome(str) {
  str = str.split("").filter((char) => {
    return /[a-zA-Z0-9]/.test(char);
  });
  str = str.map((char) => {
    if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  });

  console.log(isPalindrome(str.join()));
  //isPalindrome();
}

isRealPalindrome("madam"); // true
isRealPalindrome("Madam"); // true (case does not matter)
isRealPalindrome("Madam, I'm Adam"); // true (only alphanumerics matter)
isRealPalindrome("356653"); // true
isRealPalindrome("356a653"); // true
isRealPalindrome("123ab321"); // false
