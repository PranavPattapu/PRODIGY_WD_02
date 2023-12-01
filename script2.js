let timer;
let isRunning = false;
let elapsedMilliseconds = 0;
let lapCounter = 1;

function start() {
    if (!isRunning) {
        timer = setInterval(updateTime, 10);
        isRunning = true;
    }
}

function stop() {
    clearInterval(timer);
    isRunning = false;
}

function lap() {
    if (isRunning) {
        const lapTime = getFormattedTime(elapsedMilliseconds);
        const lapItem = document.createElement('div');
        lapItem.className = 'lap-item';
        lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
        document.getElementById('laps').prepend(lapItem);
        lapCounter++;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedMilliseconds = 0;
    lapCounter = 1;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('laps').innerHTML = '';
}

function updateTime() {
    elapsedMilliseconds += 10;
    updateDisplay();
}

function updateDisplay() {
    const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millisecondsFormatted = Math.floor((elapsedMilliseconds % 1000) / 10);

    const pad = (value) => value.toString().padStart(2, '0');

    const display = `${pad(minutes)}:${pad(seconds)}:${pad(millisecondsFormatted)}`;
    document.getElementById('display').textContent = display;
}

function getFormattedTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);

    const pad = (value) => value.toString().padStart(2, '0');

    return `${pad(minutes)}:${pad(seconds)}:${pad(millisecondsFormatted)}`;
}
