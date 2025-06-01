import React from 'react';
import { motion } from 'framer-motion';
import dumb from '../images/dumb.jpg';
import rope from '../images/rope.jpg';
import pull from '../images/pull.jpg';
import run from '../images/run.jpg';
import weight from '../images/weight.jpg';

const Gallery = () => {
  const galleryItems = [
    {
      image: dumb,
      title: "Weight Training",
      category: "Strength"
    },
    {
      image: rope,
      title: "Battle Ropes",
      category: "Cardio"
    },
    {
      image: pull,
      title: "Pull-ups",
      category: "Calisthenics"
    },
    {
      image: run,
      title: "Running Track",
      category: "Cardio"
    },
    {
      image: weight,
      title: "Free Weights",
      category: "Strength"
    }
  ];

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take a look at our state-of-the-art facility and equipment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.h3
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    className="text-xl font-semibold text-white mb-2"
                  >
                    {item.title}
                  </motion.h3>
                  <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Gallery Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {[
            { number: "1000+", label: "Members" },
            { number: "50+", label: "Equipment" },
            { number: "30+", label: "Trainers" },
            { number: "100%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div
              key={index}
              className="card text-center py-8"
            >
              <h3 className="text-3xl font-bold text-blue-500 mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
