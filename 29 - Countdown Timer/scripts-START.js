let countdown;
let timerDisplay = document.querySelector('.display__time-left')
let endTimeDisplay = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const seconds = parseInt(this.minutes.value * 60);
  timer(seconds);
  this.reset();
});



function startTimer(){
  timer(parseInt(this.dataset.time))
}

buttons.forEach((button,i) => {
  button.addEventListener(('click'), startTimer)
})

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000
  displayTimeLeft(seconds)
  displayEndTime(then);


  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0){
      clearInterval(countdown);
      return;
    }


    displayTimeLeft(secondsLeft)
  }, 1000)


}



function displayTimeLeft(seconds){
  let minutes =  Math.floor(seconds / 60)
  let remainingSeconds =  Math.floor(seconds % 60)

  const display = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
  timerDisplay.textContent = display;
  document.title = display;
  
}

function displayEndTime(timestamp){
  const hour = new Date(timestamp).getHours() - 12
  const minute = new Date(timestamp).getMinutes()
  
  const display = `Be Back at ${hour}:${minute < 10 ? '0' : ''}${minute}`
  endTimeDisplay.textContent = display;
}


