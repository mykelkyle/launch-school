// function wordToDigit(sentence) {
//   const NUMBERS = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   return sentence
//     .split(" ")
//     .map((word) => {
//       word = word.replace(/[^\w\s]/g, "");

//       if (NUMBERS[word]) {
//         return NUMBERS[word];
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }

const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach((word) => {
    let regex = new RegExp(word, "g");
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."
