import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Header from './Header/Header';
import Intro from './Intro';
import Timeline from './Timeline';

function MobileManu({ navbarOpen, handleClick }) {
  return (
    <div className="grid grid-cols-12">
      <Header
        navbarOpen={navbarOpen}
        handleClick={handleClick}
      />

      <div className="routeContainer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
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
  );
}

export default MobileManu;
