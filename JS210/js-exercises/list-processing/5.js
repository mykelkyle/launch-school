function leadingSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      let substring = str.slice(i, j);

      if (!substring || substring[0] != str[0]) {
        continue;
      } else {
        substrings.push(substring);
      }
    }
  }

  console.log(substrings);
}

leadingSubstrings("abc"); // ["a", "ab", "abc"]
leadingSubstrings("a"); // ["a"]
leadingSubstrings("xyzzy"); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
