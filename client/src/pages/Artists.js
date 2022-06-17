import React from "react";

// components
import ArtistCard from "../components/artist-card";

function ArtistsPage() {
  return (
    <div className="content">
      <h1>Artists</h1>
      <hr />
      <div className="panel">
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
    </div>
  );
}

export default ArtistsPage;
