import React from "react";

function ProjectGrid() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12"></div>
    </div>
  );
}

export default ProjectGrid;
