import React from "react";
import { IoRocketOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="flex flex-col items-center  h-full  text-center">
      <h1 className="text-4xl mt-10 font-bold">
        Collaborate faster. Deliver together.
      </h1>
      <p className="mt-6 text-gray-600 text-lg px-6">
        Mondilla Connect centralizes conversations, tasks, and files so teams
        can move from ideas to impact without the busy work.
      </p>
      <button className="bg-blue-400 w-44 mt-5 text-white py-2 px-4 rounded-lg flex items-center justify-center">
        <IoRocketOutline className="mr-2" />
        Get Started Free
      </button>
      <img
        src="hero.jpg"
        alt="Hero-Image"
        className="mt-8 rounded-lg shadow-lg w-92"
      />
    </div>
  );
};

export default Hero;
