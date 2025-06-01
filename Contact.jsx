import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { FaEnvelope, FaUser, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import strong from '../images/strong.jpg';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    const formData = new FormData(form.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (!name || !name.trim()) {
      toast.error('Please enter your name');
      return;
    }
    if (!email || !email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (!message || !message.trim()) {
      toast.error('Please enter your message');
      return;
    }

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully! We will contact you soon.');
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 234 567 890",
      color: "blue"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email Us",
      content: "info@eliteedgefitness.com",
      color: "purple"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Visit Us",
      content: "123 Fitness Street, Gym City",
      color: "pink"
    }
  ];

  return (
    <section className="section-padding bg-gray-900 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={strong} 
          alt="Contact Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="heading-primary">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our programs or want to start your fitness journey? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={handleSubmit} className="card backdrop-blur-lg bg-white/10">
              <div className="space-y-6">
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="input-field"
                    placeholder="+1 234 567 890"
                  />
                </div>
                <div>
                  <label className="text-white text-sm font-medium mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="input-field"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className={`btn-primary w-full ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-${info.color}-500/10 text-${info.color}-400`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map or Additional Info */}
            <div className="card mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-400">
                <p>Monday - Friday: 6:00 AM - 10:00 PM</p>
                <p>Saturday: 7:00 AM - 8:00 PM</p>
                <p>Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;