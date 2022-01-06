'use strict';
console.log("1. Вёрстка валидная +10\n2. Вёрстка семантическая\n- <header>, <main>, <footer> +2\n- шесть элементов <section> (по количеству секций) +2\n- только один заголовок <h1> +2\n- пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\n- один элемент <nav> (панель навигации) +2\n- два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n- десять кнопок <button> +2\n- два инпута: <input type=email> и <input type=tel> +2\n- один элемент <textarea> +2\n- три атрибута placeholder +2\n 3. Вёрстка соответствует макету\n -блок <header> +6\n- секция hero +6\n- секция skills +6\n- секция portfolio +6\n- секция video +6\n- секция price +6\n- секция contacts +6\n- блок <footer> +6\n 4. Требования к css\n- для построения сетки используются флексы или гриды +2\n- при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n- фоновый цвет тянется на всю ширину страницы +2\n- иконки добавлены в формате svg +2\n- изображения добавлены в формате jpg +2\n- есть favicon +2\n 5. Интерактивность, реализуемая через css\n- плавная прокрутка по якорям +5\n- ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n- интерактивность +5\n- плавное изменение +5");

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