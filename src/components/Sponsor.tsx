import { Heart, Star, Users, Trophy } from 'lucide-react'

export default function Sponsor() {
  const sponsorshipTiers = [
    {
      name: "Bronze",
      amount: "$500",
      color: "bg-orange-100 text-orange-600",
      icon: Heart,
      benefits: [
        "Logo on event materials",
        "Social media mention",
        "Newsletter recognition"
      ]
    },
    {
      name: "Silver",
      amount: "$1,000",
      color: "bg-gray-100 text-gray-600",
      icon: Star,
      benefits: [
        "All Bronze benefits",
        "Logo on website",
        "Event speaking opportunity",
        "Booth space at events"
      ]
    },
    {
      name: "Gold",
      amount: "$2,500",
      color: "bg-yellow-100 text-yellow-600",
      icon: Trophy,
      benefits: [
        "All Silver benefits",
        "Premium logo placement",
        "Exclusive networking session",
        "Custom workshop opportunity",
        "Annual report feature"
      ]
    }
  ]

  return (
    <section id="sponsor" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sponsor Our Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partner with us to support Algerian students at McGill University and help us create lasting impact in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sponsorshipTiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className={`${tier.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-3xl font-bold text-primary-600">
                    {tier.amount}
                  </p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <div className="bg-primary-100 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      </div>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="btn-primary w-full">
                  Choose {tier.name}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why Sponsor Us?
              </h3>
              <p className="text-gray-600 text-lg mb-6">
                By sponsoring the Algerian Students Association at McGill University, you're investing in the future of talented students who will become leaders in their fields. Your support helps us:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Users className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-600">Build a stronger community of Algerian students</span>
                </li>
                <li className="flex items-start">
                  <Trophy className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-600">Provide academic and professional development opportunities</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-600">Preserve and celebrate our cultural heritage</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-6 w-6 text-primary-600 mr-3 mt-0.5" />
                  <span className="text-gray-600">Create lasting partnerships with emerging talent</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Partner With Us?
              </h4>
              <p className="text-gray-600 mb-6">
                Contact us to discuss custom sponsorship opportunities that align with your organization's goals and values.
              </p>
              <div className="space-y-4">
                <a href="#contact" className="btn-primary w-full block text-center">
                  Get In Touch
                </a>
                <a href="mailto:sponsor@asamcgill.ca" className="btn-outline w-full block text-center">
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 