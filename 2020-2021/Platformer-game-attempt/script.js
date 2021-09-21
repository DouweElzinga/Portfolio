// main variables //
var canvas = document.querySelector("canvas");
    canvas.width = 1296;
    canvas.height = 606;
    canvas.x = 0;
    canvas.y = 0;

var buffer = canvas.getContext("2d");
// main variables //

// player and key handling //
    var player = {
        width: 32,
        height: 32,
        color: "red",
        x: 0,
        y: canvas.height - 32,
        velocityX: 0,
        velocityY: 0,
        maxVelocityX: 36,
        maxVelocityY: 36,
        force: 8,
        jumping: false,
        jumpSpeed: 12,
        pressedKeys: [],
        LEFT: 37,
        RIGHT: 39,
        DOWN: 40,
            isPressed: function (zKey){
                return this.pressedKeys[zKey];
            },
            onkeyDown: function(event){ 
                this.pressedKeys[event.keyCode] = true;
            },
            onkeyUp: function(event) {
                this.pressedKeys[event.keyCode] = false;
            },
    };

    window.addEventListener("keydown", player.onkeyDown.bind(player));
    window.addEventListener("keyup", player.onkeyUp.bind(player));
      
        function checkInput() {

            if(player.pressedKeys[player.RIGHT]){
                moveRight();
            }
            if(player.pressedKeys[player.LEFT]){
                moveLeft();
            }

            if(player.pressedKeys[player.DOWN]) {
                moveDown();
            }   
        };
// Player and key handling //

// Player movement functions //
        function moveRight() {
            //pRight += player.velocityX+6;//
            player.x += player.velocityX+6;
            if(player.x > canvas.width - player.width) { // canvas collision //
                player.x = canvas.width - player.width;
            }
        };
        function moveLeft() {
            player.x += player.velocityX-6;
            if(player.x < 0) { // canvas collision //
                player.x = 0;
            }
        };
        function moveDown() {
            player.y += player.velocityY+12;
            if (player.y == 368) {
                player.y = canvas.height - player.height;
            }
        };
        function playerJump() {
            player.y += player.jumpSpeed;

            if (player.y > canvas.height - player.height) {
                player.y = canvas.height - player.height;
                player.force = 8;
            }
            if(player.jumping && player.force < 0){
                player.jumping = false;
            }
            if(player.jumping) {
                player.x += player.velocityX;
                player.jumpSpeed = -12;
                player.force -= 1;
            } 
            else {player.jumpSpeed = 12; }
        };
// Player movement functions //

// Player jumping key handling //

        window.addEventListener("keydown", keyDownHandler, false);
        window.addEventListener("keyup", keyUpHandler, false);
        
        function keyDownHandler(e) {
            if(e.keyCode == 38 && !player.jumping) {
                player.jumping = true;
            }
        }
        function keyUpHandler(e) {
                player.jumping = false;
            }
// Player jumping key handling //    

// enemy //
var enemy = {
    width: 32,
    height: 32,
    color: "red",
    x: 856,
    y: 0,
    velocityX: 0,
    velocityY: 0,
};
    function moveEnemy() {
        enemy.x += enemy.velocityX+12;
        if(enemy.x > canvas.width - enemy.width) {
            enemy.velocityX =+ enemy.velocityX-12;
        }if(enemy.x < sBlock2.x) {
            enemy.velocityX =+ enemy.velocityX+12;
        }
    };
// enemy //

// block methods //
var block = {
    color: "blue",
    width: 96,
    height: 16,
    x: 200,
    y: canvas.height - 96,
    }
var block2 = {
    color: "blue",
    width: 192,
    height: 16,
    x: 376,
    y: canvas.height - 176,
    }
var block3 = {
    color: "blue",
    width: 96,
    height: 16,
    x: 760,
    y: canvas.height - 96,
    }

var sBlock = {
    color: "black",
    width: 32,
    height: 80,
    x: 232 - 32,
    y: canvas.height - 80,
    }
var sBlock2 = {
    color: "black",
    width: 32,
    height: 80,
    x: 856 - 32,
    y: canvas.height - 80,
    }        

var fire = {
    color: "red",
    width: 592,
    height: 16,
    x: 232,
    y: canvas.height - 16,
}
    // Player Collision //
        function playerCollision(){
            
        // platform block collision //
            if(player.y + player.height > block.y &&
                player.y < block.y + block.height &&
                player.x > block.x - player.width &&
                player.x < block.x + block.width){
                player.y = block.y - player.height;
                player.force = 8;
                }
            if(player.y + player.height > block2.y && 
                player.y < block2.y + block2.height &&
                player.x > block2.x - player.width &&
                player.x < block2.x + block2.width){
                player.y = block2.y - player.height;
                player.force = 8;                           
            }
            if(player.y + player.height > block3.y && 
                player.y < block3.y + block3.height &&
                player.x > block3.x - player.width &&
                player.x < block3.x + block3.width){
                player.y = block3.y - player.height;
                player.force = 8;                           
            }
        // platform block collison //

            // small block collision //
            if(player.x + player.width > sBlock.x &&
                player.y + player.height > sBlock.y &&
                player.x < sBlock.x + sBlock.width){
                player.x = sBlock.x - player.width;
            }
            if(player.x + player.width > sBlock2.x &&
                player.y + player.height > sBlock2.y &&
                player.x < sBlock2.x + sBlock2.width){
                player.x = sBlock2.x - player.width;
            } 
            // small block collision //           
        }

        // fire collison //
        function fireCollision(){
            if(player.x + player.width > fire.x &&
                player.x < fire.x + fire.width &&
                player.y + player.height > fire.y){
                    alert("You're dead.");
                    player.x = 0;
                    player.y = canvas.height - 32;
                }
        // fire collision //
        }

    // Player Collision //   
// block methods //

// loop, render, update //
render = function (){

    buffer.clearRect(0, 0, canvas.width, canvas.height);

    buffer.fillStyle = "grey";
    buffer.fillRect(canvas.x, canvas.y, canvas.width, canvas.height);
    buffer.fillStyle = enemy.color;
    buffer.fillRect(enemy.x, canvas.height - enemy.height, enemy.width, enemy.height);
    buffer.fillStyle = player.color;
    buffer.fillRect(player.x += player.velocityX, player.y -= player.velocityY, player.width, player.height);                                        
    buffer.fillStyle = block.color;
    buffer.fillRect(block.x, block.y, block.width, block.height);
    buffer.fillStyle = block2.color;
    buffer.fillRect(block2.x, block2.y, block2.width, block2.height);
    buffer.fillStyle = block3.color;
    buffer.fillRect(block3.x, block3.y, block3.width, block3.height);

    buffer.fillStyle = sBlock.color;
    buffer.fillRect(sBlock.x, sBlock.y, sBlock.width, sBlock.height);
    buffer.fillStyle = sBlock2.color;
    buffer.fillRect(sBlock2.x, sBlock2.y, sBlock2.width, sBlock2.height);
    buffer.fillStyle = fire.color;
    buffer.fillRect(fire.x, fire.y, fire.width, fire.height);
};

update = function (){

    moveEnemy();
    playerJump();
    playerCollision();
    fireCollision();
        
}

function loop() {

    checkInput();
    
    render();
    update();
    console.log(player.x);
    
    window.requestAnimationFrame(loop);
}
loop();
// loop, render, update //
