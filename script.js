/*const colors = ["red", "green", "yellow", "blue"];
let gameSequence = [];
let userSequence = [];
let level = 0;
let score = 0;
let isGameStarted = false;

// UI Elements
const startBtn = document.getElementById("start-btn");
const gameStatus = document.getElementById("game-status");
const scoreDisplay = document.getElementById("score");

// Add click listeners to color buttons
document.querySelectorAll(".btn-circle").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const color = e.target.id;
    if (isGameStarted) {
      userSequence.push(color);
      playSound(color);
      flashButton(color);
      checkUserInput(userSequence.length - 1);
    }
  });
});

// Start Game
startBtn.addEventListener("click", startGame);

function startGame() {
  level = 0;
  score = 0; // Reset score
  gameSequence = [];
  isGameStarted = true;
  userSequence = [];
  updateScore();
  gameStatus.textContent = "Watch the sequence!";
  nextLevel();
}

// Generate next level
function nextLevel() {
  level++;
  score += 10; // Increase score for completing a level
  updateScore();
  userSequence = [];
  gameStatus.textContent = `Level ${level}`;
  const randomColor = colors[Math.floor(Math.random() * 4)];
  gameSequence.push(randomColor);

  // Flash sequence
  let i = 0;
  const interval = setInterval(() => {
    flashButton(gameSequence[i]);
    playSound(gameSequence[i]);
    i++;
    if (i >= gameSequence.length) {
      clearInterval(interval);
      gameStatus.textContent = "Your Turn!";
    }
  }, 1000);
}

// Flash the button
function flashButton(color) {
  const button = document.getElementById(color);
  button.classList.add("flash");
  setTimeout(() => {
    button.classList.remove("flash");
  }, 300);
}

// Play sound for each button
function playSound(color) {
  const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${colors.indexOf(color) + 1}.mp3`);
  audio.play();
}

// Check user input
function checkUserInput(index) {
  if (userSequence[index] !== gameSequence[index]) {
    gameOver();
    return;
  }

  if (userSequence.length === gameSequence.length) {
    setTimeout(nextLevel, 1000);
  }
}

// Update score display
function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// Game Over
function gameOver() {
  gameStatus.textContent = "Game Over! Press Start to Play Again.";
  isGameStarted = false;
  playSound("red"); // Play error sound
}*/



const colors = ["red", "green", "yellow", "blue"];
let gameSequence = [];
let userSequence = [];
let level = 0;
let score = 0;
let isGameStarted = false;

// UI Elements
const startBtn = document.getElementById("start-btn");
const gameStatus = document.getElementById("game-status");
const scoreDisplay = document.getElementById("score");

// Add click listeners to color buttons
document.querySelectorAll(".btn-circle").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const color = e.target.id;
    if (isGameStarted) {
      userSequence.push(color);
      playSound(color);
      flashButton(color);
      checkUserInput(userSequence.length - 1);
    }
  });
});

// Start Game
startBtn.addEventListener("click", startGame);

function startGame() {
  level = 0;
  score = 0; // Reset score
  gameSequence = [];
  isGameStarted = true;
  userSequence = [];
  updateScore();
  gameStatus.textContent = "Watch the sequence!";
  nextLevel();
}

// Generate next level
function nextLevel() {
  level++;
  userSequence = [];
  gameStatus.textContent = `Level ${level}`;
  const randomColor = colors[Math.floor(Math.random() * 4)];
  gameSequence.push(randomColor);

  // Flash sequence
  let i = 0;
  const interval = setInterval(() => {
    flashButton(gameSequence[i]);
    playSound(gameSequence[i]);
    i++;
    if (i >= gameSequence.length) {
      clearInterval(interval);
      gameStatus.textContent = "Your Turn!";
    }
  }, 1000);
}

// Flash the button
function flashButton(color) {
  const button = document.getElementById(color);
  button.classList.add("flash");
  setTimeout(() => {
    button.classList.remove("flash");
  }, 300);
}

// Play sound for each button
function playSound(color) {
  const audio = new Audio(`https://s3.amazonaws.com/freecodecamp/simonSound${colors.indexOf(color) + 1}.mp3`);
  audio.play();
}

// Check user input
function checkUserInput(index) {
  if (userSequence[index] !== gameSequence[index]) {
    gameOver();
    return;
  }

  if (userSequence.length === gameSequence.length) {
    score += 10; // Increment score after completing a level
    updateScore();
    setTimeout(nextLevel, 1000);
  }
}

// Update score display
function updateScore() {
  scoreDisplay.textContent = `Score: ${score}`;
}

// Game Over
function gameOver() {
  gameStatus.textContent = "Game Over! Press Start to Play Again.";
  isGameStarted = false;
  playSound("red"); // Play error sound
}
