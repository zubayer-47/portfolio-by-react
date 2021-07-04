import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./About";
import Header from "./Header/Header";
import Intro from "./Intro";
import Timeline from "./Timeline";

export default function Home() {
  const [navbarOpen, setNavbarOpen] = useState(true);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
