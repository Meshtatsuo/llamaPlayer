const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");
const { Album, Artist, Track } = require("../models");
const { contextIsolated } = require("process");

// checks db for existing artist
async function createArtist(artistName) {
  return new Promise((resolve) => {
    // check if artist exists.
    Artist.findOne({
      where: { artist_name: artistName },
    })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          Artist.create({
            artist_name: artistName,
          })
            .then((dbArtistData) => {
              if (!dbArtistData) {
                console.log("No artist created");
                resolve(false);
              }
              console.log("Artist created!");
              resolve(dbArtistData);
            })
            .catch((err) => {
              console.log("error adding artist to database: " + err);
              resolve(false);
            });
        }
        resolve(dbArtistData);
      })
      .catch((err) => {
        console.log("failed to look up in database: ", err);
      });
  });
}
/*
// creates a new artist
async function artistExists(artistName) {
  return new Promise((resolve) => {});
}
*/

async function createAlbum(artistId, albumName) {
  return new Promise((resolve) => {
    Album.findOne({
      where: { title: albumName },
    })
      .then((dbAlbumData) => {
        if (!dbAlbumData) {
          console.log("Album not found. Creating...");
          Album.create({
            title: albumName,
            artist_id: artistId,
          })
            .then((dbAlbumData) => {
              if (!dbAlbumData) {
                console.log("Album creation failed.");
                resolve(false);
              }
              resolve(dbAlbumData);
            })
            .catch((err) => resolve(err));
        }
        resolve(dbAlbumData);
      })
      .catch((err) => {
        console.log("ERROR: " + err);
        resolve(err);
      });
  });
}

//function createAlbum(artistName, albumName) {}
async function albumExists(artistName, albumName) {
  return new Promise((resolve) => {
    Album.findOne({
      where: { title: albumName },
    })
      .then((dbAlbumData) => {
        if (!dbAlbumData) {
          console.log("Album not found. Creating...");
          createAlbum(artistName, albumName);
        }
        resolve(dbAlbumData.dataValues.id);
      })
      .catch((err) => {
        console.log("ERROR: " + err);
        resolve(false);
      });
  });
}

function createTrack(trackObj) {
  return new Promise((resolve) => {
    console.log(trackObj);
    Track.create({
      title: trackObj.title,
      album_id: trackObj.album_id,
      artist_id: trackObj.artist_id,
      album_art: trackObj.albumArt,
      duration: trackObj.duration,
      path: trackObj.path,
    })
      .then((dbTrackData) => {
        if (!dbTrackData) {
          console.log("Error: Failed to create track");
          resolve(false);
        }
        resolve(dbTrackData);
      })
      .catch((err) => {
        console.log(err);
        resolve(false);
      });
  });
}

module.exports = {
  createAlbum,
  createArtist,
  createTrack,
};
