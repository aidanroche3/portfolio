import React from "react";
import { BsCodeSlash } from "react-icons/bs";

function WIPBadge() {
  return (
    <div className="hidden group-hover:inline-grid grid-cols-8 items-center gap-3 px-2 absolute top-4 left-4">
      <div className="tooltip tooltip-top" data-tip="Work in Progress">
        <BsCodeSlash size={35} />
      </div>
    </div>
  );
}

export default WIPBadge;
