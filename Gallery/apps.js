const ball = document.querySelector('.bAll');
const bspiderman = document.querySelector('.bSpiderman');
const bIronman = document.querySelector('.bIron');
const bthor = document.querySelector('.bThor');

const dall = document.querySelector('.all');
const dspiderman = document.querySelector('.spiderman1');
const dIronman = document.querySelector('.ironman1');
const dthor = document.querySelector('.thor1');


dspiderman.style.display = 'block';
dIronman.style.display = 'block';
dthor.style.display = 'block';

bIronman.addEventListener('click', () => {
    dspiderman.style.display = 'none';
    dIronman.style.display = 'block';
    dthor.style.display = 'none';
});

bspiderman.addEventListener('click', () => {
    dspiderman.style.display = 'block';
    dIronman.style.display = 'none';
    dthor.style.display = 'none';
});

ball.addEventListener('click', () => {
    dspiderman.style.display = 'block';
    dIronman.style.display = 'block';
    dthor.style.display = 'block';
});


bthor.addEventListener('click', () => {
    dspiderman.style.display = 'none';
    dIronman.style.display = 'none';
    dthor.style.display = 'block';
});
