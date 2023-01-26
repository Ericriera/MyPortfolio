// Nav menu for mobile
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

// Change Language
const lang = document.getElementById('lang');

lang.addEventListener("click", () => {
    if (lang.innerText == 'ES') {
        lang.innerHTML = 'EN';
        document.getElementById('subtitle').innerText = 'Estudiante de Ingeniería Informatica en FIB-UPC';
        document.getElementById('nProjects').innerText = 'Proyectos';
        document.getElementById('nAboutme').innerText = 'Sobre mi';
        document.getElementById('tProjects').innerText = 'Proyectos';
        document.getElementById('tPortfolio').innerText = 'Mi Portfolio';
        document.getElementById('tPROP').innerText = 'Gestor de Archivos';
        document.getElementById('tAboutme').innerText = 'Sobre mi';
        document.getElementById('fBTT').innerText = 'Volver Arriba ↑';
        document.getElementById('fContactme').innerText = 'Contáctame';
        document.getElementById('fResume').innerText = 'CV';
        document.getElementById('love').innerText = 'Hecho con 💻 y ❤️ por Eric';
    } 
    else {
        lang.innerHTML = 'ES';
        document.getElementById('subtitle').innerText = 'Computer Engineering student at FIB-UPC';
        document.getElementById('nProjects').innerText = 'Projects';
        document.getElementById('nAboutme').innerText = 'About me';
        document.getElementById('tProjects').innerText = 'Projects';
        document.getElementById('tPortfolio').innerText = 'My Portfolio';
        document.getElementById('tPROP').innerText = 'File Manager';
        document.getElementById('tAboutme').innerText = 'About me';
        document.getElementById('fBTT').innerText = 'Back to top ↑';
        document.getElementById('fContactme').innerText = 'Contact me';
        document.getElementById('fResume').innerText = 'Resume';
        document.getElementById('love').innerText = 'Made with 💻 and ❤️ by Eric';
    } 
});

// Light or dark mode
const body = document.querySelector("body");
const targeta = document.querySelectorAll(".targeta");
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');

sun.addEventListener("click", () => {
    body.classList.add("body");
    targeta.forEach(element => {
        element.classList.remove("targetanight");
    });
    sun.style.display = "none";
    if(document.documentElement.clientWidth < 510) moon.style.display = "block";
    else moon.style.display = "inline";
});

moon.addEventListener("click", () => {
    body.classList.remove("body");
    targeta.forEach(element => {
        element.classList.add("targetanight");
    });
    if(document.documentElement.clientWidth < 510) sun.style.display = "block";
    else sun.style.display = "inline";
    moon.style.display = "none";
});

// Sun & moon display actualization for resize
if(document.documentElement.clientWidth < 510 && sun.style.display == "inline") sun.style.display = "block";
else if(document.documentElement.clientWidth >= 510 && sun.style.display == "block") sun.style.display = "inline";

if(document.documentElement.clientWidth < 510 && moon.style.display == "inline") moon.style.display = "block";
else if(document.documentElement.clientWidth >= 510 && monn.style.display == "block") moon.style.display = "inline";