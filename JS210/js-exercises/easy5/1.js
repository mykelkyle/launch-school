function repeater(str) {
  console.log(
    str
      .split("")
      .map((l) => `${l}${l}`)
      .join("")
  );
}

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
