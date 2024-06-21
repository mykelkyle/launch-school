function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

function average(arr) {
  return sum(arr) / arr.length;
}

let temps = [54, 25, 72, 80, 13];

console.log(average(temps));
