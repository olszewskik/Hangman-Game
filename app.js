const puzzleElement = document.querySelector("#puzzle");
const guessesElement = document.querySelector("#guesses");
const game1 = new Hangman("test", 3);

puzzleElement.textContent = game1.puzzle;
guessesElement.textContent = game1.statusMessage;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  puzzleElement.textContent = game1.puzzle;
  guessesElement.textContent = game1.statusMessage;
});

getPuzzle("2", (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    console.log(puzzle);
  }
});

/*
// Making an HTTP request
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  }
});

request.open("GET", "http://puzzle.mead.io/puzzle");
request.send();

const countryCode = "US";
const countryRequest = new XMLHttpRequest();

countryRequest.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    const country = data.find(country => country.alpha2Code === countryCode);
    console.log(country.name);
  } else if (e.target.readyState === 4) {
    console.log("Unable to fetch data");
  }
});

countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
countryRequest.send();
*/
