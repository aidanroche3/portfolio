import React from "react";
import Logo from "./Logo";

function LogoGrid() {
  const iconDictionary = {
    Java: "./../../public/logos/java.svg",
    Python: "./../../public/logos/python.svg",
    HTML: "./../../public/logos/html.svg",
    CSS: "./../../public/logos/css.svg",
    JavaScript: "./../../public/logos/javascript.svg",
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
    <div id="experience" className="max-w-[1040px] w-screen h-screen m-auto">
      <h1 className="text-2xl sm:text-4xl font-bold text-center py-12">
        Experience In:
      </h1>
      <div className="flex justify-center items-center">
        <div className="inline-grid grid-cols-3 sm:grid-cols-4 gap-12 sm:gap-20">
          {Object.entries(iconDictionary).map(([title, link]) => (
            <Logo key={title} name={title} icon={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoGrid;
