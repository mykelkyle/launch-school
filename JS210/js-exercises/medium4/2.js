function triangle(side1, side2, side3) {
  let sortedSides = [...arguments].sort((a, b) => a - b);

  if (
    !(sortedSides[0] + sortedSides[1] > sortedSides[2]) ||
    sortedSides.some((el) => el < 1)
  ) {
    return "invalid";
  }

  if (isEquilateral(sortedSides)) {
    return "equilateral";
  } else if (isScalene(sortedSides)) {
    return "scalene";
  } else {
    return "isosceles";
  }
}

function isEquilateral(arr) {
  return arr[0] === arr[1] && arr[1] === arr[2];
}

function isScalene(arr) {
  return arr[0] !== arr[1] && arr[1] !== arr[2];
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
