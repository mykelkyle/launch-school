function centerOf(str) {
  let center = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    console.log(str.slice(center - 1, center + 1));
  } else {
    console.log(str[center]);
  }
}

centerOf("I Love JavaScript"); // "a"
centerOf("Launch School"); // " "
centerOf("Launch"); // "un"
centerOf("Launchschool"); // "hs"
centerOf("x"); // "x"
