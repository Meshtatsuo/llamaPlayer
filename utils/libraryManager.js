/* -----------------------------------------------------------
    LLAMA LIBRARY IMPORTER

    The library manager will periodically (default to on startup)
    scan through your selected libraries for new files and sort
    them appropriately. It will also be the location 
------------------------------------------------------------*/
// File parser
const mm = require("music-metadata");
const { getLyrics, getSong } = require("genius-lyrics-api");
const db = require("./db");

const Path = require("path");
const FS = require("fs");
const util = require("util");
const { getFileExtension } = require("../helpers/fileExtensions");

const testDir = "G:/Music/Music";
let files = [];

function getAlbums(artist) {}

async function createTrack(fileDir) {
  newTrack = {};
  let trackArtist;
  let trackAlbum;
  let length;

  //parse metadata
  const metadata = await mm.parseFile(fileDir);

  length = metadata.format.duration;

  // check for artist in database, if not, create.
  await db.createArtist(metadata.common.artist).then((result) => {
    if (!result) {
      console.log("Artist creation failed, skipping track. . .");
      return;
    }
    try {
      trackArtist = result.dataValues.id;
    } catch {
      trackArtist = 1;
    }
  });

  console.log("TRACK ARTIST: " + trackArtist);

  await db.createAlbum(trackArtist, metadata.common.album).then((result) => {
    if (!result) {
      console.log(
        "ERROR: received undefined instead of an album ID. Skipping track creation..."
      );
      return;
    }
    try {
      trackAlbum = result.dataValues.id;
    } catch {
      trackAlbum = 1;
    }
  });

  console.log("TRACK ALBUM: " + trackAlbum);

  const albumArt = "";

  newTrack = {
    title: metadata.common.title,
    album_id: trackAlbum,
    artist_id: trackArtist,
    album_art: "",
    duration: length,
    path: fileDir,
  };

  console.log(newTrack);

  const success = await db.createTrack(newTrack);

  if (!success) {
    console.log("Creation failed");
  }

  console.log("Track added to database!");
  console.log("===================================");
  console.log(success);
}

async function addLibrary(dir) {
  await scanDirectory(testDir);

  for (i = 0; i < files.length - 1; i++) {
    console.log(files[i]);
    await createTrack(files[i]);
    setTimeout((e) => {
      console.log("waiting...");
      return;
    }, 1000);
  }
  console.log("Finished syncing libraries");
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

module.exports = {
  addLibrary,
  addLibrary,
  createTrack,
};
