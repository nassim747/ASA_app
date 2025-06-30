"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, ArrowRight, Ticket } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Events() {
  const upcomingEvents = [
    {
      title: "Algerian Night Gala",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "McGill Union Ballroom",
      description: "Join us for an elegant evening celebrating Algerian culture with traditional music, dance, and cuisine.",
      attendees: 150,
      image: "/api/placeholder/400/300",
      featured: true,
      tags: ["Culture", "Gala", "Music"]
    },
    {
      title: "Study Session & Couscous",
      date: "February 28, 2024",
      time: "2:00 PM",
      location: "McLennan Library",
      description: "Study together for midterms while enjoying homemade couscous and traditional Algerian tea.",
      attendees: 45,
      image: "/api/placeholder/400/300",
      featured: false,
      tags: ["Study", "Food", "Community"]
    },
    {
      title: "Soccer Tournament",
      date: "March 8, 2024",
      time: "1:00 PM",
      location: "Lower Field",
      description: "Annual friendly soccer tournament with teams from various cultural associations.",
      attendees: 80,
      image: "/api/placeholder/400/300",
      featured: false,
      tags: ["Sports", "Competition", "Social"]
    }
  ];

  const pastEvents = [
    {
      title: "Algerian Independence Day Celebration",
      date: "November 1, 2023",
      description: "Commemorated Algeria's independence with cultural performances and historical presentations.",
      attendees: 200,
      tags: ["History", "Culture", "Celebration"]
    },
    {
      title: "Orientation Week Welcome",
      date: "September 5, 2023",
      description: "Welcomed new Algerian students to McGill with campus tours and networking.",
      attendees: 120,
      tags: ["Welcome", "Networking", "Orientation"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 bg-blue-500/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-green-500/5 rounded-full"
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
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join us for exciting events that celebrate our culture, build community, and create lasting memories
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 mb-20"
        >
          {upcomingEvents.map((event) => (
            <motion.div
              key={event.title}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className={cn(
                "card-modern overflow-hidden",
                event.featured && "lg:grid-cols-2",
                !event.featured && "max-w-2xl mx-auto"
              )}
            >
              {event.featured ? (
                // Featured Event Layout
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-video lg:aspect-square bg-gradient-algerian relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Calendar className="w-16 h-16 mx-auto mb-4" />
                        <p className="text-lg font-medium">Featured Event</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {event.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar className="w-5 h-5 mr-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Clock className="w-5 h-5 mr-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin className="w-5 h-5 mr-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Users className="w-5 h-5 mr-3" />
                        <span>{event.attendees} expected attendees</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-modern w-full sm:w-auto flex items-center justify-center space-x-2"
                    >
                      <Ticket className="w-5 h-5" />
                      <span>Register Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              ) : (
                // Regular Event Layout
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{event.attendees} attending</span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-modern text-sm px-4 py-2"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center gradient-text mb-12">
            Past Events
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="card-modern p-6"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {event.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {event.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{event.attendees} attended</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
          <div className="card-modern p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Follow us on social media and join our mailing list to never miss an event!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-modern"
            >
              Get Notifications
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
} 