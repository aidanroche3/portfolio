import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div id="#main">
      <div className="w-full h-screen top-0 left-0 flex justify-center">
        <img className="object-cover resoze" src="paris.jpg" />
        <img className="object-cover resize" src="edinburgh.jpg" />
        <img className="object-cover resize" src="rome.jpg" />
      </div>
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center ">
          <h1 className="sm:text-5xl text-5x font-bold text-gray-900">
            Aidan Roche
          </h1>
          <h2 className="sm:text-2xl text-2x pt-4 text-gray-900">
            Computer Science Student at Northeastern University
          </h2>
          <div className="flex justify-between items-center pt-6 max-w-[200px] w-full">
            <a href="https://www.instagram.com/aroche_37">
              <FaInstagram
                size={30}
                className="cursor:pointer hover:scale-110 ease-in duration-200"
              />
            </a>
            <a href="https://www.linkedin.com/in/aidanroche/">
              <FaLinkedinIn
                size={30}
                className="cursor:pointer hover:scale-110 ease-in duration-200"
              />
            </a>
            <a href="https://github.com/aidanroche3">
              <FaGithub
                size={30}
                className="cursor:pointer hover:scale-110 ease-in duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
