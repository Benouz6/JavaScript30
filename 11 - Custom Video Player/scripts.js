/* Get the elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const volume = player.querySelectorAll('[data-skip]');
const playbackRate = player.querySelectorAll('.player__slider');

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

/* Event listener */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateBtn)
video.addEventListener('pause', updateBtn)

toggle.addEventListener('click', togglePlay)
