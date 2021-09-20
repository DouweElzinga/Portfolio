/*Draw Functions and Object variables*/

var ballX = 36;
var ballY = 36;
var directionX = 12;
var directionY = 4;

var ballRadius = 36;

var playerX = 0;
var playerY = canvas.height - playerHeight;
var playerWidth = 36;
var playerHeight = 36;
var playerSpeedX = 9;
var jumpHeight = 72;

var enemyWidth = 72;
var enemyHeight = 72;
var enemyX = canvas.width - enemyWidth;
var enemyY = canvas.height - enemyHeight;
var enemyDirectionX = -6; /* Enemy movement based on pixels per frame*/

function drawRect() {
  context.fillStyle = "red";
  context.fillRect(playerX, playerY, playerWidth, playerHeight);
  context.fillStyle = "red";
  context.fillRect(enemyX, enemyY, enemyWidth, enemyHeight);
};

function drawArc() {
  context.beginPath();
  context.fillStyle = "blue";
  context.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
  context.fill();
  context.stroke();
};

          ////////////////////////////////
         //////////// Menu /////////////
        ///////////////////////////////

/*Hiscore Menu functions*/
  var hiscoreMenu = document.getElementById("hiscoreMenu");
  function showHiscore() {
    hiscoreMenu.style.display = "inline-block";
    menu.style.display = "none";
  };

  var closeScore = document.getElementsByClassName("closeScore");
  function closeHiscore() {
    hiscoreMenu.style.display = "none";
    menu.style.display = "inline-block";
  };
/*Hiscore Menu functions*/

/*Setting Menu functions*/
  var settings = document.getElementById("settings");
  function showSettings() {
    settings.style.display = "inline-block";
    menu.style.display = "none";
  };

  var closeSett = document.getElementsByClassName("closeSett");
  function closeSettings() {
    settings.style.display = "none";
    menu.style.display = "inline-block";
  };
/*Setting Menu functions*/

/*About Menu functions*/
  var about = document.getElementById("about");
  function showAbout() {
    about.style.display = "inline-block";
    menu.style.display = "none";
  };

  var closeAbo = document.getElementsByClassName("closeAbo");
  function closeAbout() {
    about.style.display = "none";
    menu.style.display = "inline-block";
  };
/*About Menu functions*/

// map //

// map //