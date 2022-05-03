const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");
const { Album, Artist, Track } = require("../models");

// checks db for existing artist
function createArtist(artistName) {
  Artist.create({
    artist_name: artistName,
  })
    .then((dbArtistData) => {
      if (!dbArtistData) {
        console.log("No artist created");
        return false;
      }
      console.log("Artist created!");
      return dbArtistData;
    })
    .catch((err) => {
      console.log("error adding artist to database: " + err);
      return false;
    });
}

// creates a new artist
async function artistExists(artistName) {
  Artist.findOne({
    where: { artist_name: artistName },
  })
    .then((dbArtistData) => {
      if (!dbArtistData) {
        console.log("Not found");
        createArtist(artistName);
      }
      return dbArtistData.dataValues.id;
    })
    .catch((err) => {
      console.log("failed to look up in dtabase: ", err);
      return false;
    });
}

function createAlbum(artistName, albumName) {
  const artistId = artistExists(artistName);
  if (!artistId) {
    console.log("Unable to create artist. skipping album creation...");
    return false;
  }
  Album.create({
    title: albumName,
    artist_id: artistId,
  })
    .then((dbAlbumData) => {
      if (!dbAlbumData) {
        console.log("Error creating album. Skipping. . .");
        return false;
      }
      return dbAlbumData.dataValues.id;
    })
    .catch((err) => {
      console.log("ERROR: album creation failed. Exiting..." + err);
      return false;
    });
}

//function createAlbum(artistName, albumName) {}
async function albumExists(artistName, albumName) {
  Album.findOne({
    where: { title: albumName },
  })
    .then((dbAlbumData) => {
      if (!dbAlbumData) {
        console.log("Album not found. Creating...");
        createAlbum(artistName, albumName);
      }
      return dbAlbumData.id;
    })
    .catch((err) => {
      console.log("ERROR: " + err);
      return false;
    });
}

function createTrack(trackObj) {
  Track.create({
    title: trackObj.trackTitle,
    album_id: trackObj.album_id,
    artist_id: trackObj.artist_id,
    album_art: trackObj.albumArt,
    duration: trackObj.duration,
    path: trackObj.path,
  })
    .then((dbTrackData) => {
      if (!dbTrackData) {
        console.log("Error: Failed to create track");
        return false;
      }
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

module.exports = {
  artistExists,
  albumExists,
  createAlbum,
  createArtist,
  createTrack,
};
