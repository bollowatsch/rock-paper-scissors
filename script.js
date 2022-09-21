const sign = ["rock", "paper", "scissors"];
let winCounter = 0, lossCounter = 0, drawCounter = 0, gameCount = 0;

const gameStats = document.querySelector("#gameStats");
//gameStats.innerText = `Wins: ${winCounter} - Losses: ${lossCounter} - Draws: Wins: ${drawCounter}`;

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
    //console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    winCounter++;
    gameCount++;
    updateGameStats();
  }
  else if (playerSelection === "rock" && computerSelection === "paper"
    || playerSelection === "paper" && computerSelection === "scissors"
    || playerSelection === "scissors" && computerSelection === "rock") {
    //console.log(`You lose! ${playerSelection} loses to ${computerSelection}!`);
    lossCounter++;
    gameCount++;
    updateGameStats();
  }
  else {
    drawCounter++;
    gameCount++;
    updateGameStats();
    //console.log(`It's a draw! You both chose ${playerSelection}!`);
  }
}

//create eventListeners for all buttons
const btns = document.querySelectorAll("button");
btns.forEach((btn) => btn.addEventListener("click", (e) => {
  playRound(e.target.dataset.key.toString(), getComputerChoice());
}))

function updateGameStats() {
  if (gameCount == 5) {
    if (winCounter > lossCounter) console.log("YOU WON!");
    else if (winCounter < lossCounter) console.log("YOU LOST!");
    else console.log("IT'S A DRAW!");
  } else {
    console.log(`Game statistics:\n
    Wins: ${winCounter}\n
    Losses: ${lossCounter}\n
    Draws: ${drawCounter}`);
    gameStats.innerText = `Wins: ${winCounter} | Losses: ${lossCounter} | Draws:${drawCounter}`;
  }
}
