(function ($) {
 "use strict";
 
//  Pre_loader
$(window).load(function() {
  $("#loading").fadeOut(500);
})

 //data-background
 $("[data-background]").each(function (){
     $(this).css("background-image","url(" + $(this).attr("data-background") + ")")
 });

//  Counter Plagin

 $('.counter').counterUp({
    delay: 10,
    time: 1000
});


// Start Countdown plagin
$('[data-countdown]').each(function() {
  var $this = $(this), finalDate = $(this).data('countdown');
  $this.countdown(finalDate, function(event) {
    $this.html(event.strftime('<div class="time-count">%D <span>days</span></div> <div class="time-count">%H <span>hours</span></div> <div class="time-count">%M <span>minutes</span></div> <div class="time-count">%S <span>Seconds</span></div>'));
  });
});
 


})(jQuery);


$(document).ready(function() {

      // Mean Menue
      $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu',
      });

      //Sticky Menue
      $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop();
        if (scroll < 5) {
         $(".sticky").removeClass("sticky-header");
        }else{
         $(".sticky").addClass("sticky-header");
        }
       });

    //  //  One Page Nav
    //   var top_offset=$('.header-area').height() - 10;
    //   $('.menue nav ul').openPageNav({
    //     currentClass: 'active',
    //     scrollOffset: top_offset,
    //   });  
      
     //Video popup
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    
    //Slick Slider
    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-image-active'
      });

      $('.test-image-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots:false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,

        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });

      
      $('.brand-active').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
    

            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });


    // Google Maps
    function basicmap() {
      // Basic options for a simple Google Map
      // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      var mapOptions = {
          // How zoomed in you want the map to start at (always required)
          zoom: 11,
          scrollwheel: false,
          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng(24.098379,90.328712), // New York
          // This is where you would paste any style found on Snazzy Maps.
          styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            }
        ]
      };
      // Get the HTML DOM element that will contain your map 
      // We are using a div with id="map" seen below in the <body>
      var mapElement = document.getElementById('contact-map');

      // Create the Google Map using our element and options defined above
      var map = new google.maps.Map(mapElement, mapOptions);

      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(24.098379,90.328712),
          map: map,
          title: 'Cryptox'
      });
  }
  if ($('#contact-map').length != 0) {
      google.maps.event.addDomListener(window, 'load', basicmap);
  }
    

  });