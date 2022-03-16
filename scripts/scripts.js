// Makes the computer choose randomly between rock, paper, or scissors
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerSelection = ''
    let randNumber = Math.floor(Math.random()*3);
    switch (randNumber) {
        case 0:
            computerSelection = 'Rock';
            break;
        case 1:
            computerSelection = 'Scissors';
            break;
        case 2:
            computerSelection = 'Paper';
            break;
    }
    return computerSelection;
}

function roundPlayer(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt('Choose between Rock, Paper, or Scissors.').toLowerCase();
    //Handling a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }

    //Handling Rock
    else if (playerSelection === 'rock') {
        if (computerSelection === 'Paper') {
            increaseComputerScore();
          return `You lose! ${computerSelection} beats ${playerSelection}`
          }  else if (computerSelection === 'Scissors') {
              increasePlayerScore();
              return `You won! ${playerSelection} beats ${computerSelection}`
              }
    }
    
    //Handling Scissors
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'Rock') {
            increaseComputerScore();
            return `You lose! ${computerSelection} beats ${playerSelection}`
        } else if (computerSelection === 'Paper') {
            increasePlayerScore();
            return `You won! ${playerSelection} beats ${computerSelection}`
        }
    }

    //Handling Paper
    else if (playerSelection === 'paper') {
        if (computerSelection === 'Scissors') {
            increaseComputerScore();
            return `You lose! ${computerSelection} beats ${playerSelection}`
        } else if (computerSelection === 'Rock') {
            increasePlayerScore();
            return `You won! ${playerSelection} beats ${computerSelection}`
        }
    }

}

function increasePlayerScore() {
    playerScore++;
}

function increaseComputerScore() {
    computerScore++;
}
function game() {
    
    for (let i = 0; i < 5; i++) {
        console.log(roundPlayer())
    }
    if (computerScore > playerScore) {
        console.log(`The computer won. The score was ${computerScore} - ${playerScore}`);
    } else {console.log(`You won! The score was ${playerScore} - ${computerScore}`)}
}

game()