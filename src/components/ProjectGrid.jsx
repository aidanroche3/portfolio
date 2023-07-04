import React from "react";
import Project from "./Project";

function ProjectGrid() {
  const iconDictionary = {
    Java: "./../../public/logos/java.svg",
    Python: "./../../public/logos/python.svg",
    Racket: "./../../public/logos/racket.svg",
    JavaScript: "./../../public/logos/javascript.svg",
    HTML: "./../../public/logos/html.svg",
    CSS: "./../../public/logos/css.svg",
    React: "./../../public/logos/react.svg",
    Tailwind: "./../../public/logos/tailwindcss.svg",
    Vite: "./../../public/logos/vite.svg",
    NPM: "./../../public/logos/npm.svg",
    Git: "./../../public/logos/git.svg",
    GitHub: "./../../public/logos/github.svg",
    VSCode: "./../../public/logos/vscode.svg",
    IntelliJ: "./../../public/logos/intellij.svg",
    PyCharm: "./../../public/logos/pycharm.svg",
    Eclipse: "./../../public/logos/eclipse.svg",
  };

  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-16">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <Project
          title="test"
          description="test desc"
          link={"https://github.com/aidanroche3"}
          image="paris.jpg"
          skills={[
            "logos/java.svg",
            "logos/intellij.svg",
            "logos/java.svg",
            "logos/intellij.svg",
            "logos/java.svg",
            "logos/intellij.svg",
          ]}
        />
        <Project
          title="test"
          description="test desc"
          link=""
          image="paris.jpg"
          skills={[
            "logos/java.svg",
            "logos/intellij.svg",
            "logos/java.svg",
            "logos/intellij.svg",
            "logos/java.svg",
            "logos/intellij.svg",
          ]}
        />
      </div>
    </div>
  );
}

export default ProjectGrid;
