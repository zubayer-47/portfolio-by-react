import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from '../ClassNames/ClassNames';

export default function Header({
  handleClick,
  navbarOpen,
}) {
  const extendedClasses = Classes(navbarOpen);
  
  return (
    <>
      <header className={extendedClasses.headerClass}>
        <nav>
          <img
            className="mx-auto w-40 h-40 rounded-full object-cover"
            src="https://ik.imagekit.io/r9uwfjdnxbi2/zubayer_fhohUyiL7iPC.jpg"
            alt="profile"
            title="Zubayer's Profile"
          />
          <h1 className="text-3xl my-4 font-playFair font-medium text-gray-200">
            A B M Zubayer
          </h1>
          <p className="text-gray-400">zubayerjs.dev@gmail.com</p>

          <ul className="leading-8 my-5">
            <li>
              <NavLink
                onClick={handleClick}
                className="hover:text-gray-300"
                style={isActive => ({ color: isActive && 'red' })}
                to="/"
              >
                INTRODUCTION
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                className="hover:text-gray-300"
style={isActive => ({ color: isActive && 'red' })}
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                className="hover:text-gray-300"
style={isActive => ({ color: isActive && 'red' })}
                to="/timeline"
              >
                TIMELINE
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                className="hover:text-gray-300 text-xl"
                to={{ pathname: 'https://facebook.com/zubayerDev' }}
                target="_blank"
              >
                <i className="fab fa-facebook"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                className="hover:text-gray-300 text-xl"
                to={{
                  pathname: 'https://twitter.com/zubayerDev',
                }}
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={handleClick}
                className="hover:text-gray-300 text-xl"
                to={{
                  pathname: 'https://github.com/zubayer-47',
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
