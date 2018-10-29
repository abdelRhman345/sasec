/*global $*/
$(function () {
    "use strict";
    
    // Adjust Header Height
        
    $('.carousel-item').height($(window).height());
        
    $(window).resize(function () {
        
        $('.carousel-item').height($(window).height());
        
    });


    // Carousel 
    $('.carousel').carousel({
        interval: 5000
    });

    $('.icon-search').click(function () {
        $('.name-search').slideToggle(300);
    });

    $('.dropdown .nav-link').click(function () {
        $('.dropdown-menu').slideToggle(300);
    });

    // Add smooth scrolling to all links in navbar + footer link
    $(".nav-links .links-item .link").on('click', function (event) {

        // Prevent default anchor click behavior
          event.preventDefault();
  
        // Store hash
          var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
              scrollTop: $(hash).offset().top - 120
          }, 1500, function () {
  
            // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
  
          });
    });

    // Check to see if the window is top if not then fixed Navbar
    
    $(window).scroll(function () {
        
        var sc = $(window).scrollTop();
        
        if (sc >= 35) {
            
            $('.navbar').css({
                "position": 'fixed',
                'top': '0px'
            });
        
            
        } else {
            
            $('.navbar').css({
                "position": 'relative',
            });
            
        }
        
    });

    // Fixed Menu To Responsive 
    $('.navbar .navbar-toggler').on('click', function () {
        $('.navbar-collapse').animate({
            right: 0
        }, 500);

        $('body').animate({
            right: '80%'
        }, 500);
    });

    $('.navbar .navbar-collapse .icon-close').on('click', function () {
        $('.navbar-collapse').animate({
            right: '-82%'
        }, 500);

        $('body').animate({
            right: '0%'
        }, 500)
    });
});

// Loading Page 
$(window).on('load', function () {
   
    "use strict";
    
    $('.loading').fadeOut(2000, function () {
        
        $(this).remove();

    });
    
});