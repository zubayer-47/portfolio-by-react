import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header({ className }) {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick((state) => (state ? false : true));
  };
  useEffect(() => {
    
  }, [click]);
  return (
    <>
      <div className="block md:hidden cursor-pointer" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <header
        className={`${className} overflow-auto md:block hidden`}
        id="hidden"
      >
        <nav>
          <img
            className="mx-auto w-48 rounded-full"
            src="https://avatars.githubusercontent.com/u/77219792?s=400&u=18041097fc22220cbe554d91f52e06b2b7b570ae&v=4"
            alt="profile"
            title="Zubayer's Profile"
          />
          <h1 className="text-3xl my-4 font-playFair font-medium text-gray-200">
            A B M Zubayer
          </h1>
          <p className="text-gray-400">zubayerabm47@gmail.com</p>

          <ul className="leading-8 my-5">
            <li>
              <NavLink className="hover:text-gray-300" to="/">
                INTRODUCTION
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-gray-300" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-gray-300" to="/timeline">
                TIMELINE
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-gray-300 text-xl"
                to={{ pathname: "https://facebook.com/zubayerDev" }}
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-gray-300 text-xl"
                to={{
                  pathname: "https://twitter.com/zubayerDev",
                }}
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                className="hover:text-gray-300 text-xl"
                to={{
                  pathname: "https://github.com/zubayer-47",
                }}
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </NavLink>
            </li>
          </ul>

          <p className="text-gray-400">
            Made by
            <a
              className="hover:text-gray-500 ml-1"
              href="https://www.github.com/zubayer-47"
              target="_blank"
              rel="noreferrer"
            >
              ZubayerJS
            </a>
            .
          </p>
          <p className="text-gray-400 mb">Good News Coming Soon!</p>
        </nav>
      </header>
    </>
  );
}
