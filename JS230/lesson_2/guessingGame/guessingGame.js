document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector("form");
  let input = document.querySelector("#guess");
  let paragraph = document.querySelector("p");
  let link = document.querySelector("a");
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = "Guess a number from 1 to 100";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (Number.isNaN(parseInt(input.value, 10))) {
      paragraph.textContent = "Invalid input. Must be 1-100.";
      return;
    }

    let guess = parseInt(input.value, 10);
    let message;

    guesses += 1;

    if (guess === answer) {
      message = `You guessed it! It took you ${guesses} guesses.`;
      let submitBtn = form.querySelectorAll("input")[1];
      submitBtn.disabled = true;
      submitBtn.style.background = "gray";
      submitBtn.style.boxShadow = "5px";
    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else {
      message = `My number is higher than ${guess}`;
    }

    paragraph.textContent = message;
  });

  link.addEventListener("click", (event) => {
    event.preventDefault();
    newGame();
  });

  newGame();
});
