var Ball = document.getElementById("image");
var canvas = document.getElementById("canvas");

var dx = 10;
var dy = 12;

var x = 20;
var y = 20;

setInterval(function () { Ball.style.left = parseInt(Ball.style.left) + x + "px";
console.log("movement");
(Ball.style.left) = x + "px";
   if( (x + Ball.clientWidth > canvas.clientWidth) || (x < 10)){
        dx = dx * -1;
}
        x = x + dx;

(Ball.style.top) = y + "px";
   if( (y + Ball.clientHeight > canvas.clientHeight) || (y < 10)) {
        dy = dy * -1;
}
        y = y + dy;
}
,1000/60)

document.getElementById("click").onclick = function() {
  document.getElementById("after").style.visibility = "visible";
}
document.getElementById("click2").onclick = function() {
  document.getElementById("before").style.visibility = "visible";
}

setColor = function() {
        var e = document.getElementById("mySelect");
        var canvas = document.getElementById("canvas");
        canvas.style.backgroundColor = e.options[e.selectedIndex].value;
} 




        
