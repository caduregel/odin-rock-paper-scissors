const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]

    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    const win = computerSelection + "! You win (:"
    const lose = computerSelection + "! You lose ):"
    const tie = computerSelection + "! We tied |:"
    const noChoice = 'Please enter rock paper or scissors'

    playerSelection = playerSelection.toLowerCase()

    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        return noChoice
    }

    //Logic for rock slection
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return lose
    } else if (computerSelection == 'scissors') {
        return win
    } else if (computerSelection == playerSelection) {
        return tie
    }

    //Logic for paper selection
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return lose
    } else if (computerSelection == 'rock') {
        return win
    } else if (computerSelection == playerSelection) {
        return tie
    }

    //Logic for scissors selection

    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return lose
    } else if (computerSelection == 'paper') {
        return win
    } else if (computerSelection == playerSelection) {
        return tie
    }
}

const playerSelection = 'scissors'
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))