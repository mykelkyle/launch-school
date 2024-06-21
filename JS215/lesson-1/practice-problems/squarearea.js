function totalArea(arr) {
  return arr.reduce((acc, subarr) => {
    return (acc += subarr[0] * subarr[1]);
  }, 0);
}

function totalSquareArea(arr) {
  let squares = arr.filter((rectangle) => rectangle[0] === rectangle[1]);

  return squares.reduce((acc, subarr) => {
    return (acc += subarr[0] * subarr[1]);
  }, 0);
}

// let rectangles = [
//   [3, 4],
//   [6, 6],
//   [1, 8],
//   [9, 9],
//   [2, 2],
// ];

// console.log(totalArea(rectangles)); // 141

let rectangles = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2],
];

console.log(totalSquareArea(rectangles)); // 121

/*
each subarr[0] - height subarr[1] - width
add up the product of each subarray
return value
*/
