let secondsInput = document.getElementById('input-seconds');
let minutesInput = document.getElementById('input-minutes');
let inputs = [secondsInput, minutesInput];

let buttonOneMinute = document.getElementById('button-onemin');
let buttonFiveMinutes = document.getElementById('button-fivemin');
let buttonTenMinutes = document.getElementById('button-tenmin');
let timeButtons = [buttonOneMinute, buttonFiveMinutes, buttonTenMinutes];

let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');

let root = document.getElementsByTagName('body')[0];

let alarm = new Audio(
  'https://drive.google.com/u/0/uc?id=1RBlWW5TFG1OG5X9kh-yA99Z9RCe5vs5A'
);

let seconds;
let minutes;
let totalTimeSeconds;

let interval;
let inputBlinkInterval;
let backgroundBlinkInterval;
let alarmInterval;

let States = { RUNNING: 'running', PAUSED: 'paused', INACTIVE: 'inactive' };
let state = Object.values(States).includes(localStorage.getItem('state'))
  ? localStorage.getItem('state')
  : States.INACTIVE;

minutesInput.value = localStorage.getItem('minutes') || '0';
secondsInput.value = localStorage.getItem('seconds') || '00';

minutesInput.oninput = () => {
  minutesInput.value = parseInt(minutesInput.value) || '0';
};

secondsInput.oninput = () => {
  secondsInput.value = parseInt(secondsInput.value) || '00';
  if (parseInt(secondsInput.value) > 59) {
    secondsInput.value = 59;
  }
  if (secondsInput.value < 10 && secondsInput.value >= 0) {
    secondsInput.value = '0' + parseInt(secondsInput.value) || '00';
  }
};

let changeState = (state) => {
  switch (state) {
    case States.RUNNING:
      localStorage.state = States.RUNNING;

      clearInterval(interval);
      clearInterval(inputBlinkInterval);
      inputs.forEach((input) => (input.style.opacity = 1));

      seconds = parseInt(secondsInput.value);
      minutes = parseInt(minutesInput.value);
      totalTimeSeconds = seconds + minutes * 60;

      interval = setInterval(() => {
        totalTimeSeconds = totalTimeSeconds - 1;
        seconds = totalTimeSeconds % 60;
        minutes = (totalTimeSeconds - seconds) / 60;

        secondsInput.value =
          seconds >= 0 ? (seconds >= 10 ? seconds : '0' + seconds) : '00';
        minutesInput.value = minutes;

        localStorage.minutes = minutes;
        localStorage.seconds = seconds;

        if (totalTimeSeconds <= 0) {
          clearInterval(interval);
          buttonStop.disabled = true;

          let isBackgroundRed = false;
          let backgrounds = ['', 'rgb(255, 55, 55)'];
          backgroundBlinkInterval = setInterval(() => {
            root.style.background = backgrounds[+!isBackgroundRed];
            isBackgroundRed = !isBackgroundRed;
          }, 500);

          alarmInterval = setInterval(() => alarm.play(), alarm.duration);
        }
      }, 1000);

      buttonStart.disabled = true;
      timeButtons.forEach((button) => (button.disabled = true));
      buttonStop.disabled = false;
      inputs.forEach((input) => (input.disabled = true));
      break;

    case States.PAUSED:
      localStorage.state = States.PAUSED;
      timeButtons.forEach((button) => (button.disabled = true));

      buttonStart.disabled = false;
      buttonStop.disabled = true;

      clearInterval(interval);

      inputBlinkInterval = setInterval(() => {
        inputs.forEach(
          (input) => (input.style.opacity = 1 - input.style.opacity) % 1
        );
      }, 500);
      break;

    default:
      localStorage.state = States.INACTIVE;

      clearInterval(interval);
      clearInterval(inputBlinkInterval);
      clearInterval(backgroundBlinkInterval);
      clearInterval(alarmInterval);
      root.style.background = '';
      alarm.pause();

      seconds = 0;
      minutes = 0;
      secondsInput.value = '00';
      minutesInput.value = '0';

      buttonStart.disabled = false;
      buttonStop.disabled = true;
      inputs.forEach((input) => {
        input.style.opacity = 1;
        input.disabled = false;
      });
      timeButtons.forEach((button) => (button.disabled = true));
      timeButtons.forEach((button) => (button.disabled = false));
      break;
  }
};

changeState(state);

buttonOneMinute.onclick = () => {
  minutes = 1;
  minutesInput.value = minutes;
  seconds = 0;
  secondsInput.value = '00';
};
buttonFiveMinutes.onclick = () => {
  minutes = 5;
  minutesInput.value = minutes;
  seconds = 0;
  secondsInput.value = '00';
};
buttonTenMinutes.onclick = () => {
  minutes = 10;
  minutesInput.value = minutes;
  seconds = 0;
  secondsInput.value = '00';
};

buttonStart.onclick = () => changeState(States.RUNNING);
buttonStop.onclick = () => changeState(States.PAUSED);
buttonReset.onclick = () => changeState(States.INACTIVE);
