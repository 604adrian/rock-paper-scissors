// randomly generates the computers choice
function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}


// scores
let playerScore = 0;
let computerScore = 0;

// the conditions for winning and losing
function playARound(playerSelection) {
  let computerSelection = getComputerChoice();
  displayComputerSelection(computerSelection);
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
      let result = "It's a tie!";
      window.alert(result);
      scoreBoard(result);
      return
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
      displayComputerSelection(computerSelection);
      let result = "You win!";
      window.alert(result);
      scoreBoard(result);
      return
  } else if (playerSelection === "rock" && computerSelection === "paper") {
      let result = "You lose!";
      window.alert(result);
      scoreBoard(result);
      return
  } else if (playerSelection === "paper" && computerSelection === "rock") {
      let result = "You win!";
      window.alert(result);
      scoreBoard(result);
      return
  } else if  (playerSelection === "paper" && computerSelection === "scissors") {
      let result = "You lose!";
      window.alert(result); 
      scoreBoard(result);
      return
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
      let result = "You win!";
      window.alert(result);
      scoreBoard(result);
      return
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      let result = "You lose!";
      window.alert(result);
      scoreBoard(result);
      return
  } else {
      window.alert("You get participation points");
      return "Everybody's a winner"
  } 
}


// make display 
const playRoundBtn = document.querySelector("#displayer");

const scoreKeepingBoard = document.createElement('div');
scoreKeepingBoard.classList.add('scoreKeepingBoard');
scoreKeepingBoard.style.scoreKeepingBoard = "flex";
scoreKeepingBoard.style["align-items"] = "center";
scoreKeepingBoard.style["justify-content"] = "center";
scoreKeepingBoard.style["flex-direction"] = "column";
scoreKeepingBoard.style.margin = "10px";
scoreKeepingBoard.style.padding = "20px";
scoreKeepingBoard.style["border-style"] = "double";
scoreKeepingBoard.style["font-size"] = "80px";
playRoundBtn.appendChild(scoreKeepingBoard);

const display = document.createElement('div');
display.classList.add('display');
display.style.display = "flex";

// player's stats
const playerEmoji = document.createElement('p');
playerEmoji.style["align-items"] = "center";
playerEmoji.style["justify-content"] = "center";
playerEmoji.style["flex-direction"] = "column";
playerEmoji.style.margin = "10px";
playerEmoji.style.padding = "20px";
playerEmoji.style["text-align"] = "left";
playerEmoji.style.display = "inline-block";
playerEmoji.style["font-size"] = "80px";
playerEmoji.style["margin-right"] = "auto";
playerEmoji.style["margin-left"] = "10px";
display.appendChild(playerEmoji);

// player health bar
let healthPlayer = document.getElementById("healthBar")
healthPlayer.setAttribute("max", "100");
healthPlayer.classList.add('healthPlayer');
healthPlayer.style["text-align"] = "left";
healthPlayer.style.display = "inline-block";
healthPlayer.style["margin-left"] = "20px";
healthPlayer.style["margin-right"] = "auto";

// computer's stats
const computerEmoji = document.createElement('p');
computerEmoji.style["align-items"] = "center";
computerEmoji.style["justify-content"] = "center";
computerEmoji.style["flex-direction"] = "column";
computerEmoji.style.margin = "10px";
computerEmoji.style.padding = "20px";
computerEmoji.style["text-align"] = "right";
computerEmoji.style.display = "inline-block";
computerEmoji.style["font-size"] = "80px";
computerEmoji.style["margin-right"] = "10px";
computerEmoji.style["margin-left"] = "auto";
display.appendChild(computerEmoji);

// computer health bar
let healthComputer = document.getElementById("healthBar2")
healthComputer.classList.add('healthComputer');
healthComputer.style["text-align"] = "right";
healthComputer.style.display = "inline-block";
healthComputer.style["margin-left"] = "auto";
healthComputer.style["margin-right"] = "20px";

