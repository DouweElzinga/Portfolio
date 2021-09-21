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
  
  
});

$(window).on("load",function() {
  function fade() {
      var animation_height = $(window).innerHeight() * 0.25;
      var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

      $('.hallo').each(function() {
          
          var objectTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).innerHeight();
          
          if ( objectTop + 100 < windowBottom ) {
              if ( objectTop < windowBottom - animation_height ) {
                  
                  $(this).css( {
                      transition: 'opacity 0.25s linear',
                      opacity: 1
                  } );

              } else {
                  
                  $(this).css( {
                      transition: 'opacity 0.25s linear',
                      opacity: (windowBottom - objectTop) * ratio
                  } );
              }
          } else {
              
              $(this).css( 'opacity', 0 );
          }
      });
  }
  $('.hallo').css( 'opacity', 0 );
  fade();
  $(window).scroll(function() {fade();});
});

$(window).on("load",function() {
  function fade() {
      var animation_height = $(window).innerHeight() * 0.25;
      var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

      $('.naam').each(function() {
          
          var objectTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).innerHeight();
          
          if ( objectTop + 100 < windowBottom ) {
              if ( objectTop < windowBottom - animation_height ) {
                  
                  $(this).css( {
                      transition: 'opacity 0.25s linear',
                      opacity: 1
                  } );

              } else {
                  
                  $(this).css( {
                      transition: 'opacity 0.25s linear',
                      opacity: (windowBottom - objectTop) * ratio
                  } );
              }
          } else {
              
              $(this).css( 'opacity', 0 );
          }
      });
  }
  $('.naam').css( 'opacity', 0 );
  fade();
  $(window).scroll(function() {fade();});
});

$(window).on("load",function() {
  function fade() {
      var animation_height = $(window).innerHeight() * 0.25;
      var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;

      $('.myText').each(function() {
          
          var objectTop = $(this).offset().top;
          var windowBottom = $(window).scrollTop() + $(window).innerHeight();
          
          if ( objectTop + 100 < windowBottom ) {
              if ( objectTop < windowBottom - animation_height ) {
                  
                  $(this).css( {
                      transition: 'opacity 0.25s linear',
                      opacity: 1
                  } );

              } else {
                  
                  $(this).css( {
                      transition: 'opacity 0.25s linear',
                      opacity: (windowBottom - objectTop) * ratio
                  } );
              }
          } else {
              
              $(this).css( 'opacity', 0 );
          }
      });
  }
  $('.myText').css( 'opacity', 0 );
  fade();
  $(window).scroll(function() {fade();});
});


