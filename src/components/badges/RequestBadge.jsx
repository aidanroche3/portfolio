import React from "react";
import { GoGitPullRequest } from "react-icons/go";

function RequestBadge() {
  return (
    <div className="hidden w-[12%] h-[12%] group-hover:block absolute top-4 right-5">
      <div className="w-full h-full tooltip tooltip-top" data-tip="On Request">
        <GoGitPullRequest className="w-full h-full cursor:pointer hover:scale-110 ease-in duration-200 pt-1" />
      </div>
    </div>
  );
}

export default RequestBadge;
