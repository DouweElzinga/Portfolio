var canvas = document.getElementById("myCanvas"),
    canvasLeft = canvas.offsetLeft + canvas.clientLeft,
    canvasTop = canvas.offsetTop + canvas.clientTop,
    context = canvas.getContext("2d");
    options = [];
var optionTop = menuX + 20;
var optionLeft = menuY + 20;
var optionWidth = 260;
var optionHeight = 20;   

var header = document.getElementsByClassName("top_header");
var scoreNav = document.getElementsByClassName("top_score");


    // Main variables:

var playerWidth = 72; // player width
var playerHeight = 72; // player height
var playerX = (canvas.width - playerWidth)-40; // starting position of the player along the X axis
var playerY = canvas.height/2-30; // starting position of the player along the Y axis

var menuX = canvas.width/2 - 150;
var menuY = canvas.height/2 - 100;
var menuWidth = 300;
var menuHeight = 200;


    // Canvas colors:

var playerColor = "blue";
var ballColor = "red";
var goalColor = "green";
var fieldColor = "red";
var block1Color = "green";
var block2Color = "red";
var menuBackground = "grey";
var menuColor = "red";


    // Block objects:

var block1X = 0;
var block1Y = 0;

var block2X = 0;
var block2Y = 0;

var block3X = 0;
var block3Y = 0;

var block4X = 0;
var block4Y = 0;

var blockWidth = 0;
var blockHeight = 0;
var blockWidth2 = 0;
var blockHeight2 = 0;

var ballRadius = 10;
var ballX = 50;
var ballY = 300;
var directionX = 9;
var directionY = 3;

var goalX = 0;
var goalY = canvas.height/2 - 60;
var goalWidth = 40;
var goalHeight = 120;

var fieldX = canvas.width - 20;
var fieldY = 0;
var fieldHeight = canvas.height;
var fieldWidth = 36;


    // Key handling:

var rightPressed = false; // indicates that the RightArrow key is NOT pressed by boolean.
var leftPressed = false; // indicates that the LeftArrow key is NOT pressed by boolean.
var upPressed = false; // indicates that the UpArrow key is NOT pressed by boolean.
var downPressed = false; // indicates that the DownArrow key is NOT pressed by boolean.

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) { // Event listener.
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
    else if(e.key == "Up" || e.key == "ArrowUp") {
        upPressed = true;
    }
    else if(e.key == "Down" || e.key == "ArrowDown") {
        downPressed = true;
    }
} // indicates whether the keys ARE pressed.

function keyUpHandler(e) { // Event listener.
    rightPressed = leftPressed = upPressed = downPressed = false;    
} // indicates whether the keys are NOT pressed.


    // Elements to be drawn on canvas:

function drawRect() { // Rectangular objects.
    context.fillStyle = goalColor;
    context.fillRect(goalX, goalY, goalWidth, goalHeight);
    context.fillStyle = playerColor;
    context.fillRect(playerX, playerY, playerWidth, playerHeight);
    context.fillStyle = fieldColor;
    context.fillRect(fieldX, fieldY, fieldWidth, fieldHeight);
    context.fillStyle = block1Color;
    context.fillRect(block1X, block1Y, blockWidth, blockHeight);
    context.fillStyle = block1Color;
    context.fillRect(block2X, block2Y, blockWidth, blockHeight);
    context.fillStyle = block2Color;
    context.fillRect(block3X, block3Y, blockWidth2, blockHeight2);
    context.fillStyle = block2Color;
    context.fillRect(block4X, block4Y, blockWidth2, blockHeight2);
}

function drawArc() { // Round objects.
    context.beginPath();
    context.fillStyle = ballColor;
    context.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
    context.fill();
}

var score = 0;
function drawText(text){ // Text objects.
    context.font = "20px Arial";
    context.fillStyle = "#0000ff";
    context.fillText(text, 8, 20);
}

function drawMenu() { // Menu
    context.fillStyle = menuBackground;
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = menuColor;
    context.fillRect(menuX, menuY, menuWidth, menuHeight);    
}

function drawOption() { // Options
    context.fillStyle = "blue";
    context.fillRect(optionTop, optionLeft, optionWidth, optionHeight)
}

