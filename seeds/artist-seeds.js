const { Artist } = require("../models");

const artistData = [
  {
    artist_name: "Unknown Artist",
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
