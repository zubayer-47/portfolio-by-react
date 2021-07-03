import React from "react";
import Header from './Header/Header'
import {BrowserRouter, Route} from 'react-router-dom'
// import Header from './Header/Header'

export default function Home() {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-12">
        <Header />
        <div className=" h-screen bg-red-400 col-span-8 xl:col-span-9">
          <h1>Hello</h1>
        </div>
      </div>
    </BrowserRouter>
  );
}
