import React from "react";
import { FaGithub } from "react-icons/fa";

function GitHubBadge({ link }) {
  return (
    <div className="hidden group-hover:block absolute top-4 right-4">
      <div className="tooltip tooltip-top" data-tip="Source on GitHub">
        <a href={link}>
          <FaGithub
            size={60}
            className="cursor:pointer hover:scale-110 ease-in duration-200 pt-1"
          />
        </a>
      </div>
    </div>
  );
}

export default GitHubBadge;
