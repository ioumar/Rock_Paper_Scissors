function getComputerChoice(){
   let paper = "papier";
   let rock = "pierre";
   let scissors = "ciseau";
   let token = Math.floor(Math.random()*3);
   
   if(token === 0){
    return paper
   }
   else if(token === 1){
    return rock;
   }
   else{
     return scissors;
   }
   
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

playGame();







