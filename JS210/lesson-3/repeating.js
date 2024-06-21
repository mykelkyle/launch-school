function repeat(string, times) {
  if (times / 0 === -Infinity || times !== Number(times)) {
    console.log("undefined");
    return;
  }
  let i = 0;
  let newstring = "";

  while (i < times) {
    newstring += string;
    i++;
  }

  console.log(newstring);
}

repeat("abc", 1); // "abc"
repeat("abc", 2); // "abcabc"
repeat("abc", -1); // undefined
repeat("abc", 0); // ""
repeat("abc", "a"); // undefined
repeat("abc", false); // undefined
repeat("abc", null); // undefined
repeat("abc", "  "); // undefined
