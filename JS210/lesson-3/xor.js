function isXor(bool1, bool2) {
  arr = [bool1, bool2];

  console.log(arr.filter((bool) => bool).length === 1);
}

isXor(false, true); // true
isXor(true, false); // true
isXor(false, false); // false
isXor(true, true); // false

isXor(false, 3); // true
isXor("a", undefined); // true
isXor(null, ""); // false
isXor("2", 23); // false
