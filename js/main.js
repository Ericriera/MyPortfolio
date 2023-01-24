const navToggle = document.querySelector("#toggle");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible")
});

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible")
});