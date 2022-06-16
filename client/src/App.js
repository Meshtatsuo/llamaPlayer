import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

// import components
import AlbumCard from "./components/album-card";
import ArtistCard from "./components/artist-card";
import SettingsModal from "./components/settings-modal";
import SideNav from "./components/side-nav";
import TrackList from "./components/track-list";
import Transport from "./components/transport";

// import pages
import HomePage from "./pages/Home";
import ArtistsPage from "./pages/Artists";
import AlbumsPage from "./pages/Albums";
import TracksPage from "./pages/Tracks";
import SingleArtist from "./pages/SingleArtist";
import SettingsPage from "./pages/Settings";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <SideNav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/albums" element={<AlbumsPage />} />
            <Route path="/tracks" element={<TracksPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/artist/:id" element={<SingleArtist />} />
          </Routes>
        </Router>
        <Transport />
      </main>
    </div>
  );
}

export default App;
