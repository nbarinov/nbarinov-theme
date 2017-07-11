var mainNav = document.querySelector('.main-nav'),
    navToggle = document.querySelector('.main-nav__toggle');

if(window.innerWidth >= 1200)
  mainNav.classList.remove('main-nav--closed');

window.addEventListener('resize', function() {
  if(window.innerWidth >= 1200)
    mainNav.classList.remove('main-nav--closed');
  else
    mainNav.classList.add('main-nav--closed');
});

navToggle.addEventListener('click', function() {
  if(mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  }
});
