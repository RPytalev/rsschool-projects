'use strict';
console.log("1. Вёрстка соответствует макету. Ширина экрана 768px +48:\nблок <header> +6\nсекция hero +6\nсекция skills +6\nсекция portfolio +6\nсекция video +6\nсекция price +6\nсекция contacts +6\nблок <footer> +6\n2. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки\nнет полосы прокрутки при ширине страницы от 1440рх до 768рх +5\nнет полосы прокрутки при ширине страницы от 768рх до 480рх +5\nнет полосы прокрутки при ширине страницы от 480рх до 320рх +5\n3. На ширине экрана 768рх и меньше реализовано адаптивное меню\nпри ширине страницы 768рх панель навигации скрывается, появляется бургер-иконка +2\nпри нажатии на бургер-иконку справа плавно появляется адаптивное меню, бургер-иконка изменяется на крестик +4\nвысота адаптивного меню занимает всю высоту экрана. При ширине экрана 768-620рх вёрстка меню соответствует макету, когда экран становится уже, меню занимает всю ширину экрана +4\nпри нажатии на крестик адаптивное меню плавно скрывается уезжая за правую часть экрана, крестик превращается в бургер-иконку +4\nбургер-иконка, которая при клике превращается в крестик, создана при помощи css-анимаций без использования изображений +2\nссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям +2\nпри клике по ссылке в адаптивном меню адаптивное меню плавно скрывается, крестик превращается в бургер-иконку +4\n Итог: 85 баллов");

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