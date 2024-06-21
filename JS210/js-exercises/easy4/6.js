function showMultiplicativeAverage(arr) {
  console.log(
    (arr.reduce((acc, int) => (acc *= int), 1) / arr.length).toFixed(3)
  );
}

showMultiplicativeAverage([3, 5]); // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]); // "28361.667"
