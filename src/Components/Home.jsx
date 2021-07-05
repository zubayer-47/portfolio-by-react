import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Header from "./Header/Header";
import Intro from "./Intro";
import Timeline from "./Timeline";

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
        <div className="bg-gray-900 h-screen w-full select-none flex justify-center items-center text-white ">
          <div className="my-4 w-4/6 mx-auto bg-gray-800 h-8 rounded-full flex justify-between px-5 items-center animate-pulse">
            <span className="ring-2 ring-red-400 w-4 h-4 bg-gray-800 rounded-full"></span>
            <div className="flex justify-center items-center gap-3">
              <span className="flex ring-2 ring-green-400 w-4 h-4 bg-gray-800 rounded-full"></span>
              <span className="ring-2 ring-green-400 w-4 h-4 bg-gray-800 rounded-full"></span>
              <span className="ring-2 ring-green-400 w-4 h-4 bg-gray-800 rounded-full"></span>
            </div>
            <span className="ring-2 ring-red-400 w-4 h-4 bg-gray-800 rounded-full"></span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12">
          <Header
            navbarOpen={navbarOpen}
            setNavbarOpen={setNavbarOpen}
            handleClick={handleClick}
          />

          <div
            className={`h-auto md:col-span-8 xl:col-span-9 2xl:col-span-10 col-span-full overflow-auto`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-8 w-10 m-2 block col-start-0 md:hidden bg-transparent rounded-sm focus:ring-8 select-none cursor-pointer`}
              onClick={handleClick}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <Route exact component={Intro} path="/" />
            <Route component={About} path="/about" />
            <Route component={Timeline} path="/timeline" />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}
