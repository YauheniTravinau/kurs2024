let timerId; // переменная, которая будет хранить ID таймера

const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if (!timerId) { // Проверяем, что интервал не запущен
        timerId = setInterval(updateClock, 1000);
    }
});

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
    clearInterval(timerId);
    timerId = null; // Обнуляем переменную, чтобы показать, что интервал остановлен
});

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    clock.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}
