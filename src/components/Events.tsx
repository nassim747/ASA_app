import { Calendar, MapPin, Clock } from 'lucide-react'

export default function Events() {
  // Placeholder events data
  const events = [
    {
      id: 1,
      title: "Cultural Night",
      date: "March 15, 2024",
      time: "7:00 PM",
      location: "Student Center",
      description: "Join us for an evening celebrating Algerian culture with traditional music, dance, and food.",
      category: "Cultural"
    },
    {
      id: 2,
      title: "Academic Workshop",
      date: "March 22, 2024",
      time: "2:00 PM",
      location: "Library Study Room",
      description: "Academic support session covering study strategies and exam preparation.",
      category: "Academic"
    },
    {
      id: 3,
      title: "Community Service",
      date: "March 29, 2024",
      time: "10:00 AM",
      location: "Community Center",
      description: "Volunteer opportunity to give back to the Montreal community.",
      category: "Service"
    }
  ]

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay connected with our community through exciting events and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {event.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button className="btn-primary w-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 