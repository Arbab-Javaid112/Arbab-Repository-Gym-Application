import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import dumbbellRack from '../images/Pricing.jpg';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Basic Plan",
      amount: "$29.99",
      period: "per month",
      features: [
        "Access to gym equipment",
        "Basic workout plans",
        "Locker room access",
        "Fitness assessment"
      ],
      popular: false,
      color: "blue"
    },
    {
      title: "Standard Plan",
      amount: "$79.99",
      period: "per 3 months",
      features: [
        "All Basic Plan features",
        "Personal trainer (2x/month)",
        "Group fitness classes",
        "Nutrition consultation"
      ],
      popular: true,
      color: "purple"
    },
    {
      title: "Premium Plan",
      amount: "$149.99",
      period: "per 6 months",
      features: [
        "All Standard Plan features",
        "Unlimited personal training",
        "Premium fitness classes",
        "Monthly body analysis"
      ],
      popular: false,
      color: "pink"
    },
    {
      title: "Ultimate Plan",
      amount: "$249.99",
      period: "per year",
      features: [
        "All Premium Plan features",
        "24/7 gym access",
        "Customized meal plans",
        "Sports massage (1x/month)"
      ],
      popular: false,
      color: "orange"
    }
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="heading-primary">
              Choose Your <span className="text-gradient">Perfect Plan</span>
            </h2>
            <p className="text-gray-400 mb-12">
              Transform your fitness journey with our flexible membership options
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`card relative overflow-hidden ${
                    plan.popular ? 'border-blue-500 border-2' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-xl font-semibold text-white mb-4">{plan.title}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">{plan.amount}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <FaCheck className="text-blue-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="btn-primary w-full flex items-center justify-center group">
                    Get Started
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src={dumbbellRack} 
                alt="Gym Equipment" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[800px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;