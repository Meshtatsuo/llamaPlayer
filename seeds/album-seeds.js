const { Album } = require("../models");

const albumData = [
  {
    title: "Unknown Album",
    artist_id: 1,
  },
];

const seedAlbums = () => Album.bulkCreate(albumData);

module.exports = seedAlbums;
