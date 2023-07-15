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
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
      let result = "It's a tie!";
      window.alert(result);
      scoreBoard(result);
      return
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
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

function scoreBoard(result) {
  // score
  if (result === "It's a tie!") {
    playerScore++;
    computerScore++;
    console.log(playerScore, computerScore);
  } else if (result === "You win!") {
    playerScore++;
    console.log(playerScore, computerScore);
  } else {
    computerScore++;
    console.log(playerScore, computerScore);
  }
  
  // rounds
  if (playerScore !== 5 && computerScore !== 5) {
    return
  } else if (playerScore === 5 && computerScore === 5) {
    window.alert(`It's a tie.\nYou: ${playerScore}\nComputer: ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
    return
  } else if (playerScore === 5 && computerScore !== 5) {
    window.alert(`You win.\nYou: ${playerScore}\nComputer: ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
    return
  } else if (playerScore !== 5 && computerScore === 5) {
    window.alert(`You lose.\nYou: ${playerScore}\nComputer: ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
    return
  } else {
    window.alert("You get participation points, because everyone is a winner");
  }
}

// options between rock paper and scissors
rock.addEventListener('click', () => {
  let playerSelection = "rock";
  playARound(playerSelection);
});

paper.addEventListener('click', () => {
  let playerSelection = "paper";
  playARound(playerSelection);
});

scissors.addEventListener('click', () => {
  let playerSelection = "scissors";
  playARound(playerSelection);
});
