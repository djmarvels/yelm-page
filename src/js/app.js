import '../sass/app.sass';
import 'bootstrap/dist/js/bootstrap.min';

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