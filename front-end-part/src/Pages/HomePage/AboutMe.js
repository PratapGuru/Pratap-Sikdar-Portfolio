import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

import SectionTitle from "../../Components/SectionTitle";
import profilePicture from "../../Images/profile-pic.png";
import frontEndPic from "../../Images/frontEnd.jpg";
import backEndPic from "../../Images/backEnd.jpg";
import database from "../../Images/database.jpg";
import dsa from "../../Images/dsa.jpg";

function AboutMe() {
  const frontEndSkills = ["Html", "CSS", "JavaScript", "ReactJs"];
  const backEndSkills = ["NodeJs", "ExpressJs"];
  const databaseSkills = ["MongoDB"];
  const othersSkills = ["C", "C++", "Python"];
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { descriptionOne, descriptionTwo } = about;

  return (
    <div>
      <SectionTitle title="About Me" />

      <div className="flex sm:flex-col items-center w-full">
        <div className="h-[70vh] w-1/3 sm:w-full flex justify-center items-center">
          <img
            src={profilePicture}
            alt="Pratap Profile Picture"
            className="max-h-[70vh] object-cover"
          />
        </div>
        <div className="flex flex-col gap-5 w-2/3 sm:w-full px-5">
          <p className="text-lightGrey">{descriptionOne || ""}</p>
          <p className="text-lightGrey">{descriptionTwo || ""}</p>
        </div>
        <div className="h-[400px] ml-4">
          <dotlottie-player
            src="https://lottie.host/17f03660-dc1a-44f8-ba93-70ad2320bf36/LYztALNdYz.json"
            background="transparent"
            speed="0.5"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>

      <div className="py-5 w-full sm:flex-col">
        <h1 className="text-accentColorTwo text-3xl mb-4 ">
          Technical Skills I have:
        </h1>

        <div className="flex justify-center gap-6 sm:flex-col">
          <div className="border border-accentColorTwo rounded p-4 w-max-content">
            <h1 className="text-xl text-lightGrey">Front End Technologies</h1>
            <hr className="border-accentColorTwo my-2" />
            <div className="flex items-center">
              <img
                src={frontEndPic}
                alt="Front End Image"
                className="border border-accentColorTwo max-w-[150px] max-h-[150px] mr-4 rounded"
              />
              <ul className="list-disc pl-4">
                {frontEndSkills.map((skill, index) => (
                  <li key={index} className="text-lightGrey">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border border-accentColorTwo rounded p-4 w-max-content">
            <h1 className="text-xl text-lightGrey">Back End Technologies</h1>
            <hr className="border-accentColorTwo my-2" />
            <div className="flex items-center">
              <img
                src={backEndPic}
                alt="Back End Image"
                className=" border border-accentColorTwo max-w-[150px] max-h-[150px] mr-4 rounded"
              />
              <ul className="list-disc pl-4">
                {backEndSkills.map((skill, index) => {
                  return (
                    <div key={index} className="flex text-lightGrey">
                      <li>{skill}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="border border-accentColorTwo rounded p-4 w-max-content">
            <h1 className="text-xl text-lightGrey justify-center text-center">
              Data Base
            </h1>
            <hr className="border-accentColorTwo my-2" />
            <div className="flex items-center">
              <img
                src={database}
                alt="Data Base Image"
                className=" border border-accentColorTwo max-w-[150px] max-h-[150px] mr-4 rounded"
              />
              <ul className="pl-4 list-disc">
                {databaseSkills.map((skill, index) => {
                  return (
                    <div key={index} className="flex text-lightGrey">
                      <li>{skill}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="border border-accentColorTwo rounded p-4 w-max-content">
            <h1 className="text-xl text-lightGrey text-center">
              Other Languages
            </h1>
            <hr className="border-accentColorTwo my-2" />
            <div className="flex items-center">
              <img
                src={dsa}
                alt="Data Base Image"
                className=" border border-accentColorTwo max-w-[150px] max-h-[150px] mr-4 rounded"
              />
              <ul className="pl-4 list-disc">
                {othersSkills.map((skill, index) => {
                  return (
                    <div key={index} className="flex text-lightGrey">
                      <li>{skill}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </div>
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

export default AboutMe;
