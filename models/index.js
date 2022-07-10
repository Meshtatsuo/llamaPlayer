const Artist = require("./Artist");
const Album = require("./Album");
const Track = require("./Track");
const Playlist = require("./Playlist");

// Associations

Track.belongsTo(Album, {
  foreignKey: "album_id",
});

Track.belongsTo(Artist, {
  foreignKey: "artist_id",
});

Album.belongsTo(Artist, {
  foreignKey: "artist_id",
});

Album.hasMany(Track, {
  foreignKey: "album_id",
});

Artist.hasMany(Album, {
  foreignKey: "artist_id",
});

Artist.hasMany(Track, {
  foreignKey: "artist_id",
});

Playlist.hasMany(Track, {
  foreignKey: "track_id",
});

module.exports = { Track, Album, Artist };
