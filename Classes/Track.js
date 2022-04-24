class Track {
  constructor(trackObject) {
    this.name = trackObject.trackName;
    this.artist = trackObject.trackArtist;
    this.album = trackObject.trackAlbum;
    this.duration = trackObject.trackLength;
    this.albumArt = trackObject.trackAlbumArt;
    this.path = trackObject.trackPath;
  }

  getTrackName() {
    return this.trackName;
  }

  getTrackArtist() {
    return this.trackArtist;
  }

  getTrackAlbum() {
    return this.trackAlbum;
  }

  getTrackAlbumArt() {
    return this.trackAlbumArt;
  }

  getTrackLength() {
    return this.trackLength;
  }
}

module.exports = Track;
