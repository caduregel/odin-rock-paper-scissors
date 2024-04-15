window.onload = init;

function init() {

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
    
    const selectorButton = document.querySelector('#rock')
    
    console.log(selectorButton)
    // selectorButton.addEventListener('click', () => {
    //     console.log(selectorButton.id)
    // })
    
}
