import React from "react";
import Gallery from "./Gallery";
import Reveal from "./Reveal";

function About() {
  return (
    <Reveal>
      <div
        id="about"
        className="w-full min-h-[91vh] bg-white-200 grid md:grid-cols-2 justify-center items-center px-20 pb-10 md:pb-32 md:gap-16"
      >
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-center text-4xl text-primary pb-10">
            About Me
          </h1>
          <p className="text-center max-w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            laudantium possimus quisquam, accusamus, tempora officiis illo neque
            quibusdam amet nam dignissimos. Pariatur necessitatibus quidem
            consequatur in error accusantium voluptates, quaerat laborum. Illo
            quisquam quia consequatur repudiandae saepe ad perspiciatis eius
            unde fugiat. Distinctio ipsam architecto tenetur totam, alias
            doloribus sunt.
          </p>
        </div>
        <Gallery />
      </div>
    </Reveal>
  );
}

export default About;
