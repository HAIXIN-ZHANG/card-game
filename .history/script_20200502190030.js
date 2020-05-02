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
  preSelect: null,
  checkMatching: false,
  totalCards:0,
  clearedCards:0,

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

function startGame() {
  clearGameBoard();
  game.startButton.innerHTML = 'End game';
  game.totalCards = 0;
  game.clearedCards = 0;
  game.level = 1;
  game.checkMatching = false;
  game.gameOver = false;
  game.preSelect = null;
  generateCards();
  bindCardClick();
  game.scoreDisplay.innerHTML = game.score;
  game.levelDisplay.innerHTML = game.level;
  startTimer();
}

function handleCardFlip() {
}

function nextLevel() {
  if(game.level === 3) {
    handleGameOver();
  }
  else{
    clearGameBoard();
    game.level++;
    game.levelDisplay.innerHTML = game.level;
    game.clearedCards = 0;
    game.totalCards = 0;
    generateCards();
    bindCardClick();
    startTimer();

  }
}

function handleGameOver() {
  game.startButton.innerHTML = 'Start game';
  clearInterval(game.timerInterval);
  game.gameOver = true;
  alert(`congratulation, your score is ${game.score}`)
}

function generateCards() {
  const gameBoard = game.gameBoard;
  const gameSize = game.level * 2;
  const totalCards = gameSize * gameSize;
  game.totalCards = totalCards;
  gameBoard.style['grid-template-columns'] = `repeat(${gameSize}, 1fr)`;
  const cards = [];
  for (let i = 0; i < totalCards / 2; i++) {
    const tech = CARD_TECHS[i % CARD_TECHS.length];
    const card = createCardElement(tech);
    cards.push(card);
    cards.unshift(card.cloneNode(true));
  }
  while (cards.length > 0) {
    const index = Math.floor(Math.random() * cards.length);
    const card = cards.splice(index, 1)[0];
    gameBoard.appendChild(card);
  }

}
function createCardElement(tech) {
  const  node = document.createElement('div');
  const cardFront = document.createElement('div');
  const cardBack = document.createElement('div');

  cardFront.classList.add('card__face', 'card__face--front');
  cardBack.classList.add('card__face', 'card__face--back');
  node.classList.add('card', tech);
  node.dataset.tech = tech;

  node.appendChild(cardFront);
  node.appendChild(cardBack);
  return node;
}

function startTimer() {
  if (game.timerInterval){
    stopTimer();
  }
  else{
    game.timer = 60;
    updateTimerDisplay();
    game.timerInterval = setInterval(()=>{
      game.time--;
      updateTimerDisplay();
      if(game.time === 0) {
        handleGameOver();
      }
    },1000);
  }
}

function stopTimer(){
  clearInterval(game.timerInterval);
  game.timerInterval = null;
}
function checkCardMatching(card1, card2){
  
}
/*******************************************
/     UI update
/******************************************/
function updateScore() {
  const score = game.level * game.level * game.timer;
  game.score += score;
  game.scoreDisplay.innerHTML = game.score;
}

function updateTimerDisplay() {
  game.timerDisplay.innerHTML = `${game.timer}s`;
  const percentage = (game.timer / 60) * 100;
  game.timerDisplay.style.width = percentage + '%';
}

function clearGameBoard() {

}

/*******************************************
/     bindings
/******************************************/
function bindStartButton() {
  game.startButton.addeEventListener('click', () => {
    if (game.gameOver) {
      startGame();
    } else {
      handleGameOver();
    }
  });
}

function unBindCardClick(card) {
  card.removeEventListener('click', handleCardFlip);
}

function bindCardClick() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', handleCardFlip)
  });
}

