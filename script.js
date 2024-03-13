let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreUpdate = document.querySelector("#user-score");
const computerScoreUpdate = document.querySelector("#computer-score");


const generateComputerChoice = () =>{
    let options =['stone','paper','scissor'];
    let randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

let gameDraw = () =>{
    console.log("Game is draw!"); 
    msg.innerText ="Game is draw!";
    msg.style.backgroundColor ="orange";
}

let showWinner = (userWin) =>{
    if(userWin){
        userScore++;
        userScoreUpdate.innerText = userScore;
        console.log("You win!");
        msg.innerText ="You win!";
        msg.style.backgroundColor ="green";
    }else{
        computerScore++;
        computerScoreUpdate.innerText = computerScore;
        console.log("you lost!");
        msg.innerText ="you lost!";
        msg.style.backgroundColor ="red";
    }
}

let playGame = (userChoice) =>{
    console.log("user choice = ", userChoice);
    //genearte computer choice
    let computerChoice = generateComputerChoice();
    console.log("computer choice = ", computerChoice);
    //conditions
    if(userChoice === computerChoice){
        //game draw
        gameDraw();
    }else {
        let userWin = true;
        if(userChoice === 'stone'){
            userWin = computerChoice === 'paper' ? false : true;
        }else if(userChoice === 'paper'){
            userWin = computerChoice === 'scissor' ? false: true;
        }else {
            userWin = computerChoice === 'stone' ? false : true;
    }
    showWinner(userWin);    
}
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});