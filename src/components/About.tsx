import Image from 'next/image'
import Link from 'next/link'
import { Users, Target, Heart, Award } from 'lucide-react'
import DecorativeBorder from '@/components/DecorativeBorder'

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

const team = [
  { name: "Leila", role: "Co-President", image: "/team/Co-President1.jpg" },
  { name: "Lounes", role: "Co-President", image: "/team/Co-president2.JPG" },
  { name: "Meriem", role: "VP Internal", image: "/team/VP_Internal.JPG" },
  { name: "Maria", role: "Co-VP Events", image: "/team/Co-VP_events1.JPG" },
  { name: "Neila", role: "Co-VP Events", image: "/team/Co-VP_events2.JPG" },
  { name: "Ahmed", role: "VP Finance", image: "/team/VP_Finance.JPG" },
  { name: "Souleymane", role: "VP Sponsorship", image: "/team/VP_Sponsorship.JPG" },
  { name: "Nassim", role: "VP External", image: "/team/VP_External.JPG" },
  { name: "Leila", role: "VP Communication", image: "/team/VP_Communication.JPG" },
  { name: "Katia", role: "VP Marketing", image: "/team/VP_Marketing.JPG" },
]

export default function About() {
  return (
    <div className="min-h-screen bg-heritage-cream">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="subtitle-heritage mb-6">
              Who We Are
            </p>
            <h1 className="heading-heritage text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              About <span className="font-serif italic">Our Association</span>
            </h1>
            <p className="font-sans text-xl text-heritage-black/70 max-w-2xl mx-auto leading-relaxed">
              A vibrant community of Algerian students at McGill University, dedicated to 
              academic excellence, cultural preservation, and community building.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-heritage-cream-dark">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-heritage-green text-heritage-white flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-heritage-green mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-heritage-black/70">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                <p className="subtitle-heritage mb-4">Our Purpose</p>
                <h2 className="heading-heritage text-3xl md:text-4xl mb-6">
                  Our <span className="font-serif italic">Mission</span>
                </h2>
                <p className="font-sans text-heritage-black/70 text-lg mb-6 leading-relaxed">
                  The Algerian Students Association at McGill University serves as a bridge between 
                  our homeland and our academic journey in Canada. We strive to create an inclusive 
                  environment where Algerian students can thrive academically while staying connected 
                  to their cultural roots.
                </p>
                <p className="font-sans text-heritage-black/70 text-lg leading-relaxed">
                  Through various initiatives, events, and support programs, we foster a sense of 
                  belonging and provide opportunities for personal and professional growth.
                </p>
              </div>

              {/* Stats Card */}
              <div className="relative">
                <div className="card-heritage">
                  <p className="subtitle-heritage text-heritage-red mb-8 text-center">By The Numbers</p>
                  
                  <div className="space-y-8">
                    <div className="text-center pb-8 border-b border-heritage-sand">
                      <div className="font-serif text-5xl font-bold text-heritage-green mb-2">2024</div>
                      <div className="font-sans text-heritage-black/60 uppercase tracking-wide text-sm">Established</div>
                    </div>
                    <div className="text-center pb-8 border-b border-heritage-sand">
                      <div className="font-serif text-5xl font-bold text-heritage-red mb-2">2600+</div>
                      <div className="font-sans text-heritage-black/60 uppercase tracking-wide text-sm">Followers</div>
                    </div>
                    <div className="text-center">
                      <div className="font-serif text-5xl font-bold text-heritage-green mb-2">10+</div>
                      <div className="font-sans text-heritage-black/60 uppercase tracking-wide text-sm">Events Per Year</div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute -top-3 -left-3 w-12 h-12 border-l-2 border-t-2 border-heritage-red" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-r-2 border-b-2 border-heritage-red" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-heritage-green text-heritage-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="uppercase tracking-[0.2em] text-sm text-heritage-white/70 mb-4">
              The People Behind ASA
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Our <span className="italic">Executive Team</span>
            </h2>
            <p className="font-sans text-heritage-white/80 mb-12 max-w-lg mx-auto">
              Dedicated students working to make our community thrive.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {team.map((member, i) => (
                <div key={i} className="bg-heritage-white/10 p-4">
                  <div className="relative w-20 h-20 bg-heritage-white/20 mx-auto mb-3 overflow-hidden">
                    <Image 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <p className="font-serif text-base font-semibold">{member.name}</p>
                  <p className="font-sans text-xs text-heritage-white/70">{member.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-heritage-white text-heritage-green font-sans font-semibold py-3 px-8 hover:bg-heritage-cream transition-colors">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Border */}
      <DecorativeBorder />
    </div>
  )
}
