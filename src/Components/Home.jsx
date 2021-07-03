import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header/Header";
import Intro from './Intro'
import About from './About'
import Timeline from "./Timeline";

export default function Home() {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-12">
        <Header className="max-w-full col-span-4 xl:col-span-3 h-screen bg-gray-900 text-white text-center py-5 md:block hidden" />
        <div className="h-screen col-span-8 xl:col-span-9 col-span-full">
          <Route exact component={Intro} path="/" />
          <Route component={About} path="/about" />
          <Route component={Timeline} path="/timeline" />
        </div>
      </div>
    </BrowserRouter>
  );
}
