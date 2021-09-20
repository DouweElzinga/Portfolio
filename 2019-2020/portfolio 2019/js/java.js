var btn1 = document.getElementById("box1");
var modal1 = document.getElementById("MyModal1");
var close1 = document.getElementsByClassName("modal1")
var span = document.getElementsByClassName("close")[0];

btn1.onclick = function() {
    modal1.style.display = "block";
}

span.onclick = function() {
    modal1.style.display = "none"
}
modal1.onclick = function(event) {
    if (event.target) {
      modal1.style.display = "none";
    }
} 

var header = document.getElementById("topnav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



