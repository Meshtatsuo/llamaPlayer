const { Howl, Howler } = require("howler");

let musicQueue = [];
let currentQueueIndex = 0;
let vol;

// Keep previous and next tracks ready for smooth
// transition between playback
let currentTrack;
let prevTrack;
let nextTrack;

const player = new Howl({
  src: musicQueue,
  loop: false,
  html5: true,
  preload: false,
});

function beginPlayback() {
  console.log("Playing");
  console.log(player.play(src.musicQueue[currentQueueIndex]));
}

function primePlayback() {
  currentTrack = sound.load(src.musicQueue[currentQueueIndex]);
}

function skipTrack() {
  currentQueueIndex++;
  player.fade(vol, 0, 250);
  player.play(src.musicQueue[currentQueueIndex]);
  player.fade(0, vol, 250);
}

function pausePlayback() {
  return player.pause();
}

function previousTrack() {}

function addToQueue(trackDir) {}

function insertNextTrack(trackDir) {}

module.exports = playSong;
