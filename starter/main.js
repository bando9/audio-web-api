import './style.css'

const AudioContext = window.AudioContext ?? window.webkitAudioContext;
const audioCtx = new AudioContext()

const audioElement = document.getElementById('audio');
const playBtn = document.getElementById('playbtn');
const volumeSlider = document.getElementById('volume');
const seeker = document.getElementById('seeker');
const time = document.getElementById('time');
const duration = document.getElementById('duration')

const audioSource = audioCtx.createMediaElementSource(audioElement)

playBtn.addEventListener('click', (event) => {
    const targetEl = event.target;

    if (targetEl.getAttribute('class') == 'paused') {
        audioElement.play();
        targetEl.setAttribute('class', 'playing')
    } else if (targetEl.getAttribute('class') == 'playing') {
        audioElement.pause();
        targetEl.setAttribute('class', 'paused')
    }
});