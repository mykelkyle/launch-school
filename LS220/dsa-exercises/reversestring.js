function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello")); //=== "olleh");
console.log(reverseString("world")); // === "dlrow");
// console.log(reverseString("a") === "a");
// console.log(reverseString("") === "");
// console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.
