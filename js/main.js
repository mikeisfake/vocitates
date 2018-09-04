//animations

var effectsModal = 'animated flipInX';
var effectsWrap = 'wow bounceInUp'

$(".modal").addClass(effectsModal);

$("#welcome , #inspolinks h2 , #inspolinks li" , "themename , #home").addClass('animated');


$('#inspo , .inspo , .textblock , #themes , #ask , #ask_form , #blogcontain').addClass(effectsWrap);


//smooth scrolling from w3schools

$("a").click(function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function() {
      window.location.hash = hash;
    });
  }
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

//scroll to top & home button

var duration = 250;
$(window).scroll(function() {
  if ($(this).scrollTop() > 800) {
    $('#top , #home').fadeIn(duration);
  } else {
    $('#top , #home').fadeOut(duration);
  }
});

$('#top').click(function(event) {
  event.preventDefault();
  $('html').animate({
    scrollTop: 0
  }, duration);
  return false;
})

//unnest captions

$(function() {
  $('.post').unnest({
    yourCaption: ".caption",
    wrapName: ".reblog",
    newCaptionUsername: false,
    originalPostCaptionUsername: false,
    tumblrAvatars: true,
    tumblrAvatarClass: ".avatar",
    usernameColon: false
  });
});


//pxu photoset

$(document).ready(function() {
  $('.photo-slideshow').pxuPhotoset({
    lightbox: true,
    rounded: false,
    gutter: '1px',
    borderRadius: '0px',
    photoset: '.photo-slideshow',
    photoWrap: '.photo-data',
    photo: '.pxu-photo'
  });
});
