import React from "react";

const Contact = () => {
  return (
    <div name="contact" className=" h-[700px] sm:h-fit px-10 pb-10 sm:px-2 w-full bg-gradient-to-br from-[#124e66] to-[#124e66]">
      <div className="flex flex-col p-4 sm:justify-center max-w-screen-lg mx-auto text-white font-bold">
        <div className=" max-md:pt-[60px] md:pt-24">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-4">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/lbjkrgoa" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter your name:" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <input type="text" name="email" placeholder="Enter your email:" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                <textarea name="message" rows="6" className="p-2 mb-8 bg-transparent border-2 rounded-md text-white focus:outline-none" placeholder="Enter your message"></textarea>
                <button className="text-white bg-[#41BF61] px-6 py-2 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
