function sumSquareDifference(int) {
  console.log(squareOfSums(int) - sumOfSquares(int));
}

function sumOfSquares(int) {
  let sum = 0;

  for (let i = 1; i <= int; i++) {
    sum += i ** 2;
  }

  return sum;
}

function squareOfSums(int) {
  let sum = 0;

  for (let i = 1; i <= int; i++) {
    sum += i;
  }

  return sum ** 2;
}

sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150
