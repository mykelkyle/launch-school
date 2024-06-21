ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
ROTATION_SIZE = 13;

function rot13(string) {
  result = "";

  for (let i = 0; i < string.length; i++) {
    ogChar = string[i];

    if (!validLetter(ogChar)) {
      result += ogChar;
    } else {
      ogIndex = findIndex(ogChar.toLowerCase());
      newIndex = (ogIndex + ROTATION_SIZE) % ALPHABET.length;
      newChar = determineCase(ogChar, newIndex);

      result += newChar;
    }
  }

  return result;
}

function findIndex(letter) {
  return ALPHABET.indexOf(letter);
}

function validLetter(letter) {
  return /[a-z]/i.test(letter);
}

function determineCase(letter, newIndex) {
  return letter === letter.toLowerCase()
    ? ALPHABET[newIndex]
    : ALPHABET[newIndex].toUpperCase();
}

console.log(rot13("Teachers open the door, but you must enter by yourself."));
