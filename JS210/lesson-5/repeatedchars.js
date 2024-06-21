function repeatedCharacters(str) {
  let chars = {};
  let repeatedChars = {};

  str.split("").forEach((char) => {
    char = char.toLowerCase();
    if (chars[char]) {
      chars[char] += 1;
    } else {
      chars[char] = 1;
    }
  });

  for (let key in chars) {
    if (chars[key] > 1) {
      repeatedChars[key] = chars[key];
    }
  }

  console.log(repeatedChars);
}

repeatedCharacters("Programming"); // { r: 2, g: 2, m: 2 }
repeatedCharacters("Combination"); // { o: 2, i: 2, n: 2 }
repeatedCharacters("Pet"); // {}
repeatedCharacters("Paper"); // { p: 2 }
repeatedCharacters("Baseless"); // { s: 3, e: 2 }
