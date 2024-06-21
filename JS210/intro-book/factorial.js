// function factorial(number) {
//   if (number === 1) return 1;

//   return number * factorial(number - 1);
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// let array = [];
// array[100] = 3;
// array.forEach(function (num) {
//   console.log(num);
// });

// array.forEach((num) => console.log(num));
// array.forEach((num) => console.log(num + 2));

// let arr = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// new_arr = arr.map(function (num) {
//   if (num % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// });

// console.log(new_arr);

// function findIntegers(arr) {
//   filtered_arr = arr.filter(function (element) {
//     if (Number.isInteger(element)) {
//       return element;
//     }
//   });

//   return filtered_arr;
// }

// function findIntegers(arr) {
//   return arr.filter(function (element) {
//     return Number.isInteger(element);
//   });
// }

// let things = [1, "a", "1", 3, NaN, 3.1415, -4, null, false];
// let integers = findIntegers(things);
// console.log(integers); // => [1, 3, -4]

// arr.map((letters) => letters.length)

// function oddLengths(arr) {
//   lengths = arr.map(function (str) {
//     return str.length;
//   });

//   return lengths.filter(function (num) {
//     return num % 2 !== 0;
//   });
// }

// let arr = ["a", "abcd", "abcde", "abc", "ab"];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// function sumOfSquares(arr) {
//   return arr.reduce((acc, element) => {
//     return acc + element ** 2;
//   }, 0);
// }

// let arr = [3, 5, 7];
// console.log(sumOfSquares(arr)); // => 83

// function oddLengths(arr) {
//   return arr.reduce((acc, str) => {
//     let l = str.length;

//     if (l % 2 !== 0) {
//       acc.push(l);
//     }

//     return acc;
//   }, []);
// }

// let arr = ["a", "abcd", "abcde", "abc", "ab"];
// console.log(oddLengths(arr)); // => [1, 5, 3]

// let numbers1 = [1, 3, 5, 7, 9, 11];
// let numbers2 = [];
// let numbers3 = [2, 4, 6, 8];

// console.log(numbers1.includes(3));
// console.log(numbers2.includes(3));
// console.log(numbers3.includes(3));

// let arr = [
//   ["hello", "world"],
//   ["example", "mem", null, 6, 88],
//   [4, 8, 12],
// ];

// arr.forEach(function (subArr) {
//   subArr.forEach(function (v, i, arr) {
//     if (v === 6) {
//       arr[i] = 606;
//     }
//   });
// });

// arr[1][3] = 606;

// console.log(arr);

let key = "name";

let person = {
  name: "Jane",
  age: 37,
  hobbies: ["photography", "genealogy"],
  key: "name",
};

console.log(person.key);
