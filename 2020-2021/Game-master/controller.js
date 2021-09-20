/*Controller handling*/

// KeyCode Handling//
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var pausePressed = false;
var rightPressed = false; /*creates boolean(true or false statement) variable for the rightArrow(39) key*/
var leftPressed  = false;
var upPressed    = false;

    function keyDownHandler(event) {
        if (event.keyCode == 80) { // press 'P' //
            pausePressed = true;
        } 
        if(event.keyCode == 39) { /*Indicates whether the rightArrow(39) is pressed, if so, rightPressed = true*/
            rightPressed = true;
        }
        else if(event.keyCode == 37) {
            leftPressed = true;
        }
        if (event.keyCode == 38) {
            upPressed = true;
        }
    };

    function keyUpHandler(event) {
        pausePressed = rightPressed = leftPressed = upPressed = false; /* indicates whether the keys are NOT pressed, if so, "Pressed" = false*/
    };
 // KeyCode handling // 

 //KeyCode functions//
 // pause button //
    function pause() { 
        if(pausePressed){
            alert("Paused the Game, Press F5 to restart the match");
        }; pausePressed = false;
    };   

// player movement //
    function playerMovement(){ /* function that is called in draw() found in: --main.js--*/
        if(rightPressed){ /*if statement calling to rightPressed boolean in KeyDownHandler*/
                playerX += playerSpeedX; /* playerX = playerX + playerSpeedX*/
            if (playerX + playerWidth > canvas.width) {
                playerX = canvas.width - playerWidth;
            } 
        }
        if(leftPressed){
                playerX -= playerSpeedX;
            if (playerX < 0) {
                playerX = 0;
            }       
        }
    }
    function playerJump(){
        if(upPressed){
            if(playerY = 364){
            playerY -= jumpHeight;
            }
        }else if(playerY = 296) {
            playerY += jumpHeight;
        }
    }