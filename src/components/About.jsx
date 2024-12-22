import React from "react";

const About = () => {
  return (

    <div name="about" className="sm:h-fit h-fit flex pt-16 sm:pt-24 flex-wrap sm:flex-nowrap sm:items-center flex-col w-full bg-gradient-to-bl from-[#124e66] to-[#124e66]">
      <div className="max-w-screen-lg h-fit pb-15 sm:pb-10  mx-auto px-4 flex flex-wrap sm:flex-nowrap flex-col sm:justify-center w-full  sm:h-fit text-white max-md:pt-[50px]">
        <div className="pb-5 sm:justify-items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div className="bg-gray-900 w-full sm:h-fit max-h-700px rounded-lg overflow-y-auto sm:px-2">
          <div className="flex p-1 gap-1">
            <div className="circle">
              <span className="bg-red-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div className="circle">
              <span className="bg-green-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div className="text-white px-4">
            <p className="text-sm mt-3 sm:mt-4 sm:text-xl">
              Hello Everyone! This is "Sumit Saurav". I am an aspiring Software Test Engineer.
            </p>
            <br />
            <p className="text-sm sm:text-xl ">
            A diligent Software Test Engineer with a PGDCA Certificate from All India Computer Education Mission (AICEM), accredited by Hwetech System Pvt. Ltd. Proficient in various scripting languages, particularly Java , JavaScript, and committed to delivering high-quality software solutions.
            </p>
            <br />
            <p className="text-sm sm:text-xl">
              Eager to expand my skill set and embrace the challenges of the digital landscape, I am currently immersing myself in the intricacies of Software Testing .
            </p>
            <br />
            <p className="text-sm sm:text-xl mb-8">
              By leveraging the skills acquired in diverse roles, I aim to contribute to innovative projects, bringing a unique perspective and a commitment to excellence.
            </p>
          </div>
        </div>


      </div>
    </div>
    
  );
};

export default About;