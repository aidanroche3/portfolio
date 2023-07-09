import React from "react";
import WIPBadge from "./badges/WIPBadge";
import GitHubBadge from "./badges/GitHubBadge";
import RequestBadge from "./badges/RequestBadge";

function Project({ title, description, image, skills, link, wip, request }) {
  return (
    <div className="relative flex items-center justify-center max-h-screen h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-300 to-[#fff]">
      <img
        src={image}
        alt={title}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl squished:text-lg font-bold text-primary tracking-wider text-center">
          {title}
        </h3>
        <p className="squished:text-sm pb-4 pt-2 text-primary text-center">
          {description}
        </p>
      </div>
      {link ? <GitHubBadge link={link} /> : <></>}
      {wip ? <WIPBadge /> : <></>}
      {request ? <RequestBadge /> : <></>}
      <div className="hidden group-hover:inline-grid grid-cols-8 items-center gap-3 px-2 absolute bottom-4 left-4">
        {Object.entries(skills).map(([name, link]) => (
          <div key={name} className="tooltip tooltip-top" data-tip={name}>
            <img
              className="pt-2 hover:scale-110 ease-in duration-200"
              src={link}
              alt={name}
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
