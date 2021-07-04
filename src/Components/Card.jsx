import React from "react";
import assets1 from "./img/assets-1.png";
// import assets2 from './img/assets-2.png'

export default function Card({ title, desc }) {
  return (
    <div className="p-5 text-center rounded-md shadow-lg hover:shadow-md border-gray-900 border-b-4 lg:col-span-4">
      <img src={assets1} className="w-32 h-32 mx-auto rounded-full my-3" alt="" />

      <h1 className="mb-5 uppercase">{title}</h1>
      <p className="capitalize leading-7">{desc}</p>
    </div>
  );
}
