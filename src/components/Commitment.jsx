import React from "react";
import { useMediaQuery } from "react-responsive";
import Reveal from "./Reveal";

function Commitment({ title, dates, description, skills, image }) {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 760px" });

  return (
    <Reveal>
      <div className="flex justify-start items-center sm:pl-20 pb-4">
        <div className="max-w-[80vw]">
          {isLargeScreen ? (
            <div className="flex flex-row justify-center items-center gap-20">
              <div className="flex flex-col justify-center items-center w-[15vw]">
                <h2 className="font-bold text-center text-xl text-primary pb-8">
                  {title}
                </h2>
                <img src={image} alt={title} width={120} height={120} />
              </div>
              <div className="flex flex-col max-w-[600px]">
                <h3 className="text-lg text-primary pt-2">{dates}</h3>
                <p className="text-primary text-md pt-6 pl-4">{description}</p>
                <div className="flex flex-row items-center gap-3 pl-4 px-2 pt-4">
                  {Object.entries(skills).map(([name, link]) => (
                    <div
                      key={name}
                      className="tooltip tooltip-top"
                      data-tip={name}
                    >
                      <img
                        className="pt-2 hover:scale-110 ease-in duration-200"
                        src={link}
                        alt={name}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex flex-row justify-between items-center w-[85vw] pr-10 pt-8">
                <h2 className="font-bold text-left text-xl text-primary">
                  {title}
                </h2>
                <img src={image} alt={title} width={80} height={80} />
              </div>
              <div className="flex flex-col max-w-[600px]">
                <h3 className="text-lg text-primary pt-2">{dates}</h3>
                <p className="text-primary text-md pt-6 pl-4">{description}</p>
                <div className="flex flex-row items-center gap-3 pl-4 px-2 pt-4">
                  {Object.entries(skills).map(([name, link]) => (
                    <div
                      key={name}
                      className="tooltip tooltip-top"
                      data-tip={name}
                    >
                      <img
                        className="pt-2 hover:scale-110 ease-in duration-200"
                        src={link}
                        alt={name}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default Commitment;
