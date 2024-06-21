function isUppercase(str) {
  let regex = /[A-Z]/i;
  let allUpper = true;

  str.split("").forEach((v) => {
    if (regex.test(v)) {
      if (v !== v.toUpperCase()) {
        allUpper = false;
      }
    }
  });

  return allUpper;
}

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true
