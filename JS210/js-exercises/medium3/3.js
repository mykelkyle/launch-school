function rotateRightmostDigits(number, rotations) {
  let str = String(number);
  let arr = str.split("");
  let rotatedDigit = arr.splice(str.length - rotations, 1);
  return arr.concat(rotatedDigit).join("");
}

// function maxRotation(number) {
//   let strNumber = String(number);
//   let fixed = 1;

//   for (let i = strNumber.length; i > 0; i--) {
//     if (i === strNumber.length) {
//       strNumber = rotateRightmostDigits(number, i);
//     } else {
//       let fixedEls = strNumber.slice(0, fixed);
//       strNumber = fixedEls + rotateRightmostDigits(strNumber.slice(fixed), i);
//       fixed += 1;
//     }
//   }

//   console.log(Number(strNumber));
// }

// LS solution

function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }

  console.log(number);
}

maxRotation(735291); // 321579
maxRotation(3); // 3
maxRotation(35); // 53
maxRotation(105); // 15 -- the leading zero gets dropped
maxRotation(8703529146); // 7321609845
