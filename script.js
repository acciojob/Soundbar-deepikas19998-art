// List of sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// Create Audio objects
const audioElements = {};
sounds.forEach(sound => {
  audioElements[sound] = new Audio(`sounds/${sound}.mp3`);
});

// Select all buttons
const buttons = document.querySelectorAll('.btn');

// Play and stop logic
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const soundName = btn.innerText;

    if (soundName === 'stop') {
      stopSounds();
    } else {
      stopSounds();
      audioElements[soundName].play();
    }
  });
});

// Stop all sounds
function stopSounds() {
  sounds.forEach(sound => {
    const audio = audioElements[sound];
    audio.pause();
    audio.currentTime = 0;
  });
}
