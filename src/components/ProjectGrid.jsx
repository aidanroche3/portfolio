import React from "react";
import Project from "./Project";

function ProjectGrid() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-16">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        <Project
          title="Portfolio Site"
          description="Website for showcasing skills and projects"
          image="edinburgh.jpg"
          link={"https://github.com/aidanroche3/portfolio-site"}
          skills={{
            HTML: "logos/html.svg",
            CSS: "logos/css.svg",
            JavaScript: "logos/javascript.svg",
            Vite: "logos/vite.svg",
            React: "logos/react.svg",
            Tailwind: "logos/tailwindcss.svg",
            NPM: "logos/npm.svg",
            VSCode: "logos/vscode.svg",
          }}
        />
        <Project
          title="Bullet Journal"
          description="Bullet Journal Application built with JavaFX"
          link={"https://github.com/aidanroche3/PA-05-Java-Journal"}
          image="projects/bulletjournal.PNG"
          skills={{
            Java: "logos/java.svg",
            "JavaFX SceneBuilder": "logos/javafx.png",
            IntelliJ: "logos/intellij.svg",
          }}
        />
        <Project
          title="BattleSalvo"
          description="Battleship twist with P2P server connection"
          link="https://github.com/aidanroche3/PA-04-BattleSalvo-Part-2"
          image="projects/battlesalvo.PNG"
          skills={{
            Java: "logos/java.svg",
            JSON: "logos/json.png",
            IntelliJ: "logos/intellij.svg",
          }}
        />
        <Project
          title="Summarize This + Anki-Lite"
          description="Application for generating study guides and study sessions with spaced repetition quizzes"
          link="https://github.com/aidanroche3/PA-02-Anki-Lite"
          image="projects/anki.PNG"
          skills={{
            Java: "logos/java.svg",
            IntelliJ: "logos/intellij.svg",
          }}
        />
      </div>
    </div>
  );
}

export default ProjectGrid;
