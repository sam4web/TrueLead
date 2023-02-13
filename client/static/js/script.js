// prealoader
$(document).ready(() => {
  $('#preloader').fadeOut();
});

// back to top
$('.back-to-top').click(() => {
  window.scrollTo(0, 0);
});

// set theme in localStorage and in document className
const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

// function to toggle between light and dark theme
const toggleTheme = () => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
};

// Immediately invoked function to set the theme on initial load
(() => {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();

$('.toggle-btn').click(() => {
  toggleTheme();
});
