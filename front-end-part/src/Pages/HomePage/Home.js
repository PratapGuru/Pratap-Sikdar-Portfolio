// Home.js
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Experiences from "./Experiences";
import Project from "./Project";
import Courses from "./Courses";
import Contact from "./Contact";
import Education from "./Education";
import Footers from "./Footers";
import LeftSider from "./LeftSider";

function Home() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const aboutMeRef = useRef(null); // Create a ref here

  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-darkGreyish px-40 sm:px-5">
          <Intro scrollRef={aboutMeRef} />
          <div ref={aboutMeRef}>
            <AboutMe />
          </div>
          <Experiences />
          <Project />
          <Education />
          <Courses />
          <Contact />
          <Footers />
          <LeftSider />
        </div>
      )}
    </div>
  );
}

export default Home;
