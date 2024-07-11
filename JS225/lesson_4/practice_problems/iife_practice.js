// // function() {
// //   console.log("Sometimes, syntax isn't intuitive!")
// // } ();

// // Error, because the definition needs to be wrapped in parantheses to be executed as an expression

// // (function () {
// //   console.log("Sometimes, syntax isn't intuitive!");
// // })();

// var sum = 0;
// var numbers;

// sum += 10;
// sum += 31;

// numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce(function (sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);
// // sum += sum(numbers); // ?

(function countdown(num) {
  console.log(num);

  if (num === 0) {
    console.log("Done!");
    return;
  }

  return countdown(num - 1);
})(7);

// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!
