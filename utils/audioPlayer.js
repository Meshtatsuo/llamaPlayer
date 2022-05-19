const { Howl, Howler } = require("howler");

let musicQueue = [];
let currentQueueIndex = 0;
let vol = 0.75;

// Keep previous and next tracks ready for smooth
// transition between playback
let currentTrack;
let prevTrack;
let nextTrack;

var player = new Howl({
  src: musicQueue,
  loop: false,
  volume: vol,
  html5: true,
  preload: false,
});

function beginPlayback() {
  try {
    console.log("Attempting to play... " + musicQueue);
    player.play();
  } catch {
    console.log("Failed to play");
  }
}

function primePlayback() {
  try {
    player.src = musicQueue;
    currentTrack = player.load(musicQueue[currentQueueIndex]);
    console.log(player);
  } catch {
    console.log("Unable to prime");
  }
}

function skipTrack() {
  currentQueueIndex++;
  player.fade(vol, 0, 250);
  player.play(musicQueue[currentQueueIndex]);
  player.fade(0, vol, 250);
}

function pausePlayback() {
  return player.pause();
}

function previousTrack() {}

function addToQueue(trackDir) {
  musicQueue.push(trackDir);
  console.log("New track added: " + trackDir);
}

function insertNextTrack(trackDir) {
  musicQueue[currentQueueIndex] = trackDir;
  currentTrack = currentQueueIndex;
  primePlayback();
  beginPlayback();
}

module.exports = {
  beginPlayback,
  primePlayback,
  pausePlayback,
  skipTrack,
  previousTrack,
  addToQueue,
  insertNextTrack,
};
