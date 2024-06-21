function swap(str) {
  let words = str.split(" ");

  words = words.map((word) => {
    if (word.length === 1) return word;

    let firstChar = word[0];
    let lastChar = word[word.length - 1];

    return lastChar + word.slice(1, word.length - 1) + firstChar;
  });

  console.log(words.join(" "));
}

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"
