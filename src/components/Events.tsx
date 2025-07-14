export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Events Header Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-background.jpg" 
            alt="ASA McGill Events Background" 
            className="w-full h-full object-cover"
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        
        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Events
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-8">
              Join us for exciting cultural and academic events
            </p>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Stay tuned for upcoming events, workshops, cultural celebrations, and networking opportunities 
                that bring the Algerian community together at McGill University.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            
            {/* Upcoming Events */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Upcoming Events
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Events Coming Soon
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    We're planning exciting events for the community. Check back soon for updates!
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-200">
                    <p className="text-sm text-gray-500">
                      📅 Events will be posted here
                      <br />
                      Follow us on social media for the latest updates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Past Events */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Past Events
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Event Gallery
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    Photos and highlights from our previous events will be showcased here.
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-8 border-2 border-dashed border-gray-200">
                    <p className="text-sm text-gray-500">
                      📸 Past event photos and highlights
                      <br />
                      Event gallery will be updated regularly
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 