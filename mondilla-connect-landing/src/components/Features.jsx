import React from "react";
import { CiCloud } from "react-icons/ci";
import { LuMessagesSquare } from "react-icons/lu";
import { FaChartSimple } from "react-icons/fa6";

const features = [
  {
    id: 1,
    icon: <LuMessagesSquare />,
    title: "Real-time Discussions",
    description:
      "Keep context with threaded chat and mentions that stay attached to work.",
  },
  {
    id: 2,
    icon: <FaChartSimple />,
    title: "Tasks & Boards",
    description:
      "Organize sprints with Kanban boards, due dates, and custom statuses.",
  },
  {
    id: 3,
    icon: <CiCloud />,
    title: "File Sharing",
    description:
      "Upload docs and designs with automatic version history and previews.",
  },
];

const Features = () => {
  return (
    <div id="features" className="bg-[var(--background)] px-4 py-10 lg:py-16 z-10 transition-all duration-300 ease-in-out dark:bg-[#0b0b0c] dark:text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-3 dark:text-white">
            Everything your team needs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base xl:text-lg max-w-2xl mx-auto">
            Plan, discuss, and ship in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all duration-300 ease-in-out dark:bg-[#0b0b0c]  dark:text-white">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 dark:bg-[#141416] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300 dark:bg-[#0f1724]">
                  <span className="text-blue-600 text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300 ">
                    {feature.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg lg:text-xl dark:text-white font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm lg:text-base flex items-center group-hover:translate-x-1 transition-all duration-300">
                  Learn more
                  <svg 
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-12 lg:mt-16 dark:bg-[#141416]">
          <div className=" rounded-2xl p-6 lg:p-8 border dark:border-gray-800 border-blue-100  dark:bg-[#141416]">
            <h3 className="text-lg dark:text-white lg:text-xl font-bold text-gray-900 mb-2">
              Ready to get started?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mb-6">
              Join thousands of teams already using Mondilla Connect
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 dark:text-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;