const header = document.createElement('div');
header.classList.add('header');
header.style.display = "flex";
scoreKeepingBoard.appendChild(header)

const playerP = document.createElement('p');
playerP.classList.add('playerP');
playerP.style["font-size"] = "10px";
playerP.style["text-align"] = "left";
playerP.style.display = "inline-block";
playerP.style["margin-left"] = "10px";
playerP.style["margin-right"] = "auto";
header.appendChild(playerP);

const computerP = document.createElement('p');
computerP.classList.add('computerP');
computerP.style["font-size"] = "10px";
computerP.style["text-align"] = "right";
computerP.style.display = "inline-block";
computerP.style["margin-left"] = "auto";
computerP.style["margin-right"] = "10px";
header.appendChild(computerP);

scoreKeepingBoard.appendChild(display);

// show display
function displayComputerSelection(computerSelection) {
  let weapons = "";
  if (computerSelection === "rock") {
    displayStats("🪨"); 
  } else if (computerSelection === "paper") {
    displayStats("🧻");
  } else if (computerSelection === "scissors") {
    displayStats("✂️ ");
  } else {
    displayStats("❓");
  }
  // display.addClass("animate shake");
}

function displayStats(theWeapon) {
    computerEmoji.textContent = `${theWeapon}`;
}

function displayTheOtherStats(playerWeapon) {
    playerEmoji.textContent = `${playerWeapon}`;
}


function displayScore(playerScore, computerScore) {
    playerP.textContent = `Player's score: ${playerScore}`;
    computerP.textContent = `Computer's score: ${computerScore}`;
    healthPlayer.value += (playerScore * 10);
    healthComputer.value += (computerScore * 10);
}


function scoreBoard(result) {
  // score
  if (result === "It's a tie!") {
    displayScore(playerScore, computerScore);
    console.log(playerScore, computerScore);
    playerScore++;
    computerScore++;
  } else if (result === "You win!") {
    playerScore++;
    displayScore(playerScore, computerScore);
    console.log(playerScore, computerScore);
  } else {
    computerScore++;
    displayScore(playerScore, computerScore);
    console.log(playerScore, computerScore);
  }
  
  // rounds
  if (playerScore !== 5 && computerScore !== 5) {
    return
  } else if (playerScore === 5 && computerScore === 5) {
    window.alert(`It's a tie.\nYou: ${playerScore}\nComputer: ${computerScore}`);
    resetGame(0, 0, "❓", "❓"); 
    return
  } else if (playerScore === 5 && computerScore !== 5) {
    window.alert(`You win.\nYou: ${playerScore}\nComputer: ${computerScore}`);
    resetGame(0, 0, "❓", "❓");
    return
  } else if (playerScore !== 5 && computerScore === 5) {
    window.alert(`You lose.\nYou: ${playerScore}\nComputer: ${computerScore}`);
    resetGame(0, 0, "❓", "❓");
    return
  } else {
    window.alert("You get participation points, because everyone is a winner");
  }
}

function resetGame(playerPoint, computerPoint, playerEmoji, computerEmoji) {
  playerScore = 0;
  computerScore = 0;
  healthComputer.value = 0;
  healthPlayer.value = 0;
  displayScore(playerScore, computerScore);
  displayStats(computerEmoji);
  displayTheOtherStats(playerEmoji);
  return
}

resetGame(0, 0, "❓", "❓")

// options between rock paper and scissors
rock.addEventListener('click', () => {
  let playerSelection = "rock";
  displayTheOtherStats("🪨");
  playARound(playerSelection);
});

paper.addEventListener('click', () => {
  let playerSelection = "paper";
  displayTheOtherStats("🧻");
  playARound(playerSelection);
});

scissors.addEventListener('click', () => {
  let playerSelection = "scissors";
  displayTheOtherStats("✂️ ");
  playARound(playerSelection);
});
