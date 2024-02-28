let paper =document.getElementById('user-paper');
let rock=document.getElementById('user-rock');
let scissor=document.getElementById('user-scissors');
let movePlayer =document.getElementById('user-move');
let moveComputer = document.getElementById('computer-move');
let replay = document.querySelector('.play-again'); 

let playerscore = document.getElementById('player-score');
let computerscore = document.getElementById('computer-score');
let playerScore = 0;
let computerScore = 0;

function updateScore() {
    playerscore.innerHTML =playerScore;
    computerscore.innerHTML=computerScore;
    if (playerScore >= 10|| computerScore >= 10) {
        checkScore(playerScore,computerScore);
    }
}


function gameRound(player, computer) {
   
if (player == 1 && computer == 0) {
        playerScore++;
    } 
    
    
    else if (player == 0 && computer == 1) {
        computerScore++;}
 else if (player == 1 && computer == 2) {
        computerScore++;
    } 
    
    else if (player == 2 && computer == 1) {
        playerScore++;
    }
    
    else if (player == 0 && computer == 2) {
        playerScore++;} 
   
        else if (player == 2 && computer == 0) {
        computerScore++;
    } 
    else if (player == computer) {
        playerScore += 0;
    }
    updateScore();
}

function computerMoves(choose) {
    let operation = Math.round(Math.random() * 2);
    switch (operation) {
        case 0:
            moveComputer.innerHTML = `<img src='./assets/paper-hand.png'>`;
            gameRound(choose, 0);
            break;
        case 1:
            moveComputer.innerHTML = `<img src='./assets/rock-hand.png' >`;
            gameRound(choose, 2);
            break;
        case 2:
            moveComputer.innerHTML = `<img src='./assets/scissors-hand.png' >`;
            gameRound(choose, 1);
            break;
    }
}
let result = document.getElementById('result');
let resultStatus = document.getElementById('result');

function checkScore(player, computer) {
    result.style.display = 'block';
    if (player >= 10) {
        resultStatus.innerHTML = "Player Won";
    } else if (computer >= 10) {
        resultStatus.innerHTML = "Computer Won";
    } else {
        resultStatus.innerHTML = "Tie";
    }
}

paper.onclick = () => {

 movePlayer.innerHTML = `<img src='./assets/paper-hand.png'>`;
    
 let choice = 0;
    computerMoves(choice);

};
rock.onclick = () => {
    movePlayer.innerHTML = `<img src='./assets/rock-hand.png'>`;

 let choice = 2;
  computerMoves(choice);};
scissor.onclick = () => {
movePlayer.innerHTML = `<img src='./assets/scissors-hand.png' >`;
    let choice = 1;

    computerMoves(choice);};
replay.onclick = () => {
    location.reload();
};
