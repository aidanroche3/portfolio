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
    tailwindcss: "./../../public/logos/tailwindcss.svg",
    Git: "./../../public/logos/git.svg",
    GitHub: "./../../public/logos/github.svg",
    IntelliJ: "./../../public/logos/intellij.svg",
    Eclipse: "./../../public/logos/eclipse.svg",
    VSCode: "./../../public/logos/vscode.svg",
  };

  return (
    <div className="h-screen w-screen p-28">
      <div className="flex justify-between items-center">
        {Object.entries(iconDictionary).map(([title, link]) => (
          <Logo name={title} icon={link} />
        ))}
      </div>
    </div>
  );
}

export default LogoGrid;
