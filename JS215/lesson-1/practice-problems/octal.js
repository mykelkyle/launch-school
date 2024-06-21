function octalToDecimal(str) {
  let conversions = str
    .split("")
    .reverse()
    .map((char, index) => {
      return String(Number(char) * 8 ** index);
    });

  return conversions.reduce((acc, val) => {
    return (acc += Number(val));
  }, 0);
}

console.log(octalToDecimal("1")); // 1
console.log(octalToDecimal("10")); // 8
console.log(octalToDecimal("130")); // 88
console.log(octalToDecimal("17")); // 15
console.log(octalToDecimal("2047")); // 1063
console.log(octalToDecimal("011")); // 9
