import React from "react";
import { IoRocketOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div id="home" className="flex flex-col lg:flex-row lg:justify-between lg:gap-6 items-center h-fit text-center bg-[var(--background)] transition-all duration-300 ease-in-out dark:bg-[#0b0b0c] dark:text-white pb-10 scroll-mt-24">
      <div className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-10 sm:py-16 lg:text-left lg:items-start lg:px-10 lg:w-[50vw]">
        <h1 className="text-4xl mt-10 font-bold sm:text-7xl">
          Collaborate faster. Deliver together.
        </h1>
        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg sm:text-lg lg:pr-40">
          Mondilla Connect centralizes conversations, tasks, and files so teams
          can move from ideas to impact without the busy work.
        </p>
        <button className="bg-blue-400 font-semibold w-44 mt-6 text-white dark:text-black py-2 px-4 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base">
          <IoRocketOutline className="mr-2" />
          Get Started Free
        </button>
      </div>
      <div className="lg:mr-10">
        {" "}
        <img
          src="hero.jpg"
          alt="Hero-Image"
          className="mt-8 rounded-lg border-2 dark:border-gray-800 shadow-lg w-92 sm:w-[60vw] lg:mr-20"
        />
      </div>
    </div>
  );
};

export default Hero;
