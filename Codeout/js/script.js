$( document ).ready(function() {

//////////////
// SITEWIDE //
//////////////

  // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 50);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }


  // AOS
  AOS.init({
    duration: 1200,
  })


//////////////
// HOMEPAGE //
//////////////

if($("body").hasClass("homepage")){
  // show side nav on scroll to section 2
  $(window).scroll(function() {
     var hT = $('#section2').offset().top,
         hH = $('#section2').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
      console.log((hT-wH) , wS);
     if (wS > (hT+hH-wH)){
      $('.navbar').css('opacity','1');
     }
  });

}

if($("body").hasClass("photography")){
  $(window).load(function(){
    $('.grid').fadeIn(3000).masonry({
        itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
  })

  $(".fancybox").fancybox();

  (function ($, F) {
      F.transitions.resizeIn = function() {
          var previous = F.previous,
              current  = F.current,
              startPos = previous.wrap.stop(true).position(),
              endPos   = $.extend({opacity : 1}, current.pos);

          startPos.width  = previous.wrap.width();
          startPos.height = previous.wrap.height();

          previous.wrap.stop(true).trigger('onReset').remove();

          delete endPos.position;

          current.inner.hide();

          current.wrap.css(startPos).animate(endPos, {
              duration : current.nextSpeed,
              easing   : current.nextEasing,
              step     : F.transitions.step,
              complete : function() {
                  F._afterZoomIn();

                  current.inner.fadeIn("fast");
              }
          });
      };

  }(jQuery, jQuery.fancybox));

  $(".fancybox")
      .attr('rel', 'gallery')
      .fancybox({
          nextMethod : 'resizeIn',
          nextSpeed  : 250,
          padding: 0,

          prevMethod : false,

          helpers : {
              title : {
                  type : 'inside'
              }
          }
      });

}

});
