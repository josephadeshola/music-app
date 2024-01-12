import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
const Home = () => {
  const [apidata, setData] = useState(null);
  const [playbackState, setPlaybackState] = useState({});
  const [progress, setProgress] = useState({});
  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredData, setFilteredData] = useState(null);

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

  const handlePlayPause = (index) => {
    const audio = document.getElementById(`audio-player-${index}`);
    if (playbackState[index] === "playing") {
      audio.pause();
      setPlaybackState((prevState) => ({
        ...prevState,
        [index]: "paused",
      }));
    } else {
      audio.play();
      setPlaybackState((prevState) => ({
        ...prevState,
        [index]: "playing",
      }));
    }
  };

  const handleTimeUpdate = (index) => {
    const audio = document.getElementById(`audio-player-${index}`);
    const progressValue = (audio.currentTime / audio.duration) * 100;
    setProgress((prevProgress) => ({
      ...prevProgress,
      [index]: progressValue,
    }));
  };
  // const handleSearch = (query) => {
  //   setSearchQuery(query);
  //   const filteredSongs = apidata.filter(
  //     (song) =>
  //       song.artistName.toLowerCase().includes(query.toLowerCase()) ||
  //       song.albumName.toLowerCase().includes(query.toLowerCase()) ||
  //       song.songTitle.toLowerCase().includes(query.toLowerCase())
  //   );
  //   // window.location.reload(()=>{})
  //   setFilteredData(filteredSongs);
  // };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="mt-3 col-12 ">
        {/* <div className="mb-3">
          <input
            type="text"
            placeholder="Search for a song..."
            // value={searchQuery}
            // onChange={(e) => handleSearch(e.target.value)}
          />
        </div> */}
        <div id="displaySong" className="col-12 text-center getflex col-md-12">
          {apidata && (
            apidata.map((eachData, index) => (
              <>
                <div class="shadow-color col-md-10 col-12 mx-auto py-4 mb-4">
                  <div class="music-container  mx-auto  py-2 text-center">
                    <img
                      className="col-4"
                      src={eachData.songImage}
                      class="music-img"
                      alt=""
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
                      <div class="text-light bi bi-skip-backward-fill fs-1"></div>

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

                      <div class="text-light bi bi-fast-forward-fill fs-1"></div>
                    </span>
                  </div>
                </div>
                {/* <div class="shadow col-12 mb-5">
                    <div class="music-container col-12 mt-5 py-4 text-center">
                      <img src={images1} class="music-img" alt="" />
                    </div>
                    <h5 class="artist-name mt-4 text-center text-light"></h5>
                    <audio
                      id="audio-player-${index}"
                      src="${eachSong.audio}"
                    ></audio>
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
                        value="0"
                        id="progress-${index}"
                      />
                    </div>
                    <span class="d-flex px-5 mt-3 justify-content-around">
                      <div class="text-light bi bi-skip-backward-fill fs-1"></div>
                      <div
                        class="text-light bi bi-play-circle fs-1"
                        id="play-btn-${index}"
                      ></div>
                      <div
                        class="text-light bi bi-pause-circle fs-1"
                        id="pause-btn-${index}"
                      ></div>
                      <div class="text-light bi bi-fast-forward-fill fs-1"></div>
                    </span>
                  </div>
                  <div class="shadow col-12 mb-5">
                    <div class="music-container col-12 mt-5 py-4 text-center">
                      <img src={images1} class="music-img" alt="" />
                    </div>
                    <h5 class="artist-name mt-4 text-center text-light"></h5>
                    <audio
                      id="audio-player-${index}"
                      src="${eachSong.audio}"
                    ></audio>
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
                        value="0"
                        id="progress-${index}"
                      />
                    </div>
                    <span class="d-flex px-5 mt-3 justify-content-around">
                      <div class="text-light bi bi-skip-backward-fill fs-1"></div>
                      <div
                        class="text-light bi bi-play-circle fs-1"
                        id="play-btn-${index}"
                      ></div>
                      <div
                        class="text-light bi bi-pause-circle fs-1"
                        id="pause-btn-${index}"
                      ></div>
                      <div class="text-light bi bi-fast-forward-fill fs-1"></div>
                    </span>
                  </div>
                  <div class="shadow col-12 mb-5">
                    <div class="music-container col-12 mt-5 py-4 text-center">
                      <img src={images1} class="music-img" alt="" />
                    </div>
                    <h5 class="artist-name mt-4 text-center text-light"></h5>
                    <audio
                      id="audio-player-${index}"
                      src="${eachSong.audio}"
                    ></audio>
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
                        value="0"
                        id="progress-${index}"
                      />
                    </div>
                    <span class="d-flex px-5 mt-3 justify-content-around">
                      <div class="text-light bi bi-skip-backward-fill fs-1"></div>
                      <div
                        class="text-light bi bi-play-circle fs-1"
                        id="play-btn-${index}"
                      ></div>
                      <div
                        class="text-light bi bi-pause-circle fs-1"
                        id="pause-btn-${index}"
                      ></div>
                      <div class="text-light bi bi-fast-forward-fill fs-1"></div>
                    </span>
                  </div> */}
              </>
            )))}
        </div>
      </div>
    </div>
  );
};

export default Home;
