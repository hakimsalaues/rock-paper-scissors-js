function getPlayerChoice() {
  while (true) {
    const input = prompt(
      "Choose rock, paper, or scissors.\nCapitalization and extra spaces are OK.\nPress Cancel to end the game."
    );

    // Cancel returns null, so check it before calling string methods.
    if (input === null) {
      return null;
    }

    const choice = input.trim().toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    }

    alert("Invalid choice. Please enter rock, paper, or scissors. Your score has not changed.");
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 0;

  alert(
    "Challenge the computer to Rock Paper Scissors!\n\n" +
    "First to win three rounds wins the game. Draws award no points.\n" +
    "Enter your choice in each prompt; Cancel ends the game.\n\n" +
    "The browser console is required for detailed results: each round's choices, " +
    "outcome, and score are logged there. Dialogs show brief results and the final winner.\n" +
    "Before your first move, open your browser's Developer Tools and select Console " +
    "(usually F12 or Ctrl+Shift+J on Windows, or Command+Option+J on Mac).\n\n" +
    "Select OK to begin. Refresh the page to start a new game."
  );
  console.log("New game: first to three wins. Player: 0 | Computer: 0");

  while (playerScore < 3 && computerScore < 3) {
    const playerSelection = getPlayerChoice();

    if (playerSelection === null) {
      const message = `Game cancelled. No winner declared.\nFinal score - Player: ${playerScore} | Computer: ${computerScore}`;
      console.log(message);
      alert(message);
      return;
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    let outcome;
    if (result === "player") {
      playerScore++;
      outcome = "You win this round!";
    } else if (result === "computer") {
      computerScore++;
      outcome = "The computer wins this round.";
    } else if (result === "draw") {
      outcome = "It's a draw! Neither side earns a point.";
    } else {
      const message = `Game stopped: playRound() returned an unexpected result. No winner declared.\nScore unchanged - Player: ${playerScore} | Computer: ${computerScore}\nRefresh the page to try again.`;
      console.error(message);
      alert(message);
      return;
    }

    round++;
    const message =
      `Round ${round}: You chose ${playerSelection}; the computer chose ${computerSelection}.\n` +
      `${outcome}\nScore - Player: ${playerScore} | Computer: ${computerScore}`;
    console.log(message);
    alert(`${outcome}\nScore - Player: ${playerScore} | Computer: ${computerScore}`);
  }

  const winner = playerScore === 3 ? "You win the game!" : "The computer wins the game!";
  const message = `${winner}\nFinal score - Player: ${playerScore} | Computer: ${computerScore}\nRefresh the page to play again.`;
  console.log(message);
  alert(message);
}

game();
