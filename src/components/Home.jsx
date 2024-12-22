import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-fit sm:h-fit  pb-4 sm:pb-4 w-full bg-gradient-to-br from-[#124e66] to-[#124e66]"
    >
      <div className="max-w-screen-lg pt-[100px] items-center sm:items-start mx-auto flex flex-col lg:pt-32 sm:pt-20  px-4 sm:flex-row ">
        <div className="justify-center h-full sm:mt-8 lg:mt-12">
          <h2 className="text-4xl align-text-bottom font-bold text-white sm:text-7xl ">
            I'm a Software Test Engineer
          </h2>
          <p className="text-white py-4 max-w-md text-lg">
            ( Specialized In Java , Selenium(Java) )
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-[#41BF61] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="profilePicture"
            className="rounded-3xl mt-10 mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;