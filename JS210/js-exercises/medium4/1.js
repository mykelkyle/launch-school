function computePercentages(table) {
  let totalSum = Object.values(table).reduce((acc, v) => acc + v);
  let lowerPer = (table.lowercase / totalSum) * 100;
  let upperPer = (table.uppercase / totalSum) * 100;
  let neitherPer = (table.neither / totalSum) * 100;
  return [lowerPer, upperPer, neitherPer];
}

function letterPercentages(str) {
  const countTable = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  str.split("").forEach((char) => {
    if (!/[a-z]/i.test(char)) {
      countTable.neither++;
      return;
    }

    if (char === char.toLowerCase()) {
      countTable.lowercase++;
    } else {
      countTable.uppercase++;
    }
  });

  let percentages = computePercentages(countTable);
  return {
    lowercase: `${percentages[0].toFixed(2)}`,
    uppercase: `${percentages[1].toFixed(2)}`,
    neither: `${percentages[2].toFixed(2)}`,
  };
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
