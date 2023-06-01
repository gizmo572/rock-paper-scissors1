
function getComputerChoice() {
    //declare var 'randNum' assigned to result of invokin random method to generate random number between 0 and 2.99, and floor method to round down to nearest int
    const randNum = Math.floor(Math.random() * 3);
    //return different action based on value of 'randNum'
    if (randNum === 0) return 'Rock';
    if (randNum === 1) return 'Paper';
    if (randNum === 2) return 'Scissors';
    return 'ERROR'
}

function playRound(playerSelection, computerSelection) {
    let choices = ['rock', 'paper', 'scissors'];
    if (!choices.includes(playerSelection.toLowerCase())) return "Please enter a valid option!"
    //declare var 'winner'
    //use switch statement to determine winner, and assign 'winner' to the winner
    if (playerSelection.toLowerCase() === computerSelection) return "It's a Tie!!!"
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') return "You Win! Rock beats Scissors";
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') return "You Win! Paper beats Rock";
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') return "You Win! Scissors beats Paper";
    return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.")

console.log(playRound(playerSelection, computerSelection));