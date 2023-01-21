const burger = document.getElementById('burger');
const menu = document.getElementById('header_menu');

const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

var acc = document.getElementsByClassName("accordion");
var plus = document.getElementsByClassName("plus-minus");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.children[0].nextElementSibling.classList.toggle("toggle-plus");
    this.classList.toggle('text-base-red');

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    panel.classList.toggle('hidden')
  });
}
