import React from 'react';

export default function Card({ title, desc, src }) {
  return (
    <div className="card">
      <img
        src={src}
        className="w-32 h-32 mx-auto rounded-full my-3 object-cover"
        alt=""
      />

      <h1 className="mb-5 uppercase">{title}</h1>
      <p className="capitalize leading-7">{desc}</p>
    </div>
  );
}
