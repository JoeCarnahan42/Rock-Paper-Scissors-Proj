function getUserChoice (userInput = "bomb".toLowerCase()) {
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
    return userInput
  }else {
    console.log('Please pick "rock", "paper", or "scissors". ')
  }
} 

function getComputerChoice () {
  let num = Math.floor(Math.random() * 3)
  switch (num) {
    case 0: return "rock"
    case 1: return "paper"
    case 2: return "scissors"
  }
}


function determineWinner () {
  if (userChoice === "bomb") {
    return "You blew up the computer...I guess you win."
  }
  if (userChoice == computerChoice) {
    return "The game is a tie."
  }
  if (userChoice === "rock") {
    if(computerChoice === "paper") {
        return "Computer wins :("
    }else {
        return "You win!"
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
        return "Computer wins :("
    }else {
        return "You win!"
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
        return "Computer wins :("
    }else {
        return "You win!"
    }
  }
}

function playGame() {
    userChoice = getUserChoice()
    console.log(userChoice)
    computerChoice = getComputerChoice()
    console.log(computerChoice)
    determineWinner(userChoice, computerChoice)
    console.log(determineWinner())
}

playGame()
