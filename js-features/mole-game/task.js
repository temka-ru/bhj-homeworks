const deadCounterElement = document.getElementById('dead');
const lostCounterElement = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');
let deadCount = 0;
let lostCount = 0;
let playing = true;

function handleClick() {
    if (this.classList.contains('hole_has-mole')) {
        deadCount++;
        deadCounterElement.textContent = deadCount;
        this.classList.remove('hole_has-mole');
    } else {
        lostCount++;
        lostCounterElement.textContent = lostCount;
    }

    if (deadCount === 10) {
        playing = false;
        alert('Поздравляем! Вы победили!');
        resetGame();
    } else if (lostCount === 5) {
        playing = false;
        alert('Конец игры! Вы проиграли');
        resetGame();
    }
}

function resetGame() {
    deadCount = 0;
    lostCount = 0;
    deadCounterElement.textContent = deadCount;
    lostCounterElement.textContent = lostCount;
    holes.forEach((hole) => {
        hole.classList.add('hole_has-mole');
    });
}

holes.forEach((hole) => {
    hole.addEventListener('click', handleClick);
});