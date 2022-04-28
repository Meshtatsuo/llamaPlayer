// File parser
const mm = require("music-metadata");
const { getLyrics, getSong } = require("genius-lyrics-api");

const Path = require("path");
const FS = require("fs");
const util = require("util");
const { getFileExtension } = require("../helpers/fileExtensions");
const { create } = require("../models/Album");

let files = [];

require("dotenv").config();

const testDir = "G:/Music/Music";

async function createTrackObject(fileDir) {
  let newTrack = {};
  try {
    // parse metadata from file
    const metadata = await mm.parseFile(fileDir);
    // if successful, create newTrack object
    console.log(metadata);

    //const art = await albumArt("Breaking Benjamin", "Ember");
    const options = {
      apiKey: process.env.GENIUS_TOKEN,
      title: "", //metadata.common.album,
      artist: metadata.common.artist,
      optimizeQuery: true,
    };

    await getSong(options)
      .then((song) => {
        coverArt = song.albumArt;

        newTrack = {
          trackName: metadata.common.title,
          trackArtist: metadata.common.artist,
          trackAlbum: metadata.common.album,
          trackLength: metadata.format.duration,
          trackAlbumArt: coverArt,
          trackPath: fileDir,
        };
      })
      .catch((err) => {
        // if fetching album art fails, use local placeholder
        newTrack = {
          trackName: metadata.common.title,
          trackArtist: metadata.common.artist,
          trackAlbum: metadata.common.album,
          trackLength: metadata.format.duration,
          trackAlbumArt: "../public/images/placeholder_albumart.png",
          trackPath: fileDir,
        };
      });

    //print out to console
    console.log(newTrack);
  } catch (error) {
    console.error(error.message);
  }
}

async function scanDirectory(Directory) {
  FS.readdirSync(Directory).forEach((File) => {
    const absolutePath = Path.join(Directory, File);
    if (FS.statSync(absolutePath).isDirectory()) {
      return scanDirectory(absolutePath);
    }

    if (
      (getFileExtension(absolutePath) != "mp3") &
      (getFileExtension(absolutePath) != "m4a") &
      (getFileExtension(absolutePath) != "wav") &
      (getFileExtension(absolutePath) != "aiff") &
      (getFileExtension(absolutePath) != "ogg") &
      (getFileExtension(absolutePath) != "flac") &
      (getFileExtension(absolutePath) != "aac")
    ) {
      console.log("File not supported");
    } else {
      return files.push(absolutePath);
    }
  });
}

async function addToDataBase(dir) {
  const track = createTrackObject(dir);
}

scanDirectory(testDir);
console.log(files);
files.forEach((file) => addToDataBase(file));
