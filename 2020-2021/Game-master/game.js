/*game functions*/

// time up counter//
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;

function setTime() {
        totalSeconds++;
        secondsLabel.innerHTML = (totalSeconds%60);
        minutesLabel.innerHTML = parseInt(totalSeconds/60);        
}   

//time up counter//

//ball movement//
function BallMovement() {
    ballX += directionX;  // Movement of the ball along the X axis.
    ballY += directionY;  // Movement of the ball along the Y axis.
}

function canvasBallCollision() {
    if(ballX + directionX > canvas.width - ballRadius || ballX + directionX < ballRadius) {
        directionX = -directionX;
    }; // ball canvas collision X axis.
    if(ballY + directionY > canvas.height - ballRadius || ballY + directionY < ballRadius) {
        directionY = -directionY;
    };// ball canvas collision Y axis.
}
//ball movement//

// enemies & enemy collision //
function playerBallCollision() {
        if (playerX > ballX - playerWidth+2 && ballX + ballRadius-2 > playerX
            && playerY > ballY - playerHeight+2 && ballY + ballRadius-2 > playerY){
            alert("---GAME OVER---");
            resetGame();
    }
}

function enemyMovement(){
    enemyX += enemyDirectionX; /* enemyX + speed of the enemy(-6) */
        if(enemyX != 0) { // if the enemy nears the left side of the canvas.
            enemyDirectionX = -enemyDirectionX;
        };
        if(enemyX != canvas.width - enemyWidth) { // if the enemy nears the right side of the canvas.
            enemyDirectionX = -enemyDirectionX;
        };  
}
function enemyCollision(){
    if(playerX > enemyX - playerWidth && enemyX + enemyWidth > playerX && playerY > enemyY) {
        alert("-----GAME OVER-----");
        resetGame();     
     }
};     
// enemies & enemy collision //