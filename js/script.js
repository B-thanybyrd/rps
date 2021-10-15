// Document Setup
const gameSection = document.createElement('section')
const text = document.createElement('div')
const playerMoveDisplay = document.createElement('h2')
const computerMoveDisplay = document.createElement('h2')
const gameResult = document.createElement('h2')
const playerInstruction = document.createElement('h1')
const overallResult = document.createElement('div')
const moveButtons = document.createElement('div')
const playAgain = document.createElement('button')

// Ready for styling
gameSection.id = "theGame"
text.id = "text"
playerMoveDisplay.id = "playerMove"
computerMoveDisplay.id = "computerMove"
gameResult.id = "gameResult"
playerInstruction.id = "playerInstruction"
overallResult.id = "result"
moveButtons.id = "buttons"
playAgain.id = "playAgain"

playerInstruction.innerHTML = `Let's play rock, paper, scissors!`
playAgain.innerHTML = 'Play Again'
playAgain.style.display = "none"

text.append(playerMoveDisplay, computerMoveDisplay, gameResult)
gameSection.append(playerInstruction, overallResult, moveButtons, playAgain, text)
document.body.append(gameSection)

playAgain.addEventListener('click', function() {
    moveButtons.style.display = "block"
    playAgain.style.display = "none"
    overallResult.style.display = "none"
})

const game = {
    games: 0, // Tracks how many games we've played - limit 5
    score: 0, // Overall score for determining winner
    playerScore: 0,
    computerScore: 0,
    playerMove: '',
    computerMove: '',
    moves: ['rock', 'paper', 'scissors'], // Simplifies move selection & button creation

    generateComputerMove: function() {
        let randomMove = game.moves[Math.floor(Math.random() * game.moves.length)]
        computerMoveDisplay.innerHTML = 'Computer Move: ' + randomMove
        game.computerMove = randomMove
    },
    
    getPlayerMove: function(e) {
        game.playerMove = e.target.id
        playerMoveDisplay.innerHTML = 'Player Move: ' + game.playerMove
        game.play();
    },
    
    play: function() {
       
        game.games++
        text.style.display = "block"

        if (game.games < 5) {

        game.generateComputerMove()
    
        switch(game.playerMove + game.computerMove) {
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
                game.results.draw()
                game.results.printWinner()
            break;
            case 'rockscissors':
            case 'scissorspaper':
            case 'paperrock':
                game.results.player()
                game.results.printWinner()    
                break;
            default: 
                game.results.computer()
                game.results.printWinner()
                break;
        } 
        
        overallResult.style.display = "block"
        playerInstruction.innerHTML = 'Choose another move'
        
        } 
        
        else { 

            game.end();

        }
    },

    end: function() {

        text.style.display = "none"
        moveButtons.style.display = "none"
        playAgain.style.display = "block"

        playerInstruction.innerHTML = 'GAME OVER';

        (game.score > 0) ?
        overallResult.innerHTML = `<h3>You beat the computer by ${game.score} points!</h3>`
        : overallResult.innerHTML = `<h3>You lost to the computer</h3>`

        // Reset
        game.games = 0
        game.score = 0
        game.playerScore = 0
        game.computerScore = 0
       
    },

    results: {
        draw: function() {
            gameResult.innerHTML = `It's a draw.`
        },
        player: function() {
            gameResult.innerHTML = 'You win!'
            game.playerScore++
            game.score++
        },
        computer: function() {
            gameResult.innerHTML = 'You lose.'
            game.computerScore++
            game.score--
        },
        printWinner: function() {
            overallResult.innerHTML = `
                <h3>Player: ${game.playerScore}</h3> 
                <h3>Computer: ${game.computerScore}</h3>`
        }
    },
};

// Make the buttons

for (let i = 0; i < game.moves.length; i++) {
    const button = document.createElement('button')
    button.id = game.moves[i];
    button.innerHTML = game.moves[i];
    button.addEventListener('click', game.getPlayerMove);
    moveButtons.appendChild(button) 
}