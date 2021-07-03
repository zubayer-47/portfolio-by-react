import React from 'react'

export default function Card({title, desc}) {
    return (
      <div className="bg-r p-5 text-center rounded-md shadow-lg hover:shadow-md border-gray-900 border-b-4 lg:col-span-4">
        <h1 className="mb-5 uppercase">{title}</h1>
        <p className="capitalize leading-7">
          {desc}
        </p>
      </div>
    );
}
