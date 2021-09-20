const checkpoint = 650;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector("#main-text").style.opacity = opacity;

});

var container = document.getElementsByClassName('main-body');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = 1000 - windowHeight;
var img1 = document.getElementsByClassName('img')[0];

window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
    
    img1.style.left = scrollPercent*window.innerWidth - 500 + 'px';
  
  console.log();
});


