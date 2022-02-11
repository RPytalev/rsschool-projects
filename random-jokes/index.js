'use strict';
console.log('1.Вёрстка +10\n2.При загрузке страницы приложения отображается рандомная цитата +10\n3.При перезагрузке страницы цитата обновляется (заменяется на другую) +10\n4.Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) +10\n5.Смена цитаты сопровождается любым другим эффектом, например, изменяется изображение или меняется фоновый цвет страницы, или проигрывается звук и т.д * +10\n6.Можно выбрать один из двух языков отображения цитат: en/ru или en/be ** +10\nИтог: 60 баллов');
const container = document.querySelector('.container');
const btnMain = document.querySelector('.main-btn');
const btnHeader = document.querySelector('.header-btn');
const card = document.querySelector('.card');
const url = 'https://api.chucknorris.io/jokes/random';
const containerForText = document.querySelector('.container-for-text');
const div = document.createElement('div');
div.classList.add('jokes');
containerForText.append(div);
let activeLang = true;

document.addEventListener('DOMContentLoaded', getData);
btnMain.addEventListener('click', changeJokes);
btnHeader.addEventListener('click', changeLang);

function changeJokes() {
    getData();
    card.classList.add('active');
    let timerId1 = setInterval(() => {
        card.classList.add('changePos');
        container.classList.add('blinker');
    }, 200);
    let timerId2 = setInterval(() => {
        card.classList.remove('changePos');
        container.classList.remove('blinker');
    }, 400);
    setTimeout(() => {
        card.classList.remove('active');
        clearInterval(timerId1);
        clearInterval(timerId2);
    }, 1000);
}

function changeLang() {
    if (activeLang) {
        btnHeader.innerText = 'ru';
        activeLang = !activeLang;
        btnMain.innerText = 'Привет, расскажи мне шутку!';
    } else {
        btnHeader.innerText = 'en';
        activeLang = !activeLang;
        btnMain.innerText = 'Hi, tell me a joke!';
    }
}

async function getData() {
    if (activeLang) {
        const res = await fetch(url);
        const data = await res.json();
        div.innerText = data.value;
    } else {
        const res = await fetch('data.json');
        const data = await res.json();
        div.innerText = data[Math.floor(Math.random() * 10)].value;
    }
}