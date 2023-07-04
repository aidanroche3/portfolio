import React from "react";
import { FaGithub } from "react-icons/fa";

function Project({ title, description, image, skills, link }) {
  return (
    <div className="relative flex items-center justify-center max-h-screen h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-300 to-[#fff]">
      <img
        src={image}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-primary tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-primary text-center">{description}</p>
      </div>
      {link ? (
        <div className="hidden group-hover:block absolute top-4 right-4">
          <a href={link}>
            <FaGithub
              size={60}
              className="cursor:pointer hover:scale-110 ease-in duration-200"
            />
          </a>
        </div>
      ) : (
        <></>
      )}
      <div className="hidden group-hover:inline-grid grid-cols-8 items-center gap-3 px-2 absolute bottom-4 left-4">
        {Object.entries(skills).map(([name, link]) => (
          <div className="object-none">
            <div className="tooltip tooltip-top" data-tip={name}>
              <img
                id={name}
                className="pt-2 hover:scale-110 ease-in duration-200"
                src={link}
                alt={name}
                width={40}
                height={40}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
