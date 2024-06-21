function substr(string, start, length) {
  let result = "";
  if (start / 0 === -Infinity) {
    start = string.length + start;
  }

  for (let i = start; i <= start + length - 1; i++) {
    result += string[i];
    if (i === string.length - 1) break;
  }

  console.log(result);
}

let string = "hello world";

substr(string, 2, 4); // "llo "
substr(string, -3, 2); // "rl"
substr(string, 8, 20); // "rld"
substr(string, 0, -20); // ""
substr(string, 0, 0); // ""
