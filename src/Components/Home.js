import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loader from './Loader';
import MobileManu from './MobileManu';

function Home() {
  const [navbarOpen, setNavbarOpen] = useState(true);
  const [loader, setLoader] = useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <BrowserRouter>
      {loader ? (
        <Loader />
      ) : (
        <MobileManu
          navbarOpen={navbarOpen}
          handleClick={handleClick}
        />
      )}
    </BrowserRouter>
  );
}

export default Home;
