const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formEl);
  const values = Object.fromEntries(formData);
  const { delay, step, amount } = values;
  a(delay, step, amount);
}

function a(delay, step, amount) {
  let newDelay = delay;
  let counter = 1;
  for (let i = 0; i < amount; i++) {
    createPromise(counter, newDelay);
    newDelay += step;
    counter += 1;
  }
}
