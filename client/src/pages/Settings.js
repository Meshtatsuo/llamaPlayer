import axios from "axios";
import React, { useEffect, useState } from "react";

function SettingsPage() {
  const [crossfade, setCrossfade] = useState(false);
  const [currentLibrary, setCurrentLibrary] = useState("");

  let lib = "example/lib";
  let selectedDir = "";

  const updateFade = () => {
    console.log("before: ", crossfade);
    //toggle crossfade update
    if (crossfade === false) {
      console.log("yay");
      setCrossfade(true);
    } else {
      setCrossfade(false);
    }
    console.log(crossfade);
  };

  const updateDirectory = (e) => {
    e.preventDefault();
    let newDir = e.target.files[0].webkitRelativePath;
    const path = newDir.split("/")[0];
    setCurrentLibrary(path + "/");

    axios.get("/settings").then((response) => {
      console.log("response happened");
    });
  };

  useEffect(() => {}, [selectedDir]);

  return (
    <div className="content">
      <h1>Settings</h1>
      <hr />
      <div id="library-settings" className="settings-panel">
        <h2>Library</h2>
        <div id="lib-display" className="settings-option">
          <p>
            Current Library: <span>{currentLibrary}</span>
          </p>
        </div>
        <div id="lib-select" className="settings-option">
          <label htmlFor="lib-dir">Library Location: </label>
          <input
            directory=""
            webkitdirectory=""
            type="file"
            onChange={updateDirectory}
          />
        </div>
      </div>
      <div id="playback-settings" className="settings-panel">
        <div className="settings-option">
          <h2>Playback</h2>
          <div id="crossfade">
            <label htmlFor="crossfade-option">Crossfade Tracks: </label>
            <input
              type="checkbox"
              name="crossfade-option"
              onChange={updateFade}
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default SettingsPage;
