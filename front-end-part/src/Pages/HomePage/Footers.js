import React from "react";

function Footers() {
  return (
    <div className="py-10">
      <div className="h-[1px] w-full bg-blue-700"></div>
      <div className="flex justify-center items-center">
        <dotlottie-player
          src="https://lottie.host/fa76d0a0-7838-431e-83ca-d47cbac27188/g8RqvpwoAR.json"
          background="transparent"
          speed="0.5"
          loop
          autoplay
          style={{ width: "200px", height: "200px" }} // Adjust size here
        ></dotlottie-player>
      </div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-accentColorTwo mb-2">Designed and Developed By</h1>
        <h1 className="text-accentColorTwo">Pratap Sikdar</h1>
      </div>
    </div>
  );
}

export default Footers;
