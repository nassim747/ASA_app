"use client";

import { motion } from 'framer-motion';
import { ChevronDown, Users, Heart, Globe, Star } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const eventsSection = document.getElementById('events');
    if (eventsSection) {
      eventsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, label: 'Active Members', value: '250+' },
    { icon: Heart, label: 'Events Hosted', value: '50+' },
    { icon: Globe, label: 'Years Active', value: '15+' },
    { icon: Star, label: 'Community Impact', value: '∞' },
  ];

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with Modern Gradient */}
      <div className="absolute inset-0 gradient-algerian"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Algerian Students
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-green-400 to-blue-400">
                Association
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              Connecting Algerian students at McGill University through culture, 
              community, and shared experiences. Join us in celebrating our heritage 
              while building lifelong friendships.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-modern text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              Explore Events
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-modern text-lg px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold transition-all duration-300"
            >
              Join Our Community
            </motion.button>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 text-center rounded-2xl backdrop-blur-lg"
              >
                <stat.icon className="w-8 h-8 text-white mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm sm:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            onClick={scrollToNext}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
            >
              <span className="text-sm mb-2">Discover More</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
          
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/10 to-transparent"></div>
    </section>
  );
} 