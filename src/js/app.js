import '../sass/app.sass';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'owl.carousel';

window.navbar_active = false;
document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', () => {
  // eslint-disable-next-line no-console
  if (window.navbar_active) {
    document.getElementsByClassName('navbar-menu')[0].classList.remove('navbar-menu--open');
    document.getElementsByClassName('navbar-toggler')[0].classList.remove('navbar-toggler--active');
    document.getElementsByClassName('navbar')[0].classList.remove('navbar--mobile');
    document.body.classList.remove('hidden');
    window.navbar_active = false;
  } else {
    document.getElementsByClassName('navbar-menu')[0].classList.add('navbar-menu--open');
    document.getElementsByClassName('navbar-toggler')[0].classList.add('navbar-toggler--active');
    document.getElementsByClassName('navbar')[0].classList.add('navbar--mobile');
    document.body.classList.add('hidden');
    window.navbar_active = true;
  }
});

$(document).ready(() => {
  $('.cases-carousel').owlCarousel({
    margin: 20,
    items: 1,
    // autoWidth: true,
    nav: true,
    dots: false,
    animateIn: 'animate__zoomInLeft',
    animateOut: 'animate__zoomOutRight',
    touchDrag: false,
    mouseDrag: false,
    navText: [
      '<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n'
      + '<path d="M20.9995 8.99194L0.999512 8.99194" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n'
      + '<path d="M7.99951 15.9919L0.999512 8.99194L7.99951 1.99194" stroke="#BDBDBD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      '<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n'
      + '<path d="M0.999512 8.99194L20.9995 8.99194" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n'
      + '<path d="M13.9995 1.99194L20.9995 8.99194L13.9995 15.9919" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
  });
});
