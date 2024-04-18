import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import variants from "../../Animation/variants";
import smoothTransition from "../../Animation/smoothTransition";

function Intro({ scrollRef }) {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  const scrollToAboutMe = () =>
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

  const resumeUrl =
    "https://github.com/PratapGuru/Resume-/raw/133133bf623f8cbc4e835077694f3fa826282116/Pratap_Sikdar_CV.pdf";

  const downloadResume = () => window.open(resumeUrl, "_blank");

  return (
    <div className="bg-darkGreyish flex flex-col items-start justify-center space-y-5 py-40 px-10 ">
      <motion.h1
        initial="initialLeft"
        animate="animate"
        variants={variants}
        transition={smoothTransition}
        className="text-accentColorTwo"
      >
        {welcomeText}
      </motion.h1>
      <div className="flex">
        <motion.h1
          initial="initialRight"
          animate="animate"
          variants={variants}
          transition={smoothTransition}
          className="text-7xl sm:text-3xl text-lightGrey font-semibold mr-4" // Added margin-right here
        >
          {firstName}
        </motion.h1>
        <motion.h1
          initial="initialLeft"
          animate="animate"
          variants={variants}
          transition={smoothTransition}
          className="text-7xl sm:text-3xl text-lightGrey font-semibold"
        >
          {lastName}
        </motion.h1>
      </div>
      <motion.h1
        initial="initialRight"
        animate="animate"
        variants={variants}
        transition={smoothTransition}
        className="text-5xl sm:text-3xl text-accentColorTwo font-semibold"
      >
        {caption}
      </motion.h1>
      <motion.p
        initial="initialLeft"
        animate="animate"
        variants={variants}
        transition={smoothTransition}
        className="text-accentColorTwo w-full md:w-2/3"
      >
        {description}
      </motion.p>
      <div className="flex sm:flex-col sm:gap-5">
        <motion.button
          initial="initialLeft"
          animate="animate"
          variants={variants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={smoothTransition}
          onClick={scrollToAboutMe}
          className="border-2 border-lightGrey text-lightGrey px-10 py-3 rounded mr-8 sm:mr-0 sm:mb-4"
        >
          Explore More About Me
        </motion.button>
        <motion.button
          initial="initialRight"
          animate="animate"
          variants={variants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={smoothTransition}
          onClick={downloadResume}
          className="border-2 border-lightGrey text-lightGrey px-10 py-3 rounded sm:flex-col"
        >
          Download my Resume
        </motion.button>
      </div>
    </div>
  );
}

export default Intro;
