
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
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) return "It's a Tie!!!"
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors') return "You Win! Rock beats Scissors";
    if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'Rock') return "You Win! Paper beats Rock";
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'Paper') return "You Win! Scissors beats Paper";
    return `You Lose! ${computerSelection} beats ${playerSelection.toLowerCase()}`;
}

function game() {
    //declare var patience assigned to 3 initially
    let patience = 3;
    //declare vars 'player' and 'computer' and 'ties', each assigned to 0;
    let player = 0, computer = 0, ties = 0;
    //use while loop to iterate while 'player' and 'computer' are both less than 3
    while (player < 3 && computer < 3) {
        //declare var 'compChoice' and assign it to result of invoking 'getComputerChoice'
        const compChoice = getComputerChoice();
        //declare var 'playerChoice' and assign it to result of invoking prompt method, passing in a string that requests the player to choose rock paper or scissors.
        const playerChoice = prompt("Please enter 'Rock', 'Paper', or 'Scissors'.")
        //declare var 'result' assigned to result of invoking 'playRound' func, passing in 'playerChoice' and 'compChoice'
        const result = playRound(playerChoice, compChoice);
        console.log(result)
        //if 'result' includes 'Win' increment 'player'
        if (result.includes('Win')) player++;
        //if 'result' includes 'Lose' increment 'computer'
        if (result.includes('Lose')) computer++;
        //if 'result' includes 'tie' increment 'ties'
        if (result.includes('Tie')) ties++;
        //if 'result' includes 'valid' decrement 'patience' by 1
        if (result.includes('valid')) {
            patience--;
            //if patience is 0 or less, increment 'computer' and log angry message
            if (patience <= 0) {
                console.log("THAT'S IT!! I'VE LOST MY PATIENCE! COMPUTER WINS!")
                computer++;
            } else console.log("I'm starting to lose patience...")
        }
        //log current score to console using template literal.
        console.log(`Player: ${player} Computer: ${computer} Ties: ${ties}`)
    }
    //if 'player' is greater than 'computer' return a statement 'You Win!'
    if (player > computer) return `YOU WIN!!!\nFINAL SCORE: ${player} - ${computer}`
    //return 'You Lose =('
    return `YOU LOSE =(\nFINAL SCORE: ${player} - ${computer}`
}

console.log(game());