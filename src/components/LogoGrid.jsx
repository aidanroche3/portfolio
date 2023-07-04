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
    <div id="experience" className="w-screen h-screen m-auto">
      <h1 className="text-2xl sm:text-4xl font-bold text-center py-4 sm:py-8">
        Experience In
      </h1>
      <div className="flex justify-center items-center px-20 py-8 sm:py-12">
        <div className="inline-grid grid-cols-3 sm:grid-cols-4 gap-12 rounded-3xl border-8 p-4 border-gray-400 bg-gray-100 border-opacity-60">
          {Object.entries(iconDictionary).map(([title, link]) => (
            <Logo key={title} name={title} icon={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoGrid;
