import React from "react";
import { FaGithub } from "react-icons/fa";

function GitHubBadge({ link }) {
  return (
    <div className="hidden w-1/6 h-1/6 group-hover:block absolute top-4 right-5">
      <div
        className="w-full h-full tooltip tooltip-top"
        data-tip="Source on GitHub"
      >
        <a href={link}>
          <FaGithub className="w-full h-full cursor:pointer hover:scale-110 ease-in duration-200 pt-1" />
        </a>
      </div>
    </div>
  );
}

export default GitHubBadge;
