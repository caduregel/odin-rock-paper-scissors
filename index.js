console.log("Hello World!")

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)]

    return computerChoice
}

function playRound(playerSelection, computerSelection){
    const win = computerSelection + "! You win (:"
    const lose = computerSelection + "! You lose ):"
    const tie = computerSelection + "! We tied |:"

    playerSelection = playerSelection.toLowerCase()

    if (playerSelection != 'rock' || 'paper' || 'scissor') {
        console.log('Please enter rock, paper or scissors')
    }
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return lose
    }
}

const playerSelection = 'rock'
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection, computerSelection))