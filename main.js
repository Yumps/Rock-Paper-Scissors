let userChoice = prompt("Do you choose rock, paper, or scissors?");

let computerChoice = Math.random();
//console.log(computerChoice);
if (computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (0.34 <= computerChoice >= 0.66) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

choice1 = userChoice;
choice2 = computerChoice;

let compare = (choice1, choice2) => {
  if (choice1 === "rock") {
    if (choice2 === "rock") {
      return "It's a tie";
    } else if (choice2 === "paper") {
      return "You lose!";
    } else {
      return "You win!";
    }
  } else if (choice1 === "paper") {
    if (choice2 === "rock") {
      return "You win!";
    } else if (choice2 === "paper") {
      return "It's a tie!";
    } else {
      return "You lose!";
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "rock") {
      return "You lose";
    } else if (choice2 === "paper") {
      return "You win!";
    } else {
      return "It's a tie!";
    }
  }
};

console.log(compare(choice1, choice2));
