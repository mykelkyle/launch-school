function trim(str) {
  let firstIndex;
  let lastIndex;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      firstIndex = i;
      break;
    }
  }

  for (let i = firstIndex; i < str.length; i++) {
    if (str[i] !== " ") {
      lastIndex = i + 1;
    }
  }

  console.log(Array(str.slice(firstIndex, lastIndex)));
}

trim("  abc  "); // "abc"
trim("abc   "); // "abc"
trim(" ab c"); // "ab c"
trim(" a b  c"); // "a b  c"
trim("      "); // ""
trim(""); // ""
