import React from "react";
import Commitment from "./Commitment";
import Reveal from "./Reveal";

function Involvement() {
  return (
    <Reveal>
      <div id="involvement" className="min-h-screen m-auto py-4 pb-12 sm:py-12">
        <div className="flex flex-col justify-center items-center pt-4">
          <h1 className="font-bold text-center text-4xl text-primary pb-10">
            Involvement
          </h1>
          <div className="grid grid-cols-1 gap-12">
            <Commitment
              title="NU Science Magazine"
              role="Software Developer"
              dates="September 2023 - Present"
              description="Launch a full-stack article hosting website built with Node.js serving 100+ club members and storing 1000+ student-written science articles in a MongoDB database. Also documenting codebase concepts such as authentication and routing in Confluence for new members."
              skills={{
                HTML: "logos/html.svg",
                CSS: "logos/css.svg",
                JavaScript: "logos/javascript.svg",
                NodeJs: "logos/node.svg",
                ExpressJs: "logos/express.svg",
                Docker: "logos/docker.svg",
                MongoDB: "logos/mongodb.svg",
                NPM: "logos/npm.svg",
                VSCode: "logos/vscode.svg",
              }}
              image="logos/nusci.png"
              link="https://nuscimagazine.com/"
            />
            <Commitment
              title="Northeastern Electric Racing"
              role="Software Developer"
              dates="January 2023 - May 2023"
              description="Developed a project management dashboard with 70+ active users using Node.js and TypeScript. Designed 10+ front-end features with React such as page pagination and toast alerts. Contributed to an agile project workflow through a product release schedule and ticketing system."
              skills={{
                HTML: "logos/html.svg",
                CSS: "logos/css.svg",
                TypeScript: "logos/typescript.svg",
                NodeJs: "logos/node.svg",
                React: "logos/react.svg",
                Yarn: "logos/yarn.svg",
                VSCode: "logos/vscode.svg",
              }}
              image="logos/ner.webp"
              link="https://electricracing.northeastern.edu/"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default Involvement;
