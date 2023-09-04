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
            I'm a tech enthusiast and aspiring software developer from the
            Boston area. With an interest in both computer hardware and
            software, I have built several computers and love solving problems
            through code. Outside of computers, I love tennis, golf, and
            geography. Studying interesting maps and travelling the world are
            two of my greatest passions, as I ultimately hope to develop
            software with a focus on mapping the world.
          </p>
        </div>
        <Gallery />
      </div>
    </Reveal>
  );
}

export default About;
