import React from "react";
import Logo from "./Logo";
import Reveal from "./Reveal";

const iconDictionary = {
  Java: "logos/java.svg",
  JavaScript: "logos/javascript.svg",
  Racket: "logos/racket.svg",
  Python: "logos/python.svg",
  HTML: "logos/html.svg",
  CSS: "logos/css.svg",
  React: "logos/react.svg",
  Tailwind: "logos/tailwindcss.svg",
  Vite: "logos/vite.svg",
  Gradle: "logos/gradle.svg",
  Git: "logos/git.svg",
  GitHub: "logos/github.svg",
  VSCode: "logos/vscode.svg",
  IntelliJ: "logos/intellij.svg",
  Eclipse: "logos/eclipse.svg",
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
          <div className="inline-grid auto-cols-fr grid-cols-4 md:gap-24 gap-12 rounded-3xl">
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
