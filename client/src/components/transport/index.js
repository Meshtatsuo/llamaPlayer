import React from "react";

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
  return (
    <div class="transport-container">
      <div class="transport">
        <div class="footer-left">
          <h1>Hello Left Side</h1>
        </div>

        <div class="footer-middle">
          <button>
            <img src={shuffleIcon} alt="shuffle-icon" />
          </button>
          <button>
            <image src={prevIcon} alt="previous-icon" />
          </button>
          <button>
            <image src={playIcon} alt="play-icon" />
          </button>
          <button>
            <image src={skipIcon} alt="skip-icon" />
          </button>
          <button>
            <image src={loopIcon} alt="loop-icon" />
          </button>
        </div>

        <div class="footer-right">
          <label for="vol-slider" name="vol-slider-label">
            <img src={volIcon} alt="volume-icon" />
          </label>
          <input
            type="range"
            min="1"
            max="100"
            value="75"
            class="slider"
            name="vol-slider"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Transport;
