import promp from "./promp.js";
import data from "./data.js";

const wordObj = data[Math.floor(Math.random() * data.length)];
const correctWord = wordObj.word.toLowerCase();
const maxTries = 7;
const hangmanSteps = ["H", "HA", "HAN", "HANG", "HANGM", "HANGMA", "HANGMAN"];

let incorrectGuesses = 0;

async function runGame() {
  const guess = await promp(`${wordObj.question} `);

  if (guess.toLowerCase() === correctWord) {
    console.log("Congratulations! You've guessed the word correctly.");
    return;
  } else {
    // Wrong guess
    console.log(hangmanSteps[incorrectGuesses] || "HANGMAN");
    incorrectGuesses++;

    if (incorrectGuesses === maxTries - 1) {
      console.log(`Hint: ${wordObj.hint}`);
    }

    if (incorrectGuesses >= maxTries) {
      console.log(`Game over! The word was: ${correctWord}`);
      return;
    }

    return runGame();
  }
}

runGame();
