const VOWELS = ["a", "e", "i", "o", "u"];

function doubleConsonants(str) {
  let doubled = str.split("").map((char) => {
    let regex = /[A-Z]/i;

    if (!regex.test(char) || VOWELS.includes(char.toLowerCase())) {
      return char;
    } else {
      return char + char;
    }
  });

  console.log(doubled.join(""));
}

doubleConsonants("String"); // "SSttrrinngg"
doubleConsonants("Hello-World!"); // "HHellllo-WWorrlldd!"
doubleConsonants("July 4th"); // "JJullyy 4tthh"
doubleConsonants(""); // ""
