import React from "react";

const About = () => {
  return (
    <div>
    <div name="about" className=" h-screen w-full bg-gradient-to-bl from-[#124e66] to-[#124e66]">
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white max-md:pt-[200px]">
        <div className="pb-5 sm:justify-items-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <div className="bg-gray-900 w-full h-95% rounded-lg overflow-y-auto sm:px-2">
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
          <div className="card__content text-white px-4">
            <p className="text-xl mt-5">
              Hello Everyone! This is "Sumit Saurav". I am an aspiring Full Stack Developer, especially a "MERN Stack Developer".
            </p>
            <br />
            <p className="text-xl ">
            A diligent Software Developer with a PGDCA Certificate from All India Computer Education Mission (AICEM), accredited by Hwetech System Pvt. Ltd. Proficient in various scripting languages, particularly JavaScript, and committed to delivering high-quality software solutions.
            </p>
            <br />
            <p className="text-xl">
              Eager to expand my skill set and embrace the challenges of the digital landscape, I am currently immersing myself in the intricacies of full-stack web development. The MERN stack—MongoDB, Express.js, React.js, and Node.js — captivates me with its versatility and potential to create dynamic, user-centric applications.
            </p>
            <br />
            <p className="text-xl mb-8">
              By leveraging the skills acquired in diverse roles, I aim to contribute to innovative projects, bringing a unique perspective and a commitment to excellence.
            </p>
          </div>
        </div>


      </div>
    </div>
    </div>
  );
};

export default About;
