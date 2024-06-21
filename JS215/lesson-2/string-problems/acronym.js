function acronym(string) {
  let result = string.split(" ").map((word) => {
    if (word.includes("-")) {
      return word
        .split("-")
        .map((word) => word[0].toUpperCase())
        .join("");
    } else {
      return word[0].toUpperCase();
    }
  });

  console.log(result.join(""));
}

acronym("Portable Network Graphics"); // "PNG"
acronym("First In, First Out"); // "FIFO"
acronym("PHP: HyperText Preprocessor"); // "PHP"
acronym("Complementary metal-oxide semiconductor"); // "CMOS"
acronym("Hyper-text Markup Language"); // "HTML"

function acronym(string) {
  let stringArray = string.replace(/-/g, " ").split(" ");
  let initials = stringArray.map((word) => word[0].toUpperCase());
  return initials.join("");
}
