function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  stopBtn: document.querySelector('button[data-stop]'),
  startBtn: document.querySelector('button[data-start]'),
};

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  refs.startBtn.setAttribute('disabled', 'true');
  if (refs.stopBtn.getAttribute('disabled')) {
    refs.stopBtn.removeAttribute('disabled');
  }
  changingColotInterval = setInterval(
    () => (refs.body.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

//! function for stop the interval

function onStopClick() {
  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', 'true');
  clearInterval(changingColotInterval);
}
