const sign = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return sign[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  let res = null;
  if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") res = "w";
  else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") res = "l";
  else res = "d";

  return res === "w" ? `You win! ${playerSelection} beats ${computerSelection}!` : res === "l" ? `You lose! ${playerSelection} loses to ${computerSelection}!` : `It's a draw! You both chose ${playerSelection}!`;
}