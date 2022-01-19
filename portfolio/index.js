'use strict';
console.log("1.Смена изображений в секции portfolio +25\n2.Перевод страницы на два языка +25\n3.Переключение светлой и тёмной темы +25\n4.Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n5.Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\nИтог: 85");

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