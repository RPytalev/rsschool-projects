'use strict';
console.log('1.Вёрстка +10\n2.При кликах по игровому полю по очереди отображаются крестики и нолики. Первая фигура всегда крестик +10\n3.Игра завершается, когда три фигуры выстроились в ряд по вертикали, горизонтали или диагонали +10\n4.По окончанию игры выводится её результат - выигравшая фигура и количество ходов от начала игры до её завершения +10\n5.Результаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой отображаются результаты предыдущих 10 игр +10\n6.Анимации или звуки, или настройки игры. Баллы начисляются за любой из перечисленных пунктов +10\nИтог: 60');
const area = document.querySelector('.area');
const title = document.querySelector('.title');
const winnerListTitle = document.querySelector('.winner-list-title');
const x = document.querySelector('.x');
const o = document.querySelector('.o');
const display = document.querySelector('.display');
const btn = document.querySelector('.btn');
let boxes = document.getElementsByClassName('box');
let winnerListItem = document.getElementsByClassName('winner-list-item');
let res;
let winners = [];
let pos = 0;
let counter = 0;
let winnerList = [];
let winPos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let process = true;
let timerId1;
let timerId2;
let winner;

area.addEventListener('click', handler);

function handler(e) {
    let selectedBox = e.target;
    if (process) { 
        if (selectedBox.innerText == '') {
            pos % 2 == 0 ? selectedBox.innerText = 'X' : selectedBox.innerText = 'O';
            pos++;
            counter++;
            checkWinPos();
            display.innerHTML = counter;
            winnerListTitle.classList.remove('active');
            winnerListItem[winnerListItem.length - 1].classList.remove('active');
        }
    }
}

function checkWinPos() {
    for (let i = 0; i < winPos.length; i++) {
        if (boxes[winPos[i][0]].innerHTML == 'X' && boxes[winPos[i][1]].innerHTML == 'X' && boxes[winPos[i][2]].innerHTML == 'X') {
            boxes[winPos[i][0]].classList.add('active');
            boxes[winPos[i][1]].classList.add('active');
            boxes[winPos[i][2]].classList.add('active');
            x.classList.add('active');
            timerId1 = setInterval(() => {
                title.classList.add('active');
            }, 200);
            timerId2 = setInterval(() => {
                title.classList.remove('active');
            }, 400);
            title.classList.add('active');
            process = !process;
            winner = 'X';
        } else if (boxes[winPos[i][0]].innerHTML == 'O' && boxes[winPos[i][1]].innerHTML == 'O' && boxes[winPos[i][2]].innerHTML == 'O') {
            boxes[winPos[i][0]].classList.add('active');
            boxes[winPos[i][1]].classList.add('active');
            boxes[winPos[i][2]].classList.add('active');
            o.classList.add('active');
            timerId1 = setInterval(() => {
                title.classList.add('active');
            }, 200);
            timerId2 = setInterval(() => {
                title.classList.remove('active');
            }, 400);
            title.classList.add('active');
            process = !process;
            winner = 'O';
        }  
    }
}

btn.addEventListener('click', restart);

function restart() {
    if (counter >= 5) {
        if (winnerList.length < 10) {
            winnerList.push(winner);
        } else {
            winnerList.shift();
            winnerList.push(winner);
        }
    }
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('active');
        boxes[i].innerHTML = '';
    }
    x.classList.remove('active');
    o.classList.remove('active');
    clearInterval(timerId1);
    clearInterval(timerId2);
    title.classList.remove('active');
    winnerListTitle.classList.add('active');
    winnerListItem[winnerListItem.length - 1].classList.add('active');
    display.innerHTML = '';
    display.innerHTML = '0';
    for (let i = 0; i < winnerList.length; i++) {
        winnerListItem[i].innerHTML = winnerList[i];
    }
    pos = 0;
    counter = 0;
    process = !process;
    setLocalStorage();
}

window.addEventListener('beforeunload', setLocalStorage);

function setLocalStorage() {
    localStorage.setItem('winnerList', winnerList);
}

window.addEventListener('load', getLocalStorage);

function getLocalStorage() {
    res = localStorage.getItem('winnerList');
    if (res) {
        for (let i = 0; i < res.length; i++) {
            if (i % 2 == 0) {
                winners.push(res[i]);
            }
        }
        winnerList = winners;
        for (let i = 0; i < winnerList.length; i++) {
            winnerListItem[i].innerHTML = winnerList[i];
        }
    }
}