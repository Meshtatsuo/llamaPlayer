import axios from "axios";
import React, { useEffect, useState } from "react";

// components
import ArtistCard from "../components/artist-card";

function ArtistsPage() {
  const [artistData, setArtistData] = useState([]);

  // TODO: FIX GET ROUTE TO RETRIEVE ARTIST DATA
  function getArtists() {
    axios
      .get("/api/artists/", (response) => {
        if (!response) {
          console.log(response);
        } else {
          return response;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const serverData = getArtists();

  useEffect(() => {
    if (serverData) {
      setArtistData(serverData);
      console.log(artistData);
    } else {
      console.log("No Data");
    }
  }, [serverData]);

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
