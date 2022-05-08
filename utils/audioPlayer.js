const { Howl, Howler } = require("howler");

let musicQueue = [];
let currentQueueIndex = 0;

const queue = new Howl({
  src: [musicQueue],
  loop: false,
  html5: true,
});

function beginPlayback() {
  console.log("Playing");
  console.log(newSong.play());
}

function skipTrack() {}

function pausePlayback() {}

function previousTrack() {}

function addToQueue(trackDir) {}

function insertNextTrack(trackDir) {}

module.exports = playSong;
