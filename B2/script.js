let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let timerInterval;
let centiseconds = 0;
let isRunning = false;

function formatTime(cs) {
    let seconds = Math.floor(cs / 100);
    let centiSeconds = cs % 100;
    
    let secondsDisplay = (seconds % 60).toString().padStart(2, '0');
    let hundredsDisplay = centiSeconds.toString().padStart(2, '0');
    
    let totalSeconds = Math.floor(seconds / 60).toString().padStart(3, '0');
    
    return `${totalSeconds}:${hundredsDisplay}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    timerInterval = setInterval(() => {
        centiseconds++;
        if (centiseconds >= 100000) { 
            clearInterval(timerInterval);
            isRunning = false;
            return;
        }
        timerDisplay.textContent = formatTime(centiseconds);
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    centiseconds = 0;
    timerDisplay.textContent = formatTime(centiseconds);
    isRunning = false;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
