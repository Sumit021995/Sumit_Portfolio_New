import React from "react";
import flashcard from "../assets/portfolio/flashcard.jpg";
import currencyexchange from "../assets/portfolio/currencyexchange.jpg";
import passwordgenerator from '../assets/portfolio/passwordgenerator.jpg';
import bookmyshow from '../assets/portfolio/bookmyshow.jpeg'
import plannerapp from '../assets/portfolio/plannerapp.jpg'
import reactrouter from '../assets/portfolio/reactRouterApp.JPG'



const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: flashcard,
      demo: "https://transcendent-kitten-6d66d8.netlify.app/",
      code: "https://github.com/sumit021995/Flashcard__Generator_Project"
    },
    {
      id: 2,
      src: currencyexchange,
      demo: "https://sumit021995.github.io/currencyProject/",
      code: "https://github.com/Sumit021995/currencyProject"
    },
    {
      id: 3,
      src: passwordgenerator,
      demo: "https://sumit021995.github.io/passwordGenerator/",
      code: "https://github.com/Sumit021995/passwordGenerator"
    },
    {
      id: 4,
      src: bookmyshow,
      demo: "https://github.com/Sumit021995/BookMyShow-Project",
      code: "https://github.com/Sumit021995/BookMyShow-Project"
    },
    {
      id: 5,
      src: plannerapp,
      demo: "https://sumit1-planner-app.netlify.app/",
      code: "https://github.com/Sumit021995/planner-app"
    },
    {
      id: 6,
      src: reactrouter,
      demo: "https://astonishing-tarsier-63c73b.netlify.app/",
      code: "https://github.com/Sumit021995/React-Router"
    },
  ];

  return (
    <div
      name="portfolio"
      className="sm:px-2 h-screen w-full py-10 border-spacing-10 bg-gradient-to-br from-[#124e66] to-[#124e66]"
    >
      <div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full text-white max-md:pt-[400px]">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="p-4">Check out some of my work right here.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="ProjectThumbnail"
                className="rounded-md duration-200 hover:scale-85"
              />
              <div className="flex items-center justify-center">
              <a href={demo} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105" >
                  Demo
                </button>
                </a>
              <a href={code} target="_blank" rel="noreferrer">
                <button className="w-1/2 px-6 py-2 m-2 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Portfolio;