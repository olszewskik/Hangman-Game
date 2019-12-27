import Hangman from "./hangman";
import getPuzzle from "./requests";

const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
let game;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const render = () => {
  puzzleElement.innerHTML = "";
  guessesElement.textContent = game.statusMessage;

  game.puzzle.split("").forEach(letter => {
    const letterElement = document.createElement("span");
    letterElement.textContent = letter;
    puzzleElement.appendChild(letterElement);
  });
};

const stratGame = async () => {
  const puzzle = await getPuzzle("4");
  game = new Hangman(puzzle, 4);
  render();
};

document.querySelector("#reset").addEventListener("click", stratGame);

stratGame();

/*
getPuzzle("4")
  .then(puzzle => {
    console.log(puzzle);
  })
  .catch(err => {
    console.log(`Error: ${err}`);
  });


getCurrentCountry()
  .then(country => {
    console.log(country.name);
  })
  .catch(error => {
    console.log(error);
  });
*/
