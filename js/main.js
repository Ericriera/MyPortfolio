function close_nav() {
    openmenu = false;
    navMenu.style.left = '100%';
    navMenu.style.backgroundColor = 'transparent';
    navCross.classList.remove("cross_visible");
    navToggle.classList.add("toggle_visible");
    if(getPageScroll().top > 20 && darkmode) nav.style.backgroundColor = '#222';
    else if (getPageScroll().top > 20) nav.style.backgroundColor = '#fff';
    else nav.style.backgroundColor = 'transparent';
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
var en = true;

// Nav style
const nav = document.querySelector("nav");
const navMenu = document.querySelector(".menu");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
    if(getPageScroll().top > 20) {
        if(darkmode) nav.style.backgroundColor = "#222";
        else nav.style.backgroundColor = "white";
        navMenu.style.lineHeight = "70px";
        logo.style.padding = "0 2rem";
        document.getElementById("logo").src="img/logo_azul.png";
    }
    else {
        if(!openmenu) {
            nav.style.backgroundColor = "transparent";
            navMenu.style.backgroundColor = "transparent";
        }
        if(document.documentElement.clientWidth >= 540) {
            navMenu.style.lineHeight = "90px";
            logo.style.padding = "10px 2rem";
        }
        if(darkmode) document.getElementById("logo").src="img/logo_blanco.png";
        else document.getElementById("logo").src="img/logo_negro.png";
    }
})

// Nav menu for mobile
const navToggle = document.querySelector(".toggle");
const navCross = document.querySelector(".cross");
const projects = document.getElementById("nProjects");
const navAboutme = document.getElementById("nAboutme");

navToggle.addEventListener("click", () => {
    openmenu = true;
    navMenu.style.left = '0';
    if (darkmode) {
        nav.style.backgroundColor = "#222";
        navMenu.style.backgroundColor = "#222";
    }
    else {
        nav.style.backgroundColor = "white";
        navMenu.style.backgroundColor = "white";
    } 
    navCross.classList.add("cross_visible");
    navToggle.classList.remove("toggle_visible");
    
});

navAboutme.addEventListener("click", () => {
    close_nav();
});

projects.addEventListener("click", () => {
    close_nav();
});

navCross.addEventListener("click", () => {
    close_nav();
});

// Change Language
const lang = document.getElementById('lang');
const esab1 = 'Mi nombre es Eric Riera y actualmente estoy en el tercer año de la carrera de Ingenieria Informatica cursando la especialidad de ingenieria del software en FIB-UPC.';
const esab2 = 'Me describo como una persona que aprende rápido y con buena capacidad de solucionar problemas. Me gusta aprender cosas nuevas cada día y asumir nuevos retos.';
const esab3 = 'Cuando tengo tiempo libre, algunos de mis hobbies son jugar a baloncesto, ir al gimnasio, trabajar en proyectos personales, ver pelis o series y escuchar música. También me gusta viajar y pasar tiempo con mi familia y amigos.';
const enab1 = 'My name is Eric Riera and I am currently in my third year of Computer Engineering degree studying the software engineering majoring at FIB-UPC.';
const enab2 = 'I describe myself as a fast learner and a good problem solver. I like learning new things every day and taking on new challenges.';
const enab3 = 'When I have free time, some of my hobbies are playing basketball, going to the gym, working on personal projects, watching series or movies and listening to music. I also love to travel and spend time with my family and friends.';

lang.addEventListener("click", () => {
    if (en) {
        en = false;
        lang.innerHTML = 'EN';
        document.getElementById('overtitle').innerText = 'Hola 👋🏻, soy';
        subtitleEn.style.display = 'none';
        subtitleEs.style.display = 'inline';
        document.getElementById('nAboutme').innerText = 'Sobre mi';
        document.getElementById('nProjects').innerText = 'Proyectos';
        document.getElementById('tAboutme').innerText = 'Sobre mi';
        document.getElementById('txtAM1').innerText = esab1;
        document.getElementById('txtAM2').innerText = esab2;
        document.getElementById('txtAM3').innerText = esab3;
        document.getElementById('tSkills').innerText = 'Estas son algunas de mis habilidades';
        document.getElementById('tProjects').innerText = 'Proyectos';
        document.getElementById('tLinkPage').innerText = 'Mi Página de Links';
        document.getElementById('tPortfolio').innerText = 'Mi Portfolio';
        document.getElementById('tPROP').innerText = 'Gestor de Archivos';
        document.getElementById('fContactme').innerText = 'Contáctame';
        document.getElementById('fResume').innerText = 'CV';
        document.getElementById('fResume').href = 'CVEs.pdf';
        document.getElementById('love').innerText = 'Hecho con 💻 y ❤️ por Eric';
    } 
    else {
        en = true;
        lang.innerHTML = 'ES';
        document.getElementById('overtitle').innerText = "Hi 👋🏻, I'm";
        subtitleEs.style.display = 'none';
        subtitleEn.style.display = 'inline';
        document.getElementById('nAboutme').innerText = 'About me';
        document.getElementById('nProjects').innerText = 'Projects';
        document.getElementById('tAboutme').innerText = 'About me';
        document.getElementById('txtAM1').innerText = enab1;
        document.getElementById('txtAM2').innerText = enab2;
        document.getElementById('txtAM3').innerText = enab3;
        document.getElementById('tSkills').innerText = 'These are some of my skills';
        document.getElementById('tProjects').innerText = 'Projects';
        document.getElementById('tLinkPage').innerText = 'My Link Page';
        document.getElementById('tPortfolio').innerText = 'My Portfolio';
        document.getElementById('tPROP').innerText = 'File Manager';
        document.getElementById('fContactme').innerText = 'Contact me';
        document.getElementById('fResume').innerText = 'Resume';
        document.getElementById('fResume').href = 'CVEn.pdf';
        document.getElementById('love').innerText = 'Made with 💻 and ❤️ by Eric';
    } 
});

