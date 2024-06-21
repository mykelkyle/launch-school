function rotateRightmostDigits(number, rotations) {
  let str = String(number);
  let arr = str.split("");
  let rotatedDigit = arr.splice(str.length - rotations, 1);
  console.log(Number(arr.concat(rotatedDigit).join("")));
}

rotateRightmostDigits(735291, 1); // 735291
rotateRightmostDigits(735291, 2); // 735219
rotateRightmostDigits(735291, 3); // 735912
rotateRightmostDigits(735291, 4); // 732915
rotateRightmostDigits(735291, 5); // 752913
rotateRightmostDigits(735291, 6); // 352917

/*
P -
Take 2 arguments, an integer and a single digit representing n rotations.

Based on n, rotate the nth digit from the right to the end of the integer and move all numbers 1 space to the left

E -
examples provided

D -
integer -> string or array -> integer

A -
convert integer to a string,
capture the number to be rotated by using slice(str.length - n)
Could splice it out
concatenate the remaining string with the splice number at the end
convert back to an integer
return

C
*/
