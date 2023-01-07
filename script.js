let img = document.querySelector('img');
let btnPrev = document.querySelector('#btnPrev');
let btnNext = document.querySelector('#btnNext');

btnPrev.addEventListener('click', () => {
    img.src = 'images/cat1.jpg';
})

btnNext.addEventListener('click', () => {
    img.src = 'images/cat3.jpg';
})