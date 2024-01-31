var rectangles = document.querySelectorAll(".color-option");
var numRectangles = document.querySelectorAll(".color-option").length;

var colorOptions = [];
var pickedColor;
var guessings = 0;
var score = 0;

var colorDisplay = document.getElementById("color-guess");
var messageDisplay = document.querySelector("#message");
var scoreDisplay = document.getElementById("score")
var resetButton = document.querySelector("#reset");

randomRgbColor ();
genColorOptions ();
assignColors ();
getPickedColor ();
checkingColor ();


//Generate one color options
function randomRgbColor () {
    let r = Math.floor(Math.random() * 256); //Random nmber between 0-255
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return 'rgb(' + r + ',' + g + ',' + b + ')';
};

//function that give a array of color options
function genColorOptions() {
    for (i = 0; i < rectangles.length; i++) {
        colorOptions.push(randomRgbColor());
    };   
    // console.log(colorOptions);
    return colorOptions; 
}

//Assign colors to rectangles
function assignColors () {
    colorOptions.forEach((colorOption,index) => {
        rectangles[index].style.backgroundColor = colorOption;   
    });
    // console.log(rectangles[2].style.backgroundColor);
}

//Pick one of the color option to be the guess color
function getPickedColor () {
   pickedColor =  colorOptions[ Math.floor(Math.random()* numRectangles)];
   colorDisplay.textContent = pickedColor;
}

//Check if color is the same as the picked one + limit number of guessings
function checkingColor () {
    rectangles.forEach (rectangle => {
        rectangle.addEventListener ("click", el => {
            backgroundColor = el.target.style.backgroundColor.split(" ").join("")
            if (backgroundColor === pickedColor) {
                messageDisplay.classList.add("green");
                messageDisplay.classList.remove("red","orange");
                messageDisplay.textContent = "You win!";
                score += 1;
                scoreDisplay.textContent = score;
                console.log(rectangles);
                rectangles.forEach (rectangle => {rectangle.classList.add("ghost")});
            } 
            else if (guessings == 2) {
                messageDisplay.classList.add("red");
                messageDisplay.classList.remove("green","orange");
                rectangles.forEach (rectangle => {rectangle.classList.add("ghost")});
                messageDisplay.textContent = "You lose";
                console.log(guessings);
            }
            else {
                messageDisplay.classList.add("orange");
                messageDisplay.classList.remove("red","green");
                messageDisplay.textContent = "Try again";
                el.target.classList.add("ghost");
                guessings += 1;
                // console.log(backgroundColor);
                // console.log(pickedColor);
                console.log(guessings);
            }
        })
    })
}

//Reset mechanisme
resetButton.addEventListener ("click", function reset () {
    randomRgbColor();
    colorOptions = [];
    genColorOptions();
    rectangles.forEach (rectangle => {rectangle.classList.remove("ghost")});
    messageDisplay.textContent = "";
    messageDisplay.classList.remove("red","green","orange");
    assignColors();
    pickedColor = getPickedColor();
    checkingColor ();
    guessings = 0;
    console.log(guessings);
});
