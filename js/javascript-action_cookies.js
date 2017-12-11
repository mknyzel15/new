// menu menu

$(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $("#header, #parent_1, nav a, .nome, .logo_fg_menu").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#header, #parent_1, nav a, .nome, .logo_fg_menu").removeClass("active");
    }
});


// menu open/close toggle
$(document).ready(function() {
		
//responsive menu

	$('.menu-toggle').click(function() {
			$(this).toggleClass("on");
    	if( $('nav').hasClass('active-nav') ) {
	      $('.mobile-nav-container').toggleClass('active-nav');
	      $('.menu-toggle').toggleClass('active-nav');
	      $('nav').toggleClass('active-nav');
    		$('nav li').removeClass('show-nav');

	      // Remove Page Crop
	      setTimeout(function(){
        $('.page-wrap').removeClass('crop'); // release the "proper" crop
        $('.page-wrap').height('auto'); // resets height for scolling
      	}, 100);

    	} else {
    		$('.page-wrap').addClass('crop'); // "proper" crop
	      $('.menu-toggle').toggleClass('active-nav');
	      $('.mobile-nav-container').toggleClass('active-nav');
	      $('nav').toggleClass('active-nav');
	      
        
	      // Show me the links
	      var timer = 0;
	      $.each($('nav li'), function (i, s) {
	        timer = 25 * i;
	        setTimeout(function () {
	          $(s).addClass('show-nav');
	        }, timer); // show menu items on timer
	      });
      	
	    }
		
		//close menu from item 'nav li a' and background
		$('nav li a, .mobile-nav-container').on('click', function(){
		$(".menu-toggle").click();
        $("nav li a, .mobile-nav-container").removeClass("active-nav");
		});
	});

  });
  
  
// Scroll up button

$(document).ready(function() {
  $(".scrollup").click(function() {
    $('html, body').animate({
      scrollTop: $('#start').offset().top + 1
    },500);
	return false; 
  });
});