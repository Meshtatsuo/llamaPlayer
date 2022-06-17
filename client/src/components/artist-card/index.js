import React from "react";
import { Link } from "react-router-dom";
function ArtistCard(props) {
  // { artistName, artistPic } = props;

  return (
    <div className="card">
      <div className="card-pic">
        <img
          src="https://www.billboard.com/wp-content/uploads/stylus/102419-breaking_benjamin_617_409.jpg"
          alt="breaking-benjamin group"
        />
      </div>
      <div className="card-info">
        <h3>Breaking Benjamin</h3>
      </div>
    </div>
  );
}

export default ArtistCard;
