const pikachu = document.querySelector('.pikachu')
const pokebola = document.querySelector('.pokebola')
const cloud = document.querySelector('.cloud')
const endgame = document.querySelector('.end-game')
const score = document.querySelector('.scoreTimer')
const player = document.querySelector('.player')


const jump = () => {
   pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump')
    }, 500);



}

const scoreTimer = () => {

   this.loopTimer = setInterval(() => {
        const scoreAtual = +score.innerHTML
        score.innerHTML = scoreAtual + 1;
    }, 1000);
}





const loop = setInterval(() => {
    const pokebolaPosition = +window.getComputedStyle(pokebola).left.replace('px', '');
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    

    if (pokebolaPosition <= 180 &&  pikachuPosition < 110 && pokebolaPosition > 0) {

        pokebola.style.animation = 'none'
        pokebola.style.left = `${pokebolaPosition}px`;

        pikachu.style.animation = 'none'
        pikachu.style.bottom = `${pikachuPosition}px`;

        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`;


        endgame.style.visibility = 'visible'


        clearInterval(loop)
        clearInterval(loopTimer)
    }
   
}, 10);


document.addEventListener('keydown' , jump)
scoreTimer();
player.innerHTML = localStorage.getItem('player');





