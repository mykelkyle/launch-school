function reverseString(str) {
  let start = 0;
  let end = str.length - 1;
  str = str.split("");

  while (start < end) {
    if (str[start] === " ") {
      start++;
    } else if (str[end] === " ") {
      end--;
    } else {
      [str[start], str[end]] = [str[end], str[start]];
      start++;
      end--;
    }
  }

  return str.join("");
}

function reverseWords(s) {
  return s.split(" ").map(reverseString).join(" ");
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
