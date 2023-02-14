// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
});

// back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});

// toggle navbar
$('.nav-toggle').click(() => {
  $('header').toggleClass('header-toggle-active');
});

// hide navbar on large screen
$(window).on('resize', function () {
  let win = $(this);
  if (win.width() >= 515) {
    $('header').removeClass('header-toggle-active');
  }
});

// hides navbar on scroll event
// changes styles of header on scroll event
$(window).scroll(function () {
  $('header').removeClass('header-toggle-active');
  if ($(this).scrollTop() > 80) {
    $('header').addClass('header-scroll-active');
  } else {
    $('header').removeClass('header-scroll-active');
  }
});
