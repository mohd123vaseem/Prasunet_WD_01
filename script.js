let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let running = false;

const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapTimesList = document.getElementById('lap-times');

function updateDisplay() {
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  document.getElementById('milliseconds').textContent = String(milliseconds).padStart(2, '0');
}

function startTimer() {
  if (!running) {
    running = true;
    interval = setInterval(() => {
      milliseconds += 1;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds += 1;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(interval);
  running = false;
}

function resetTimer() {
  clearInterval(interval);
  running = false;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  lapTimesList.innerHTML = '';
  updateDisplay();
}

function recordLap() {
  const lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapTimesList.appendChild(lapItem);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', recordLap);

updateDisplay();
