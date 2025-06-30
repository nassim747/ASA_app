"use client";

import { motion } from 'framer-motion';
import { Heart, Users, Globe, Target, Award, BookOpen, Coffee, Music } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Community",
      description: "Building strong connections among Algerian students at McGill and beyond."
    },
    {
      icon: Globe,
      title: "Culture",
      description: "Preserving and sharing the rich heritage and traditions of Algeria."
    },
    {
      icon: Target,
      title: "Growth",
      description: "Supporting academic and personal development of our members."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Striving for excellence in all our endeavors and initiatives."
    }
  ];

  const activities = [
    {
      icon: BookOpen,
      title: "Academic Support",
      description: "Study groups, tutoring sessions, and academic resources"
    },
    {
      icon: Coffee,
      title: "Social Events",
      description: "Regular meetups, cultural nights, and networking opportunities"
    },
    {
      icon: Music,
      title: "Cultural Programs",
      description: "Traditional music, dance performances, and cultural workshops"
    },
    {
      icon: Users,
      title: "Community Service",
      description: "Volunteer opportunities and community outreach programs"
    }
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "250+", label: "Active Members" },
    { number: "50+", label: "Events Annually" },
    { number: "100%", label: "Passion Driven" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-red-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            About ASA McGill
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Algerian Students Association at McGill University has been a cornerstone of cultural 
            identity and community building for over 15 years, connecting students through shared heritage 
            and common goals.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="card-modern p-8 md:p-12 text-center">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-gradient-algerian rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Heart className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To create a vibrant and inclusive community that celebrates Algerian culture, supports 
              academic excellence, and fosters lifelong friendships among students at McGill University. 
              We strive to bridge the gap between our rich heritage and our Canadian experience, 
              creating a home away from home for all Algerian students.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="card-modern p-6 text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-algerian rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">
            What We Do
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="card-modern p-6 flex items-start space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  className="w-12 h-12 bg-gradient-algerian rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <activity.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {activity.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="card-modern p-8">
            <h3 className="text-2xl font-bold text-center gradient-text mb-8">
              Our Impact in Numbers
            </h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="text-3xl md:text-4xl font-bold gradient-text mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="card-modern p-8 bg-gradient-algerian text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Family?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Become part of a community that celebrates your heritage while embracing your future.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Involved Today
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 