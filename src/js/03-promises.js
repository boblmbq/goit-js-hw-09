import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    setTimeout(
      () =>
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        ),
      delay
    );
  } else {
    setTimeout(
      () =>
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        ),
      delay
    );
  }
}

formEl.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(formEl);
  const values = Object.fromEntries(formData);
  const { delay, step, amount } = values;
  CreatePromises(Number(delay), Number(step), Number(amount));
}

function CreatePromises(delay, step, amount) {
  let newDelay = delay;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, newDelay);
    newDelay += step;
  }
}
