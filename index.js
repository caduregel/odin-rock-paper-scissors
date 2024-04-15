window.onload = init;

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]

    return computerChoice
}

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

    const selectorButton = document.querySelectorAll('.selectorButton')
    let playerScore = 0
    let computerScore = 0

    // Event listener for the rock paper and scissor buttons, start ing with 0 for rock, 1 for paper and 2 for scissors
    selectorButton[0].addEventListener('click', () => {
        let result = playRound(selectorButton[0].id.toString(), getComputerChoice())
        if (result.includes('win') == true) {
            playerScore = playerScore + 1
            console.log(playerScore)
        } else if (result.includes('lose') == true) {
            computerScore = computerScore + 1
            console.log('computer' + computerScore)
        }
    })

    selectorButton[1].addEventListener('click', () => {
        let result = playRound(selectorButton[1].id.toString(), getComputerChoice())
        if (result.includes('win') == true) {
            playerScore = playerScore + 1
            console.log(playerScore)
        } else if (result.includes('lose') == true) {
            computerScore = computerScore + 1
            console.log('computer' + computerScore)
        }
    })

    selectorButton[2].addEventListener('click', () => {
        let result = playRound(selectorButton[2].id.toString(), getComputerChoice())
        if (result.includes('win') == true) {
            playerScore = playerScore + 1
            console.log(playerScore)
        } else if (result.includes('lose') == true) {
            computerScore = computerScore + 1
            console.log('computer' + computerScore)
        }
    })

}