// Light or dark mode
const header = document.querySelector("header");
const body = document.querySelector("body");
const targeta = document.querySelectorAll(".targeta");
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const aboutme = document.querySelector(".txt");
const lmenu = document.querySelectorAll(".menu a");

sun.addEventListener("click", () => {
    darkmode = false;
    if (getPageScroll().top > 20) document.getElementById("logo").src="img/logo_azul.png";
    else document.getElementById("logo").src="img/logo_negro.png";
    header.classList.add("h");
    body.classList.add("body");
    lang.style.color = "black";
    navToggle.style.color = "black";
    navCross.style.color = "black";
    lmenu.forEach(element => {
        element.style.color = "black";
    });
    aboutme.classList.add("light");
    targeta.forEach(element => {
        element.classList.add("light");
    });
    backToTopButton.style.color = 'white';
    sun.style.display = "none";
    if(document.documentElement.clientWidth < 540) moon.style.display = "block";
    else moon.style.display = "inline";
    if(getPageScroll().top > 20 || openmenu) {
        nav.style.backgroundColor = "white";
        if(document.documentElement.clientWidth < 540) navMenu.style.backgroundColor = "white";
    }
});

moon.addEventListener("click", () => {
    darkmode = true;
    if (getPageScroll().top > 20) document.getElementById("logo").src="img/logo_azul.png";
    else document.getElementById("logo").src="img/logo_blanco.png";
    header.classList.remove("h");
    body.classList.remove("body");
    lang.style.color = "white";
    navToggle.style.color = "white";
    navCross.style.color = "white";
    lmenu.forEach(element => {
        element.style.color = "white";
    });
    aboutme.classList.remove("light");
    targeta.forEach(element => {
        element.classList.remove("light");
    });
    backToTopButton.style.color = 'black';
    if(document.documentElement.clientWidth < 540) sun.style.display = "block";
    else sun.style.display = "inline";
    moon.style.display = "none";
    if(getPageScroll().top > 20 || openmenu) {
        nav.style.backgroundColor = "#222";
        if(document.documentElement.clientWidth < 540) navMenu.style.backgroundColor = "#222";
    }
});

// Display actualization for resize
window.addEventListener("resize", () => {
    close_nav();
    if(document.documentElement.clientWidth < 540 || getPageScroll.top > 20) {
        navToggle.classList.add("toggle_visible");
        navMenu.style.lineHeight = "70px";
        logo.style.padding = "0px 2rem";
        if(sun.style.display == "inline") sun.style.display = "block";
        if(moon.style.display == "inline") moon.style.display = "block";
    }
    else {
        navMenu.style.lineHeight = "90px";
        navMenu.style.backgroundColor = "transparent";
        logo.style.padding = "10px 2rem";
        if(sun.style.display == "block") sun.style.display = "inline";
        if(moon.style.display == "block") moon.style.display = "inline";
    }   
});

//TypeWritter subtitle
var texten = 'Computer Engineering student at FIB-UPC';
var textes = 'Estudiante de Ingeniería Informatica en FIB-UPC';
var subtitleEn = document.getElementById('subtitleEn');
var subtitleEs = document.getElementById('subtitleEs');

var typewriterEn = new Typewriter(subtitleEn, {
    loop: true,
    delay: 75,
    deleteSpeed: 20,
    cursor: '<span style="color: cornflowerblue;">|</span>' 
});

typewriterEn
        .pauseFor(1000)
        .typeString(texten)
        .pauseFor(2000)
        .deleteChars(texten.length)
        .start();

var typewriterEs = new Typewriter(subtitleEs, {
    loop: true,
    delay: 75,
    deleteSpeed: 20,
    cursor: '<span style="color: cornflowerblue;">|</span>' 
});

typewriterEs
        .pauseFor(1000)
        .typeString(textes)
        .pauseFor(2000)
        .deleteChars(textes.length)
        .start();

// Back to top button
const backToTopButton = document.querySelector(".back-to-top");
const footer = document.querySelector("footer");

window.addEventListener("scroll", () => {
  if (getPageScroll().top > 100) backToTopButton.classList.remove("hidden");
  else backToTopButton.classList.add("hidden");
});

backToTopButton.addEventListener("click", () => {
    document.body.scrollIntoView();
});

window.addEventListener('scroll', function()  {
    let elements = document.getElementsByClassName('scroll-content');
    let screenSize = window.innerHeight;
    
      for(var i = 0; i < elements.length; i++) {
        let element = elements[i];
  
        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      }
  });