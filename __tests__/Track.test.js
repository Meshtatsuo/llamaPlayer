const Track = require("../Classes/Track");
const trackObj = {
    trackName: "Feed the Wolves",
    trackArtist: "Breaking Benjamin",
    trackAlbum: "Ember",
    trackLength: 5000,
    trackAlbumArt: "SomeReference",
    trackPath: "path"
  }

test("Creates a track object", () => {
  const track = new Track(trackObj);

  expect(track.name).toEqual("Feed the Wolves");
  expect(track.artist).toEqual("Breaking Benjamin");
  expect(track.album).toEqual("Ember");
  expect(track.duration).toEqual(5000);
  expect(track.albumArt).toEqual("SomeReference");
  expect(track.path).toEqual("path");
})