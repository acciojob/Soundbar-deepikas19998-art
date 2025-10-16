const applause = new Audio('sounds/applause.mp3');
const boo = new Audio('sounds/boo.mp3');
const gasp = new Audio('sounds/gasp.mp3');
const tada = new Audio('sounds/tada.mp3');
const victory = new Audio('sounds/victory.mp3');
const wrong = new Audio('sounds/wrong.mp3');

document.getElementById('applause').addEventListener('click', () => applause.play());
document.getElementById('boo').addEventListener('click', () => boo.play());
document.getElementById('gasp').addEventListener('click', () => gasp.play());
document.getElementById('tada').addEventListener('click', () => tada.play());
document.getElementById('victory').addEventListener('click', () => victory.play());
document.getElementById('wrong').addEventListener('click', () => wrong.play());

document.getElementById('stop').addEventListener('click', () => {
  applause.pause();
  boo.pause();
  gasp.pause();
  tada.pause();
  victory.pause();
  wrong.pause();
  // Resetting the playback position to the start of each sound file.
  applause.currentTime = 0;
  boo.currentTime = 0;
  gasp.currentTime = 0;
  tada.currentTime = 0;
  victory.currentTime = 0;
  wrong.currentTime = 0;
});
