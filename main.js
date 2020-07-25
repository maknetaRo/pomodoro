const timeDisplay = document.querySelector(".time");
const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnStop = document.querySelector(".btn-stop");
const endSound = document.querySelector(".end-sound");
const btnPlus = document.querySelector(".btn-plus");
const btnMinus = document.querySelector(".btn-minus");

let interval;
let counter = 0;
let minutes = 25;

timeDisplay.innerHTML = moment().minute(minutes).second(0).format("mm:ss");

function playAudio() {
  const sound = new Audio(endSound.src);
  sound.play();
}

btnPlus.addEventListener("click", () => {
  minutes += 1;
  timeDisplay.innerHTML = moment().minute(minutes).second(0).format("mm:ss");
});
btnMinus.addEventListener("click", () => {
  minutes -= 1;
  timeDisplay.innerHTML = moment().minute(minutes).second(0).format("mm:ss");
});

function setTimer() {
  let now = moment();
  let clock = now
    .minute(minutes)
    .second(counter--)
    .format("mm:ss");

  if (clock !== "00:00") {
    timeDisplay.innerHTML = clock;
  } else {
    clearInterval(interval);
    timeDisplay.innerHTML = "00:00";
    playAudio();
  }
}

btnStart.addEventListener("click", () => {
  interval = setInterval(setTimer, 1000);
  btnStart.disabled = true;
});

btnPause.addEventListener("click", () => {
  btnStart.disabled = false;
  clearInterval(interval);
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  counter = 0;
  minutes = 25;
  timeDisplay.innerHTML = moment()
    .minute(minutes)
    .second(counter--)
    .format("mm:ss");
  btnStart.disabled = false;
});

setTimer();
