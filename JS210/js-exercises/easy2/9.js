function cleanUp(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/i.test(str[i]) === false) {
      if (result[result.length - 1] === " ") {
        continue;
      } else {
        result += " ";
      }
    } else {
      result += str[i];
    }
  }

  console.log(result);
}

cleanUp("---what's my +*& line?"); // " what s my line "
