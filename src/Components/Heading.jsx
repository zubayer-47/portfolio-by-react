import React from 'react';

export default function Heading({ title, subtitle }) {
  // const cont = useContext(Context)
  return (
    <div className="uppercase" >
      <h1 className="text-md text-gray-500 tracking-widest font-josefinSlab">
        {title}
      </h1>
      <h2 className="font-dancingScript tracking-widest text-2xl my-3">
        {subtitle}
      </h2>
    </div>
  );
}
