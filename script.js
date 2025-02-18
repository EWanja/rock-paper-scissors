function playGame() {
    // Initialize scores inside playGame
    let humanScore = 0;
    let computerScore = 0;

    // Function to get a random computer choice
    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    // Function to get human choice
    function getHumanChoice() {
        let choice = prompt("Enter rock, paper, or scissors:").toLowerCase();

        // Validate input
        while (!["rock", "paper", "scissors"].includes(choice)) {
            choice = prompt("Invalid choice! Please enter rock, paper, or scissors:").toLowerCase();
        }

        return choice;
    }

    // Function to play a single round
    function playRound(humanChoice, computerChoice) {
        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return;
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }

        // Display updated scores
        console.log(`Score - You: ${humanScore} | Computer: ${computerScore}`);
    }

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log(`\nRound ${round}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Declare final winner
    console.log("\nGame Over!");
    if (humanScore > computerScore) {
        console.log(`🎉 You win the game! Final Score - You: ${humanScore} | Computer: ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`💻 Computer wins the game! Final Score - You: ${humanScore} | Computer: ${computerScore}`);
    } else {
        console.log(`🤝 It's a tie! Final Score - You: ${humanScore} | Computer: ${computerScore}`);
    }
}

// Start the game
playGame();
