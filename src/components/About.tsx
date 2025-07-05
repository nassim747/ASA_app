import { Users, Target, Heart, Award } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Building lasting connections among Algerian students at McGill University."
    },
    {
      icon: Target,
      title: "Academic Excellence",
      description: "Supporting our members in achieving their academic goals and career aspirations."
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description: "Preserving and celebrating our rich Algerian culture and traditions."
    },
    {
      icon: Award,
      title: "Leadership",
      description: "Developing leadership skills and empowering student voices on campus."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Association
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a vibrant community of Algerian students at McGill University, 
            dedicated to academic excellence, cultural preservation, and community building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                The Algerian Students Association at McGill University serves as a bridge between 
                our homeland and our academic journey in Canada. We strive to create an inclusive 
                environment where Algerian students can thrive academically while staying connected 
                to their cultural roots.
              </p>
              <p className="text-gray-600 text-lg">
                Through various initiatives, events, and support programs, we foster a sense of 
                belonging and provide opportunities for personal and professional growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">150+</div>
                <div className="text-gray-600 mb-4">Active Members</div>
                <div className="text-4xl font-bold text-secondary-600 mb-2">25+</div>
                <div className="text-gray-600 mb-4">Events Per Year</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">5</div>
                <div className="text-gray-600">Years Established</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 