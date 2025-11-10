const buttonList = document.querySelector('.playground__button-list');
const humanChoiceDisplay = document.querySelector('.playground__human-choice');
const iaChoiceDisplay = document.querySelector('.playground__ia-choice');
const messagePoint = document.querySelector('.playground__message');
const humanScoreDisplay = document.querySelector('.playground__human-score');
const iaScoreDisplay = document.querySelector('.playground__ia-score');


let paper = "Papier";
let rock = "Pierre";
let scissors = "Ciseau";
let humanChoiceValue = "";
let iaChoiceValue = "";
let humanScore = 0;
let computerScore = 0;

buttonList.addEventListener('click',(event)=> {
    humanChoiceValue = event.target.innerText;
    switch(humanChoiceValue){
        case "Pierre":
            humanChoiceDisplay.textContent = humanChoiceValue;
            break;
        case "Papier":
            humanChoiceDisplay.textContent = humanChoiceValue;
            break;
        case "Ciseau":
            humanChoiceDisplay.textContent = humanChoiceValue;
            break;
        default:
            humanChoiceDisplay.textContent = "";
    }


    iaChoiceValue = getComputerChoice()
    iaChoiceDisplay.textContent = iaChoiceValue;
    playGame();

    setTimeout(()=>{
        humanChoiceDisplay.textContent = "";
        iaChoiceDisplay.textContent = "";
        messagePoint.textContent = "";
    }, 5000);
});


function getComputerChoice(){
   let token = Math.floor(Math.random()*3); 
   switch(token){
     case 0:
        return paper;
     case 1: 
        return rock;
     case 2:
        return scissors;
   };
}


function getHumanChoice(){

    let userEnter = prompt("Veuillez entrer pierre, papier ou ciseau : ");
    return userEnter.toLowerCase();
}


function playGame(){
    function playGround(humanChoiceValue, iaChoiceValue){
        if(humanChoiceValue == rock && iaChoiceValue == paper){
             messagePoint.textContent = "1 point pour l'ordinateur. Le papier bat la pierre";
            computerScore = computerScore + 1;            
        } 
        else if(humanChoiceValue == rock && iaChoiceValue == scissors){
            messagePoint.textContent = "1 point pour vous. La pierre bat les ciseaux";
            humanScore = humanScore + 1;
        }
        
        else if(humanChoiceValue == paper && iaChoiceValue == scissors){
            messagePoint.textContent = "1 point pour l'ordinateur. Les ciseaux battent le papier";
            computerScore = computerScore + 1;
        }
            
        else if(humanChoiceValue == paper && iaChoiceValue == rock){
            messagePoint.textContent = "1 point pour vous. Le papier bat la pierre";
            humanScore = humanScore + 1;
        }
            
        else if(humanChoiceValue == scissors && iaChoiceValue == paper){
            messagePoint.textContent = "1 point pour vous. Les ciseaux battent le papier";
            humanScore = humanScore + 1;
        }
            
        else if(humanChoiceValue == scissors && iaChoiceValue == rock){
            messagePoint.textContent = "1 point pour l'ordinateur. La pierre bat les ciseaux";
            computerScore = computerScore + 1;
        }
    
        else{
            messagePoint.textContent = "Vous êtes à égalité. Pas de points";
        }

        humanScoreDisplay.textContent = String(humanScore);
        iaScoreDisplay.textContent = String(computerScore);
     }

     playGround(humanChoiceValue, iaChoiceValue);

}










