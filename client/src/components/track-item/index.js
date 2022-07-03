import React from "react";

function TrackItem(props) {
  // const {tracks} = props

  return (
    <>
      <li className="track-item">
        <p className="track-col">Example track Name</p>
        <p className="track-col">Example track Artist</p>
        <p className="track-col">Example track Album</p>
      </li>
    </>
  );
}

export default TrackItem;
