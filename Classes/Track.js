class Track {
  constructor(trackObject) {
    const trackName = this.trackName;
    const trackArtist = this.trackArtist;
    const trackAlbum = this.trackAlbum;
    const trackLength = this.trackLength;
    const trackAlbumArt = this.trackAlbumArt;
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
