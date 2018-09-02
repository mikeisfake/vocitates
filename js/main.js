
//animations

//store classes as variables
var effectsLink = 'animated jello';
var effectsCard = 'animated pulse';
var effectsModal = 'animated flipInX'
//allow animations to play more than once after animation end
var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

$("#navlinks li").hover(function() {
  $(this).addClass(effectsLink).one(effectsEnd, function() {
    //remove class after animation plays once to allow it to play again
    $(this).removeClass(effectsLink);
  });
});

$(".themecard").hover(function() {
  $(this).addClass(effectsCard).one(effectsEnd, function() {
    //remove class after animation plays once to allow it to play again
    $(this).removeClass(effectsCard);
  });
});


  $(".modal").addClass(effectsModal);

  $("#inspolinks h2 , #inspolinks li").addClass('animated')

  $('#inspolinks li').addClass("shadow");


  //smooth scrolling

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  //modals

  $('a.open-modal').click(function(event) {
       $(this).modal({
         fadeDuration: 150,
         fadeDelay: 0,
         showClose: false,
       });
       return false;
     });

  //sticky scrollTop
  var stickyTop = $('#navlinks').offset().top;

  $(window).scroll(function() {
    var windowTop = $(window).scrollTop();

    if (stickyTop < windowTop) {
      $('#navlinks').css('position', 'fixed').addClass('shadow');
    } else {
      $('#navlinks').css('position', 'relative').removeClass('shadow');
    }
  });

  //scroll to top

  var duration = 500;
		$(window).scroll(function() {
			if ($(this).scrollTop() > 800) {
				$('#top').fadeIn(duration);
			} else {
				$('#top').fadeOut(duration);
			}
		});

		$('#top').click(function(event) {
			event.preventDefault();
			jQuery('html').animate({scrollTop: 0}, duration);
			return false;
		})
