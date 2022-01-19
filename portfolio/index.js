'use strict';
console.log("1.Вёрстка соответствует макету. Ширина экрана 768px +48\n2.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\n3.На ширине экрана 768рх и меньше реализовано адаптивное меню +22\nИтог: 85");

let hamb = document.querySelector('.hamburger');
let hambMenu = document.querySelector('.hamburger-menu');
let hambLinkTop = document.querySelector('.hamburger-item:nth-of-type(1)');
let hambLinkMiddle = document.querySelector('.hamburger-item:nth-of-type(2)');
let hambLinkBottom = document.querySelector('.hamburger-item:nth-of-type(3)');
let navLinks = document.querySelectorAll('.nav-link');

hamb.addEventListener("click", function() {
    hambLinkTop.classList.toggle('active');
    hambLinkMiddle.classList.toggle('active');
    hambLinkBottom.classList.toggle('active');
    hambMenu.classList.toggle('open');
});

navLinks.forEach( (elem) => elem.addEventListener('click', closeMenu) );

function closeMenu(event) {
    if( event.target.classList.contains('nav-link') ) {
        hambMenu.classList.remove('open');
        hambLinkTop.classList.remove('active');
        hambLinkMiddle.classList.remove('active');
        hambLinkBottom.classList.remove('active');
    }
}