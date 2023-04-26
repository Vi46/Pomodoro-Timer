const timerDisplay = document.querySelector('.timer-display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const workIntervalInput = document.querySelector('#work-interval');
const breakIntervalInput = document.querySelector('#break-interval');
const dayNightButton =document.querySelector('.day-night');
let isDefaultImage = true;
const dayImage = "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDU1LXRlZC04NDQwLXBvbS04ODlfMS1sMWp0d2RvcS5qcGc.jpg')";
const darkImage ="url('https://i.pinimg.com/564x/10/df/77/10df77d4969b26c911bde91bb52142d9.jpg')";

let timeLeft, timerInterval;

function startTimer() {
  const interval = parseInt(workIntervalInput.value) * 60;
  timeLeft = interval;
  updateDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      startBreak();
    } else {
      updateDisplay();
    }
  }, 1000);
}

function startBreak() {
  const interval = parseInt(breakIntervalInput.value) * 60;
  timeLeft = interval;
  updateDisplay();

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timerInterval);
      startTimer();
    } else {
      updateDisplay();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  const interval = parseInt(workIntervalInput.value) * 60;
  timeLeft = interval;
  updateDisplay();
}

function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function changeBackground(){
  if(isDefaultImage == true){
  document.body.style.backgroundImage = darkImage;
  const img = document.getElementById("buttonImage");
  img.src = "https://rudhrainfosolutions.com/images/icons/sun-01.svg";
  isDefaultImage = false;
  }
  else{
    document.body.style.backgroundImage = dayImage;
    const img = document.getElementById("buttonImage");
    img.src = "https://rudhrainfosolutions.com/images/icons/vector.svg";
    isDefaultImage= true;
  }
  
}

dayNightButton.addEventListener('click',changeBackground);
startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
