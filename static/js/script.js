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
  $('.header').toggleClass('header-toggle-active');
});

// hide navbar on large screen
$(window).on('resize', function () {
  let win = $(this);
  if (win.width() >= 515) {
    $('.header').removeClass('header-toggle-active');
  }
});

// On scroll event
// > hides navbar
// > changes styles of header
// > runs scrollSpy function
$(window).scroll(function () {
  $('.header').removeClass('header-toggle-active');
  if ($(this).scrollTop() > 80) {
    $('.header').addClass('header-scroll-active');
    $('.mouse-scroll').fadeOut();
  } else {
    $('.header').removeClass('header-scroll-active');
    $('.mouse-scroll').fadeIn();
  }

  scrollSpy();
});

// automatically updates navigation component based
// on scroll position to indicate which link is currently
// active in the viewport.
function scrollSpy() {
  let current = '';

  $('.section').each((i) => {
    let section = $('.section')[i];
    const sectionTop = section.offsetTop;
    if ($(this).scrollTop() >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  $('.nav-item').each((i) => {
    let li = $('.nav-item')[i];
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
}

// navigate to section when link is clicked
$('.nav-item').click((e) => {
  let li = e.currentTarget;
  let liClassList = Array.from(li.classList);

  $('section').each((i) => {
    let section = $('section')[i];
    const sectionTop = section.offsetTop;
    if (liClassList.includes(section.getAttribute('id'))) {
      window.scrollTo(0, sectionTop - 50);
    }
  });
});
