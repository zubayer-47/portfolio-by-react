import React from "react";
// import assets2 from './img/assets-2.png'

export default function Card({ title, desc, src }) {
  return (
    <div className="p-5 text-center rounded-md shadow-lg hover:shadow-md border-gray-900 border-t-2 lg:col-span-4">
      <img src={src} className="w-32 h-32 mx-auto rounded-full my-3 object-cover" alt="" />

      <h1 className="mb-5 uppercase">{title}</h1>
      <p className="capitalize leading-7">{desc}</p>
    </div>
  );
}
