const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
let computerScore = 0;
let humanScore = 0;

    function getComputerChoice() {
        const computerChoice = Math.floor(Math.random() * 3);
        if (computerChoice === 0) {
            return rock;
        } else if (computerChoice === 1) {
            return paper;
        } else {
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
        } else {
            return 'Invalid option';
        }
    };
 
    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === rock) && (computerChoice === paper)) {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else if ((humanChoice === rock) && (computerChoice === scissors)) {      
            console.log("You win! Rock beats scissors!");
            humanScore++; 
        } else if ((humanChoice === rock) && (computerChoice === rock)) {      
            console.log("It's a tie!");
        } else if ((humanChoice === paper) && (computerChoice === paper)) {      
            console.log("It's a tie!");
        } else if ((humanChoice === paper) && (computerChoice === scissors)) {      
            console.log("You lose! Scissors beats paper!");
            computerScore++; 
        } else if ((humanChoice === paper) && (computerChoice === rock)) {      
            console.log("You win! Paper beats rock!");
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

    function playGame() {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        playRound(humanSelection, computerSelection);
        console.log(`Score: You - ${humanScore} | Computer: ${computerScore}`);

        if (computerScore === 3) {
            console.log(`You lost!`);
        } else if (humanScore === 3) {
            console.log(`You won!`);
        }
    }

    while (computerScore < 3 && humanScore < 3) {
        playGame();
    };
