import React from "react";
import Card from "./Card";
import Heading from "./Heading";

  export default function About() {
  return (
    <section className="py-7 px-7 overflow-scroll h-screen">
      <Heading title="about us" subtitle="who am i?" />

    <div className="text-gray-600 mb-14">
        <p className="my-10">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          vero voluptatem consequuntur voluptatum dolorem doloribus tenetur
          culpa, odit porro ab ex in aspernatur tempore facilis laudantium nihil
          incidunt? Enim, veritatis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta minima
          eveniet doloremque. Dolorum qui reiciendis officia excepturi quaerat
          praesentium rem!
        </p>
      </div>

      <Heading title="what i do?" subtitle="here are some of my expertise" />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 mt-10">
        <Card
          title="Web development"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          minima!"
        />
        <Card
          title="Programming"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          minima!"
        />
        <Card
          title="Core Learning"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          minima!"
        />
      </div>
    </section>
  );
}
