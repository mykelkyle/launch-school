function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word); // "hello"
console.log(capitalizedWord); // "Hello"
console.log(exclaimedWord); // "Hello!!!"
