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

  // Add smooth scrolling on all links inside the navbar
  $(".nav li a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });

  // add class at 768px
  // var width = $(window).width();
  // var website = $('#laurenvachon');
  // $(window).resize(bootstrapSmall)
  //   bootstrapSmall();
  //   function bootstrapSmall () {
  //   width = $(window).width();
  //   if (width <= 768 && !website.hasClass('smallerScreen'))  {
  //     website.addClass('smallerScreen');
  //   } else if (width > 768 && website.hasClass('smallerScreen')) {
  //     website.removeClass('smallerScreen');
  //   }
  // };

}

if($("body").hasClass("photography")){
  $(window).load(function(){
    $('.grid').fadeIn(3000).masonry({
        itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
        columnWidth: '.grid-sizer',
        percentPosition: true
    });
  })

  // fancybox
  $("[data-fancybox]").fancybox({

    // Animation duration in ms
  	speed : 630
  });

}

});
