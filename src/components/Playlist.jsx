import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./playlist.css";
const Playlist = () => {
  const location = useLocation();
  const selectedSong = location.state?.selectedSong;
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    // Handle time update logic here
    const audio = document.getElementById("audio-player");
    const progressValue = (audio.currentTime / audio.duration) * 100;
    setProgress(progressValue);
  };
  const handlePlayPause = () => {
    const audio = document.getElementById("audio-player");

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleSeekForward = (index) => {
    const audio = document.getElementById(`audio-player`);
    audio.currentTime += 10;
  };

  const handleSeekBackward = (index) => {
    const audio = document.getElementById(`audio-player`);
    audio.currentTime -= 10;
  };

  return (
    <div className="d-md-flex justify-content-center">
      <div className="text-light">
        <Link
          to={"/"}
          style={{ color: " #ed360d" }}
          class="bi fs-1 px-3 bi-arrow-left-circle"
        ></Link>
      </div>
      <div className="containerPlay container">
        <div className="mx-auto text-center shadow border py-5 py-md-2 rounded col-md-4 col-12  justify-content-center">
          <h4 className="text-light text-center fw-bold">
            PLAY <span style={{ color: " #ed360d" }}>-MUSIC</span>
          </h4>
          {selectedSong && (
            <>
              <div>
                <img
                  className="image-style col-9 rounded shadow col-md-6"
                  src={selectedSong.songImage}
                  alt=""
                />
              </div>
              <audio
                id={`audio-player`}
                src={selectedSong.songUrl}
                className="audio-element"
                onTimeUpdate={handleTimeUpdate}
              ></audio>
              <div className="mt-2">
                <b class="artist-name mt-5 text-center text-light">
                  {selectedSong.artistName}
                </b>
                <br />
                <h5 class="song-name text-center text-light fw-bold">
                  {selectedSong.albumName}
                </h5>
                <h4>
                  <b style={{ color: "#fd4414" }}>({selectedSong.songTitle})</b>
                </h4>
                <div className="px-md-5 px-5 ">
                  <h5 class="song-name text-center text-light fw-bold"></h5>
                  <span class="fs-5 mt-4 d-flex px-4 justify-content-between">
                    <div class="text-light bi-heart"></div>
                    <div class="text-light bi-card-checklist"></div>
                    <div class="text-light bi-cloud-download"></div>
                    <div class="text-light bi-share"></div>
                  </span>
                  <div class="text-center">
                    <input
                      type="range"
                      class="mx-auto mt-4 w-75"
                      value={progress}
                      id="progress"
                    />
                  </div>
                  <span class="d-flex px-5 mt-3 justify-content-around">
                    <div
                      class="text-light bi bi-skip-backward-fill fs-1"
                      onClick={handleSeekBackward}
                    ></div>
                    <div
                      class={`text-light bi bi-${
                        isPlaying ? "pause" : "play"
                      }-circle fs-1`}
                      onClick={handlePlayPause}
                    ></div>
                    <div
                      class="text-light bi bi-fast-forward-fill fs-1"
                      onClick={handleSeekForward}
                    ></div>
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
