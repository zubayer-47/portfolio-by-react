import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Loader";
import MobileManu from "./MobileManu";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <BrowserRouter>
      {loader ? (
        <Loader />
      ) : (
        <MobileManu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} handleClick={handleClick} />
      )}
    </BrowserRouter>
  );
}
