const buttonList = document.querySelector('.playground__button-list');
const humanChoice = document.querySelector('.playground__human-choice');
const iaChoice = document.querySelector('.playground__ia-choice');

buttonList.addEventListener('click',(event)=> {
    switch(event.target.innerText){
        case "Pierre":
            humanChoice.textContent = event.target.innerText;
            break;
        case "Papier":
            humanChoice.textContent = event.target.innerText;
            break;
        case "Ciseau":
            humanChoice.textContent = event.target.innerText;
            break;
        default:
            humanChoice.textContent = "";
    }

    iaChoice.textContent = getComputerChoice();

    setTimeout(()=>{
        humanChoice.textContent = "";
        iaChoice.textContent = "";
    }, 2000);
});


function getComputerChoice(){
   let paper = "Papier";
   let rock = "Pierre";
   let scissors = "Ciseau";
   let token = Math.floor(Math.random()*3);

   switch(token){
     case 0:
        return paper;
     case 1: 
        return rock;
    default:
        return scissors;
   };
}


function getHumanChoice(){

    let userEnter = prompt("Veuillez entrer pierre, papier ou ciseau : ");
    return userEnter.toLowerCase();
}


function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    function playGround(humanChoice, computerChoice){
        if(humanChoice === "pierre" && computerChoice === "papier"){
            console.log("1 point pour l'ordinateur. Le papier bat la pierre");
            computerScore = computerScore + 1;
        }
    
        else if(humanChoice === "pierre" && computerChoice === "ciseau"){
            console.log("1 point. La pierre bat les ciseaux");
            humanScore = humanScore + 1;
        }
    
        else if(humanChoice === "papier" && computerChoice === "ciseau"){
            console.log("1 point pour l'ordinateur. Les ciseaux battent le papier");
            computerScore = computerScore + 1;
        }
        
        else if(humanChoice === "papier" && computerChoice === "pierre"){
            console.log("1 point. Le papier bat la pierre");
            humanScore = humanScore + 1;
        }
        
        else if(humanChoice === "ciseau" && computerChoice === "papier"){
            console.log("1 point. Les ciseaux battent le papier");
            humanScore = humanScore + 1;
        }
        
        else if(humanChoice === "ciseau" && computerChoice === "ciseaux"){
            console.log("1 point pour l'ordinateur. La pierre bat les ciseaux");
            computerScore = computerScore + 1;
        }
        else{
            console.log("Vous êtes à égalité. Pas de points");
        }
        }

playGround(getHumanChoice(),getComputerChoice());
playGround(getHumanChoice(),getComputerChoice());
playGround(getHumanChoice(),getComputerChoice());
playGround(getHumanChoice(),getComputerChoice());
playGround(getHumanChoice(),getComputerChoice());

}

// playGame();







