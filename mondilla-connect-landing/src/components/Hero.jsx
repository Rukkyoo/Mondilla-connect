import React from "react";
import { motion } from "motion/react";
import { IoRocketOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="flex flex-col lg:flex-row lg:justify-between lg:gap-6 items-center h-fit text-center bg-[var(--bg-primary)] text-[var(--text-primary)] pb-10 scroll-mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      aria-label="Hero section"
    >
      <motion.div
        className="flex flex-col items-center justify-center text-center px-4 sm:px-8 py-10 sm:py-16 lg:text-left lg:items-start lg:px-10 lg:w-[50vw]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="text-4xl mt-10 font-bold sm:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Collaborate faster. Deliver together.
        </motion.h1>
        <motion.p
          className="mt-6 text-[var(--text-secondary)] text-lg sm:text-lg lg:pr-40"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Mondilla Connect centralizes conversations, tasks, and files so teams
          can move from ideas to impact without the busy work.
        </motion.p>
        <motion.button
          className="bg-blue-500 font-semibold w-44 mt-6 text-white hover:bg-blue-600 py-2 px-4 rounded-lg flex items-center justify-center cursor-pointer transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <IoRocketOutline className="mr-2" />
          Get Started Free
        </motion.button>
      </motion.div>
      <motion.div
        className="lg:mr-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.img
          src="hero.jpg"
          alt="Team collaboration dashboard showing task management, file sharing, and communication features in Mondilla Connect"
          className="mt-8 rounded-lg border-2 border-[var(--border-primary)] shadow-lg w-92 sm:w-[60vw] lg:mr-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
      </motion.div>
      </motion.section>
  );
};

export default Hero;