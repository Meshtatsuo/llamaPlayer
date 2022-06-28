import React from "react";

function SettingsPage() {
  return (
    <div className="content">
      <h1>Settings</h1>
      <br />
      <div id="library-settings">
        <h2>Library</h2>
        <div id="lib-select">
          <label for="lib-dir">Library Location: </label>
          <input type="file" />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
