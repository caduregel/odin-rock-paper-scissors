window.onload = init;

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]

    return computerChoice
}

// Deciding who wins the round based on player and computer inputs
function playRound(playerSelection, computerSelection) {
    const win = computerSelection + "! You win (:"
    const lose = computerSelection + "! You lose ):"
    const tie = computerSelection + "! We tied |:"
    // const noChoice = 'Please enter rock paper or scissors'

    // if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
    //     return noChoice
    // }

    //Logic for rock slection
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return lose
    } else if (computerSelection == 'scissors') {
        return win
    } else if (computerSelection == 'rock') {
        return tie
    }

    //Logic for paper selection
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return lose
    } else if (computerSelection == 'rock') {
        return win
    } else if (computerSelection == 'paper') {
        return tie
    }

    //Logic for scissors selection

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return lose
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return win
    } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return tie
    }
}


//Code that needs to wait untill the page is fully loaded( Such as calling DOM elements)
function init() {

    const rockButton = document.querySelector('#rock')
    const scissorsButton = document.querySelector('#scissors')
    const paperButton = document.querySelector('#paper')

    const computerScoreDisplay = document.querySelector('#computer-score')
    const playerScoreDisplay = document.querySelector('#player-score')
    const roundResult = document.querySelector('#round-results')
    let playerScore = 0
    let computerScore = 0

    function checkResult (gameResult) {
        roundResult.textContent = gameResult
            if (gameResult.includes('win') == true) {
                playerScore = playerScore + 1
                playerScoreDisplay.textContent = 'you: ' + playerScore
            } else if (gameResult.includes('lose') == true) {
                computerScore = computerScore + 1
                computerScoreDisplay.textContent = 'Me: ' + computerScore
            }
    }

    // Event listener for the rock paper and scissor buttons, start ing with 0 for rock, 1 for paper and 2 for scissors
    rockButton.addEventListener('click', () => {
        let result = playRound('rock', getComputerChoice())
        checkResult(result)
    })

    paperButton.addEventListener('click', () => {
        let result = playRound('paper', getComputerChoice())
        checkResult(result)

    })

    scissorsButton.addEventListener('click', () => {
        let result = playRound('scissors', getComputerChoice())
        checkResult(result)
    })

}
