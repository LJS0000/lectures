const start_time = new Date();

function setTime() {
  const current_time = new Date();
  const time = new Date(current_time - start_time);

  const minute = time.getMinutes().toString().padStart(2, '0');
  const second = time.getSeconds().toString().padStart(2, '0');

  const timeEl = document.querySelector('.time');
  timeEl.innerText = `${minute}:${second}`;
}

setInterval(setTime, 1000);
