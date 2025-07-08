'use client'

import { useEffect, useRef, useState } from 'react'
import { Users, Calendar, Award, MapPin, ChevronDown, Instagram, Heart, MessageCircle } from 'lucide-react'

interface FeedItem {
  id: number
  image: string
  stat: {
    number: string
    label: string
    description: string
  }
  caption: string
  location: string
  date: string
  likes: number
  comments: number
}

const feedData: FeedItem[] = [
  {
    id: 1,
    image: "/api/placeholder/1200/800",
    stat: {
      number: "150+",
      label: "Active Members",
      description: "Strong community across all faculties"
    },
    caption: "Building bridges between Algerian students at McGill University. Our diverse community spans engineering, medicine, business, and arts.",
    location: "McGill University Campus",
    date: "2 days ago",
    likes: 89,
    comments: 23
  },
  {
    id: 2,
    image: "/api/placeholder/1200/800",
    stat: {
      number: "25+",
      label: "Events This Year",
      description: "Cultural celebrations to academic workshops"
    },
    caption: "From traditional Algerian dinners to professional networking sessions - we create experiences that celebrate our heritage while building our future.",
    location: "Montreal, QC",
    date: "5 days ago",
    likes: 156,
    comments: 41
  },
  {
    id: 3,
    image: "/api/placeholder/1200/800",
    stat: {
      number: "5",
      label: "Years of Excellence",
      description: "Established community since 2019"
    },
    caption: "Half a decade of promoting Algerian culture, academic excellence, and professional development. Our legacy continues to grow stronger.",
    location: "ASA Events Hall",
    date: "1 week ago",
    likes: 203,
    comments: 67
  },
  {
    id: 4,
    image: "/api/placeholder/1200/800",
    stat: {
      number: "12+",
      label: "Strategic Partnerships",
      description: "Collaborations across Montreal"
    },
    caption: "Partnering with student organizations, local businesses, and community leaders to expand opportunities for our members.",
    location: "Downtown Montreal",
    date: "2 weeks ago",
    likes: 124,
    comments: 35
  },
  {
    id: 5,
    image: "/api/placeholder/1200/800",
    stat: {
      number: "500+",
      label: "Extended Network",
      description: "Students, alumni, and supporters"
    },
    caption: "Our family extends beyond current students to include successful alumni, mentors, and community supporters who guide our journey.",
    location: "Alumni Network Event",
    date: "3 weeks ago",
    likes: 287,
    comments: 92
  }
]

export default function Hero() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [activeItem, setActiveItem] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set(prev).add(index))
            setActiveItem(index)
          }
        })
      },
      {
        threshold: 0.6,
        rootMargin: '-100px 0px'
      }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-black">
      {/* Hero Header */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Video/Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 min-h-screen flex items-center justify-center text-white">
          <div className="container text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent">
                ASA McGill
              </h1>
              <p className="text-xl md:text-3xl mb-4 text-gray-200">
                Algerian Students Association
              </p>
              <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-300">
                Where culture meets excellence. Join Montreal's most vibrant Algerian student community.
              </p>
              
              {/* Interactive Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { icon: Users, number: "150+", label: "Members" },
                  { icon: Calendar, number: "25+", label: "Events" },
                  { icon: Award, number: "5", label: "Years" },
                  { icon: MapPin, number: "12+", label: "Partners" }
                ].map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                      <item.icon className="w-8 h-8 text-primary-400 mx-auto mb-3" />
                      <div className="text-3xl font-bold text-white mb-1">{item.number}</div>
                      <div className="text-sm text-gray-300">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </div>

      {/* Full-Screen Feed */}
      <div className="relative">
        {feedData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => { itemRefs.current[index] = el }}
            data-index={index}
            className="min-h-screen relative overflow-hidden"
          >
            {/* Full-screen background image */}
            <div className="absolute inset-0">
              <img
                src={item.image}
                alt={item.caption}
                className={`w-full h-full object-cover transition-all duration-2000 ${
                  visibleItems.has(index) ? 'scale-100' : 'scale-110'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Content overlay */}
            <div className={`relative z-10 min-h-screen flex items-end pb-20 transition-all duration-1000 delay-300 ${
              visibleItems.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}>
              <div className="container">
                <div className="max-w-4xl">
                  {/* Instagram-style post layout */}
                  <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                    {/* Post header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">ASA</span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">ASA McGill</div>
                          <div className="text-gray-300 text-sm">{item.location} • {item.date}</div>
                        </div>
                      </div>
                      <Instagram className="w-6 h-6 text-white" />
                    </div>

                    {/* Main stat */}
                    <div className="mb-6">
                      <div className="text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-primary-400 to-white bg-clip-text mb-2">
                        {item.stat.number}
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {item.stat.label}
                      </div>
                      <div className="text-lg text-gray-300 mb-4">
                        {item.stat.description}
                      </div>
                    </div>

                    {/* Caption */}
                    <p className="text-lg text-white leading-relaxed mb-6">
                      {item.caption}
                    </p>

                    {/* Engagement */}
                    <div className="flex items-center justify-between pt-6 border-t border-white/20">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>{item.likes}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-white hover:text-primary-400 transition-colors">
                          <MessageCircle className="w-5 h-5" />
                          <span>{item.comments}</span>
                        </button>
                      </div>
                      <div className="text-gray-400 text-sm">
                        {index + 1} / {feedData.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress indicator */}
            <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
              <div className="flex flex-col space-y-2">
                {feedData.map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-8 rounded-full transition-all duration-300 ${
                      i === activeItem ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action */}
      <div className="min-h-screen bg-gradient-to-br from-primary-900 via-black to-primary-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 container text-center text-white">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-primary-300 bg-clip-text text-transparent">
            Join the Movement
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Be part of Montreal's most dynamic Algerian student community. Connect, grow, and make your mark.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold px-12 py-4 rounded-full text-lg hover:scale-105 transition-transform duration-300 shadow-2xl">
              Get Involved
            </button>
            <button className="border-2 border-white text-white font-bold px-12 py-4 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 