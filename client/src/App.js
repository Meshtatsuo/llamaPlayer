import { browserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

// import components
import AlbumCard from "./components/album-card";
import ArtistCard from "./components/artist-card";
import SettingsModal from "./components/settings-modal";
import SideNav from "./components/side-nav";
import TrackList from "./components/track-list";
import Transport from "./components/transport";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Transport />
    </div>
  );
}

export default App;
