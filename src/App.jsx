import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import Playlist from "./components/Playlist";
import Owlpage from "./components/Owlpage";

function App() {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Owlpage />}></Route>
            <Route path="/playlist" element={<Playlist />}></Route>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
