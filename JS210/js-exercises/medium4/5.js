function featured(int) {
  for (let i = int + 1; ; i++) {
    if (isFeatured(i)) {
      console.log(i);
      return;
    } else if (i > 9876543201) {
      console.log(
        "There is no possible number that fulfills those requirements."
      );
      return;
    }
  }
}

function isFeatured(int) {
  return int % 7 === 0 && int % 2 !== 0 && digitsOccurOnce(int);
}

function digitsOccurOnce(int) {
  let str = String(int);
  const count = {};
  str.split("").forEach((v) => {
    if (count[v]) {
      count[v] += 1;
    } else {
      count[v] = 1;
    }
  });

  if (Object.values(count).some((v) => v > 1)) {
    return false;
  } else {
    return true;
  }
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543186); // 9876543201
featured(9876543200); // 9876543201
featured(9876543201); // "There is no possible number that fulfills those requirements."
