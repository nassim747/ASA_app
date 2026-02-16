import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Clock } from 'lucide-react'
import DecorativeBorder from '@/components/DecorativeBorder'
import { upcomingEvents, pastEvents } from '@/data/events'

export default function Events() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="subtitle-heritage mb-6">
              Mark Your Calendar
            </p>
            <h1 className="heading-heritage text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Upcoming <span className="font-serif italic">Events</span>
            </h1>
            <p className="font-sans text-xl text-heritage-black/70 max-w-2xl mx-auto leading-relaxed">
              Join us for cultural celebrations, academic talks, social gatherings, 
              and networking opportunities throughout the year.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-heritage-cream-dark">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="subtitle-heritage text-heritage-red mb-4">What&apos;s Next</p>
              <h2 className="heading-heritage text-3xl md:text-4xl">
                Upcoming <span className="font-serif italic">Events</span>
              </h2>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index} 
                  className={`card-heritage ${event.featured ? 'border-heritage-green' : ''}`}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Date Box */}
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 ${event.featured ? 'bg-heritage-green' : 'bg-heritage-red'} text-heritage-white flex flex-col items-center justify-center`}>
                        <span className="text-2xl font-serif font-bold">{event.date.day}</span>
                        <span className="text-xs uppercase tracking-wide">{event.date.month}</span>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1">
                      {event.featured && (
                        <p className="subtitle-heritage text-heritage-red mb-2">Featured Event</p>
                      )}
                      <h3 className="font-serif text-xl md:text-2xl text-heritage-green mb-2">
                        {event.title}
                      </h3>
                      <p className="font-serif italic text-heritage-black/70 mb-3">
                        {event.subtitle}
                      </p>
                      <p className="font-sans text-heritage-black/60 mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-heritage-black/60">
                          <MapPin className="w-4 h-4 text-heritage-green" />
                          <span className="font-sans">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-heritage-black/60">
                          <Clock className="w-4 h-4 text-heritage-green" />
                          <span className="font-sans">{event.time}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action */}
                    {event.ticketUrl && (
                      <div className="flex-shrink-0 flex items-center">
                        <a 
                          href={event.ticketUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-2 px-6 inline-block"
                        >
                          Buy Your Ticket
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="subtitle-heritage mb-4">Looking Back</p>
              <h2 className="heading-heritage text-3xl md:text-4xl">
                Notable Past <span className="font-serif italic">Events</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {pastEvents.map((event, index) => (
                <div key={index} className="card-heritage p-0 overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/3] bg-heritage-cream-dark border-b border-heritage-sand overflow-hidden">
                    <Image 
                      src={event.image} 
                      alt={event.title}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Event Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-serif text-lg text-heritage-green mb-2">{event.title}</h3>
                    <p className="font-sans text-sm text-heritage-black/60">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Border */}
      <DecorativeBorder />
    </div>
  )
}
