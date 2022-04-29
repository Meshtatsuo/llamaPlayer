const { Artist } = require("../models");

const artistData = [
  {
    artist_name: "Bob Marley",
  },
  {
    artist_name: "A Day to Remember",
  },
];

const seedArtists = () => Artist.bulkCreate(artistData);

module.exports = seedArtists;
