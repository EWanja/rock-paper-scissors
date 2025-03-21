    const rock = document.querySelector("#rockBtn");
    const paper = document.querySelector("#paperBtn");
    const scissors = document.querySelector("#scissorsBtn");

    let humanScore = 0;
    let computerScore = 0;
  
    const body = document.querySelector("body");

    const resultDiv = document.createElement("div"); 
    body.appendChild(resultDiv);
    
    const scoreDiv = document.createElement("div"); 
    body.appendChild(scoreDiv);

  
    function getRandomChoice() {
        const choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playRound(humanChoice) {
        const computerChoice =getRandomChoice();

        if (humanChoice === computerChoice){
            resultDiv.textContent = `It's a tie! Both chose ${humanChoice}`;
            return;
    }
     else if (
        (humanChoice === "rock" && computerChoice === "scissors")||
        (humanChoice === "paper" && computerChoice === "rock")||
        (humanChoice === "scissors" && computerChoice === "paper")

    ) {
        humanScore++;
        resultDiv.textContent =`You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultDiv.textContent =`You loose this round! ${computerChoice} beats ${humanChoice}`;
        }
        scoreDiv.textContent = (`Score - You ${humanScore} | Computer ${computerScore}`);
    
    
        if (humanScore === 5){
            resultDiv.textContent = "You win this game"        
        disableButtons();
        
        }else if(computerScore === 5){
            resultDiv.textContent = "🖥️ Computer wins the game!"
            disableButtons();
        }
    }
    
        // Function to disable buttons after the game ends
        function disableButtons() {
            rock.disabled = true;
            paper.disabled = true;
            scissors.disabled = true;
        }

        //Add event listeners
        rock.addEventListener("click", () => playRound("rock"));
        paper.addEventListener("click", () => playRound("paper"));
        scissors.addEventListener("click", () => playRound("scissors"));
        