function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        document.getElementById("results").innerHTML = "Draw";
        let drawScore = parseInt(document.getElementById("draw-score").innerHTML);
        drawScore++;
        document.getElementById("draw-score").innerHTML = drawScore;
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        document.getElementById("results").innerHTML = "Loser! Paper beats Rock";
        let cpuScore = parseInt(document.getElementById("cpu-score").innerHTML);
        cpuScore++;
        document.getElementById("cpu-score").innerHTML = cpuScore;
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        document.getElementById("results").innerHTML = "Winner Winner Chicken Dinner! Rock beats Scissors";
        let userScore = parseInt(document.getElementById("user-score").innerHTML);
        userScore++;
        document.getElementById("user-score").innerHTML = userScore;
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        document.getElementById("results").innerHTML = "Winner Winner Chicken Dinner! Paper beats Rock";
        let userScore = parseInt(document.getElementById("user-score").innerHTML);
        userScore++;
        document.getElementById("user-score").innerHTML = userScore;
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        document.getElementById("results").innerHTML = "Loser! Scissors beats Paper";
        let cpuScore = parseInt(document.getElementById("cpu-score").innerHTML);
        cpuScore++;
        document.getElementById("cpu-score").innerHTML = cpuScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        document.getElementById("results").innerHTML = "Loser! Rock beats Scissors";
        let cpuScore = parseInt(document.getElementById("cpu-score").innerHTML);
        cpuScore++;
        document.getElementById("cpu-score").innerHTML = cpuScore;
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        document.getElementById("results").innerHTML = "Winner Winner Chicken Dinner! Scissors beats Paper";
        let userScore = parseInt(document.getElementById("user-score").innerHTML);
        userScore++;
        document.getElementById("user-score").innerHTML = userScore;
    }

    let roundNumber = parseInt(document.getElementById("round-number").innerHTML);

    if (roundNumber == 5) {
        document.getElementById("results").innerHTML = "";
        // Change results message from round results to game results
        let wins = parseInt(document.getElementById("user-score").innerHTML);
        let losses = parseInt(document.getElementById("cpu-score").innerHTML);
        //TODO: Fade screen behind alert box
        //TODO: change alert to confirm?
        if (wins > losses) {
            alert("YOU WON THE GAME!\nClick 'OK' to play again.");
        } else if (wins < losses) {
            alert("YOU LOST THE GAME\nClick 'OK' to play again.");
        } else if (wins == losses) {
            alert("TIE GAME\nClick 'OK' to play again.");
        }
        // Ask if they would like to play again
        // Reset roundNumber to 1
        document.getElementById("round-number").innerHTML = "1";
        //Reset score
        document.getElementById("user-score").innerHTML = "0";
        document.getElementById("cpu-score").innerHTML = "0";
        document.getElementById("draw-score").innerHTML = "0";
        //TODO: break out of function? not sure if this is the way to do it
        return;
    }

    roundNumber++;
    document.getElementById("round-number").innerHTML = roundNumber;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){playRound('rock', computerPlay())});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){playRound('paper', computerPlay())});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){playRound('scissors', computerPlay())});

//game();