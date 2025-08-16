import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" }); // clear form
      setErrors({});
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <section
      id="contact"
      ref={ref}
      className="bg-[var(--background)] px-4 py-10 lg:py-16 dark:bg-[#0b0b0c] scroll-mt-15"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 dark:text-white">
            Contact us
          </h3>
          <p className="text-gray-600 text-sm lg:text-base dark:text-gray-400">
            Have questions? We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 lg:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 dark:bg-[#141416]"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    className="block text-sm font-semibold text-gray-700 mb-2 dark:text-white"
                    htmlFor="name"
                  >
                    Name *
                  </label>
                  <input
                    className={`w-full dark:border-gray-800 dark:text-white px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm lg:text-base ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    className="block dark:text-white text-sm font-semibold text-gray-700 mb-2"
                    htmlFor="email"
                  >
                    Email *
                  </label>
                  <input
                    className={`w-full dark:border-gray-800 dark:text-white px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm lg:text-base ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block dark:text-white text-sm font-semibold text-gray-700 mb-2"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    className={`w-full dark:border-gray-800 dark:text-white px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none text-sm lg:text-base ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  className="w-full bg-blue-500 dark:text-black hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base"
                  type="submit"
                >
                  Send Message
                </button>

                {/* Success message */}
                {submitted && (
                  <p className="text-green-500 text-sm mt-3">
                    Your message has been sent successfully!
                  </p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 lg:p-8 h-fit dark:bg-[#141416] dark:border-gray-800">
                <h4 className="text-lg lg:text-xl font-bold text-gray-900 mb-6 dark:text-white">
                  Get in touch
                </h4>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-[#0f1724] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm lg:text-base dark:text-white">
                        Email
                      </h5>
                      <p className="text-gray-600 text-sm lg:text-base dark:text-gray-400">
                        support@mondilla.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-[#0f1724] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm lg:text-base dark:text-white">
                        Phone
                      </h5>
                      <p className="text-gray-600 text-sm lg:text-base dark:text-gray-400">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-[#0f1724] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm lg:text-base dark:text-white">
                        Address
                      </h5>
                      <p className="text-gray-600 text-sm lg:text-base dark:text-gray-400">
                        123 Mondilla St, Suite 100
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <p className="text-xs lg:text-sm text-gray-500 text-center">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
