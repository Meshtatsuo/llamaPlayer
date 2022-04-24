const {Howl, Howler} = require('howler');

const path = "../testFiles/02 Let Her Go.m4a";

const newSong = new Howl({
    src: [path],
    html5: true
});

function playSong(){
    console.log("Playing");
    newSong.play();
}

playSong();
module.exports = playSong;