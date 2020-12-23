function hamburgerPressed() {
  document.body.getElementsByClassName("navbar-btn")[0].classList.toggle('navbar-open');
  document.body.getElementsByClassName("navbar-mobile")[0].classList.toggle('navbar-panel-open');
  document.body.getElementsByClassName("navbar-link")[3].classList.toggle('navbar-link-open');
  document.body.getElementsByClassName("navbar-link")[4].classList.toggle('navbar-link-open');
  document.body.getElementsByClassName("navbar-link")[5].classList.toggle('navbar-link-open');
}