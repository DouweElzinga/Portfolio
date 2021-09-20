// Main functions //

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var menu = document.getElementById("menu");
var time = document.getElementById("timeLabel");

function resetGame() { // Reset function returning to menu //
    canvas.style.visibility = "hidden";
    menu.style.display = "inline-block";
    playerX = 0;
    playerY = 0;
    playerSpeedX = 0;
    enemyX = canvas.width-enemyWidth;
    enemyY = canvas.height-enemyHeight;
    enemyDirectionX = 0;
    time.style.visibility = "hidden";
    clearInterval(timeStart);
    clearInterval(drawGame);
    totalSeconds = 0;
    secondsLabel.innerHTML = (totalSeconds%60);
    minutesLabel.innerHTML = parseInt(totalSeconds/60);
};

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height); // resets the canvas  //
    drawRect(); // drawn Rectangular objects found in:                   --display.js--
    drawArc(); // drawn Arc objects found in:                            --display.js--
    BallMovement(); // movement of the ball found in:                    --game.js--
    canvasBallCollision(); // collision of the ball and canvas found in: --game.js--
    enemyMovement(); // Enemy movement and canvas collision found in:    --game.js--
    enemyCollision(); // Enemy collision with player found in:           --game.js--
    playerBallCollision(); // ball with player collision found in:       --game.js--
    pause(); // Pause button with keycode 80('P') found in:              --controller.js--
    playerMovement(); // Player controls and canvas collision found in:  --controller.js--
    playerJump(); // player jump function                                --controller.js--
    console.log();
}; 

var timeStart;
var drawGame;

function start() { // onclick function after pressing 'start' in the menu //
    canvas.style.visibility = "visible";
    menu.style.display = "none";
    enemyDirectionX = -6;
    playerSpeedX = 9;
    time.style.visibility = "visible";
    drawGame = setInterval(draw, 30);
    timeStart = setInterval(setTime, 1000);
};

// Main functions //

