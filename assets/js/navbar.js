//menu toggle responsive
$(document).ready(function() {
  $('.menu-icon').on('click', function () {
    $('nav ul').toggleClass('showing');
  });
});
//effet de scroll navbar
$(window).on('scroll', function() {
  if($(window).scrollTop()) {
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
});
