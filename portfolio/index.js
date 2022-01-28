'use strict';
import i18Obj from './translate.js';

console.log("1.Смена изображений в секции portfolio +25\n2.Перевод страницы на два языка +25\n3.Переключение светлой и тёмной темы +25\n4.Дополнительный функционал: выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\n5.Дополнительный функционал: сложные эффекты для кнопок при наведении и/или клике +5\nИтог: 85");

const portfolioBtns = document.querySelectorAll('.portfolio-btn');
const portfolioImages = document.querySelectorAll('.gallery-img');
const portfolioBtnsGroup = document.querySelector('.portfolio-btn-group');
const ru = document.querySelector('.ru');
const en = document.querySelector('.en');
const text = document.querySelectorAll('[data-i18]');
const iconSun = document.querySelector('.sun');
const iconMoon = document.querySelector('.moon');
const seasons = ['winter', 'spring', 'summer', 'autumn'];
const hamb = document.querySelector('.hamburger');
const hambMenu = document.querySelector('.hamburger-menu');
const hambLinkTop = document.querySelector('.hamburger-item:nth-of-type(1)');
const hambLinkMiddle = document.querySelector('.hamburger-item:nth-of-type(2)');
const hambLinkBottom = document.querySelector('.hamburger-item:nth-of-type(3)');
const navLinks = document.querySelectorAll('.nav-link');

let activeLang = 'en';
let activeTheme = 'light';
let activeSeason = 'summer';

hamb.addEventListener("click", openMenu);

function openMenu() {
    hambLinkTop.classList.toggle('active');
    hambLinkMiddle.classList.toggle('active');
    hambLinkBottom.classList.toggle('active');
    hambMenu.classList.toggle('open');
}

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
    let targetBtns = event.target.dataset.season;
    changeImage(targetBtns);
}

function changeImage(targetBtns) {
    if (targetBtns) {
        activeSeason = targetBtns;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${targetBtns}/${index + 1}.jpg`);
        changeClassActiveBtn(targetBtns);
    }
}

function changeClassActiveBtn(targetBtns) {
    portfolioBtns.forEach(element => {
        if (element.dataset.season == targetBtns) {
            element.classList.add('activeBtn');
        } else {
            element.classList.remove('activeBtn');
        }
    });
}

function changeClassActiveToggle(targetToggle) {
    if (targetToggle == 'ru') {
        en.classList.remove('activeLink');
        ru.classList.toggle('activeLink');
    } else {
        ru.classList.remove('activeLink');
        en.classList.toggle('activeLink');
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
    let targetToggle = event.target.dataset.lang;
    getTranslate(targetToggle);
}

function getTranslate(targetToggle) {
    text.forEach(element => {
        if (targetToggle == 'ru') {
            activeLang = 'ru';
            element.textContent = i18Obj.ru[element.dataset.i18];
            ru.classList.toggle('activeLink');
        } else {
            activeLang = 'en';
            element.textContent = i18Obj.en[element.dataset.i18];
            en.classList.toggle('activeLink');
        }
    });
    changeClassActiveToggle(activeLang);
}

iconSun.addEventListener('click', changeTheme);
iconMoon.addEventListener('click', changeTheme);

function changeTheme() {
    if (activeTheme == 'light') {
        changeThemeToDark();
    } else {
        changeThemeToLight();
    }
}

function changeThemeToLight() {
    activeTheme = 'light';
    iconSun.style.display = 'none';
    iconMoon.style.display = 'flex';
    document.documentElement.style.setProperty('--body-color', '#fff');
    document.documentElement.style.setProperty('--text-color', '#000');
    document.documentElement.style.setProperty('--hover-color', '#000');
}

function changeThemeToDark() {
    activeTheme = 'dark';
    iconMoon.style.display = 'none';
    iconSun.style.display = 'flex';
    document.documentElement.style.setProperty('--body-color', '#000');
    document.documentElement.style.setProperty('--text-color', '#fff');
    document.documentElement.style.setProperty('--hover-color', '#bdae82');
}

function setLocalStorage() {
    localStorage.setItem('lang', activeLang);
    localStorage.setItem('theme', activeTheme);
    localStorage.setItem('season', activeSeason);
}

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      let lang = localStorage.getItem('lang');
      getTranslate(lang);
      let theme = localStorage.getItem('theme');
      changeTheme(theme);
      let season = localStorage.getItem('season');
      changeImage(season);
    }
}
window.addEventListener('load', getLocalStorage);