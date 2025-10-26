let humanScore = 0;
let computerScore = 0;



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
    return userEnter;
}



