import React from 'react'
import resumeicon from "../assets/resumeicon.png"
import emailicon from "../assets/emailicon.png"
import facebookicon from "../assets/facebookicon.png"
import githubicon from "../assets/githubicon.png"
import linkedinicon from "../assets/linkedinicon.png"
import twitterxicon from "../assets/twitterxicon.png"

const Footer = ()=> {
    return (
        <footer name="footer" className="flex flex-row w-full h-20px sm:h-[40px] bg-gradient-to-bl from-[#124e66] to-[#124e66]">
            <div className="w-full max-w-screen-xl pb-6">
                <div className="px-12 sm:px-20 sm:flex item-center justify-center sm:items-center sm:justify-between ">
                    <span className="sm:text-lg text-white sm:text-center space-x-1">
                        © 2023
                        <a href="https://sumitsauravportfolio.netlify.app/" className="hover:underline space-x-5">
                            _Sumit_Saurav
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="justify-center flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="./resume.pdf" target="_blank">
                        <img src={resumeicon}  className='w-5 h-5' alt="resume"/>
                            <span className="sr-only">Resume</span>
                            
                        </a>
                        <a href="https://twitter.com/SauravKaku">
                        <img src={twitterxicon}  className='w-5 h-5' alt="twitterxicon"/>
                            <span className="sr-only">TwitterX</span>
                            
                        </a>
                        <a href="mailto:sumitofficial021995@gmail.com">
                        <img src={emailicon} className='w-5 h-5' alt="email"/>
                        
                            <span className="sr-only">gmail</span>
                        </a>
                        <a href="https://github.com/Sumit021995/">
                        <img src={githubicon} className='w-5 h-5' alt="githubicon"/>
                        
                            <span className="sr-only">github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/sumit-saurav-3388b5112">
                        <img src={linkedinicon} className='w-5 h-5' alt="linkedinicon"/>
                        
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://www.facebook.com/scsauravkaku">
                        <img src={facebookicon} className='w-5 h-5' alt="facebookicon"/>
                        
                            <span className="sr-only">facebook</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;