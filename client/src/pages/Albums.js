import React from "react";

// loading image
import loader from "../assets/spinner.gif";

// components
import AlbumCard from "../components/album-card";
function AlbumsPage() {
  return (
    <div className="content">
      <h1>Albums</h1>
      <hr />
      <div className="panel">
        <img className="spinner" src={loader} alt="loading animation" />
      </div>
    </div>
  );
}

export default AlbumsPage;
