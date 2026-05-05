const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export function startTimer(targetTimestamp) {
  const els = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
  };

  const pad = n => String(n).padStart(2, '0');

  function updateTimer() {
    const diff = targetTimestamp - Date.now();
    if (diff <= 0) {
      els.days.textContent = '00';
      els.hours.textContent = '00';
      els.minutes.textContent = '00';
      els.seconds.textContent = '00';
      clearInterval(intervalId);
      return;
    }
    els.days.textContent = pad(Math.floor(diff / DAY));
    els.hours.textContent = pad(Math.floor((diff % DAY) / HOUR));
    els.minutes.textContent = pad(Math.floor((diff % HOUR) / MINUTE));
    els.seconds.textContent = pad(Math.floor((diff % MINUTE) / SECOND));
  }

  updateTimer();
  const intervalId = setInterval(updateTimer, SECOND);
}