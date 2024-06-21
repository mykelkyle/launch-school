function penultimate(string) {
  let words = string.split(" ");
  console.log(words[words.length - 2]);
}

penultimate("last word"); // expected: "last"
penultimate("Launch School is great!"); // expected: "is"
