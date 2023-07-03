import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Home() {
  const isSmallScreen = useMediaQuery({ query: "(min-width: 760px" });

  return (
    <>
      {isSmallScreen ? (
        <div id="home">
          <div className="w-screen h-screen pt-20 p-5 pb-10 grid grid-cols-1 sm:grid-cols-3 gap-5 bg-slate-100">
            <img className="rounded-3xl shadow-lg" src="paris.jpg" />
            <img className="rounded-3xl shadow-lg" src="edinburgh.jpg" />
            <img className="rounded-3xl shadow-lg" src="rome.jpg" />
          </div>
          <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center ">
              <h1 className="sm:text-5xl text-5x font-bold text-gray-200">
                Aidan Roche
              </h1>
              <h2 className="sm:text-2xl text-2x pt-4 text-gray-300">
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
      ) : (
        <>
          <div className="max-w-[700px] m-auto h-full w-full pt-20 p-5 pb-20 bg-slate-100">
            <img className="rounded-3xl shadow-lg" src="edinburgh.jpg" />
          </div>
          <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center ">
              <h1 className="text-5x pl-20 font-bold text-gray-100">
                Aidan Roche
              </h1>
              <h2 className="text-3x pt-4  text-gray-100">
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
        </>
      )}
    </>
  );
}

export default Home;
