import React from "react";
import { GoGitPullRequest } from "react-icons/go";

function RequestBadge() {
  return (
    <div className="hidden group-hover:block absolute top-4 right-4">
      <div
        className="tooltip tooltip-top"
        data-tip="Source Available on Request"
      >
        <GoGitPullRequest
          size={40}
          className="cursor:pointer hover:scale-110 ease-in duration-200 pt-1"
        />
      </div>
    </div>
  );
}

export default RequestBadge;
