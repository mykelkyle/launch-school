function substring(string, start, end = undefined) {
  if (end === undefined) {
    end = string.length;
  }

  if (start < 0 || isNaN(start)) {
    start = 0;
  }

  if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    [start, end] = [end, start];
  }

  tempStr = "";
  for (let i = start; i < end; i++) {
    tempStr += string[i];
    if (i === string.length - 1) break;
  }

  console.log(tempStr);
}

let string = "hello world";

substring(string, 2, 4); // "ll"
substring(string, 4, 2); // "ll"
substring(string, 0, -1); // ""
substring(string, 2); // "llo world"
substring(string, "a"); // "hello world"
substring(string, 8, 20); // "rld"
