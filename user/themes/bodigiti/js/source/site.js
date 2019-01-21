
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Contact Form: Submit to database to send on to email address
//
//

// Form Listener Function called 1) on page load and 2) again after AJAX Success
function listenForm(formID, submitFormFunction) {
  var formID = document.querySelector(formID);
  if(formID.addEventListener){
    formID.addEventListener("submit", submitFormFunction, false);  //Modern browsers
  }
}

// Success Message Function (called after AJAX Success)
function successMessage(jsClass) {
  let elementSuccess = document.querySelectorAll(jsClass);
  $(elementSuccess).show(0).delay(5000).hide(0);
}

// Submit Contact Form via AJAX
// https://us-central1-earring-happiness.cloudfunctions.net/contactFormSubmit
// http://localhost:5001/earring-happiness/us-central1/contactFormSubmit

function submitFormContact(formContact){
  formContact.preventDefault();
  $.ajax({
    url:'https://us-central1-jaxlicious-prod.cloudfunctions.net/contactFormSubmit',
    type:'post',
    data:$('#contact').serialize(),
    success:function(data){
    // Show/Hide success message via function call
    successMessage(".js-success.contact");
    // Clear inputs and textarea of content
    $("#contact .form-item, #contact .form-textarea").val("");
    }
  });
}

// Contact Form: Function Call
// first parameter selects form to listen to, second parameter is function to attach to form
listenForm('#contact', submitFormContact);

//
//
// END: Contact Form: Submit to database to send on to email address
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Google reCaptcha
////////////////////////////////////////////////////////////////////////////////
function onSubmit(token) {
  document.getElementById("contact").submit();
}


////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////

jQuery(function($) {
    $('body').removeClass('no-js');
	
	////////////////////////////////////////////////////////////////////////////////
	// Smooth, Slow Scroll Anchors
	////////////////////////////////////////////////////////////////////////////////
	//Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_smooth_scroll_jquery
	$(document).ready(function(){
		// Add smooth scrolling to all links
		$("a").on('click', function(event) {

			// Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				// Prevent default anchor click behavior
				event.preventDefault();

				// Then, store hash in this variable
				var hash = this.hash;

				// Using jQuery's animate() method to add smooth page scroll
				// The optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 2000, function(){
		
					// Add hash (#) to URL when done scrolling (default click behavior)
					window.location.hash = hash;
				});
			} // End of "if" statement
		});
	});

   /////////////////////////////////////////////////////////////////////////////
   // Capitalize first letter only in sentence (string) used in taxonomy categories
   /////////////////////////////////////////////////////////////////////////////

    $('.tags-item').text(function(_, txt) {
      return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });


   /*
   /////////////////////////////////////////////////////////////////////////////
   // Mobile menu drawer
   /////////////////////////////////////////////////////////////////////////////

    $('.js-toggle-menu').on('click', function(e) {
        e.preventDefault();
        if(jQuery(this).hasClass('is-active')) {
            jQuery('body').removeClass('overlay-is-active');
            jQuery('.js-toggle-menu, .overlay, .drawer').removeClass('is-active');
        } else {
            jQuery('body').addClass('overlay-is-active');
            jQuery('.js-toggle-menu, .overlay, .drawer').addClass('is-active');
        }
    });

    $('.mobile-nav a > span').on('click', function(e) {
        e.preventDefault();
        if(jQuery(this).parents('li').hasClass('is-active')) {
            jQuery(this).parents('ul').find('li').removeClass('is-active');
        } else {
            jQuery(this).parents('ul').find('li').removeClass('is-active');
            jQuery(this).parents('li').addClass('is-active');
        }
    });

    $('.mobile-nav a').on('click', function(e) {
        if(e.toElement !== this) {
            return;
		}
        if(jQuery(this).is('[href*="#"]') && jQuery(this).parents('li').hasClass('current-menu-parent')) {
            jQuery('body').removeClass('overlay-is-active');
            jQuery('.js-toggle-menu, .overlay, .drawer').removeClass('is-active');
        }
    });

   /////////////////////////////////////////////////////////////////////////////
   // Mobile Menu auto shut
   /////////////////////////////////////////////////////////////////////////////

    $(window).resize(function() {
        if(jQuery(window).width() > 960) {
            jQuery('.overlay, .drawer, .js-toggle-menu').removeClass('is-active');
            jQuery('body').removeClass('overlay-is-active');
        }
    }).resize();

  

   /////////////////////////////////////////////////////////////////////////////
   // Capitalize first letter only in sentence (string) used in taxonomy categories
   /////////////////////////////////////////////////////////////////////////////

    $('.tags-item').text(function(_, txt) {
      return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase();
    });
    //
    //
    // END Mobile Menu
    //////////////////////////////////////////////////////////////////////////// 
   */

   /////////////////////////////////////////////////////////////////////////////
   // Lightslider
   /////////////////////////////////////////////////////////////////////////////
   /* Disabled Lightslider
    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        speed: 600,
        loop: true,
        slideMargin: 0,
        thumbItem: 8, // Width of thumbnails calculated by this setting
        galleryMargin: 0,
        thumbMargin: 2,
        enableTouch: true, // zoom ... set as false when using zoom
        freeMove: false, // not sure what freeMove is but disabled since slider fine without
        enableDrag: true // Desktop mouse support, set to false when zoom enabled
    });
    */

   /////////////////////////////////////////////////////////////////////////////
   // Isotope
   /////////////////////////////////////////////////////////////////////////////

   // external js: isotope.pkgd.js, imagesloaded.pkgd.js
   /* Disable Isotope
    // init Isotope (only IF .grid.isotope exists, otherwise get js errors in
    // console even though nothing is broken visually )
    if ( $(".grid-isotope").length ) {
      var grid = document.querySelector('.grid-isotope');

      var iso = new Isotope( grid, {
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-sizer'
        }
      });

      // images loaded
      imagesLoaded( grid ).on( 'progress', function() {
        // layout Isotope after each image loads
        iso.layout();
      });
    }
  */
});
