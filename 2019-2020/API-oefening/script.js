var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");
var content4 = document.getElementById("content4");
var home = document.getElementById("home");
var kaart = document.getElementById("kaart");
var grafiek = document.getElementById("grafiek");
var videos = document.getElementById("videos");

home.onclick = function(){
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";

    content1.style.display = "block"; // Show home
}

kaart.onclick = function(){
    content1.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";

    content2.style.display = "block"; // Show kaart
}

grafiek.onclick = function(){
    content1.style.display = "none";
    content2.style.display = "none";
    content4.style.display = "none";

    content3.style.display = "block"; // Show grafiek
}

videos.onclick = function(){
    content1.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none"; 

    content4.style.display = "block"; // Show videos
}
console.log(this);