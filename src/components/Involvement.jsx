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
              description="Working with the software team to develop a full-stack website for hosting hundreds of student-written science articles stored in a database. Currently working on a basic social media app with user authentication and database retrieval to practice/learn HTML, CSS, JavaScript, Express, Docker, and MongoDB."
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
              description="Collaborated with a small team on a full-stack project management dashboard serving 70+ active users. Developed front-end features such as page pagination and toast alerts.
              "
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
