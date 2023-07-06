import React from "react";
import { useMediaQuery } from "react-responsive";
import { GoGitPullRequest } from "react-icons/go";

function RequestBadge() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1100px" });
  let hoverText = "Source Available on Request";
  if (!isLargeScreen) {
    hoverText = "On Request";
  }

  return (
    <div className="hidden w-[12%] h-[12%] group-hover:block absolute top-4 right-5">
      <div className="w-full h-full tooltip tooltip-top" data-tip={hoverText}>
        <GoGitPullRequest className="w-full h-full cursor:pointer hover:scale-110 ease-in duration-200 pt-1" />
      </div>
    </div>
  );
}

export default RequestBadge;
