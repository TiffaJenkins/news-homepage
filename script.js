//------Nav Toggle------

//capture classes in variables
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('mobile-nav')[0];
let menuOpen = false;

//Toggle event listener
toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')

    if (!menuOpen) {
        toggleButton.classList.add('open');
        menuOpen = true;
    } else {
        toggleButton.classList.remove('open');
        menuOpen = false;
    }
});