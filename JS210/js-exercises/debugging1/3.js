function placeABet(guess) {
  function generateRandomInt() {
    return 3;
  }

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return "Invalid guess. Valid guesses are between 1 and 25.";
  }

  if (guess === winningNumber) {
    return "Congratulations, you win!";
  } else {
    return "Wrong-o! You lose.";
  }
}

const userGuess = parseInt(prompt("Input a guess between 1-25"), 10);
alert(placeABet(userGuess));
