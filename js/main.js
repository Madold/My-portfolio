let navLinks = document.getElementsByClassName("nav__links")[0];
let menuHamburger = document.getElementsByClassName("nav_hamMenu")[0];

// const toggleMenu = () => {
//     navLinks.classList.toggle(".nav__links--translateX");
//     
// }

// window.addEventListener("click", function () {
//     toggleMenu();
// });

menuHamburger.addEventListener("click",  function() {
    navLinks.classList.toggle("nav__links--translateX");
    navLinks.style.transition = "transform 0.5s ease-in-out";
});