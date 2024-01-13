import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [apidata, setData] = useState(null);
  const [playbackState, setPlaybackState] = useState({});
  const [progress, setProgress] = useState({});
  const navigate = useNavigate();
  const fetchData = () => {
    let endPoint = "https://robo-music-api.onrender.com/music/my-api";
    axios
      .get(endPoint)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const gotoPlayList = (selectedSong) => {
    navigate("/playlist", { state: { selectedSong } });
  };
  const handlePlayPause = (index) => {
    const audio = document.getElementById(`audio-player-${index}`);
    const newPlaybackState = {};
    // Pause all other audio elements
    Object.keys(playbackState).forEach((key) => {
      const otherAudio = document.getElementById(`audio-player-${key}`);
      otherAudio.pause();
      newPlaybackState[key] = "paused";
    });
    if (playbackState[index] === "playing") {
      audio.pause();
      newPlaybackState[index] = "paused";
    } else {
      audio.play();
      newPlaybackState[index] = "playing";
    }
    setPlaybackState(newPlaybackState);
  };

  const handleTimeUpdate = (index) => {
    const audio = document.getElementById(`audio-player-${index}`);
    const progressValue = (audio.currentTime / audio.duration) * 100;
    setProgress((prevProgress) => ({
      ...prevProgress,
      [index]: progressValue,
    }));
  };
  const handleSeekForward = (index) => {
    const audio = document.getElementById(`audio-player-${index}`);
    audio.currentTime += 10;
  };

  const handleSeekBackward = (index) => {
    const audio = document.getElementById(`audio-player-${index}`);
    audio.currentTime -= 10;
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="mt-3 col-12 ">
        <div id="displaySong" className="col-12 text-center getflex col-md-12">
          {apidata &&
            apidata.length > 0 &&
            apidata.map((eachData, index) => (
              <>
                <div class="shadow-color col-md-10 col-12 mx-auto py-4 mb-4">
                  <div class="music-container  mx-auto  py-2 text-center">
                    <img
                      style={{ cursor: "pointer" }}
                      className="col-4"
                      src={eachData.songImage}
                      class="music-img"
                      alt=""
                      onClick={() => gotoPlayList(eachData)}
                    />
                  </div>
                  <audio
                    id={`audio-player-${index}`}
                    src={eachData.songUrl}
                    className="audio-element"
                    onTimeUpdate={() => handleTimeUpdate(index)}
                  ></audio>
                  <div className="mt-3 ">
                    <b class="artist-name mt-5 text-center text-light">
                      {eachData.artistName}
                    </b>
                    <br />
                    <h5 class="song-name text-center text-light fw-bold">
                      {eachData.albumName}
                    </h5>
                    <h4>
                      <b style={{ color: "#fd4414" }}>({eachData.songTitle})</b>
                    </h4>
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
                        value={progress[index] || 0}
                        id={`progress-${index}`}
                      />
                    </div>
                    <span class="d-flex px-5 mt-3 justify-content-around">
                      <div
                        class="text-light bi bi-skip-backward-fill fs-1"
                        onClick={() => handleSeekBackward(index)}
                      ></div>
                      <div className="col-4 rounded d-flex mx-auto">
                        <div
                          style={{ cursor: "pointer" }}
                          className={`text-light bi position-relative text-center mx-auto bi-${
                            playbackState[index] === "playing"
                              ? "pause"
                              : "play"
                          }-circle fs-1  `}
                          onClick={() => handlePlayPause(index)}
                        ></div>
                      </div>

                      <div
                        class="text-light bi bi-fast-forward-fill fs-1"
                        onClick={() => handleSeekForward(index)}
                      ></div>
                    </span>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
