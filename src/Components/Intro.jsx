import React from "react";
import bgImg from "./img/zubayer.jpg";

export default function Intro() {
  return (
    <div>
      <div
        className="bg-cover bg-top bg-no-repeat h-screen flex flex-col justify-center px-10 text-gray-300"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${bgImg})`,
        }}
      >
        <p className="font-dancingScript md:text-5xl text-3xl font-bold ">
          Hi! I Am Zubayer. <br />I Love Programming.
        </p>
      </div>
    </div>
  );
}
