import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header/Header";
import Intro from './Intro'
import About from './About'
import Timeline from './Timeline'

export default function Home() {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-12">
        <Header />
        <div className=" h-screen bg-red-400 col-span-8 xl:col-span-9">
          <Route exact component={<Intro />} path='/introduction' />
          <Route component={<About />} path='/about' />
          <Route component={<Timeline />} path='timeline' />
        </div>
      </div>
    </BrowserRouter>
  );
}
