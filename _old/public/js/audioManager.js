    var currentTrack = new Howl({
    src: ["../testFiles/01 CRUSH.mp3"],
    html5: true
});
var isPlaying = false;

function playSong(){
    currentTrack.play();
    isPlaying = true;
}

function pauseSong(){
    currentTrack.pause();
    isPlaying=false;
}
