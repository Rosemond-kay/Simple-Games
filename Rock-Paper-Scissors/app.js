const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let playerChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", (event) => {
    playerChoice = event.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  });
});

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 1) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === playerChoice) {
    result = "it's a draw, play again!";
  }
  if (computerChoice === "rock" && playerChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && playerChoice === "scissors") {
    result = "you lose!";
  }
  if (computerChoice === "paper" && playerChoice === "rock") {
    result = "you lose!";
  }
  if (computerChoice === "paper" && playerChoice === "scissors") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && playerChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && playerChoice === "paper") {
    result = "you lose!";
  }
  resultDisplay.innerHTML = result;
}
