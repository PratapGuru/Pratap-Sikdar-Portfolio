import React, { useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const { portfolioData } = useSelector((state) => state.root);

  console.log("Portfolio Data", portfolioData);

  if (!portfolioData || !portfolioData.experience) {
    return <div>Loading experiences...</div>;
  }

  const { experience: experiences } = portfolioData;

  return (
    <div>
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-accentColorOne w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp._id}
              onClick={() => setSelectedItemIndex(index)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10 ${
                  selectedItemIndex === index
                    ? "text-lightGrey border-accentColorTwo border-l-4 -ml-[3px] bg-accentColorTwo bg-opacity-10 py-3 sm:w-40"
                    : "text-lightGrey"
                }`}
              >
                {exp.period}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-full">
          {selectedItemIndex !== null && (
            <div>
              <h1 className="text-lightGrey text-2xl mb-2 flex-shrink-0">
                {experiences[selectedItemIndex].title}
              </h1>
              <h1 className="text-accentColorTwo text-2xl mb-2 flex-shrink-0">
                {experiences[selectedItemIndex].company}
              </h1>
              <p className="text-white flex-shrink-0">
                {experiences[selectedItemIndex].description}
              </p>
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

export default Experiences;
