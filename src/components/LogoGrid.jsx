import React from "react";
import Logo from "./Logo";

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
  Gradle: "./../../public/logos/gradle.svg",
  Git: "./../../public/logos/git.svg",
  GitHub: "./../../public/logos/github.svg",
  VSCode: "./../../public/logos/vscode.svg",
  IntelliJ: "./../../public/logos/intellij.svg",
  PyCharm: "./../../public/logos/pycharm.svg",
  Eclipse: "./../../public/logos/eclipse.svg",
};

function LogoGrid() {
  return (
    <div
      id="experience"
      className="h-screen m-auto flex flex-col justify-center items-center py-4 sm:py-12"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-primary p-4">
        Experience With
      </h1>
      <div className="px-20 py-8 sm:py-12">
        <div className="inline-grid grid-flow-cols grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-12 rounded-3xl border-8 p-4 border-gray-400  border-opacity-60 shadow-2xl">
          {Object.entries(iconDictionary).map(([title, link]) => (
            <Logo key={title} name={title} icon={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoGrid;
