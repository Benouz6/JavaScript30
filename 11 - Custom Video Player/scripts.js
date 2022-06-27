/* Get the elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build the functions */

/* Toggle play function */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/* Update the play button */
function updateBtn() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.innerHTML = icon
}

function skip () {
  if (this.dataset.skip === '-10') {
    video.currentTime = (video.currentTime - 10)
  }
  if (this.dataset.skip === '25') {
    video.currentTime = (video.currentTime + 25)
  }
  /* console.log(this.dataset);
  console.log(minusTen); */
 }

/* Event listener */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateBtn)
video.addEventListener('pause', updateBtn)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach( btn => {
  btn.addEventListener('click', skip)
})
