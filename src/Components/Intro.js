import React from "react";

export default function Intro() {
  return (
      <div
        className="bg-cover bg-top bg-no-repeat h-screen flex flex-col justify-center px-10 text-gray-300"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url('https://ik.imagekit.io/r9uwfjdnxbi2/hero_jr3E6SRQcxgb.JPG')`,
        }}
      >
        <p className="font-dancingScript md:text-5xl text-3xl font-bold ">
          Hi! I Am Zubayer. <br />I Love Programming.
        </p>
      </div>
  );
}
