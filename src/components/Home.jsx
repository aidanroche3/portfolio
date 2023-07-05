import React from "react";
import { useMediaQuery } from "react-responsive";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

function Home() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 760px" });

  return (
    <>
      {isLargeScreen ? (
        <div id="home" className="w-full h-screen">
          <div className="w-screen min-h-0 pt-20 p-5 pb-10 grid grid-cols-1 sm:grid-cols-3 gap-5 ">
            <img className="rounded-3xl shadow-lg" src="paris.jpg" />
            <img className="rounded-3xl shadow-lg" src="edinburgh.jpg" />
            <img className="rounded-3xl shadow-lg" src="rome.jpg" />
          </div>
          <div className="w-full h-screen absolute top-0 left-0 bg-white/20"></div>
          <div className="group m-auto flex flex-col justify-center items-center relative z-0">
            <h1 className="sm:text-5xl text-5x font-bold text-primary">
              Aidan Roche
            </h1>
            <h2 className="sm:text-2xl text-2x pt-4 text-primary">
              Computer Science Student at Northeastern University
            </h2>
            <div className="flex justify-between items-center pt-6 max-w-[200px] w-full">
              <a href="https://www.instagram.com/aroche_37">
                <FaInstagram
                  size={40}
                  className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm"
                />
              </a>
              <a href="https://www.linkedin.com/in/aidanroche/">
                <FaLinkedinIn
                  size={40}
                  className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm"
                />
              </a>
              <a href="https://github.com/aidanroche3">
                <FaGithub
                  size={40}
                  className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm"
                />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div id="home" className="w-full h-screen">
            <div className="min-h-0 p-10 py-10 flex justify-center">
              <img className="rounded-3xl shadow-lg" src="edinburgh.jpg" />
            </div>
            <div className="w-full h-screen absolute top-0 left-0 bg-white/20"></div>
            <div className="group m-auto flex flex-col justify-center items-center relative z-0">
              <h1 className="sm:text-5xl text-3xl font-bold text-primary">
                Aidan Roche
              </h1>
              <h2 className="sm:text-2xl text-2x pt-4 text-primary">
                Computer Science Student at Northeastern University
              </h2>
              <div className="flex justify-between items-center pt-6 max-w-[200px] w-full">
                <a href="https://www.instagram.com/aroche_37">
                  <FaInstagram
                    size={40}
                    className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm"
                  />
                </a>
                <a href="https://www.linkedin.com/in/aidanroche/">
                  <FaLinkedinIn
                    size={40}
                    className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm"
                  />
                </a>
                <a href="https://github.com/aidanroche3">
                  <FaGithub
                    size={40}
                    className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm"
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
