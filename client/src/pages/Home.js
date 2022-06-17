import React from "react";

import AlbumCard from "../components/album-card";
import ArtistCard from "../components/artist-card";

function HomePage() {
  return (
    <div className="content">
      <h1>Welcome</h1>
      <hr />
      <div className="panel">
        <h2>Try Starting Here</h2>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
      <div className="panel">
        <h2>Try Starting Here</h2>
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </div>
    </div>
  );
}

export default HomePage;
