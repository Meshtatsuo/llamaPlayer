import React from "react";
import { Link } from "react-router-dom";
// import images
import settingsIcon from "../../assets/images/settings_icon.png";
import tracksIcon from "../../assets/images/tracks_icon.png";
import albumIcon from "../../assets/images/album_icon.png";
import artistIcon from "../../assets/images/artist_icon.png";
import homeIcon from "../../assets/images/home_icon.png";

function SideNav() {
  return (
    <div className="sidebar">
      <div className="block-column">
        <Link to="/">
          <button className="homebtn">
            <img src={homeIcon} alt="home-icon" />
            <h3>Home</h3>
          </button>
        </Link>
        <Link to="/artists">
          <button className="artistBtn">
            <img src={artistIcon} alt="artist-icon" />
            <h3>Artists</h3>
          </button>
        </Link>
        <Link to="/albums">
          <button className="albumbtn">
            <img src={albumIcon} alt="album-icon" />
            <h3>Albums</h3>
          </button>
        </Link>
        <Link to="/tracks">
          <button className="trackbtn">
            <img src={tracksIcon} alt="track-icon" />
            <h3>Tracks</h3>
          </button>
        </Link>
        <Link to="/settings">
          <button className="artistBtn">
            <img src={settingsIcon} alt="settings-icon" />
            <h3>Settings</h3>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SideNav;
