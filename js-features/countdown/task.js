// Получаем элемент timer
const timerElement = document.getElementById('timer');

// начальное значение времени в секундах
let timerSeconds = 59;

// Функция обновления отображения таймера
function updateTimer() {
    const hours = Math.floor(timerSeconds / 3600);
    const minutes = Math.floor((timerSeconds % 3600) / 60);
    const seconds = timerSeconds % 60;
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerElement.textContent = formattedTime;
    timerSeconds--;

    if (timerSeconds < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateTimer, 1000);