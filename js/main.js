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

const lang = document.getElementById('lang');

lang.addEventListener("click", () => {
    if (lang.innerText == 'ES') {
        lang.innerHTML = 'EN';
        document.getElementById('subtitle').innerText = 'Estudiante de Ingeniería Informatica en FIB-UPC';
        document.getElementById('nProyects').innerText = 'Proyectos';
        document.getElementById('nAboutme').innerText = 'Sobre mi';
        document.getElementById('tProyects').innerText = 'Proyectos';
        document.getElementById('tPortfolio').innerText = 'Mi Portfolio';
        document.getElementById('tPROP').innerText = 'Gestor de Archivos';
        document.getElementById('tAboutme').innerText = 'Sobre mi';
        document.getElementById('fBTT').innerText = 'Volver Arriba ↑';
        document.getElementById('fContactme').innerText = 'Contáctame';
        document.getElementById('fResume').innerText = 'CV';
        document.getElementById('love').innerText = 'Hecho con ♡ por Eric';
    } 
    else {
        lang.innerHTML = 'ES';
        document.getElementById('subtitle').innerText = 'Software Engineering student at FIB-UPC';
        document.getElementById('nProyects').innerText = 'Proyects';
        document.getElementById('nAboutme').innerText = 'About me';
        document.getElementById('tProyects').innerText = 'Proyects';
        document.getElementById('tPortfolio').innerText = 'My Portfolio';
        document.getElementById('tPROP').innerText = 'File Manager';
        document.getElementById('tAboutme').innerText = 'About me';
        document.getElementById('fBTT').innerText = 'Back to top ↑';
        document.getElementById('fContactme').innerText = 'Contact me';
        document.getElementById('fResume').innerText = 'Resume';
        document.getElementById('love').innerText = 'Made with ♡ by Eric';
    } 
});