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

function App() {
  return (
    <div className="App">
      <main>
        <SideNav />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/artists" element={<ArtistsPage />} />
            <Route path="/albums" element={<ArtistsPage />} />
            <Route path="/tracks" element={<ArtistsPage />} />
            <Route path="/artist/:id" element={<ArtistsPage />} />
          </Routes>
        </Router>
        <Transport />
      </main>
    </div>
  );
}

export default App;
