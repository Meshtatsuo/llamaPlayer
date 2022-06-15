import React, { useEffect, useState } from "react";

// transport images
import shuffleIcon from "../../assets/images/transport_icons/ShuffleIcon.png";
import prevIcon from "../../assets/images/transport_icons/RewindIcon.png";
import pauseIcon from "../../assets/images/transport_icons/PauseIcon.png";
import playIcon from "../../assets/images/transport_icons/PlayIcon.png";
import skipIcon from "../../assets/images/transport_icons/FastForwardIcon.png";
import loopIcon from "../../assets/images/transport_icons/RepeatIcon.png";
// vol slider images
import volIcon from "../../assets/images/transport_icons/VolumeIcon.svg";

function Transport() {
  const [volume, setVolume] = useState(1);

  function updateVolume(e) {
    const val = e.target.value;
    setVolume(val);
    console.log(e.target.value);
  }

  return (
    <div className="transport-container">
      <div className="transport">
        <div className="footer-left">
          <h4>Error Messages or Updates Here</h4>
        </div>

        <div className="footer-middle">
          <button>
            <img src={shuffleIcon} alt="shuffle-icon" />
          </button>
          <button>
            <img src={prevIcon} alt="previous-icon" />
          </button>
          <button>
            <img src={playIcon} alt="play-icon" />
          </button>
          <button>
            <img src={skipIcon} alt="skip-icon" />
          </button>
          <button>
            <img src={loopIcon} alt="loop-icon" />
          </button>
        </div>

        <div className="footer-right">
          <label name="vol-slider-label">
            <img src={volIcon} alt="volume-icon" />
          </label>
          <input
            type="range"
            min="0"
            max="1"
            step=".01"
            value={volume}
            className="slider"
            name="vol-slider"
            onChange={updateVolume}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Transport;
