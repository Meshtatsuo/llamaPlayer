import React from "react";

// Placeholder Image

// placeholder image
import albumCover from "../../assets/images/placeholder_albumart.png";
function ArtistCard(props) {
  // { artistName, artistPic } = props;

  return (
    <div className="card">
      <div className="card-pic">
        <img src={albumCover} alt="breaking-benjamin group" />
      </div>
      <div className="card-info">
        <h3>Breaking Benjamin</h3>
      </div>
    </div>
  );
}

export default ArtistCard;
