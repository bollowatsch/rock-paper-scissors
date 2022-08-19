const sign = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return sign[Math.floor(Math.random() * 3)];
}

//playRound simulates one round against the computer and returns, whether the player won, lost or if it's a draw
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  //res is the result as seen by the human player: w=won, l=lost, d=draw
  let res = "";
  console.log(res);
  if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    return "w";
  }
  else if (playerSelection === "rock" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "rock") {
    console.log(`You lose! ${playerSelection} loses to ${computerSelection}!`);
    return "l";
  }
  else {
    console.log(`It's a draw! You both chose ${playerSelection}!`);
    return "d";
  }
}

//the game function plays 5 rounds and prints the summary of results afterwards
function game() {
  let winCounter = 0, lossCounter = 0, drawCounter = 0;
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Choose your sign! (rock, paper, scissors)");
    while (!sign.includes(userInput.toLowerCase())) {
      userInput = prompt("Invalid input! Please choose your sign again! (rock, paper, scissors)");
    }
    let currentRes = playRound(userInput, getComputerChoice());
    currentRes === "w" ? winCounter++ : currentRes === "l" ? lossCounter++ : drawCounter++;
  }
  console.log(`Game statistics:\n
    Wins: ${winCounter}\n
    Losses: ${lossCounter}\n
    Draws: ${drawCounter}`
  );
  if (winCounter > lossCounter) console.log("YOU WON!");
  else if (winconter < lossCounter) console.log("YOU LOST!");
  else console.log("IT'S A DRAW!");
}