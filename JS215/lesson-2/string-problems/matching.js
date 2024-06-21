function isBalanced(str) {
  let balanced = 0;
  let parantheses = str.split("").filter((char) => {
    return char === "(" || char === ")";
  });

  if (parantheses[0] === ")" || parantheses[parantheses.length - 1] === "(") {
    console.log(false);
    return;
  }

  parantheses.forEach((char) => {
    if (char === "(") {
      balanced += 1;
    } else {
      balanced -= 1;
    }
  });

  console.log(balanced === 0);
}

isBalanced("What (is) this?"); // true
isBalanced("What is) this?"); // false
isBalanced("What (is this?"); // false
isBalanced("((What) (is this))?"); // true
isBalanced("((What)) (is this))?"); // false
isBalanced("Hey!"); // true
isBalanced(")Hey!("); // false
isBalanced("What ((is))) up("); // false
