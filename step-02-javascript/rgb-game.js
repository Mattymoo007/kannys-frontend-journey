let rectangles = document.querySelectorAll(".color-option");
let numRectangles = rectangles.length;

let colorOptions = [];
let pickedColor;
let guessings = 0;
let score = 0;

const colorDisplay = document.getElementById("color-guess");
const messageDisplay = document.querySelector("#message");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.querySelector("#new-game");
const resetButton = document.querySelector("#reset");

// Initialize game
init();

function init() {
  colorOptions = [];
  genColorOptions();
  assignColors();
  getPickedColor();
  setEventListeners();
  guessings = 0;
  messageDisplay.textContent = "";
  messageDisplay.classList.remove("red", "green", "orange");
  rectangles.forEach((rectangle) => rectangle.classList.remove("ghost"));
}

// Generate one color option
function randomRgbColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// Generate array of color options
function genColorOptions() {
  for (let i = 0; i < rectangles.length; i++) {
    colorOptions.push(randomRgbColor());
  }
}

// Assign colors to rectangles
function assignColors() {
  colorOptions.forEach((colorOption, index) => {
    rectangles[index].style.backgroundColor = colorOption;
  });
}

// Pick one of the color options to be the guess color
function getPickedColor() {
  pickedColor = colorOptions[Math.floor(Math.random() * numRectangles)];
  colorDisplay.textContent = pickedColor;
}

// Remove previous listeners and set new ones
function setEventListeners() {
  rectangles.forEach((rectangle) => {
    rectangle.replaceWith(rectangle.cloneNode(true));
  });
  rectangles = document.querySelectorAll(".color-option");
  rectangles.forEach((rectangle) => {
    rectangle.addEventListener("click", handleRectangleClick);
  });
}

function normalizeColor(str) {
  return str.replace(/\s/g, "");
}

function handleRectangleClick(e) {
  const backgroundColor = normalizeColor(e.target.style.backgroundColor);
  const targetColor = normalizeColor(pickedColor);

  if (backgroundColor === targetColor) {
    messageDisplay.classList.add("green");
    messageDisplay.classList.remove("red", "orange");
    messageDisplay.textContent = "You win!";
    score += 1;
    scoreDisplay.textContent = score;
    rectangles.forEach((rectangle) => rectangle.classList.add("ghost"));
  } else if (guessings >= 2) {
    messageDisplay.classList.add("red");
    messageDisplay.classList.remove("green", "orange");
    rectangles.forEach((rectangle) => rectangle.classList.add("ghost"));
    messageDisplay.textContent = "You lose";
    // Highlight the correct rectangle
    rectangles.forEach((rectangle) => {
      if (normalizeColor(rectangle.style.backgroundColor) === targetColor) {
        rectangle.classList.remove("ghost");
        rectangle.style.outline = "4px solid #2ecc40";
      }
    });
  } else {
    messageDisplay.classList.add("orange");
    messageDisplay.classList.remove("red", "green");
    messageDisplay.textContent = "Try again";
    e.target.classList.add("ghost");
    guessings += 1;
  }
}

// New game mechanism
newGameButton.addEventListener("click", init);

// Reset mechanism
resetButton.addEventListener("click", () => {
  score = 0;
  scoreDisplay.textContent = score;
  init();
});
