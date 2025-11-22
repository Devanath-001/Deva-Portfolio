var typed = new Typed(".text", {
    strings: ["Python Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

});


/* ⭐ Navigation Toggle కోసం కొత్త JS కోడ్ ⭐ */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // క్లిక్ చేసినప్పుడు menu icon 'x' గా మారుతుంది
    navbar.classList.toggle('active');  // navbar కు 'active' class జోడించబడుతుంది
};