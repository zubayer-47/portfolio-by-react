import React from "react";
import { NavLink } from "react-router-dom";
import HeroBg from '../img/zubayer.jpg'

export default function Header({
  className,
  handleClick,
  navbarOpen,
  setNavbarOpen,
}) {
  return (
    <>
      <header
        className={`max-w-full ${
          navbarOpen ? "col-span-4" : "col-span-12 h-screen"
        } md:col-span-4 xl:col-span-3 2xl:col-span-2 h-auto bg-gray-900 text-white text-center py-5 md:block overflow-auto ${
          !navbarOpen ? "grid" : "hidden"
        }`}
      >
        <nav>
          <img
            className="mx-auto w-40 h-40 rounded-full object-cover"
            src={HeroBg}
            alt="profile"
            title="Zubayer's Profile"
          />
          <h1 className="text-3xl my-4 font-playFair font-medium text-gray-200">
            A B M Zubayer
          </h1>
          <p className="text-gray-400">zubayerabm47@gmail.com</p>

          <ul className="leading-8 my-5">
            <li>
              <NavLink
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="hover:text-gray-300"
                to="/"
              >
                INTRODUCTION
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="hover:text-gray-300"
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="hover:text-gray-300"
                to="/timeline"
              >
                TIMELINE
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="hover:text-gray-300 text-xl"
                to={{ pathname: "https://facebook.com/zubayerDev" }}
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => setNavbarOpen(!navbarOpen)}
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
                onClick={() => setNavbarOpen(!navbarOpen)}
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
