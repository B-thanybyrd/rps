let playerScore = 0;
let computerScore = 0;
let computerSelection;


let game = function () {
    for (let i = 0; i <= 4; i++) {
        let playerSelection = prompt('Enter Rock, Paper, or Scissors to play the game');  
        if (playerSelection == null) {
            return;
        }

        while (playerSelection.trim().toLowerCase() != 'rock' && playerSelection != 'scissors' && playerSelection != 'paper') {
            playerSelection = prompt('Oops! That\'s not a playable move. Please try again!');
            if (playerSelection == null) {
                return;
            }
        }
                
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase().trim();

        let computerPlay = () => Math.floor(Math.random() * 3);

        computerSelection = (computerPlay() === 0) ? 'Rock' 
        : (computerPlay() === 1) ? 'Scissors' 
        : 'Paper';

        function playRound(c, p) {

            if (c === p) {
                return 'It\'s a draw!';
            } else if (c === 'Rock' && p === 'Scissors' || c === 'Paper' && p === 'Rock' || c === 'Scissors' && p === 'Paper') {
                return computerScore++, 'You Lose! ' + c + ' beats ' + p + '!';
            } else {
                return playerScore++, 'You Win! ' + p + ' beats ' + c + '!';
            }
        }

        console.log('Player: ' + playerSelection);
        console.log('Computer: ' + computerSelection);
        console.log(playRound(computerSelection, playerSelection) + ` Player: ${playerScore}, Computer: ${computerScore}` );
    }
};

game();

console.log(`Player Final: ${playerScore}, Computer Final: ${computerScore}`);

let score = Math.abs(playerScore - computerScore);

if (playerScore > computerScore) { 
    
    console.log(`Killer! You beat the computer by ${score} points!`) 
    } else if (playerScore < computerScore) {     
    console.log(`Bummer! You lost by ${score} points!`)
    } else {
    console.log(`Welp! It's a draw.`);
}