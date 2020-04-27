// css class for different card image
const CARD_TECHS = [
  'html5',
  'css3',
  'js',
  'sass',
  'nodejs',
  'react',
  'linkedin',
  'heroku',
  'github',
  'aws'
];

// only list out some of the properties,
// add more when needed
const game = {
  score: 0,
  level: 1,
  timer: 60,
  timerDisplay: null,
  scoreDisplay: null,
  levelDisplay: null,
  timerInterval: null,
  startButton: null,
  gameBoard: null,
  gameOver: true,
  // and much more
};

setGame();

/*******************************************
/     game process
/******************************************/
function setGame() {
  // register any element in your game object
  game.levelDisplay = document.querySelector('.game-stats__level--value');
  game.scoreDisplay = document.querySelector('.game-stats__score--value');
  game.startButton = document.querySelector('.game-stats__button');
  game.timerDisplay = document.querySelector('.game-timer__bar');
  game.gameBoard = document.querySelector('.game-board');

  bindStartButton();
}

function startGame() {}

function handleCardFlip() {}

function nextLevel() {}

function handleGameOver() {}

/*******************************************
/     UI update
/******************************************/
function updateScore() {}

function updateTimerDisplay() {}

/*******************************************
/     bindings
/******************************************/
function bindStartButton() {
  game.startButton.

}

function unBindCardClick(card) {}

function bindCardClick() {}
