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
        document.getElementById("results").innerHTML = "Winner! Rock beats Scissors";
        let userScore = parseInt(document.getElementById("user-score").innerHTML);
        userScore++;
        document.getElementById("user-score").innerHTML = userScore;
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        document.getElementById("results").innerHTML = "Winner! Paper beats Rock";
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
        document.getElementById("results").innerHTML = "Winner! Scissors beats Paper";
        let userScore = parseInt(document.getElementById("user-score").innerHTML);
        userScore++;
        document.getElementById("user-score").innerHTML = userScore;
    }

    let roundNumber = parseInt(document.getElementById("round-number").innerHTML);

    if (roundNumber == 5) {
        let wins = parseInt(document.getElementById("user-score").innerHTML);
        let losses = parseInt(document.getElementById("cpu-score").innerHTML);
        //TODO: Fade rest of screen
        if (wins > losses) {
            document.getElementById("results").innerHTML = "YOU WON THE GAME!";
        } else if (wins < losses) {
            document.getElementById("results").innerHTML = "YOU LOST THE GAME";
        } else if (wins == losses) {
            document.getElementById("results").innerHTML = "TIE GAME";
        }

        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    }

    if (roundNumber < 5) {
        roundNumber++;
        document.getElementById("round-number").innerHTML = roundNumber;
    }


}

function reset() {
    // Reset results to blank
    document.getElementById("results").innerHTML = "";
    // Reset roundNumber to 1
    document.getElementById("round-number").innerHTML = "1";
    // Reset score
    document.getElementById("user-score").innerHTML = "0";
    document.getElementById("cpu-score").innerHTML = "0";
    document.getElementById("draw-score").innerHTML = "0";

    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function () { playRound('rock', computerPlay()) });

const paper = document.querySelector('#paper');
paper.addEventListener('click', function () { playRound('paper', computerPlay()) });

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function () { playRound('scissors', computerPlay()) });

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', function () { reset() });

//game();