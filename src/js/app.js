import '../sass/app.sass';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'owl.carousel';

const getPriceByMonth = (month) => {
  const PriceTypes = { base: 4990, pro: 12500 };
  // eslint-disable-next-line no-nested-ternary
  const powPercents = month === 3 ? 0.0 : month === 6 ? 0.4 : month === 12 ? 0.6 : 0.0;
  PriceTypes.base = roundedNumberToNumber(Math.round(((PriceTypes.base - (PriceTypes.base * powPercents)) * month) / month), 10).toLocaleString('ru-RU', { currency: 'RUB' });
  PriceTypes.pro = roundedNumberToNumber(Math.round(((PriceTypes.pro - (PriceTypes.pro * powPercents)) * month) / month), 10).toLocaleString('ru-RU', { currency: 'RUB' });
  return PriceTypes;
};

function roundedNumberToNumber (value, number) {
  // eslint-disable-next-line no-mixed-operators
  return value % number ? value + number - value % number : value;
}

window.navbar_active = false;
document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', () => {
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

// eslint-disable-next-line no-unused-vars
const generateMonth = () => {
  $('[data-month]').each((index, element) => {
    // eslint-disable-next-line radix
    const month = parseInt($(element).attr('data-month'));
    if (month !== window.select_month) {
      $(element).removeClass('active');
    } else {
      $(element).addClass('active');
    }
    const prices = getPriceByMonth(window.select_month);
    $('[plans-price="base"]').text(prices.base);
    $('[plans-price="pro"]').text(prices.pro);
  });
};

$('body').on('click', '[data-month]', (event) => {
  // eslint-disable-next-line radix
  if (event.target.tagName === 'BUTTON') {
    // eslint-disable-next-line radix
    window.select_month = parseInt($(event.target).attr('data-month'));
    generateMonth();
  }
});

$(document).ready(() => {
  window.select_month = 3;
  generateMonth();
  $('.cases-carousel').owlCarousel({
    margin: 20,
    nav: true,
    // autoWidth: true,
    items: 1,
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
  // eslint-disable-next-line camelcase
  const integrations_carousel_config = {
    nav: false,
    dots: false,
    margin: 0,
    items: 5,
    autoWidth: true,
    loop: true,
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 10000,
    autoplaySpeed: 10000,
    smartSpeed: 10000,
    slideTransition: 'linear',
  };
  $('.integrations-carousel#first').owlCarousel(integrations_carousel_config);
  integrations_carousel_config.rtl = true;
  $('.integrations-carousel#second').owlCarousel(integrations_carousel_config);
  delete integrations_carousel_config.rtl;
  $('.integrations-carousel#third').owlCarousel(integrations_carousel_config);
});
