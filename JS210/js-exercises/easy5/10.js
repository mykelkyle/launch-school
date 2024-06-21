function reverseWords(str) {
  let swapped = str.split(" ").map((word) => {
    if (word.length > 4) {
      return word.split("").reverse().join("");
    } else {
      return word;
    }
  });

  console.log(swapped.join(" "));
}

reverseWords("Professional"); // "lanoisseforP"
reverseWords("Walk around the block"); // "Walk dnuora the kcolb"
reverseWords("Launch School"); // "hcnuaL loohcS"
