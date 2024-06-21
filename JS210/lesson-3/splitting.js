function splitString(string, delimiter) {
  let firstIndex = 0;
  let secondIndex;
  let strings = [];

  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return;
  }

  if (delimiter === "") {
    for (let i = 0; i < string.length; i++) {
      strings.push(string[i]);
    }
  } else {
    for (let i = 0; i < string.length; i++) {
      if (string[i] === delimiter) {
        secondIndex = i;
        strings.push(string.slice(firstIndex, secondIndex));
        firstIndex = secondIndex + 1;
      }
    }
    strings.push(string.slice(secondIndex + 1, string.length));
  }

  console.log(strings);
}

splitString("abc,123,hello world", ",");
// logs:
// abc
// 123
// hello world

splitString("hello");
// // logs:
// // ERROR: No delimiter

splitString("hello", "");
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString("hello", ";");
// // logs:
// // hello

splitString(";hello;", ";");
// // logs:
// //  (this is a blank line)
// // hello
