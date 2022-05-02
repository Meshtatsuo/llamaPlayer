const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");
const { Album, Artist, Track } = require("../models");

// checks db for existing album
function createAlbum(albumName) {
  Album.findOne({ where: { title: albumName } }).then((result) => {
    if (!result) {
      return false;
    }
    let artistId;
    Artist.findOne({
      where: {
        artist_name: artistName,
      },
      attributes: "id",
    })
      .then((dbArtistData) => {
        if (!dbArtistData) {
          createArtist(artistName);
          createAlbum(artistName, albumName);
        }
        artistId = dbArtistData.id;
      })
      .catch((err) => {
        console.log("Fatal Error: Failed to add new artist to database!");
        console.log(err);
        return false;
      });

    Album.create({
      title: albumName,
      artist_id: artistId,
    })
      .then((dbAlbumData) => {
        console.log(albumName + "album added to the database");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        return false;
      });
    // if album exists return its ID to be used as the foreign key id
    return result.dataValues.id;
  });
}

// checks db for existing artist
function createArtist(artistName) {
  Artist.findOne({
    where: {
      artist_name: artistName,
    },
    attributes: ["id", "artist_name"],
  })
    .then((result) => {
      if (!result) {
        console.log("No artist found");
        return false;
      } else {
        Artist.create({
          artist_name: artistName,
        })
          .then((result) => {
            if (!result) {
              console.log("Failed to create artist: " + artistName);
              return false;
            }
            console.log(artistName + " added to database!");
            return result.dataValues.id;
          })
          .catch((err) => {
            console.log(err);
            return false;
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

// creates a new artist
//function createArtist(artistName) {}

//function createAlbum(artistName, albumName) {}

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
  createArtist,
  createAlbum,
  createTrack,
};
