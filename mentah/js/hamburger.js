
const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar-ul');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden');
});