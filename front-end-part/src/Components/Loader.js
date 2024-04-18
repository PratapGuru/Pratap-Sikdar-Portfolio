import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-darkGreyish z-[100]">
      <div className="flex gap-5 text-6xl sm:text-3xl"></div>
      <dotlottie-player
        src="https://lottie.host/539a0297-c7be-40c4-8252-f83fdfb8c07f/k2H3lbnfq9.json"
        background="transparent"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
      ></dotlottie-player>
    </div>
  );
}

export default Loader;
