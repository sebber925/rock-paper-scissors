const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let computerScore = 0;
let humanScore = 0;
let computerChoice = Math.floor(Math.random() * 3);

    function getComputerChoice() {
        if (computerChoice === 0) {
            return rock;
        } else if (computerChoice === 1) {
            return paper;
        } else if (computerChoice === 2) {
            return scissors;
        };
    };
    
    function getHumanChoice() {
        let humanChoice = prompt("Rock, paper, scissors?");

        if (humanChoice.toLowerCase() === 'rock') {
            return rock;
        } else if (humanChoice.toLowerCase() === "paper") {
            return paper;
        } else if (humanChoice.toLowerCase() === 'scissors') {
            return scissors;
        }
    };
 
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === rock) && (computerChoice === paper)) {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else if ((humanChoice === rock) && (computerChoice === scissors)) {      
            console.log("You win! Rock beats paper!");
            humanScore++; 
        } else if ((humanChoice === rock) && (computerChoice === rock)) {      
            console.log("It's a tie!");
        } else if ((humanChoice === paper) && (computerChoice === paper)) {      
            console.log("It's a tie!");
        } else if ((humanChoice === paper) && (computerChoice === scissors)) {      
            console.log("You lose! Scissors beats paper!");
            computerScore++; 
        } else if ((humanChoice === paper) && (computerChoice === rock)) {      
            console.log("You win! Rock beats paper!");
            humanScore++;    
        } else if ((humanChoice === scissors) && (computerChoice === paper)) {      
            console.log("You win! Scissors beats paper!");
            humanScore++;      
        } else if ((humanChoice === scissors) && (computerChoice === scissors)) {      
            console.log("It's a tie!");
        } else if ((humanChoice === scissors) && (computerChoice === rock)) {      
            console.log("You lose! Rock beats scissors!");
            computerScore++;      
    }
}

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));

    // function playGame() {
    //     playRound(humanSelection, computerSelection);
    // }


// I want a ComputerChoice, where the result gets chosen random out of 3 options: Rock, Paper, Scissors
// Then I want a human input, fill in a prompt where you choose an option.
