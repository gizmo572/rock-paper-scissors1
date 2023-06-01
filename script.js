
function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum === 0) return 'Rock';
    if (randNum === 1) return 'Paper';
    if (randNum === 2) return 'Scissors';
    return 'ERROR'
}