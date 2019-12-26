const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
let game;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const render = () => {
  puzzleElement.textContent = game.puzzle;
  guessesElement.textContent = game.statusMessage;
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
