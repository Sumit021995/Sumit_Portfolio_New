import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import java from "../assets/java.png";
import reactImage from "../assets/react.png";
// import github from "../assets/github.png";
// import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";
// import express from "../assets/expressjs.png";
// import node from "../assets/nodejs.png";
import selenium from "../assets/selenium.png";
// import oracle from "../assets/oracle.png";
import agile from "../assets/agile.png";
import testng from "../assets/testng.png";
import restassured from "../assets/restassured.png";
import postman from "../assets/postman.png";
import jenkins from "../assets/jenkins.png";

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
      src: selenium,
      title: "Selenium",
      style: "shadow-green-400",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: agile,
      title: "Agile",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: testng,
      title: "TestNG",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: restassured,
      title: "Rest-Assured",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: jenkins,
      title: "Jenkins",
      style: "shadow-red-500",
    },
    {
      id: 12,
      src: postman,
      title: "Postman",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div
      name="experience"
      className="sm:px-2 xl:h-fit lg:h-fit sm:h-fit sm:pt-14 
       w-full  bg-gradient-to-bl from-[#124e66] to-[#124e66] max-md:overscroll-contain "
    >
      <div className="px-4 max-w-screen-lg mx-auto sm:py-10 py-10 flex flex-col sm:justify-center h-full text-white">
        <div className="max-md:pt-[50px]">
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