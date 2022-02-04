'use strict';
console.log('1.Вёрстка +10\n2.При кликах по интерактивным элементам меняется изображение +10\n3.При кликах по интерактивным элементам меняется звук +10\n4.Активный в данный момент интерактивный элемент выделяется стилем +10\n5.Кнопка Play/Pause +20\n6.Дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10\nИтог: 70 баллов');

const hamb = document.querySelector('.hamburger');
const hambMenu = document.querySelector('.hamburger-menu');
const hambLinkTop = document.querySelector('.hamburger-item:nth-of-type(1)');
const hambLinkMiddle = document.querySelector('.hamburger-item:nth-of-type(2)');
const hambLinkBottom = document.querySelector('.hamburger-item:nth-of-type(3)');
const bg = document.querySelector('.container');
const audio = document.querySelector('audio');
const btn = document.querySelector('.audio-player-btn');
const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const effect1 = document.querySelector('.effect-1');
const effect2 = document.querySelector('.effect-2');
const navLinks = document.querySelectorAll('.nav-link');
let isPlay = false;

btn.addEventListener('click', playAudio);

function playAudio() {
    if (!isPlay) {
        audio.play();
        isPlay = !isPlay;
        btnPlay.classList.toggle('icon-hidden');
        btnPause.classList.toggle('icon-hidden');
        effect1.classList.toggle('effect-1-active');
        effect2.classList.toggle('effect-2-active');
    } else {
        audio.pause();
        isPlay = !isPlay;
        btnPause.classList.toggle('icon-hidden');
        btnPlay.classList.toggle('icon-hidden');
        effect1.classList.toggle('effect-1-active');
        effect2.classList.toggle('effect-2-active');
    }
}

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

navLinks.forEach( (elem) => elem.addEventListener('click', function(event) {
    let targetLink = event.target.dataset.track;
    changeTrack(targetLink);
    changeImage(targetLink);
}) );

function changeTrack(targetLink) {
    audio.src=`./assets/audio/${targetLink}.mp3`;
    playAudio();
    changeClassActiveLink(targetLink);
}

function changeImage(targetLink) {
    bg.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(assets/img/${targetLink}.jpg)`;
}

function changeClassActiveLink(targetLink) {
    navLinks.forEach(element => {
        if (element.dataset.track == targetLink) {
            element.classList.add('link-active');
        } else {
            element.classList.remove('link-active');
        }
    });
}