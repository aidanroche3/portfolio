import React from "react";
import Project from "./Project";

function ProjectGrid() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-primary pb-16">
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
            NPM: "logos/npm.svg",
            React: "logos/react.svg",
            Tailwind: "logos/tailwindcss.svg",
            Vite: "logos/vite.svg",
            VSCode: "logos/vscode.svg",
          }}
          wip="true"
        />
        <Project
          title="Java Journal"
          description="Bullet journal application for keeping track of weekly commitments and tasks"
          link={"https://github.com/aidanroche3/PA-05-Java-Journal"}
          image="projects/bulletjournal.PNG"
          skills={{
            Java: "logos/java.svg",
            CSS: "logos/css.svg",
            "JavaFX SceneBuilder": "logos/javafx.png",
            Gradle: "logos/gradle.svg",
            IntelliJ: "logos/intellij.svg",
          }}
        />
        <Project
          title="BattleSalvo"
          description="Battleship twist with user versus computer gameplay and remote server interactivity"
          link="https://github.com/aidanroche3/PA-04-BattleSalvo-Part-2"
          image="projects/battlesalvo.PNG"
          skills={{
            Java: "logos/java.svg",
            JSON: "logos/json.png",
            Gradle: "logos/gradle.svg",
            IntelliJ: "logos/intellij.svg",
          }}
        />
        <Project
          title="Summarize This + Anki-Lite"
          description="Application for generating summarized study guides and study sessions with spaced repetition quizzes"
          link="https://github.com/aidanroche3/PA-02-Anki-Lite"
          image="projects/anki.PNG"
          skills={{
            Java: "logos/java.svg",
            Gradle: "logos/gradle.svg",
            IntelliJ: "logos/intellij.svg",
          }}
        />
        <Project
          title="Search Maze"
          description="Random mazes generated with Kruskal's algorithm featuring automatic solving with breadth-first and depth-first searches"
          image="projects/maze.gif"
          request="true"
          skills={{
            Java: "logos/java.svg",
            Eclipse: "logos/eclipse.svg",
          }}
        />
        <Project
          title="Flood It!"
          description="Flood every cell within a limited number of moves"
          image="projects/floodit.gif"
          request="true"
          skills={{
            Java: "logos/java.svg",
            Eclipse: "logos/eclipse.svg",
          }}
        />
      </div>
    </div>
  );
}

export default ProjectGrid;
