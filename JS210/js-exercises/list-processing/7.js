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

  return substrings;
}

function palindromes(str) {
  let result = [];
  let substrings = allSubstrings(str);

  substrings.forEach((substring) => {
    if (substring.length < 2) return;
    if (substring === substring.split("").reverse().join("")) {
      result.push(substring);
    }
  });

  console.log(result);
}

// palindromes("abcd"); // []
// palindromes("madam"); // [ "madam", "ada" ]

// palindromes("hello-madam-did-madam-goodbye");
// // returns
// [
//   "ll",
//   "-madam-",
//   "-madam-did-madam-",
//   "madam",
//   "madam-did-madam",
//   "ada",
//   "adam-did-mada",
//   "dam-did-mad",
//   "am-did-ma",
//   "m-did-m",
//   "-did-",
//   "did",
//   "-madam-",
//   "madam",
//   "ada",
//   "oo",
// ];

palindromes("knitting cassettes");
// // returns
// ["nittin", "itti", "tt", "ss", "settes", "ette", "tt"];
