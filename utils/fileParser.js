// File parser
const mm = require("music-metadata");
const { getLyrics, getSong } = require("genius-lyrics-api");
const db = require("./db");

const Path = require("path");
const FS = require("fs");
const util = require("util");
const { getFileExtension } = require("../helpers/fileExtensions");

let files = [];
let newTrack = {};

require("dotenv").config();

const testDir = "G:/Music/Music";

function validateTrackObject(track) {
  let validatedTrack = track;
  if (validatedTrack.trackName == undefined) {
    validatedTrack.trackName = "Unknown Track";
  }

  if (
    validatedTrack.trackArtist === "" ||
    validatedTrack.trackArtist == undefined
  ) {
    validatedTrack.trackArtist = "Unknown Artist";
  }

  if (
    validatedTrack.trackAlbum === "" ||
    validatedTrack.trackAlbum == undefined
  ) {
    validatedTrack.trackAlbum = "Unknown Album";
  }

  if (
    validatedTrack.trackLength == null ||
    validatedTrack.trackLength == undefined
  ) {
    validatedTrack.trackLength = 0;
  }

  if (
    validatedTrack.trackAlbumArt === "" ||
    validatedTrack.trackAlbumArt == undefined
  ) {
    validatedTrack.trackAlbumArt = "./public/images/placeholder_albumart.png";
  }

  if (
    validatedTrack.trackPath === "" ||
    validatedTrack.trackPath == undefined
  ) {
    console.log("Error in this track's path. Skipping file");
    return false;
  }

  return validatedTrack;
}

async function createTrackObject(fileDir) {
  newTrack = {};
  try {
    // parse metadata from file
    const metadata = await mm.parseFile(fileDir);
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
        return;
      })
      .catch((err) => {
        // if fetching album art fails, use local placeholder
        newTrack = {
          trackName: metadata.common.title,
          trackArtist: metadata.common.artist,
          trackAlbum: metadata.common.album,
          trackLength: metadata.format.duration,
          trackAlbumArt: "./public/images/placeholder_albumart.png",
          trackPath: fileDir,
        };
      });
    return;
  } catch (error) {
    console.error(error);
    return;
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

function addToDataBase(dir) {
  let result;
  createTrackObject(dir);
  validateTrackObject(newTrack);
  console.log(newTrack);
  // validate artist, or create new
  newTrack.trackArtist = db.createArtist(newTrack.trackArtist);

  // validate album, or create new
  newTrack.trackAlbum = db.createAlbum(newTrack.trackAlbum);

  // Once album and artist are validated, create track
  console.log(newTrack);
  result = db.createTrack(newTrack);
  if (!result) {
    console.log("Failed to create track");
  } else console.log("track created!");
}

async function addLibrary(dir) {
  await scanDirectory(testDir);

  console.log(files[33]);

  addToDataBase(files[33]);

  /*
  for (i = 0; i < files.length - 1; i++) {
    console.log(files[i]);
    await addToDataBase(files[i]);
  }
  */
  console.log("Finished syncing libraries");
}

module.exports = {
  createTrackObject,
  scanDirectory,
  addToDataBase,
  scanDirectory,
  addLibrary,
};
