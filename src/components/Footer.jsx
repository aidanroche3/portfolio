import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer grid-cols-2 px-10 py-4 border-t bg-base-300 text-base-content">
      <div className="items-center grid-flow-col">
        <BsCodeSlash size={25} />
        <p className="text-primary font-bold">Created by Aidan Roche</p>
      </div>
      <div className="place-self-center justify-self-end">
        <div className="grid grid-flow-col gap-6">
          <div
            className="tooltip tooltip-top"
            data-tip={"roche.ai@northeastern.edu"}
          >
            <MdOutlineMail
              size={30}
              className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm"
            />
          </div>
          <a href="https://github.com/aidanroche3">
            <FaGithub
              size={30}
              className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm text-[#333]"
            />
          </a>
          <a href="https://www.linkedin.com/in/aidanroche/">
            <FaLinkedinIn
              size={30}
              className="cursor:pointer hover:scale-110 ease-in duration-200 hover:shadow-sm text-[#0077B5]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
