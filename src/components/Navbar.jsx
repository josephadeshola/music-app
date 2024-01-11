import React from "react";
import "./style.css";
import Home from "./Home";

const Navbar = () => {
  return (
    <>
      <nav className="navbar shadow bg-dark px-md-5 py-md-1 py-3  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2 className="fw-bold px-3 text-light">
              <span className="same-color">Drc</span>
              <span>-play</span>
            </h2>
          </a>
          <div className="d-md-block d-none">
            <form className="d-flex offset-md-2" role="search">
              <input
                className="form-control width-50 me-2"
                type="search"
                placeholder="Search for artists, songs, albums!"
                aria-label="Search"
              />
              <div className="input-group flex-nowrap">
                <span
                  className="input-group-text same-color"
                  id="addon-wrapping"
                >
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </form>
          </div>
          <div className="d-md-none d-block">
            <form className="d-flex sharch-sm offset-md-2" role="search">
              <input
                className="form-control width-50 me-2"
                type="search"
                placeholder="Search for artists, songs, albums!"
                aria-label="Search"
              />
              <div className="input-group flex-nowrap">
                <span
                  className="input-group-text same-color"
                  id="addon-wrapping"
                >
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </form>
          </div>
          <span
            className="navbar-toggler-icon text-light rounded"
            style={{ backgroundColor: "#fd4414" }}
            type="button"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas"
          ></span>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title text-light fw-bold"
                id="offcanvasNavbarLabel"
              >
                BROWS
              </h5>
              <button
                type="button"
                className="btn-close bg-light rounded"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a
                    class="bi bi-house-door-fill gap-md-1 nav-link px-3 mt-1 fs-5  fw-bold"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-graph-up-arrow fw-bolder px-3 mt-3 fs-5"
                    href="#"
                  >
                    Trending
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-file-earmark-music-fill fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Top Song
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-music-note-list fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Playlist
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-people-fill fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Supporters
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-person-circle fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Account for you
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-file-earmark-plus-fill fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Recently Added
                  </a>
                </li>
                <h5 class="fw-bold px-3 mt-2 text-light">MY LIBRARY</h5>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-person-lines-fill fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Feed
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-plus fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Playlists
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link bi bi-upload fw-bold px-3 fs-5 mt-3 mt-3 fs-5"
                    href="#"
                  >
                    Uploads
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="front-img">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="mt-top d-md-flex">
                <div>
                  <h1
                    className="h1-font mt-5 col-md-8 col-10"
                    style={{ color: "#fd4414" }}
                  >
                    Immerse Yourself in Musical Bliss
                  </h1>
                  <h3 className="mt-5 mb-5 col-9" style={{ color: "#fd4414" }}>
                    Unleash your musical potential with Doc-Pay's seamless
                    payments.
                  </h3>
                </div>
                <div className="img-border">
                  <div className="mt-4  side-img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-md-5">
          <div className="row">
            <div className="col-sm-12 box-shadow-ful">
              <div className="text-light d-flex justify-content-between fs-2 py-3 px-2 bg-black fw-bolder">
                <div>
                  <span className="bi same-color bi-graph-up-arrow fw-bolder "></span>
                  Trending Songs
                  <span className="same-color font-10">
                    Submit to Trending & Playlists
                  </span>
                </div>
                <button className="btn text-light same-bg col-md-1 col-5 fw-bold px-3 fs-5">
                  Upload
                </button>
              </div>
              <Home />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
