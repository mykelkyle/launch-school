// function oddElementsOf(arr) {
//   return arr.filter((x) => arr.indexOf(x) % 2 !== 0);
// }

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));

// function newArr(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]);
//   }
//   for (let i = arr.length - 1; i >= 0; i--) {
//     newArr.push(arr[i]);
//   }
//   console.log(newArr);
// }

// newArr([1, 2, 3, 4, 5]);

// function sortDescending(arr) {
//   return arr.toSorted((a, b) => b - a);
// }

// let array = [23, 4, 16, 42, 8, 15];
// let result = sortDescending(array);
// console.log(result); // logs    [42, 23, 16, 15, 8, 4]
// console.log(array); // logs    [23, 4, 16, 42, 8, 15]

// function matrixSums(arr) {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     arr[i].forEach((x) => (sum += x));
//     newArr.push(sum);
//   }

//   console.log(newArr);
// }

// matrixSums([[2, 8, 5], [12, 48, 0], [12]]); // returns [15, 60, 12]

function uniqueElements(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}

uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]); // returns [1, 2, 4, 3, 5]
