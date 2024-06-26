function isSquareInteger(int) {
  let left = 1;
  let right = int;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currSquare = mid * mid;

    if (currSquare === int) return true;

    if (currSquare > int) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.
