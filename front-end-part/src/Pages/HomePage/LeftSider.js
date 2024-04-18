import React from "react";
import { motion } from "framer-motion";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex flex-col items-center cursor-pointer"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com/pratap.sikdar.121/">
            <i class="ri-facebook-circle-fill text-gray-400 "></i>
          </a>
          <a href="https://www.instagram.com/pratap___guru/">
            <i class="ri-instagram-fill text-gray-400 "></i>
          </a>
          <a href="https://www.linkedin.com/in/pratap-sikdar-171215189/">
            <i class="ri-linkedin-box-fill text-gray-400 "></i>
          </a>
          <a href="https://github.com/PratapGuru?tab=repositories">
            <i class="ri-github-fill text-gray-400 "></i>
          </a>
        </div>
        <div className="w-[1px] h-32 bg-[#66CCCC] sm:hidden"></div>
      </motion.div>
    </div>
  );
}

export default LeftSider;
