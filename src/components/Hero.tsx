import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center relative">
      <div className="container text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Algerian Students
            <span className="text-primary-600"> Association</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            McGill University
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Connecting Algerian students at McGill University through culture, community, and academic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#events" className="btn-primary text-lg px-8 py-3">
              Upcoming Events
            </a>
            <a href="#about" className="btn-outline text-lg px-8 py-3">
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-600" />
      </div>
    </section>
  )
} 