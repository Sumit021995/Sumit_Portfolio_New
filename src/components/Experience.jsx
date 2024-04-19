import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import reactImage from "../assets/react.png";
// import github from "../assets/github.png"/;
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
import express from "../assets/expressjs.png";
import node from "../assets/nodejs.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 5,
      src: express,
      title: "Express",
      style: "shadow-gray-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "TailwindCSS",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="experience"
      className="sm:px-2 h-screen w-full  bg-gradient-to-bl from-[#124e66] to-[#124e66] max-md:overscroll-contain "
    >
      <div className="px-4 max-w-screen-lg mx-auto py-10 flex flex-col justify-center h-full text-white">
        <div className="max-md:pt-[1000px]">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-4">
            Some of the technologies that I've worked with:
          </p>
        </div>

        <div className="w-full grid  grid-cols-2 sm:grid-cols-3 gap-8 text-center py-5 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-1 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
