// STORE REFERENCES TO MAIN WINDOW BUTTONS
const settingsbtn = document.querySelector(".settings-trigger");
const shufflebtn = document.querySelector("#shuffle-btn");
const rewindbtn = document.querySelector("#rewind-btn");
const playbtn = document.querySelector("#play-btn");
const forwardbtn = document.querySelector("#forward-btn");
const loopbtn = document.querySelector("#loop-btn");

// SET UP EVENT LISTENERS ON MAIN WINDOW BUTTONS
settingsbtn.addEventListener('click', () => {
    // open settings window
    main.openSettings();
});

shufflebtn.addEventListener('click', () => {
    // enable shuffle
    console.log("shuffle");
})

rewindbtn.addEventListener('click', () => {
    // start track over or previous track
    console.log("rewind");
})

playbtn.addEventListener('click', () => {
    // play or pause  
    if(!isPlaying){
        console.log("play");
        document.getElementById("play-img").src = "./images/transport_icons/PauseIcon.png";
        playSong();
    }
    else{
        console.log("pause");
        document.getElementById("play-img").src = "./images/transport_icons/PlayIcon.png";
        pauseSong();
    }
    
})

forwardbtn.addEventListener('click', () => {
    // skip track
    console.log("skip");
})

loopbtn.addEventListener('click', () => {
    // loop playlist *or* loop track
    console.log("Loop");
})

console.log(settingsbtn);