canvas.addEventListener('click', function(event) {
    var xVal = event.pageX - canvasLeft,
        yVal = event.pageY - canvasTop;
        console.log(xVal, yVal);
options.forEach(function(option) {
    if (xVal > optionLeft && xVal < optionLeft + optionWidth
        && yVal > optionTop && yVal < optionTop + optionHeight){
            alert("element clicked");
        }
    });
}, false);

    // Draw all elements/Start the game:

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    drawRect();
    drawArc();
    drawText('Score: ' + score);   
        
    // Movements:    
    
    ballX += directionX;  // Movement of the ball along the X axis.
    ballY += directionY; // Movement of the ball along the Y axis.

    if(upPressed) {
        playerY -= 10; // speed of movement up
        if (playerY < 0) { // canvas collision
            playerY = 0;
        }
    }
    if(downPressed) {
        playerY += 10; // speed of movement down
        if (playerY + playerHeight > canvas.height) { // canvas collision
            playerY = canvas.height - playerHeight;
        }
    } 

    if(rightPressed) {  
       playerX += 10; // speed of movement right
        if (playerX + playerWidth > canvas.width) { // canvas collision
            playerX = canvas.width - playerWidth; 
        } 
    } 
    if(leftPressed) {
        playerX -= 10; // speed of movement left
        if (playerX < 0) {
            playerX = 0;
        }
    }

    // Collisions:

    if(ballX + directionX > canvas.width - ballRadius || ballX + directionX < ballRadius) {
        directionX = -directionX;
    } // ball canvas collision X axis
    if(ballY + directionY > canvas.height - ballRadius || ballY + directionY < ballRadius) {
        directionY = -directionY;
    }// ball canvas collision Y axis

    if(playerX < ballX + ballRadius &&
        playerX + playerWidth > ballX &&
        playerY < ballY + ballRadius &&
        playerY + playerHeight > ballY) {
            directionX = -directionX;
            directionY = -directionY;
        } // Collision with player and ball


    if(playerX < fieldX + fieldWidth &&
        playerX + playerWidth > fieldX){
            playerX = playerX;
        } // player with field collision
        

    if (ballX < fieldX + fieldWidth &&
            ballX + ballRadius > fieldX &&
            ballY < fieldY + fieldHeight &&
            ballY + ballRadius > fieldY){
            alert("press f5 to try again");   
            ballX = 50;
            ballY = 300;
            playerX = playerX;
            playerY = playerY;
            } // reset after hitting the field behind the player


    // Goal collision:

    if(goalX < ballX + directionX + ballRadius &&
        goalX + goalWidth > ballX + directionX &&
        goalY < ballY + directionY + ballRadius &&
        goalY + goalHeight > ballY + directionY){
            score++; // add 1 point to the score.
            ballX = Math.floor(Math.random()* 300) + 100; // random X position after scoring a goal.
            ballY = Math.floor(Math.random()* 300)+ 20; // random X position after scoring a goal.
            playerX = (canvas.width - playerWidth)-40; // resets X player position.
            playerY = canvas.height/2-30; // resets player Y player position
            directionX = -directionX;
            directionY = -directionY
        } // Collision with goal and ball, adding 1 score.

    // Game changers:

    if(score > 4) { // field change when hitting 5 score.
        
        blockWidth = 20;
        blockHeight = 80;
        block1X = 240;
        block1Y = canvas.height/2 - 180;
        block2X = 240;
        block2Y = canvas.height/2 + 100;
            }   if(block1X < ballX + directionX + ballRadius &&
                    block1X + blockWidth > ballX + directionX &&
                    block1Y < ballY + directionY + ballRadius &&
                    block1Y + blockHeight > ballY + directionY){
                        directionX = -directionX;
                        directionY = -directionY;
                }
                if(block2X < ballX + directionX + ballRadius &&
                    block2X + blockWidth > ballX + directionX &&
                    block2Y < ballY + directionY + ballRadius &&
                    block2Y + blockHeight > ballY + directionY){
                        directionX = -directionX;
                        directionY = -directionY;
                }

    if(score > 9) { // field change after hitting 10 score
        blockWidth2 = 20;
        blockHeight2 = 60;
        block3X = 480;
        block3Y = canvas.height/2 - 60;
        block4X = 480;
        block4Y = canvas.height/2;
            }   if(block3X < ballX + directionX + ballRadius &&
                    block3X + blockWidth2 > ballX + directionX &&
                    block3Y < ballY + directionY + ballRadius &&
                    block3Y + blockHeight2 > ballY + directionY){
                        directionX = -directionX;
                        directionY = -directionY;
                }
                if(block4X < ballX + directionX + ballRadius &&
                    block4X + blockWidth2 > ballX + directionX &&
                    block4Y < ballY + directionY + ballRadius &&
                    block4Y + blockHeight2 > ballY + directionY){
                        directionX = -directionX;
                        directionY = -directionY;
                }

    if(score > 20) {
    }
} 

setInterval(draw, 14); // framerate

// if(rightPressed) {  
//   playerX += 10; // speed of movement right
//    if (playerX + playerWidth > canvas.width) { // canvas collision
//       playerX = canvas.width - playerWidth;
//    } 
//} 
//if(leftPressed) {
//    playerX -= 10; // speed of movement left
//    if (playerX < 0) {
//        playerX = 0;
//    }