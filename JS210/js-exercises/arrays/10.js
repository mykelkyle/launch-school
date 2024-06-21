function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      console.log(false);
      return;
    }
  }
}

// areArraysEqual([1, 2, 3], [1, 2, 3]); // true
// areArraysEqual([1, 2, 3], [3, 2, 1]); // true
// areArraysEqual(["a", "b", "c"], ["b", "c", "a"]); // true
// areArraysEqual(["1", 2, 3], [1, 2, 3]); // false
// areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]); // true
// areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]); // false
// areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]); // false
// areArraysEqual([1, 1, 2], [1, 2, 2]); // false
// areArraysEqual([1, 1, 1], [1, 1]); // false
// areArraysEqual([1, 1], [1, 1]); // true
areArraysEqual([1, "1"], ["1", 1]); // true
