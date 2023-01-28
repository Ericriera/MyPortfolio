function close_nav() {
    openmenu = false;
    navMenu.classList.remove("menu_visible");
    navCross.classList.remove("cross_visible");
    navToggle.classList.add("toggle_visible");
    if(getPageScroll().top > 20 && darkmode) nav.style.background = "#222";
    else if (getPageScroll().top > 20) nav.style.background = "#364552";
    else nav.style.background = "transparent";
}

function getPageScroll() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return {top: yScroll, left: xScroll}
}

var darkmode = true;
var openmenu = false;

// Nav style
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".menu");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    if(getPageScroll().top > 20) {
        if(darkmode) nav.style.background = "#222";
        else nav.style.background = "#364552";
        navMenu.style.lineHeight = "70px";
        logo.style.padding = "0 2rem";
    }
    else {
        if(!openmenu)nav.style.background = "none";
        navMenu.style.lineHeight = "90px";
        if(document.documentElement.clientWidth >= 510) logo.style.padding = "10px 2rem";
    }
})

// Nav menu for mobile
const navToggle = document.querySelector(".toggle");
const navCross = document.querySelector(".cross");
const projects = document.getElementById("nProjects");
const aboutme = document.getElementById("nAboutme");

navToggle.addEventListener("click", () => {
    openmenu = true;
    navMenu.classList.add("menu_visible");
    navCross.classList.add("cross_visible");
    navToggle.classList.remove("toggle_visible"); 
    if (darkmode) nav.style.background = "#222";
    else nav.style.background = "#364552";
});

projects.addEventListener("click", () => {
    close_nav();
});

aboutme.addEventListener("click", () => {
    close_nav();
});

navCross.addEventListener("click", () => {
    close_nav();
});

// Change Language
const lang = document.getElementById('lang');
const esab = 'Mi nombre es Eric Riera y actualmente estoy en el tercer año de la carrera de Ingenieria Informatica cursando la especialidad de ingenieria del software en FIB-UPC.';
const enab = 'My name is Eric Riera and I am currently in my third year of Computer Engineering degree in software engineering at FIB-UPC.';

lang.addEventListener("click", () => {
    if (lang.innerText == 'ES') {
        lang.innerHTML = 'EN';
        document.getElementById('overtitle').innerText = 'Hola 👋🏻, soy';
        i = 0;
        document.getElementById("subtitle").innerHTML = '';
        text = 'Estudiante de Ingeniería Informatica en FIB-UPC';
        document.getElementById('nProjects').innerText = 'Proyectos';
        document.getElementById('nAboutme').innerText = 'Sobre mi';
        document.getElementById('tProjects').innerText = 'Proyectos';
        document.getElementById('tPortfolio').innerText = 'Mi Portfolio';
        document.getElementById('tPROP').innerText = 'Gestor de Archivos';
        document.getElementById('tAboutme').innerText = 'Sobre mi';
        document.getElementById('txtAM').innerText = esab;
        document.getElementById('fBTT').innerText = 'Volver Arriba ↑';
        document.getElementById('fContactme').innerText = 'Contáctame';
        document.getElementById('fResume').innerText = 'CV';
        document.getElementById('love').innerText = 'Hecho con 💻 y ❤️ por Eric';
    } 
    else {
        lang.innerHTML = 'ES';
        document.getElementById('overtitle').innerText = "Hi 👋🏻, I'm";
        i = 0;
        document.getElementById("subtitle").innerHTML = '';
        text = 'Computer Engineering student at FIB-UPC';
        document.getElementById('nProjects').innerText = 'Projects';
        document.getElementById('nAboutme').innerText = 'About me';
        document.getElementById('tProjects').innerText = 'Projects';
        document.getElementById('tPortfolio').innerText = 'My Portfolio';
        document.getElementById('tPROP').innerText = 'File Manager';
        document.getElementById('tAboutme').innerText = 'About me';
        document.getElementById('txtAM').innerText = enab;
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
    darkmode = false;
    //close_nav();
    body.classList.add("body");
    targeta.forEach(element => {
        element.classList.remove("darktargeta");
    });
    sun.style.display = "none";
    if(document.documentElement.clientWidth < 510) moon.style.display = "block";
    else moon.style.display = "inline";
    nav.style.background = "#364552";
    navMenu.style.background = "#364552";
});

moon.addEventListener("click", () => {
    darkmode = true;
    //close_nav();
    body.classList.remove("body");
    targeta.forEach(element => {
        element.classList.add("darktargeta");
    });
    if(getPageScroll().top > 20) nav.style.background = "#222";
    if(document.documentElement.clientWidth < 510) sun.style.display = "block";
    else sun.style.display = "inline";
    moon.style.display = "none";
    nav.style.background = "#222";
    navMenu.style.background = "#222";
});

// Sun & moon display actualization for resize
window.addEventListener("resize", () => {
    close_nav();
    if(document.documentElement.clientWidth < 510 && sun.style.display == "inline") sun.style.display = "block";
    else if(document.documentElement.clientWidth >= 510 && sun.style.display == "block") sun.style.display = "inline";
    
    if(document.documentElement.clientWidth < 510 && moon.style.display == "inline") moon.style.display = "block";
    else if(document.documentElement.clientWidth >= 510 && moon.style.display == "block") moon.style.display = "inline";
});

var i = 0;
var text = 'Computer Engineering student at FIB-UPC';
var velocidad = 300;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("subtitle").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, velocidad);
  }
}

window.addEventListener("mouseover", typeWriter)