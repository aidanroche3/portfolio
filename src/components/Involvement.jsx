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
              title="Northeastern Electric Racing"
              dates="January 2023 - June 2023"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              skills={{
                TypeScript: "logos/typescript.svg",
                React: "logos/react.svg",
                NodeJs: "logos/node.svg",
                Yarn: "logos/yarn.svg",
                VSCode: "logos/vscode.svg",
              }}
              image="logos/ner.webp"
            />
            <Commitment
              title="Northeastern Electric Racing"
              dates="January 2023 - June 2023"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              skills={{
                JavaScript: "logos/javascript.svg",
                React: "logos/react.svg",
                Tailwindcss: "logos/tailwindcss.svg",
                NPM: "logos/npm.svg",
                VSCode: "logos/vscode.svg",
              }}
              image="logos/racket.svg"
            />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default Involvement;
