// function makeMultipleLister(num) {
//   return function () {
//     for (let i = num; i < 100; i += num) {
//       console.log(i);
//     }
//   };
// }

// let lister = makeMultipleLister(13);
// lister();
// 13
// 26
// 39
// 52
// 65
// 78
// 91

// let total = 0;

// function add(val) {
//   return (total += val);
// }

// function subtract(val) {
//   return (total -= val);
// }

// console.log(add(1));
// // 1
// console.log(add(42));
// // 43
// console.log(subtract(39));
// // 4
// console.log(add(6));
// // 10

function startup() {
  let status = "ready";
  return function () {
    console.log("The system is ready.");
  };
}

let ready = startup();
let systemStatus; //
