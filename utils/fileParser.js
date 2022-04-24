// File parser 
const mm = require('music-metadata');
const util = require('util');
const { getLyrics, getSong }= require('genius-lyrics-api');
require('dotenv').config()
const testTrack = "./testFiles/02 Let Her Go.m4a";

async function createTrackObject(fileDir){
let newTrack = {};
  try {
      // parse metadata from file
    const metadata = await mm.parseFile(testTrack);
    // if successful, create newTrack object

    //const art = await albumArt("Breaking Benjamin", "Ember");
    const options = {
	apiKey: process.env.GENIUS_TOKEN,
	title: "",//metadata.common.album,
	artist: metadata.common.artist,
	optimizeQuery: true
    }; 

    await getSong(options)
    .then((song)=>{

        coverArt = song.albumArt;
        
        newTrack = {
        trackName: metadata.common.title,
        trackArtist: metadata.common.artist,
        trackAlbum: metadata.common.album,
        trackLength: metadata.format.duration,
        trackAlbumArt: coverArt,
        trackPath: testTrack
    };
    })
    .catch((err)=>{
        // if fetching album art fails, use local placeholder
        newTrack = {
        trackName: metadata.common.title,
        trackArtist: metadata.common.artist,
        trackAlbum: metadata.common.album,
        trackLength: metadata.format.duration,
        trackAlbumArt: "../public/images/placeholder_albumart.png",
        trackPath: testTrack
    };
    })

    //print out to console
    console.log(newTrack);
    
} catch (error) {
    console.error(error.message);
  }
}

createTrackObject(testTrack);