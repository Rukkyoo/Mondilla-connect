import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section
      id="features"
      ref={ref}
      className="bg-[var(--bg-primary)] text-[var(--text-primary)] px-4 py-10 lg:py-16 z-10 scroll-mt-15"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[var(--text-primary)] mb-3">
            Everything your team needs
          </h2>
          <p className="text-[var(--text-secondary)] text-sm lg:text-base xl:text-lg max-w-2xl mx-auto">
            Plan, discuss, and ship in one place.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="bg-[var(--bg-secondary)] p-6 lg:p-8 rounded-xl shadow-lg border border-[var(--border-primary)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
            >
              {/* Icon Container */}
              <div className="mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300">
                  <span className="text-blue-600 text-xl lg:text-2xl group-hover:scale-110 transition-transform duration-300 ">
                    {feature.icon}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg lg:text-xl font-bold text-[var(--text-primary)] group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm lg:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="mt-6 pt-4 border-t border-[var(--border-primary)]">
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
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="bg-[var(--bg-secondary)] rounded-2xl p-6 lg:p-8 border border-[var(--border-primary)]">
            <h3 className="text-lg lg:text-xl font-bold text-[var(--text-primary)] mb-2">
              Ready to get started?
            </h3>
            <p className="text-[var(--text-secondary)] text-sm lg:text-base mb-6">
              Join thousands of teams already using Mondilla Connect
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base">
              Start Free Trial
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;