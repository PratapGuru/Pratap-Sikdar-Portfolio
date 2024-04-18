import React, { useState } from "react";
import education from "../../data/education";
import SectionTitle from "../../Components/SectionTitle";
import { motion } from "framer-motion";

function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  return (
    <div>
      <SectionTitle title="My Qualifications" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-accentColorOne w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
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
                {edu.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="flex item-center justify-center gap-10 sm:flex-col">
          {selectedItemIndex !== null && education[selectedItemIndex] && (
            <div className="flex flex-row gap-5">
              <img
                src={education[selectedItemIndex].image}
                alt="Project Images"
                className="h-auto w-30 md:h-40 lg:h-32 xl:h-64 bg-transparent" // Set background to transparent
              />
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-lightGrey text-2xl gap-10 mb-6">
                    {" "}
                    {/* Added margin-bottom */}
                    {education[selectedItemIndex].instituteName}
                  </h1>
                  <h2 className="text-accentColorTwo text-xl gap-10">
                    {education[selectedItemIndex].batch}
                  </h2>
                  <h2 className="text-accentColorTwo text-xl gap-10">
                    {education[selectedItemIndex].course}
                  </h2>
                  <h2 className="text-lightGrey text-xl gap-10">
                    {education[selectedItemIndex].marks}
                  </h2>
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

export default Courses;
