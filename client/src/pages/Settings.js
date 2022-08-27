import React, { useEffect, useState } from "react";

function SettingsPage() {
  const [crossfade, setCrossfade] = useState(false);
  let selectedDir;
  let lib = "example/lib";
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
    //TODO: Parse the path prefix to root folder so we can append it in the loop below

    selectedDir = Object.values(e.target.files);
    let fileList = [];
    selectedDir.forEach((file) => {
      //TODO: Append path prefix to creat full directory path
      fileList.push(file.webkitRelativePath);
    });

    console.log(fileList);
  };

  useEffect(() => {
    console.log("effect");
  }, [selectedDir]);

  return (
    <div className="content">
      <h1>Settings</h1>
      <hr />
      <div id="library-settings" className="settings-panel">
        <h2>Library</h2>
        <div id="lib-display" className="settings-option">
          <p>
            Current Library: <span>{lib}</span>
          </p>
        </div>
        <div id="lib-select" className="settings-option">
          <label for="lib-dir">Library Location: </label>
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
            <label for="crossfade-option">Crossfade Tracks: </label>
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
