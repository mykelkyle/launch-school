function searchWord(search, text) {
  return text.split(" ").reduce((acc, word) => {
    if (word.toLowerCase() === search) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}

//This solution is better because it also accounts for punctuation, if there was a word connected with a comma, for example, it wouldn't match in my OG solution

function searchWord(word, text) {
  const regex = new RegExp(word, "gi");
  const matches = text.match(regex);

  return matches ? matches.length : 0;
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

console.log(searchWord("sed", text)); // 3
