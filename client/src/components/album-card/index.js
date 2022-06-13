import React from "react";

function AlbumCard(album) {
  // const { title, artwork } = album;

  return (
    <div>
      <div className="card">
        <div className="card-pic">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/9/92/Dark_Before_Dawn_album_cover.jpg"
            alt="breaking-benjamin group"
          />
        </div>
        <div className="card-info">
          <h3>Dark Before Dawn</h3>
          <h4>Breaking Benjamin</h4>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
