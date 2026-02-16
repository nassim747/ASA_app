import Image from 'next/image'
import Link from 'next/link'
import DecorativeBorder from '@/components/DecorativeBorder'
import { upcomingEvents } from '@/data/events'

export default function Hero() {
  const featuredEvent = upcomingEvents.find((e) => e.featured) ?? upcomingEvents[0]

  return (
    <div className="bg-heritage-cream">
      {/* Main Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="heading-heritage text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
              Algerian Students&apos;<br />
              <span className="emphasis">Association at McGill</span>
            </h1>

            {/* Location Label */}
            <p className="subtitle-heritage mb-8">
              McGill University — Montreal, Quebec
            </p>

            {/* Logo */}
            <div className="mb-8">
              <Image 
                src="/logo.png" 
                alt="ASA McGill Logo" 
                width={144}
                height={144}
                className="w-28 h-28 md:w-36 md:h-36 mx-auto object-contain"
                priority
              />
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center gap-4 my-10">
              <div className="h-px w-16 bg-heritage-red/40" />
              <div className="flex items-center gap-1 text-heritage-red">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.4 0 2.7-.3 3.9-.8-3.1-1.8-5.2-5.2-5.2-9.2s2.1-7.4 5.2-9.2C14.7 2.3 13.4 2 12 2z"/>
                </svg>
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
                </svg>
              </div>
              <div className="h-px w-16 bg-heritage-red/40" />
            </div>

            {/* Description */}
            <p className="font-sans text-lg text-heritage-black/70 max-w-2xl mx-auto mb-12 leading-relaxed">
              Connecting Algerian students at McGill University through cultural events, 
              academic support, and community building. Celebrating our heritage while 
              building bridges for the future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/join" className="btn-primary">
                Join Our Community
              </Link>
              <Link href="/events" className="btn-outline">
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section with Community Photo */}
      <section className="py-16 bg-heritage-cream-dark">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Community Photo */}
              <div className="relative">
                <div className="relative aspect-square bg-heritage-cream border border-heritage-sand shadow-lg overflow-hidden">
                  <Image 
                    src="/events/homepage.JPG" 
                    alt="ASA McGill Community" 
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                {/* Decorative corners */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-heritage-red" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-heritage-red" />
              </div>

              {/* Text Content */}
              <div>
                <p className="subtitle-heritage mb-4">Our Mission</p>
                <h2 className="heading-heritage text-3xl md:text-4xl mb-6">
                  Preserving Culture,<br />
                  <span className="emphasis">Building Community</span>
                </h2>
                <p className="font-sans text-heritage-black/70 leading-relaxed mb-6">
                  The Algerian Students&apos; Association at McGill serves as a home away from home 
                  for Algerian students and those interested in Algerian culture. We organize 
                  cultural celebrations, academic talks, and social gatherings throughout the year.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 font-sans font-semibold text-heritage-green hover:text-heritage-green-dark transition-colors">
                  Learn more about us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      {featuredEvent && (
        <section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-12">
                <p className="subtitle-heritage mb-4">Mark Your Calendar</p>
                <h2 className="heading-heritage text-3xl md:text-4xl">
                  Upcoming <span className="emphasis">Events</span>
                </h2>
              </div>

              {/* Featured Event Card */}
              <div className="card-heritage">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Date Box */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-heritage-green text-heritage-white flex flex-col items-center justify-center">
                      <span className="text-3xl font-serif font-bold">{featuredEvent.date.day}</span>
                      <span className="text-sm uppercase tracking-wide">{featuredEvent.date.month}</span>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <p className="subtitle-heritage text-heritage-red mb-2">Featured Event</p>
                    <h3 className="font-serif text-2xl text-heritage-green mb-3">
                      {featuredEvent.title}
                    </h3>
                    <p className="font-serif italic text-lg text-heritage-black/70 mb-4">
                      {featuredEvent.subtitle}
                    </p>
                    <p className="font-sans text-heritage-black/60 mb-6">
                      {featuredEvent.description}
                    </p>
                    {featuredEvent.ticketUrl && (
                      <a 
                        href={featuredEvent.ticketUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2 px-6 inline-block"
                      >
                        Buy Your Ticket
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* View All Events Link */}
              <div className="text-center mt-10">
                <Link href="/events" className="inline-flex items-center gap-2 font-sans font-semibold text-heritage-green hover:text-heritage-green-dark transition-colors">
                  View all events
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Decorative Bottom Border */}
      <DecorativeBorder />
    </div>
  )
}
