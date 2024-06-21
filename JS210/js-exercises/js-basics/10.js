const NUMS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function integerToString(int) {
  let str = "";

  while (int > 0) {
    let remainder = int % 10;
    int = Math.floor(int / 10);

    str = NUMS[remainder] + str;
  }

  return str;
}

function signedIntegerToString(int) {
  let result = "";
  let num = integerToString(int);

  if (int / 0 === Infinity) {
    result = "+" + num;
  } else {
    result = "-" + num;
  }

  console.log(result);
}

signedIntegerToString(4321); // "+4321"
signedIntegerToString(-123); // "-123"
signedIntegerToString(0); // "0"
