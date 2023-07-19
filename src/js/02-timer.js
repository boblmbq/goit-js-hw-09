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

refs.btnStartCounter.setAttribute('disabled', 'true');

flatpickr(refs.inputDateValue, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > new Date().getTime()) {
      const date = selectedDates[0].getTime() - new Date().getTime();
      writeCountdownValue(convertMs(date));
      refs.btnStartCounter.removeAttribute('disabled');
      return;
    }
    return alert('Please choose a date in the future');
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

function writeCountdownValue(fn) {
  const { days, hours, minutes, seconds } = fn;
  refs.daysEl.textContent = days.padStart(2, '0');
  refs.hoursEl.textContent = hours.padStart(2, '0');
  refs.minutesEl.textContent = minutes.padStart(2, '0');
  refs.secondsEl.textContent = seconds.padStart(2, '0');
}
