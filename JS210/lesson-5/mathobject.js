function convertToDegrees(radians) {
  return (radians * 180) / Math.PI;
}

// let value = -180;

// console.log(-Math.abs(value));

// console.log(Math.sqrt(16777216));

// console.log(Math.pow(16, 6));

let a = 50.72;
let b = 49.2;
let c = 49.86;

// console.log(Math.floor(a));
// console.log(Math.ceil(b));
// console.log(Math.round(c));

function randomNum(min, max) {
  min = min < max ? min : max;
  max = min < max ? max : min;

  console.log(Math.floor(Math.random() * (max - min + 1) + min));
}

randomNum(5, 10);
