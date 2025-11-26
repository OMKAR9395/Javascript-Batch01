let totalTime = 60;

let timer = setInterval(function () {
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  if (seconds < 10) seconds = '0' + seconds;
  if (minutes < 10) minutes = '0' + minutes;
  document.getElementById('timer').innerHTML = minutes + ':' + seconds;
  if (totalTime <= 0) {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = 'Time Up !';
  }
  totalTime--;
}, 1000);
