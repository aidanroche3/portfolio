import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { BsCodeSlash, BsFillPersonFill } from "react-icons/bs";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { VscOrganization } from "react-icons/vsc";

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
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            className="w-[75%] flex justify-center items-center border-b-2 border-b-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#home"
            onClick={handleNav}
          >
            <AiOutlineHome size={20} />
            <span className="pl-4 ">Home</span>
          </a>
          <a
            className="w-[75%] flex justify-center items-center border-b-2 border-b-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#experience"
            onClick={handleNav}
          >
            <BsCodeSlash size={20} />
            <span className="pl-4 ">Experience</span>
          </a>
          <a
            className="w-[75%] flex justify-center items-center border-b-2 border-b-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#projects"
            onClick={handleNav}
          >
            <LiaProjectDiagramSolid size={20} />
            <span className="pl-4 ">Projects</span>
          </a>
          <a
            className="w-[75%] flex justify-center items-center border-b-2 border-b-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#involvement"
            onClick={handleNav}
          >
            <VscOrganization size={20} />
            <span className="pl-4 ">Involvement</span>
          </a>
          <a
            className="w-[75%] flex justify-center items-center border-b-2 border-b-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#about"
            onClick={handleNav}
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
            className="border-b-2 border-b-black bg-gray-100 rounded-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 scroll-smooth"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#experience"
            className="border-b-2 border-b-black bg-gray-100 rounded-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsCodeSlash size={20} />
          </a>
          <a
            href="#projects"
            className="border-b-2 border-b-black bg-gray-100 rounded-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <LiaProjectDiagramSolid size={20} />
          </a>
          <a
            href="#involvement"
            className="border-b-2 border-b-black bg-gray-100 rounded-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <VscOrganization size={20} />
          </a>
          <a
            href="#about"
            className="border-b-2 border-b-black bg-gray-100 rounded-lg m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsFillPersonFill size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
