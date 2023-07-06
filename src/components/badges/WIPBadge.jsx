import React from "react";
import { BsCodeSlash } from "react-icons/bs";

function WIPBadge() {
  return (
    <div className="hidden w-1/12 h-1/12 group-hover:block absolute top-6 left-8">
      <div
        className="w-full h-full tooltip tooltip-top pl:2"
        data-tip="Work in Progress"
      >
        <BsCodeSlash className="w-full h-full cursor:pointer hover:scale-110 ease-in duration-200 pt-1" />
      </div>
    </div>
  );
}

export default WIPBadge;
