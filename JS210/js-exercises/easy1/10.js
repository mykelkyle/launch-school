function utf16Value(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i++) {
    sum += string[i].charCodeAt();
  }

  console.log(sum);
}

utf16Value("Four score"); // 984
utf16Value("Launch School"); // 1251
utf16Value("a"); // 97
utf16Value(""); // 0

const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA); // 937
utf16Value(OMEGA + OMEGA + OMEGA); // 2811
