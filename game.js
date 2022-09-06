let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const result = document.querySelector(".result > p ");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord (letter){
    if( letter === "r") return letter = "Rock";
    if( letter === "p") return letter = "Paper";
    return "Scissors"
}

function win (userChoice , computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result.innerHTML = convertToWord(userChoice) + " Take over " + convertToWord(computerChoice) + ". You Win!";
    document.getElementById('board').classList.add('green-glow');
    setTimeout(() => document.getElementById('board').classList.remove('green-glow') , 500);
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout( () => document.getElementById(userChoice).classList.remove('green-glow'), 500)
}
function lose(userChoice , computerChoice){
computerScore++;
computerScore_span.innerHTML = computerScore;
result.innerHTML = convertToWord(computerChoice) + " Take over " + convertToWord(userChoice) + ". You lost!";
document.getElementById('board').classList.add('red-glow');
setTimeout( () => document.getElementById('board').classList.remove('red-glow'), 500);
document.getElementById(userChoice).classList.add('red-glow');
setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 500)
}
function draw (userChoice ){
    result.innerHTML = "It's a draw";
    document.getElementById('board').classList.add('grey-glow');
    setTimeout(() => document.getElementById('board').classList.remove('grey-glow'), 500);
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(() =>  document.getElementById(userChoice).classList.remove('grey-glow'), 500);
}
function game (userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {
    case "pr":
    case "rs":
    case "sp":
        win (userChoice , computerChoice);
        break;
    case "rp":
    case "sr" :
    case "ps" :
        lose (userChoice , computerChoice);
        break;
        case "rr":
        case "ss" :
        case "pp" :
        draw (userChoice , computerChoice);
        break;
}

}



function main() {
    rock.addEventListener('click', () => game("r"));
    paper.addEventListener('click', () => game("p"));
    scissors.addEventListener('click',() => game("s"));
}
main()