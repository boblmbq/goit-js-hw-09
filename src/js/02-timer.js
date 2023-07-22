import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  inputDateValue: document.getElementById('datetime-picker'),
  btnStartCounter: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let dateChanges = 0;

refs.btnStartCounter.setAttribute('disabled', 'true');

flatpickr(refs.inputDateValue, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < new Date().getTime()) {
      return alert('Please choose a date in the future');
    }

    refs.btnStartCounter.removeAttribute('disabled');

    refs.btnStartCounter.addEventListener('click', () => {
      refs.btnStartCounter.setAttribute('disabled', 'true');
      const a = setInterval(() => {
        // !i have made here the interval in 100ms becouse in anouther way
        // !it would be big interval in updating on the screen

        const date = selectedDates[0].getTime() - new Date().getTime();

        const actualdate = convertMs(date);
        if (Object.values(actualdate).every(e => e == 0)) {
          clearInterval(a)
        }
          addLeadingZero(actualdate);
      }, 1000);
    });
  },

  onChange: (selectedDates, dateStr, instance) => {
    dateChanges++;
    if (dateChanges === 2) {
      if (instance._initialDate !== selectedDates[0]) {
        location.reload();
      }
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  refs.daysEl.textContent = `${value.days}`.padStart(2, '0');
  refs.hoursEl.textContent = `${value.hours}`.padStart(2, '0');
  refs.minutesEl.textContent = `${value.minutes}`.padStart(2, '0');
  refs.secondsEl.textContent = `${value.seconds}`.padStart(2, '0');
}
