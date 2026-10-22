function playRound(playerSelection, computerSelection ) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
               (playerSelection === "paper" && computerSelection === "rock") ||
               (playerSelection === "scissors" && computerSelection === "paper")) {
        return "player";
    } else {
        return "computer" ;
    }}
    function computerPlay() {
 const choices = ["rock", "paper", "scissors"];
 const randomIndex = Math.floor(Math.random() * choices.length);
 
 return choices[randomIndex];}