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

function getAlbums(artist) {}

async function createTrack(fileDir) {
  newTrack = {};
  let trackArtist;
  let trackAlbum;

  //parse metadata
  const metadata = await mm.parseFile(fileDir);
  console.log(metadata.common.artist);

  // check for artist in database, if not, create.
  db.artistExists(metadata.common.artist).then((result) => {
    if (!result) {
      console.log("Artist creation failed, skipping track. . .");
      return;
    }
    trackArtist = result;
  });

  console.log("TRACK ARTIST: " + trackArtist);

  db.albumExists(metadata.common.album).then((result) => {
    if (!result) {
      console.log(
        "ERROR: received undefined instead of an album ID. Skipping track creation..."
      );
      return;
    }
    trackAlbum = result;
  });

  console.log("TRACK ALBUM: " + trackAlbum);

  const albumArt = "";

  newTrack = {
    title: metadata.common.title,
    album_id: trackAlbum,
    artist_id: trackArtist,
    album_art: "",
    duration: metadata.common.duration,
    path: fileDir,
  };

  const success = await db.createTrack(newTrack);

  if (!success) {
    console.log("Creation failed");
  }

  console.log("Track added to database!");
}

module.exports = {
  createTrack,
};
