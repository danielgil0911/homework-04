const randomNumber = Math.floor(Math.random() * 100) + 1
let myGuess = prompt("please enter a number between 1 and 100: ")
console.log(randomNumber)

attempts = 0
while (randomNumber !== myGuess){
  attempts++; 
  if (randomNumber > myGuess){
    myGuess = prompt("too low, guess again: ");
  }
  else if (randomNumber < myGuess){
    myGuess = prompt("too high, guess again");
  }
  else if (randomNumber === myGuess){
    console.log(`Correct! It took you ${attempts} attempts to guess the number correct`)
  }
}
