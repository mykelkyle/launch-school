function generatePattern(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${generateNums(i)}${generateStars(i, num)}`);
  }
}

function generateNums(max) {
  let arr = [];
  for (let i = 1; i <= max; i++) {
    arr.push(String(i));
  }

  return Number(arr.join(""));
}

function generateStars(index, max) {
  return "*".repeat(max - index);
}

generatePattern(7);
