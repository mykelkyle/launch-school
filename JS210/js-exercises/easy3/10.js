function wordSizes(str) {
  let sizes = {};
  let chars = str.split("");
  chars = chars.map((char) => {
    if (/[A-Z]/i.test(char) || char === " ") {
      return char;
    }
  });
  str = chars.join("");

  str.split(" ").forEach((word) => {
    if (sizes[word.length]) {
      sizes[word.length] += 1;
    } else {
      sizes[word.length] = 1;
    }
  });

  console.log(sizes);
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "5": 1, "2": 1, "3": 1 }
wordSizes(""); // {}
