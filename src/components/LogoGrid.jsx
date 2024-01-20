import React from "react";
import Logo from "./Logo";
import Reveal from "./Reveal";

const iconDictionary = {
  Java: "logos/java.svg",
  JavaScript: "logos/javascript.svg",
  HTML: "logos/html.svg",
  CSS: "logos/css.svg",
  "C++": "logos/c++.svg",
  C: "logos/c.svg",
  Racket: "logos/racket.svg",
  React: "logos/react.svg",
  Tailwind: "logos/tailwindcss.svg",
  Node: "logos/node.svg",
  MySQL: "logos/mysql.svg",
  MongoDB: "logos/mongodb.svg",
  Docker: "logos/docker.svg",
  Vite: "logos/vite.svg",
  Gradle: "logos/gradle.svg",
  Git: "logos/git.svg",
  GitHub: "logos/github.svg",
  VSCode: "logos/vscode.svg",
  IntelliJ: "logos/intellij.svg",
  DataGrip: "logos/datagrip.svg",
  Eclipse: "logos/eclipse.svg",
  Windows: "logos/windows.svg",
  Linux: "logos/linux.svg",
};

function LogoGrid() {
  return (
    <div
      id="experience"
      className="min-h-screen m-auto flex flex-col justify-center items-center py-4 sm:py-12"
    >
      <Reveal>
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-primary p-4">
          Experience With
        </h1>
        <div className="px-20 py-12">
          <div className="inline-grid auto-cols-fr grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-24 gap-12 rounded-3xl">
            {Object.entries(iconDictionary).map(([title, link]) => (
              <Reveal key={title}>
                <Logo key={title} name={title} icon={link} />
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default LogoGrid;
