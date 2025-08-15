import React from "react";

const pricing = [
  {
    id: 1,
    plan: "Basic",
    price: "$0",
    features: ["Unlimited viewers", "3 projects", "Community support"],
  },
  {
    id: 2,
    plan: "Standard",
    price: "$12",
    popularity: "Most Popular",
    features: ["Unlimited projects", "Task automations", "Priority support"],
  },
  {
    id: 3,
    plan: "Premium",
    price: "$24",
    features: ["SSO & roles", "Advanced analytics", "1TB storage"],
  },
];

const Pricing = () => {
  return (
    <div className="dark:bg-[#0b0b0c] flex flex-col items-center px-4 py-10 lg:py-16">
      <div className="max-w-7xl w-full">
        <h3 className="text-2xl lg:text-3xl text-center font-bold dark:text-white">
          Simple, transparent pricing
        </h3>
        <p className="text-center dark:text-gray-400 text-gray-600 mt-2 text-sm lg:text-base">
          Choose a plan that scales with your team.
        </p>
        
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 lg:mt-12 max-w-5xl mx-auto">
          {pricing.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-6 lg:p-8 rounded-xl shadow-lg dark:border-gray-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popularity 
                  ? "bg-white border-2 dark:bg-[#141416] border-blue-500 scale-100 lg:scale-100" 
                  : "bg-white border dark:bg-[#141416] border-gray-200"
              }`}
            >
              {plan.popularity && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white font-bold text-xs px-4 py-1 rounded-full shadow-md">
                    {plan.popularity}
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-xl dark:text-white lg:text-2xl font-bold text-gray-900 mb-2">
                  {plan.plan}
                </h3>
                <div className="mb-6">
                  <span className="text-3xl lg:text-4xl dark:text-white font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 text-sm lg:text-base dark:text-white">/user</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start dark:text-white text-gray-600 text-sm lg:text-base">
                    <svg 
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 text-sm lg:text-base ${
                  plan.popularity
                    ? "bg-blue-500 dark:text-black hover:bg-blue-600 text-white shadow-md hover:shadow-lg"
                    : "bg-gray-100 hover:bg-gray-900 dark:border-gray-800 dark:text-white dark:bg-[#141416] text-gray-900 border border-gray-300"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;