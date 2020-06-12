// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide gamescreen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI() {
  scoreParagraph.innerText = `${game.username}: ${game.score.user} v CPU ${game.score.cpu}`;
}

// updateGameHistoryUI
function updateGameHistoryUI() {
  gameHistoryParagraph.innerText = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function (e) {
  e.preventDefault();
  console.log(`start clicked!`);
  
  const username = userName.value;
  console.log({username});
  
  game = new RockPaperScissors(username);
  console.log({game});
  
  gameScreen.classList.remove(`d-none`);
  
  console.log(`welcome screen classlist`, welcomeScreen.classList);
  welcomeScreen.classList.add(`d-none`);
  return;
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function (e) {
  e.preventDefault();

  const userMove = userSelection.value;
  game.play(userMove);
  updateScoreTallyUI();
  updateGameHistoryUI();
  return;
});


//
