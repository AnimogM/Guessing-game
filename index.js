const prompt = require("prompt-sync")({ sigint: true });

console.log("*****GUESSING GAME*****\n");
const user = prompt("Enter username: ");

let point = 0;
let range = 2;
let stage = 1;

const game = (range, stage) => {

  guess = Math.floor(Math.random() * range) + 1
  console.log(`****Stage ${stage}****\n`);

  num = parseInt(prompt(`Guess a number between 1 and ${range}: `));

  if (guess == num) {
    point += 1; range += 1; stage += 1;
    console.log("Congrats! you guessed correctly");
    console.log(`***your score is ${point}***\n`);
    game(range, stage)
  } else {
    console.log(`You lose! the number was ${guess}`);
    playAgain = prompt("Would you like to play again? y or n? ")
    if (playAgain === 'y') {
      game(range, stage)
    } else {
      console.log(`Thanks for playing ${user}, you got ${point} points`)
    }
  }
}
game(range, stage)
