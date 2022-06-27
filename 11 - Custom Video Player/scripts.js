/* Get the elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullScreen = player.querySelector('#full')
let mouseDown = false;

/* Build the functions */

/* Toggle play function */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

/* Update the play button */
function updateBtn() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.innerHTML = icon;
}

function skip () {
  video.currentTime += parseFloat(this.dataset.skip);
}

function change () {
 video[this.name] = this.value
 }

function handleProgress() {
  const watchPoint = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${watchPoint}%`;
}

function updateProgress(e) {
  const scrubTime = e.offsetX / progress.offsetWidth * video.duration;
  video.currentTime = scrubTime
}

function changeScreenSize() {
  video.requestFullscreen()
}

/* Event listener */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateBtn)
video.addEventListener('pause', updateBtn)
toggle.addEventListener('click', togglePlay)
skipButtons.forEach( btn => {
  btn.addEventListener('click', skip)
})

ranges.forEach( range => {
  range.addEventListener('change', change)
})
ranges.forEach( range => {
  range.addEventListener('mousemove', change)
})
video.addEventListener('timeupdate', handleProgress)

progress.addEventListener('click', updateProgress)
progress.addEventListener('mousemove', (e) => mouseDown && updateProgress(e))
progress.addEventListener('mousedown', () => mouseDown = true)
progress.addEventListener('mouseup', () => mouseDown = false)
fullScreen.addEventListener('click', changeScreenSize)
