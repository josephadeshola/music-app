import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";
import images1 from "../assets/headphones-african-american-woman-s-portrait-isolated-blue-studio-background-multicolored-neon-light-beautiful-female-model-concept-human-emotions-facial-expression-sales-ad-fashion_155003.png";
const Home = () => {
  const [apidata, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  const [playVisible, setPlayVisible] = useState(true);
  const [pauseVisible, setPauseVisible] = useState(false);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-3 col-12 ">
        <div id="displaySong" className="col-12 text-center getflex col-md-12">
          {apidata &&
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
                  ></audio>
                  <div className="mt-3 px-5 px-md-0">
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
                      value="0"
                      id="progress-${index}"
                    />
                  </div>
                  <span class="d-flex px-5 mt-3 justify-content-around">
                    <div class="text-light bi bi-skip-backward-fill fs-1"></div>

                    <div className="border col-4 rounded d-flex mx-auto">
                      <div
                        style={{ cursor: "pointer" }}
                        className={`text-light bi position-relative text-center mx-auto bi-play-circle fs-1 ${
                          playVisible ? "visible" : "invisible"
                        }`}
                        onClick={() => {
                          const audio = document.getElementById(
                            `audio-player-${index}`
                          );
                          audio.play();
                          setPlayVisible(false);
                          setPauseVisible(true);
                        }}
                      ></div>
                      <div
                        className={`text-light bi ms-2 position-absolute text-center mx-auto  bi-pause-circle fs-1 ${
                          pauseVisible ? "visible" : "invisible"
                        }`}
                        onClick={() => {
                          const audio = document.getElementById(
                            `audio-player-${index}`
                          );
                          audio.pause();
                          setPlayVisible(true);
                          setPauseVisible(false);
                        }}
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
            ))}
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className='content-item'>
            <div className='music-content'>
              <img src="" alt="" />
            </div>
            <div className='music-content'>
              <img src="" alt="" />
            </div>
            <div className='music-content'>
              <img src="" alt="" />
            </div>
            <div className='music-content'>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
