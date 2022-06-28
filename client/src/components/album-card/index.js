import React from "react";

// placeholder image
import albumCover from "../../assets/images/placeholder_albumart.png";

function AlbumCard(album) {
  // const { title, artwork } = album;

  return (
    <div className="card">
      <div className="card-pic">
        <img src={albumCover} alt="breaking-benjamin group" />
      </div>
      <div className="card-info">
        <h3>Dark Before Dawn</h3>
        <h4>Breaking Benjamin</h4>
      </div>
    </div>
  );
}

export default AlbumCard;
