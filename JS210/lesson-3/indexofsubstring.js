function indexOf(firstString, secondString) {
  let match = false;
  let capture;

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === secondString[0]) {
      capture = i;

      for (let nestedi = 0; nestedi < secondString.length; nestedi++) {
        if (secondString[nestedi] !== firstString[nestedi + i]) {
          break;
        } else if (nestedi === secondString.length - 1) {
          match = true;
        }
      }
    }

    if (match) break;
  }

  if (match === true) {
    console.log(capture);
  } else {
    console.log(-1);
  }
}

function lastIndexOf(firstString, secondString) {
  let match = false;
  let capture;

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] === secondString[0]) {
      capture = i;

      for (let nestedi = 0; nestedi < secondString.length; nestedi++) {
        if (secondString[nestedi] !== firstString[nestedi + i]) {
          break;
        } else if (nestedi === secondString.length - 1) {
          match = true;
        }
      }
    }
  }

  if (match === true) {
    console.log(capture);
  } else {
    console.log(-1);
  }
}

indexOf("Some strings", "s"); // 5
indexOf("Blue Whale", "Whale"); // 5
indexOf("Blue Whale", "Blute"); // -1
indexOf("Blue Whale", "leB"); // -1

lastIndexOf("Some strings", "s"); // 11
lastIndexOf("Blue Whale, Killer Whale", "Whale"); // 19
lastIndexOf("Blue Whale, Killer Whale", "all"); // -1
