function countOccurrences(arr) {
  let count = {};
  arr.forEach((v) => {
    if (count[v]) {
      count[v] += 1;
    } else {
      count[v] = 1;
    }
  });

  console.log(count);
}

const vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
