import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import SectionTitle from "../../Components/SectionTitle";

function Project() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-accentColorOne w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((pro, index) => (
            <motion.div
              key={pro._id}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10 
                ${
                  selectedItemIndex === index
                    ? "text-lightGrey border-accentColorTwo border-l-4 -ml-[3px] bg-accentColorTwo bg-opacity-10 py-3 sm:w-40"
                    : "text-lightGrey"
                }`}
              >
                {pro.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="flex item-center justify-center gap-10 sm:flex-col">
          {selectedItemIndex !== null && projects[selectedItemIndex] && (
            <div>
              <img
                src={projects[selectedItemIndex].image}
                alt="Project Images"
                className="h-50 w-72"
              />
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-lightGrey text-2xl mb-2 mt-2">
                    {projects[selectedItemIndex].title}
                  </h1>
                  <p className="text-accentColorTwo mb-2 flex-shrink-0">
                    {projects[selectedItemIndex].description}
                  </p>
                  <a
                    href={projects[selectedItemIndex].link}
                    className="text-lightGrey"
                  >
                    Click here for Github Repositry
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-[100px] w-[100px] ml-auto mt-0">
        <dotlottie-player
          src="https://lottie.host/472e2d5a-6128-4e78-a01c-e3871c0c8100/WrATOOBZRt.json"
          background="transparent"
          speed="0.5"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default Project;
