function allSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      let substring = str.slice(i, j);

      if (!substring) {
        continue;
      } else {
        substrings.push(substring);
      }
    }
  }

  console.log(substrings);
}

allSubstrings("abcde");
