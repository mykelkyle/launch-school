function removeVowels(arr) {
  const VOWELS = ["a", "e", "i", "o", "u"];
  let result = [];
  arr.forEach((element) => {
    VOWELS.forEach((vowel) => {
      if (element.includes(vowel)) {
        element = element.split(vowel).join("");
      } else if (element.includes(vowel.toUpperCase())) {
        element = element.split(vowel.toUpperCase()).join("");
      }
    });

    result.push(element);
  });

  console.log(result);
}

removeVowels(["abcdefghijklmnopqrstuvwxyz"]); // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(["green", "YELLOW", "black", "white"]); // ["grn", "YLLW", "blck", "wht"]
removeVowels(["ABC", "AEIOU", "XYZ"]); // ["BC", "", "XYZ"]
