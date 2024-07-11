/*
A game comprised of two players. Each player takes turns placing piece on a 3 by 3 board until either a player has won by aligning 3 pieces straight, or neither players win and a tie is drawn.

Nouns - Player, Computer, Board, Pieces,
Verbs - Take a turn, place a piece, winning, tying, losing

Player class
  - place a piece (Piece class/object)??


Board class/object
  - A new board should be a fresh 3x3 grid
  - This object should collaborate with Piece objects,
    squares should get marked

Game class
  - To encapsulate an entire game from start to finish
*/

const readlineSync = require("readline-sync");

class Board {
  constructor() {
    this.grid = this.createNewGrid();
  }

  winningLineExists() {
    const lines = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    return lines.filter((line) => {
      return (
        line.every((val) => this.grid[val] === "X") ||
        line.every((val) => this.grid[val] === "O")
      );
    });
  }

  createNewGrid() {
    return {
      1: " ",
      2: " ",
      3: " ",
      4: " ",
      5: " ",
      6: " ",
      7: " ",
      8: " ",
      9: " ",
    };
  }

  displayGrid() {
    let grid = this.grid;

    console.log(` ${grid[1]} | ${grid[2]} | ${grid[3]} `);
    console.log(`---|---|---`);
    console.log(` ${grid[4]} | ${grid[5]} | ${grid[6]} `);
    console.log(`---|---|---`);
    console.log(` ${grid[7]} | ${grid[8]} | ${grid[9]} `);

    console.log("*".repeat(20));
  }

  placePiece(player) {
    let emptySquares = this.getEmptySquares();

    if (player.name === "Computer") {
      let randomSquare = this.pickRandomElement(emptySquares);
      this.grid[randomSquare] = player.piece;
    } else {
      let answer;

      while (true) {
        console.log("Enter a square number to place a piece.");
        answer = readlineSync.question(
          `Valid squares are ${emptySquares.join(", ")}\n`
        );

        if (emptySquares.includes(answer)) {
          break;
        } else {
          this.displayGrid();
          console.log("Invalid square. Please select from valid squares.");
        }
      }

      this.grid[answer] = player.piece;
    }
  }

  pickRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  getEmptySquares() {
    let emptySquares = [];

    for (let square in this.grid) {
      if (this.grid[square] === " ") {
        emptySquares.push(square);
      }
    }

    return emptySquares;
  }

  isFull() {
    return this.getEmptySquares().length === 0;
  }
}

class Player {
  constructor(human) {
    if (human) {
      this.name = this.getName();
    } else {
      this.name = "Computer";
    }
  }

  getName() {
    let name = readlineSync.question(
      "Welcome to Tic-Tac-Toe! Please enter your name:\n"
    );

    return name;
  }
}

class Game {
  constructor(rounds) {
    this.board = new Board();
    this.rounds = { curr: 1, max: rounds };
    this.player = new Player(true);
    this.computer = new Player();
  }

  play() {
    this.board.displayGrid();
    console.log(`Hi, ${this.player.name}! Good luck and have fun!`);
    let [firstPlayer, secondPlayer] = this.determineTurnOrder();

    while (this.rounds.curr < this.rounds.max) {
      this.board.placePiece(firstPlayer);
      this.board.placePiece(secondPlayer);
      this.board.displayGrid();

      let winningLines = this.board.winningLineExists();
      if (winningLines.length > 0) {
        if (this.board.grid[winningLines[0][0]] === this.player.piece) {
          console.log("Congratulations! You won!");
        } else {
          console.log("Sorry, you lost! Computer wins!");
        }
        this.rounds.curr += 1;
      }

      if (this.board.isFull()) {
        console.log("The board is full, tie game!");
        this.rounds.curr += 1;
      }
    }
  }

  determineTurnOrder() {
    if (this.rounds.curr % 2 === 0) {
      this.computer.piece = "X";
      this.player.piece = "O";
      return [this.computer, this.player];
    } else {
      this.player.piece = "X";
      this.computer.piece = "O";
      return [this.player, this.computer];
    }
  }
}

let game = new Game(3);
game.play();
