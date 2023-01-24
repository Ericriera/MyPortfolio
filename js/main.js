const navToggle = document.querySelector(".toggle");
const navCross = document.querySelector(".cross");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
    navCross.classList.toggle("cross_visible");
    navToggle.classList.toggle("toggle_visible");
});

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
    navCross.classList.toggle("cross_visible");
    navToggle.classList.toggle("toggle_visible");
});

navCross.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
    navCross.classList.toggle("cross_visible");
    navToggle.classList.toggle("toggle_visible");
});