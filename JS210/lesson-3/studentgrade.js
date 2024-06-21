const rlSync = require("readline-sync");
grades = [];

for (let i = 1; i <= 3; i++) {
  grade = rlSync.question(`Enter score ${i}:\n`);
  grades.push(Number(grade));
}

avg = grades.reduce((acc, v) => acc + v, 0) / 3;

if (avg >= 90) {
  console.log("A");
} else if (avg >= 70) {
  console.log("B");
} else if (avg >= 50) {
  console.log("C");
} else {
  console.log("F");
}
