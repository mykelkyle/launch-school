function crunch(string) {
  let result = "";
  let prevChar;

  for (let i = 0; i < string.length; i++) {
    if (prevChar === string[i]) {
      continue;
    } else {
      result += string[i];
      prevChar = string[i];
    }
  }

  console.log(result);
}

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""
