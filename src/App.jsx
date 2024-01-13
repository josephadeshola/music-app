import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";

function App() {
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{isloading ? <Loading /> : <><Navbar /></>}</div>;
}

export default App;
