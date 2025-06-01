import React from 'react';
import { motion } from 'framer-motion';
import work from '../images/workimage.jpg';
import { FaDumbbell, FaRunning, FaHeartbeat, FaUsers } from 'react-icons/fa';

const WorkoutSessions = () => {
  const bootcamps = [
    {
      title: "High Intensity Training",
      description: "Push your limits with our intense cardio and strength training sessions",
      icon: <FaDumbbell className="w-6 h-6" />,
      duration: "45 mins",
      level: "Intermediate"
    },
    {
      title: "Cardio Blast",
      description: "Boost your endurance with dynamic cardio workouts",
      icon: <FaRunning className="w-6 h-6" />,
      duration: "30 mins",
      level: "All Levels"
    },
    {
      title: "Core & Conditioning",
      description: "Build core strength and improve overall conditioning",
      icon: <FaHeartbeat className="w-6 h-6" />,
      duration: "40 mins",
      level: "Beginner"
    },
    {
      title: "Group Training",
      description: "Join our energetic group sessions for motivation and results",
      icon: <FaUsers className="w-6 h-6" />,
      duration: "60 mins",
      level: "All Levels"
    }
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img 
                src={work} 
                alt="Workout Session" 
                className="rounded-2xl shadow-2xl w-full object-cover h-[600px]"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-2xl" />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-primary">
                Featured <span className="text-gradient">Bootcamps</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Transform your body and mind with our specialized training programs
              </p>

              <div className="grid gap-6">
                {bootcamps.map((camp, index) => (
                  <motion.div
                    key={camp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card hover:bg-gray-800/80 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all duration-300">
                        {camp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{camp.title}</h3>
                        <p className="text-gray-400 mb-3">{camp.description}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-blue-500">{camp.duration}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-blue-500">{camp.level}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
