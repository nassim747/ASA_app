import Image from 'next/image'
import Link from 'next/link'
import DecorativeBorder from '@/components/DecorativeBorder'

export default function Join() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="subtitle-heritage mb-6">
              Become Part of the Team
            </p>
            <h1 className="heading-heritage text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Join <span className="font-serif italic">Us</span>
            </h1>
            <p className="font-sans text-xl text-heritage-black/70 max-w-2xl mx-auto leading-relaxed">
              We recruit coordinators at the beginning of each Fall semester, in September. 
              Follow us on Instagram to stay updated on recruitment announcements!
            </p>
          </div>
        </div>
      </section>

      {/* Team Photo Section */}
      <section className="py-16 bg-heritage-cream-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Team Photo */}
            <div className="relative">
              <div className="relative aspect-video bg-heritage-cream border border-heritage-sand shadow-lg overflow-hidden">
                <Image 
                  src="/events/joinus.JPG" 
                  alt="ASA McGill Team" 
                  fill
                  sizes="(min-width: 1024px) 896px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-heritage-red" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-heritage-red" />
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="subtitle-heritage mb-4">Recruitment Process</p>
              <h2 className="heading-heritage text-3xl md:text-4xl">
                How to <span className="font-serif italic">Join</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-heritage text-center">
                <div className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center mx-auto mb-4 font-serif text-xl font-bold">
                  1
                </div>
                <h3 className="font-serif text-xl text-heritage-green mb-3">Follow Us</h3>
                <p className="font-sans text-heritage-black/70">
                  Follow @asa.mcgill on Instagram to stay updated on recruitment announcements.
                </p>
              </div>

              <div className="card-heritage text-center">
                <div className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center mx-auto mb-4 font-serif text-xl font-bold">
                  2
                </div>
                <h3 className="font-serif text-xl text-heritage-green mb-3">Apply in September</h3>
                <p className="font-sans text-heritage-black/70">
                  We open applications at the beginning of each Fall semester. Fill out the application form when it goes live.
                </p>
              </div>

              <div className="card-heritage text-center">
                <div className="w-12 h-12 bg-heritage-green text-heritage-white flex items-center justify-center mx-auto mb-4 font-serif text-xl font-bold">
                  3
                </div>
                <h3 className="font-serif text-xl text-heritage-green mb-3">Join the Team</h3>
                <p className="font-sans text-heritage-black/70">
                  Selected applicants will be contacted and welcomed to the ASA McGill team!
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <a 
                href="https://instagram.com/asa.mcgill" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Follow @asa.mcgill on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Border */}
      <DecorativeBorder />
    </div>
  )
}
