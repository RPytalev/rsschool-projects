'use strict';
import i18Obj from './translate.js';

console.log("1.Смена изображений в секции portfolio +25\n2.Перевод страницы на два языка +25\n3.Переключение светлой и тёмной темы +25\n4.Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n5.Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\nИтог: 85");

const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.gallery-img');
const portfolioBtnsGroup = document.querySelector('.portfolio-btn-group');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
const text = document.querySelectorAll('[data-i18]');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
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

portfolioBtnsGroup.onclick = function(event) {
    let targetBtns = event.target;
    changeImage(targetBtns);
}

function changeImage(targetBtns) {
    if (targetBtns.dataset.season) {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${targetBtns.dataset.season}/${index + 1}.jpg`);
        changeClassActive(targetBtns);
    }
}

function changeClassActive(target) {
    console.log(target.dataset);
    if (target.dataset.season) {
        let selectedBtn = target.dataset.season;
        portfolioBtns.forEach(element => {
            if (element.dataset.season == selectedBtn) {
                element.classList.add('activeBtn')
            } else {
                element.classList.remove('activeBtn');
            }
        });
    } else {
        let selectedLang = target.dataset.lang;
        if (selectedLang == 'ru') {
            en.classList.remove('activeLink');
            ru.classList.toggle('activeLink');
        } else {
            ru.classList.remove('activeLink');
            en.classList.toggle('activeLink');
        }
    }
}

function preloadImages() {
    seasons.forEach(element => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${element}/${i}.jpg`;
        }
    });
}
preloadImages();

en.onclick = function(event) {
    let targetToggle = event.target;
    getTranslate(targetToggle);
}

ru.onclick = function(event) {
    let targetToggle = event.target;
    getTranslate(targetToggle);
}

function getTranslate(targetToggle) {
    let lang = targetToggle.dataset.lang;
    text.forEach(element => {
        if (lang == 'ru') {
            element.textContent = i18Obj.ru[element.dataset.i18];
        } else {
            element.textContent = i18Obj.en[element.dataset.i18];
        }
    });
    changeClassActive(targetToggle);
}