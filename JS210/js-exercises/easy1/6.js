function shortLongShort(str1, str2) {
  let short;
  let long;

  if (str1.length > str2.length) {
    short = str2;
    long = str1;
  } else {
    short = str1;
    long = str2;
  }

  console.log(`${short + long + short}`);
}

shortLongShort("abc", "defgh"); // "abcdefghabc"
shortLongShort("abcde", "fgh"); // "fghabcdefgh"
shortLongShort("", "xyz"); // "xyz"
