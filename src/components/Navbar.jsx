import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsFillPersonFill } from "react-icons/bs";
import { LiaProjectDiagramSolid } from "react-icons/lia";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/80 flex flex-col justify-center items-center z-20">
          <a
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#home"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Home</span>
          </a>
          <a
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#experience"
          >
            <BsCodeSlash size={20} />
            <span className="pl-4 ">Experience</span>
          </a>
          <a
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#projects"
          >
            <LiaProjectDiagramSolid size={20} />
            <span className="pl-4 ">Projects</span>
          </a>
          <a
            className="w-[75%] flex justify-center items-center rounded-full shadow-md bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#about"
          >
            <BsFillPersonFill size={20} />
            <span className="pl-4 ">About</span>
          </a>
        </div>
      ) : (
        <></>
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#home"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#experience"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsCodeSlash size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <LiaProjectDiagramSolid size={20} />
          </a>
          <a
            href="#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsFillPersonFill size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
