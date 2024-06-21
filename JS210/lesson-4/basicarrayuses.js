// function firstElementOf(arr) {
//   return arr[0];
// }

// function lastElementOf(arr) {
//   return arr[arr.length - 1];
// }

// function nthElementOf(arr, index) {
//   console.log(arr[index]);
// }

// function firstNOf(arr, count) {
//   if (count > arr.length) return arr;
//   console.log(arr.slice(-count, arr.length));
// }

// let digits = [4, 8, 15, 16, 23, 42];
// firstNOf(digits, 3); // returns [4, 8, 15]

function endsOf(beginningArr, endingArr) {
  let newArr = [];
  newArr.push(beginningArr[0]);
  newArr.push(endingArr[endingArr.length - 1]);
  console.log(newArr);
}

endsOf([4, 8, 15], [16, 23, 42]); // returns [4, 42]
