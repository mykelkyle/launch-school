function toLowerCase(string) {
  let tempStr = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[a-z]/g) || !isNaN(string[i] / 1)) {
      tempStr += string[i];
      continue;
    }

    let asciiNumeric = string[i].charCodeAt(0); // 65
    asciiNumeric += 32;
    tempStr += String.fromCharCode(asciiNumeric);
  }

  console.log(tempStr);
}

toLowerCase("ALPHABET"); // "alphabet"
toLowerCase("123"); // "123"
toLowerCase("abcDEF"); // "abcdef"
