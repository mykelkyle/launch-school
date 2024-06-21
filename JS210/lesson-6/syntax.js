// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     quz: qux,
//   };
// }

// function foo() {
//   return {
//     bar: function () {
//       console.log("bar");
//     },
//     qux: function (arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function (arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);
// let bar = obj.one;
// let baz = obj.two;
// let qux = obj.three;

// function foo([one, , three]) {
//   return [three, 5, one];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(array[0], array[1], array[2]);

// function product() {
//   let args = Array.from(arguments);
//   return args.reduce((total, number) => total * number);
// }

// let result = product(2, 3, 4, 5); // 120

// console.log(result);

// const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo); // 42
// console.log(rest); // { bar: 3.1415, qux: 'abc' }

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: "a", b: "b" },
// };

// // const { first, second, ...rest } = obj;

// const first = obj.first;
// const second = obj.second;
// const rest = {
//   third: obj.third,
//   rest: obj.rest,
// };

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return {
//     type: animalType,
//     age,
//     colors,
//   };
// }

// let { type, age, colors } = qux();
// console.log(type); // cat
// console.log(age); // 9
// console.log(colors); // [ 'black', 'white' ]

function qux(first, middle1, middle2, middle3, last) {
  return {
    first,
    last,
    middle: [middle1, middle2, middle3].sort(),
  };
}

let arr = ["Fluffy", "Pudding", "Mister", "Ben", "Butterscotch"];
let { first, last, middle } = qux(...arr);
