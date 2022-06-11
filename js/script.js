const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const youWin = document.querySelector('.you-win');
const youLose = document.querySelector('.you-lose');
const form = document.querySelector('.form-name');
const game = document.querySelector('.game');
const spinner = document.querySelector('.spinner');
const buttonReset = document.querySelector('.button-reset');

document.addEventListener('keydown', function (event) {

    const tecla = event.keyCode;

    if (tecla == 38) {
        mario.classList.add('jump');

        setTimeout(() => {
            mario.classList.remove('jump');

            const pipePosition = pipe.offsetLeft;

            if (pipePosition > 1200) {
                const oldScore = document.getElementById("score").innerHTML;
                totalScore(parseInt(oldScore) + 10);
            }
        }, 500)

    }

});

function saveName() {

    const name = document.getElementById("name").value;

    document.getElementById("user-name").innerHTML = name;

    form.style.display = 'none';
    spinner.style.display = 'block'

    setTimeout(() => {
        game.style.display = 'block';
        buttonReset.style.display = 'block';
        spinner.style.display = 'none'
        initGame();
    }, 2000)

}

function initGame() {
    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '');

        if (pipePosition <= 125 && pipePosition > 0 && marioPosition < 105) {

            youLose.style.display = 'block';
            reset(pipePosition, marioPosition);

            mario.src = 'img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '40px';

            clearInterval(loop);
        }
        const score = document.getElementById("score").innerHTML;

        if (score == 100) {
            youWin.style.display = 'block';
            reset(pipePosition, marioPosition);
        }

    }, 10);

}

function reset(pipePosition, marioPosition) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;
}

function totalScore(novoTotal) {
    document.getElementById("score").innerHTML = novoTotal;
}


function resetAll() {
    document.location.reload(true);
}